/**
 * Data for the internal /site-map/ page.
 *
 * Pages are read live from the WordPress REST API (public, no auth), so the
 * map is accurate the moment a page is added, moved or unpublished. Each
 * page's index/noindex state comes from the <meta name="robots"> Rank Math
 * prints in its <head> — Rank Math does not expose that flag over REST, so
 * we read the first few KB of each page's HTML in parallel and cache the
 * answer for an hour alongside the page list.
 */

const WP_ORIGIN = process.env.WP_ORIGIN || "https://creditdanny.com";
const REVALIDATE = 3600;

type WpPage = {
  id: number;
  slug: string;
  link: string;
  parent: number;
  menu_order: number;
  title: { rendered: string };
};

type WpRoot = { page_on_front?: number; page_for_posts?: number };

export type SitemapPage = {
  id: number;
  slug: string;
  title: string;
  path: string;
  noindex: boolean;
  isFront: boolean;
  children: SitemapPage[];
};

export type SitemapGroup = {
  key: string;
  title: string;
  note: string;
  pages: SitemapPage[];
  /** Number of pages including nested children. */
  count: number;
};

export type SitemapData = {
  groups: SitemapGroup[];
  total: number;
  fetchedAt: string;
};

/* ------------------------------------------------------------------------- */
/* Funnel grouping. Order here is DOM order: the CSS lays the cards out in    */
/* three flowing columns, so the first three fill column one, and so on.     */
/* Any published page not listed lands in "Other pages" (sorted by title).   */
/* ------------------------------------------------------------------------- */

const GROUPS: Array<{ key: string; title: string; note: string; slugs: string[] }> = [
  {
    key: "main",
    title: "The main site",
    note: "Everything a visitor can reach from the header.",
    slugs: ["home", "about", "team", "transformations", "plans", "get-started", "blog"],
  },
  {
    key: "blueprint",
    title: "Credit Blueprint",
    note: "The flagship programme, application through to booking, plus the mortgage-readiness track.",
    slugs: [
      "blueprint",
      "blueprint-strategy",
      "consult-calendar",
      "blueprint-application",
      "blueprint-application-received",
      "home-buying-blueprint",
    ],
  },
  {
    key: "accelerator",
    title: "Credit Accelerator",
    note: "Monthly membership, checkout and confirmation.",
    slugs: ["accelerator", "accelerator-application", "accelerator-confirmation"],
  },
  {
    key: "sponsorship",
    title: "Free credit repair",
    note: "The sponsorship programme.",
    slugs: ["sponsorship", "sponsorship-apply", "sponsorship-confirmation"],
  },
  {
    key: "mentorship",
    title: "Mentorship",
    note: "The Movement, its application and its confirmation.",
    slugs: ["mentorship", "mentorship-apply", "mentorship-confirmed"],
  },
  {
    key: "onboarding",
    title: "Onboarding and confirmations",
    note: "Where a client lands after a form, a payment or an upload.",
    slugs: ["consult-next-steps", "documents-upload", "documents-received", "form-submission-thanks"],
  },
  {
    key: "legal",
    title: "Legal",
    note: "",
    slugs: ["privacy-policy", "terms-and-conditions"],
  },
];

const OTHER = {
  key: "other",
  title: "Other pages",
  note: "Published, reachable, and not part of a funnel above. Mostly older campaign and landing pages.",
};

/** The site map itself is never listed on the site map. */
const HIDDEN_SLUGS = new Set(["site-map"]);

/* ------------------------------------------------------------------------- */

const ENTITIES: Record<string, string> = {
  "&amp;": "&", "&#038;": "&", "&#8217;": "’", "&#8216;": "‘", "&#8220;": "“",
  "&#8221;": "”", "&#8211;": "–", "&#8212;": "—", "&nbsp;": " ", "&hellip;": "…",
  "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'",
};

function decode(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/gi, (e) => ENTITIES[e] ?? e)
    .replace(/\s+/g, " ")
    .trim();
}

function pathOf(link: string, slug: string): string {
  try {
    const p = new URL(link).pathname;
    return p.endsWith("/") ? p : `${p}/`;
  } catch {
    return `/${slug}/`;
  }
}

async function wpJson<T>(path: string): Promise<T> {
  const res = await fetch(`${WP_ORIGIN}${path}`, {
    headers: { Accept: "application/json" },
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error(`WP REST ${res.status} for ${path}`);
  return res.json() as Promise<T>;
}

/** True when the page's <head> carries a robots meta containing "noindex". */
async function isNoindex(link: string): Promise<boolean> {
  try {
    const res = await fetch(link, {
      headers: { Accept: "text/html", Range: "bytes=0-65535" },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok && res.status !== 206) return false;
    const html = (await res.text()).slice(0, 200_000);
    const head = html.slice(0, html.search(/<body[\s>]/i) === -1 ? html.length : html.search(/<body[\s>]/i));
    return /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(head)
      || /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["']/i.test(head);
  } catch {
    return false;
  }
}

function countTree(pages: SitemapPage[]): number {
  return pages.reduce((n, p) => n + 1 + countTree(p.children), 0);
}

function sortByTitle(pages: SitemapPage[]): SitemapPage[] {
  return [...pages].sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }));
}

export async function getSitemapData(): Promise<SitemapData> {
  const [pages, root] = await Promise.all([
    wpJson<WpPage[]>("/wp-json/wp/v2/pages?per_page=100&status=publish&_fields=id,slug,link,parent,menu_order,title"),
    wpJson<WpRoot>("/wp-json/").catch(() => ({}) as WpRoot),
  ]);

  const visible = pages.filter((p) => !HIDDEN_SLUGS.has(p.slug));
  const flags = await Promise.all(visible.map((p) => isNoindex(p.link)));

  const nodes = new Map<number, SitemapPage>();
  visible.forEach((p, i) => {
    nodes.set(p.id, {
      id: p.id,
      slug: p.slug,
      title: decode(p.title.rendered),
      path: pathOf(p.link, p.slug),
      noindex: flags[i],
      isFront: p.id === root.page_on_front || pathOf(p.link, p.slug) === "/",
      children: [],
    });
  });

  // Nest by parent. A child whose parent is unpublished (not in the list) is
  // treated as a root so it still appears somewhere.
  const roots: SitemapPage[] = [];
  const byMenu = [...visible].sort((a, b) => a.menu_order - b.menu_order || a.title.rendered.localeCompare(b.title.rendered));
  for (const p of byMenu) {
    const node = nodes.get(p.id)!;
    const parent = p.parent ? nodes.get(p.parent) : undefined;
    if (parent) parent.children.push(node);
    else roots.push(node);
  }

  const bySlug = new Map(roots.map((n) => [n.slug, n]));
  const placed = new Set<number>();

  const groups: SitemapGroup[] = [];
  for (const g of GROUPS) {
    const list: SitemapPage[] = [];
    for (const slug of g.slugs) {
      const n = bySlug.get(slug);
      if (n) {
        list.push(n);
        placed.add(n.id);
      }
    }
    if (list.length) groups.push({ key: g.key, title: g.title, note: g.note, pages: list, count: countTree(list) });
  }

  const other = sortByTitle(roots.filter((n) => !placed.has(n.id)));
  if (other.length) groups.push({ ...OTHER, pages: other, count: countTree(other) });

  return {
    groups,
    total: countTree(roots),
    fetchedAt: new Date().toISOString(),
  };
}
