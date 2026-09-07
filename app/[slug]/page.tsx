import { notFound } from "next/navigation";
import { createElement } from "react";
import BodyClass from "@/components/BodyClass";
import MenuOverlay from "@/components/shared/MenuOverlay";
import SharedHeaderTop from "@/components/shared/SharedHeaderTop";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import { getAllPostSlugs, getScrapedPost } from "@/lib/wp-post";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (/[.%]/.test(slug)) notFound();

  const post = await getScrapedPost(slug);
  if (!post) notFound();

  return (
    <>
      <BodyClass className={post.bodyClass} />
      {post.headTags.map((t, i) =>
        t.tag === "title" ? (
          <title key={i}>{t.text}</title>
        ) : (
          createElement(t.tag, { key: i, ...t.attrs })
        )
      )}
      {post.jsonLd.map((ld, i) => (
        <script key={`ld${i}`} type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: ld }} />
      ))}
      {post.styleCss && <style dangerouslySetInnerHTML={{ __html: post.styleCss }} />}

      <MenuOverlay />
      <SharedHeaderTop />

      <div dangerouslySetInnerHTML={{ __html: post.regionHtml }} />

      <SharedFooterCdPad />
    </>
  );
}
