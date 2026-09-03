import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import Link from "next/link";
import Script from "next/script";
import WistiaLoader from "@/components/WistiaLoader";
import "@/public/assets/css/pages/blueprint.css";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedHeaderTop2 from "@/components/shared/SharedHeaderTop2";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import BlueprintEffects from "@/components/effects/BlueprintEffects";
import OttoSeo from "@/components/OttoSeo";
import TrustindexWidget from "@/components/TrustindexWidget";
import HtmlClass from "@/components/HtmlClass";

/** Server-side rendered on every request (SSR); blog routes stay on ISR. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  "title": "The Credit Blueprint | VIP Credit Repair by Credit Danny",
  "description": "Our highest-level, fast-track credit repair, personally overseen by Danny and his legal team. Real consumer law, aggressive disputes, 90-day guarantee.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/blueprint/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "article",
    "title": "The Credit Blueprint | VIP Credit Repair by Credit Danny",
    "description": "Our highest-level, fast-track credit repair, personally overseen by Danny and his legal team. Real consumer law, aggressive disputes, 90-day guarantee.",
    "url": "https://creditdanny.com/blueprint/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Credit Blueprint",
        "type": "image/jpeg"
      }
    ],
    "publishedTime": "2026-08-12T08:33:26-07:00"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "The Credit Blueprint | VIP Credit Repair by Credit Danny",
    "description": "Our highest-level, fast-track credit repair, personally overseen by Danny and his legal team. Real consumer law, aggressive disputes, 90-day guarantee.",
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

export default function BlueprintPage() {
  return (
    <>
      <BodyClass className="wp-singular page-template page-template-page-blueprint page-template-page-blueprint-php page page-id-27270410 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-blueprint eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <HtmlClass className="bp-js" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRmJsdWVwcmludCUyRiZhbXA7X3dwbm9uY2U9YmY4MjUxMzk0YiJ9" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://creditdanny.com/blueprint/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"https://creditdanny.com\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"https://creditdanny.com/blueprint/\",\"name\":\"Credit Blueprint\"}}]},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/blueprint/#webpage\",\"url\":\"https://creditdanny.com/blueprint/\",\"name\":\"The Credit Blueprint | VIP Credit Repair by Credit Danny\",\"datePublished\":\"2026-08-12T08:33:26-07:00\",\"dateModified\":\"2026-08-12T08:33:26-07:00\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"https://creditdanny.com/blueprint/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/\",\"url\":\"https://creditdanny.com/author/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"The Credit Blueprint | VIP Credit Repair by Credit Danny\",\"datePublished\":\"2026-08-12T08:33:26-07:00\",\"dateModified\":\"2026-08-12T08:33:26-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"Our highest-level, fast-track credit repair, personally overseen by Danny and his legal team. Real consumer law, aggressive disputes, 90-day guarantee.\",\"name\":\"The Credit Blueprint | VIP Credit Repair by Credit Danny\",\"@id\":\"https://creditdanny.com/blueprint/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/blueprint/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/blueprint/#webpage\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Service\",\n  \"name\": \"The Credit Danny Blueprint\",\n  \"provider\": {\n    \"@type\": \"LocalBusiness\",\n    \"name\": \"Credit Danny\",\n    \"legalName\": \"Elevate Financial Services, LLC\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"2602 W Baseline Rd, Suite 30\",\n      \"addressLocality\": \"Mesa\",\n      \"addressRegion\": \"AZ\",\n      \"postalCode\": \"85202\",\n      \"addressCountry\": \"US\"\n    }\n  },\n  \"additionalType\": \"\",\n  \"serviceOutput\": \"Measurable credit score increases in 90 days or less, removal of negative items, and positioning for better home, auto, and business funding opportunities.\",\n  \"serviceType\": \"Custom Credit Strategy & Repair\",\n  \"description\": \"An exclusive, custom credit strategy program personally managed by Credit Danny. It utilizes priority handling, advanced strategies, and aggressive consumer law-based dispute methods (FCRA) to produce fast, lasting results.\",\n  \"image\": \"https://creditdanny.com/wp-content/uploads/2026/05/Group-1261155720-2.png\",\n  \"logo\": \"https://creditdanny.com/wp-content/uploads/2026/04/credit-danny-logo_white-768x144.png\",\n  \"brand\": {\n    \"@type\": \"Brand\",\n    \"name\": \"Credit Danny\"\n  },\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"name\": \"Credit Blueprint Program\",\n    \"description\": \"Bespoke plans tailored to your credit profile, focusing on legal disputes, real-time tracking, and lasting financial growth.\",\n    \"priceSpecification\": {\n      \"@type\": \"PriceSpecification\",\n      \"minPrice\": \"2900.00\",\n      \"maxPrice\": \"6500.00\",\n      \"priceCurrency\": \"USD\"\n    },\n    \"availability\": \"https://schema.org/InStock\"\n  },\n  \"availableChannel\": {\n    \"@type\": \"ServiceChannel\",\n    \"serviceUrl\": \"https://creditdanny.com/blueprint/\",\n    \"serviceLocation\": {\n      \"@type\": \"Place\",\n      \"name\": \"Credit Danny Office\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"streetAddress\": \"2602 W Baseline Rd, Suite 30\",\n        \"addressLocality\": \"Mesa\",\n        \"addressRegion\": \"AZ\",\n        \"postalCode\": \"85202\",\n        \"addressCountry\": \"US\"\n      }\n    }\n  },\n  \"potentialAction\": {\n    \"@type\": \"ReserveAction\",\n    \"name\": \"Book a 1-on-1 Consultation Call\",\n    \"target\": {\n      \"@type\": \"EntryPoint\",\n      \"urlTemplate\": \"https://creditdanny.com/blueprint-strategy/\",\n      \"inLanguage\": \"en-US\",\n      \"actionPlatform\": [\n        \"http://schema.org/DesktopWebPlatform\",\n        \"http://schema.org/MobileWebPlatform\"\n      ]\n    }\n  },\n  \"subjectOf\": {\n    \"@type\": \"WebPage\",\n    \"url\": \"https://creditdanny.com/blueprint/\",\n    \"name\": \"Credit Blueprint\"\n  },\n  \"termsOfService\": \"https://creditdanny.com/terms-and-conditions/\"\n}\n" }} />
      <WistiaLoader mediaIds={["d44ub1hyrd", "gorhj0mhpa", "wwa38udafy", "03m7xewg2a", "9831m0fzv3", "1pnk3w6xad"]} />

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
      <div style={{ "background": "rgb(5, 6, 8)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-body)", "overflowX": "hidden" }}>
        <section id="top" style={{ "position": "relative", "overflow": "hidden", "background": "radial-gradient(128% 116% at 0% 100%, rgb(12, 112, 195) 0%, rgb(11, 98, 171) 8%, rgb(9, 80, 140) 16%, rgb(8, 64, 110) 25%, rgb(6, 40, 70) 34%, rgb(3, 25, 42) 46%, rgb(1, 10, 18) 60%, rgb(0, 0, 0) 76%) rgb(0, 0, 0)" }}>
          <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(120, 190, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.09) 1px, transparent 1px)", "backgroundSize": "24px 24px, 24px 24px, 120px 120px, 120px 120px", "mixBlendMode": "screen" }} />
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "30px 40px 0px", "display": "grid", "gridTemplateColumns": "1.05fr 0.95fr", "gap": "48px", "alignItems": "center" }} className="bp-gutter bp-hero">
            <div style={{ "paddingBottom": "55px", "animation": "0.7s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal both running cdRise" }}>
              <div style={{ "display": "inline-flex", "flexDirection": "column", "alignItems": "center" }}>
                <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px", "border": "1px solid rgb(255, 255, 255)", "borderRadius": "999px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "marginBottom": "22px" }}>
                  {" "}
                  <span className="bp-dot" style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "boxShadow": "rgba(0, 173, 238, 0.75) 0px 0px 6px 2px, rgba(0, 173, 238, 0.4) 0px 0px 14px 4px" }} />
                  {" "}
                  <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.28em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                    {"Our Most Powerful Credit Transformation Program"}
                  </span>
                  {" "}
                </div>
                <h1 style={{ "margin": "0px", "width": "fit-content", "whiteSpace": "nowrap", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "lineHeight": "0.86", "letterSpacing": "-0.01em", "fontSize": "clamp(64px, 8.4vw, 112px)", "color": "var(--color-blue-600)" }}>
                  {"\n        The Blueprint\n        "}
                  <span style={{ "display": "block", "fontSize": "0.34em", "letterSpacing": "0.04em", "color": "rgb(255, 255, 255)", "marginTop": "0.2em", "textAlign": "center" }}>
                    {"By Credit Danny"}
                  </span>
                  {" "}
                </h1>
                <p style={{ "margin": "30px 0px 0px", "maxWidth": "100%", "textAlign": "center", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.12", "color": "rgb(255, 255, 255)" }}>
                  {"Not Just Credit Repair."}
                  <br className="bp-brk" />
                  {" A Custom Credit Blueprint."}
                </p>
                <p style={{ "margin": "20px 0px 0px", "maxWidth": "100%", "textAlign": "center", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Our most exclusive program is personally reviewed and managed by Credit Danny, utilizing customized strategies, priority handling, and more aggressive dispute methods designed to produce the fastest results possible."}
                </p>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px", "marginTop": "40px" }}>
                  {" "}
                  <Link href="/blueprint-application/" className="bp-scp0" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "18px 39px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                    {"Apply for the Credit Danny Blueprint"}
                  </Link>
                  {" "}
                  <span style={{ "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.45)" }}>
                    {"Serious clients only"}
                  </span>
                  {" "}
                </div>
              </div>
            </div>
            <div style={{ "position": "relative", "paddingBottom": "110px" }}>
              <div style={{ "position": "relative", "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "16 / 9", "background": "linear-gradient(200deg, rgb(7, 19, 31), rgb(10, 47, 82))", "boxShadow": "rgba(0, 0, 0, 0.55) 0px 40px 90px" }}>
                {" "}
                <wistia-player media-id="d44ub1hyrd" aspect="1.7777777777777777" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
                <div style={{ "position": "absolute", "left": "0px", "right": "0px", "bottom": "0px", "height": "38%", "background": "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))", "pointerEvents": "none" }} />
              </div>
              <div style={{ "marginTop": "16px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "12px" }}>
                {" "}
                <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"See Why Clients Choose The Credit Blueprint 🏆"}
                </span>
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "position": "relative", "borderTop": "1px solid rgba(255, 255, 255, 0.1)", "background": "rgba(0, 0, 0, 0.32)", "backdropFilter": "blur(8px)" }}>
            <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "grid", "gridTemplateColumns": "repeat(4, 1fr)" }} className="bp-gutter bp-stats">
              <div style={{ "padding": "30px 28px 30px 0px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M8.5 14.2 7 22l5-2.6L17 22l-1.5-7.8" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="bp-stat">
                    {"14+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Years of Experience"}
                </div>
              </div>
              <div style={{ "padding": "30px 28px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.4" />
                    <path d="M2.8 19c0-3.4 2.8-5.6 6.2-5.6s6.2 2.2 6.2 5.6" />
                    <path d="M16.4 5.2a3.4 3.4 0 0 1 0 6.4" />
                    <path d="M18 13.9c2.1.7 3.6 2.5 3.6 5.1" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="bp-stat">
                    {"10,000+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Clients Helped Nationwide"}
                </div>
              </div>
              <div style={{ "padding": "30px 28px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.8 3.1 1.1-6.5L2.6 9l6.5-.9L12 2.2Z" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="bp-stat">
                    {"200+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"5-Star Reviews"}
                </div>
              </div>
              <div style={{ "padding": "30px 0px 30px 28px" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.5l7.5 3v6.1c0 4.5-3.1 8.4-7.5 9.9-4.4-1.5-7.5-5.4-7.5-9.9V5.5l7.5-3Z" />
                    <path d="M8.8 11.9l2.2 2.2 4.2-4.4" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="bp-stat">
                    {"90-Day"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Money-Back Guarantee"}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="results" style={{ "padding": "60px 0px 55px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="bp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
              <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                {"The Receipts"}
              </div>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 68px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Real People."}
                <br className="bp-brk" />
                {" "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Real Results."}
                </span>
              </h2>
              <p style={{ "margin": "20px auto 0px", "maxWidth": "100%", "whiteSpace": "nowrap", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }} className="bp-nowrap">
                {"Thousands of clients have seen real results with Credit Danny."}
              </p>
            </div>
            <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "14px" }}>
              {" "}
              <button type="button" aria-label="Previous" className="bp-scp1" style={{ "flex": "0 0 auto", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.22)", "color": "rgba(255, 255, 255, 0.85)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0px", "transition": "background 220ms cubic-bezier(0.4, 0, 0.2, 1), border-color 220ms cubic-bezier(0.4, 0, 0.2, 1), color 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 5.5 8 12l6.5 6.5" />
                </svg>
                {" "}
              </button>
              {" "}
              <div data-track="results" style={{ "display": "flex", "gap": "20px", "overflowX": "auto", "scrollSnapType": "x mandatory", "scrollbarWidth": "none", "flex": "1 1 auto", "padding": "4px" }}>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="bp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="bp-score">
                        {"521"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="bp-score">
                        {"742"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Jorge G."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+221 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="bp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="bp-score">
                        {"563"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="bp-score">
                        {"771"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Samantha B."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+208 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="bp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="bp-score">
                        {"498"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="bp-score">
                        {"726"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Steven B."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+228 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="bp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="bp-score">
                        {"544"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="bp-score">
                        {"759"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Eli G."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+215 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="bp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="bp-score">
                        {"509"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="bp-score">
                        {"738"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Natalie T."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+229 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="bp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="bp-score">
                        {"531"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="bp-score">
                        {"764"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Daniel A."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+233 POINT INCREASE"}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ "position": "absolute", "top": "0px", "bottom": "0px", "left": "60px", "width": "110px", "background": "linear-gradient(270deg, rgba(5, 6, 8, 0), rgba(5, 6, 8, 0.92))", "pointerEvents": "none" }} className="bp-fade" />
              <div style={{ "position": "absolute", "top": "0px", "bottom": "0px", "right": "60px", "width": "110px", "background": "linear-gradient(90deg, rgba(5, 6, 8, 0), rgba(5, 6, 8, 0.92))", "pointerEvents": "none" }} className="bp-fade" />
              {" "}
              <button type="button" aria-label="Next" className="bp-scp1" style={{ "flex": "0 0 auto", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.22)", "color": "rgba(255, 255, 255, 0.85)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0px", "transition": "background 220ms cubic-bezier(0.4, 0, 0.2, 1), border-color 220ms cubic-bezier(0.4, 0, 0.2, 1), color 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 5.5 16 12l-6.5 6.5" />
                </svg>
                {" "}
              </button>
              {" "}
            </div>
          </div>
        </section>
        <div style={{ "background": "linear-gradient(100deg, rgb(0, 0, 0) 0%, rgb(3, 25, 42) 55%, rgb(8, 64, 110) 100%)", "borderTop": "1px solid rgba(255, 255, 255, 0.1)", "borderBottom": "1px solid rgba(255, 255, 255, 0.1)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "34px 40px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "12px", "flexWrap": "wrap" }}>
            <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "38px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "flexShrink": "0" }}>
              {"As Seen On"}
            </div>
            <div style={{ "width": "230px", "height": "56px", "flexShrink": "0", "background": "transparent" }}>
              {" "}
              <image-slot id="bp-usa-today-logo" shape="rect" fit="contain" placeholder="USA TODAY logo (transparent PNG)" data-filled="">
                <img width="400" height="75" loading="lazy" decoding="async" alt="" src="/assets/img/inline-8baba33954.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.06% 50.00%", "borderRadius": "0px" }} />
              </image-slot>
              {" "}
            </div>
          </div>
        </div>
        <section id="remove" style={{ "padding": "55px 0px", "background": "rgb(5, 6, 8)", "color": "rgb(255, 255, 255)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="bp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "44px" }}>
              <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "18px" }}>
                {"The Scope"}
              </div>
              <h2 style={{ "margin": "0px auto", "maxWidth": "900px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.4vw, 62px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Negative Items We’ve Successfully Removed For Our Clients"}
              </h2>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(4, minmax(0px, 1fr))", "gap": "16px", "maxWidth": "1000px", "margin": "0px auto" }} className="bp-chips">
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Foreclosures\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Student Loans\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Late Payments\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Bankruptcies\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Collections\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Judgments\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Repossessions\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Child Support\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Charge-Offs\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Medical Bills\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Public Records\n      "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "16px 26px", "borderRadius": "16px", "border": "1px solid rgb(255, 255, 255)", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "textTransform": "uppercase", "whiteSpace": "nowrap" }} className="bp-chip">
                {" "}
                <span style={{ "width": "24px", "height": "24px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.2 7.5L11 1" stroke="var(--color-blue-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {"\n        Hard Inquiries\n      "}
              </div>
            </div>
            <p style={{ "margin": "34px auto 0px", "maxWidth": "100%", "whiteSpace": "nowrap", "textAlign": "center", "fontSize": "14px", "fontStyle": "italic", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.6)" }} className="bp-nowrap">
              {"Results vary by file. All items are challenged based on accuracy, compliance, and applicable laws."}
            </p>
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
        <section id="difference" style={{ "padding": "60px 0px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="bp-gutter">
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(400px, 1fr))", "gap": "64px", "alignItems": "center" }} className="bp-pair bp-fail">
              <div style={{ "borderRadius": "25px", "height": "640px", "order": "2", "boxShadow": "rgba(12, 112, 195, 0.32) 0px 0px 70px 6px, rgba(0, 173, 238, 0.18) 0px 0px 24px 2px" }} className="bp-fail-media bp-photo">
                {" "}
                <image-slot id="bp-fail-photo" shape="rounded" radius="25" placeholder="Drop a photo of Danny on stage" data-filled="">
                  <img width="800" height="1200" loading="lazy" decoding="async" alt="" src="/assets/img/inline-426c3b6d8f.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50.00% 28.75%", "borderRadius": "25px" }} />
                </image-slot>
                {" "}
              </div>
              <div style={{ "order": "1" }} className="bp-fail-copy">
                <h2 style={{ "margin": "0px 0px 26px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(34px, 3.9vw, 54px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)" }}>
                  {"Why Most Credit Repair Companies "}
                  <span style={{ "color": "rgb(211, 47, 47)" }}>
                    {"Fail"}
                  </span>
                </h2>
                <p style={{ "margin": "0px 0px 8px", "fontSize": "16px", "lineHeight": "1.78", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Most rely on automation and generic letters. It’s cheaper, and it shows. Because they’re not truly analyzing your credit, most don’t get real results… and when they do, they don’t last."}
                </p>
                <p style={{ "margin": "0px 0px 30px", "fontSize": "16px", "lineHeight": "1.78", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"All it does is waste your time… and your money."}
                </p>
                <div style={{ "margin": "0px 0px 24px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(26px, 2.6vw, 36px)", "lineHeight": "1", "color": "var(--color-blue-600)" }}>
                  {"We Do It Differently"}
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "20px" }}>
                  <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start" }} className="bp-check">
                    {" "}
                    <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                      {"Every dispute is reviewed."}
                    </p>
                  </div>
                  <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start" }} className="bp-check">
                    {" "}
                    <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                      {"Every move is intentional."}
                    </p>
                  </div>
                  <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start" }} className="bp-check">
                    {" "}
                    <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                      {"Every dispute is backed by real consumer law, including FCRA, leveraging actual violations on your report."}
                    </p>
                  </div>
                  <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start" }} className="bp-check">
                    {" "}
                    <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                      {"Our legal team identifies and builds on those violations to produce real, lasting results."}
                    </p>
                  </div>
                  <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start" }} className="bp-check">
                    {" "}
                    <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                      {"Because your credit isn’t generic, and it shouldn’t be treated like it is."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="process" style={{ "padding": "60px 0px", "background": "linear-gradient(rgb(5, 6, 8), rgb(7, 21, 39) 40%, rgb(5, 6, 8))" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="bp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "60px" }}>
              <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                {"The Path"}
              </div>
              <h2 style={{ "margin": "0px 0px 20px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 64px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"How The Credit Blueprint Process Works"}
              </h2>
              <p style={{ "margin": "0px", "maxWidth": "100%", "whiteSpace": "nowrap", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }} className="bp-nowrap">
                {"Four steps from your first call to a file that is actively being worked by Danny and his team."}
              </p>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(250px, 1fr))", "gap": "20px" }}>
              <div className="bp-scp2" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "30px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "22px" }}>
                  {"Step 1"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Book Your 1-on-1 Consultation"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.6)" }}>
                  {"Meet directly with Credit Danny in person or virtually. No middlemen involved."}
                </p>
              </div>
              <div className="bp-scp2" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "30px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "22px" }}>
                  {"Step 2"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Activate"}
                  <br className="bp-unbrk" />
                  {" Smart Credit"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.6)" }}>
                  {"This allows Danny to securely review your 3-bureau credit reports and begin building a personalized strategy for your credit transformation."}
                </p>
              </div>
              <div className="bp-scp2" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "30px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "22px" }}>
                  {"Step 3"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Credit Strategy Consultation"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.6)" }}>
                  {"During your private consultation, Danny will review your credit profile, identify key issues impacting your score, and map out a tailored strategy for your transformation."}
                </p>
              </div>
              <div className="bp-scp2" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "30px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "22px" }}>
                  {"Step 4"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Your Transformation Begins"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.6)" }}>
                  {"Once onboarded, Danny and his team immediately begin working your file using custom disputes and consumer law-based strategies designed specifically for your situation."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="fit" style={{ "padding": "60px 0px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="bp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "60px" }}>
              <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                {"Selective By Design"}
              </div>
              <h2 style={{ "margin": "0px auto", "maxWidth": "900px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(34px, 4.1vw, 58px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)" }}>
                {"The Credit Blueprint Is For People Who Are Ready To Do This The Right Way"}
              </h2>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))", "gap": "60px", "alignItems": "center" }} className="bp-pair">
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "0px" }}>
                <div style={{ "display": "flex", "gap": "20px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.1)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.82)" }}>
                    {"You’ve tried the cheap options"}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "20px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.1)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.82)" }}>
                    {"You’ve seen little to no results, or results that didn’t last."}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "20px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.1)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.82)" }}>
                    {"Now you want it done right."}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "20px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.1)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.82)" }}>
                    {"A real strategy backed by consumer law, FCRA, and a legal team that identifies real violations on your report"}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "20px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.1)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.82)" }}>
                    {"No templates. No shortcuts. No wasted time."}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "20px", "padding": "22px 0px" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.82)" }}>
                    {"Just real results. Built to last."}
                  </p>
                </div>
              </div>
              <div className="bp-scp3" style={{ "background": "linear-gradient(200deg, rgb(12, 112, 195), rgb(0, 36, 63))", "borderRadius": "25px", "padding": "44px 38px", "boxShadow": "rgba(255, 255, 255, 0) 0px 0px 0px 1px inset, rgba(11, 113, 195, 0.24) 0px 8px 32px, rgba(0, 173, 238, 0.16) 0px 2px 12px", "transition": "box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "14px", "marginBottom": "18px" }}>
                  {" "}
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <path d="M12 2.5l7.5 3v6.1c0 4.5-3.1 8.4-7.5 9.9-4.4-1.5-7.5-5.4-7.5-9.9V5.5l7.5-3Z" />
                    <path d="M8.8 11.9l2.2 2.2 4.2-4.4" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "30px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                    {"Our Promise To You"}
                  </div>
                </div>
                <p style={{ "margin": "0px 0px 28px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.9)", "textAlign": "center" }}>
                  {"We combine advanced strategies, consumer law, and relentless follow-through to help you achieve real, measurable results."}
                </p>
                <div style={{ "paddingTop": "26px", "borderTop": "1px solid rgba(255, 255, 255, 0.25)" }}>
                  <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "38px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)", "textWrap": "balance", "textAlign": "center" }}>
                    {"See measurable progress in 90 days or less or you don’t pay"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ "position": "relative", "padding": "55px 0px", "background": "rgb(5, 6, 8)", "overflow": "hidden" }}>
          <div style={{ "position": "absolute", "top": "0px", "left": "50%", "transform": "translateX(-50%)", "width": "1500px", "height": "680px", "background": "radial-gradient(50% 50% at 50% 0%, rgba(12, 112, 195, 0.42), rgba(8, 64, 110, 0.18) 45%, rgba(5, 6, 8, 0) 72%)", "pointerEvents": "none" }} />
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="bp-gutter">
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "24px" }}>
              <div>
                <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                  {"Reviews"}
                </div>
                <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(34px, 4vw, 56px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                  {"What Clients Are Saying"}
                </h2>
              </div>
              <TrustindexWidget src="https://cdn.trustindex.io/loader.js?28cdc397833c7456b6762a5982e" />
              {" "}
              <Link href="/transformations/" className="bp-scp0" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.05em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "borderWidth": "medium", "borderStyle": "none", "borderColor": "currentcolor", "borderImage": "none", "padding": "18px 34px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {"See Our Credit Transformations"}
              </Link>
              {" "}
            </div>
          </div>
        </section>
        <section style={{ "padding": "55px 0px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="bp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
              <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                {"Direct Access"}
              </div>
              <h2 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 64px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Credit Danny Is The Key"}
              </h2>
              <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.6)" }}>
                {"You’ll work with me directly,"}
                <br className="bp-brk" />
                {" and my team handles the rest."}
              </p>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(250px, 1fr))", "gap": "20px" }} className="bp-key">
              <div className="bp-keycard bp-scp4" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="bp-keyrow">
                  {" "}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <circle cx="12" cy="12" r="8.5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="12" cy="12" r="1" />
                    <path d="M16.5 7.5 21 3" />
                    <path d="M17.5 3.2v3.3h3.3" />
                  </svg>
                  {" "}
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }}>
                    {"Custom Strategy"}
                  </h3>
                </div>
                <p style={{ "margin": "0px 0px 28px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)" }}>
                  {"Bespoke plans tailored to your credit profile."}
                </p>
                <div style={{ "height": "2px", "marginTop": "auto", "borderRadius": "2px", "background": "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 173, 238, 0.35))" }} />
              </div>
              <div className="bp-keycard bp-scp4" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="bp-keyrow">
                  {" "}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <path d="M6 3h7l5 5v13H6z" />
                    <path d="M13 3v5h5" />
                    <path d="M9.3 15.3l1.6 1.6 3.4-3.5" />
                  </svg>
                  {" "}
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }}>
                    {"Legal Disputes"}
                  </h3>
                </div>
                <p style={{ "margin": "0px 0px 28px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)" }}>
                  {"Certified mail disputes leveraging FCRA violations."}
                </p>
                <div style={{ "height": "2px", "marginTop": "auto", "borderRadius": "2px", "background": "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 173, 238, 0.35))" }} />
              </div>
              <div className="bp-keycard bp-scp4" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="bp-keyrow">
                  {" "}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <path d="M12 2.6l2.1 1.6 2.6-.3 1 2.4 2.4 1-.3 2.6L21.4 12l-1.6 2.1.3 2.6-2.4 1-1 2.4-2.6-.3L12 21.4l-2.1-1.6-2.6.3-1-2.4-2.4-1 .3-2.6L2.6 12l1.6-2.1-.3-2.6 2.4-1 1-2.4 2.6.3z" />
                    <path d="M8.8 12.1l2.2 2.2 4.2-4.4" />
                  </svg>
                  {" "}
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }}>
                    {"Active Support"}
                  </h3>
                </div>
                <p style={{ "margin": "0px 0px 28px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)" }}>
                  {"Real-time tracking and direct team access."}
                </p>
                <div style={{ "height": "2px", "marginTop": "auto", "borderRadius": "2px", "background": "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 173, 238, 0.35))" }} />
              </div>
              <div className="bp-keycard bp-scp4" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="bp-keyrow">
                  {" "}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <path d="M4 20V10" />
                    <path d="M10 20V4" />
                    <path d="M16 20v-7" />
                    <path d="M21 20H3" />
                  </svg>
                  {" "}
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }}>
                    {"Lasting Results"}
                  </h3>
                </div>
                <p style={{ "margin": "0px 0px 28px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)" }}>
                  {"Focused on long-term financial growth."}
                </p>
                <div style={{ "height": "2px", "marginTop": "auto", "borderRadius": "2px", "background": "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 173, 238, 0.35))" }} />
              </div>
            </div>
          </div>
        </section>
        <section id="investment" style={{ "position": "relative", "padding": "60px 0px", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(2, 16, 28) 28%, rgb(6, 40, 69) 58%, rgb(4, 24, 42) 82%, rgb(0, 0, 0) 100%)", "overflow": "hidden" }}>
          <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(0, 173, 238, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 173, 238, 0.07) 1px, transparent 1px)", "backgroundSize": "64px 64px", "maskImage": "linear-gradient(transparent 0%, rgb(0, 0, 0) 45%, rgb(0, 0, 0) 78%, transparent 100%)" }} />
          <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(0, 173, 238, 0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 173, 238, 0.11) 1px, transparent 1px)", "backgroundSize": "256px 256px", "maskImage": "linear-gradient(transparent 0%, rgb(0, 0, 0) 45%, rgb(0, 0, 0) 78%, transparent 100%)" }} />
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="bp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
              <h2 style={{ "margin": "0px 0px 20px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 64px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Determining Fit & Investment"}
              </h2>
              <p style={{ "margin": "0px auto", "maxWidth": "620px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.75)" }}>
                {"Every Credit Blueprint engagement is customized based on the complexity of your credit profile and goals."}
              </p>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(400px, 1fr))", "gap": "56px", "alignItems": "center" }} className="bp-pair">
              <div style={{ "borderRadius": "25px", "height": "620px", "boxShadow": "rgba(12, 112, 195, 0.32) 0px 0px 70px 6px, rgba(0, 173, 238, 0.18) 0px 0px 24px 2px" }} className="bp-invest-photo bp-photo">
                {" "}
                <image-slot id="bp-investment-photo" shape="rounded" radius="25" placeholder="Drop a client lifestyle photo" data-filled="">
                  <img width="1200" height="800" loading="lazy" decoding="async" alt="" src="/assets/img/inline-09eff6f77a.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "43.98% 50.00%", "borderRadius": "25px" }} />
                </image-slot>
                {" "}
              </div>
              <div>
                <h3 style={{ "margin": "0px 0px 26px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(34px, 3.8vw, 52px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)" }} className="bp-invest-title">
                  {"Your Custom Credit "}
                  <span style={{ "color": "var(--color-blue-600)" }}>
                    {"Blueprint"}
                  </span>
                </h3>
                <p style={{ "margin": "0px 0px 18px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.85)" }}>
                  {"Every credit profile is different."}
                </p>
                <p style={{ "margin": "0px 0px 18px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.85)" }}>
                  {"That’s why every strategy, and every investment in your future, is customized based on your goals, challenges, and the work required to help you get there."}
                </p>
                <p style={{ "margin": "0px 0px 22px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.85)" }}>
                  {"Your investment is determined by:"}
                </p>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px", "marginBottom": "36px" }}>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                    <span style={{ "flexShrink": "0", "width": "7px", "height": "7px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "10px" }} />
                    <span style={{ "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.85)" }}>
                      {"The complexity of your credit profile"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                    <span style={{ "flexShrink": "0", "width": "7px", "height": "7px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "10px" }} />
                    <span style={{ "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.85)" }}>
                      {"The number and severity of negative items"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                    <span style={{ "flexShrink": "0", "width": "7px", "height": "7px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "10px" }} />
                    <span style={{ "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.85)" }}>
                      {"The legal and strategic work required"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                    <span style={{ "flexShrink": "0", "width": "7px", "height": "7px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "10px" }} />
                    <span style={{ "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.85)" }}>
                      {"Your overall credit and financing goals"}
                    </span>
                  </div>
                </div>
                {" "}
                <Link href="/blueprint-application/" className="bp-invest-cta bp-scp0" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "17px 33px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  {"Apply for the Blueprint"}
                </Link>
                {" "}
              </div>
            </div>
          </div>
        </section>
        <section style={{ "padding": "60px 0px", "background": "rgb(0, 0, 0)" }}>
          <div style={{ "maxWidth": "1200px", "margin": "0px auto", "padding": "0px 40px", "display": "grid", "gridTemplateColumns": "minmax(260px, 0.7fr) minmax(0px, 1.3fr)", "gap": "32px", "placeItems": "center" }} className="bp-gutter bp-split">
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "0.94", "color": "rgb(255, 255, 255)", "textAlign": "center" }} className="bp-xl">
              {"Community"}
              <br />
              {"Appreciation"}
              <br />
              {"Discounts"}
            </h2>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(2, minmax(0px, 1fr))", "gap": "18px" }} className="bp-duo">
              <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginLeft": "32px", "padding": "8px 48px 8px 8px", "borderRadius": "16px", "border": "2px solid rgb(255, 255, 255)", "background": "linear-gradient(115deg, rgb(10, 44, 76) 0%, rgb(11, 113, 195) 100%)", "boxShadow": "rgba(11, 113, 195, 0.35) 0px 8px 28px" }}>
                {" "}
                <span style={{ "flexShrink": "0", "width": "56px", "height": "56px", "marginLeft": "-32px", "borderRadius": "50%", "background": "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) padding-box padding-box, linear-gradient(rgb(255, 255, 255) 0%, rgb(11, 113, 195) 100%) border-box border-box", "border": "3px solid transparent", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 4px 14px", "display": "inline-flex", "alignItems": "center", "justifyContent": "center" }}>
                  <img width="160" height="160" loading="lazy" decoding="async" src="/assets/img/flag-for-united-states_1f1fa-1f1f8.png" alt="United States flag" style={{ "width": "34px", "height": "34px", "objectFit": "contain", "display": "block" }} />
                </span>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "26px", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "lineHeight": "1.05" }}>
                  {"Military & Veterans"}
                </span>
                {" "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginLeft": "32px", "padding": "8px 48px 8px 8px", "borderRadius": "16px", "border": "2px solid rgb(255, 255, 255)", "background": "linear-gradient(115deg, rgb(10, 44, 76) 0%, rgb(11, 113, 195) 100%)", "boxShadow": "rgba(11, 113, 195, 0.35) 0px 8px 28px" }}>
                {" "}
                <span style={{ "flexShrink": "0", "width": "56px", "height": "56px", "marginLeft": "-32px", "borderRadius": "50%", "background": "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) padding-box padding-box, linear-gradient(rgb(255, 255, 255) 0%, rgb(11, 113, 195) 100%) border-box border-box", "border": "3px solid transparent", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 4px 14px", "display": "inline-flex", "alignItems": "center", "justifyContent": "center" }}>
                  <img width="160" height="160" loading="lazy" decoding="async" src="/assets/img/red-apple_1f34e.png" alt="Apple" style={{ "width": "34px", "height": "34px", "objectFit": "contain", "display": "block" }} />
                </span>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "26px", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "lineHeight": "1.05" }}>
                  {"Teachers & Educators"}
                </span>
                {" "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginLeft": "32px", "padding": "8px 48px 8px 8px", "borderRadius": "16px", "border": "2px solid rgb(255, 255, 255)", "background": "linear-gradient(115deg, rgb(10, 44, 76) 0%, rgb(11, 113, 195) 100%)", "boxShadow": "rgba(11, 113, 195, 0.35) 0px 8px 28px" }}>
                {" "}
                <span style={{ "flexShrink": "0", "width": "56px", "height": "56px", "marginLeft": "-32px", "borderRadius": "50%", "background": "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) padding-box padding-box, linear-gradient(rgb(255, 255, 255) 0%, rgb(11, 113, 195) 100%) border-box border-box", "border": "3px solid transparent", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 4px 14px", "display": "inline-flex", "alignItems": "center", "justifyContent": "center" }}>
                  <img width="160" height="160" loading="lazy" decoding="async" src="/assets/img/police-officer_1f46e.png" alt="Police officer" style={{ "width": "34px", "height": "34px", "objectFit": "contain", "display": "block" }} />
                </span>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "26px", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "lineHeight": "1.05" }}>
                  {"Law Enforcement"}
                </span>
                {" "}
              </div>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginLeft": "32px", "padding": "8px 48px 8px 8px", "borderRadius": "16px", "border": "2px solid rgb(255, 255, 255)", "background": "linear-gradient(115deg, rgb(10, 44, 76) 0%, rgb(11, 113, 195) 100%)", "boxShadow": "rgba(11, 113, 195, 0.35) 0px 8px 28px" }}>
                {" "}
                <span style={{ "flexShrink": "0", "width": "56px", "height": "56px", "marginLeft": "-32px", "borderRadius": "50%", "background": "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) padding-box padding-box, linear-gradient(rgb(255, 255, 255) 0%, rgb(11, 113, 195) 100%) border-box border-box", "border": "3px solid transparent", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 4px 14px", "display": "inline-flex", "alignItems": "center", "justifyContent": "center" }}>
                  <img width="160" height="160" loading="lazy" decoding="async" src="/assets/img/ambulance_1f691.png" alt="Ambulance" style={{ "width": "34px", "height": "34px", "objectFit": "contain", "display": "block" }} />
                </span>
                {" "}
                <span style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "26px", "letterSpacing": "0.02em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "lineHeight": "1.05" }}>
                  {"First Responders"}
                </span>
                {" "}
              </div>
            </div>
          </div>
        </section>
        <section id="stories" style={{ "position": "relative", "background": "rgb(0, 0, 0)", "overflow": "hidden" }}>
          <div style={{ "position": "absolute", "top": "0px", "left": "50%", "transform": "translateX(-50%)", "width": "100%", "height": "640px", "background": "radial-gradient(60% 100% at 50% 0%, rgba(10, 48, 89, 0.85), rgba(6, 26, 48, 0.45) 45%, rgba(0, 0, 0, 0) 78%)", "pointerEvents": "none" }} />
          <div style={{ "position": "relative", "maxWidth": "1200px", "margin": "0px auto", "padding": "60px 40px 0px", "textAlign": "center" }} className="bp-gutter">
            <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
              {"Results From Our Credit Blueprint Plan"}
            </div>
            <h2 style={{ "margin": "0px 0px 60px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 64px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
              {"Credit Transformations"}
            </h2>
          </div>
          <div style={{ "background": "rgb(0, 0, 0)" }}>
            <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)", "gap": "56px", "alignItems": "center" }} className="bp-story">
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="gorhj0mhpa" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
              <div>
                <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "0.98", "color": "rgb(255, 255, 255)" }} className="bp-xl">
                  {"Micayla Raised Her Credit "}
                  <span style={{ "color": "rgb(12, 112, 195)" }}>
                    {"265 Points"}
                  </span>
                  {" In Just 45 Days 📈"}
                </h3>
                <p style={{ "margin": "0px 0px 20px", "fontSize": "19px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)", "fontWeight": "500" }}>
                  {"“What once felt out of reach quickly became possible.”"}
                </p>
                <div style={{ "margin": "0px 0px 14px", "fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.1em", "textTransform": "uppercase" }}>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/strongher_withlayla" style={{ "color": "rgb(12, 112, 195)" }}>
                    {"@strongher_withlayla"}
                  </a>
                </div>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"When Micayla came to Danny, her credit was holding her back from the opportunities she wanted."}
                </p>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Through the strategy and guidance inside the Credit Blueprint program, her credit score increased by 265 points in just 45 days, pushing her into the high 700s."}
                </p>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Today, Micayla is proof that when you take control of your credit, you take control of your future."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "background": "rgb(0, 0, 0)" }}>
            <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)", "gap": "56px", "alignItems": "center" }} className="bp-story bp-story-rev">
              <div>
                <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "0.98", "color": "rgb(255, 255, 255)" }} className="bp-xl">
                  {"From The 500s To The High 700s In "}
                  <span style={{ "color": "rgb(12, 112, 195)" }}>
                    {"Under 90 Days"}
                  </span>
                  {" 🚀"}
                </h3>
                <div style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"How Rayleen Turned Her Dream Mercedes Into A Reality"}
                </div>
                <p style={{ "margin": "0px 0px 20px", "fontSize": "19px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)", "fontWeight": "500" }}>
                  {"“Her goal was simple: buy a Mercedes in her own name.”"}
                </p>
                <div style={{ "margin": "0px 0px 14px", "fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.1em", "textTransform": "uppercase" }}>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rayleencook" style={{ "color": "rgb(12, 112, 195)" }}>
                    {"@rayleencook"}
                  </a>
                </div>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"When Rayleen first came to Danny, her credit scores were in the 500s and getting approved for her dream car felt out of reach."}
                </p>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Through the strategy and guidance inside the Credit Blueprint program, Danny helped Rayleen rebuild her credit profile and raise her scores into the high 700s in under 90 days."}
                </p>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Because of that transformation, Rayleen was able to purchase her dream Mercedes, with no co-signer required."}
                </p>
              </div>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="wwa38udafy" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "background": "rgb(0, 0, 0)" }}>
            <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)", "gap": "56px", "alignItems": "center" }} className="bp-story">
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="03m7xewg2a" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
              <div>
                <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "0.98", "color": "rgb(255, 255, 255)" }} className="bp-xl">
                  {"Credit Restored + "}
                  <span style={{ "color": "rgb(12, 112, 195)" }}>
                    {"$100K In Business Funding"}
                  </span>
                  {" Approved"}
                </h3>
                <p style={{ "margin": "0px 0px 20px", "fontSize": "19px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)", "fontWeight": "500" }}>
                  {"“From frustrated and stuck to fully funded and finally free.”"}
                </p>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"When Ryan and his wife joined, they were stuck in the low 500s, crushed by years of denials and weighed down by negatives. In less than 90 days, we deleted every single negative item holding them back and pushed them both into the high 700s."}
                </p>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Through our exclusive private funding connections, Ryan’s business was approved for over $100,000 in funding, capital he never would’ve accessed without the Blueprint."}
                </p>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"From frustrated and stuck to fully funded and finally free. This is what transformation looks like."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "background": "rgb(0, 0, 0)" }}>
            <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)", "gap": "56px", "alignItems": "center" }} className="bp-story bp-story-rev">
              <div>
                <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "0.98", "color": "rgb(255, 255, 255)" }} className="bp-xl">
                  {"One Credit "}
                  <span style={{ "color": "rgb(12, 112, 195)" }}>
                    {"Decision."}
                  </span>
                  {" Now The Whole Family Is In The "}
                  <span style={{ "color": "rgb(12, 112, 195)" }}>
                    {"700’s"}
                  </span>
                </h3>
                <p style={{ "margin": "0px 0px 20px", "fontSize": "19px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)", "fontWeight": "500" }}>
                  {"“One by one they trusted the process.”"}
                </p>
                <div style={{ "margin": "0px 0px 14px", "fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.1em", "textTransform": "uppercase" }}>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ddelaney_mommy" style={{ "color": "rgb(12, 112, 195)" }}>
                    {"@ddelaney_mommy"}
                  </a>
                </div>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Justin and Danielle came to us with one goal: fix their credit and create better opportunities for their family. After committing to the process inside the Credit Blueprint program, their scores quickly climbed into the 700 Club."}
                </p>
                <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Their transformation inspired the people closest to them, including their sisters, mother-in-law, and even close friends, to go through the program as well. Today, every single one of them is now in the 700 Club."}
                </p>
              </div>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="9831m0fzv3" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
          </div>
        </section>
        <section style={{ "padding": "110px 0px 55px", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(3, 18, 31) 22%, rgb(6, 40, 69) 55%, rgb(10, 74, 128) 100%)", "position": "relative", "overflow": "hidden" }}>
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "grid", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)", "gap": "56px", "alignItems": "center" }} className="bp-gutter bp-story">
            <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
              {" "}
              <wistia-player media-id="1pnk3w6xad" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
              {" "}
            </div>
            <div>
              <h2 style={{ "margin": "0px 0px 26px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(32px, 3.6vw, 50px)", "lineHeight": "0.98", "color": "rgb(255, 255, 255)" }}>
                {"Elevate Your Credit."}
                <br />
                {"Elevate Your Life."}
              </h2>
              <p style={{ "margin": "0px 0px 18px", "fontSize": "19px", "lineHeight": "1.7", "color": "rgb(255, 255, 255)", "fontWeight": "500" }}>
                {"“I told y’all at the beginning of the year: I wanted a big-body Escalade. And guess what? I made it happen. Not by chance, but by trusting the process with Credit Danny.”"}
              </p>
              <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                {"My credit was down bad. Like, for real. I used to walk into dealerships with cash in hand, ready to buy, but still couldn’t qualify. My score was holding me back from the life I knew I could afford."}
              </p>
              <p style={{ "margin": "0px 0px 12px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                {"That’s when I linked up with Credit Danny. In less than four months, he completely flipped the script. Not only did he break down every part of my report, he gave me a game plan and stayed locked in with me through every step. Today? I’m driving off in my dream ride, a luxury Escalade."}
              </p>
              <p style={{ "margin": "0px 0px 24px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                {"This isn’t about flexing. This is about freedom. The kind of freedom that comes when your credit is finally working for you, not against you."}
              </p>
              <div style={{ "fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.6)" }}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yungreece" style={{  }}>
                  {"@Yungreece"}
                </a>
                {", Creator & Influencer"}
              </div>
            </div>
          </div>
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "48px 40px 0px", "display": "flex", "justifyContent": "center" }}>
            {" "}
            <Link href="/transformations/" className="bp-scp5" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "var(--color-blue-600)", "background": "rgb(255, 255, 255)", "border": "1px solid rgb(255, 255, 255)", "padding": "17px 33px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
              {"See Our Credit Transformations"}
            </Link>
            {" "}
          </div>
        </section>
        <section style={{ "padding": "55px 0px 110px", "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="bp-gutter">
            <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "18px", "textAlign": "center" }}>
              {"Life on the Other Side"}
            </div>
            <h2 style={{ "margin": "0px auto 56px", "maxWidth": "100%", "textAlign": "center", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(36px, 4.2vw, 58px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)", "whiteSpace": "nowrap" }} className="bp-nowrap">
              {"When Your Credit Stops Being The Obstacle"}
            </h2>
            <div className="bp-otherside-grid" style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(230px, 1fr))", "gap": "28px" }}>
              <div className="bp-scp6" style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "textAlign": "center", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <img width="256" height="256" loading="lazy" decoding="async" src="/assets/img/pasted-1785927618851-0.png" alt="" style={{ "width": "104px", "height": "104px", "objectFit": "contain", "display": "block", "margin": "0px auto 16px" }} />
                {" "}
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.65", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Finally being able to say “yes” when the right home comes along"}
                </p>
              </div>
              <div className="bp-scp6" style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "textAlign": "center", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <img width="256" height="256" loading="lazy" decoding="async" src="/assets/img/pasted-1785927825554-0.png" alt="" style={{ "width": "104px", "height": "104px", "objectFit": "contain", "display": "block", "margin": "0px auto 16px" }} />
                {" "}
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.65", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Choosing the car you want instead of settling for what you’re approved for"}
                </p>
              </div>
              <div className="bp-scp6" style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "textAlign": "center", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <img width="256" height="256" loading="lazy" decoding="async" src="/assets/img/pasted-1785927886660-0.png" alt="" style={{ "width": "104px", "height": "104px", "objectFit": "contain", "display": "block", "margin": "0px auto 16px" }} />
                {" "}
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.65", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Accessing real funding when your business is ready to grow"}
                </p>
              </div>
              <div className="bp-scp6" style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "textAlign": "center", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <img width="300" height="300" loading="lazy" decoding="async" src="/assets/img/pasted-1785927902909-0.png" alt="" style={{ "width": "104px", "height": "104px", "objectFit": "contain", "display": "block", "margin": "0px auto 16px" }} />
                {" "}
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.65", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Using credit as a tool instead of letting it control your life"}
                </p>
              </div>
              <div className="bp-scp6" style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "textAlign": "center", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <img width="256" height="256" loading="lazy" decoding="async" src="/assets/img/pasted-1785927911370-0.png" alt="" style={{ "width": "104px", "height": "104px", "objectFit": "contain", "display": "block", "margin": "0px auto 16px" }} />
                {" "}
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.65", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"Using credit rewards intentionally instead of carrying balances"}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ "position": "relative", "padding": "130px 0px", "background": "linear-gradient(200deg, rgb(5, 6, 8) 15%, rgb(6, 42, 77) 70%, rgb(12, 112, 195) 140%)", "overflow": "hidden" }} className="bp-endcta">
          <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(120, 190, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.09) 1px, transparent 1px)", "backgroundSize": "24px 24px, 24px 24px, 120px 120px, 120px 120px", "mixBlendMode": "screen" }} />
          <div style={{ "position": "relative", "maxWidth": "860px", "margin": "0px auto", "padding": "0px 40px", "textAlign": "center" }} className="bp-gutter">
            <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "22px" }}>
              {"Spots Are Limited. Serious Clients Only."}
            </div>
            <h2 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(44px, 5.6vw, 84px)", "lineHeight": "0.9", "color": "rgb(255, 255, 255)" }}>
              {"Ready To Transform"}
              <br />
              {"Your Credit?"}
            </h2>
            <p style={{ "margin": "0px 0px 38px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.7)" }}>
              {"Submit your application for the Credit Danny Blueprint today."}
            </p>
            {" "}
            <Link href="/blueprint-application/" className="bp-scp7" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "24px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(0, 0, 0)", "background": "rgb(255, 255, 255)", "border": "1px solid rgb(0, 0, 0)", "padding": "20px 39px", "borderRadius": "10px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
              {"Apply for the Credit Danny Blueprint"}
            </Link>
            {" "}
            <div style={{ "marginTop": "24px", "fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.06em", "color": "rgba(255, 255, 255, 0.55)" }}>
              {"No Obligation. 100% Confidential."}
            </div>
          </div>
        </section>
        <div style={{ "height": "76px", "background": "rgb(0, 0, 0)" }} />
        <div style={{ "position": "fixed", "left": "0px", "right": "0px", "bottom": "0px", "zIndex": "70", "background": "rgba(5, 6, 8, 0.92)", "backdropFilter": "blur(18px)", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }} className="bp-sticky">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "14px 40px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap" }} className="bp-cta">
            <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "color": "rgb(255, 255, 255)" }}>
              {"The Credit Danny "}
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Blueprint"}
              </span>
            </div>
            {" "}
            <Link href="/blueprint-application/" className="bp-scp8" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "16px", "letterSpacing": "0.05em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "12px 27px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
              {"Apply Now"}
            </Link>
            {" "}
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270410 current_page_item menu-item-27267232">
                      <Link href="/blueprint/" aria-current="page" className="elementor-item elementor-item-active">
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270410 current_page_item menu-item-27267232">
                      <Link href="/blueprint/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>
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
      <BlueprintEffects />
      <OttoSeo />
    </>
  );
}
