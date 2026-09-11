/**
 * Shape of a blog post as rendered by an archive card. Plain JSON so it can be
 * server-rendered, returned from /api/posts, and appended in the browser
 * without the client bundle touching the WordPress helpers.
 */
export type CardPost = {
  id: number;
  href: string;
  title: string;
  excerpt: string;
  /** Site-relative featured image (large size) or null. */
  imageLarge: string | null;
  /** Site-relative featured image (medium_large size) or null. */
  imageMedium: string | null;
  /** Category label, already uppercased. */
  label: string;
  longDate: string;
  shortDate: string;
  minutes: number;
};

/** Cards fetched per "Load more articles" click. The first page is 1 featured + 9 cards. */
export const POSTS_PER_LOAD = 9;
export const FIRST_PAGE_SIZE = POSTS_PER_LOAD + 1;

/** Archive routes this app owns. Order is the pill order. */
export const BLOG_CATEGORIES = [
  { slug: "credit-insights", name: "Credit Insights" },
  { slug: "mortgage-insights", name: "Mortgage Insights" },
  { slug: "mortgage-repair-and-prep", name: "Mortgage Repair and Prep" },
] as const;

export type BlogCategorySlug = (typeof BLOG_CATEGORIES)[number]["slug"];

export function isBlogCategorySlug(slug: string): slug is BlogCategorySlug {
  return BLOG_CATEGORIES.some((c) => c.slug === slug);
}
