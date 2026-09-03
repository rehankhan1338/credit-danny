import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import Link from "next/link";
import Script from "next/script";
import "@/public/assets/css/pages/about.css";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedHeaderTop from "@/components/shared/SharedHeaderTop";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import SharedNavElementorNavMenuMain from "@/components/shared/SharedNavElementorNavMenuMain";
import SharedNavElementorNavMenuDropdown from "@/components/shared/SharedNavElementorNavMenuDropdown";
import AboutEffects from "@/components/effects/AboutEffects";
import OttoSeo from "@/components/OttoSeo";

/** Server-side rendered on every request (SSR); blog routes stay on ISR. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  "title": "About Credit Danny | 14 Years Restoring Credit Nationwide",
  "description": "From a 16-year-old father written off by everyone to 10,000+ credit transformations. The story behind Credit Danny and Elevate Financial Services.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/about/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "article",
    "title": "About Credit Danny | 14 Years Restoring Credit Nationwide",
    "description": "From a 16-year-old father written off by everyone to 10,000+ credit transformations. The story behind Credit Danny and Elevate Financial Services.",
    "url": "https://creditdanny.com/about/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "About Credit Danny",
        "type": "image/jpeg"
      }
    ],
    "publishedTime": "2026-08-12T08:33:07-07:00"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "About Credit Danny | 14 Years Restoring Credit Nationwide",
    "description": "From a 16-year-old father written off by everyone to 10,000+ credit transformations. The story behind Credit Danny and Elevate Financial Services.",
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

export default function AboutPage() {
  return (
    <>
      <BodyClass className="wp-singular page-template page-template-page-about page-template-page-about-php page page-id-27270406 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-about eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRmFib3V0JTJGJmFtcDtfd3Bub25jZT1iZjgyNTEzOTRiIn0=" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://creditdanny.com/about/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"https://creditdanny.com\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"https://creditdanny.com/about/\",\"name\":\"About Credit Danny\"}}]},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/about/#webpage\",\"url\":\"https://creditdanny.com/about/\",\"name\":\"About Credit Danny | 14 Years Restoring Credit Nationwide\",\"datePublished\":\"2026-08-12T08:33:07-07:00\",\"dateModified\":\"2026-08-12T08:33:07-07:00\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"https://creditdanny.com/about/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/\",\"url\":\"https://creditdanny.com/author/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"About Credit Danny | 14 Years Restoring Credit Nationwide\",\"datePublished\":\"2026-08-12T08:33:07-07:00\",\"dateModified\":\"2026-08-12T08:33:07-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"From a 16-year-old father written off by everyone to 10,000+ credit transformations. The story behind Credit Danny and Elevate Financial Services.\",\"name\":\"About Credit Danny | 14 Years Restoring Credit Nationwide\",\"@id\":\"https://creditdanny.com/about/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/about/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/about/#webpage\"}}]}" }} />
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
      <div style={{ "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "overflowX": "hidden" }}>
        <section className="ab-hero-mobile" data-screen-label="Hero mobile" style={{ "position": "relative", "minHeight": "100svh", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "padding": "88px 22px 44px", "overflow": "hidden" }}>
          {" "}
          <img width="1600" height="783" loading="lazy" decoding="async" src="/assets/img/danny-stage-hero.webp" alt="Danny speaking on stage" style={{ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "66%", "objectFit": "cover", "objectPosition": "72% 12%", "display": "block" }} />
          {" "}
          <div style={{ "position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(0,0,0,.5) 0%,rgba(0,0,0,.15) 22%,rgba(0,0,0,.86) 52%,#000 68%),radial-gradient(120% 60% at 50% 100%,rgba(12,112,195,.5),rgba(0,0,0,0) 70%)", "pointerEvents": "none" }} />
          <div style={{ "position": "relative", "display": "flex", "flexDirection": "column", "gap": "22px" }}>
            <div style={{ "display": "inline-flex", "alignSelf": "flex-start", "alignItems": "center", "gap": "9px", "padding": "8px 16px", "border": "1px solid rgba(255,255,255,.22)", "borderRadius": "999px", "background": "rgba(255,255,255,.06)", "fontSize": "10px", "fontWeight": "700", "letterSpacing": ".22em", "textTransform": "uppercase", "color": "#fff" }}>
              {" "}
              <span style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "#00ADEE", "display": "block", "animation": "cd-pulse 2s ease-in-out infinite" }} />
              {"\n        About Danny\n      "}
            </div>
            <h1 style={{ "margin": "0", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px,11.5vw,54px)", "lineHeight": ".92", "letterSpacing": ".005em", "textTransform": "uppercase", "color": "#fff", "textShadow": "0 2px 22px rgba(0,0,0,.5)" }}>
              {"Extraordinary lives rise from "}
              <span style={{ "color": "#0C70C3" }}>
                {"extraordinary purpose."}
              </span>
            </h1>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "5px", "fontFamily": "var(--font-display)", "fontSize": "19px", "lineHeight": "1.14", "textTransform": "uppercase", "color": "#fff" }}>
              {" "}
              <span>
                {"From pain to purpose."}
              </span>
              {" "}
              <span>
                {"From setback to strength."}
              </span>
              {" "}
              <span style={{ "color": "#0C70C3" }}>
                {"From “not approved” to “this is your time.”"}
              </span>
              {" "}
            </div>
            <p style={{ "margin": "0", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255,255,255,.82)", "textWrap": "pretty" }}>
              {"As a father of ten, a man of faith, and a leader who rebuilt his own life from the ground up, Danny has made it his mission to empower others to break free from the weight of financial struggle and step boldly into their God-given purpose."}
            </p>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px", "marginTop": "4px" }}>
              {" "}
              <Link href="/transformations/" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "boxSizing": "border-box", "minHeight": "54px", "padding": "14px 22px", "borderRadius": "10px", "border": "1px solid #0C70C3", "background": "#0C70C3", "color": "#fff", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "letterSpacing": ".2px", "textTransform": "uppercase", "boxShadow": "0 0 18px rgba(12,112,195,.6),0 0 44px rgba(12,112,195,.3)" }}>
                {"View Credit Transformations"}
              </Link>
              {" "}
              <a href="#trust" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "boxSizing": "border-box", "minHeight": "54px", "padding": "14px 22px", "borderRadius": "10px", "border": "2px solid #fff", "background": "transparent", "color": "#fff", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "letterSpacing": ".2px", "textTransform": "uppercase" }}>
                {"Why People Trust Danny"}
              </a>
              {" "}
            </div>
          </div>
        </section>
        <section className="ab-pad ab-hero-desktop" data-screen-label="Hero" style={{ "position": "relative", "height": "100vh", "minHeight": "640px", "boxSizing": "border-box", "display": "flex", "alignItems": "flex-end", "padding": "120px 40px 90px", "overflow": "hidden" }}>
          {" "}
          <img width="1600" height="783" loading="lazy" decoding="async" src="/assets/img/danny-stage-hero.webp" alt="Danny speaking on stage" data-parallax="0.1" style={{ "position": "absolute", "top": "-6%", "left": "0px", "width": "100%", "height": "112%", "objectFit": "cover", "objectPosition": "74% 8%", "display": "block", "willChange": "transform" }} />
          {" "}
          <div style={{ "position": "absolute", "inset": "0px", "background": "linear-gradient(90deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.6) 46%, rgba(0, 0, 0, 0) 78%), linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 34%, rgba(0, 0, 0, 0.88) 100%), radial-gradient(80% 70% at 30% 112%, rgba(12, 112, 195, 0.55), rgba(0, 0, 0, 0) 64%)", "pointerEvents": "none" }} />
          <div style={{ "position": "relative", "width": "100%", "maxWidth": "1280px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "gap": "28px" }}>
            <div data-reveal="" style={{ "display": "inline-flex", "alignSelf": "flex-start", "alignItems": "center", "gap": "10px", "padding": "8px 18px", "border": "1px solid rgba(255, 255, 255, 0.2)", "borderRadius": "999px", "background": "rgba(255, 255, 255, 0.05)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "opacity": "1", "transform": "none" }}>
              {" "}
              <span style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(0, 173, 238)", "display": "block", "animation": "2s ease-in-out 0s infinite normal none running cd-pulse" }} />
              {"\n        About Danny\n      "}
            </div>
            <h1 data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "min(5.4vw, 100px)", "lineHeight": "0.9", "letterSpacing": "0.005em", "textTransform": "uppercase", "whiteSpace": "nowrap", "color": "rgb(255, 255, 255)", "textShadow": "rgba(0, 0, 0, 0.5) 0px 2px 22px", "opacity": "1", "transform": "none" }} className="ab-h1">
              {"Extraordinary lives rise from"}
              <br />
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"extraordinary purpose."}
              </span>
            </h1>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "28px", "maxWidth": "min(58vw, 640px)", "marginTop": "10px" }}>
              <p data-reveal="" style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.8", "color": "rgba(255, 255, 255, 0.82)", "textWrap": "pretty", "opacity": "1", "transform": "none" }}>
                {"As a father of ten, a man of faith, and a leader who rebuilt his own life from the ground up, Danny has made it his mission to empower others to break free from the weight of financial struggle and step boldly into their God-given purpose."}
              </p>
              <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "8px", "fontFamily": "var(--font-display)", "fontSize": "clamp(20px, 1.7vw, 28px)", "lineHeight": "1.12", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "opacity": "1", "transform": "none" }}>
                {" "}
                <span>
                  {"From pain to purpose."}
                </span>
                {" "}
                <span>
                  {"From setback to strength."}
                </span>
                {" "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"From “not approved” to “this is your time.”"}
                </span>
                {" "}
              </div>
            </div>
            <div data-reveal="" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px", "marginTop": "14px", "opacity": "1", "transform": "none" }}>
              {" "}
              <Link href="/transformations/" className="ab-scp0" style={{ "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "boxSizing": "border-box", "padding": "12px 24px", "borderRadius": "10px", "border": "1px solid rgb(12, 112, 195)", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "20px", "letterSpacing": "0.2px", "textTransform": "uppercase", "cursor": "pointer", "boxShadow": "rgba(12, 112, 195, 0.65) 0px 0px 18px, rgba(12, 112, 195, 0.35) 0px 0px 44px", "transition": "background 0.2s, color 0.2s, border-color 0.2s" }}>
                {"View Credit Transformations"}
              </Link>
              {" "}
              <a href="#trust" className="ab-scp0" style={{ "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "boxSizing": "border-box", "padding": "12px 24px", "borderRadius": "10px", "border": "2px solid rgb(255, 255, 255)", "background": "transparent", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "20px", "letterSpacing": "0.2px", "textTransform": "uppercase", "cursor": "pointer", "transition": "background 0.2s, color 0.2s, border-color 0.2s" }}>
                {"Why People Trust Danny"}
              </a>
              {" "}
            </div>
          </div>
        </section>
        <section data-screen-label="Belief" style={{ "background": "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(0, 35, 79) 55%, rgb(12, 112, 195) 100%)", "padding": "96px 40px" }} className="ab-pad">
          <div style={{ "maxWidth": "1080px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "34px", "textAlign": "center" }}>
            <p data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(28px, 3.2vw, 50px)", "lineHeight": "1.08", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "textWrap": "balance", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
              {"Danny’s movement is built on the belief that your past does not define your future. "}
              <span style={{ "color": "rgb(0, 173, 238)" }}>
                {"Your decisions do."}
              </span>
            </p>
            <div style={{ "width": "64px", "height": "2px", "background": "rgba(255, 255, 255, 0.35)" }} />
            <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "14px", "alignItems": "center", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
              {" "}
              <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.26em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.65)" }}>
                {"Danny’s calling is simple"}
              </span>
              {" "}
              <p style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(22px, 2.2vw, 34px)", "lineHeight": "1.16", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Serve God. Love people."}
                <br />
                {"Help families rebuild the life they deserve."}
              </p>
              {" "}
              <img width="800" height="356" loading="lazy" decoding="async" src="/assets/img/danny-signature_hero.png" alt="Danny signature" style={{ "width": "180px", "height": "auto", "marginTop": "12px", "filter": "brightness(0) invert(1)", "opacity": "0.9" }} />
              {" "}
            </div>
          </div>
        </section>
        <section id="story" data-screen-label="Chapter 01 Before the Blueprint" style={{ "background": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)", "padding": "110px 40px" }} className="ab-inner ab-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "210px 1fr", "gap": "56px", "alignItems": "start" }} className="ab-chapter">
            <div style={{ "position": "sticky", "top": "64px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "96px", "lineHeight": "0.8", "color": "rgb(12, 112, 195)" }}>
                {"01"}
              </span>
              {" "}
              <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "rgb(90, 90, 90)" }}>
                {"The Beginning"}
              </span>
              {" "}
              <div style={{ "width": "40px", "height": "2px", "background": "rgb(12, 112, 195)" }} />
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "34px" }}>
              <h2 data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(36px, 4.4vw, 66px)", "lineHeight": "0.96", "textTransform": "uppercase", "color": "rgb(0, 0, 0)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"Before the Blueprint"}
              </h2>
              <p data-reveal="" style={{ "margin": "0px", "maxWidth": "820px", "fontFamily": "var(--font-display)", "fontSize": "clamp(20px, 2vw, 30px)", "lineHeight": "1.2", "textTransform": "uppercase", "color": "rgb(12, 112, 195)", "textWrap": "balance", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"Danny didn’t come from wealth. He came from the struggle you may be living right now."}
              </p>
              <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "44px" }} className="ab-duo">
                <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "20px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgb(51, 51, 51)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"He didn’t grow up with money, connections, or a favorable start. He was a high school dropout, the black sheep, the one people whispered about, doubted, and quietly wrote off."}
                  </p>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"At just 16 years old, Danny became a father. He was scared, unprepared, and completely lost. No roadmap. No mentor. No plan. Just responsibility and the weight of every bad decision he’d made."}
                  </p>
                </div>
                <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "20px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <p style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(24px, 2.4vw, 38px)", "lineHeight": "1.06", "textTransform": "uppercase", "color": "rgb(0, 0, 0)" }}>
                    {"Most people expected him to fail."}
                    <br />
                    <span style={{ "color": "rgb(168, 168, 168)" }}>
                      {"And for a while… he almost did."}
                    </span>
                  </p>
                  <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgb(51, 51, 51)", "textWrap": "pretty" }}>
                    {"But that moment became the start of a bigger story. It was the moment Danny decided his past would not be the final chapter of his life."}
                  </p>
                </div>
              </div>
              <figure data-reveal="" style={{ "margin": "14px 0px 0px", "borderRadius": "25px", "overflow": "hidden", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }} className="ab-fig ab-fig-1">
                <div style={{ "position": "relative", "width": "100%", "height": "clamp(340px, 46vw, 600px)", "overflow": "hidden" }}>
                  {" "}
                  <image-slot id="chapter-01-photo" shape="rect" placeholder="Drop a photo for Chapter 01" data-filled="" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "overflow": "hidden" }}>
                    <img width="1187" height="753" loading="lazy" decoding="async" alt="Drop a photo for Chapter 01" src="/assets/img/inline-c1affd23dc.webp" data-view="1,0,-0.58431" style={{ "position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%,-50%)", "maxWidth": "none", "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 50%" }} />
                  </image-slot>
                  {" "}
                </div>
              </figure>
            </div>
          </div>
        </section>
        <section data-screen-label="Chapter 02 Pain into purpose" style={{ "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "padding": "110px 40px" }} className="ab-inner ab-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "210px 1fr", "gap": "56px", "alignItems": "start" }} className="ab-chapter">
            <div style={{ "position": "sticky", "top": "64px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "96px", "lineHeight": "0.8", "color": "rgb(12, 112, 195)" }}>
                {"02"}
              </span>
              {" "}
              <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"The Turn"}
              </span>
              {" "}
              <div style={{ "width": "40px", "height": "2px", "background": "rgb(12, 112, 195)" }} />
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "34px" }}>
              <h2 data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(36px, 4.4vw, 66px)", "lineHeight": "0.96", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"When Pain Turned "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Into Purpose"}
                </span>
              </h2>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.05fr 0.95fr", "gap": "52px", "alignItems": "start" }} className="ab-split">
                <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "20px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgba(255, 255, 255, 0.78)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"Danny was tired of being broke, tired of being stuck, and tired of feeling like his future was already written. He went searching for answers, for direction, for someone who believed he could be more."}
                  </p>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"He found mentors who challenged him, checked him, and poured into him. They taught him discipline, strategy, and the truth about money and credit that no one ever learns in school. Instead of running from his mistakes, he began learning from them. Instead of chasing quick fixes, he committed to mastery."}
                  </p>
                  <p style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(24px, 2.4vw, 40px)", "lineHeight": "1.06", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                    {"That’s when everything changed."}
                  </p>
                </div>
                <figure data-reveal="" style={{ "margin": "0px", "borderRadius": "25px", "overflow": "hidden", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }} className="ab-fig ab-fig-2">
                  <div style={{ "position": "relative", "width": "100%", "height": "clamp(300px, 34vw, 440px)", "overflow": "hidden" }}>
                    {" "}
                    <image-slot id="chapter-02-photo" shape="rect" placeholder="Drop a photo for Chapter 02" data-filled="" style={{ "position": "absolute", "inset": "0px", "width": "100%", "height": "100%" }}>
                      <img width="914" height="580" loading="lazy" decoding="async" alt="Drop a photo for Chapter 02" src="/assets/img/inline-7c206c2aa4.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 50%" }} />
                    </image-slot>
                    {" "}
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Chapter 03 Survival to movement" style={{ "background": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)", "padding": "110px 40px" }} className="ab-inner ab-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "210px 1fr", "gap": "56px", "alignItems": "start" }} className="ab-chapter">
            <div style={{ "position": "sticky", "top": "64px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "96px", "lineHeight": "0.8", "color": "rgb(12, 112, 195)" }}>
                {"03"}
              </span>
              {" "}
              <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "rgb(90, 90, 90)" }}>
                {"The Craft"}
              </span>
              {" "}
              <div style={{ "width": "40px", "height": "2px", "background": "rgb(12, 112, 195)" }} />
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "34px" }}>
              <h2 data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(36px, 4.4vw, 66px)", "lineHeight": "0.96", "textTransform": "uppercase", "color": "rgb(0, 0, 0)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"From Survival… to Mastery…"}
                <br />
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"to a Movement"}
                </span>
              </h2>
              <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "44px", "alignItems": "start" }} className="ab-duo">
                <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "20px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgb(51, 51, 51)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"Over the last 14 years, Danny has immersed himself in the credit and finance world, not from a classroom, but from the trenches."}
                  </p>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"He studied the laws. He studied the system. He studied why some people stay stuck while others break through."}
                  </p>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"What started as survival became a calling. What began as fixing his own life has grown into a movement that now helps thousands of people across the country rebuild, rise, and reclaim their future."}
                  </p>
                </div>
                <div data-reveal="" style={{ "background": "rgb(255, 255, 255)", "borderRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px", "padding": "34px 32px", "display": "flex", "flexDirection": "column", "gap": "18px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  {" "}
                  <span style={{ "fontFamily": "var(--font-display)", "fontSize": "22px", "lineHeight": "1.1", "textTransform": "uppercase", "color": "rgb(0, 0, 0)" }}>
                    {"Danny learned how to"}
                  </span>
                  {" "}
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                    <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                      <span style={{ "flex": "0 0 auto", "width": "20px", "height": "20px", "marginTop": "2px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 12.5 4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      <span style={{ "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(51, 51, 51)" }}>
                        {"Rebuild damaged credit"}
                      </span>
                    </div>
                    <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                      <span style={{ "flex": "0 0 auto", "width": "20px", "height": "20px", "marginTop": "2px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 12.5 4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      <span style={{ "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(51, 51, 51)" }}>
                        {"Legally challenge and remove inaccurate negative items"}
                      </span>
                    </div>
                    <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                      <span style={{ "flex": "0 0 auto", "width": "20px", "height": "20px", "marginTop": "2px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 12.5 4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      <span style={{ "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(51, 51, 51)" }}>
                        {"Turn credit into "}
                        <strong style={{ "color": "rgb(0, 0, 0)" }}>
                          {"leverage"}
                        </strong>
                      </span>
                    </div>
                    <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                      <span style={{ "flex": "0 0 auto", "width": "20px", "height": "20px", "marginTop": "2px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 12.5 4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      <span style={{ "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(51, 51, 51)" }}>
                        {"Use that leverage to "}
                        <strong style={{ "color": "rgb(0, 0, 0)" }}>
                          {"elevate entire lives"}
                        </strong>
                      </span>
                    </div>
                    <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                      <span style={{ "flex": "0 0 auto", "width": "20px", "height": "20px", "marginTop": "2px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 12.5 4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      <span style={{ "fontSize": "15px", "lineHeight": "1.6", "color": "rgb(51, 51, 51)" }}>
                        {"Build "}
                        <strong style={{ "color": "rgb(0, 0, 0)" }}>
                          {"generational wealth through credit"}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Founder quote" style={{ "position": "relative", "background": "rgb(0, 0, 0)", "padding": "0px", "overflow": "hidden" }}>
          <div style={{ "position": "relative", "minHeight": "78vh", "display": "flex", "alignItems": "center", "padding": "110px 40px" }} className="ab-inner">
            {" "}
            <img width="1024" height="650" loading="lazy" decoding="async" src="/assets/img/Artboard-2-copy-5-1024x650-opt.webp" alt="Danny speaking to a group" data-parallax="0.2" style={{ "position": "absolute", "top": "-14%", "left": "0px", "width": "100%", "height": "128%", "objectFit": "cover", "display": "block", "willChange": "transform" }} />
            {" "}
            <div style={{ "position": "absolute", "inset": "0px", "background": "linear-gradient(90deg, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.78) 46%, rgba(12, 112, 195, 0.35) 100%)" }} />
            <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "width": "100%", "display": "grid", "gridTemplateColumns": "1.4fr 0.6fr", "gap": "56px", "alignItems": "center" }} className="ab-split">
              <blockquote data-reveal="" style={{ "margin": "0px", "display": "flex", "flexDirection": "column", "gap": "24px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {" "}
                <svg width="52" height="40" viewBox="0 0 24 18" fill="#0C70C3">
                  <path d="M0 18V9.6C0 4.3 3.4.6 8.6 0v3.5C5.9 4.2 4.4 6 4.4 8.4h3.3V18H0Zm14.3 0V9.6c0-5.3 3.4-9 8.6-9.6v3.5c-2.7.7-4.2 2.5-4.2 4.9H22V18h-7.7Z" />
                </svg>
                {" "}
                <p style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(26px, 3.1vw, 52px)", "lineHeight": "1.04", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "textWrap": "pretty", "textShadow": "rgba(0, 0, 0, 0.7) 0px 4px 26px, rgba(0, 0, 0, 0.5) 0px 2px 6px" }}>
                  {"I went from being counted out by many… to being "}
                  <span style={{ "color": "rgb(12, 112, 195)" }}>
                    {"counted on by thousands."}
                  </span>
                  {" Now, my life’s work is to hand that blueprint to the people who were never supposed to win, and show them how to build generational wealth through credit."}
                </p>
              </blockquote>
              <div data-reveal="" style={{ "background": "linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(10, 12, 16, 0.34) 46%, rgba(6, 8, 12, 0.5))", "backdropFilter": "blur(32px) saturate(150%)", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "25px", "padding": "30px 28px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "16px", "textAlign": "center", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 24px 60px, rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(255, 255, 255, 0.06) 0px -1px 0px inset", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {" "}
                <image-slot id="founder-headshot" shape="circle" placeholder={"Drop Danny's headshot"} data-filled="" style={{ "width": "190px", "height": "190px", "borderRadius": "50%", "border": "2px solid rgba(255, 255, 255, 0.35)", "display": "block", "position": "relative", "overflow": "hidden" }}>
                  <img width="369" height="380" loading="lazy" decoding="async" alt={"Drop Danny's headshot"} src="/assets/img/inline-4ec2a3e466.webp" data-view="1,0,1.49051" style={{ "position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%,-50%)", "maxWidth": "none", "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "50%" }} />
                </image-slot>
                {" "}
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                  {" "}
                  <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                    {"Daniel Radcliffe"}
                  </span>
                  {" "}
                  <span style={{ "fontSize": "12px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                    {"CEO, Elevate Financial Services LLC"}
                  </span>
                  {" "}
                </div>
                <div style={{ "display": "flex", "gap": "2px" }}>
                  {" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFBA40">
                    <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                  </svg>
                  {" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFBA40">
                    <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                  </svg>
                  {" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFBA40">
                    <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                  </svg>
                  {" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFBA40">
                    <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                  </svg>
                  {" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFBA40">
                    <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                  </svg>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Proof stats" style={{ "background": "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(0, 35, 79) 55%, rgb(12, 112, 195) 100%)", "padding": "96px 40px" }} className="ab-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "gap": "44px" }}>
            <div data-reveal="" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "24px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }} className="ab-quad-head">
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(30px, 3.4vw, 52px)", "lineHeight": "1", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"14 Years, Measured In "}
                <span style={{ "color": "rgb(0, 173, 238)" }}>
                  {"Lives Changed"}
                </span>
              </h2>
              {" "}
              <span style={{ "fontSize": "13px", "lineHeight": "1.7", "color": "rgb(255, 255, 255)", "maxWidth": "360px" }}>
                {"Faith. Family. Service. Impact. These aren’t buzzwords. They’re the pillars of Danny’s life."}
              </span>
              {" "}
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(4, 1fr)", "gap": "20px" }} className="ab-quad">
              <div data-reveal="" className="ab-scp1" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255, 255, 255, 0.16)", "borderRadius": "18px", "padding": "30px 26px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 8px 30px", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)", "opacity": "1", "transform": "none" }}>
                {" "}
                <span data-count="14" data-suffix="+" style={{ "fontFamily": "var(--font-stat)", "fontSize": "62px", "lineHeight": "0.9", "color": "rgb(0, 173, 238)" }}>
                  {"14+"}
                </span>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontSize": "18px", "lineHeight": "1.3", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Years In The Trenches Of"}
                  <br />
                  {"Credit & Finance"}
                </span>
                {" "}
              </div>
              <div data-reveal="" className="ab-scp1" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255, 255, 255, 0.16)", "borderRadius": "18px", "padding": "30px 26px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 8px 30px", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)", "opacity": "1", "transform": "none" }}>
                {" "}
                <span data-count="1000" data-suffix="" style={{ "fontFamily": "var(--font-stat)", "fontSize": "62px", "lineHeight": "0.9", "color": "rgb(0, 173, 238)" }}>
                  {"1,000"}
                </span>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontSize": "18px", "lineHeight": "1.3", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Families Given"}
                  <br />
                  {"Free Credit Repair In 2025"}
                </span>
                {" "}
              </div>
              <div data-reveal="" className="ab-scp1" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255, 255, 255, 0.16)", "borderRadius": "18px", "padding": "30px 26px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 8px 30px", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)", "opacity": "1", "transform": "none" }}>
                {" "}
                <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "62px", "lineHeight": "0.9", "color": "rgb(0, 173, 238)" }}>
                  {"400s→700s"}
                </span>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontSize": "18px", "lineHeight": "1.3", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Score Journeys Clients Were"}
                  <br />
                  {"Told Weren’t Possible"}
                </span>
                {" "}
              </div>
              <div data-reveal="" className="ab-scp1" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255, 255, 255, 0.16)", "borderRadius": "18px", "padding": "30px 26px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 8px 30px", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)", "opacity": "1", "transform": "none" }}>
                {" "}
                <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "62px", "lineHeight": "0.9", "color": "rgb(0, 173, 238)" }}>
                  {"90-Day"}
                </span>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontSize": "18px", "lineHeight": "1.3", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Money-Back Guarantee"}
                  <br />
                  {"On Our Work"}
                </span>
                {" "}
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Chapter 04 Elevating others" style={{ "background": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)", "padding": "110px 40px" }} className="ab-inner ab-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "210px 1fr", "gap": "56px", "alignItems": "start" }} className="ab-chapter">
            <div style={{ "position": "sticky", "top": "64px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "96px", "lineHeight": "0.8", "color": "rgb(12, 112, 195)" }}>
                {"04"}
              </span>
              {" "}
              <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "rgb(90, 90, 90)" }}>
                {"The Work"}
              </span>
              {" "}
              <div style={{ "width": "40px", "height": "2px", "background": "rgb(12, 112, 195)" }} />
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "34px" }}>
              <h2 data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(36px, 4.4vw, 66px)", "lineHeight": "0.96", "textTransform": "uppercase", "color": "rgb(0, 0, 0)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"A Life Dedicated To "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Elevating Others"}
                </span>
              </h2>
              <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "44px", "alignItems": "start" }} className="ab-duo">
                <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  {" "}
                  <span style={{ "fontFamily": "var(--font-display)", "fontSize": "20px", "lineHeight": "1.1", "textTransform": "uppercase", "color": "rgb(0, 0, 0)" }}>
                    {"With over 14 years of hands-on experience, Danny has helped clients"}
                  </span>
                  {" "}
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "0px" }}>
                    <div style={{ "display": "flex", "gap": "16px", "padding": "16px 0px", "alignItems": "baseline", "borderBottom": "1px solid rgba(0, 0, 0, 0.1)" }}>
                      <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "20px", "color": "rgb(12, 112, 195)", "lineHeight": "1.7", "minWidth": "26px" }}>
                        {"01"}
                      </span>
                      <span style={{ "fontSize": "15px", "lineHeight": "1.7", "color": "rgb(51, 51, 51)" }}>
                        {"Raise their scores from the 400s and 500s into the 700s+"}
                      </span>
                    </div>
                    <div style={{ "display": "flex", "gap": "16px", "padding": "16px 0px", "alignItems": "baseline", "borderBottom": "1px solid rgba(0, 0, 0, 0.1)" }}>
                      <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "20px", "color": "rgb(12, 112, 195)", "lineHeight": "1.7", "minWidth": "26px" }}>
                        {"02"}
                      </span>
                      <span style={{ "fontSize": "15px", "lineHeight": "1.7", "color": "rgb(51, 51, 51)" }}>
                        {"Secure approvals for homes, cars, business funding, and credit lines"}
                      </span>
                    </div>
                    <div style={{ "display": "flex", "gap": "16px", "padding": "16px 0px", "alignItems": "baseline", "borderBottom": "1px solid rgba(0, 0, 0, 0.1)" }}>
                      <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "20px", "color": "rgb(12, 112, 195)", "lineHeight": "1.7", "minWidth": "26px" }}>
                        {"03"}
                      </span>
                      <span style={{ "fontSize": "15px", "lineHeight": "1.7", "color": "rgb(51, 51, 51)" }}>
                        {"Save thousands by correcting inaccurate reporting"}
                      </span>
                    </div>
                    <div style={{ "display": "flex", "gap": "16px", "padding": "16px 0px", "alignItems": "baseline" }}>
                      <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "20px", "color": "rgb(12, 112, 195)", "lineHeight": "1.7", "minWidth": "26px" }}>
                        {"04"}
                      </span>
                      <span style={{ "fontSize": "15px", "lineHeight": "1.7", "color": "rgb(51, 51, 51)" }}>
                        {"Build the financial future they once thought was out of reach"}
                      </span>
                    </div>
                  </div>
                  <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgb(51, 51, 51)", "textWrap": "pretty" }}>
                    {"From living rooms to live events, from private coaching calls to the massive Credit Summit, Danny has encouraged countless people to take back control of their financial story and step into a life full of possibility."}
                  </p>
                </div>
                <figure data-reveal="" style={{ "margin": "0px", "borderRadius": "25px", "overflow": "hidden", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }} className="ab-fig ab-fig-3">
                  <div style={{ "position": "relative", "width": "100%", "height": "clamp(320px, 40vw, 540px)", "overflow": "hidden" }}>
                    {" "}
                    <image-slot id="chapter-04-photo" shape="rect" placeholder="Drop a photo for Chapter 04" data-filled="" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "overflow": "hidden" }}>
                      <img width="546" height="970" loading="lazy" decoding="async" alt="Drop a photo for Chapter 04" src="/assets/img/inline-03240ae1fc.webp" data-view="1,0,9.58912" data-view-m="1,0,100" style={{ "position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%,-50%)", "maxWidth": "none", "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 50%" }} />
                    </image-slot>
                    {" "}
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Chapter 05 The movement" style={{ "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "padding": "110px 40px" }} className="ab-inner ab-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "210px 1fr", "gap": "56px", "alignItems": "start" }} className="ab-chapter">
            <div style={{ "position": "sticky", "top": "64px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "96px", "lineHeight": "0.8", "color": "rgb(12, 112, 195)" }}>
                {"05"}
              </span>
              {" "}
              <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"The Movement"}
              </span>
              {" "}
              <div style={{ "width": "40px", "height": "2px", "background": "rgb(12, 112, 195)" }} />
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "36px" }}>
              <h2 data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(36px, 4.4vw, 66px)", "lineHeight": "0.96", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"The Movement "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"And The Impact"}
                </span>
              </h2>
              <p data-reveal="" style={{ "margin": "0px", "maxWidth": "860px", "fontFamily": "var(--font-display)", "fontSize": "clamp(20px, 2vw, 30px)", "lineHeight": "1.2", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "textWrap": "balance", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"The comeback isn’t just Danny’s story. It’s the story of everyone he serves."}
              </p>
              <p data-reveal="" style={{ "margin": "0px", "maxWidth": "820px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"People from all walks of life have experienced breakthroughs through his work: families getting approved after years of denials, business owners leveling up, young adults securing their first real opportunity, and individuals who finally feel hope again."}
              </p>
              <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "18px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {" "}
                <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Danny’s work has become a movement rooted in"}
                </span>
                {" "}
                <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px" }}>
                  {" "}
                  <span style={{ "padding": "12px 22px", "borderRadius": "999px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "18px", "textTransform": "uppercase" }} className="ab-pill">
                    {"Personal Transformation"}
                  </span>
                  {" "}
                  <span style={{ "padding": "12px 22px", "borderRadius": "999px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "18px", "textTransform": "uppercase" }} className="ab-pill">
                    {"Financial Education"}
                  </span>
                  {" "}
                  <span style={{ "padding": "12px 22px", "borderRadius": "999px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "18px", "textTransform": "uppercase" }} className="ab-pill">
                    {"Strong Family Values"}
                  </span>
                  {" "}
                  <span style={{ "padding": "12px 22px", "borderRadius": "999px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "18px", "textTransform": "uppercase" }} className="ab-pill">
                    {"Deep Compassion"}
                  </span>
                  {" "}
                  <span style={{ "padding": "12px 22px", "borderRadius": "999px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "18px", "textTransform": "uppercase" }} className="ab-pill">
                    {"Faith-Driven Leadership"}
                  </span>
                  {" "}
                </div>
              </div>
              <figure data-reveal="" style={{ "margin": "10px 0px 0px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }} className="ab-fig ab-fig-4">
                <div style={{ "position": "relative", "width": "100%", "height": "clamp(300px, 40vw, 520px)", "overflow": "hidden", "borderRadius": "25px" }}>
                  {" "}
                  <img width="1024" height="892" loading="lazy" decoding="async" src="/assets/img/credit-summit-giveaway-1024x892-opt.webp" alt="Credit Mastery Summit group photo" data-parallax="0.14" style={{ "position": "absolute", "top": "-12%", "left": "0px", "width": "100%", "height": "124%", "objectFit": "cover", "display": "block", "willChange": "transform" }} />
                  {" "}
                </div>
                <figcaption style={{ "padding": "16px 4px 0px", "fontSize": "12px", "letterSpacing": "0.06em", "color": "rgba(255, 255, 255, 0.5)" }}>
                  {"Attendees on stage at the Credit Mastery Summit."}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section data-screen-label="Chapter 06 Living is giving" style={{ "background": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)", "padding": "110px 40px" }} className="ab-inner ab-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "210px 1fr", "gap": "56px", "alignItems": "start" }} className="ab-chapter">
            <div style={{ "position": "sticky", "top": "64px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "96px", "lineHeight": "0.8", "color": "rgb(12, 112, 195)" }}>
                {"06"}
              </span>
              {" "}
              <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "rgb(90, 90, 90)" }}>
                {"The Giving"}
              </span>
              {" "}
              <div style={{ "width": "40px", "height": "2px", "background": "rgb(12, 112, 195)" }} />
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "34px" }}>
              <h2 data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(36px, 4.4vw, 66px)", "lineHeight": "0.96", "textTransform": "uppercase", "color": "rgb(0, 0, 0)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"The Secret To Living "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Is Giving"}
                </span>
              </h2>
              <p data-reveal="" style={{ "margin": "0px", "maxWidth": "820px", "fontFamily": "var(--font-display)", "fontSize": "clamp(20px, 2vw, 30px)", "lineHeight": "1.2", "textTransform": "uppercase", "color": "rgb(12, 112, 195)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"What Danny rebuilt, he now gives away."}
              </p>
              <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "44px", "alignItems": "start" }} className="ab-duo">
                <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "20px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgb(51, 51, 51)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"He believes that your comeback becomes your contribution, and that the freedom you build is meant to lift others higher."}
                  </p>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"Danny teaches what schools never taught and what many parents never knew: how faith, discipline, and financial wisdom can reshape a family’s future. For him, wealth isn’t just money. It’s stewardship, purpose, and using what God restores to serve others."}
                  </p>
                  <p style={{ "margin": "0px", "textWrap": "pretty" }}>
                    {"Through personalized guidance, transparent strategy, and a heart for serving families, Danny built a system that goes beyond credit repair. It restores dignity, confidence, and possibility."}
                  </p>
                </div>
                <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  {" "}
                  <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(90, 90, 90)" }}>
                    {"Whether he’s"}
                  </span>
                  {" "}
                  <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "14px" }} className="ab-duo">
                    <div style={{ "background": "rgb(255, 255, 255)", "borderRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px", "padding": "22px 20px", "fontSize": "14px", "lineHeight": "1.6", "color": "rgb(51, 51, 51)" }} className="ab-giving">
                      {"Coaching a single mom toward her first home"}
                    </div>
                    <div style={{ "background": "rgb(255, 255, 255)", "borderRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px", "padding": "22px 20px", "fontSize": "14px", "lineHeight": "1.6", "color": "rgb(51, 51, 51)" }} className="ab-giving">
                      {"Praying with someone who feels hopeless"}
                    </div>
                    <div style={{ "background": "rgb(255, 255, 255)", "borderRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px", "padding": "22px 20px", "fontSize": "14px", "lineHeight": "1.6", "color": "rgb(51, 51, 51)" }} className="ab-giving">
                      {"Breaking down credit and wealth principles in a way that finally clicks"}
                    </div>
                    <div style={{ "background": "rgb(255, 255, 255)", "borderRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px", "padding": "22px 20px", "fontSize": "14px", "lineHeight": "1.6", "color": "rgb(51, 51, 51)" }} className="ab-giving">
                      {"Speaking on stage and reminding people their story isn’t over"}
                    </div>
                  </div>
                  <p style={{ "margin": "6px 0px 0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(22px, 2.2vw, 32px)", "lineHeight": "1.08", "textTransform": "uppercase", "color": "rgb(0, 0, 0)" }} className="ab-mission">
                    {"Danny’s mission remains the same: "}
                    <span style={{ "color": "rgb(12, 112, 195)" }}>
                      {"give people the tools, truth, and hope to rise."}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="2025 impact recap" style={{ "background": "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(0, 35, 79) 55%, rgb(12, 112, 195) 100%)", "padding": "100px 40px" }} className="ab-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "0.95fr 1.05fr", "gap": "64px", "alignItems": "center" }} className="ab-split ab-recap">
            <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "20px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
              {" "}
              <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.26em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"2025 Impact Recap"}
              </span>
              {" "}
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(32px, 3.8vw, 58px)", "lineHeight": "1", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"A Year Defined "}
                <span style={{ "color": "rgb(0, 173, 238)" }}>
                  {"By Service"}
                </span>
              </h2>
              <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgba(255, 255, 255, 0.8)", "textWrap": "pretty" }}>
                {"In 2025, Danny made a commitment to reach people who needed help the most, not just those who could afford it."}
              </p>
              <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgba(255, 255, 255, 0.8)", "textWrap": "pretty" }}>
                {"From everyday credit struggles to complex, high-stress cases, Danny continues to step into situations others walk away from, offering clarity, patience, and a real path forward."}
              </p>
              <p style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1.1", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Because everyone deserves a chance to rebuild."}
              </p>
            </div>
            <div data-reveal="" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255, 255, 255, 0.16)", "borderRadius": "25px", "padding": "48px 44px", "display": "flex", "flexDirection": "column", "gap": "14px", "alignItems": "flex-start", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 8px 30px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }} className="ab-recap-card">
              {" "}
              <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.6)" }}>
                {"Through a Black Friday initiative"}
              </span>
              {" "}
              <span data-count="1000" style={{ "fontFamily": "var(--font-stat)", "fontSize": "clamp(80px, 9vw, 150px)", "lineHeight": "0.82", "color": "rgb(0, 173, 238)" }}>
                {"1,000"}
              </span>
              {" "}
              <p style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(22px, 2.2vw, 32px)", "lineHeight": "1.1", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Individuals and families received"}
                <br />
                {"free credit repair support"}
              </p>
              <p style={{ "margin": "0px", "fontSize": "14px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.7)" }}>
                {"Many of them facing overwhelming financial challenges."}
              </p>
            </div>
          </div>
        </section>
        <section id="trust" data-screen-label="Why people trust" style={{ "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "padding": "110px 40px" }} className="ab-inner ab-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "400px 1fr", "gap": "56px", "alignItems": "center" }} className="ab-trust">
            {" "}
            <img width="1100" height="1121" loading="lazy" decoding="async" data-reveal="" src="/assets/img/danny_img2.webp" alt="Danny" style={{ "width": "100%", "height": "auto", "display": "block", "filter": "drop-shadow(rgba(0, 0, 0, 0.6) 0px 24px 50px)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }} />
            {" "}
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "30px" }} className="ab-trust-col">
              <h2 data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(36px, 4.4vw, 66px)", "lineHeight": "0.96", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"Why People Trust"}
                <br />
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Credit Danny"}
                </span>
              </h2>
              <p data-reveal="" style={{ "margin": "0px", "maxWidth": "640px", "fontSize": "16px", "lineHeight": "1.85", "color": "rgba(255, 255, 255, 0.75)", "textWrap": "pretty", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {"Danny saw what most people eventually learn: the credit repair industry is full of companies that overpromise, underdeliver, and put profit over people. He built Credit Danny to be the opposite."}
              </p>
              <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "0px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                <div style={{ "display": "flex", "gap": "20px", "alignItems": "baseline", "padding": "18px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.14)" }} className="ab-trustrow">
                  <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "minWidth": "230px" }}>
                    {"No Gimmicks"}
                  </span>
                  <span style={{ "fontSize": "14px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.65)" }}>
                    {"Real, law-based strategy, not sales scripts."}
                  </span>
                </div>
                <div style={{ "display": "flex", "gap": "20px", "alignItems": "baseline", "padding": "18px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.14)" }} className="ab-trustrow">
                  <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "minWidth": "230px" }}>
                    {"No Fake Guarantees"}
                  </span>
                  <span style={{ "fontSize": "14px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.65)" }}>
                    {"A 90-day money-back guarantee in writing."}
                  </span>
                </div>
                <div style={{ "display": "flex", "gap": "20px", "alignItems": "baseline", "padding": "18px 0px" }} className="ab-trustrow">
                  <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "minWidth": "230px" }}>
                    {"No Disappearing Acts"}
                  </span>
                  <span style={{ "fontSize": "14px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.65)" }}>
                    {"Integrity and transparency at every step."}
                  </span>
                </div>
              </div>
              <p data-reveal="" style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(24px, 2.6vw, 36px)", "lineHeight": "1.08", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "textWrap": "pretty", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }} className="ab-trust-quote">
                {"Your success is personal to him. You’re not a number."}
                <br />
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"You’re a life he’s committed to helping rise."}
                </span>
              </p>
              {" "}
              <Link data-reveal="" href="/transformations/" className="ab-scp0" style={{ "alignSelf": "flex-start", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "boxSizing": "border-box", "padding": "12px 24px", "borderRadius": "10px", "border": "1px solid rgb(12, 112, 195)", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "20px", "letterSpacing": "0.2px", "textTransform": "uppercase", "cursor": "pointer", "boxShadow": "rgba(12, 112, 195, 0.65) 0px 0px 18px, rgba(12, 112, 195, 0.35) 0px 0px 44px", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)", "opacity": "1", "transform": "none" }}>
                {"View Credit Transformations"}
              </Link>
              {" "}
            </div>
          </div>
        </section>
        <div style={{ "background": "rgb(12, 112, 195)", "overflow": "hidden", "padding": "14px 0px" }}>
          <div style={{ "display": "flex", "width": "200%", "animation": "24s linear 0s infinite normal none running cd-marq", "whiteSpace": "nowrap", "fontFamily": "var(--font-display)", "fontSize": "26px", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "gap": "34px" }}>
            {" "}
            <span style={{ "display": "flex", "gap": "34px" }}>
              {"Credit Danny "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Elevate Your Credit "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Elevate Your Life "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Credit Danny "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Elevate Your Credit "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Elevate Your Life "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
            </span>
            {" "}
            <span style={{ "display": "flex", "gap": "34px" }}>
              {"Credit Danny "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Elevate Your Credit "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Elevate Your Life "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Credit Danny "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Elevate Your Credit "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
              {" Elevate Your Life "}
              <span style={{ "color": "rgb(0, 35, 79)" }}>
                {"★"}
              </span>
            </span>
            {" "}
          </div>
        </div>
        <section data-screen-label="Final CTA" style={{ "position": "relative", "background": "rgb(0, 0, 0)", "overflow": "hidden" }}>
          <div style={{ "position": "relative", "minHeight": "70vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "110px 40px", "textAlign": "center" }} className="ab-inner">
            {" "}
            <img width="1600" height="1066" loading="lazy" decoding="async" src="/assets/img/danny-crowd-cta.webp" alt="" data-parallax="0.12" style={{ "position": "absolute", "top": "-8%", "left": "0px", "width": "100%", "height": "116%", "objectFit": "cover", "objectPosition": "50% 35%", "display": "block", "opacity": "1", "willChange": "transform" }} />
            {" "}
            <div style={{ "position": "absolute", "inset": "0px", "background": "radial-gradient(46% 48%, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.4) 66%, rgba(0, 0, 0, 0) 88%), linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25) 45%, rgba(0, 0, 0, 0.55))" }} />
            <div data-reveal="" style={{ "position": "relative", "maxWidth": "900px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "24px", "opacity": "1", "transform": "none", "transition": "opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" }}>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 5.4vw, 88px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "textWrap": "balance", "textShadow": "rgba(0, 0, 0, 0.75) 0px 4px 28px, rgba(0, 0, 0, 0.55) 0px 2px 6px" }} className="ab-cta-h2">
                {"Ready To Live An "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Extraordinary Life?"}
                </span>
              </h2>
              <p style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(20px, 2vw, 30px)", "lineHeight": "1.14", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "textShadow": "rgba(0, 0, 0, 0.7) 0px 2px 16px" }}>
                {"Now is your moment. Your comeback starts here."}
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "14px", "justifyContent": "center", "marginTop": "10px" }}>
                {" "}
                <Link href="/get-started/" className="ab-scp0" style={{ "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "boxSizing": "border-box", "padding": "16px 32px", "borderRadius": "10px", "border": "1px solid rgb(12, 112, 195)", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "30px", "letterSpacing": "0.2px", "textTransform": "uppercase", "cursor": "pointer", "boxShadow": "rgba(12, 112, 195, 0.65) 0px 0px 18px, rgba(12, 112, 195, 0.35) 0px 0px 44px", "transition": "background 0.2s, color 0.2s, border-color 0.2s" }}>
                  {"Begin Today"}
                </Link>
                {" "}
                <Link href="/blueprint-strategy/" className="ab-scp0" style={{ "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "boxSizing": "border-box", "padding": "16px 32px", "borderRadius": "10px", "border": "2px solid rgb(255, 255, 255)", "background": "transparent", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "30px", "letterSpacing": "0.2px", "textTransform": "uppercase", "cursor": "pointer", "transition": "background 0.2s, color 0.2s, border-color 0.2s" }}>
                  {"Book A Consultation"}
                </Link>
                {" "}
              </div>
              {" "}
              <span style={{ "marginTop": "12px", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "textShadow": "rgba(0, 0, 0, 0.7) 0px 2px 14px" }}>
                {"Elevate Your Credit. Elevate Your Life."}
              </span>
              {" "}
            </div>
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
      <AboutEffects />
      <OttoSeo />
    </>
  );
}
