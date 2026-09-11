import { NextRequest, NextResponse } from "next/server";


const HTML_TO_ROUTE: Record<string, string> = {
  "/index.html": "/",
  "/5kgiveaway-entry.html": "/5kgiveaway-entry/",
  "/5kgiveaway-confirmed.html": "/5kgiveaway-confirmed/",
  "/about.html": "/about/",
  "/accelerator.html": "/accelerator/",
  "/accelerator-application.html": "/accelerator-application/",
  "/blueprint.html": "/blueprint/",
  "/blueprint-application.html": "/blueprint-application/",
  "/blueprint-strategy.html": "/blueprint-strategy/",
  "/consult-calendar.html": "/consult-calendar/",
  "/get-started.html": "/get-started/",
  "/home-buying-blueprint.html": "/home-buying-blueprint/",
  "/mentorship.html": "/mentorship/",
  "/mentorship/apply.html": "/mentorship-apply/",
  "/mentorship/index.html": "/mentorship/",
  "/plans.html": "/plans/",
  "/privacy-policy.html": "/privacy-policy/",
  "/sponsorship.html": "/sponsorship/",
  "/sponsorship-apply.html": "/sponsorship-apply/",
  "/team.html": "/team/",
  "/terms-and-conditions.html": "/terms-and-conditions/",
  "/transformations.html": "/transformations/",
  "/accelerator-confirmation.html": "/accelerator-confirmation/",
  "/blueprint-application-received.html": "/blueprint-application-received/",
  "/consult-next-steps.html": "/consult-next-steps/",
  "/documents-received.html": "/documents-received/",
  "/documents-upload.html": "/documents-upload/",
  "/form-submission-thanks.html": "/form-submission-thanks/",
  "/mentorship-confirmed.html": "/mentorship-confirmed/",
  "/sponsorship-confirmation.html": "/sponsorship-confirmation/",
  "/credit-education.html": "/credit-education/",
  "/credit-repair.html": "/credit-repair/",
  "/5kgiveaway.html": "/5kgiveaway/",
};

const OWNED_ROUTES = new Set([
  "/",
  "/5kgiveaway-entry/",
  "/5kgiveaway-confirmed/",
  "/about/",
  "/accelerator/",
  "/accelerator-application/",
  "/blueprint/",
  "/blueprint-application/",
  "/blueprint-strategy/",
  "/consult-calendar/",
  "/get-started/",
  "/home-buying-blueprint/",
  "/mentorship/",
  "/mentorship-apply/",
  "/plans/",
  "/privacy-policy/",
  "/sponsorship/",
  "/sponsorship-apply/",
  "/team/",
  "/terms-and-conditions/",
  "/transformations/",
  "/accelerator-confirmation/",
  "/blueprint-application-received/",
  "/consult-next-steps/",
  "/documents-received/",
  "/documents-upload/",
  "/form-submission-thanks/",
  "/mentorship-confirmed/",
  "/sponsorship-confirmation/",
  "/credit-education/",
  "/credit-repair/",
  "/5kgiveaway/",
  "/category/credit-insights/",
  "/category/mortgage-insights/",
  "/category/mortgage-repair-and-prep/",
  "/blog/",
]);

function finalUrlFor(pathname: string): string | null {
  let p = pathname.toLowerCase();

  if (p.endsWith(".html/")) p = p.slice(0, -1);

  if (p.endsWith(".html")) {
    const mapped = HTML_TO_ROUTE[p];
    if (mapped) return mapped;
    if (p.endsWith("/index.html")) return p.slice(0, -"index.html".length);
    return `${p.slice(0, -".html".length)}/`;
  }

  const withSlash = p.endsWith("/") ? p : `${p}/`;
  if (p === "/mentorship/apply" || withSlash === "/mentorship/apply/") {
    return "/mentorship-apply/";
  }
  if (OWNED_ROUTES.has(withSlash) || OWNED_ROUTES.has(p)) {
    return withSlash === "//" ? "/" : withSlash;
  }
  return null;
}

const WP_ORIGIN = process.env.WP_ORIGIN || "https://creditdanny.com";
const WP_KEEP = new Set(["/feed/", "/comments/"]);
const OWNED_FILES = new Set(["/robots.txt", "/page-sitemap.xml"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/wp-") ||
    (/\.[a-zA-Z0-9]+\/?$/.test(pathname) && !/\.html\/?$/i.test(pathname))
  ) {
    const single = /^\/[^/]+\/?$/.test(pathname);
    if (single && /\./.test(pathname) && !OWNED_FILES.has(pathname) && !pathname.startsWith("/_next/")) {
      return NextResponse.rewrite(new URL(pathname + request.nextUrl.search, WP_ORIGIN));
    }
    return NextResponse.next();
  }

  const withTrailingSlash = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (WP_KEEP.has(withTrailingSlash.toLowerCase())) {
    return NextResponse.rewrite(new URL(pathname + request.nextUrl.search, WP_ORIGIN));
  }

  const hasUpper = /[A-Z]/.test(pathname);
  const isHtml = /\.html\/?$/i.test(pathname);
  if (!hasUpper && !isHtml) return NextResponse.next();

  const target = finalUrlFor(pathname);
  if (target && target !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|assets/|wp-content/|wp-includes/).*)"],
};
