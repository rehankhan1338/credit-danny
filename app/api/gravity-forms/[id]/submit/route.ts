import { NextRequest, NextResponse } from "next/server";


const WP_ORIGIN = process.env.WP_ORIGIN || "https://creditdanny.com";
const UA = "Mozilla/5.0 (compatible; creditdanny-next form relay)";

const FORMS: Record<string, { pagePath: string; pages: number }> = {
  "21": { pagePath: "/5kgiveaway-entry/", pages: 2 },
};

type SubmitBody = {
  inputs?: Record<string, unknown>;
  sourcePage?: number;
  targetPage?: number;
};


type FormConstants = { state: string; hidden: Record<string, string>; fetchedAt: number };
const constantsCache = new Map<string, FormConstants>();
const CONSTANTS_TTL_MS = 60 * 60 * 1000;
const HIDDEN_SUBINPUT = /^input_\d+\.\d+$/;

async function getFormConstants(formId: string, pageUrl: string): Promise<FormConstants> {
  const cached = constantsCache.get(formId);
  if (cached && Date.now() - cached.fetchedAt < CONSTANTS_TTL_MS) return cached;
  const empty: FormConstants = { state: "", hidden: {}, fetchedAt: 0 };
  try {
    const res = await fetch(pageUrl, {
      headers: { Accept: "text/html", "User-Agent": UA },
      cache: "no-store",
    });
    const html = await res.text();
    const formHtml = html.match(new RegExp(`<form[^>]+id=['"]gform_${formId}['"][\\s\\S]*?<\\/form>`))?.[0] ?? "";
    const state = formHtml.match(new RegExp(`name=['"]state_${formId}['"]\\s+value=['"]([^'"]*)['"]`))?.[1] ?? "";
    const hidden: Record<string, string> = {};
    for (const tag of formHtml.matchAll(/<input\b[^>]*\btype=['"]hidden['"][^>]*>/g)) {
      const name = tag[0].match(/\bname=['"]([^'"]+)['"]/)?.[1];
      const value = tag[0].match(/\bvalue=['"]([^'"]*)['"]/)?.[1];
      if (name && value !== undefined && HIDDEN_SUBINPUT.test(name)) hidden[name] = decodeEntities(value);
    }
    if (!state) return empty;
    const constants = { state, hidden, fetchedAt: Date.now() };
    constantsCache.set(formId, constants);
    return constants;
  } catch {
    return empty;
  }
}


function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function textOf(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function parseValidationMessages(html: string, formId: string): Record<string, string> {
  const errors: Record<string, string> = {};
  const re = new RegExp(`id=['"]validation_message_${formId}_(\\d+)['"][^>]*>([\\s\\S]*?)<\\/div>`, "g");
  for (const m of html.matchAll(re)) errors[m[1]] = textOf(m[2]);
  const flagged = new RegExp(`<(?:div|fieldset)[^>]*\\bid=['"]field_${formId}_(\\d+)['"][^>]*\\bgfield_error\\b`, "g");
  for (const m of html.matchAll(flagged)) if (!errors[m[1]]) errors[m[1]] = "Please enter a valid value.";
  return errors;
}

function parseValidationSummary(html: string): string | null {
  const m = html.match(/gform_validation_errors[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>/);
  return m ? textOf(m[1]) : null;
}

function parseSourcePage(html: string, formId: string): number | null {
  const m = html.match(new RegExp(`gform_source_page_number_${formId}['"]\\s+value=['"](\\d+)['"]`));
  return m ? Number(m[1]) : null;
}

function parseConfirmation(html: string, formId: string): { message?: string; redirect?: string } | null {
  const redirect = html.match(
    /gformRedirect\s*\(\s*\)\s*\{[^}]*?location\.href\s*=\s*["']([^"']+)["']/
  );
  if (redirect) {
    return { redirect: decodeEntities(redirect[1].replace(/\\\//g, "/")) };
  }
  const msg = html.match(
    new RegExp(`<div[^>]+id=['"]gform_confirmation_message_${formId}['"][^>]*>([\\s\\S]*?)<\\/div>`)
  );
  if (msg) return { message: textOf(msg[1]) };
  if (new RegExp(`<div[^>]+id=['"]gform_confirmation_wrapper_${formId}['"]`).test(html)) return {};
  return null;
}

function localizeUrl(url: string): string {
  try {
    const u = new URL(url, WP_ORIGIN);
    const sameSite =
      u.origin === new URL(WP_ORIGIN).origin || u.hostname.replace(/^www\./, "") === "creditdanny.com";
    if (!sameSite) return u.toString();
    let path = u.pathname;
    if (!/\.[a-z0-9]+$/i.test(path) && !path.endsWith("/")) path += "/";
    return `${path}${u.search}${u.hash}`;
  } catch {
    return url;
  }
}


const INPUT_KEY = /^input_\d+(?:[._]\d+)*(?:_data)?$/;

function clampInt(v: unknown, min: number, max: number, fallback: number): number {
  const n = typeof v === "number" ? Math.trunc(v) : Number.parseInt(String(v ?? ""), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const form = FORMS[id];
  if (!form) return NextResponse.json({ error: "Unknown form." }, { status: 404 });

  let body: SubmitBody;
  try {
    body = (await req.json()) as SubmitBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const inputs = body.inputs && typeof body.inputs === "object" ? body.inputs : {};
  const sourcePage = clampInt(body.sourcePage, 1, form.pages, 1);
  const targetPage = clampInt(body.targetPage, 0, form.pages, 0);
  const pageUrl = `${WP_ORIGIN}${form.pagePath}`;

  const fd = new FormData();
  for (const [key, value] of Object.entries(inputs)) {
    if (!INPUT_KEY.test(key)) continue;
    if (value === null || value === undefined) continue;
    fd.set(key, typeof value === "string" ? value : String(value));
  }
  fd.set("gform_submit", id);
  fd.set(`is_submit_${id}`, "1");
  fd.set(`gform_target_page_number_${id}`, String(targetPage));
  fd.set(`gform_source_page_number_${id}`, String(sourcePage));
  fd.set("gform_submission_method", "postback");
  fd.set("gform_theme", "orbital");
  fd.set("gform_style_settings", "[]");
  fd.set("gform_unique_id", "");
  fd.set("gform_field_values", "");
  const { state, hidden } = await getFormConstants(id, pageUrl);
  if (state) fd.set(`state_${id}`, state);
  for (const [name, value] of Object.entries(hidden)) fd.set(name, value);

  let res: Response;
  let html: string;
  try {
    res = await fetch(pageUrl, {
      method: "POST",
      body: fd,
      redirect: "manual",
      cache: "no-store",
      headers: {
        "User-Agent": UA,
        Accept: "text/html",
        Referer: pageUrl,
        Origin: new URL(WP_ORIGIN).origin,
      },
    });
    html = res.status >= 300 && res.status < 400 ? "" : await res.text();
  } catch {
    return NextResponse.json(
      { error: "The form server could not be reached. Please try again." },
      { status: 502 }
    );
  }

  if (res.status >= 300 && res.status < 400) {
    const location = res.headers.get("location");
    if (location) return NextResponse.json({ ok: true, complete: true, redirect: localizeUrl(location) });
    console.error("[gravity-forms relay] redirect without Location", { formId: id, status: res.status });
    return NextResponse.json({ error: "Unexpected response from the form server." }, { status: 502 });
  }
  if (!res.ok) {
    return NextResponse.json(
      { error: `The form server responded with status ${res.status}.` },
      { status: 502 }
    );
  }

  const errors = parseValidationMessages(html, id);
  const page = parseSourcePage(html, id);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors, page: page ?? sourcePage });
  }

  const confirmation = parseConfirmation(html, id);
  if (confirmation) {
    return NextResponse.json({
      ok: true,
      complete: true,
      ...(confirmation.redirect ? { redirect: localizeUrl(confirmation.redirect) } : {}),
      ...(confirmation.message ? { message: confirmation.message } : {}),
    });
  }

  if (page !== null && targetPage > 0) {
    return NextResponse.json({ ok: true, complete: false, page });
  }
  const diagnostics = {
    formId: id,
    status: res.status,
    contentType: res.headers.get("content-type"),
    length: html.length,
    title: html.match(/<title>([^<]*)<\/title>/)?.[1] ?? null,
    hasForm: new RegExp(`id=['"]gform_${id}['"]`).test(html),
    validationSummary: parseValidationSummary(html),
    errorFieldIds: [...html.matchAll(/\bgfield_error\b/g)].length,
    sourcePage: page,
    targetPage,
    stateFound: Boolean(state),
    dump: null as string | null,
  };
  if (process.env.NODE_ENV !== "production") {
    try {
      const { writeFile, mkdir } = await import("node:fs/promises");
      const { join } = await import("node:path");
      const dir = join(process.cwd(), ".next");
      await mkdir(dir, { recursive: true });
      const file = join(dir, `gf-relay-unexpected-${id}.html`);
      await writeFile(file, html);
      diagnostics.dump = file;
    } catch {
    }
  }
  console.error("[gravity-forms relay] unexpected response", diagnostics);
  const detail =
    process.env.NODE_ENV === "production"
      ? ""
      : ` (dev diagnostics: ${JSON.stringify(diagnostics)})`;
  return NextResponse.json(
    { error: `Unexpected response from the form server.${detail}`, diagnostics },
    { status: 502 }
  );
}
