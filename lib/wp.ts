const WP_ORIGIN = process.env.WP_ORIGIN || "https://creditdanny.com";
export const WP_REVALIDATE_SECONDS = 3600;

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories?: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      media_details?: {
        sizes?: Record<string, { source_url: string }>;
      };
    }>;
  };
};

export type WpCategory = {
  id: number;
  count: number;
  name: string;
  slug: string;
};

function authHeaders(): Record<string, string> {
  const user = process.env.WP_APP_USER;
  const pass = process.env.WP_APP_PASSWORD;
  if (!user || !pass) return {};
  return { Authorization: `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}` };
}

async function wpFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${WP_ORIGIN}/wp-json/wp/v2${path}`, {
    headers: { Accept: "application/json", ...authHeaders() },
    next: { revalidate: WP_REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`WP REST ${res.status} for ${path}`);
  return res.json() as Promise<T>;
}

export async function getCategoryBySlug(slug: string): Promise<WpCategory> {
  const cats = await wpFetch<WpCategory[]>(`/categories?slug=${encodeURIComponent(slug)}&_fields=id,count,name,slug`);
  if (!cats.length) throw new Error(`WP category not found: ${slug}`);
  return cats[0];
}

export async function getCategoryPosts(categoryId: number): Promise<WpPost[]> {
  return wpFetch<WpPost[]>(
    `/posts?categories=${categoryId}&per_page=100&orderby=date&order=desc&_embed=wp:featuredmedia`
  );
}

const ENTITIES: Record<string, string> = {
  "&hellip;": "…", "&amp;": "&", "&#038;": "&", "&#8217;": "’", "&#8216;": "‘",
  "&#8220;": "“", "&#8221;": "”", "&#8211;": "–", "&#8212;": "—", "&nbsp;": " ",
  "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'",
};

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/gi, (e) => ENTITIES[e] ?? e)
    .replace(/\s+/g, " ")
    .trim();
}

export function readingMinutes(contentHtml: string): number {
  const words = stripHtml(contentHtml).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

export function postPath(post: WpPost): string {
  try {
    return new URL(post.link).pathname;
  } catch {
    return `/${post.slug}/`;
  }
}

export function featuredImage(post: WpPost, size: "large" | "medium_large"): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  const url = media.media_details?.sizes?.[size]?.source_url ?? media.source_url;
  if (!url) return null;
  return url.replace(/^https:\/\/(www\.)?creditdanny\.com/, "");
}

export function longDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function shortDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/** Every published post, newest first (the site has well under 100). */
export async function getAllPosts(): Promise<WpPost[]> {
  return wpFetch<WpPost[]>(`/posts?per_page=100&orderby=date&order=desc&_embed=wp:featuredmedia`);
}

export async function getAllCategories(): Promise<WpCategory[]> {
  return wpFetch<WpCategory[]>(`/categories?per_page=100&_fields=id,count,name,slug`);
}

/* ------------------------------------------------------------------------- */
/* Paged archive fetching + card mapping (used by archives and /api/posts).   */
/* ------------------------------------------------------------------------- */

import type { CardPost } from "@/lib/blog-card";

export type PostsPage = { posts: WpPost[]; total: number };

/**
 * One page of published posts, newest first, optionally scoped to a category.
 * `total` comes from WordPress's X-WP-Total header so callers know whether
 * more remain without fetching everything.
 */
export async function getPostsPage(opts: { categoryId?: number; offset: number; perPage: number }): Promise<PostsPage> {
  const qs = new URLSearchParams({
    per_page: String(opts.perPage),
    offset: String(opts.offset),
    orderby: "date",
    order: "desc",
    _embed: "wp:featuredmedia",
  });
  if (opts.categoryId) qs.set("categories", String(opts.categoryId));
  const res = await fetch(`${WP_ORIGIN}/wp-json/wp/v2/posts?${qs}`, {
    headers: { Accept: "application/json", ...authHeaders() },
    next: { revalidate: WP_REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`WP REST ${res.status} for /posts?${qs}`);
  const posts = (await res.json()) as WpPost[];
  const total = Number(res.headers.get("x-wp-total") ?? posts.length);
  return { posts, total: Number.isFinite(total) ? total : posts.length };
}

/** Name of the post's first real category (skips "Uncategorized"). */
export function categoryLabel(post: WpPost, byId: Map<number, WpCategory>): string {
  for (const id of post.categories ?? []) {
    const cat = byId.get(id);
    if (cat && cat.slug !== "uncategorized") return cat.name;
  }
  return "Credit Insights";
}

export function toCardPost(post: WpPost, label: string): CardPost {
  return {
    id: post.id,
    href: postPath(post),
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    imageLarge: featuredImage(post, "large"),
    imageMedium: featuredImage(post, "medium_large"),
    label: label.toUpperCase(),
    longDate: longDate(post.date),
    shortDate: shortDate(post.date),
    minutes: readingMinutes(post.content.rendered),
  };
}
