"use client";

import { useState } from "react";
import Link from "next/link";
import { POSTS_PER_LOAD, type CardPost } from "@/lib/blog-card";

const CTA: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 750,
  textTransform: "uppercase",
  letterSpacing: 0.2,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "filter var(--duration-standard) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
  fontSize: 20,
  padding: "12px 24px",
  borderRadius: 10,
  textDecoration: "none",
  background: "transparent",
  color: "rgb(0, 0, 0)",
  border: "2px solid rgb(0, 0, 0)",
};

export function PostCard({ post }: { post: CardPost }) {
  return (
    <Link href={post.href} style={{ textDecoration: "none", color: "inherit", display: "block" }} className="cdb-card cdb-post-card">
      <div style={{ background: "rgb(255, 255, 255)", borderRadius: 25, boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px", overflow: "hidden" }}>
        <div style={{ height: 190, backgroundImage: `url(${post.imageMedium ?? ""}), linear-gradient(160deg, rgb(0, 6, 58), rgb(0, 173, 238))`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ padding: "24px 24px 28px" }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, color: "rgb(12, 112, 195)" }}>{post.label}</div>
          <div style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontSize: 25, lineHeight: 1.1, textTransform: "uppercase", color: "rgb(0, 0, 0)", marginTop: 10, textWrap: "pretty" }}>
            {post.title}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "rgb(90, 90, 90)", marginTop: 14 }}>
            <span className="cdb-long">{post.longDate} • {post.minutes} min read</span>
            <span className="cdb-short">{post.shortDate} • {post.minutes} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

type Props = {
  /** Cards already rendered on the server (the first page minus the featured post). */
  initialPosts: CardPost[];
  /** Posts consumed so far, including the featured one. Next fetch starts here. */
  initialOffset: number;
  /** Total posts in this archive, from WordPress. */
  total: number;
  /** WordPress category id, or undefined for the all-posts blog index. */
  categoryId?: number;
};

/**
 * Archive card grid + "Load more articles". Each click asks /api/posts for the
 * next batch from WordPress and appends the cards in place, so no reload and
 * no /page/2/ URL is needed.
 */
export default function PostGrid({ initialPosts, initialOffset, total, categoryId }: Props) {
  const [posts, setPosts] = useState(initialPosts);
  const [offset, setOffset] = useState(initialOffset);
  const [remaining, setRemaining] = useState(Math.max(0, total - initialOffset));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadMore() {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const qs = new URLSearchParams({ offset: String(offset) });
      if (categoryId) qs.set("category", String(categoryId));
      const res = await fetch(`/api/posts/?${qs}`, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { posts: CardPost[]; total: number; nextOffset: number };
      const seen = new Set(posts.map((p) => p.id));
      const fresh = data.posts.filter((p) => !seen.has(p.id));
      setPosts((prev) => [...prev, ...fresh]);
      setOffset(data.nextOffset);
      setRemaining(data.posts.length < POSTS_PER_LOAD ? 0 : Math.max(0, data.total - data.nextOffset));
    } catch {
      setError("Couldn't load more articles right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div id="cdb-grid" style={{ padding: "24px 60px 56px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {(remaining > 0 || error) && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "0px 0px 56px" }}>
          {remaining > 0 && (
            <button
              id="cdb-more"
              type="button"
              onClick={loadMore}
              disabled={loading}
              aria-busy={loading}
              style={{ ...CTA, opacity: loading ? 0.6 : 1, cursor: loading ? "progress" : "pointer" }}
            >
              {loading ? "Loading…" : "Load more articles"}
            </button>
          )}
          {error && (
            <div role="alert" style={{ fontSize: 14, fontWeight: 600, color: "rgb(180, 30, 30)" }}>
              {error}
            </div>
          )}
        </div>
      )}
    </>
  );
}
