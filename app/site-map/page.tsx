import type { Metadata } from "next";
import Link from "next/link";
import BodyClass from "@/components/BodyClass";
import "@/public/assets/css/pages/sitemap.css";
import { getSitemapData, type SitemapPage } from "@/lib/sitemap";

/** Re-read from WordPress at most once an hour (same cadence as the blog). */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Site Map | Credit Repair Expert Phoenix, AZ",
  description: "Every published Credit Danny page, grouped by funnel and nested by parent. Internal reference.",
  robots: "noindex, nofollow",
  alternates: { canonical: "https://creditdanny.com/site-map/" },
  icons: {
    icon: [
      { url: "/assets/img/heartfavicon-150x150.png", sizes: "32x32" },
      { url: "/assets/img/heartfavicon-300x300.png", sizes: "192x192" },
    ],
    apple: "/assets/img/heartfavicon-300x300.png",
  },
};

function Item({ page }: { page: SitemapPage }) {
  return (
    <li className="sm-item">
      <Link href={page.path} className="sm-link">
        <span className="sm-title">{page.title}</span>
        {page.isFront ? (
          <>
            <span className="sm-path">/</span>
            <span className="sm-tag is-home">Front page</span>
          </>
        ) : (
          <span className="sm-path">{page.path}</span>
        )}
        {page.noindex && <span className="sm-tag">noindex</span>}
      </Link>
      {page.children.length > 0 && (
        <ul>
          {page.children.map((child) => (
            <Item key={child.id} page={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default async function SiteMapPage() {
  const { groups, total } = await getSitemapData();
  const year = new Date().getFullYear();

  return (
    <>
      <BodyClass className="wp-singular page-template page-template-page-sitemap page-template-page-sitemap-php page page-id-27270464 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-sitemap eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <div className="sm-page">
        <div className="sm-top">
          <Link href="/">
            <img src="/assets/img/logo-white.png" alt="Credit Danny" />
          </Link>
        </div>

        <main className="sm-main">
          <div className="sm-intro">
            <span className="sm-eyebrow">
              <i></i> Internal reference
            </span>
            <h1 className="sm-h1">
              The Credit Danny
              <br />
              <span>Site Map</span>
            </h1>
            <p className="sm-lede">
              Every published page, grouped by funnel and nested by parent. Read live from WordPress, so it is
              accurate the moment a page is added, moved or unpublished.
            </p>
            <div className="sm-total">
              Total active pages: <span>{total}</span>
            </div>
          </div>

          <div className="sm-groups">
            {groups.map((g) => (
              <section className="sm-group" key={g.key}>
                <h2>
                  {g.title}
                  <span className="sm-count">{g.count}</span>
                </h2>
                {g.note && <p className="sm-note">{g.note}</p>}
                <ul className="sm-list">
                  {g.pages.map((p) => (
                    <Item key={p.id} page={p} />
                  ))}
                </ul>
              </section>
            ))}

            <section className="sm-group">
              <h2>
                System templates
                <span className="sm-count">2</span>
              </h2>
              <p className="sm-note">Not pages, so neither has an address of its own.</p>
              <ul className="sm-list">
                <li className="sm-item sm-plain">
                  <span className="sm-title">404</span>
                  <span className="sm-path">Shown for any address that does not resolve.</span>
                </li>
                <li className="sm-item sm-plain">
                  <span className="sm-title">Maintenance</span>
                  <span className="sm-path">Replaces the whole site while maintenance mode is on.</span>
                </li>
              </ul>
            </section>
          </div>
        </main>

        <footer className="sm-foot">
          <div>
            <span>&copy; {year} Elevate Financial Services, LLC</span>
            <span>Internal reference, not indexed</span>
          </div>
        </footer>
      </div>
    </>
  );
}
