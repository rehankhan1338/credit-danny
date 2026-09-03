import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import HeroVideo from "@/components/HeroVideo";
import Link from "next/link";
import Script from "next/script";
import WistiaLoader from "@/components/WistiaLoader";
import "@/public/assets/css/pages/index.css";
import SharedHeaderTop from "@/components/shared/SharedHeaderTop";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import HomeEffects from "@/components/effects/HomeEffects";
import LottiePlayers from "@/components/behaviors/LottiePlayers";
import OttoSeo from "@/components/OttoSeo";
import TrustindexWidget from "@/components/TrustindexWidget";

/** Server-side rendered on every request (SSR); blog routes stay on ISR. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  "title": "Trusted & Proven Credit Restoration Experts | Credit Danny",
  "description": "14 years. $10M+ removed. Credit Danny delivers 1-on-1 credit repair nationwide with real results in 90 days, or you pay nothing. Book your free call today.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "website",
    "title": "Trusted & Proven Credit Restoration Experts | Credit Danny",
    "description": "14 years. $10M+ removed. Credit Danny delivers 1-on-1 credit repair nationwide with real results in 90 days, or you pay nothing. Book your free call today.",
    "url": "https://creditdanny.com/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Homepage",
        "type": "image/jpeg"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Trusted & Proven Credit Restoration Experts | Credit Danny",
    "description": "14 years. $10M+ removed. Credit Danny delivers 1-on-1 credit repair nationwide with real results in 90 days, or you pay nothing. Book your free call today.",
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

export default function HomePage() {
  return (
    <>
      <BodyClass className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-27270405 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-home eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <meta property="article:published_time" content="2026-08-12T08:33:01-07:00" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRiUzRnV0bV9zb3VyY2UlM0RpZyUyNmFtcCUzQnV0bV9tZWRpdW0lM0Rzb2NpYWwlMjZhbXAlM0J1dG1fY29udGVudCUzRGxpbmtfaW5fYmlvJTI2YW1wJTNCZmJjbGlkJTNEUEFjR1J2WmdKbVpHbGtGbERJS2xfQ2dzWHlQbEpKNnFNbG1rNHFOclpGcXVkbGVIUnVBMkZsYlFJeE1RQnpjblJqQm1Gd2NGOXBaQTh4TWpRd01qUTFOelF5T0RjME1UUUFBYWRhU0xoaXZVeFhhQW5nb0oxbVdJMGN1SmZwSXptNDBrcVh0Z1JsSUV0MDZlQVVRREpUa2ZyWXc2bk15Z19hZW1fS1dyUkJMU1Rkd3pERk95ZjZPQ1RrZyZhbXA7X3dwbm9uY2U9YmY4MjUxMzk0YiJ9" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"https://creditdanny.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/#webpage\",\"url\":\"https://creditdanny.com/\",\"name\":\"Trusted &amp; Proven Credit Restoration Experts | Credit Danny\",\"datePublished\":\"2026-08-12T08:33:01-07:00\",\"dateModified\":\"2026-08-12T08:33:01-07:00\",\"about\":{\"@id\":\"https://creditdanny.com/#person\"},\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\"},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/\",\"url\":\"https://creditdanny.com/author/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"Trusted &amp; Proven Credit Restoration Experts | Credit Danny\",\"datePublished\":\"2026-08-12T08:33:01-07:00\",\"dateModified\":\"2026-08-12T08:33:01-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"14 years. $10M+ removed. Credit Danny delivers 1-on-1 credit repair nationwide with real results in 90 days, or you pay nothing. Book your free call today.\",\"name\":\"Trusted &amp; Proven Credit Restoration Experts | Credit Danny\",\"@id\":\"https://creditdanny.com/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/#webpage\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Organization\",\n  \"name\": \"Credit Danny\",\n  \"alternateName\": \"Elevate Financial Services\",\n  \"url\": \"https://creditdanny.com/\",\n  \"logo\": \"https://creditdanny.com/wp-content/uploads/2025/08/Artboard-1-copy.png\",\n  \"contactPoint\": {\n    \"@type\": \"ContactPoint\",\n    \"telephone\": \"+1-408-796-8344\",\n    \"contactType\": \"customer service\",\n    \"areaServed\": \"US\",\n    \"availableLanguage\": \"en\"\n  },\n  \"sameAs\": [\n    \"https://www.instagram.com/creditdanny/\",\n    \"https://www.tiktok.com/@creditdanny\"\n  ]\n}\n" }} />
      <WistiaLoader mediaIds={["wwa38udafy", "asx3od5z4d", "9831m0fzv3", "gorhj0mhpa", "03m7xewg2a", "9282m60qds", "o3uudfqzob"]} />
      <div id="menu" style={{ "position": "fixed", "inset": "0", "zIndex": "200", "background": "linear-gradient(180deg,#000 0%,#06243f 45%,#0b3a63 100%)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "flex-start", "padding": "38px 40px 46px", "overflowY": "auto", "animation": "cd-menu-iris .62s cubic-bezier(.76,0,.24,1) both" }} data-menu-panel="">
        {" "}
        <button type="button" aria-label="Close menu" style={{ "position": "absolute", "top": "32px", "right": "40px", "width": "52px", "height": "52px", "borderRadius": "10px", "background": "transparent", "border": "2px solid #0C70C3", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0", "transition": "background .2s ease,border-color .2s ease", "animation": "cd-menu-close .5s cubic-bezier(.34,1.56,.64,1) .34s both" }} className="cdm-h0">
          {" "}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
          {" "}
        </button>
        {" "}
        <Link href="/" aria-label="Credit Danny home">
          <img width="1394" height="261" src="/assets/img/logo-white.png" alt="Credit Danny" style={{ "width": "min(760px,72vw)", "height": "auto", "display": "block", "margin": "14px 0 54px", "animation": "cd-menu-mark .6s cubic-bezier(.22,1,.36,1) .16s both" }} />
        </Link>
        {" "}
        <nav className="cdm-nav">
          <div className="cdm-col cdm-col-p">
            <Link href="/plans/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.300s both", "cursor": "pointer" }} className="cdm-h1 cdm-m1">
              {"Our Plans"}
            </Link>
            {" "}
            <Link href="/blueprint/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.350s both", "cursor": "pointer" }} className="cdm-h1 cdm-m2">
              {"Credit Blueprint"}
            </Link>
            {" "}
            <Link href="/sponsorship/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.400s both", "cursor": "pointer" }} className="cdm-h1 cdm-m3">
              {"Apply For Free Credit Repair"}
            </Link>
            {" "}
            <Link href="/accelerator/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.450s both", "cursor": "pointer" }} className="cdm-h1 cdm-m4">
              {"Credit Accelerator"}
            </Link>
            {" "}
            <Link href="/transformations/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.500s both", "cursor": "pointer" }} className="cdm-h1 cdm-m9">
              {"Our Credit Transformations"}
            </Link>
            {" "}
            <Link href="/home-buying-blueprint/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.550s both", "cursor": "pointer" }} className="cdm-h1 cdm-m5">
              {"The 90 Day Home Buying Blueprint"}
            </Link>
          </div>
          <div className="cdm-rule" aria-hidden="true" />
          <div className="cdm-col cdm-col-s">
            <Link href="/about/" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.330s both", "cursor": "pointer" }} className="cdm-h1 cdm-m7">
              {"About Credit Danny"}
            </Link>
            {" "}
            <Link href="/team/" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.380s both", "cursor": "pointer" }} className="cdm-h1 cdm-m8">
              {"Meet the Team"}
            </Link>
            {" "}
            <Link href="/blueprint-strategy/" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.430s both", "cursor": "pointer" }} className="cdm-h1 cdm-m6">
              {"Book A Consultation"}
            </Link>
            {" "}
            <a href="#guarantee" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.480s both", "cursor": "pointer" }} className="cdm-h1 cdm-m11">
              {"Money Back Guarantee"}
            </a>
            {" "}
            <a href="#reviews" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.530s both", "cursor": "pointer" }} className="cdm-h1 cdm-m10">
              {"Reviews"}
            </a>
            {" "}
            <Link href="/mentorship/" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.580s both", "cursor": "pointer" }} className="cdm-h1 cdm-m12">
              {"Credit Danny Mentorship"}
            </Link>
          </div>
        </nav>
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
      <div style={{ "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "overflowX": "hidden" }} className="cd-shell">
        <section data-screen-label="Hero" style={{ "position": "relative", "background": "rgb(0, 0, 0)", "padding": "120px 40px 130px", "overflow": "hidden" }} className="cd-pad">
          {" "}
          <HeroVideo src="/assets/video/site-video-header_new-720.mp4" poster="/assets/img/site-video-header-poster.webp" style={{ "position": "absolute", "inset": "0px", "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }} />
          {" "}
          <div style={{ "position": "absolute", "inset": "0px", "background": "radial-gradient(85% 75% at 50% 108%, rgba(12, 112, 195, 0.62), rgba(0, 0, 0, 0) 62%), linear-gradient(rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.3) 38%, rgba(0, 0, 0, 0.75) 100%)", "pointerEvents": "none" }} />
          <div style={{ "position": "relative", "maxWidth": "1000px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "26px", "textAlign": "center" }}>
            <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "9px", "padding": "8px 18px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "background": "rgba(255, 255, 255, 0.04)", "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
              {" "}
              <span style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(0, 173, 238)", "display": "block", "animation": "2s ease-in-out 0s infinite normal none running cd-pulse" }} />
              {"\n        Credit Repair With A Purpose\n      "}
            </div>
            <h1 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "96px", "lineHeight": "0.92", "letterSpacing": "0.005em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "textShadow": "rgba(0, 0, 0, 0.55) 0px 2px 18px, rgba(0, 0, 0, 0.4) 0px 1px 3px" }}>
              {" "}
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Elevate"}
              </span>
              {" Your Credit."}
              <br />
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Elevate"}
              </span>
              {" Your Life.\n      "}
            </h1>
            <p style={{ "margin": "0px", "maxWidth": "600px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
              {"Custom credit repair strategies designed to remove negative items, increase your scores, and position you for the life you deserve."}
            </p>
            <div style={{ "display": "flex", "gap": "14px", "flexWrap": "wrap", "justifyContent": "center", "marginTop": "4px" }}>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 18px", "borderRadius": "12px", "background": "rgba(18, 18, 18, 0.55)", "backdropFilter": "blur(28px)", "border": "1px solid rgba(255, 255, 255, 0.14)" }}>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontSize": "22px", "color": "rgb(255, 255, 255)" }}>
                  {"10,000+"}
                </span>
                {" "}
                <span style={{ "fontSize": "10px", "lineHeight": "1.25", "fontWeight": "600", "color": "rgba(255, 255, 255, 0.72)", "textAlign": "left" }}>
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
                <span style={{ "fontSize": "10px", "lineHeight": "1.25", "fontWeight": "600", "color": "rgba(255, 255, 255, 0.72)", "textAlign": "left" }}>
                  {"Negative Accounts"}
                  <br />
                  {"Removed"}
                </span>
                {" "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 18px", "borderRadius": "12px", "background": "rgba(18, 18, 18, 0.55)", "backdropFilter": "blur(28px)", "border": "1px solid rgba(255, 255, 255, 0.14)" }}>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontSize": "22px", "color": "rgb(255, 255, 255)" }}>
                  {"90-Day"}
                </span>
                {" "}
                <span style={{ "fontSize": "10px", "lineHeight": "1.25", "fontWeight": "600", "color": "rgba(255, 255, 255, 0.72)", "textAlign": "left" }}>
                  {"Money-Back"}
                  <br />
                  {"Guarantee"}
                </span>
                {" "}
              </div>
            </div>
            <div style={{ "display": "flex", "gap": "14px", "flexWrap": "wrap", "justifyContent": "center", "marginTop": "26px" }}>
              {" "}
              <Link href="/get-started/" className="hm-scp4" style={{ "display": "inline-flex", "alignItems": "center", "boxSizing": "border-box", "height": "52px", "padding": "0px 34px", "borderRadius": "10px", "border": "1px solid rgb(12, 112, 195)", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "18px", "letterSpacing": "0.03em", "textTransform": "uppercase", "boxShadow": "rgba(12, 112, 195, 0.45) 0px 14px 34px", "cursor": "pointer" }}>
                {"Start Your Credit Review"}
              </Link>
              {" "}
              <a href="#plans" className="hm-scp3" style={{ "display": "inline-flex", "alignItems": "center", "boxSizing": "border-box", "height": "52px", "padding": "0px 34px", "borderRadius": "10px", "border": "1px solid rgb(255, 255, 255)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "18px", "letterSpacing": "0.03em", "textTransform": "uppercase", "cursor": "pointer" }}>
                {"See Our Plans"}
              </a>
              {" "}
            </div>
          </div>
        </section>
        <nav style={{ "position": "sticky", "top": "0px", "zIndex": "40", "background": "rgba(8, 8, 10, 0.92)", "backdropFilter": "blur(18px)", "borderTop": "1px solid rgba(255, 255, 255, 0.08)", "borderBottom": "1px solid rgba(255, 255, 255, 0.08)", "padding": "12px 40px" }} className="cd-jump">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "flexWrap": "wrap", "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase" }} className="cd-jump-rail">
            {" "}
            <span style={{ "color": "rgba(255, 255, 255, 0.4)", "marginRight": "6px" }}>
              {"Inside"}
            </span>
            {" "}
            <a href="#results" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"Results"}
            </a>
            {" "}
            <a href="#why" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"About"}
            </a>
            {" "}
            <a href="#remove" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"Solutions"}
            </a>
            {" "}
            <a href="#danny" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"Danny"}
            </a>
            {" "}
            <a href="#impact" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"Impact"}
            </a>
            {" "}
            <a href="#reviews" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"Reviews"}
            </a>
            {" "}
            <a href="#plans" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"Plans"}
            </a>
            {" "}
            <a href="#guarantee" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"Guarantee"}
            </a>
            {" "}
            <a href="#stories" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"Transformations"}
            </a>
            {" "}
            <a href="#faq" className="hm-scp5" style={{ "padding": "7px 16px", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "999px", "color": "rgba(255, 255, 255, 0.85)", "transition": "background 0.18s, color 0.18s, border-color 0.18s", "cursor": "pointer" }}>
              {"FAQ"}
            </a>
            {" "}
          </div>
        </nav>
        <section data-screen-label="Proof band" style={{ "background": "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(0, 35, 79) 55%, rgb(12, 112, 195) 100%)", "padding": "100px 40px" }} className="cd-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "0.85fr 1.15fr", "gap": "64px", "alignItems": "center" }} className="cd-hero-grid">
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "18px" }}>
              {" "}
              <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"The Receipts"}
              </span>
              {" "}
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "48px", "lineHeight": "1.04", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Where Others Make "}
                <span style={{ "color": "rgb(195, 12, 12)" }}>
                  {"Promises"}
                </span>
                <br />
                {"We Produce "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Results"}
                </span>
              </h2>
              <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                {"For over a decade, we've helped clients remove negative items, increase their scores, and position themselves for greater financial opportunities, including homeownership, vehicle financing, business funding, and more."}
              </p>
              <p style={{ "margin": "0px", "fontSize": "15px", "fontWeight": "700", "color": "rgb(255, 255, 255)", "whiteSpace": "nowrap" }} className="cd-wrap">
                {"If you're serious about changing your credit, you're in the right place."}
              </p>
              {" "}
              <img width="800" height="356" loading="lazy" decoding="async" src="/assets/img/danny-signature_hero.png" alt="Danny signature" style={{ "width": "190px", "height": "auto", "marginTop": "6px", "filter": "brightness(0) invert(1)", "opacity": "0.9" }} />
              {" "}
            </div>
            <div style={{ "position": "relative", "borderRadius": "18px", "overflow": "hidden", "border": "1px solid rgba(255, 255, 255, 0.12)" }}>
              <div style={{ "position": "relative", "width": "100%", "height": "420px" }}>
                {" "}
                <image-slot id="proof-band-photo" shape="rect" placeholder="Drop a photo of Danny" data-filled="" style={{ "display": "block", "position": "absolute", "inset": "0", "overflow": "hidden", "borderRadius": "0px" }}>
                  <img width="800" height="1200" loading="lazy" decoding="async" alt="Drop a photo of Danny" src="/assets/img/inline-166f44b36c.webp" data-view="1,0,45.4064" style={{ "position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%,-50%)", "maxWidth": "none", "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1280px", "margin": "56px auto 0px", "display": "grid", "gridTemplateColumns": "repeat(4, 1fr)", "gap": "20px" }} className="cd-quad">
            <div className="hm-scp6" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255, 255, 255, 0.16)", "borderRadius": "18px", "padding": "28px 24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "8px", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, background 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                <svg viewBox="0 0 24 24" width="46" height="46" fill="none" stroke="#00ADEE" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ "flex": "0 0 auto" }}>
                  <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19" />
                  <circle cx="10" cy="7.5" r="3.2" />
                  <path d="M20 19v-1.4a3.4 3.4 0 0 0-2.6-3.3" />
                  <path d="M15.5 4.6a3.2 3.2 0 0 1 0 6" />
                </svg>
                <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                  {"10,000+"}
                </span>
              </div>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "lineHeight": "1.35", "letterSpacing": "0.02em", "wordSpacing": "0.08em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Clients Helped Nationwide"}
              </span>
              {" "}
            </div>
            <div className="hm-scp6" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255, 255, 255, 0.16)", "borderRadius": "18px", "padding": "28px 24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "8px", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, background 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                <svg viewBox="0 0 24 24" width="46" height="46" fill="none" stroke="#00ADEE" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ "flex": "0 0 auto" }}>
                  <path d="M9 3h6l-1.6 2.6a1 1 0 0 1-.85.48h-1.1a1 1 0 0 1-.85-.48L9 3Z" />
                  <path d="M10.6 6.1C7.6 7.6 4.5 11 4.5 15a5.5 5.5 0 0 0 5.5 5.5h4A5.5 5.5 0 0 0 19.5 15c0-4-3.1-7.4-6.1-8.9" />
                  <path d="M12 10.3v6.4M13.9 11.6h-2.7a1.35 1.35 0 0 0 0 2.7h1.6a1.35 1.35 0 0 1 0 2.7H10" />
                </svg>
                <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                  {"$250M"}
                </span>
              </div>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "lineHeight": "1.35", "letterSpacing": "0.02em", "wordSpacing": "0.08em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"In Negative Accounts Successfully Challenged and Removed"}
              </span>
              {" "}
            </div>
            <div className="hm-scp6" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255, 255, 255, 0.16)", "borderRadius": "18px", "padding": "28px 24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "8px", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, background 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                <svg viewBox="0 0 24 24" width="46" height="46" fill="none" stroke="#00ADEE" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ "flex": "0 0 auto" }}>
                  <path d="m12 3.4 2.65 5.37 5.93.86-4.29 4.18 1.01 5.9L12 17l-5.3 2.71 1.01-5.9L3.42 9.63l5.93-.86L12 3.4Z" />
                </svg>
                <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                  {"200+"}
                </span>
              </div>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "lineHeight": "1.35", "letterSpacing": "0.02em", "wordSpacing": "0.08em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"5-Star Reviews"}
              </span>
              {" "}
            </div>
            <div className="hm-scp6" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(22px)", "border": "1px solid rgba(255, 255, 255, 0.16)", "borderRadius": "18px", "padding": "28px 24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "8px", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, background 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                <svg viewBox="0 0 24 24" width="46" height="46" fill="none" stroke="#00ADEE" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ "flex": "0 0 auto" }}>
                  <path d="M12 3.2 4.8 6v5.4c0 4.3 3 8.2 7.2 9.4 4.2-1.2 7.2-5.1 7.2-9.4V6L12 3.2Z" />
                  <path d="m9 12 2.1 2.1L15.2 10" />
                </svg>
                <span style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                  {"90-Day"}
                </span>
              </div>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "lineHeight": "1.35", "letterSpacing": "0.02em", "wordSpacing": "0.08em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Money-Back Guarantee"}
              </span>
              {" "}
            </div>
          </div>
        </section>
        <section id="results" data-screen-label="Real people real results" style={{ "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "padding": "50px 40px" }} className="cd-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "textAlign": "center", "display": "flex", "flexDirection": "column", "gap": "14px", "alignItems": "center" }}>
            {" "}
            <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
              {"The Proof"}
            </span>
            {" "}
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }} className="cd-sechead">
              {"Real People. "}
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Real Results."}
              </span>
            </h2>
            <p style={{ "margin": "0px", "fontSize": "15px", "color": "rgba(255, 255, 255, 0.7)" }}>
              {"Thousands of clients have seen real results with Credit Danny."}
            </p>
          </div>
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "56px auto 0px", "display": "flex", "alignItems": "center", "gap": "14px" }}>
            {" "}
            <button type="button" aria-label="Previous" className="hm-scp7" style={{ "flex": "0 0 auto", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.22)", "color": "rgba(255, 255, 255, 0.85)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0px", "transition": "background 0.22s, border-color 0.22s, color 0.22s, box-shadow 0.22s" }}>
              {" "}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 5.5 8 12l6.5 6.5" />
              </svg>
              {" "}
            </button>
            {" "}
            <div data-track="results" style={{ "display": "flex", "gap": "20px", "overflowX": "auto", "scrollSnapType": "x mandatory", "scrollbarWidth": "none", "flex": "1 1 auto", "padding": "4px" }}>
              <div style={{ "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px" }} className="cd-rescard">
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }}>
                      {"609"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"BEFORE"}
                    </div>
                  </div>
                  {" "}
                  <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00ADEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {" "}
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                      {"804"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"AFTER"}
                    </div>
                  </div>
                </div>
                <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "textTransform": "uppercase" }}>
                    {"Jorge G."}
                  </div>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "letterSpacing": "0.04em", "color": "rgb(34, 197, 94)" }}>
                    {"+195 POINT INCREASE"}
                  </div>
                </div>
              </div>
              <div style={{ "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px" }} className="cd-rescard">
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }}>
                      {"629"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"BEFORE"}
                    </div>
                  </div>
                  {" "}
                  <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00ADEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {" "}
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                      {"787"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"AFTER"}
                    </div>
                  </div>
                </div>
                <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "textTransform": "uppercase" }}>
                    {"Samantha B."}
                  </div>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "letterSpacing": "0.04em", "color": "rgb(34, 197, 94)" }}>
                    {"+158 POINT INCREASE"}
                  </div>
                </div>
              </div>
              <div style={{ "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px" }} className="cd-rescard">
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }}>
                      {"498"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"BEFORE"}
                    </div>
                  </div>
                  {" "}
                  <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00ADEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {" "}
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                      {"715"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"AFTER"}
                    </div>
                  </div>
                </div>
                <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "textTransform": "uppercase" }}>
                    {"Steven B."}
                  </div>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "letterSpacing": "0.04em", "color": "rgb(34, 197, 94)" }}>
                    {"+217 POINT INCREASE"}
                  </div>
                </div>
              </div>
              <div style={{ "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px" }} className="cd-rescard">
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }}>
                      {"520"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"BEFORE"}
                    </div>
                  </div>
                  {" "}
                  <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00ADEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {" "}
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                      {"797"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"AFTER"}
                    </div>
                  </div>
                </div>
                <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "textTransform": "uppercase" }}>
                    {"Eli G."}
                  </div>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "letterSpacing": "0.04em", "color": "rgb(34, 197, 94)" }}>
                    {"+277 POINT INCREASE"}
                  </div>
                </div>
              </div>
              <div style={{ "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px" }} className="cd-rescard">
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }}>
                      {"542"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"BEFORE"}
                    </div>
                  </div>
                  {" "}
                  <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00ADEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {" "}
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                      {"736"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"AFTER"}
                    </div>
                  </div>
                </div>
                <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "textTransform": "uppercase" }}>
                    {"Natalie T."}
                  </div>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "letterSpacing": "0.04em", "color": "rgb(34, 197, 94)" }}>
                    {"+194 POINT INCREASE"}
                  </div>
                </div>
              </div>
              <div style={{ "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px" }} className="cd-rescard">
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }}>
                      {"538"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"BEFORE"}
                    </div>
                  </div>
                  {" "}
                  <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00ADEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {" "}
                  <div style={{ "textAlign": "center" }}>
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                      {"791"}
                    </div>
                    <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                      {"AFTER"}
                    </div>
                  </div>
                </div>
                <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "textTransform": "uppercase" }}>
                    {"Daniel A."}
                  </div>
                  <div style={{ "fontFamily": "var(--font-display)", "fontSize": "19px", "letterSpacing": "0.04em", "color": "rgb(34, 197, 94)" }}>
                    {"+253 POINT INCREASE"}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ "position": "absolute", "top": "0px", "bottom": "0px", "left": "60px", "width": "110px", "background": "linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.92))", "pointerEvents": "none" }} />
            <div style={{ "position": "absolute", "top": "0px", "bottom": "0px", "right": "60px", "width": "110px", "background": "linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.92))", "pointerEvents": "none" }} />
            {" "}
            <button type="button" aria-label="Next" className="hm-scp7" style={{ "flex": "0 0 auto", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.22)", "color": "rgba(255, 255, 255, 0.85)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0px", "transition": "background 0.22s, border-color 0.22s, color 0.22s, box-shadow 0.22s" }}>
              {" "}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 5.5 16 12l-6.5 6.5" />
              </svg>
              {" "}
            </button>
            {" "}
          </div>
        </section>
        <div style={{ "background": "linear-gradient(100deg, rgb(0, 0, 0) 0%, rgb(0, 35, 79) 55%, rgb(12, 112, 195) 100%)", "borderTop": "1px solid rgba(255, 255, 255, 0.1)", "borderBottom": "1px solid rgba(255, 255, 255, 0.1)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "34px 40px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "12px", "flexWrap": "wrap" }} className="cd-inner-pad">
            <div style={{ "fontFamily": "var(--font-display)", "fontSize": "38px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "flexShrink": "0" }}>
              {"As Seen On"}
            </div>
            <div style={{ "width": "230px", "height": "56px", "flexShrink": "0", "background": "transparent" }}>
              {" "}
              <image-slot id="home-usa-today-logo" data-clear-frame="" shape="rect" fit="contain" placeholder="USA TODAY logo (transparent PNG)" data-filled="">
                <img width="460" height="86" loading="lazy" decoding="async" alt="USA TODAY logo (transparent PNG)" src="/assets/img/inline-91c8adb907.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
              </image-slot>
              {" "}
            </div>
          </div>
        </div>
        <section id="why" data-screen-label="What we can remove" style={{ "padding": "50px 0px", "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="cd-inner-pad">
            <h2 style={{ "margin": "0px auto 28px", "maxWidth": "900px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)", "textAlign": "center" }} className="cd-sechead">
              {"See Why We're The"}
              <br />
              {"Most Trusted Name In Credit Repair"}
            </h2>
            <div data-video-embed="" style={{ "maxWidth": "900px", "margin": "0px auto 48px", "aspectRatio": "16 / 9", "borderRadius": "24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "12px", "textAlign": "center", "position": "relative", "overflow": "hidden", "boxSizing": "border-box" }}>
              <wistia-player media-id="o3uudfqzob" aspect="1.7777777777777777" class="cd-player" />
            </div>
            <div id="remove" style={{ "textAlign": "center", "marginBottom": "44px", "scrollMarginTop": "120px" }}>
              <h2 style={{ "margin": "0px auto", "maxWidth": "900px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }} className="cd-sechead">
                {"Negative Items We've Successfully Removed For Our Clients"}
              </h2>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(4, minmax(0px, 1fr))", "gap": "16px", "maxWidth": "1000px", "margin": "0px auto" }} className="cd-chips">
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Foreclosures\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Student Loans\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Late Payments\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Bankruptcies\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Collections\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Judgments\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Repossessions\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Child Support\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Charge-Offs\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Medical Bills\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Public Records\n      "}
              </div>
              <div className="hm-scp8" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "transform 0.22s, background 0.22s, box-shadow 0.22s", "cursor": "pointer" }}>
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Hard Inquiries\n      "}
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
        <section id="danny" data-screen-label="Meet Credit Danny" style={{ "background": "rgb(0, 0, 0)", "padding": "50px 40px" }} className="cd-pad">
          <div style={{ "maxWidth": "1180px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "0.9fr 1.1fr", "gap": "70px", "alignItems": "center" }} className="cd-danny-grid">
            <div style={{ "position": "relative", "display": "grid", "placeItems": "end center" }}>
              <div style={{ "position": "absolute", "width": "92%", "aspectRatio": "1 / 1", "borderRadius": "50%", "background": "radial-gradient(circle, rgba(12, 112, 195, 0.55), rgba(0, 0, 0, 0) 70%)", "animation": "5s ease-in-out 0s infinite normal none running cd-glow" }} />
              {" "}
              <img width="1100" height="1121" loading="lazy" decoding="async" src="/assets/img/danny_img2.webp" alt="Credit Danny" style={{ "position": "relative", "width": "100%", "maxWidth": "530px", "height": "auto", "display": "block" }} />
              {" "}
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "18px" }}>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "86px", "lineHeight": "0.94", "letterSpacing": "0px", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "width": "599px", "height": "82px" }} className="cd-danny-title">
                {"Meet "}
                <span style={{ "color": "rgb(12, 112, 195)", "fontSize": "88px" }}>
                  {"Credit Danny"}
                </span>
              </span>
              {" "}
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "54px", "lineHeight": "1.02", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"The Man Behind The Movement"}
              </h2>
              <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.8", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                {"Credit Danny is trusted by thousands for one reason: "}
                <strong style={{ "color": "rgb(255, 255, 255)" }}>
                  {"RESULTS."}
                </strong>
              </p>
              <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.8", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                {"This was never about selling credit repair. It was about helping people create real financial change and new opportunities for their families."}
              </p>
              <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.8", "color": "rgb(255, 255, 255)" }}>
                {"Learn more about the man behind the movement."}
              </p>
              {" "}
              <Link href="/about/" className="hm-scp4" style={{ "alignSelf": "flex-start", "display": "inline-flex", "alignItems": "center", "height": "50px", "padding": "0px 30px", "borderRadius": "10px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "18px", "textTransform": "uppercase", "letterSpacing": "0.03em", "marginTop": "6px", "boxShadow": "rgba(12, 112, 195, 0.4) 0px 12px 30px", "cursor": "pointer" }}>
                {"Read Danny's Story"}
              </Link>
              {" "}
            </div>
          </div>
        </section>
        <section id="impact" data-screen-label="Impact stats" style={{ "background": "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(0, 35, 79) 55%, rgb(12, 112, 195) 100%)", "color": "rgb(255, 255, 255)", "padding": "55px 40px" }} className="cd-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "textAlign": "center", "display": "flex", "flexDirection": "column", "gap": "12px", "alignItems": "center" }}>
            {" "}
            <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
              {"The Impact"}
            </span>
            {" "}
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }} className="cd-sechead">
              {"What We've Done"}
              <br className="cd-mbr" />
              {" for Our Clients"}
            </h2>
          </div>
          <div style={{ "maxWidth": "1280px", "margin": "44px auto 0px", "display": "grid", "gridTemplateColumns": "repeat(3, 1fr)", "gap": "20px" }} className="cd-trio">
            <div className="hm-scp9" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.14)", "borderRadius": "22px", "padding": "32px 30px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.4) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              {" "}
              <img width="300" height="300" loading="lazy" decoding="async" src="/assets/img/stat-cash-wings.png" alt="" style={{ "width": "52px", "height": "52px", "objectFit": "contain" }} />
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontWeight": "700", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                {"$100 Million+"}
              </span>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1.2", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Collections Deleted"}
              </span>
              {" "}
              <span style={{ "fontSize": "16px", "color": "rgba(255, 255, 255, 0.55)" }}>
                {"Helping clients rebuild"}
              </span>
              {" "}
            </div>
            <div className="hm-scp9" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.14)", "borderRadius": "22px", "padding": "32px 30px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.4) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              {" "}
              <img width="300" height="300" loading="lazy" decoding="async" src="/assets/img/stat-funding.png" alt="" style={{ "width": "52px", "height": "52px", "objectFit": "contain" }} />
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontWeight": "700", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                {"$15 Million+"}
              </span>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1.2", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Business Funding Secured"}
              </span>
              {" "}
              <span style={{ "fontSize": "16px", "color": "rgba(255, 255, 255, 0.55)" }}>
                {"Capital placed through credit strategy"}
              </span>
              {" "}
            </div>
            <div className="hm-scp9" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.14)", "borderRadius": "22px", "padding": "32px 30px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.4) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              {" "}
              <img width="300" height="300" loading="lazy" decoding="async" src="/assets/img/stat-late-payment.png" alt="" style={{ "width": "52px", "height": "52px", "objectFit": "contain" }} />
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontWeight": "700", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                {"6,000+"}
              </span>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1.2", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Late Payments Removed"}
              </span>
              {" "}
              <span style={{ "fontSize": "16px", "color": "rgba(255, 255, 255, 0.55)" }}>
                {"Rebuilding the #1 scoring factor"}
              </span>
              {" "}
            </div>
            <div className="hm-scp9" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.14)", "borderRadius": "22px", "padding": "32px 30px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.4) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              {" "}
              <img width="300" height="300" loading="lazy" decoding="async" src="/assets/img/stat-bankruptcy.png" alt="" style={{ "width": "52px", "height": "52px", "objectFit": "contain" }} />
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontWeight": "700", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                {"2,000+"}
              </span>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1.2", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Bankruptcies Deleted"}
              </span>
              {" "}
              <span style={{ "fontSize": "16px", "color": "rgba(255, 255, 255, 0.55)" }}>
                {"When legally possible"}
              </span>
              {" "}
            </div>
            <div className="hm-scp9" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.14)", "borderRadius": "22px", "padding": "32px 30px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.4) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              {" "}
              <img width="300" height="300" loading="lazy" decoding="async" src="/assets/img/stat-student-loan.png" alt="" style={{ "width": "52px", "height": "52px", "objectFit": "contain" }} />
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontWeight": "700", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                {"1,500+"}
              </span>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1.2", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Student Loans Deleted"}
              </span>
              {" "}
              <span style={{ "fontSize": "16px", "color": "rgba(255, 255, 255, 0.55)" }}>
                {"Freedom to move forward"}
              </span>
              {" "}
            </div>
            <div className="hm-scp9" style={{ "background": "rgba(10, 14, 22, 0.45)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.14)", "borderRadius": "22px", "padding": "32px 30px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "gap": "10px", "boxShadow": "rgba(0, 0, 0, 0.4) 0px 8px 30px", "transition": "transform 0.25s, border-color 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              {" "}
              <img width="300" height="300" loading="lazy" decoding="async" src="/assets/img/stat-repossession.png" alt="" style={{ "width": "52px", "height": "52px", "objectFit": "contain" }} />
              {" "}
              <span style={{ "fontFamily": "var(--font-stat)", "fontWeight": "700", "fontSize": "52px", "lineHeight": "1", "color": "rgb(0, 173, 238)" }}>
                {"4,000+"}
              </span>
              {" "}
              <span style={{ "fontFamily": "var(--font-display)", "fontSize": "26px", "lineHeight": "1.2", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Repossessions Deleted"}
              </span>
              {" "}
              <span style={{ "fontSize": "16px", "color": "rgba(255, 255, 255, 0.55)" }}>
                {"Keys back to their future"}
              </span>
              {" "}
            </div>
          </div>
        </section>
        <section data-screen-label="Logo marquee" style={{ "background": "rgb(255, 255, 255)", "padding": "34px 0px", "overflow": "hidden" }}>
          <div style={{ "display": "flex", "width": "max-content", "alignItems": "center", "animation": "22s linear 0s infinite normal none running cd-logo-scroll" }}>
            <div style={{ "display": "flex", "alignItems": "center", "gap": "90px", "paddingRight": "90px" }}>
              <div style={{ "flex": "0 0 320px", "height": "96px", "color": "rgb(138, 138, 138)" }}>
                <image-slot id="bureau-logo-1" data-clear-frame="" shape="rect" fit="contain" placeholder="Logo 1" data-filled="">
                  <img width="520" height="208" loading="lazy" decoding="async" alt="Logo 1" src="/assets/img/inline-83364427e1.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
              </div>
              <div style={{ "flex": "0 0 320px", "height": "96px", "color": "rgb(138, 138, 138)" }}>
                <image-slot id="bureau-logo-2" data-clear-frame="" shape="rect" fit="contain" placeholder="Logo 2" data-filled="">
                  <img width="520" height="208" loading="lazy" decoding="async" alt="Logo 2" src="/assets/img/inline-19d4a051a4.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
              </div>
              <div style={{ "flex": "0 0 320px", "height": "96px", "color": "rgb(138, 138, 138)" }}>
                <image-slot id="bureau-logo-3" data-clear-frame="" shape="rect" fit="contain" placeholder="Logo 3" data-filled="">
                  <img width="520" height="208" loading="lazy" decoding="async" alt="Logo 3" src="/assets/img/inline-d461c34123.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
              </div>
              <div style={{ "flex": "0 0 320px", "height": "96px", "color": "rgb(138, 138, 138)" }}>
                <image-slot id="bureau-logo-4" data-clear-frame="" shape="rect" fit="contain" placeholder="Logo 4" data-filled="">
                  <img width="520" height="208" loading="lazy" decoding="async" alt="Logo 4" src="/assets/img/inline-9b3089f71c.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
              </div>
            </div>
            <div aria-hidden="true" style={{ "display": "flex", "alignItems": "center", "gap": "90px", "paddingRight": "90px" }}>
              <div style={{ "flex": "0 0 320px", "height": "96px", "color": "rgb(138, 138, 138)" }}>
                <image-slot id="bureau-logo-1" data-clear-frame="" shape="rect" fit="contain" placeholder="Logo 1" data-filled="">
                  <img width="520" height="208" loading="lazy" decoding="async" alt="Logo 1" src="/assets/img/inline-83364427e1.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
              </div>
              <div style={{ "flex": "0 0 320px", "height": "96px", "color": "rgb(138, 138, 138)" }}>
                <image-slot id="bureau-logo-2" data-clear-frame="" shape="rect" fit="contain" placeholder="Logo 2" data-filled="">
                  <img width="520" height="208" loading="lazy" decoding="async" alt="Logo 2" src="/assets/img/inline-19d4a051a4.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
              </div>
              <div style={{ "flex": "0 0 320px", "height": "96px", "color": "rgb(138, 138, 138)" }}>
                <image-slot id="bureau-logo-3" data-clear-frame="" shape="rect" fit="contain" placeholder="Logo 3" data-filled="">
                  <img width="520" height="208" loading="lazy" decoding="async" alt="Logo 3" src="/assets/img/inline-d461c34123.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
              </div>
              <div style={{ "flex": "0 0 320px", "height": "96px", "color": "rgb(138, 138, 138)" }}>
                <image-slot id="bureau-logo-4" data-clear-frame="" shape="rect" fit="contain" placeholder="Logo 4" data-filled="">
                  <img width="520" height="208" loading="lazy" decoding="async" alt="Logo 4" src="/assets/img/inline-9b3089f71c.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" data-screen-label="Reviews" style={{ "background": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)", "padding": "22px 40px 45px" }} className="cd-pad">
          <div style={{ "maxWidth": "900px", "margin": "0px auto", "textAlign": "center", "display": "flex", "flexDirection": "column", "gap": "16px", "alignItems": "center" }} className="cd-reviews-box">
            {" "}
            <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(12, 112, 195)" }}>
              {"Reviews"}
            </span>
            {" "}
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(0, 0, 0)" }} className="cd-sechead">
              {"What Clients Are Saying"}
            </h2>
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px" }}>
              {" "}
              <span style={{ "fontSize": "24px", "color": "rgb(255, 186, 64)", "letterSpacing": "4px" }}>
                {"★★★★★"}
              </span>
              {" "}
              <span style={{ "fontSize": "15px", "fontWeight": "700", "color": "rgb(0, 0, 0)" }}>
                {"200+ 5-star reviews"}
              </span>
              {" "}
            </div>
            <TrustindexWidget src="https://cdn.trustindex.io/loader.js?08ef8816382532577666329ed3b" />
          </div>
        </section>
        <section id="plans" data-screen-label="Three ways" style={{ "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "padding": "55px 40px" }} className="cd-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "textAlign": "center", "display": "flex", "flexDirection": "column", "gap": "12px", "alignItems": "center" }}>
            {" "}
            <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
              {"Choose Your Path"}
            </span>
            {" "}
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }} className="cd-sechead">
              {"Three Ways To"}
              <br className="cd-mbr" />
              {" Transform Your Credit"}
            </h2>
          </div>
          <div style={{ "maxWidth": "1280px", "margin": "56px auto 0px", "display": "grid", "gridTemplateColumns": "repeat(3, 1fr)", "gap": "26px", "alignItems": "stretch" }} className="cd-trio">
            <div className="cd-plan-ca hm-scpa" style={{ "position": "relative", "paddingTop": "22px", "transition": "transform 0.25s", "cursor": "pointer" }}>
              <div style={{ "position": "absolute", "top": "0px", "left": "50%", "transform": "translateX(-50%)", "zIndex": "2", "display": "inline-flex", "alignItems": "center", "padding": "11px 22px", "borderRadius": "999px", "background": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)", "fontFamily": "var(--font-display)", "fontSize": "14px", "letterSpacing": "0.08em", "textTransform": "uppercase", "whiteSpace": "nowrap", "boxShadow": "rgba(0, 0, 0, 0.45) 0px 8px 24px", "gap": "9px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ "flex": "0 0 auto" }}>
                  <rect x="3" y="5" width="18" height="16" rx="2.5" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                </svg>
                {"Flexible Monthly Option"}
              </div>
              <div className="hm-scpb" style={{ "position": "relative", "height": "100%", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "border": "1px solid rgba(255, 255, 255, 0.35)", "borderRadius": "26px", "background": "linear-gradient(rgb(13, 42, 69) 0%, rgb(8, 19, 31) 22%, rgb(5, 7, 8) 60%, rgb(5, 7, 8) 100%)", "boxShadow": "rgba(0, 173, 238, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.6) 0px 18px 50px", "overflow": "hidden", "padding": "46px 34px 34px", "transition": "transform 0.25s, border-color 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
                <div style={{ "textAlign": "center", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "32px", "lineHeight": "1.02", "textTransform": "uppercase", "whiteSpace": "nowrap", "color": "rgb(255, 255, 255)" }}>
                    {"Credit Accelerator 🚀"}
                  </h3>
                  {" "}
                  <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                    {"Fully Done-For-You Credit Repair"}
                  </span>
                  {" "}
                </div>
                <p style={{ "margin": "20px 0px 0px", "textAlign": "center", "fontSize": "14px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.65)", "textWrap": "pretty" }}>
                  {"Our most popular program for clients who want professional credit repair without the time, stress, or guesswork of doing it themselves."}
                </p>
                <div style={{ "margin": "24px 0px 26px" }}>
                  <Link href="/accelerator/" className="hm-scp4" style={{ "display": "inline-flex", "width": "100%", "boxSizing": "border-box", "alignItems": "center", "justifyContent": "center", "height": "54px", "borderRadius": "12px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "19px", "letterSpacing": "0.05em", "textTransform": "uppercase", "boxShadow": "rgba(12, 112, 195, 0.45) 0px 10px 30px", "transition": "background 0.2s, color 0.2s", "cursor": "pointer" }}>
                    {"Learn More"}
                  </Link>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Full-Service Credit Repair"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"We Handle The Work"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Unlimited Negative Item Challenges"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Ongoing Expert Guidance"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Built For Busy Lifestyles"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cd-plan-bp hm-scpa" style={{ "position": "relative", "paddingTop": "22px", "transition": "transform 0.25s", "cursor": "pointer" }}>
              <div style={{ "position": "absolute", "top": "0px", "left": "50%", "transform": "translateX(-50%)", "zIndex": "2", "display": "inline-flex", "alignItems": "center", "padding": "11px 22px", "borderRadius": "999px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "14px", "letterSpacing": "0.08em", "textTransform": "uppercase", "whiteSpace": "nowrap", "boxShadow": "rgba(0, 0, 0, 0.45) 0px 8px 24px", "gap": "9px" }}>
                <svg width="12" height="17" viewBox="0 0 12 17" fill="currentColor" style={{ "flex": "0 0 auto" }}>
                  <path d="M7.4 0 0 9.6h4.1L3.4 17 12 6.9H7l.4-6.9Z" />
                </svg>
                {"Most Popular & Fastest Results"}
              </div>
              <div className="hm-scpc" style={{ "position": "relative", "height": "100%", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "border": "3px solid rgb(12, 112, 195)", "borderRadius": "26px", "background": "linear-gradient(rgb(13, 42, 69) 0%, rgb(8, 19, 31) 22%, rgb(5, 7, 8) 60%, rgb(5, 7, 8) 100%)", "boxShadow": "rgba(12, 112, 195, 0.45) 0px 0px 34px, rgba(12, 112, 195, 0.22) 0px 0px 90px, rgba(0, 0, 0, 0.6) 0px 18px 50px", "overflow": "hidden", "padding": "46px 34px 34px", "transition": "transform 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
                <div style={{ "textAlign": "center", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "36px", "lineHeight": "1.02", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                    {"The Credit Danny"}
                    <br />
                    {"Blueprint 🏆"}
                  </h3>
                  {" "}
                  <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                    {"VIP Program"}
                  </span>
                  {" "}
                </div>
                <p style={{ "margin": "20px 0px 0px", "textAlign": "center", "fontSize": "14px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.65)", "textWrap": "pretty" }}>
                  {"Our highest-level fast-track experience personally overseen by Danny and his legal team."}
                </p>
                <div style={{ "margin": "24px 0px 26px" }}>
                  <Link href="/blueprint/" className="hm-scp4" style={{ "display": "inline-flex", "width": "100%", "boxSizing": "border-box", "alignItems": "center", "justifyContent": "center", "height": "54px", "borderRadius": "12px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "19px", "letterSpacing": "0.05em", "textTransform": "uppercase", "boxShadow": "rgba(12, 112, 195, 0.45) 0px 10px 30px", "transition": "background 0.2s, color 0.2s", "cursor": "pointer" }}>
                    {"Learn More"}
                  </Link>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Managed by Danny Himself from Start to Finish"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Personalized Strategy"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Priority Processing"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Most Aggressive Dispute Methods"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Private Client Support"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Best for High Urgency Situations"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cd-plan-sp hm-scpa" style={{ "position": "relative", "paddingTop": "22px", "transition": "transform 0.25s", "cursor": "pointer" }}>
              <div style={{ "position": "absolute", "top": "0px", "left": "50%", "transform": "translateX(-50%)", "zIndex": "2", "display": "inline-flex", "alignItems": "center", "padding": "11px 22px", "borderRadius": "999px", "background": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)", "fontFamily": "var(--font-display)", "fontSize": "14px", "letterSpacing": "0.08em", "textTransform": "uppercase", "whiteSpace": "nowrap", "boxShadow": "rgba(0, 0, 0, 0.45) 0px 8px 24px", "gap": "9px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ "flex": "0 0 auto" }}>
                  <path d="M12 21s-6.7-4.3-9.2-8.2C.6 9.4 2.2 5.5 5.7 4.6c2-.5 3.9.3 5 1.8 1.1-1.5 3-2.3 5-1.8 3.5.9 5.1 4.8 2.9 8.2C18.7 16.7 12 21 12 21Z" />
                </svg>
                {"Our Give Back Program"}
              </div>
              <div className="hm-scpb" style={{ "position": "relative", "height": "100%", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "border": "1px solid rgba(255, 255, 255, 0.35)", "borderRadius": "26px", "background": "linear-gradient(rgb(13, 42, 69) 0%, rgb(8, 19, 31) 22%, rgb(5, 7, 8) 60%, rgb(5, 7, 8) 100%)", "boxShadow": "rgba(0, 173, 238, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.6) 0px 18px 50px", "overflow": "hidden", "padding": "46px 34px 34px", "transition": "transform 0.25s, border-color 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
                <div style={{ "textAlign": "center", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "36px", "lineHeight": "1.02", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                    {"THE CREDIT DANNY SPONSORSHIP ❤️"}
                  </h3>
                  {" "}
                  <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                    {"Sponsored Client Program"}
                  </span>
                  {" "}
                </div>
                <p style={{ "margin": "20px 0px 0px", "textAlign": "center", "fontSize": "14px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.65)", "textWrap": "pretty" }}>
                  {"A unique opportunity for qualified individuals to receive credit repair services at no additional cost while actively participating in the Credit Danny community."}
                </p>
                <div style={{ "margin": "24px 0px 26px" }}>
                  <Link href="/sponsorship/" className="hm-scp4" style={{ "display": "inline-flex", "width": "100%", "boxSizing": "border-box", "alignItems": "center", "justifyContent": "center", "height": "54px", "borderRadius": "12px", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "19px", "letterSpacing": "0.05em", "textTransform": "uppercase", "boxShadow": "rgba(12, 112, 195, 0.45) 0px 10px 30px", "transition": "background 0.2s, color 0.2s", "cursor": "pointer" }}>
                    {"Learn More"}
                  </Link>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Free Credit Repair For Qualified Applicants"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Personalized Credit Improvement Plan"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Access to Credit Danny's Community"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Ongoing Progress Tracking"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "rgb(12, 112, 195)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flex": "0 0 auto", "marginTop": "1px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.88)" }}>
                      {"Eligibility for Special Promotions & Giveaways"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="guarantee" data-screen-label="Guarantee" style={{ "position": "relative", "background": "linear-gradient(150deg, rgb(0, 0, 0) 0%, rgb(0, 35, 79) 55%, rgb(12, 112, 195) 100%)", "padding": "55px 40px", "overflow": "hidden" }} className="cd-pad">
          <div style={{ "position": "relative", "maxWidth": "860px", "margin": "0px auto", "textAlign": "center", "display": "flex", "flexDirection": "column", "gap": "16px", "alignItems": "center" }}>
            {" "}
            <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
              {"The Credit Danny Guarantee"}
            </span>
            {" "}
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }} className="cd-sechead">
              {"90 Days. Real Results."}
              <br />
              {"Or Your Money Back."}
            </h2>
          </div>
          <div style={{ "position": "relative", "maxWidth": "960px", "margin": "44px auto 0px", "borderRadius": "22px", "background": "rgba(0, 0, 0, 0.55)", "border": "1px solid rgba(255, 255, 255, 0.15)", "backdropFilter": "blur(24px)", "padding": "44px", "display": "flex", "alignItems": "center", "gap": "40px", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 30px 70px" }} className="cd-card-pad">
            <div style={{ "width": "300px", "height": "300px", "flex": "0 0 auto" }} data-lottie="/assets/js/lottie/guarantee-lottie.json" data-lottie-fit="slice" />
            <div style={{ "flex": "1 1 auto", "display": "flex", "flexDirection": "column", "gap": "16px", "alignItems": "flex-start", "textAlign": "left" }}>
              <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.8", "color": "rgba(255, 255, 255, 0.85)", "textWrap": "pretty" }}>
                {"Every client is protected by a written, contract-backed "}
                <strong style={{ "color": "rgb(255, 255, 255)" }}>
                  {"90-day guarantee"}
                </strong>
                {"."}
              </p>
              <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.8", "color": "rgba(255, 255, 255, 0.85)", "textWrap": "pretty" }}>
                {"If you don't see real, verifiable credit improvement within the first 90 days, you're refunded 100% of your program investment."}
              </p>
              <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.8", "color": "rgb(255, 255, 255)" }}>
                {"No explanations. No runaround."}
              </p>
              <p style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "24px", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"This isn't a promise. It's a standard."}
              </p>
              {" "}
              <img width="1024" height="244" loading="lazy" decoding="async" src="/assets/img/danny-sig-white-1024x244.png" alt="Danny signature" style={{ "width": "210px", "height": "auto", "marginTop": "8px" }} />
              {" "}
            </div>
          </div>
        </section>
        <section data-screen-label="Value props" style={{ "background": "rgb(0, 0, 0)", "padding": "50px 40px" }} className="cd-pad">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "repeat(4, 1fr)", "gap": "20px" }} className="cd-vprops cd-quad">
            <div className="hm-scpd" style={{ "position": "relative", "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "20px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "12px", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px", "overflow": "hidden", "cursor": "pointer" }}>
              <div style={{ "width": "100%", "height": "150px", "marginBottom": "6px" }} data-lottie="/assets/js/lottie/lottie-credit-score.json" data-lottie-fit="meet" />
              <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "24px", "lineHeight": "1.08", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Say Goodbye To Bad Credit"}
              </h3>
              <p style={{ "margin": "0px", "fontSize": "14px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.62)", "textWrap": "pretty" }}>
                {"We remove inaccurate, outdated, and unverifiable negative items, including collections, repossessions, charge-offs, and medical debt."}
              </p>
            </div>
            <div className="hm-scpd" style={{ "position": "relative", "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "20px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "12px", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px", "overflow": "hidden", "cursor": "pointer" }}>
              <div style={{ "width": "100%", "height": "150px", "marginBottom": "6px" }} data-lottie="/assets/js/lottie/money.json" data-lottie-fit="meet" />
              <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "24px", "lineHeight": "1.08", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Own Your Financial Future"}
              </h3>
              <p style={{ "margin": "0px", "fontSize": "14px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.62)", "textWrap": "pretty" }}>
                {"This isn't just credit repair. It's understanding how credit actually works, so you're not dependent on anyone long-term."}
              </p>
            </div>
            <div className="hm-scpd" style={{ "position": "relative", "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "20px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "12px", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px", "overflow": "hidden", "cursor": "pointer" }}>
              <div style={{ "width": "100%", "height": "150px", "marginBottom": "6px" }} data-lottie="/assets/js/lottie/money-flyAnimation-1748315147317.json" data-lottie-fit="meet" />
              <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "24px", "lineHeight": "1.08", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "whiteSpace": "nowrap" }} className="cd-wrap">
                {"Build A Business That Thrives"}
              </h3>
              <p style={{ "margin": "0px", "fontSize": "14px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.62)", "textWrap": "pretty" }}>
                {"Strong credit creates leverage. We help business owners position their credit to access funding and scale with confidence."}
              </p>
            </div>
            <div className="hm-scpd" style={{ "position": "relative", "background": "linear-gradient(160deg, rgba(12, 112, 195, 0.28), rgba(8, 30, 52, 0.32) 55%, rgba(10, 14, 22, 0.4))", "backdropFilter": "blur(26px)", "border": "1px solid rgba(0, 173, 238, 0.35)", "borderRadius": "20px", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "12px", "boxShadow": "rgba(255, 255, 255, 0.28) 0px 1px 0px inset, rgba(12, 112, 195, 0.16) 0px 0px 40px inset, rgba(0, 0, 0, 0.45) 0px 14px 40px", "overflow": "hidden", "cursor": "pointer" }}>
              <div style={{ "width": "100%", "height": "150px", "marginBottom": "6px" }} data-lottie="/assets/js/lottie/lottie-clapping-hands.json" data-lottie-fit="meet" />
              <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "24px", "lineHeight": "1.08", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Real Talk. Real Results."}
              </h3>
              <p style={{ "margin": "0px", "fontSize": "14px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.62)", "textWrap": "pretty" }}>
                {"No hype. No misleading claims. Just transparency, accountability, and a clear process."}
              </p>
            </div>
          </div>
        </section>
        <section id="stories" data-screen-label="Transformations" style={{ "position": "relative", "background": "linear-gradient(rgb(0, 0, 0), rgb(7, 21, 39) 40%, rgb(0, 0, 0))", "overflow": "hidden", "paddingBottom": "35px" }}>
          <div style={{ "position": "relative", "maxWidth": "1200px", "margin": "0px auto", "padding": "35px 40px 0px", "textAlign": "center" }} className="cd-inner-pad">
            {" "}
            <span style={{ "display": "block", "marginBottom": "18px", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(12, 112, 195)" }}>
              {"Real People. Real Results."}
            </span>
            {" "}
            <h2 style={{ "margin": "0px 0px 56px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }} className="cd-sechead">
              {"Our Credit Transformations"}
            </h2>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="cd-story-pad cd-story cd-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="wwa38udafy" aspect="0.5625" class="cd-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="cd-playmark">
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
                {"Results From Our Credit Blueprint Plan"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "66px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"From The 500's To The High 700's"}
                <br />
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"In Under 90 Days"}
                </span>
              </h3>
              <p style={{ "margin": "0px 0px 18px", "fontFamily": "var(--font-display)", "fontSize": "30px", "lineHeight": "1.15", "textTransform": "uppercase", "color": "var(--color-white)" }}>
                {"How Rayleen Turned Her Dream Mercedes Into A Reality"}
              </p>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rayleencook" className="hm-scp1" style={{ "display": "inline-block", "marginBottom": "18px", "fontSize": "14px", "fontWeight": "700", "color": "rgb(12, 112, 195)", "cursor": "pointer" }}>
                {"@rayleencook"}
              </a>
              {" "}
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"When Rayleen first came to Danny, her credit scores were in the 500s and getting approved for her dream car felt out of reach. Her goal was simple: buy a Mercedes in her own name."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Through the strategy and guidance inside the Credit Blueprint program, Danny helped Rayleen rebuild her credit profile and raise her scores into the high 700s in under 90 days. Because of that transformation, Rayleen was able to purchase her dream Mercedes, with no co-signer required."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="cd-story-pad cd-story cd-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Sponsorship Program Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "66px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Jaques Increased His Credit Over "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"140 Points"}
                </span>
                {" In Under 30 Days"}
              </h3>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mafiosoofvegas" className="hm-scp1" style={{ "display": "inline-block", "marginBottom": "18px", "fontSize": "14px", "fontWeight": "700", "color": "rgb(12, 112, 195)", "cursor": "pointer" }}>
                {"@mafiosoofvegas"}
              </a>
              {" "}
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Jaques came into Project 500 ready to take control of his credit and create better opportunities for his future. By committing to the process and following the strategy we provided, his credit score increased by over 140 points in under 30 days."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"But what stood out most to him wasn't just the results. Jaques shared how much he appreciated the way we do business: transparently, ethically, and with a genuine commitment to helping people the right way."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="asx3od5z4d" aspect="0.5625" class="cd-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="cd-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="cd-story-pad cd-story cd-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="9831m0fzv3" aspect="0.5625" class="cd-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="cd-playmark">
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
                {"Results From Our Credit Blueprint Plan"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "66px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"One Credit "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Decision"}
                </span>
                {". Now The Whole Family Is In The "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"700's"}
                </span>
              </h3>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ddelaney_mommy" className="hm-scp1" style={{ "display": "inline-block", "marginBottom": "18px", "fontSize": "14px", "fontWeight": "700", "color": "rgb(12, 112, 195)", "cursor": "pointer" }}>
                {"@ddelaney_mommy"}
              </a>
              {" "}
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Justin and Danielle came to us with one goal: fix their credit and create better opportunities for their family. After committing to the process inside the Credit Blueprint program, their scores quickly climbed into the 700 Club."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Their transformation inspired the people closest to them, including their sisters, mother-in-law, and even close friends, to go through the program as well. One by one they trusted the process. Today, every single one of them is now in the 700 Club."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="cd-story-pad cd-story cd-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Results From Our Credit Blueprint Plan"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "66px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Micayla Raised Her Credit"}
                <br />
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"265 Points"}
                </span>
                {" In Just 45 Days"}
              </h3>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/strongher_withlayla" className="hm-scp1" style={{ "display": "inline-block", "marginBottom": "18px", "fontSize": "14px", "fontWeight": "700", "color": "rgb(12, 112, 195)", "cursor": "pointer" }}>
                {"@strongher_withlayla"}
              </a>
              {" "}
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"When Micayla came to Danny, her credit was holding her back from the opportunities she wanted. Through the strategy and guidance inside the Credit Blueprint program, her credit score increased by 265 points in just 45 days, pushing her into the high 700s."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"What once felt out of reach quickly became possible. Today, Micayla is proof that when you take control of your credit, you take control of your future."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="gorhj0mhpa" aspect="0.5625" class="cd-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="cd-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)" }} className="cd-story-pad cd-story cd-story-media-first">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="03m7xewg2a" aspect="0.5625" class="cd-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="cd-playmark">
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
                {"Results From Our Credit Blueprint Plan"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "66px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Credit Restored + "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"$100K"}
                </span>
                {" In "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Business Funding Approved"}
                </span>
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"When Ryan and his wife joined, they were stuck in the low 500s, crushed by years of denials and weighed down by negatives. In less than 90 days, we deleted every single negative item holding them back and pushed them both into the high 700s."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Through our exclusive private funding connections, Ryan's business was approved for over $100,000 in funding, capital he never would've accessed without the Blueprint. From frustrated and stuck to fully funded and finally free. This is what transformation looks like."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gap": "56px", "alignItems": "center", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)" }} className="cd-story-pad cd-story cd-story-media-last">
            <div>
              {" "}
              <span className="cd-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "marginBottom": "20px", "padding": "9px 18px", "borderRadius": "999px", "background": "rgba(12, 112, 195, 0.16)", "border": "1px solid rgba(12, 112, 195, 0.55)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
                {"Sponsorship Program Success Story"}
              </span>
              {" "}
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "textTransform": "uppercase", "fontSize": "66px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }}>
                {"Sulem Saw An "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"80+ Point"}
                </span>
                {" Credit Increase In Under 30 Days"}
              </h3>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sulemcalderon" className="hm-scp1" style={{ "display": "inline-block", "marginBottom": "18px", "fontSize": "14px", "fontWeight": "700", "color": "rgb(12, 112, 195)", "cursor": "pointer" }}>
                {"@sulemcalderon"}
              </a>
              {" "}
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Sulem came to Credit Danny through Project 500 ready to take control of her credit and create better opportunities for her future. After committing to the process and following the strategy provided through the program, Sulem saw her credit score increase by over 80 points in under 30 days."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Sulem shared how much she appreciated that we didn't treat her like just another number. At Credit Danny, every client matters. We approach every file with care, attention, and integrity."}
                </p>
              </div>
            </div>
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="9282m60qds" aspect="0.5625" class="cd-player" />
              {" "}
              <div style={{ "position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none" }} className="cd-playmark">
                <div style={{ "width": "76px", "height": "76px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                  <svg width="24" height="27" viewBox="0 0 28 32" fill="none">
                    <path d="M27 14.27a2 2 0 0 1 0 3.46L3 31.6A2 2 0 0 1 0 29.87V2.13A2 2 0 0 1 3 .4l24 13.87Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style={{ "display": "flex", "justifyContent": "center", "marginTop": "48px" }}>
            {" "}
            <Link href="/transformations/" className="hm-scp3" style={{ "display": "inline-flex", "alignItems": "center", "height": "54px", "padding": "0px 34px", "borderRadius": "12px", "border": "1px solid rgb(12, 112, 195)", "background": "rgb(12, 112, 195)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontSize": "18px", "textTransform": "uppercase", "letterSpacing": "0.04em", "boxShadow": "rgba(12, 112, 195, 0.45) 0px 14px 34px", "transition": "background 0.2s, color 0.2s, border-color 0.2s", "cursor": "pointer" }}>
              {"View More Credit Transformations"}
            </Link>
            {" "}
          </div>
        </section>
        <section data-screen-label="Why choose" style={{ "position": "relative", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(3, 22, 48) 50%, rgb(0, 0, 0) 100%)", "padding": "55px 40px", "overflow": "hidden" }} className="cd-pad">
          <div style={{ "position": "relative", "maxWidth": "900px", "margin": "0px auto", "textAlign": "center", "display": "flex", "flexDirection": "column", "gap": "16px", "alignItems": "center" }}>
            {" "}
            <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(0, 173, 238)" }}>
              {"The Difference"}
            </span>
            {" "}
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }} className="cd-sechead">
              {"Why Clients Choose Credit Danny"}
            </h2>
            <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.7)" }}>
              {"We don't just dispute. We build strategies."}
              <br />
              {"We teach. We care. We transform lives."}
            </p>
          </div>
          <div style={{ "position": "relative", "maxWidth": "1000px", "margin": "52px auto 0px", "display": "grid", "gridTemplateColumns": "repeat(2, 1fr)", "gap": "24px" }} className="cd-duo">
            <div className="hm-scpe" style={{ "background": "rgb(13, 13, 15)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "22px", "padding": "36px", "display": "flex", "flexDirection": "column", "gap": "16px", "transition": "border-color 0.25s, transform 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "24px", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Other Credit Repair Companies"}
              </h3>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgba(220, 60, 60, 0.18)", "color": "rgb(255, 107, 107)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✕"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgba(255, 255, 255, 0.65)" }}>
                  {"Generic dispute templates"}
                </span>
              </div>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgba(220, 60, 60, 0.18)", "color": "rgb(255, 107, 107)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✕"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgba(255, 255, 255, 0.65)" }}>
                  {"Outsourced / limited support"}
                </span>
              </div>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgba(220, 60, 60, 0.18)", "color": "rgb(255, 107, 107)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✕"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgba(255, 255, 255, 0.65)" }}>
                  {"Focus on quick sales"}
                </span>
              </div>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgba(220, 60, 60, 0.18)", "color": "rgb(255, 107, 107)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✕"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgba(255, 255, 255, 0.65)" }}>
                  {"No education"}
                </span>
              </div>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgba(220, 60, 60, 0.18)", "color": "rgb(255, 107, 107)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✕"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgba(255, 255, 255, 0.65)" }}>
                  {"No transparency"}
                </span>
              </div>
            </div>
            <div className="hm-scpf" style={{ "background": "linear-gradient(150deg, rgb(12, 112, 195), rgb(0, 74, 134))", "border": "1px solid rgba(255, 255, 255, 0.2)", "borderRadius": "22px", "padding": "36px", "display": "flex", "flexDirection": "column", "gap": "16px", "boxShadow": "rgba(12, 112, 195, 0.35) 0px 24px 60px", "transition": "border-color 0.25s, transform 0.25s, box-shadow 0.25s", "cursor": "pointer" }}>
              <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "24px", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                {"Credit Danny"}
              </h3>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "color": "rgb(12, 112, 195)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✓"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgb(255, 255, 255)" }}>
                  {"Custom strategy for your file"}
                </span>
              </div>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "color": "rgb(12, 112, 195)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✓"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgb(255, 255, 255)" }}>
                  {"Real communication & real support"}
                </span>
              </div>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "color": "rgb(12, 112, 195)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✓"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgb(255, 255, 255)" }}>
                  {"Focus on long-term results"}
                </span>
              </div>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "color": "rgb(12, 112, 195)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✓"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgb(255, 255, 255)" }}>
                  {"Teach you how credit works"}
                </span>
              </div>
              <div style={{ "display": "flex", "gap": "11px", "alignItems": "center" }}>
                <span style={{ "width": "20px", "height": "20px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "color": "rgb(12, 112, 195)", "display": "grid", "placeItems": "center", "fontSize": "11px", "fontWeight": "800", "flex": "0 0 auto" }}>
                  {"✓"}
                </span>
                <span style={{ "fontSize": "14px", "color": "rgb(255, 255, 255)" }}>
                  {"Full transparency & updates"}
                </span>
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
        <section id="faq" data-screen-label="FAQ" style={{ "background": "rgb(255, 255, 255)", "color": "rgb(0, 0, 0)", "padding": "55px 40px" }} className="cd-pad">
          <div style={{ "maxWidth": "860px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "gap": "12px", "alignItems": "center", "textAlign": "center" }}>
            {" "}
            <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(12, 112, 195)" }}>
              {"FAQ"}
            </span>
            {" "}
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "textTransform": "uppercase", "color": "rgb(0, 0, 0)" }} className="cd-sechead">
              {"Frequently Asked Questions"}
            </h2>
          </div>
          <div style={{ "maxWidth": "860px", "margin": "44px auto 0px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
            <details style={{ "background": "rgb(255, 255, 255)", "border": "1px solid rgba(0, 0, 0, 0.1)", "borderRadius": "16px", "padding": "22px 26px" }}>
              <summary style={{ "cursor": "pointer", "listStyle": "none", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px", "fontFamily": "var(--font-display)", "fontSize": "20px", "textTransform": "uppercase", "color": "#000" }}>
                <span>
                  {"How does the process work?"}
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C70C3" strokeWidth="2.2" strokeLinecap="round" style={{ "flex": "none" }} aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </summary>
              <p style={{ "margin": "14px 0px 0px", "fontSize": "14px", "lineHeight": "1.8", "color": "rgb(90, 90, 90)" }}>
                {"The process begins with reviewing your credit situation and identifying negative report items that may be appropriate to challenge. From there, we work alongside you on a plan designed around your individual profile and goals. Progress can take time, and a thoughtful approach is more effective than relying on shortcuts or unrealistic promises."}
              </p>
            </details>
            <details style={{ "background": "rgb(255, 255, 255)", "border": "1px solid rgba(0, 0, 0, 0.1)", "borderRadius": "16px", "padding": "22px 26px" }}>
              <summary style={{ "cursor": "pointer", "listStyle": "none", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px", "fontFamily": "var(--font-display)", "fontSize": "20px", "textTransform": "uppercase", "color": "#000" }}>
                <span>
                  {"How long does credit repair take?"}
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C70C3" strokeWidth="2.2" strokeLinecap="round" style={{ "flex": "none" }} aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </summary>
              <p style={{ "margin": "14px 0px 0px", "fontSize": "14px", "lineHeight": "1.8", "color": "rgb(90, 90, 90)" }}>
                {"Timing varies from one client to another. Your credit profile, the number and type of items involved, and how those items are handled can all affect the process. Our approach is strategic rather than presenting credit repair as an instant solution."}
              </p>
            </details>
            <details style={{ "background": "rgb(255, 255, 255)", "border": "1px solid rgba(0, 0, 0, 0.1)", "borderRadius": "16px", "padding": "22px 26px" }}>
              <summary style={{ "cursor": "pointer", "listStyle": "none", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px", "fontFamily": "var(--font-display)", "fontSize": "20px", "textTransform": "uppercase", "color": "#000" }}>
                <span>
                  {"Can I still work toward my financial goals while improving my credit?"}
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C70C3" strokeWidth="2.2" strokeLinecap="round" style={{ "flex": "none" }} aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </summary>
              <p style={{ "margin": "14px 0px 0px", "fontSize": "14px", "lineHeight": "1.8", "color": "rgb(90, 90, 90)" }}>
                {"Your goals may include buying a home, financing a vehicle, or seeking capital for a business. We help you understand how your credit profile may relate to those plans and work toward stronger credit over time. Because every financial situation is different, results and timing will vary."}
              </p>
            </details>
            <details style={{ "background": "rgb(255, 255, 255)", "border": "1px solid rgba(0, 0, 0, 0.1)", "borderRadius": "16px", "padding": "22px 26px" }}>
              <summary style={{ "cursor": "pointer", "listStyle": "none", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px", "fontFamily": "var(--font-display)", "fontSize": "20px", "textTransform": "uppercase", "color": "#000" }}>
                <span>
                  {"Why do I need Smart Credit?"}
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C70C3" strokeWidth="2.2" strokeLinecap="round" style={{ "flex": "none" }} aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </summary>
              <p style={{ "margin": "14px 0px 0px", "fontSize": "14px", "lineHeight": "1.8", "color": "rgb(90, 90, 90)" }}>
                {"SmartCredit is how we monitor your credit throughout the program. It gives our team access to your updated credit reports and scores so we can track changes, measure your progress, and adjust your strategy along the way. Think of it as the dashboard that helps us see exactly what’s happening with your credit."}
              </p>
            </details>
            <details style={{ "background": "rgb(255, 255, 255)", "border": "1px solid rgba(0, 0, 0, 0.1)", "borderRadius": "16px", "padding": "22px 26px" }}>
              <summary style={{ "cursor": "pointer", "listStyle": "none", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px", "fontFamily": "var(--font-display)", "fontSize": "20px", "textTransform": "uppercase", "color": "#000" }}>
                <span>
                  {"What should I keep in mind during credit repair?"}
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C70C3" strokeWidth="2.2" strokeLinecap="round" style={{ "flex": "none" }} aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </summary>
              <p style={{ "margin": "14px 0px 0px", "fontSize": "14px", "lineHeight": "1.8", "color": "rgb(90, 90, 90)" }}>
                {"Credit repair works best when it is part of a larger commitment to responsible credit habits and informed financial decisions. We provide guidance around the credit repair process, while you remain focused on your broader financial objectives and the decisions that support them."}
              </p>
            </details>
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27262558">
                      <Link href="/home-buying-blueprint/" className="elementor-item">
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
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-26018603">
                      <Link href="/#reviews" className="elementor-item elementor-item-anchor">
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-26018601">
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27262558">
                      <Link href="/home-buying-blueprint/" className="elementor-item" tabIndex={-1}>
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
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-26018603">
                      <Link href="/#reviews" className="elementor-item elementor-item-anchor" tabIndex={-1}>
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-26018601">
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
      <HomeEffects />
      <LottiePlayers />
      <OttoSeo />
    </>
  );
}
