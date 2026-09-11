import { NextResponse, type NextRequest } from "next/server";
import { POSTS_PER_LOAD, type CardPost } from "@/lib/blog-card";
import { categoryLabel, getAllCategories, getPostsPage, toCardPost } from "@/lib/wp";

/**
 * GET /api/posts?offset=10[&category=49]
 *
 * Powers the "Load more articles" button on /blog/ and /category/<slug>/.
 * Fetches the next batch of posts from the WordPress REST API server-side
 * (so WP credentials and caching stay here) and returns card-ready JSON.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const offset = Math.max(0, Number.parseInt(searchParams.get("offset") ?? "0", 10) || 0);
  const categoryRaw = searchParams.get("category");
  const categoryId = categoryRaw ? Number.parseInt(categoryRaw, 10) : undefined;
  if (categoryRaw && (!categoryId || categoryId < 1)) {
    return NextResponse.json({ error: "invalid category" }, { status: 400 });
  }

  try {
    const [page, categories] = await Promise.all([
      getPostsPage({ categoryId, offset, perPage: POSTS_PER_LOAD }),
      getAllCategories(),
    ]);
    const byId = new Map(categories.map((c) => [c.id, c]));
    const scoped = categoryId ? byId.get(categoryId) : undefined;
    const posts: CardPost[] = page.posts.map((p) => toCardPost(p, scoped?.name ?? categoryLabel(p, byId)));
    return NextResponse.json(
      { posts, total: page.total, offset, nextOffset: offset + posts.length },
      { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
    );
  } catch (err) {
    console.error("[api/posts]", err);
    return NextResponse.json({ error: "upstream unavailable" }, { status: 502 });
  }
}
