import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import Link from "next/link";
import Script from "next/script";
import WistiaLoader from "@/components/WistiaLoader";
import "@/public/assets/css/pages/transformations.css";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedHeaderTop from "@/components/shared/SharedHeaderTop";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import SharedNavElementorNavMenuMain from "@/components/shared/SharedNavElementorNavMenuMain";
import SharedNavElementorNavMenuDropdown from "@/components/shared/SharedNavElementorNavMenuDropdown";
import TransformationsEffects from "@/components/effects/TransformationsEffects";
import OttoSeo from "@/components/OttoSeo";

/** Server-side rendered on every request (SSR); blog routes stay on ISR. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  "title": "Credit Transformations | Real Client Results | Credit Danny",
  "description": "Twenty real clients, in their own words. 223 to 300+ point increases, bankruptcies deleted, homes approved. See the credit transformations for yourself.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/transformations/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "article",
    "title": "Credit Transformations | Real Client Results | Credit Danny",
    "description": "Twenty real clients, in their own words. 223 to 300+ point increases, bankruptcies deleted, homes approved. See the credit transformations for yourself.",
    "url": "https://creditdanny.com/transformations/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Credit Danny Transformations",
        "type": "image/jpeg"
      }
    ],
    "publishedTime": "2026-08-12T08:33:12-07:00"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Credit Transformations | Real Client Results | Credit Danny",
    "description": "Twenty real clients, in their own words. 223 to 300+ point increases, bankruptcies deleted, homes approved. See the credit transformations for yourself.",
    "images": [
      "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/img/heartfavicon-150x150.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/img/heartfavicon-300x300.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/img/heartfavicon-300x300.png"
      }
    ]
  }
};

export const viewport = {
  themeColor: "#000000",
};

export default function TransformationsPage() {
  return (
    <>
      <BodyClass className="wp-singular page-template page-template-page-transformations page-template-page-transformations-php page page-id-27270407 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-transformations eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRnRyYW5zZm9ybWF0aW9ucyUyRiZhbXA7X3dwbm9uY2U9YmY4MjUxMzk0YiJ9" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://creditdanny.com/transformations/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"https://creditdanny.com\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"https://creditdanny.com/transformations/\",\"name\":\"Credit Danny Transformations\"}}]},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/transformations/#webpage\",\"url\":\"https://creditdanny.com/transformations/\",\"name\":\"Credit Transformations | Real Client Results | Credit Danny\",\"datePublished\":\"2026-08-12T08:33:12-07:00\",\"dateModified\":\"2026-08-12T08:33:12-07:00\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"https://creditdanny.com/transformations/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/\",\"url\":\"https://creditdanny.com/author/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"Credit Transformations | Real Client Results | Credit Danny\",\"datePublished\":\"2026-08-12T08:33:12-07:00\",\"dateModified\":\"2026-08-12T08:33:12-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"Twenty real clients, in their own words. 223 to 300+ point increases, bankruptcies deleted, homes approved. See the credit transformations for yourself.\",\"name\":\"Credit Transformations | Real Client Results | Credit Danny\",\"@id\":\"https://creditdanny.com/transformations/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/transformations/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/transformations/#webpage\"}}]}" }} />
      <WistiaLoader mediaIds={["6oep76ji10", "exfuy8rq0j", "xkx0yan67g", "sm8l88eucr", "s4s4iiz4mn", "oqbxiaeo9m", "3bcxsh9hdw", "0gol1m54c4", "gwpvhqdw4x", "4k66k2zpor", "dzczz4xm24", "27n6q03wh4", "al4xtvbod5", "pa0o32sea5", "gn41p5ay5v", "j6v0hjm7b3", "q12lwnqdgp", "7qyxpdnou7", "qkmkno3yad", "oj2jhr0m8o"]} />
      <div id="menu" style={{ "position": "fixed", "inset": "0", "zIndex": "200", "background": "linear-gradient(180deg,#000 0%,#06243f 45%,#0b3a63 100%)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "flex-start", "padding": "38px 40px 46px", "overflowY": "auto", "animation": "cd-menu-iris .62s cubic-bezier(.76,0,.24,1) both" }} data-menu-panel="">
        <button type="button" aria-label="Close menu" style={{ "position": "absolute", "top": "32px", "right": "40px", "width": "52px", "height": "52px", "borderRadius": "10px", "background": "transparent", "border": "2px solid #0C70C3", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0", "transition": "background .2s ease,border-color .2s ease", "animation": "cd-menu-close .5s cubic-bezier(.34,1.56,.64,1) .34s both" }} className="cdm-h0">
          {" "}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
          {" "}
        </button>
        <Link href="/" aria-label="Credit Danny home">
          <img width="1394" height="261" src="/assets/img/logo-white.png" alt="Credit Danny" style={{ "width": "min(760px,72vw)", "height": "auto", "display": "block", "margin": "14px 0 54px", "animation": "cd-menu-mark .6s cubic-bezier(.22,1,.36,1) .16s both" }} />
        </Link>
        <SharedNavCdmNav />
        <div style={{ "display": "flex", "alignItems": "center", "gap": "34px", "marginTop": "54px", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) .92s both" }}>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/creditdanny" aria-label="Instagram" style={{ "display": "inline-flex", "color": "#fff", "transition": "color .18s ease", "cursor": "pointer" }} className="cdm-h1">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.18a4.66 4.66 0 1 0 0 9.32 4.66 4.66 0 0 0 0-9.32Zm0 7.69a3.03 3.03 0 1 1 0-6.06 3.03 3.03 0 0 1 0 6.06Zm5.93-7.87a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0Z" />
            </svg>
          </a>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://tiktok.com/@creditdanny" aria-label="TikTok" style={{ "display": "inline-flex", "color": "#fff", "transition": "color .18s ease", "cursor": "pointer" }} className="cdm-h1">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 2h-3v13.2a2.6 2.6 0 1 1-2.1-2.55V9.6a5.7 5.7 0 1 0 5.1 5.67V8.6a6.5 6.5 0 0 0 3.9 1.3V6.8a3.6 3.6 0 0 1-3.9-3.6V2Z" />
            </svg>
          </a>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://x.com/creditdanny" aria-label="X" style={{ "display": "inline-flex", "color": "#fff", "transition": "color .18s ease", "cursor": "pointer" }} className="cdm-h1">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.3 3h3.1l-6.8 7.77L21.6 21h-6.2l-4.86-6.36L4.9 21H1.8l7.26-8.3L1.6 3h6.36l4.4 5.82L17.3 3Zm-1.09 16.1h1.72L7.3 4.8H5.46l10.75 14.3Z" />
            </svg>
          </a>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/creditdanny" aria-label="Facebook" style={{ "display": "inline-flex", "color": "#fff", "transition": "color .18s ease", "cursor": "pointer" }} className="cdm-h1">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
          {" "}
        </div>
      </div>
      <SharedHeaderTop />
      <div style={{ "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)" }}>
        <section id="top" data-screen-label="Hero" style={{ "position": "relative", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(4, 24, 44) 55%, rgb(0, 0, 0) 100%)", "padding": "64px 40px 90px", "overflow": "hidden" }} className="ct-pad">
          <div style={{ "position": "absolute", "inset": "0px", "background": "radial-gradient(70% 60% at 50% 0%, rgba(12, 112, 195, 0.34), rgba(0, 0, 0, 0) 68%)", "pointerEvents": "none" }} />
          <div style={{ "position": "relative", "maxWidth": "1000px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "26px", "textAlign": "center" }}>
            <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "9px", "padding": "8px 18px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "background": "rgba(255, 255, 255, 0.04)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }} className="ct-eyebrow">
              {" "}
              <span style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(0, 173, 238)", "display": "block", "animation": "2s ease-in-out 0s infinite normal none running cd-pulse" }} />
              {"\n        Real People. Real Results.\n      "}
            </div>
            <h1 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(46px, 6.2vw, 96px)", "lineHeight": "0.92", "letterSpacing": "0.005em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
              {"See Our Credit "}
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Transformations"}
              </span>
            </h1>
            <p style={{ "margin": "0px", "maxWidth": "none", "fontSize": "17px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)" }}>
              {"These aren't promises. They're documented outcomes from real people"}
              <br />
              {"who decided to stop guessing and start fixing."}
            </p>
            <div style={{ "display": "flex", "gap": "14px", "flexWrap": "wrap", "justifyContent": "center", "marginTop": "10px" }}>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 18px", "borderRadius": "12px", "background": "rgba(18, 18, 18, 0.55)", "backdropFilter": "blur(28px)", "border": "1px solid rgba(255, 255, 255, 0.14)" }}>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontSize": "22px", "color": "rgb(255, 255, 255)" }}>
                  {"10,000+"}
                </span>
                {" "}
                <span style={{ "fontSize": "10px", "lineHeight": "1.25", "fontWeight": "600", "color": "rgba(255, 255, 255, 0.72)", "textAlign": "left" }} className="ct-statlabel">
                  {"Clients Helped"}
                  <br />
                  {"Nationwide"}
                </span>
                {" "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 18px", "borderRadius": "12px", "background": "rgba(18, 18, 18, 0.55)", "backdropFilter": "blur(28px)", "border": "1px solid rgba(255, 255, 255, 0.14)" }}>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontSize": "22px", "color": "rgb(255, 255, 255)" }}>
                  {"$250M+"}
                </span>
                {" "}
                <span style={{ "fontSize": "10px", "lineHeight": "1.25", "fontWeight": "600", "color": "rgba(255, 255, 255, 0.72)", "textAlign": "left" }} className="ct-statlabel">
                  {"Negative Accounts"}
                  <br />
                  {"Removed"}
                </span>
                {" "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 18px", "borderRadius": "12px", "background": "rgba(18, 18, 18, 0.55)", "backdropFilter": "blur(28px)", "border": "1px solid rgba(255, 255, 255, 0.14)" }}>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontSize": "22px", "color": "rgb(255, 255, 255)" }}>
                  {"200+"}
                </span>
                {" "}
                <span style={{ "fontSize": "10px", "lineHeight": "1.25", "fontWeight": "600", "color": "rgba(255, 255, 255, 0.72)", "textAlign": "left" }} className="ct-statlabel">
                  {"5-Star"}
                  <br />
                  {"Reviews"}
                </span>
                {" "}
              </div>
            </div>
          </div>
        </section>
        <section id="stories" data-screen-label="Transformations" style={{ "position": "relative", "background": "linear-gradient(rgb(0, 0, 0), rgb(7, 21, 39) 40%, rgb(0, 0, 0))", "overflow": "hidden", "padding": "10px 0px 70px" }}>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="6oep76ji10" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Sponsorship Program Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Single Mom: "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"223 Point Increase"}
                </span>
                <br />
                {"In Under 4 Months ❤️"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She wasn't irresponsible. She was overwhelmed."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"A full-time single mom working three jobs, doing everything she could just to keep food on the table. Like so many parents, her own financial future always came after everyone else's."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She trusted another credit repair company for an entire year. Nothing changed."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Then she came to Credit Danny… In less than four months, over $10,000 in negative debt was removed, and her credit increased 223 points across all three credit bureaus."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"The biggest transformation wasn't the score. It was finally believing that her past no longer had to define her future."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Because restored credit doesn't just unlock financing. It creates opportunities, stability, and hope for families who deserve a second chance."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "64px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"She Couldn't Do It Alone… But Less Than "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"90 Days"}
                </span>
                {" Later, She Drove Home In A "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Brand-New Car"}
                </span>
                {" 🚘"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She spent years trying to rebuild her credit on her own."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She made progress, but no matter how hard she worked, the negative items from her past kept holding her back."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"After joining the Credit Blueprint, we went to work. In less than 90 days, we helped remove the negative items that had been standing in her way."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Shortly after, she walked into a dealership and drove off in a brand-new car with zero miles."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"That's the difference the right strategy and the right partner can make. You don't have to keep fighting your credit alone. Sometimes all it takes is having the right team in your corner to finally open the doors you've been praying for."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="exfuy8rq0j" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="xkx0yan67g" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"From "}
                <span style={{ "color": "rgb(195, 12, 12)" }}>
                  {"Credit Problems"}
                </span>
                {" To "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Home-Ready"}
                </span>
                {" In Under "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"90 Days"}
                </span>
                {" 🏡"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"For over 25 years, Carlos dreamed of owning a home. He tried fixing his credit on his own years ago, but like so many people, he eventually lost hope. Homeownership started to feel like something that happened for everyone else, not him."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"When he kept seeing Credit Danny success stories, he wasn't sold. He needed to see it for himself. So he drove 12 hours just to attend one of our events. He trusted the process, followed the plan, and gave us the opportunity to help."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Then life presented him with an incredible job opportunity in Nevada. The only thing standing in his way was qualifying for a home. One phone call later… He was connected with our lending partner, Vince Strange. Less than 24 hours later, Carlos was officially preapproved."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"After waiting more than two decades, the dream that once felt impossible suddenly became real. Now, instead of wondering if he'll ever own a home… He's searching for the one he'll call his own."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"His words still give us chills… \"If I got preapproved… anybody can.\" ❤️"}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Sponsorship Program Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Life "}
                <span style={{ "color": "rgb(195, 12, 12)" }}>
                  {"Hurt"}
                </span>
                {" Her Credit. Danny Helped Her Reach The "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"700 Club"}
                </span>
                <br />
                {"In 45 Days ❤️🏡"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Her dream was simple… To buy a home, give her family a place of their own, and build memories that would last a lifetime."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Then life changed overnight. At just six days old, her daughter underwent heart surgery. When you're fighting for your child's life, your credit score becomes the last thing on your mind."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She joined our sponsorship program hoping for a second chance. In less than 45 days, she went from the 600s into the 700 Club."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She never paid Credit Danny a penny. The only thing she covered was her SmartCredit membership, while our team handled everything else from start to finish."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Because that's what the sponsorship program was built for. Good people who were never held back by a lack of character… They were held back by life."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Now, she has something she hasn't had in a long time. Hope that owning a home for her family is finally within reach."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="sm8l88eucr" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="s4s4iiz4mn" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Sponsorship Program Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"120+ Point Increase…"}
                </span>
                {" Just"}
                <br />
                {"In Time To Become A Dad 🎖️🏡"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Gage found Credit Danny after watching his cousin have over $32,000 in debt removed. Seeing someone he trusted get real results gave him the confidence to take a chance on himself."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Like so many people, Gage was never taught how credit worked. No one showed him how quickly one mistake could turn into years of setbacks. He had almost accepted that his best credit days were behind him."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Then he joined the Credit Danny Sponsorship Program. In less than four months, his credit increased by 120+ points, and we're not even halfway finished."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Today, Gage is in position to use the VA home loan benefits he earned through his military service to purchase a home. And the timing couldn't be better."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"As he and his wife prepare to welcome their first baby, they're no longer wondering if homeownership is possible… They're preparing for the next chapter of their lives."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Because when you have the right team in your corner, you're not just rebuilding your credit. You're building a future for your family."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"They Thought "}
                <span style={{ "color": "rgb(195, 12, 12)" }}>
                  {"Bankruptcy"}
                </span>
                {" Would Define The Rest Of"}
                <br />
                {"Their Lives. "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"It Didn't"}
                </span>
                {" 🔥"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Leslie and Johnny weren't looking for a shortcut. They were looking for a way out."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"The weight of bankruptcy and more than $300,000 in debt made it feel like no matter how hard they worked, they could never get ahead. Every month felt like they were fighting just to stay afloat."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"That's when they decided to take a leap of faith and trust the Credit Blueprint. The results came quickly. In the first 30 days, their bankruptcy was deleted."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Then the dominoes started to fall. Over the next few weeks, 87 negative items were removed from Leslie's credit report, 57 from Johnny's, and more than $300,000 in negative debt was deleted, all in under 60 days."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"But the biggest victory wasn't the numbers. It was finally feeling like someone was fighting for them. No chasing companies for updates. No wondering what was happening behind the scenes. Just a team that handled everything from start to finish while they focused on rebuilding their lives."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Because when you have the right blueprint and the right people in your corner… Even a bankruptcy doesn't have to be the end of your story."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="oqbxiaeo9m" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="3bcxsh9hdw" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Sponsorship Program Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"One Decision"}
                </span>
                {" Changed Both Of Their Lives 🚀"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"For years, they kept putting off fixing their credit. Not because they didn't care… But because you don't always realize how important your credit is until it starts closing doors."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"When the Credit Danny Sponsorship Program opened, they decided it was finally time. They completed their enrollment, submitted their information, and let our team take it from there."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Less than 30 days later, they couldn't believe what they were seeing. His score had increased by 100+ points. He refreshed the screen over and over, convinced it had to be a mistake. Then he called his wife and told her to check hers. Another 60-point increase."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Together, they gained more than 150 points in less than 30 days."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"The best part wasn't watching the numbers go up. It was knowing the same credit that once held them back from getting approved for a place to live was no longer standing in the way of the life they wanted to build together."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Sometimes all it takes is one decision… And the right team behind it."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Sponsorship Program Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"140+ Point Credit Increase…"}
                </span>
                <br />
                {"Now She's Chasing An 850 📈"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Her credit wasn't ruined because she made reckless decisions. It started when someone she trusted used her information, setting her back before she ever had a real chance."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"For years, she watched friends and family buy homes, build wealth, and move forward, wondering if she'd ever have that same opportunity."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"When the Credit Danny Sponsorship Program opened, she didn't just believe in the process… She believed in Danny. They grew up together, attended the same church, and she had watched his journey long before the success stories. She knew the work, integrity, and heart behind everything he was building."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"In just a few months, her credit increased by more than 140 points. For the first time in her life, lenders weren't turning her away, they were reaching out with approvals and opportunities she had never experienced before."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Today, she no longer sees herself as someone with \"bad credit.\" She sees someone with a future."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"And she's not stopping here. Her next goal? An 850."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="0gol1m54c4" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="gwpvhqdw4x" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"From The Brink Of "}
                <span style={{ "color": "rgb(195, 12, 12)" }}>
                  {"Bankruptcy"}
                </span>
                {" To A "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"300-Point"}
                </span>
                {" Credit Increase"}
                <br />
                {"In Under "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"90 Days"}
                </span>
                {" 🙌"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She thought bankruptcy was her only option. The debt felt overwhelming, the stress was constant, and no matter how hard she tried, she couldn't see a way forward."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Before making one of the biggest financial decisions of her life, she spent hours watching Credit Danny success stories, hoping maybe her story could have a different ending. She took a leap of faith and joined the Credit Blueprint."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"The results came fast. In the first 30 days alone, her scores increased 143 points on TransUnion, 141 points on Experian, and 55 points on Equifax."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Less than 90 days later, she had achieved an incredible 300-point credit increase, despite being told from the beginning that a case like hers would likely take much longer."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"But the greatest transformation wasn't her credit score. It was replacing fear with confidence. Today, she's not only rebuilding her credit, she's building the financial habits to protect it for years to come."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Because restoring your credit can change your finances… But changing your mindset can change your family's future forever."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "65px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Bryan & Monica: "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"140+ Point"}
                </span>
                {" Credit Increase In "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Under 90 Days"}
                </span>
                {" 📈"}
              </h3>
              <div style={{ "display": "flex", "gap": "18px", "flexWrap": "wrap", "marginBottom": "18px" }}>
                {" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/monicahilltrejo08" className="ct-scp0" style={{ "fontSize": "14px", "fontWeight": "700", "color": "rgb(12, 112, 195)", "cursor": "pointer" }}>
                  {"@monicahilltrejo08"}
                </a>
                {" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kingdommuzicministries" className="ct-scp0" style={{ "fontSize": "14px", "fontWeight": "700", "color": "rgb(12, 112, 195)", "cursor": "pointer" }}>
                  {"@kingdommuzicministries"}
                </a>
                {" "}
              </div>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Bryan & Monica made the decision to step into the Credit Blueprint and trusted the process. For years, Monica felt hopeless when it came to her credit."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"In under 90 days… everything changed. Their scores increased over 140+ points. Medical bills that had been impacting her for years… removed. Collections holding them back… deleted."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She was shocked at what was actually possible. Strategic execution. Real results. This is what happens when you finally get the right help."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="4k66k2zpor" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="dzczz4xm24" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Vicki: "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"30+ Items Deleted"}
                </span>
                {" Skyrocketing Her Score 🚀"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"After a business deal went south, Vicki was left carrying a weight that felt impossible to escape. For years, her credit reflected that setback."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Through the Credit Blueprint, we built a case, identifying reporting errors, compliance violations, and applying pressure through the proper channels."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"30+ negative items removed from her credit. $800,000+ in bad debt deleted across all three credit bureaus. All in under 3 months."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Not luck. Not shortcuts. Just the right strategy executed the right way. A setback doesn't have to be your ending."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Sponsorship Program Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"280+ Point Increase"}
                </span>
                {" & 12 Items Deleted In 30 Days 🏆"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She spent over a year and a half with another company… and saw zero results. Then she joined Project 500."}
                </p>
                <p style={{ "margin": "0px 0px 10px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Within the first 30 days:"}
                </p>
                <ul style={{ "margin": "0px 0px 14px", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"12 negative items removed."}
                  </li>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"280+ point increase across all three credit bureaus."}
                  </li>
                </ul>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Same situation… different execution. Who you work with matters."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="27n6q03wh4" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="al4xtvbod5" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"$70,000+ In "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Student Loan Debt Deleted"}
                </span>
                {" In Under 5 Months 🎓"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Pilar came in overwhelmed. Her student loans were heavily impacting her credit and limiting her options. For a long time, it felt like something she wouldn't be able to get ahead of."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Through the Credit Blueprint, we built a legal strategy with our team, focusing on reporting accuracy, proper documentation, and holding the accounts accountable."}
                </p>
                <p style={{ "margin": "0px 0px 10px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"In under 5 months:"}
                </p>
                <ul style={{ "margin": "0px 0px 14px", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"$70,000+ removed."}
                  </li>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"Her score saw a significant increase."}
                  </li>
                </ul>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"She didn't just improve… she entered the 700 club. This is the Credit Danny difference. Real game plans, real execution, real results."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "80px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"$40,000+ Deleted"}
                </span>
                {" In"}
                <br />
                {"Under 4 Months 💪"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"He didn't find us by accident. His wife's friends had already used us and saw the results. That's what led him here."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"In under 4 months: $40,000+ removed from his credit. Same process. Same execution."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"No being passed around. No being treated like a number. Every file gets real attention."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"That's why people don't just find us. They get referred to us. That's the Credit Danny way of doing business."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="pa0o32sea5" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="gn41p5ay5v" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                <span style={{ "color": "rgb(195, 12, 12)" }}>
                  {"Denied"}
                </span>
                {" For Their Home,"}
                <br />
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Now They Have The Keys"}
                </span>
                {" 🔑"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"They were denied for the home they wanted. At first, they were skeptical, unsure if the investment would be worth it. An eviction and multiple negative items were holding them back."}
                </p>
                <p style={{ "margin": "0px 0px 10px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"They stepped into the Credit Blueprint anyway… and everything shifted. In under 60 days:"}
                </p>
                <ul style={{ "margin": "0px 0px 14px", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"Eviction removed."}
                  </li>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"Multiple negative items cleared."}
                  </li>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"Approved."}
                  </li>
                </ul>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Skeptical at first, now believers. The right partner makes the difference."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "80px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"From "}
                <span style={{ "color": "rgb(195, 12, 12)" }}>
                  {"Skeptical"}
                </span>
                {" To"}
                <br />
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"High 700's"}
                </span>
                {" 🙌"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"As a stay-at-home mom, she was beyond skeptical. She wasn't sure if this was something that would actually work for her, or if it would just be another letdown."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"It took her mom encouraging her to take a leap of faith. She finally decided to move forward. Through the Credit Blueprint, we got to work, addressing the accounts that were holding her back and building a real plan."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Repo removed. Additional negative items cleared. Her score climbed into the high 700s."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"What started with doubt… ended in a completely different outcome. That is the Credit Danny difference."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="j6v0hjm7b3" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="q12lwnqdgp" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Being A Single Mom Didn't Define Her. "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Her Results Did"}
                </span>
                {" ❤️"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Janelle is a single mom and an entrepreneur, and she knew her credit had to be right to reach the next level. She didn't let fear or skepticism hold her back."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"We sat down, identified her goals, and built a clear game plan around where she wanted to go. Then we went to work."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"In under 45 days: 100+ point increase."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"When there's a plan behind it… things move. That's the Credit Danny difference."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "66px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Rayleen & Reece Saw A "}
                <span style={{ "color": "rgb(12, 112, 195)", "fontSize": "70px" }}>
                  {"250+ Point Increase"}
                </span>
                {" In Under 90 Days 📈"}
              </h3>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rayleencook" className="ct-scp0" style={{ "display": "inline-block", "marginBottom": "18px", "fontSize": "14px", "fontWeight": "700", "color": "rgb(12, 112, 195)", "cursor": "pointer" }}>
                {"@rayleencook"}
              </a>
              {" "}
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Rayleen and her husband Reece knew one thing: their credit was either going to be a roadblock… or an asset. They chose to make it an asset."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"They teamed up with Credit Danny and built a plan around where they wanted to go. In under 90 days: 250+ point increase."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"When you get aligned and move with intention… things change fast. Power moves only."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="7qyxpdnou7" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="ct-card ct-story ct-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="qkmkno3yad" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                <span style={{ "color": "rgb(195, 12, 12)" }}>
                  {"500's"}
                </span>
                {" "}
                <span style={{ "color": "rgb(255, 255, 255)" }}>
                  {"→"}
                </span>
                {" "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"800's"}
                </span>
                {": One Decision Changed "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Everything"}
                </span>
                {" 🎯"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"He was sitting in the 500s: limited, overlooked, and stuck. He made one decision: stop guessing and get it handled the right way."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"We sat down, mapped out a real plan, and went to work on everything holding him back. In under a year: 800+ score."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"From restricted… to fully positioned. Access changed. Options changed. Life changed. All from one decision."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="ct-card ct-story ct-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Credit Blueprint Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "70px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"They Thought It Was A Scam, Now They're "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Homeowners"}
                </span>
                {" 🏠"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"At first, they didn't believe it. They thought it might be another scam… another letdown. But they still took a leap of faith."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"We showed them exactly how we operate: full transparency, clear communication, and real guidance every step of the way. Then we went to work."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"500s → 700s. Now they're not guessing anymore… they purchased their home."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Trust earned. Results delivered."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="oj2jhr0m8o" aspect="0.5625" class="ct-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="ct-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Obstacle" style={{ "position": "relative", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(3, 22, 42) 55%, rgb(0, 0, 0) 100%)", "padding": "110px 40px" }} className="ct-pad">
          <div style={{ "position": "relative", "maxWidth": "1000px", "margin": "0px auto", "textAlign": "center" }}>
            {" "}
            <span style={{ "display": "block", "marginBottom": "18px", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
              {"What Changes"}
            </span>
            {" "}
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
              {"When Your Credit"}
              <br />
              {"Stops Being The "}
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Obstacle"}
              </span>
            </h2>
          </div>
          <div style={{ "position": "relative", "maxWidth": "1200px", "margin": "56px auto 0px", "display": "grid", "gridTemplateColumns": "repeat(5, 1fr)", "gap": "20px" }} className="ct-card ct-quint">
            <div className="ct-scp1" style={{ "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "borderRadius": "25px", "padding": "34px 24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "18px", "transition": "transform 0.25s, border-color 0.25s" }}>
              {" "}
              <img width="256" height="256" loading="lazy" decoding="async" src="/assets/img/house-emoji.png" alt="" style={{ "width": "64px", "height": "64px", "objectFit": "contain", "display": "block" }} />
              {" "}
              <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                {"Finally being able to say \"yes\" when the right home comes along"}
              </p>
            </div>
            <div className="ct-scp1" style={{ "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "borderRadius": "25px", "padding": "34px 24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "18px", "transition": "transform 0.25s, border-color 0.25s" }}>
              {" "}
              <img width="256" height="256" loading="lazy" decoding="async" src="/assets/img/Car-emoji.png" alt="" style={{ "width": "64px", "height": "64px", "objectFit": "contain", "display": "block" }} />
              {" "}
              <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                {"Choosing the car you want, not settling for what you're approved for"}
              </p>
            </div>
            <div className="ct-scp1" style={{ "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "borderRadius": "25px", "padding": "34px 24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "18px", "transition": "transform 0.25s, border-color 0.25s" }}>
              {" "}
              <img width="256" height="256" loading="lazy" decoding="async" src="/assets/img/Briefcase-emoji.png" alt="" style={{ "width": "64px", "height": "64px", "objectFit": "contain", "display": "block" }} />
              {" "}
              <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                {"Accessing real funding when your business is ready to grow"}
              </p>
            </div>
            <div className="ct-scp1" style={{ "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "borderRadius": "25px", "padding": "34px 24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "18px", "transition": "transform 0.25s, border-color 0.25s" }}>
              {" "}
              <img width="300" height="300" loading="lazy" decoding="async" src="/assets/img/Money-Fly-Emoji.webp" alt="" style={{ "width": "64px", "height": "64px", "objectFit": "contain", "display": "block" }} />
              {" "}
              <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                {"Using credit as a tool, instead of it controlling your life"}
              </p>
            </div>
            <div className="ct-scp1" style={{ "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "borderRadius": "25px", "padding": "34px 24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "18px", "transition": "transform 0.25s, border-color 0.25s" }}>
              {" "}
              <img width="256" height="256" loading="lazy" decoding="async" src="/assets/img/ariplane-emoji.png" alt="" style={{ "width": "64px", "height": "64px", "objectFit": "contain", "display": "block" }} />
              {" "}
              <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                {"Using credit rewards intentionally, instead of carrying balances"}
              </p>
            </div>
          </div>
          <div style={{ "position": "relative", "maxWidth": "1000px", "margin": "64px auto 0px", "textAlign": "center" }}>
            <p style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(26px, 2.6vw, 38px)", "lineHeight": "1.15", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
              {"For most people, the difference isn't income."}
              <br />
              {"It's how their credit is structured and managed."}
            </p>
          </div>
        </section>
        <section data-screen-label="CTA" style={{ "position": "relative", "background": "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(0, 35, 79) 55%, rgb(12, 112, 195) 100%)", "padding": "100px 40px" }} className="ct-pad">
          <div style={{ "maxWidth": "900px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "28px" }}>
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
              {"Ready To"}
              <br className="ct-ctabreak" />
              {" Transform Your Credit?"}
            </h2>
            {" "}
            <Link href="/plans/" className="ct-nowrap ct-scp2" style={{ "display": "inline-flex", "alignItems": "center", "flex": "0 0 auto", "whiteSpace": "nowrap", "height": "56px", "padding": "0px 38px", "borderRadius": "10px", "border": "1px solid rgb(12, 112, 195)", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "20px", "letterSpacing": "0.04em", "textTransform": "uppercase", "boxShadow": "rgba(12, 112, 195, 0.75) 0px 0px 18px, rgba(12, 112, 195, 0.45) 0px 0px 48px, rgba(0, 0, 0, 0.35) 0px 14px 34px", "transition": "background 0.2s, color 0.2s, border-color 0.2s", "cursor": "pointer" }}>
              {"Fix My Credit Now"}
            </Link>
            {" "}
          </div>
        </section>
      </div>
      <section data-screen-label="Footer" style={{ "position": "relative", "background": "radial-gradient(120% 90% at 82% 50%, rgba(12, 112, 195, 0.32), rgba(0, 0, 0, 0) 62%), rgb(0, 0, 0)", "padding": "80px 40px", "borderTop": "1px solid rgba(255, 255, 255, 0.09)" }} className="cd-pad">
        <div style={{ "maxWidth": "1180px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "minmax(340px, 1fr) auto", "gap": "72px", "alignItems": "center" }} className="cd-endcta-grid">
          <div style={{ "display": "flex", "flexDirection": "column", "gap": "0px" }}>
            {" "}
            <a href="#top" style={{ "alignSelf": "flex-start" }}>
              <img width="1394" height="261" loading="lazy" decoding="async" src="/assets/img/logo-white.png" alt="Credit Danny" style={{ "height": "44px", "width": "auto", "display": "block" }} />
            </a>
            {" "}
            <div style={{ "height": "1px", "background": "rgba(255, 255, 255, 0.16)", "margin": "26px 0px", "maxWidth": "420px" }} />
            <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.72)", "maxWidth": "460px", "textWrap": "pretty" }}>
              {"Real strategies. Real results. Real freedom. Follow Danny for expert credit tips, client wins, and powerful financial insights every day."}
            </p>
            {" "}
            <span style={{ "margin": "34px 0px 16px", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.45)" }}>
              {"Follow Danny"}
            </span>
            {" "}
            <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/creditdanny" className="cd-hov-social" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "boxSizing": "border-box", "height": "48px", "padding": "0px 22px", "borderRadius": "10px", "border": "1px solid rgba(255, 255, 255, 0.28)", "color": "rgb(255, 255, 255)", "fontSize": "14px", "fontWeight": "600", "transition": "background 0.2s, color 0.2s, border-color 0.2s", "cursor": "pointer" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.18a4.66 4.66 0 1 0 0 9.32 4.66 4.66 0 0 0 0-9.32Zm0 7.69a3.03 3.03 0 1 1 0-6.06 3.03 3.03 0 0 1 0 6.06Zm5.93-7.87a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0Z" />
                </svg>
                {"Instagram"}
              </a>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://tiktok.com/@creditdanny" className="cd-hov-social" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "boxSizing": "border-box", "height": "48px", "padding": "0px 22px", "borderRadius": "10px", "border": "1px solid rgba(255, 255, 255, 0.28)", "color": "rgb(255, 255, 255)", "fontSize": "14px", "fontWeight": "600", "transition": "background 0.2s, color 0.2s, border-color 0.2s", "cursor": "pointer" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 2h-3v13.2a2.6 2.6 0 1 1-2.1-2.55V9.6a5.7 5.7 0 1 0 5.1 5.67V8.6a6.5 6.5 0 0 0 3.9 1.3V6.8a3.6 3.6 0 0 1-3.9-3.6V2Z" />
                </svg>
                {"TikTok"}
              </a>
              {" "}
            </div>
            <h2 style={{ "margin": "40px 0px 0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(30px, 3vw, 44px)", "lineHeight": "1.02", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
              {"Elevate Your Credit."}
              <br />
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Elevate Your Life."}
              </span>
            </h2>
            <div className="cd-address" style={{ "display": "flex", "alignItems": "flex-start", "gap": "10px", "marginTop": "30px" }}>
              {" "}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0C70C3" strokeWidth="1.8" style={{ "flex": "0 0 auto", "marginTop": "3px" }}>
                <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {" "}
              <span style={{ "fontSize": "14px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.7)" }}>
                {"2602 W Baseline Rd, Suite 30"}
                <br />
                {"Mesa, AZ 85202"}
                <br />
                {"United States"}
              </span>
              {" "}
            </div>
            <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "alignSelf": "flex-start", "marginTop": "26px", "padding": "11px 18px", "borderRadius": "12px", "border": "1px solid rgba(255, 255, 255, 0.14)", "background": "rgba(255, 255, 255, 0.04)" }}>
              {" "}
              <span style={{ "fontSize": "14px", "color": "rgb(255, 186, 64)" }}>
                {"★"}
              </span>
              {" "}
              <span style={{ "fontSize": "13px", "fontWeight": "700", "color": "rgb(255, 255, 255)" }}>
                {"5.0 Google"}
              </span>
              {" "}
              <span style={{ "color": "rgba(255, 255, 255, 0.25)" }}>
                {"|"}
              </span>
              {" "}
              <span style={{ "fontSize": "13px", "color": "rgba(255, 255, 255, 0.6)" }}>
                {"241 reviews"}
              </span>
              {" "}
            </div>
          </div>
          <div style={{ "width": "330px", "flex": "0 0 auto", "justifySelf": "center" }} className="cd-phone">
            <div style={{ "position": "relative", "borderRadius": "44px", "background": "rgb(20, 20, 22)", "padding": "11px", "boxShadow": "rgba(255, 255, 255, 0.14) 0px 0px 0px 1px, rgba(0, 0, 0, 0.65) 0px 40px 90px", "animation": "6s ease-in-out 0s infinite normal none running cd-float", "willChange": "transform" }}>
              <div style={{ "position": "relative", "borderRadius": "34px", "overflow": "hidden", "aspectRatio": "9 / 19.5", "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)" }}>
                {" "}
                <image-slot id="footer-ig-screenshot" shape="rect" placeholder="Instagram profile screenshot" data-filled="">
                  <img width="555" height="1200" loading="lazy" decoding="async" alt="Instagram profile screenshot" src="/assets/img/inline-eaa141839e.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
                {" "}
                <div style={{ "position": "absolute", "top": "12px", "left": "50%", "transform": "translateX(-50%)", "width": "96px", "height": "26px", "borderRadius": "999px", "background": "rgb(0, 0, 0)", "pointerEvents": "none" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SharedFooterCdPad />
      <div className="cd-modal" data-modal="lead-form" role="dialog" aria-modal="true" aria-label="Credit Danny Lead Form" hidden>
        <div className="cd-modal__panel">
          {" "}
          <button type="button" className="cd-modal__close" data-modal-close="" aria-label="Close">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z" />
            </svg>
          </button>
          {" "}
          <div className="elementor-element elementor-element-5dc3604 e-con-full e-flex e-con e-parent" data-id="5dc3604" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-2e755a8 elementor-widget elementor-widget-image" data-id="2e755a8" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
              {" "}
              <img loading="lazy" decoding="async" width="750" height="300" src="/assets/img/credit-danny-logo-resize.png" className="attachment-large size-large wp-image-27254577" alt="" srcSet="/assets/img/credit-danny-logo-resize.png 750w, /assets/img/credit-danny-logo-resize-300x120.png 300w, /assets/img/credit-danny-logo-resize-480x192.png 480w" sizes="(max-width: 750px) 100vw, 750px" />
              {" "}
            </div>
            <div className="elementor-element elementor-element-a247628 elementor-widget elementor-widget-html" data-id="a247628" data-element_type="widget" data-e-type="widget" data-widget_type="html.default">
              {" "}
              <iframe loading="lazy" src="https://link.creditdanny.com/widget/form/RNUcdyxyK1HmKCUT6A2X" style={{ "width": "100%", "height": "100%", "border": "none", "borderRadius": "8px" }} id="inline-RNUcdyxyK1HmKCUT6A2X" data-layout={"{'id':'INLINE'}"} data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Credit Danny Lead Form" data-height="467" data-layout-iframe-id="inline-RNUcdyxyK1HmKCUT6A2X" data-form-id="RNUcdyxyK1HmKCUT6A2X" title="Credit Danny Lead Form" />
              {" "}
              <Script src="https://link.creditdanny.com/js/form_embed.js" strategy="lazyOnload" />
              {" "}
            </div>
          </div>
        </div>
      </div>
      <div className="cd-modal cd-modal--nav" data-modal="site-menu" role="dialog" aria-modal="true" aria-label="Site navigation" hidden>
        <div className="cd-modal__panel">
          <button type="button" className="cd-modal__close" data-modal-close="" aria-label="Close">
            <svg className="cd-icon cd-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z" />
            </svg>
          </button>
          <div className="elementor-element elementor-element-335cc045 e-flex e-con-boxed e-con e-parent" data-id="335cc045" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-7c530bbf elementor-widget elementor-widget-image" data-id="7c530bbf" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                {" "}
                <Link href="/">
                  {" "}
                  <img width="1394" height="261" src="/assets/img/credit-danny-logo_white.png" className="attachment-full size-full wp-image-27262670" alt={"Text reads \"CREDIT DANNY\" in bold, white uppercase letters against a transparent background."} srcSet="/assets/img/credit-danny-logo_white.png 1394w, /assets/img/credit-danny-logo_white-300x56.png 300w, /assets/img/credit-danny-logo_white-1024x192.png 1024w, /assets/img/credit-danny-logo_white-768x144.png 768w" sizes="(max-width: 1394px) 100vw, 1394px" />
                  {" "}
                </Link>
                {" "}
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-1f1e76b e-flex e-con-boxed e-con e-parent" data-id="1f1e76b" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-c04904c elementor-align-center elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-id="c04904c" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                {" "}
                <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="/plans/">
                  {" "}
                  <span className="elementor-button-content-wrapper">
                    {" "}
                    <span className="elementor-button-text">
                      {"Get Started"}
                    </span>
                    {" "}
                  </span>
                  {" "}
                </Link>
                {" "}
              </div>
              <div className="elementor-element elementor-element-1a6d1c0 elementor-nav-menu__align-center elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu" data-id="1a6d1c0" data-element_type="widget" data-e-type="widget" data-settings={"{\"layout\":\"vertical\",\"submenu_icon\":{\"value\":\"<i class=\\\"fas fa-caret-down\\\" aria-hidden=\\\"true\\\"><\\/i>\",\"library\":\"fa-solid\"}}"} data-widget_type="nav-menu.default">
                <SharedNavElementorNavMenuMain />
                <SharedNavElementorNavMenuDropdown />
              </div>
              <div className="elementor-element elementor-element-6f357dd4 elementor-shape-circle elementor-widget-mobile__width-inherit elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="6f357dd4" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
                <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                  {" "}
                  <span className="elementor-grid-item" role="listitem">
                    {" "}
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-shrink elementor-repeater-item-c73d5a5" href="https://instagram.com/creditdanny" target="_blank">
                      {" "}
                      <span className="elementor-screen-only">
                        {"Instagram"}
                      </span>
                      {" "}
                      <svg className="cd-icon cd-icon-instagram" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </span>
                  {" "}
                  <span className="elementor-grid-item" role="listitem">
                    {" "}
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-tiktok elementor-animation-shrink elementor-repeater-item-07c69e6" href="https://tiktok.com/@creditdanny" target="_blank">
                      {" "}
                      <span className="elementor-screen-only">
                        {"Tiktok"}
                      </span>
                      {" "}
                      <svg className="cd-icon cd-icon-tiktok" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </span>
                  {" "}
                  <span className="elementor-grid-item" role="listitem">
                    {" "}
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-x-twitter elementor-animation-shrink elementor-repeater-item-e30a60b" href="https://x.com/creditdanny" target="_blank">
                      {" "}
                      <span className="elementor-screen-only">
                        {"X-twitter"}
                      </span>
                      {" "}
                      <svg className="cd-icon cd-icon-x-twitter" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </span>
                  {" "}
                  <span className="elementor-grid-item" role="listitem">
                    {" "}
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-shrink elementor-repeater-item-34f6a44" href="https://facebook.com/creditdanny" target="_blank">
                      {" "}
                      <span className="elementor-screen-only">
                        {"Facebook"}
                      </span>
                      {" "}
                      <svg className="cd-icon cd-icon-facebook" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </span>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransformationsEffects />
      <OttoSeo />
    </>
  );
}
