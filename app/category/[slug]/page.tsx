import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryArchive, { categoryCanonical, categoryTitle } from "@/components/blog/CategoryArchive";
import { BLOG_CATEGORIES, FIRST_PAGE_SIZE, isBlogCategorySlug } from "@/lib/blog-card";
import { getCategoryBySlug, getPostsPage, toCardPost } from "@/lib/wp";
import "@/public/assets/css/pages/index.css";
import "../category.css";
import "@/public/assets/css/pages/blog.css";

/**
 * /category/<slug>/ — one route for every blog category. The first page of
 * posts is pulled from the WordPress REST API for the requested category, so
 * the grid changes with the pill the visitor picked; "Load more articles"
 * appends further batches through /api/posts. Unknown slugs 404.
 */
export const revalidate = 3600;
export const dynamicParams = false;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return BLOG_CATEGORIES.map(({ slug }) => ({ slug }));
}

const OG_IMAGE = "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg";

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isBlogCategorySlug(slug)) return {};
  const category = await getCategoryBySlug(slug);
  const title = categoryTitle(category);
  const canonical = categoryCanonical(slug);
  return {
    title,
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: { canonical },
    openGraph: {
      locale: "en_US",
      type: "article",
      title,
      url: canonical,
      siteName: "Credit Danny",
      images: [{ url: OG_IMAGE, secureUrl: OG_IMAGE, width: 1200, height: 630, type: "image/jpeg" }],
    },
    twitter: { card: "summary_large_image", title, images: [OG_IMAGE] },
    icons: {
      icon: [
        { url: "/assets/img/heartfavicon-150x150.png", sizes: "32x32" },
        { url: "/assets/img/heartfavicon-300x300.png", sizes: "192x192" },
      ],
      apple: [{ url: "/assets/img/heartfavicon-300x300.png" }],
    },
  };
}

export const viewport = { themeColor: "#000000" };

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (!isBlogCategorySlug(slug)) notFound();
  const category = await getCategoryBySlug(slug);
  const { posts, total } = await getPostsPage({ categoryId: category.id, offset: 0, perPage: FIRST_PAGE_SIZE });
  return <CategoryArchive category={category} posts={posts.map((p) => toCardPost(p, category.name))} total={total} />;
}
