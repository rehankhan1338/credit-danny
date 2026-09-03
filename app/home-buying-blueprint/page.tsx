import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import Link from "next/link";
import Script from "next/script";
import WistiaLoader from "@/components/WistiaLoader";
import "@/public/assets/css/pages/home-buying-blueprint.css";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedHeaderTop2 from "@/components/shared/SharedHeaderTop2";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import OttoSeo from "@/components/OttoSeo";
import HtmlClass from "@/components/HtmlClass";

/** Server-side rendered on every request (SSR); blog routes stay on ISR. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  "title": "The 90 Day Home Buying Blueprint | Credit Danny",
  "description": "A structured 90-day system that takes you from denied to approved: a full credit file audit, a custom approval strategy, aggressive disputes, and lender positioning.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/home-buying-blueprint/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "article",
    "title": "The 90 Day Home Buying Blueprint | Credit Danny",
    "description": "A structured 90-day system that takes you from denied to approved: a full credit file audit, a custom approval strategy, aggressive disputes, and lender positioning.",
    "url": "https://creditdanny.com/home-buying-blueprint/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "90 Day Home Buying Blueprint",
        "type": "image/jpeg"
      }
    ],
    "publishedTime": "2026-08-12T18:01:04-07:00",
    "modifiedTime": "2026-08-12T18:03:06-07:00"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "The 90 Day Home Buying Blueprint | Credit Danny",
    "description": "A structured 90-day system that takes you from denied to approved: a full credit file audit, a custom approval strategy, aggressive disputes, and lender positioning.",
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

export default function HomeBuyingBlueprintPage() {
  return (
    <>
      <BodyClass className="wp-singular page-template page-template-page-home-blueprint page-template-page-home-blueprint-php page page-id-27270422 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-home-blueprint eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <HtmlClass className="hb-js" />
      <meta property="og:updated_time" content="2026-08-12T18:03:06-07:00" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRmhvbWUtYnV5aW5nLWJsdWVwcmludCUyRiZhbXA7X3dwbm9uY2U9YmY4MjUxMzk0YiJ9" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://creditdanny.com/home-buying-blueprint/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"https://creditdanny.com\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"https://creditdanny.com/home-buying-blueprint/\",\"name\":\"90 Day Home Buying Blueprint\"}}]},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/home-buying-blueprint/#webpage\",\"url\":\"https://creditdanny.com/home-buying-blueprint/\",\"name\":\"The 90 Day Home Buying Blueprint | Credit Danny\",\"datePublished\":\"2026-08-12T18:01:04-07:00\",\"dateModified\":\"2026-08-12T18:03:06-07:00\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"https://creditdanny.com/home-buying-blueprint/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/\",\"url\":\"https://creditdanny.com/author/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"The 90 Day Home Buying Blueprint | Credit Danny\",\"datePublished\":\"2026-08-12T18:01:04-07:00\",\"dateModified\":\"2026-08-12T18:03:06-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"A structured 90-day system that takes you from denied to approved: a full credit file audit, a custom approval strategy, aggressive disputes, and lender positioning.\",\"name\":\"The 90 Day Home Buying Blueprint | Credit Danny\",\"@id\":\"https://creditdanny.com/home-buying-blueprint/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/home-buying-blueprint/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/home-buying-blueprint/#webpage\"}}]}" }} />
      <WistiaLoader mediaIds={["nxpt9nkef1", "owpki24dog", "crjkm2g3jr"]} />
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
      <SharedHeaderTop2 />
      <div id="dc-root">
        <div className="sc-host" data-sc-name="source">
          <div style={{ "background": "rgb(5, 6, 8)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-body)", "overflowX": "hidden" }}>
            <section id="hb-mobile-top" style={{ "width": "100%", "position": "relative", "overflow": "hidden", "background": "#000000", "backgroundImage": "radial-gradient(ellipse 150% 90% at 50% 100%,#0C70C3 0%,#0b62ab 10%,#09508c 19%,#08406e 28%,#062846 38%,#03192a 50%,#010a12 64%,#000000 80%)", "fontFamily": "var(--font-body)" }}>
              <div style={{ "position": "absolute", "top": "0", "left": "0", "right": "0", "height": "400px", "backgroundImage": "url(/assets/img/Gemini_Generated_Image_souwresouwresouw.webp)", "backgroundSize": "cover", "backgroundPosition": "72% center", "WebkitMaskImage": "linear-gradient(180deg,#000 0%,rgba(0,0,0,.85) 42%,rgba(0,0,0,.35) 72%,transparent 100%)", "maskImage": "linear-gradient(180deg,#000 0%,rgba(0,0,0,.85) 42%,rgba(0,0,0,.35) 72%,transparent 100%)", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "top": "0", "left": "0", "right": "0", "height": "400px", "background": "linear-gradient(180deg,rgba(3,10,20,.55) 0%,rgba(3,10,20,.2) 40%,rgba(5,6,8,.5) 100%)", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(120,190,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(120,190,255,.05) 1px,transparent 1px),linear-gradient(rgba(120,190,255,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(120,190,255,.09) 1px,transparent 1px)", "backgroundSize": "20px 20px,20px 20px,100px 100px,100px 100px", "mixBlendMode": "screen" }} />
              <div style={{ "position": "relative", "padding": "210px 24px 0", "textAlign": "center", "animation": "cdRise .7s cubic-bezier(.4,0,.2,1) both" }}>
                <div className="hb-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px", "border": "1px solid #ffffff", "borderRadius": "999px", "background": "rgba(25,25,25,.4)", "backdropFilter": "blur(24px)", "WebkitBackdropFilter": "blur(24px)", "marginBottom": "20px" }}>
                  {" "}
                  <span style={{ "width": "6px", "height": "6px", "flexShrink": "0", "borderRadius": "50%", "background": "var(--color-blue-400)", "boxShadow": "0 0 4px 1px rgba(0,173,238,.4),0 0 9px 2px rgba(0,173,238,.18)", "animation": "cdPulse 2.2s cubic-bezier(.4,0,.2,1) infinite" }} />
                  {" "}
                  <span style={{ "fontSize": "9px", "fontWeight": "700", "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"A Step-By-Step Path To Approval"}
                  </span>
                  {" "}
                </div>
                <h1 style={{ "margin": "0", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "lineHeight": ".86", "letterSpacing": "-.01em", "fontSize": "52px", "color": "#ffffff" }}>
                  {"\n      The 90 Day"}
                  <br />
                  <span style={{ "color": "var(--color-blue-600)" }}>
                    {"Home Buying"}
                    <br />
                    {"Blueprint"}
                  </span>
                  {" "}
                </h1>
                <p style={{ "margin": "20px 0 0", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "18px", "lineHeight": "1.16", "color": "#ffffff" }}>
                  {"Fix your credit, get approved, and move into your home with a proven step-by-step system"}
                  <br />
                  {"built for real results."}
                </p>
                <p style={{ "margin": "16px 0 0", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255,255,255,.82)", "textWrap": "pretty" }}>
                  {"You don’t need years to change your situation. With the right strategy, guidance, and execution, you can go from denied to approved in as little as 90 days."}
                </p>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "12px", "margin": "30px 0 40px" }}>
                  {" "}
                  <Link href="/blueprint-application/" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "18px", "letterSpacing": ".04em", "textTransform": "uppercase", "color": "#fff", "background": "#0b71c3", "border": "1px solid #ffffff", "padding": "15px 32px", "borderRadius": "14px", "display": "inline-flex", "boxShadow": "0 8px 28px rgba(11,113,195,.55),0 2px 10px rgba(11,113,195,.45)", "transition": "background 200ms cubic-bezier(.4,0,.2,1),color 200ms cubic-bezier(.4,0,.2,1),transform 200ms cubic-bezier(.4,0,.2,1)" }} style-hover="background:#ffffff;color:var(--color-blue-600);transform:translateY(-3px)">
                    {"Get Started Today"}
                  </Link>
                  {" "}
                  <span style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "rgba(255,255,255,.45)" }}>
                    {"No obligation. 100% confidential."}
                  </span>
                  {" "}
                </div>
              </div>
              <div style={{ "position": "relative", "borderTop": "1px solid rgba(255,255,255,.1)", "background": "rgba(0,0,0,.32)", "backdropFilter": "blur(8px)", "display": "grid", "gridTemplateColumns": "repeat(2,1fr)" }}>
                <div style={{ "padding": "24px 14px", "borderRight": "1px solid rgba(255,255,255,.1)", "borderBottom": "1px solid rgba(255,255,255,.1)", "textAlign": "center" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px" }}>
                    {" "}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3.2" y="4.6" width="17.6" height="16.2" rx="2.4" />
                      <path d="M3.2 9.4h17.6" />
                      <path d="M8 2.8v3.4" />
                      <path d="M16 2.8v3.4" />
                    </svg>
                    {" "}
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "34px", "lineHeight": "1", "color": "#fff" }}>
                      {"90 Days"}
                    </div>
                  </div>
                  <div style={{ "marginTop": "6px", "fontSize": "10px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"Structured Timeline"}
                  </div>
                </div>
                <div style={{ "padding": "24px 14px", "borderBottom": "1px solid rgba(255,255,255,.1)", "textAlign": "center" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px" }}>
                    {" "}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="8.8" />
                      <path d="M12 7.2V12l3.2 2" />
                    </svg>
                    {" "}
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "34px", "lineHeight": "1", "color": "#fff" }}>
                      {"24 Hours"}
                    </div>
                  </div>
                  <div style={{ "marginTop": "6px", "fontSize": "10px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"Pre-Approval Turnaround"}
                  </div>
                </div>
                <div style={{ "padding": "24px 14px", "borderRight": "1px solid rgba(255,255,255,.1)", "textAlign": "center" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px" }}>
                    {" "}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.4 10.6 12 3.6l8.6 7" />
                      <path d="M5.6 12.4V20h12.8v-7.6" />
                      <path d="M10 20v-4.6h4V20" />
                    </svg>
                    {" "}
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "34px", "lineHeight": "1", "color": "#fff" }}>
                      {"In-House"}
                    </div>
                  </div>
                  <div style={{ "marginTop": "6px", "fontSize": "10px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"Senior Loan Officer"}
                  </div>
                </div>
                <div style={{ "padding": "24px 14px", "textAlign": "center" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px" }}>
                    {" "}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3.4" />
                      <path d="M2.8 19c0-3.4 2.8-5.6 6.2-5.6s6.2 2.2 6.2 5.6" />
                      <path d="M16.4 5.2a3.4 3.4 0 0 1 0 6.4" />
                      <path d="M18 13.9c2.1.7 3.6 2.5 3.6 5.1" />
                    </svg>
                    {" "}
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "34px", "lineHeight": "1", "color": "#fff" }}>
                      {"10,000+"}
                    </div>
                  </div>
                  <div style={{ "marginTop": "6px", "fontSize": "10px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"Clients Helped Nationwide"}
                  </div>
                </div>
              </div>
            </section>
            <section id="hb-top" style={{ "position": "relative", "overflow": "hidden", "background": "radial-gradient(128% 116% at 0% 100%, rgb(12, 112, 195) 0%, rgb(11, 98, 171) 8%, rgb(9, 80, 140) 16%, rgb(8, 64, 110) 25%, rgb(6, 40, 70) 34%, rgb(3, 25, 42) 46%, rgb(1, 10, 18) 60%, rgb(0, 0, 0) 76%) rgb(0, 0, 0)" }}>
              <div style={{ "position": "absolute", "top": "0px", "right": "0px", "bottom": "0px", "width": "74%", "backgroundImage": "url(/assets/img/Gemini_Generated_Image_souwresouwresouw.webp)", "backgroundSize": "cover", "backgroundPosition": "right center", "maskImage": "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.35) 18%, rgb(0, 0, 0) 46%)", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0px", "background": "linear-gradient(rgba(3, 10, 20, 0.35) 0%, rgba(3, 10, 20, 0) 22%, rgba(3, 10, 20, 0) 62%, rgba(5, 6, 8, 0.75) 100%)", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(120, 190, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.09) 1px, transparent 1px)", "backgroundSize": "24px 24px, 24px 24px, 120px 120px, 120px 120px", "mixBlendMode": "screen" }} />
              <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "64px 40px 0px", "display": "grid", "gridTemplateColumns": "1.05fr 0.95fr", "gap": "56px", "alignItems": "center" }}>
                <div style={{ "textAlign": "center", "paddingBottom": "120px", "animation": "0.7s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal both running cdRise" }}>
                  <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px", "border": "1px solid rgb(255, 255, 255)", "borderRadius": "999px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "marginBottom": "24px" }} className="hb-eyebrow">
                    {" "}
                    <span style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "boxShadow": "rgba(0, 173, 238, 0.75) 0px 0px 6px 2px, rgba(0, 173, 238, 0.4) 0px 0px 14px 4px", "animation": "2.2s cubic-bezier(0.4, 0, 0.2, 1) 0s infinite normal none running cdPulse" }} />
                    {" "}
                    <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.28em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"A Step-By-Step Path To Mortgage Approval"}
                    </span>
                    {" "}
                  </div>
                  <h1 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "lineHeight": "0.86", "letterSpacing": "-0.01em", "fontSize": "clamp(52px, 6.4vw, 92px)", "color": "rgb(255, 255, 255)" }}>
                    {"\n        The 90 Day"}
                    <br />
                    <span style={{ "color": "var(--color-blue-600)" }}>
                      {"Home Buying"}
                      <br />
                      {"Blueprint"}
                    </span>
                    {" "}
                  </h1>
                  <p style={{ "margin": "28px auto 0px", "maxWidth": "100%", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "24px", "lineHeight": "1.14", "color": "rgb(255, 255, 255)" }}>
                    {"Fix your credit, get approved, and move into your home with a proven step-by-step system built for real results."}
                  </p>
                  <p style={{ "margin": "20px auto 0px", "maxWidth": "100%", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                    {"You don’t need years to change your situation. With the right strategy, guidance, and execution, you can go from denied to approved"}
                    <br />
                    {"in as little as 90 days."}
                  </p>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px", "marginTop": "38px" }}>
                    {" "}
                    <Link href="/blueprint-application/" className="hb-scp0 hb-cta" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "18px 39px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                      {"Get Started Today"}
                    </Link>
                    {" "}
                    <span style={{ "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.45)" }}>
                      {"No obligation. 100% confidential."}
                    </span>
                    {" "}
                  </div>
                </div>
              </div>
              <div style={{ "position": "relative", "borderTop": "1px solid rgba(255, 255, 255, 0.1)", "background": "rgba(0, 0, 0, 0.32)", "backdropFilter": "blur(8px)" }}>
                <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "grid", "gridTemplateColumns": "repeat(4, 1fr)" }}>
                  <div style={{ "padding": "30px 20px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                    <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                      {" "}
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3.2" y="4.6" width="17.6" height="16.2" rx="2.4" />
                        <path d="M3.2 9.4h17.6" />
                        <path d="M8 2.8v3.4" />
                        <path d="M16 2.8v3.4" />
                      </svg>
                      {" "}
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                        {"90 Days"}
                      </div>
                    </div>
                    <div style={{ "marginTop": "6px", "textAlign": "center", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"Structured Timeline"}
                    </div>
                  </div>
                  <div style={{ "padding": "30px 28px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                    <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                      {" "}
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8.8" />
                        <path d="M12 7.2V12l3.2 2" />
                      </svg>
                      {" "}
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                        {"24 Hours"}
                      </div>
                    </div>
                    <div style={{ "marginTop": "6px", "textAlign": "center", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"Pre-Approval Turnaround"}
                    </div>
                  </div>
                  <div style={{ "padding": "30px 28px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                    <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                      {" "}
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.4 10.6 12 3.6l8.6 7" />
                        <path d="M5.6 12.4V20h12.8v-7.6" />
                        <path d="M10 20v-4.6h4V20" />
                      </svg>
                      {" "}
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                        {"In-House"}
                      </div>
                    </div>
                    <div style={{ "marginTop": "6px", "textAlign": "center", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"Senior Loan Officer"}
                    </div>
                  </div>
                  <div style={{ "padding": "30px 20px" }}>
                    <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                      {" "}
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="8" r="3.4" />
                        <path d="M2.8 19c0-3.4 2.8-5.6 6.2-5.6s6.2 2.2 6.2 5.6" />
                        <path d="M16.4 5.2a3.4 3.4 0 0 1 0 6.4" />
                        <path d="M18 13.9c2.1.7 3.6 2.5 3.6 5.1" />
                      </svg>
                      {" "}
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                        {"10,000+"}
                      </div>
                    </div>
                    <div style={{ "marginTop": "6px", "textAlign": "center", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"Clients Helped Nationwide"}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="how" style={{ "padding": "70px 0px 60px", "background": "rgb(5, 6, 8)" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }}>
                <div style={{ "textAlign": "center", "marginBottom": "44px" }}>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "18px" }}>
                    {"Watch First"}
                  </div>
                  <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 66px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                    {"How Our "}
                    <span style={{ "color": "rgb(12, 112, 195)" }}>
                      {"90 Day Program"}
                    </span>
                    {" Works"}
                  </h2>
                </div>
                <div style={{ "position": "relative", "maxWidth": "960px", "margin": "0px auto", "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "16 / 9", "background": "linear-gradient(200deg, rgb(7, 19, 31), rgb(10, 47, 82))", "boxShadow": "rgba(0, 0, 0, 0.55) 0px 40px 90px, rgba(12, 112, 195, 0.24) 0px 0px 60px 4px" }}>
                  {" "}
                  <wistia-player media-id="nxpt9nkef1" aspect="1.7777777777777777" class="hb-player" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%" }} />
                  {" "}
                </div>
              </div>
            </section>
            <section id="why" style={{ "padding": "20px 0px 70px", "background": "rgb(5, 6, 8)" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "flex", "flexDirection": "column", "gap": "80px" }}>
                <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))", "gap": "64px", "alignItems": "center" }}>
                  <div style={{ "borderRadius": "25px", "height": "460px", "boxShadow": "rgba(12, 112, 195, 0.32) 0px 0px 70px 6px, rgba(0, 173, 238, 0.18) 0px 0px 24px 2px" }} className="hb-last">
                    {" "}
                    <img width="1200" height="801" loading="lazy" decoding="async" src="/assets/img/slot-hb-denied-opt.webp" alt="Four clients standing confidently against a wooden backdrop" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "borderRadius": "25px" }} />
                    {" "}
                  </div>
                  <div className="hb-first">
                    <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "18px" }}>
                      {"The Problem"}
                    </div>
                    <h2 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(32px, 3.8vw, 52px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)" }}>
                      {"The Real Reason You’re Not Getting Approved 💡"}
                    </h2>
                    <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.78", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                      {"Buying a home feels impossible when your credit is holding you back. Constant denials, high rates, and confusion about where to start leave most people stuck for years, wasting time and missing real opportunities."}
                    </p>
                  </div>
                </div>
                <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))", "gap": "64px", "alignItems": "center" }}>
                  <div style={{ "borderRadius": "25px", "height": "460px", "order": "2", "boxShadow": "rgba(12, 112, 195, 0.32) 0px 0px 70px 6px, rgba(0, 173, 238, 0.18) 0px 0px 24px 2px" }} className="hb-reveal">
                    {" "}
                    <img width="1200" height="801" loading="lazy" decoding="async" src="/assets/img/slot-hb-path-opt.webp" alt="Two clients back to back, smiling" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "borderRadius": "25px" }} />
                    {" "}
                  </div>
                  <div style={{ "order": "1" }}>
                    <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "18px" }}>
                      {"The Solution"}
                    </div>
                    <h2 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(32px, 3.8vw, 52px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                      {"A Clear Path to"}
                      <br />
                      {"Homeownership 🏡"}
                    </h2>
                    <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.78", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                      {"The 90 Day Home Buying Blueprint is a structured, step-by-step system designed to take you from where you are right now to homeownership in as little as 90 days."}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="sc-host-x" style={{ "display": "contents" }}>
              <div style={{ "background": "var(--color-blue-600)", "overflow": "hidden", "padding": "18px 0px" }}>
                <div style={{ "display": "flex", "gap": "24px", "width": "max-content", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "color": "rgb(255, 255, 255)", "textTransform": "uppercase", "animation": "18s linear 0s infinite normal none running dc-marquee" }}>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                </div>
              </div>
            </div>
            <section id="path" style={{ "padding": "70px 0px", "background": "linear-gradient(rgb(5, 6, 8), rgb(7, 21, 39) 40%, rgb(5, 6, 8))" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }}>
                <div style={{ "textAlign": "center", "marginBottom": "64px" }}>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                    {"The System"}
                  </div>
                  <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 68px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                    {"Your Path to Approval"}
                  </h2>
                </div>
                <div style={{ "position": "relative" }}>
                  <div style={{ "position": "absolute", "left": "0px", "right": "0px", "top": "27px", "height": "2px", "background": "linear-gradient(90deg,rgba(0,173,238,.15),var(--color-blue-400) 30%,var(--color-blue-400) 70%,#ffffff)" }} />
                  <div style={{ "position": "relative", "display": "grid", "gridTemplateColumns": "repeat(4, minmax(0px, 1fr))", "gap": "32px" }}>
                    <div>
                      <div style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "rgb(5, 6, 8)", "border": "2px solid var(--color-blue-400)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-stat)", "fontSize": "28px", "lineHeight": "1", "color": "var(--color-blue-400)", "marginBottom": "28px" }} className="hb-reveal">
                        {"01"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "10px" }}>
                        {"Step 1"}
                      </div>
                      <h3 style={{ "margin": "0px 0px 10px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                        {"Credit Analysis"}
                      </h3>
                      <p style={{ "margin": "0px 0px 22px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.62)" }} className="hb-reveal">
                        {"We identify exactly what’s holding your credit back"}
                      </p>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }}>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Full credit report breakdown"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Identify negative items"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Pinpoint score blockers"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Create custom action plan"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "rgb(5, 6, 8)", "border": "2px solid var(--color-blue-400)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-stat)", "fontSize": "28px", "lineHeight": "1", "color": "var(--color-blue-400)", "marginBottom": "28px" }} className="hb-reveal">
                        {"02"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "10px" }}>
                        {"Step 2"}
                      </div>
                      <h3 style={{ "margin": "0px 0px 10px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                        {"Strategic Credit Repair"}
                      </h3>
                      <p style={{ "margin": "0px 0px 22px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.62)" }} className="hb-reveal">
                        {"We take action to improve and optimize your profile"}
                      </p>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }}>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Dispute inaccurate items"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Remove harmful accounts"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Optimize credit utilization"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Strengthen credit profile"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "rgb(5, 6, 8)", "border": "2px solid var(--color-blue-400)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-stat)", "fontSize": "28px", "lineHeight": "1", "color": "var(--color-blue-400)", "marginBottom": "28px" }} className="hb-reveal">
                        {"03"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "10px" }}>
                        {"Step 3"}
                      </div>
                      <h3 style={{ "margin": "0px 0px 10px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                        {"Financial Preparation"}
                      </h3>
                      <p style={{ "margin": "0px 0px 22px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.62)" }} className="hb-reveal">
                        {"We position you to meet lender requirements"}
                      </p>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }}>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Improve debt-to-income ratio"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Guide on spending & usage"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Build lender-ready profile"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Prepare for pre-approval"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "border": "2px solid rgb(255, 255, 255)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-stat)", "fontSize": "28px", "lineHeight": "1", "color": "var(--color-blue-600)", "marginBottom": "28px", "boxShadow": "rgba(0, 173, 238, 0.35) 0px 0px 24px 4px" }} className="hb-reveal">
                        {"04"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "marginBottom": "10px" }}>
                        {"Step 4"}
                      </div>
                      <h3 style={{ "margin": "0px 0px 10px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                        {"Approval Home Buying"}
                      </h3>
                      <p style={{ "margin": "0px 0px 22px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.62)" }} className="hb-reveal">
                        {"You move forward with confidence and clarity"}
                      </p>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }}>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Connect with our in-house senior loan officer"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Get pre-approved confidently in as little as 24 hours"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Navigate the buying process"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Move into your new home"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ "display": "flex", "justifyContent": "center", "marginTop": "56px" }}>
                  {" "}
                  <Link href="/blueprint-application/" className="hb-reveal hb-scp0 hb-cta" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "18px 39px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px" }}>
                    {"Get Approved in 90 Days or Less"}
                  </Link>
                  {" "}
                </div>
              </div>
            </section>
            <section id="process" style={{ "position": "relative", "padding": "70px 0px", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(2, 16, 28) 28%, rgb(6, 40, 69) 58%, rgb(4, 24, 42) 82%, rgb(0, 0, 0) 100%)", "overflow": "hidden" }}>
              <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(0, 173, 238, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 173, 238, 0.07) 1px, transparent 1px)", "backgroundSize": "64px 64px", "maskImage": "linear-gradient(transparent 0%, rgb(0, 0, 0) 45%, rgb(0, 0, 0) 78%, transparent 100%)" }} />
              <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(390px, 1fr))", "gap": "60px", "alignItems": "center" }}>
                <div>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                    {"Why This Process Works"}
                  </div>
                  <h2 style={{ "margin": "0px 0px 30px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(34px, 4vw, 56px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                    {"Our Most Aggressive"}
                    <br />
                    {"Dispute Process"}
                  </h2>
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                    <div className="hb-reveal hb-scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"Structured 90-day timeline"}
                      </p>
                    </div>
                    <div className="hb-reveal hb-scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"Clear step-by-step system"}
                      </p>
                    </div>
                    <div className="hb-reveal hb-scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"No confusion or guessing"}
                      </p>
                    </div>
                    <div className="hb-reveal hb-scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"Focused on approvals, not just scores"}
                      </p>
                    </div>
                    <div className="hb-reveal hb-scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"Built for speed and results"}
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ "display": "flex", "alignItems": "flex-end", "justifyContent": "center" }}>
                  {" "}
                  <img width="956" height="1527" loading="lazy" decoding="async" src="/assets/img/danny-transparent-photo_2.webp" alt="Credit Danny" style={{ "width": "100%", "maxWidth": "520px", "height": "auto", "display": "block", "filter": "drop-shadow(rgba(0, 0, 0, 0.55) 0px 30px 60px)" }} className="hb-reveal" />
                  {" "}
                </div>
              </div>
            </section>
            <section id="breakdowns" style={{ "padding": "70px 0px", "background": "rgb(0, 0, 0)" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }}>
                <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                    {"In-Depth Breakdowns"}
                  </div>
                  <h2 style={{ "margin": "0px 0px 20px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 66px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                    {"Why We Built This Program"}
                  </h2>
                  <p style={{ "margin": "0px auto", "maxWidth": "760px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                    {"These in-depth breakdowns reveal exactly how our system works, from fixing your credit profile to positioning you for lender approval in just 90 days."}
                  </p>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "72px" }}>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))", "gap": "64px", "alignItems": "center" }}>
                    <div className="hb-last">
                      <h3 style={{ "margin": "0px 0px 20px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(28px, 3.05vw, 43px)", "lineHeight": "0.98", "color": "rgb(255, 255, 255)", "whiteSpace": "nowrap" }} className="hb-reveal">
                        {"Why Most Applications Get Denied 💡"}
                      </h3>
                      <p style={{ "margin": "0px", "maxWidth": "520px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                        {"It’s not just about your score. Lenders look at how your entire profile is structured, and small mistakes can cost you big opportunities. Here’s what’s really going wrong."}
                      </p>
                    </div>
                    <div style={{ "position": "relative", "borderRadius": "20px", "overflow": "hidden", "aspectRatio": "16 / 9", "background": "linear-gradient(200deg, rgb(7, 19, 31), rgb(10, 47, 82))", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 30px 70px, rgba(12, 112, 195, 0.2) 0px 0px 50px 4px" }} className="hb-reveal hb-first">
                      {" "}
                      <wistia-player media-id="crjkm2g3jr" aspect="1.7777777777777777" class="hb-player" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%" }} />
                      {" "}
                    </div>
                  </div>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))", "gap": "64px", "alignItems": "center" }}>
                    <div style={{ "order": "1", "position": "relative", "borderRadius": "20px", "overflow": "hidden", "aspectRatio": "16 / 9", "background": "linear-gradient(200deg, rgb(7, 19, 31), rgb(10, 47, 82))", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 30px 70px, rgba(12, 112, 195, 0.2) 0px 0px 50px 4px" }} className="hb-reveal">
                      {" "}
                      <wistia-player media-id="owpki24dog" aspect="1.7777777777777777" class="hb-player" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%" }} />
                      {" "}
                    </div>
                    <div style={{ "order": "2" }}>
                      <h3 style={{ "margin": "0px 0px 20px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(28px, 3.05vw, 43px)", "lineHeight": "0.98", "color": "rgb(255, 255, 255)", "whiteSpace": "nowrap" }} className="hb-reveal">
                        {"How We Turn It Around in 90 Days 🗓️"}
                      </h3>
                      <p style={{ "margin": "0px", "maxWidth": "520px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                        {"From credit optimization to approval readiness, this is the exact process we use to help clients move forward with confidence and clarity."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="next" style={{ "padding": "70px 0px", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(3, 16, 29) 45%, rgb(4, 18, 31) 62%, rgb(0, 0, 0) 100%)" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }}>
                <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                    {"Your First 90 Days"}
                  </div>
                  <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 66px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                    {"What Happens Next"}
                  </h2>
                </div>
                <div style={{ "display": "grid", "gridTemplateColumns": "repeat(2, minmax(0px, 1fr))", "gap": "28px" }}>
                  <div className="hb-reveal hb-scp2" style={{ "display": "flex", "gap": "26px", "alignItems": "center", "padding": "32px 30px", "borderRadius": "24px", "border": "1px solid rgba(255, 255, 255, 0.12)", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)" }}>
                    <div style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h8l4.4 4.4V21H6z" />
                        <path d="M14 3v4.6h4.4" />
                        <circle cx="11" cy="13.4" r="2.9" />
                        <path d="M13.2 15.6 15.6 18" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                        {"We Break Down Your Entire Credit File"}
                      </h3>
                      <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.72", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                        {"We don’t “review”. We audit everything line by line to identify EXACTLY what’s holding you back from approval."}
                      </p>
                    </div>
                  </div>
                  <div className="hb-reveal hb-scp2" style={{ "display": "flex", "gap": "26px", "alignItems": "center", "padding": "32px 30px", "borderRadius": "24px", "border": "1px solid rgba(255, 255, 255, 0.12)", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)" }}>
                    <div style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.4 6.4 9 3.6l6 2.8 5.6-2.8v14l-5.6 2.8-6-2.8-5.6 2.8z" />
                        <path d="M9 3.6v14" />
                        <path d="M15 6.4v14" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                        {"We Build Your 90-Day Approval Strategy"}
                      </h3>
                      <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.72", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                        {"You get a custom game plan designed to position you for a mortgage: what to remove, what to fix, and what to add."}
                      </p>
                    </div>
                  </div>
                  <div className="hb-reveal hb-scp2" style={{ "display": "flex", "gap": "26px", "alignItems": "center", "padding": "32px 30px", "borderRadius": "24px", "border": "1px solid rgba(255, 255, 255, 0.12)", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)" }}>
                    <div style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13.6 2.6 5 13.4h5.6L9.6 21.4 19 10.2h-5.9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                        {"We Execute & Clean Your Profile FAST"}
                      </h3>
                      <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.72", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                        {"Our team goes to work on disputes, deletions, and optimization, while guiding you on exactly what to do (and NOT do)."}
                      </p>
                    </div>
                  </div>
                  <div className="hb-reveal hb-scp2" style={{ "display": "flex", "gap": "26px", "alignItems": "center", "padding": "32px 30px", "borderRadius": "24px", "border": "1px solid rgba(255, 255, 255, 0.12)", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)" }}>
                    <div style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.4 10.6 12 3.6l8.6 7" />
                        <path d="M5.6 12.4V20h12.8v-7.6" />
                        <path d="M9.4 16.2l1.9 1.9 3.6-3.8" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                        {"You Get Positioned for Home Approval"}
                      </h3>
                      <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.72", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                        {"Once your profile is dialed in, we align you with lenders and put you in position to get APPROVED."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="apply" style={{ "position": "relative", "padding": "120px 0px", "background": "linear-gradient(200deg, rgb(5, 6, 8) 15%, rgb(6, 42, 77) 70%, rgb(12, 112, 195) 140%)", "overflow": "hidden" }}>
              <div style={{ "position": "absolute", "inset": "0px", "backgroundImage": "url(/assets/img/Group-1261155628-2.webp)", "backgroundSize": "cover", "backgroundPosition": "center center", "opacity": "0.62", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0px", "background": "linear-gradient(rgba(5, 6, 8, 0.42), rgba(5, 6, 8, 0.12) 45%, rgba(5, 6, 8, 0.48))", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(120, 190, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.09) 1px, transparent 1px)", "backgroundSize": "24px 24px, 24px 24px, 120px 120px, 120px 120px", "mixBlendMode": "screen" }} />
              <div style={{ "position": "relative", "maxWidth": "860px", "margin": "0px auto", "padding": "0px 40px", "textAlign": "center" }}>
                <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "22px" }}>
                  {"Take Action Today"}
                </div>
                <h2 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(44px, 5.6vw, 84px)", "lineHeight": "0.9", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                  {"Ready to Become"}
                  <br />
                  {"a Homeowner?"}
                </h2>
                <p style={{ "margin": "0px 0px 38px", "fontSize": "18px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.78)" }} className="hb-reveal">
                  {"Your next 90 days can change everything if you take action today."}
                </p>
                {" "}
                <Link href="/blueprint-application/" className="hb-reveal hb-scp0 hb-cta" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "18px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "15px 32px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px" }}>
                  {"Apply Now"}
                </Link>
                {" "}
              </div>
            </section>
            <div style={{ "position": "fixed", "left": "0px", "right": "0px", "bottom": "0px", "zIndex": "70", "background": "rgba(5, 6, 8, 0.92)", "backdropFilter": "blur(18px)", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }} className="hb-sticky">
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "14px 40px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap" }}>
                <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "color": "rgb(255, 255, 255)" }}>
                  {"The 90 Day "}
                  <span style={{ "color": "rgb(12, 112, 195)" }}>
                    {"Home Buying Blueprint"}
                  </span>
                </div>
                {" "}
                <Link href="/blueprint-application/" className="hb-scp3 hb-cta" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "16px", "letterSpacing": "0.05em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "12px 27px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  {"Get Started"}
                </Link>
                {" "}
              </div>
            </div>
          </div>
        </div>
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
          {" "}
          <button type="button" className="cd-modal__close" data-modal-close="" aria-label="Close">
            <svg className="cd-icon cd-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z" />
            </svg>
          </button>
          {" "}
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
                <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-text e--animation-grow">
                  <ul id="menu-1-1a6d1c0" className="elementor-nav-menu sm-vertical">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268755">
                      <Link href="/plans/" className="elementor-item">
                        {"Our Plans & Pricing"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267232">
                      <Link href="/blueprint/" className="elementor-item">
                        {"Credit Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27269543">
                      <Link href="/sponsorship/" className="elementor-item">
                        {"Apply for Free Credit Repair"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27264055">
                      <Link href="/blueprint-strategy/" className="elementor-item">
                        {"Book a Consultation"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268962">
                      <Link href="/accelerator/" className="elementor-item">
                        {"Credit Accelerator"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270422 current_page_item menu-item-27262558">
                      <Link href="/home-buying-blueprint/" aria-current="page" className="elementor-item elementor-item-active">
                        {"90 Day Home Buying Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27259573">
                      <Link href="/about/" className="elementor-item">
                        {"About Credit Danny"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261517">
                      <Link href="/transformations/" className="elementor-item">
                        {"Our Credit Transformations"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-26018603">
                      <Link href="/#reviews" className="elementor-item elementor-item-anchor">
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-26018601">
                      <Link href="/#guarantee" className="elementor-item elementor-item-anchor">
                        {"Money Back Guarantee"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27270320">
                      <Link href="/mentorship/" className="elementor-item">
                        {"Credit Danny Mentorship"}
                      </Link>
                    </li>
                  </ul>
                  {" "}
                </nav>
                <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
                  <ul id="menu-2-1a6d1c0" className="elementor-nav-menu sm-vertical">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268755">
                      <Link href="/plans/" className="elementor-item" tabIndex={-1}>
                        {"Our Plans & Pricing"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267232">
                      <Link href="/blueprint/" className="elementor-item" tabIndex={-1}>
                        {"Credit Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27269543">
                      <Link href="/sponsorship/" className="elementor-item" tabIndex={-1}>
                        {"Apply for Free Credit Repair"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27264055">
                      <Link href="/blueprint-strategy/" className="elementor-item" tabIndex={-1}>
                        {"Book a Consultation"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268962">
                      <Link href="/accelerator/" className="elementor-item" tabIndex={-1}>
                        {"Credit Accelerator"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270422 current_page_item menu-item-27262558">
                      <Link href="/home-buying-blueprint/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>
                        {"90 Day Home Buying Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27259573">
                      <Link href="/about/" className="elementor-item" tabIndex={-1}>
                        {"About Credit Danny"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261517">
                      <Link href="/transformations/" className="elementor-item" tabIndex={-1}>
                        {"Our Credit Transformations"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-26018603">
                      <Link href="/#reviews" className="elementor-item elementor-item-anchor" tabIndex={-1}>
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-26018601">
                      <Link href="/#guarantee" className="elementor-item elementor-item-anchor" tabIndex={-1}>
                        {"Money Back Guarantee"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27270320">
                      <Link href="/mentorship/" className="elementor-item" tabIndex={-1}>
                        {"Credit Danny Mentorship"}
                      </Link>
                    </li>
                  </ul>
                  {" "}
                </nav>
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
      <OttoSeo />
    </>
  );
}
