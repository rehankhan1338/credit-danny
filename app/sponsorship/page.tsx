import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import Link from "next/link";
import Script from "next/script";
import WistiaLoader from "@/components/WistiaLoader";
import "@/public/assets/css/pages/sponsorship.css";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import SponsorshipEffects from "@/components/effects/SponsorshipEffects";
import OttoSeo from "@/components/OttoSeo";
import TrustindexWidget from "@/components/TrustindexWidget";
import HtmlClass from "@/components/HtmlClass";

/** Server-side rendered on every request (SSR); blog routes stay on ISR. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  "title": "The Credit Danny Sponsorship Program | Free Credit Repair",
  "description": "A limited opportunity for qualified applicants to receive credit restoration support at little to no cost. Credit repair with a purpose.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/sponsorship/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "article",
    "title": "The Credit Danny Sponsorship Program | Free Credit Repair",
    "description": "A limited opportunity for qualified applicants to receive credit restoration support at little to no cost. Credit repair with a purpose.",
    "url": "https://creditdanny.com/sponsorship/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Sponsorship",
        "type": "image/jpeg"
      }
    ],
    "publishedTime": "2026-08-12T08:33:55-07:00"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "The Credit Danny Sponsorship Program | Free Credit Repair",
    "description": "A limited opportunity for qualified applicants to receive credit restoration support at little to no cost. Credit repair with a purpose.",
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

export default function SponsorshipPage() {
  return (
    <>
      <BodyClass className="wp-singular page-template page-template-page-sponsorship page-template-page-sponsorship-php page page-id-27270417 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-sponsorship eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <HtmlClass className="sp-js" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRnNwb25zb3JzaGlwJTJGJmFtcDtfd3Bub25jZT1iZjgyNTEzOTRiIn0=" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://creditdanny.com/sponsorship/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"https://creditdanny.com\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"https://creditdanny.com/sponsorship/\",\"name\":\"Sponsorship\"}}]},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/sponsorship/#webpage\",\"url\":\"https://creditdanny.com/sponsorship/\",\"name\":\"The Credit Danny Sponsorship Program | Free Credit Repair\",\"datePublished\":\"2026-08-12T08:33:55-07:00\",\"dateModified\":\"2026-08-12T08:33:55-07:00\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"https://creditdanny.com/sponsorship/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/\",\"url\":\"https://creditdanny.com/author/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"The Credit Danny Sponsorship Program | Free Credit Repair\",\"datePublished\":\"2026-08-12T08:33:55-07:00\",\"dateModified\":\"2026-08-12T08:33:55-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"A limited opportunity for qualified applicants to receive credit restoration support at little to no cost. Credit repair with a purpose.\",\"name\":\"The Credit Danny Sponsorship Program | Free Credit Repair\",\"@id\":\"https://creditdanny.com/sponsorship/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/sponsorship/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/sponsorship/#webpage\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Service\",\n  \"name\": \"The Credit Danny Sponsorship Program\",\n  \"provider\": {\n    \"@type\": \"LocalBusiness\",\n    \"name\": \"Credit Danny\",\n    \"legalName\": \"Elevate Financial Services, LLC\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"2602 W Baseline Rd, Suite 30\",\n      \"addressLocality\": \"Mesa\",\n      \"addressRegion\": \"AZ\",\n      \"postalCode\": \"85202\",\n      \"addressCountry\": \"US\"\n    }\n  },\n  \"additionalType\": \"\",\n  \"serviceOutput\": \"Better credit, better opportunities, and better futures for individuals and families.\",\n  \"serviceType\": \"Sponsored Credit Repair\",\n  \"description\": \"A sponsorship program providing completely done-for-you credit repair using custom disputes and consumer law-based strategies. Designed for hardworking individuals motivated to change but not currently in a financial position to invest in premium programs. The only required investment is a SmartCredit account.\",\n  \"image\": \"https://creditdanny.com/wp-content/uploads/2026/05/creditdanny-kenzie-884x1024-3.png\",\n  \"logo\": \"https://creditdanny.com/wp-content/uploads/2026/04/credit-danny-logo_white-768x144.png\",\n  \"brand\": {\n    \"@type\": \"Brand\",\n    \"name\": \"Credit Danny\"\n  },\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"name\": \"Credit Danny Sponsorship\",\n    \"description\": \"Free done-for-you credit repair (requires only a SmartCredit membership).\",\n    \"price\": \"0.00\",\n    \"priceCurrency\": \"USD\",\n    \"availability\": \"https://schema.org/InStock\"\n  },\n  \"availableChannel\": {\n    \"@type\": \"ServiceChannel\",\n    \"serviceUrl\": \"https://creditdanny.com/sponsorship/\",\n    \"serviceLocation\": {\n      \"@type\": \"Place\",\n      \"name\": \"Credit Danny Office\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"streetAddress\": \"2602 W Baseline Rd, Suite 30\",\n        \"addressLocality\": \"Mesa\",\n        \"addressRegion\": \"AZ\",\n        \"postalCode\": \"85202\",\n        \"addressCountry\": \"US\"\n      }\n    }\n  },\n  \"potentialAction\": {\n    \"@type\": \"ReserveAction\",\n    \"name\": \"Apply for Sponsorship\",\n    \"target\": {\n      \"@type\": \"EntryPoint\",\n      \"urlTemplate\": \"https://creditdanny.com/get-started/\",\n      \"inLanguage\": \"en-US\",\n      \"actionPlatform\": [\n        \"http://schema.org/DesktopWebPlatform\",\n        \"http://schema.org/MobileWebPlatform\"\n      ]\n    }\n  },\n  \"subjectOf\": {\n    \"@type\": \"WebPage\",\n    \"url\": \"https://creditdanny.com/sponsorship/\",\n    \"name\": \"Credit Danny Sponsorship Program\"\n  },\n  \"termsOfService\": \"https://creditdanny.com/terms-and-conditions/\"\n}\n" }} />
      <WistiaLoader mediaIds={["27n6q03wh4", "0gol1m54c4", "3bcxsh9hdw", "s4s4iiz4mn", "sm8l88eucr", "6oep76ji10", "lb00wopw0y"]} />

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
      <header id="top" style={{ "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(12, 112, 195) 100%)", "padding": "0px 40px" }} className="cd-inner-pad">
        <div style={{ "maxWidth": "1280px", "margin": "0px auto", "height": "92px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "32px" }}>
          {" "}
          <Link href="/" className="cd-hov-logo" style={{ "display": "inline-flex", "alignItems": "center", "transition": "opacity 0.18s", "cursor": "pointer" }}>
            <img width="1394" height="261" loading="lazy" decoding="async" src="/assets/img/logo-white.png" alt="Credit Danny" style={{ "height": "38px", "width": "auto", "display": "block" }} />
          </Link>
          {" "}
          <nav style={{ "display": "flex", "alignItems": "center", "gap": "30px", "fontFamily": "var(--font-body)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.9)" }}>
            {" "}
            <Link href="/plans/" className="cd-hov-nav cd-navlink" style={{ "color": "inherit", "fontSize": "14px", "transition": "color 0.18s", "cursor": "pointer" }}>
              {"Our Plans"}
            </Link>
            {" "}
            <Link href="/blueprint/" className="cd-hov-nav cd-navlink" style={{ "color": "inherit", "fontSize": "14px", "transition": "color 0.18s", "cursor": "pointer" }}>
              {"Credit Blueprint"}
            </Link>
            {" "}
            <Link href="/accelerator/" className="cd-hov-nav cd-navlink" style={{ "color": "inherit", "fontSize": "14px", "transition": "color 0.18s", "cursor": "pointer" }}>
              {"Credit Accelerator"}
            </Link>
            {" "}
            <Link href="/sponsorship/" className="cd-hov-nav cd-navlink" style={{ "color": "inherit", "fontSize": "14px", "transition": "color 0.18s", "cursor": "pointer" }}>
              {"Free Credit Repair"}
            </Link>
            {" "}
            <a href="#menu" data-menu-open="" className="cd-hov-nav" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "color": "inherit", "fontSize": "14px", "cursor": "pointer" }}>
              {"More\n          "}
              <span style={{ "display": "inline-flex", "flexDirection": "column", "justifyContent": "center", "gap": "3px", "width": "18px" }}>
                {" "}
                <span style={{ "display": "block", "height": "2px", "background": "currentcolor", "borderRadius": "2px" }} />
                {" "}
                <span style={{ "display": "block", "height": "2px", "background": "currentcolor", "borderRadius": "2px" }} />
                {" "}
                <span style={{ "display": "block", "height": "2px", "background": "currentcolor", "borderRadius": "2px" }} />
                {" "}
              </span>
              {" "}
            </a>
            {" "}
            <Link href="/sponsorship-apply/" className="cd-hov-cta cd-cta" style={{ "display": "inline-flex", "alignItems": "center", "height": "40px", "padding": "0px 24px", "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "borderRadius": "10px", "fontFamily": "var(--font-display)", "fontSize": "20px", "letterSpacing": "0.03em", "borderWidth": "1px", "borderStyle": "solid", "borderColor": "var(--color-white)", "fontWeight": "700", "boxShadow": "rgba(12, 112, 195, 0.65) 0px 0px 18px, rgba(12, 112, 195, 0.35) 0px 0px 44px", "transition": "background 0.2s, color 0.2s, border-color 0.2s", "cursor": "pointer" }}>
              {"Get Started"}
            </Link>
            {" "}
          </nav>
        </div>
      </header>
      <div style={{ "background": "rgb(5, 6, 8)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-body)", "overflowX": "hidden" }}>
        <section id="top" data-screen-label="Hero" style={{ "position": "relative", "overflow": "hidden", "background": "radial-gradient(128% 116% at 0% 100%, rgb(12, 112, 195) 0%, rgb(11, 98, 171) 8%, rgb(9, 80, 140) 16%, rgb(8, 64, 110) 25%, rgb(6, 40, 70) 34%, rgb(3, 25, 42) 46%, rgb(1, 10, 18) 60%, rgb(0, 0, 0) 76%) rgb(0, 0, 0)" }}>
          <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "opacity": "0" }} />
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "30px 40px 0px", "display": "grid", "gridTemplateColumns": "1.05fr 0.95fr", "gap": "48px", "alignItems": "center" }} className="sp-hero sp-gutter">
            <div style={{ "paddingBottom": "55px", "animation": "0.7s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal both running cdRise" }}>
              <div style={{ "display": "inline-flex", "flexDirection": "column", "alignItems": "center" }}>
                <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px", "border": "1px solid rgb(255, 255, 255)", "borderRadius": "999px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "marginBottom": "22px" }}>
                  {" "}
                  <span className="sp-dot" style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "boxShadow": "rgba(0, 173, 238, 0.75) 0px 0px 6px 2px, rgba(0, 173, 238, 0.4) 0px 0px 14px 4px" }} />
                  {" "}
                  <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.28em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                    {"Credit Repair With A Purpose ❤️"}
                  </span>
                  {" "}
                </div>
                <h1 style={{ "margin": "0px", "width": "fit-content", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "lineHeight": "0.9", "letterSpacing": "-0.01em", "fontSize": "clamp(44px, 5.4vw, 74px)", "color": "var(--color-blue-600)", "textAlign": "center" }}>
                  {"\n        The Credit Danny\n        "}
                  <span style={{ "display": "block", "color": "rgb(255, 255, 255)", "marginTop": "0.08em" }}>
                    {"Sponsorship Program"}
                  </span>
                  {" "}
                </h1>
                <p style={{ "margin": "26px 0px 0px", "maxWidth": "100%", "textAlign": "center", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"We believe everyone deserves a chance to rewrite their story. Our Sponsorship Program exists to open doors for individuals and families who are ready to change their lives but may not currently be in a financial position for our core Credit Blueprint."}
                </p>
                <p style={{ "margin": "22px 0px 0px", "maxWidth": "100%", "padding": "16px 22px", "border": "1px solid rgba(255, 255, 255, 0.28)", "borderRadius": "16px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "textAlign": "left", "fontSize": "16px", "fontStyle": "italic", "lineHeight": "1.65", "color": "rgb(255, 255, 255)" }}>
                  {"If selected and granted a sponsorship, your only investment is your SmartCredit account."}
                </p>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px", "marginTop": "34px" }}>
                  {" "}
                  <Link href="/sponsorship-apply/" className="sp-scp0" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "18px 39px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                    {"Apply for the Sponsorship Program"}
                  </Link>
                  {" "}
                  <span style={{ "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.45)" }}>
                    {"Spots are limited"}
                  </span>
                  {" "}
                </div>
              </div>
            </div>
            <div style={{ "position": "relative", "paddingBottom": "110px" }}>
              <div style={{ "position": "relative", "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "16 / 9", "background": "linear-gradient(200deg, rgb(7, 19, 31), rgb(10, 47, 82))", "boxShadow": "rgba(0, 0, 0, 0.55) 0px 40px 90px" }}>
                {" "}
                <wistia-player media-id="lb00wopw0y" aspect="1.7777777777777777" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
                <div style={{ "position": "absolute", "left": "0px", "right": "0px", "bottom": "0px", "height": "38%", "background": "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))", "pointerEvents": "none" }} />
              </div>
              <div style={{ "marginTop": "16px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "12px" }}>
                {" "}
                <span style={{ "width": "28px", "height": "1px", "background": "var(--color-blue-400)", "flexShrink": "0" }} />
                {" "}
                <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"We Don't Just Fix Credit. We Change Lives."}
                </span>
                {" "}
                <span style={{ "width": "28px", "height": "1px", "background": "var(--color-blue-400)", "flexShrink": "0" }} />
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "position": "relative", "borderTop": "1px solid rgba(255, 255, 255, 0.1)", "background": "rgba(0, 0, 0, 0.32)", "backdropFilter": "blur(8px)" }}>
            <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "grid", "gridTemplateColumns": "repeat(4, 1fr)" }} className="sp-stats sp-gutter">
              <div style={{ "padding": "30px 28px 30px 0px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 8.2 4.5 4.5 0 0 1 19.5 11c0 5.4-7.5 10-7.5 10Z" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-stat">
                    {"$100,000+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Given Back To Our Clients"}
                </div>
              </div>
              <div style={{ "padding": "30px 28px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M8.5 14.2 7 22l5-2.6L17 22l-1.5-7.8" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-stat">
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
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-stat">
                    {"10,000+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Clients Helped Nationwide"}
                </div>
              </div>
              <div style={{ "padding": "30px 0px 30px 28px" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.8 3.1 1.1-6.5L2.6 9l6.5-.9L12 2.2Z" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-stat">
                    {"200+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"5-Star Google Reviews"}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="results" data-screen-label="Real People. Real Results." style={{ "padding": "70px 0px 62px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "52px" }}>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 68px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Real People."}
                <br className="sp-brk" />
                {" "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Real Results."}
                </span>
              </h2>
              <p style={{ "margin": "20px auto 0px", "maxWidth": "620px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                {"Thousands of clients have seen real results with Credit Danny."}
              </p>
            </div>
            <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "14px" }}>
              {" "}
              <button type="button" aria-label="Previous" className="sp-scp1" style={{ "flex": "0 0 auto", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.22)", "color": "rgba(255, 255, 255, 0.85)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0px", "transition": "background 220ms cubic-bezier(0.4, 0, 0.2, 1), border-color 220ms cubic-bezier(0.4, 0, 0.2, 1), color 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 5.5 8 12l6.5 6.5" />
                </svg>
                {" "}
              </button>
              {" "}
              <div data-track="results" style={{ "display": "flex", "gap": "20px", "overflowX": "auto", "scrollSnapType": "x mandatory", "scrollbarWidth": "none", "flex": "1 1 auto", "padding": "4px" }}>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
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
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
                        {"715"}
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
                      {"+217 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
                        {"520"}
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
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
                        {"797"}
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
                      {"+277 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
                        {"542"}
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
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
                        {"736"}
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
                      {"+194 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
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
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
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
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
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
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
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
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
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
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
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
              <div style={{ "position": "absolute", "top": "0px", "bottom": "0px", "left": "60px", "width": "110px", "background": "linear-gradient(270deg, rgba(5, 6, 8, 0), rgba(5, 6, 8, 0.92))", "pointerEvents": "none" }} className="sp-fade" />
              <div style={{ "position": "absolute", "top": "0px", "bottom": "0px", "right": "60px", "width": "110px", "background": "linear-gradient(90deg, rgba(5, 6, 8, 0), rgba(5, 6, 8, 0.92))", "pointerEvents": "none" }} className="sp-fade" />
              {" "}
              <button type="button" aria-label="Next" className="sp-scp1" style={{ "flex": "0 0 auto", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.22)", "color": "rgba(255, 255, 255, 0.85)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0px", "transition": "background 220ms cubic-bezier(0.4, 0, 0.2, 1), border-color 220ms cubic-bezier(0.4, 0, 0.2, 1), color 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
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
        <section id="values" data-screen-label="Credit Repair With A Purpose" style={{ "padding": "70px 0px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(36px, 4.4vw, 62px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Credit Repair With A Purpose ❤️"}
              </h2>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", "gap": "44px 32px" }} className="sp-values">
              <div style={{ "textAlign": "center" }}>
                <div style={{ "width": "104px", "height": "104px", "margin": "0px auto 20px" }}>
                  {" "}
                  <image-slot id="sp-icon-care" shape="rect" fit="contain" placeholder="We Care icon" style={{  }}>
                    <img width="150" height="150" loading="lazy" decoding="async" alt="" src="/assets/img/inline-f09b199fa3.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
                  </image-slot>
                  {" "}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "34px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"We Care"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
                  {"We're here to help hardworking people build a better life."}
                </p>
              </div>
              <div style={{ "textAlign": "center" }}>
                <div style={{ "width": "104px", "height": "104px", "margin": "0px auto 20px" }}>
                  {" "}
                  <image-slot id="sp-icon-invest" shape="rect" fit="contain" placeholder="We Invest icon" style={{  }}>
                    <img width="150" height="150" loading="lazy" decoding="async" alt="" src="/assets/img/inline-03029798e1.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
                  </image-slot>
                  {" "}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "34px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"We Invest"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
                  {"We invest our time, strategy, and resources so you can move forward."}
                </p>
              </div>
              <div style={{ "textAlign": "center" }}>
                <div style={{ "width": "104px", "height": "104px", "margin": "0px auto 20px" }}>
                  {" "}
                  <image-slot id="sp-icon-empower" shape="rect" fit="contain" placeholder="We Empower icon" style={{  }}>
                    <img width="164" height="164" loading="lazy" decoding="async" alt="" src="/assets/img/inline-ab6df75960.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
                  </image-slot>
                  {" "}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "34px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"We Empower"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
                  {"We give you the tools, knowledge, and support to take control of your future."}
                </p>
              </div>
              <div style={{ "textAlign": "center" }}>
                <div style={{ "width": "104px", "height": "104px", "margin": "0px auto 20px" }}>
                  {" "}
                  <image-slot id="sp-icon-transform" shape="rect" fit="contain" placeholder="We Transform icon" style={{  }}>
                    <img width="150" height="150" loading="lazy" decoding="async" alt="" src="/assets/img/inline-c6d9e7d1f9.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
                  </image-slot>
                  {" "}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "34px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"We Transform"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
                  {"Better credit. Better opportunities. Better futures."}
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
        <section id="process" data-screen-label="How The Sponsorship Program Works" style={{ "padding": "70px 0px", "background": "linear-gradient(rgb(5, 6, 8), rgb(7, 21, 39) 40%, rgb(5, 6, 8))" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(36px, 4.4vw, 62px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"How The Sponsorship Program Works"}
              </h2>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", "gap": "20px" }}>
              <div className="sp-scp2" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "display": "flex", "flexDirection": "column", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "24px" }} className="sp-stat">
                  {"01"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Apply"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.7)" }}>
                  {"Complete a brief application detailing your current situation and financial/credit goals"}
                </p>
              </div>
              <div className="sp-scp3" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "display": "flex", "flexDirection": "column", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "24px" }} className="sp-stat">
                  {"02"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Application Review"}
                </h3>
                <p style={{ "margin": "0px 0px 26px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.7)" }}>
                  <strong style={{ "color": "rgb(255, 255, 255)" }}>
                    {"REQUIRED:"}
                  </strong>
                  {" Activate SmartCredit so our team can review your credit and determine eligibility."}
                </p>
                {" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.smartcredit.com/?PID=52781" className="sp-scp4" style={{ "marginTop": "auto", "alignSelf": "flex-start", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "17px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "var(--sc-btn-fg,#fff)", "background": "var(--sc-btn-bg,#0b71c3)", "border": "1px solid rgb(255, 255, 255)", "padding": "14px 26px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  {"Activate Smart Credit"}
                </a>
                {" "}
              </div>
              <div className="sp-scp2" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "display": "flex", "flexDirection": "column", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "24px" }} className="sp-stat">
                  {"03"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Launch Strategy"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.7)" }}>
                  {"If selected, our team personally handles the entire credit repair process for you using custom disputes and consumer law-based strategies tailored specifically to your unique credit profile."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" data-screen-label="Reviews" style={{ "position": "relative", "padding": "62px 0px", "background": "rgb(5, 6, 8)", "overflow": "hidden" }}>
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "28px" }}>
              <div>
                <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                  {"Reviews"}
                </div>
                <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(34px, 4vw, 56px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                  {"What Clients Are Saying"}
                </h2>
              </div>
              <TrustindexWidget src="https://cdn.trustindex.io/loader.js?28cdc397833c7456b6762a5982e" />
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
        <section id="key" data-screen-label="Credit Danny Is The Key" style={{ "padding": "70px 0px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "52px" }}>
              <h2 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 64px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Credit Danny Is The Key"}
              </h2>
              <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.6)" }}>
                {"You'll work with me directly, and my team handles the rest."}
              </p>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", "gap": "20px" }} className="sp-key">
              <div className="sp-keycard sp-scp5" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="sp-keyrow">
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
              <div className="sp-keycard sp-scp5" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="sp-keyrow">
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
              <div className="sp-keycard sp-scp5" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="sp-keyrow">
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
              <div className="sp-keycard sp-scp5" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="sp-keyrow">
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
        <section id="success" data-screen-label="Sponsorship Program Success Stories" style={{ "position": "relative", "background": "linear-gradient(rgb(5, 6, 8), rgb(7, 21, 39) 40%, rgb(0, 0, 0))", "overflow": "hidden" }}>
          <div style={{ "position": "relative", "maxWidth": "1200px", "margin": "0px auto", "padding": "70px 40px 0px", "textAlign": "center" }}>
            <h2 style={{ "margin": "0px 0px 56px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 64px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
              {"Sponsorship Program Success Stories"}
            </h2>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)", "gap": "56px", "alignItems": "center" }} className="sp-story">
            <div>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="27n6q03wh4" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
            <div>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"280+ Point Increase"}
                </span>
                {" & 12 Items Deleted In 30 Days 🏆"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She spent over a year and a half with another company… and saw zero results."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Then she joined Project 500."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Within the first 30 days:"}
                </p>
                <ul style={{ "margin": "0px 0px 14px", "paddingLeft": "22px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"12 negative items removed."}
                  </li>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"280+ point increase across all three credit bureaus."}
                  </li>
                </ul>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Same situation… different execution."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Who you work with matters."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)", "gap": "56px", "alignItems": "center" }} className="sp-story sp-story-rev">
            <div style={{ "order": "1" }}>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"140+ Point Credit Increase…"}
                </span>
                {" Now She’s Chasing An 850 📈"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Her credit wasn’t ruined because she made reckless decisions."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"It started when someone she trusted used her information, setting her back before she ever had a real chance."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"For years, she watched friends and family buy homes, build wealth, and move forward, wondering if she’d ever have that same opportunity."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"When the Credit Danny Sponsorship Program opened, she didn’t just believe in the process… She believed in Danny."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"They grew up together, attended the same church, and she had watched his journey long before the success stories. She knew the work, integrity, and heart behind everything he was building."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"In just a few months, her credit increased by more than 140 points."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"For the first time in her life, lenders weren’t turning her away, they were reaching out with approvals and opportunities she had never experienced before."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Today, she no longer sees herself as someone with “bad credit.”"}
                  <br />
                  {"She sees someone with a future."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"And she’s not stopping here."}
                  <br />
                  {"Her next goal? An 850."}
                </p>
              </div>
            </div>
            <div style={{ "order": "2" }}>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="0gol1m54c4" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)", "gap": "56px", "alignItems": "center" }} className="sp-story">
            <div>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="3bcxsh9hdw" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
            <div>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"One Decision"}
                </span>
                {" Changed Both Of Their Lives 🚀"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"For years, they kept putting off fixing their credit."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Not because they didn’t care… But because you don’t always realize how important your credit is until it starts closing doors."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"When the Credit Danny Sponsorship Program opened, they decided it was finally time."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"They completed their enrollment, submitted their information, and let our team take it from there."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Less than 30 days later, they couldn’t believe what they were seeing. His score had increased by 100+ points."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"He refreshed the screen over and over, convinced it had to be a mistake. Then he called his wife and told her to check hers. Another 60-point increase."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Together, they gained more than 150 points in less than 30 days."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"The best part wasn’t watching the numbers go up."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"It was knowing the same credit that once held them back from getting approved for a place to live was no longer standing in the way of the life they wanted to build together."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Sometimes all it takes is one decision… And the right team behind it."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)", "gap": "56px", "alignItems": "center" }} className="sp-story sp-story-rev">
            <div style={{ "order": "1" }}>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"120+ Point Increase…"}
                </span>
                {" Just In Time To Become A Dad 🎖️🏡"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Gage found Credit Danny after watching his cousin have over $32,000 in debt removed. Seeing someone he trusted get real results gave him the confidence to take a chance on himself."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Like so many people, Gage was never taught how credit worked. No one showed him how quickly one mistake could turn into years of setbacks."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"He had almost accepted that his best credit days were behind him."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Then he joined the Credit Danny Sponsorship Program."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"In less than four months, his credit increased by 120+ points, and we’re not even halfway finished."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Today, Gage is in position to use the VA home loan benefits he earned through his military service to purchase a home."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"And the timing couldn’t be better."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"As he and his wife prepare to welcome their first baby, they’re no longer wondering if homeownership is possible…"}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"They’re preparing for the next chapter of their lives."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Because when you have the right team in your corner, you’re not just rebuilding your credit. You’re building a future for your family."}
                </p>
              </div>
            </div>
            <div style={{ "order": "2" }}>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="s4s4iiz4mn" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)", "gap": "56px", "alignItems": "center" }} className="sp-story">
            <div>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="sm8l88eucr" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
            <div>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                {"Life "}
                <span style={{ "color": "rgb(211, 47, 47)" }}>
                  {"Hurt"}
                </span>
                {" Her Credit. Danny Helped Her Reach The "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"700 Club"}
                </span>
                {" In 45 Days ❤️🏡"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Her dream was simple… To buy a home, give her family a place of their own, and build memories that would last a lifetime."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Then life changed overnight."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"At just six days old, her daughter underwent heart surgery."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"When you’re fighting for your child’s life, your credit score becomes the last thing on your mind."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She joined our sponsorship program hoping for a second chance."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"In less than 45 days, she went from the 600s into the 700 Club."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She never paid Credit Danny a penny. The only thing she covered was her SmartCredit membership, while our team handled everything else from start to finish."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Because that’s what the sponsorship program was built for."}
                  <br />
                  {"Good people who were never held back by a lack of character…"}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"They were held back by life."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Now, she has something she hasn’t had in a long time."}
                  <br />
                  {"Hope that owning a home for her family is finally within reach."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)", "gap": "56px", "alignItems": "center" }} className="sp-story sp-story-rev">
            <div style={{ "order": "1" }}>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                {"Single Mom: "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"223 Point Increase"}
                </span>
                {" In Under 4 Months ❤️"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She wasn’t irresponsible."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She was overwhelmed."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"A full-time single mom working three jobs, doing everything she could just to keep food on the table. Like so many parents, her own financial future always came after everyone else’s."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She trusted another credit repair company for an entire year."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Nothing changed."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Then she came to Credit Danny… In less than four months, over $10,000 in negative debt was removed, and her credit increased 223 points across all three credit bureaus."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"The biggest transformation wasn’t the score."}
                  <br />
                  {"It was finally believing that her past no longer had to define her future."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Because restored credit doesn’t just unlock financing."}
                  <br />
                  {"It creates opportunities, stability, and hope for families who deserve a second chance."}
                </p>
              </div>
            </div>
            <div style={{ "order": "2" }}>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="6oep76ji10" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "height": "70px" }} />
        </section>
        <section id="who" data-screen-label="Who This Program Is For" style={{ "position": "relative", "padding": "70px 0px 180px", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(3, 18, 31) 26%, rgb(6, 40, 69) 62%, rgb(10, 74, 128) 100%)", "overflow": "hidden" }}>
          <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "opacity": "0" }} />
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", "gap": "64px", "alignItems": "center" }}>
              <div>
                <h2 style={{ "margin": "0px 0px 30px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(36px, 4.4vw, 62px)", "lineHeight": "0.92", "color": "rgb(255, 255, 255)" }}>
                  {"Who This"}
                  <br />
                  {"Program Is For"}
                </h2>
                <p style={{ "margin": "0px 0px 20px", "fontSize": "17px", "lineHeight": "1.78", "color": "rgba(255, 255, 255, 0.88)", "textWrap": "pretty" }}>
                  {"This program was created for people who know they deserve a second chance."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.78", "color": "rgba(255, 255, 255, 0.88)", "textWrap": "pretty" }}>
                  {"For the hardworking individuals and families who are tired of being held back by their past… but may not currently be in the financial position to invest into our premium Credit Blueprint program."}
                </p>
              </div>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "0px" }}>
                <div style={{ "display": "flex", "gap": "18px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.14)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                    {"Individuals and families who are motivated to change"}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "18px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.14)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                    {"Those who want better credit and more opportunities"}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "18px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.14)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                    {"People who need guidance, strategy, and real support"}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "18px", "padding": "22px 0px" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                    {"Those who are ready to take action and commit to the process"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="apply" data-screen-label="Ready To Apply" style={{ "position": "relative", "background": "linear-gradient(190deg, rgb(0, 0, 0) 0%, rgb(3, 18, 31) 45%, rgb(6, 40, 69) 100%)", "zIndex": "1" }}>
          <div style={{ "position": "relative", "height": "460px", "background": "linear-gradient(rgb(12, 112, 195) 0%, rgb(11, 106, 184) 45%, rgb(10, 93, 162) 100%)", "overflow": "hidden" }}>
            <div style={{ "position": "absolute", "inset": "0px" }}>
              {" "}
              <image-slot id="sp-apply-band" shape="rect" placeholder="Full-bleed photo band" style={{  }}>
                <img width="1200" height="348" loading="lazy" decoding="async" alt="" src="/assets/img/inline-4924aeea7f.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
              </image-slot>
              {" "}
            </div>
            <div style={{ "position": "absolute", "left": "50%", "top": "56%", "transform": "translate(-50%, -50%)", "width": "min(520px, 60%)", "height": "180px" }}>
              {" "}
              <image-slot id="sp-apply-signature" shape="rect" fit="contain" placeholder="Daniel Radcliffe signature (transparent PNG)" style={{  }}>
                <img width="1040" height="247" loading="lazy" decoding="async" alt="" src="/assets/img/inline-9005d899c3.webp" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
              </image-slot>
              {" "}
            </div>
          </div>
          <div style={{ "position": "absolute", "left": "50%", "top": "20px", "transform": "translate(-50%, -58%)", "zIndex": "2", "width": "min(560px, 100% - 48px)", "padding": "52px 44px 48px", "borderRadius": "28px", "border": "1px solid transparent", "background": "linear-gradient(rgba(6, 7, 9, 0.86), rgba(5, 14, 25, 0.86)) padding-box padding-box, linear-gradient(150deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.14) 40%, rgba(255, 255, 255, 0.06) 70%, rgba(255, 255, 255, 0.22) 100%) border-box border-box", "backdropFilter": "blur(56px) saturate(160%)", "boxShadow": "rgba(255, 255, 255, 0.18) 0px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px 32px 80px, rgba(0, 0, 0, 0.3) 0px 8px 24px", "textAlign": "center" }} className="sp-apply-card">
            <h2 style={{ "margin": "0px 0px 16px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(40px, 4.6vw, 60px)", "lineHeight": "0.94", "letterSpacing": "-0.005em", "color": "rgb(255, 255, 255)" }}>
              {"Ready To Apply?"}
            </h2>
            <p style={{ "margin": "0px auto 34px", "maxWidth": "400px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.72)", "textWrap": "pretty" }}>
              {"Spots are limited. Applications are reviewed carefully."}
            </p>
            {" "}
            <Link href="/sponsorship-apply/" className="sp-endcta sp-scp6" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "20px", "letterSpacing": "0.03em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgba(255, 255, 255, 0.28)", "padding": "17px 38px", "borderRadius": "14px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.45) 0px 10px 30px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
              {"Apply for Sponsorship"}
            </Link>
            {" "}
          </div>
        </section>
        <div style={{ "height": "76px", "background": "rgb(0, 0, 0)" }} />
        <div style={{ "position": "fixed", "left": "0px", "right": "0px", "bottom": "0px", "zIndex": "70", "background": "rgba(5, 6, 8, 0.92)", "backdropFilter": "blur(18px)", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }} className="sp-sticky">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "14px 40px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap" }} className="sp-cta">
            <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "color": "rgb(255, 255, 255)" }}>
              {"The Credit Danny "}
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Sponsorship Program"}
              </span>
            </div>
            {" "}
            <Link href="/sponsorship-apply/" className="sp-scp7" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "16px", "letterSpacing": "0.05em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "12px 27px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267232">
                      <Link href="/blueprint/" className="elementor-item">
                        {"Credit Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270417 current_page_item menu-item-27269543">
                      <Link href="/sponsorship/" aria-current="page" className="elementor-item elementor-item-active">
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267232">
                      <Link href="/blueprint/" className="elementor-item" tabIndex={-1}>
                        {"Credit Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270417 current_page_item menu-item-27269543">
                      <Link href="/sponsorship/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>
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
      <SponsorshipEffects />
      <OttoSeo />
    </>
  );
}
