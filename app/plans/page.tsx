import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import Link from "next/link";
import Script from "next/script";
import "@/public/assets/css/pages/plans.css";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedHeaderTop from "@/components/shared/SharedHeaderTop";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import OttoSeo from "@/components/OttoSeo";
import TrustindexWidget from "@/components/TrustindexWidget";
import HtmlClass from "@/components/HtmlClass";

/** Server-side rendered on every request (SSR); blog routes stay on ISR. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  "title": "Our Plans | Find the Right Credit Program | Credit Danny",
  "description": "Compare the Credit Accelerator, the Credit Blueprint and the Sponsorship Program. Find the credit repair path that fits your goals, profile and timeline.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/plans/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "article",
    "title": "Our Plans | Find the Right Credit Program | Credit Danny",
    "description": "Compare the Credit Accelerator, the Credit Blueprint and the Sponsorship Program. Find the credit repair path that fits your goals, profile and timeline.",
    "url": "https://creditdanny.com/plans/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Our Plans",
        "type": "image/jpeg"
      }
    ],
    "publishedTime": "2026-08-12T08:33:16-07:00",
    "modifiedTime": "2026-08-13T17:35:28-07:00"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Our Plans | Find the Right Credit Program | Credit Danny",
    "description": "Compare the Credit Accelerator, the Credit Blueprint and the Sponsorship Program. Find the credit repair path that fits your goals, profile and timeline.",
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

export default function PlansPage() {
  return (
    <>
      <BodyClass className="wp-singular page-template page-template-page-plans page-template-page-plans-php page page-id-27270408 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-plans eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <HtmlClass className="pl-js" />
      <meta property="og:updated_time" content="2026-08-13T17:35:28-07:00" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRnBsYW5zJTJGJmFtcDtfd3Bub25jZT1iZjgyNTEzOTRiIn0=" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://creditdanny.com/plans/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"https://creditdanny.com\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"https://creditdanny.com/plans/\",\"name\":\"Our Plans\"}}]},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/plans/#webpage\",\"url\":\"https://creditdanny.com/plans/\",\"name\":\"Our Plans | Find the Right Credit Program | Credit Danny\",\"datePublished\":\"2026-08-12T08:33:16-07:00\",\"dateModified\":\"2026-08-13T17:35:28-07:00\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"https://creditdanny.com/plans/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/creditdanny/\",\"name\":\"Credit Danny\",\"url\":\"https://creditdanny.com/author/creditdanny/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/11196d25325978cca87ce8148817c100b03e5e6f6b5b903659b4f0574eb14335?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/11196d25325978cca87ce8148817c100b03e5e6f6b5b903659b4f0574eb14335?s=96&amp;d=mm&amp;r=g\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"Our Plans | Find the Right Credit Program | Credit Danny\",\"datePublished\":\"2026-08-12T08:33:16-07:00\",\"dateModified\":\"2026-08-13T17:35:28-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/creditdanny/\",\"name\":\"Credit Danny\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"Compare the Credit Accelerator, the Credit Blueprint and the Sponsorship Program. Find the credit repair path that fits your goals, profile and timeline.\",\"name\":\"Our Plans | Find the Right Credit Program | Credit Danny\",\"@id\":\"https://creditdanny.com/plans/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/plans/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/plans/#webpage\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Service\",\n  \"name\": \"Credit Repair Plans\",\n  \"provider\": {\n    \"@type\": \"LocalBusiness\",\n    \"name\": \"Credit Danny\",\n    \"legalName\": \"Elevate Financial Services, LLC\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"2602 W Baseline Rd, Suite 30\",\n      \"addressLocality\": \"Mesa\",\n      \"addressRegion\": \"AZ\",\n      \"postalCode\": \"85202\",\n      \"addressCountry\": \"US\"\n    }\n  },\n  \"additionalType\": \"Organization\",\n  \"serviceOutput\": \"Improved credit profiles and positioning for financing opportunities.\",\n  \"serviceType\": \"Credit Repair\",\n  \"description\": \"Professional full-service credit repair and restoration programs. Options include the Credit Accelerator for monthly full-service repair, the VIP Credit Blueprint Program for advanced funding preparation, and a Sponsorship Program.\",\n  \"image\": \"https://creditdanny.com/wp-content/uploads/2026/05/Group-1261155720-2.png\",\n  \"logo\": \"https://creditdanny.com/wp-content/uploads/2026/04/credit-danny-logo_white-768x144.png\",\n  \"brand\": {\n    \"@type\": \"Brand\",\n    \"name\": \"Credit Danny\"\n  },\n  \"offers\": [\n    {\n      \"@type\": \"Offer\",\n      \"name\": \"Credit Accelerator\",\n      \"description\": \"Full-Service Done for You Credit Repair. Unlimited Negative Items Challenged Across All 3 Credit Bureaus.\",\n      \"price\": \"300.00\",\n      \"priceCurrency\": \"USD\",\n      \"availability\": \"https://schema.org/InStock\"\n    },\n    {\n      \"@type\": \"Offer\",\n      \"name\": \"Credit Blueprint\",\n      \"description\": \"VIP program managed personally by Credit Danny with direct access, aggressive credit repair approach, and ongoing optimization.\",\n      \"priceSpecification\": {\n        \"@type\": \"PriceSpecification\",\n        \"minPrice\": \"3000.00\",\n        \"maxPrice\": \"6000.00\",\n        \"priceCurrency\": \"USD\"\n      },\n      \"availability\": \"https://schema.org/InStock\"\n    },\n    {\n      \"@type\": \"Offer\",\n      \"name\": \"Credit Danny Sponsorship Program\",\n      \"description\": \"FREE Done-for-You Credit Repair for qualified applicants (Smart Credit Membership Required).\",\n      \"price\": \"0.00\",\n      \"priceCurrency\": \"USD\",\n      \"availability\": \"https://schema.org/InStock\"\n    }\n  ],\n\"availableChannel\": {\n    \"@type\": \"ServiceChannel\",\n    \"serviceUrl\": \"https://creditdanny.com/plans/\",\n    \"serviceLocation\": {\n      \"@type\": \"Place\",\n      \"name\": \"Credit Danny Office\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"streetAddress\": \"2602 W Baseline Rd, Suite 30\",\n        \"addressLocality\": \"Mesa\",\n        \"addressRegion\": \"AZ\",\n        \"postalCode\": \"85202\",\n        \"addressCountry\": \"US\"\n      }\n    }\n  },\n  \"potentialAction\": {\n    \"@type\": \"ReserveAction\",\n    \"name\": \"Get Started Now\",\n    \"target\": {\n      \"@type\": \"EntryPoint\",\n      \"urlTemplate\": \"https://creditdanny.com/consult-calendar/\",\n      \"inLanguage\": \"en-US\",\n      \"actionPlatform\": [\n        \"http://schema.org/DesktopWebPlatform\",\n        \"http://schema.org/MobileWebPlatform\"\n      ]\n    }\n  },\n  \"subjectOf\": {\n    \"@type\": \"WebPage\",\n    \"url\": \"https://creditdanny.com/plans/\",\n    \"name\": \"Credit Repair Plans & Pricing \"\n  },\n  \"termsOfService\": \"https://creditdanny.com/terms-and-conditions/\"\n}\n" }} />

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
      <div style={{ "fontFamily": "var(--font-body)", "color": "rgb(255, 255, 255)", "background": "rgb(0, 0, 0)" }}>
        <section data-screen-label="Hero" style={{ "background": "var(--gradient-hero)", "padding": "55px 32px 45px" }} className="pl-sec">
          <div style={{ "maxWidth": "980px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "24px", "textAlign": "center" }} className="pl-reveal">
            <h1 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "84px", "lineHeight": "1.02", "color": "rgb(255, 255, 255)" }} className="pl-h1">
              {"Find the Right "}
              <span style={{ "color": "var(--color-blue-600)" }}>
                {"Credit Program"}
              </span>
              <br />
              {"for Your Goals"}
            </h1>
            <div style={{ "maxWidth": "660px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.85)" }}>
              {"Every credit journey is different. We'll help you choose the right path based on your goals, credit profile, and timeline."}
            </div>
          </div>
        </section>
        <section data-screen-label="Credit Danny Blueprint" style={{ "backgroundColor": "rgb(6, 33, 60)", "backgroundImage": "linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(200deg, rgba(0, 0, 0, 0.75) 25%, rgba(12, 112, 195, 0.4) 100%)", "backgroundSize": "120px 120px, 120px 120px, 24px 24px, 24px 24px, 100% 100%", "padding": "48px 32px 60px" }} className="pl-sec">
          <div style={{ "maxWidth": "1060px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "gap": "40px" }} className="pl-reveal">
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "20px", "textAlign": "center" }}>
              <div style={{ "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "16px", "letterSpacing": "1px", "padding": "9px 26px", "borderRadius": "999px", "display": "flex", "alignItems": "center", "gap": "8px" }} className="pl-pill">
                <svg width="14" height="18" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                </svg>
                <span>
                  {"Most Popular & Fastest Results"}
                </span>
              </div>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "64px", "lineHeight": "1", "color": "rgb(255, 255, 255)", "textShadow": "rgba(0, 0, 0, 0.6) 0px 2px 14px" }} className="pl-h2-lg">
                <Link href="/blueprint/" className="pl-h2-link">
                  {"The Credit Danny "}
                  <span style={{ "color": "var(--color-blue-600)" }}>
                    {"Blueprint"}
                  </span>
                </Link>
              </h2>
              <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.1", "color": "rgb(255, 255, 255)" }} className="pl-kicker">
                {"Work Directly With Credit Danny"}
              </div>
              <div style={{ "maxWidth": "720px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.85)" }}>
                {"The Credit Danny Blueprint is our most exclusive credit repair experience, created for clients who want the fastest results possible and want Credit Danny personally leading every step of their journey."}
              </div>
              <div style={{ "maxWidth": "720px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.85)" }}>
                {"Unlike traditional credit repair companies, your file isn't assigned to a processor you've never met. Credit Danny personally oversees your strategy, works directly on your file, and leads your case alongside our dedicated legal team."}
              </div>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "28px" }}>
              <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "46px", "lineHeight": "1.04", "textAlign": "center", "color": "rgb(255, 255, 255)" }} className="pl-h3">
                {"Why Clients Choose "}
                <span style={{ "color": "var(--color-blue-600)", "textShadow": "rgba(0, 0, 0, 0.6) 0px 2px 14px" }}>
                  {"The Blueprint"}
                </span>
              </h3>
              <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1fr", "gap": "24px" }} className="pl-grid3">
                <div className="pl-lift pl-glass pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "30px 28px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "center" }}>
                    <div style={{ "fontSize": "28px", "lineHeight": "1", "flexShrink": "0" }}>
                      {"👤"}
                    </div>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.05", "color": "rgb(255, 255, 255)" }}>
                      {"Work Directly With"}
                      <br />
                      {"Credit Danny"}
                    </div>
                  </div>
                  <div style={{ "fontSize": "14px", "lineHeight": "1.65", "color": "rgba(255, 255, 255, 0.75)" }}>
                    {"Your file is personally managed by Credit Danny from start to finish, giving you direct access to the expert behind more than 10,000 credit transformations nationwide."}
                  </div>
                </div>
                <div className="pl-lift pl-glass pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "30px 28px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "center" }}>
                    <div style={{ "fontSize": "28px", "lineHeight": "1", "flexShrink": "0" }}>
                      {"⚖️"}
                    </div>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.05", "color": "rgb(255, 255, 255)" }}>
                      {"A Legal Team Working"}
                      <br />
                      {"Alongside Your Case"}
                    </div>
                  </div>
                  <div style={{ "fontSize": "14px", "lineHeight": "1.65", "color": "rgba(255, 255, 255, 0.75)" }}>
                    {"Every dispute strategy is supported by our dedicated legal team, allowing us to take a more comprehensive and strategic approach than traditional credit repair companies."}
                  </div>
                </div>
                <div className="pl-lift pl-glass pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "30px 28px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "center" }}>
                    <div style={{ "fontSize": "28px", "lineHeight": "1", "flexShrink": "0" }}>
                      {"⚡"}
                    </div>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.05", "color": "rgb(255, 255, 255)" }}>
                      {"Built for the Fastest"}
                      <br />
                      {"Results Possible"}
                    </div>
                  </div>
                  <div style={{ "fontSize": "14px", "lineHeight": "1.65", "color": "rgba(255, 255, 255, 0.75)" }}>
                    {"Your file receives our highest level of priority, allowing us to move as quickly and strategically as possible while keeping you informed every step of the way."}
                  </div>
                </div>
                <div className="pl-lift pl-glass pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "30px 28px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "center" }}>
                    <div style={{ "fontSize": "28px", "lineHeight": "1", "flexShrink": "0" }}>
                      {"🎯"}
                    </div>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.05", "color": "rgb(255, 255, 255)" }}>
                      {"A Strategy Built Around"}
                      <br />
                      {"Your Goals"}
                    </div>
                  </div>
                  <div style={{ "fontSize": "14px", "lineHeight": "1.65", "color": "rgba(255, 255, 255, 0.75)" }}>
                    {"Whether you're preparing to buy a home, qualify for business funding, finance your dream car, or simply rebuild your financial future, every action is customized around your specific goals."}
                  </div>
                </div>
                <div className="pl-lift pl-glass pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "30px 28px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "center" }}>
                    <div style={{ "fontSize": "28px", "lineHeight": "1", "flexShrink": "0" }}>
                      {"🔒"}
                    </div>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.05", "color": "rgb(255, 255, 255)" }}>
                      {"A True VIP"}
                      <br />
                      {"Experience"}
                    </div>
                  </div>
                  <div style={{ "fontSize": "14px", "lineHeight": "1.65", "color": "rgba(255, 255, 255, 0.75)" }}>
                    {"To protect the quality of our service, we only accept a limited number of Blueprint clients. This ensures every client receives the personal attention and accountability they deserve."}
                  </div>
                </div>
                <div className="pl-lift pl-glass pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "30px 28px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "center" }}>
                    <div style={{ "fontSize": "28px", "lineHeight": "1", "flexShrink": "0" }}>
                      {"🛡️"}
                    </div>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "28px", "lineHeight": "1.05", "color": "rgb(255, 255, 255)" }}>
                      {"Move Forward With Confidence"}
                    </div>
                  </div>
                  <div style={{ "fontSize": "14px", "lineHeight": "1.65", "color": "rgba(255, 255, 255, 0.75)" }}>
                    {"Your investment is protected by our 90-Day Money-Back Guarantee, giving you peace of mind as you begin your journey."}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "1.15fr 0.85fr", "gap": "24px", "alignItems": "stretch" }} className="pl-grid2">
              <div className="pl-lift pl-glass pl-card-lg pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "40px 44px", "display": "flex", "flexDirection": "column", "gap": "20px" }}>
                <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "32px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"Everything Included"}
                </h3>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "13px" }}>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Credit Danny personally manages your file"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Direct access to Credit Danny throughout your program"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Personalized strategy sessions with Danny"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Dedicated legal team supporting every dispute strategy"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Priority processing across all three credit bureaus"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Advanced credit optimization"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Mortgage preparation & business funding strategies"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Ongoing credit coaching and accountability"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Customized roadmap built around your financial goals"}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ "background": "rgba(0, 0, 0, 0.35)", "border": "1px solid rgba(255, 255, 255, 0.18)", "borderRadius": "25px", "padding": "40px 44px", "display": "flex", "flexDirection": "column", "gap": "20px" }} className="pl-lift pl-tint pl-card-lg pl-reveal">
                <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "32px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"Ideal for Clients Who..."}
                </h3>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "fontSize": "20px", "lineHeight": "1.2" }}>
                      {"🏡"}
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.55", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Want to purchase a home with confidence"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "fontSize": "20px", "lineHeight": "1.2" }}>
                      {"💼"}
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.55", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Are preparing for business funding"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "fontSize": "20px", "lineHeight": "1.2" }}>
                      {"🚗"}
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.55", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Want to qualify for the best financing possible"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "fontSize": "20px", "lineHeight": "1.2" }}>
                      {"📈"}
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.55", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Want the fastest results available"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "fontSize": "20px", "lineHeight": "1.2" }}>
                      {"👑"}
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.55", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Want Credit Danny personally leading their case"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "24px", "textAlign": "center", "paddingTop": "16px" }}>
              <div style={{ "maxWidth": "680px", "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.15", "color": "rgb(255, 255, 255)" }} className="pl-kicker">
                  {"Most people hire a credit repair company."}
                  <br />
                  <span style={{ "color": "var(--color-blue-600)", "textShadow": "rgba(0, 0, 0, 0.6) 0px 2px 14px" }}>
                    {"Blueprint clients hire Credit Danny."}
                  </span>
                </div>
                <div style={{ "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.85)" }}>
                  {"If you're looking for the highest level of service, direct access to Danny, and a team that's fully invested in helping you achieve your financial goals, this is the program built for you."}
                </div>
              </div>
              {" "}
              <Link href="/blueprint-application/" className="pl-cta-ghost pl-cta" style={{ "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "letterSpacing": "0.2px", "fontSize": "24px", "padding": "14px 30px", "borderRadius": "10px", "background": "rgb(255, 255, 255)", "color": "var(--color-blue-600)", "textDecoration": "none", "boxShadow": "rgba(12, 112, 195, 0.5) 0px 0px 24px", "transition": "background 200ms ease-out, color 200ms ease-out, box-shadow 200ms ease-out" }}>
                <span>
                  {"Apply for the Credit Danny Blueprint"}
                </span>
              </Link>
              <Link href="/blueprint/" className="pl-learn">
                {"Learn More"}
                <span className="pl-learn-arrow" aria-hidden="true">{"›"}</span>
              </Link>
              {" "}
              <div style={{ "fontFamily": "var(--font-body)", "fontWeight": "700", "fontSize": "13px", "letterSpacing": "2px", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.75)" }}>
                {"Pricing Determined After File Review • Limited Enrollment"}
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Credit Accelerator" style={{ "position": "relative", "overflow": "hidden", "background": "radial-gradient(128% 116% at 0% 100%, rgb(12, 112, 195) 0%, rgb(11, 98, 171) 8%, rgb(9, 80, 140) 16%, rgb(8, 64, 110) 25%, rgb(6, 40, 70) 34%, rgb(3, 25, 42) 46%, rgb(1, 10, 18) 60%, rgb(0, 0, 0) 76%) rgb(0, 0, 0)", "padding": "48px 32px", "borderBottom": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-sec">
          <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "url(/assets/img/accelerate-chart.svg), repeating-linear-gradient(74deg, rgba(120, 190, 255, 0) 0px, rgba(120, 190, 255, 0) 56px, rgba(120, 190, 255, 0.07) 56px, rgba(120, 190, 255, 0.07) 58px), radial-gradient(70% 60% at 78% 92%, rgba(0, 173, 238, 0.16), rgba(0, 173, 238, 0) 70%)", "backgroundPosition": "right bottom, center center, center center", "backgroundSize": "118% 94%, auto, auto", "backgroundRepeat": "no-repeat, repeat, no-repeat", "mixBlendMode": "screen" }} className="pl-reveal" />
          <div style={{ "position": "relative", "maxWidth": "1060px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "gap": "40px" }}>
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "18px", "textAlign": "center" }}>
              <div style={{ "background": "rgb(255, 255, 255)", "color": "var(--color-blue-600)", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "16px", "letterSpacing": "1px", "padding": "9px 26px", "borderRadius": "999px", "display": "flex", "alignItems": "center", "gap": "8px" }} className="pl-pill">
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                </svg>
                <span>
                  {"Flexible Monthly Option"}
                </span>
              </div>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "64px", "lineHeight": "1", "color": "rgb(255, 255, 255)", "textShadow": "rgba(0, 0, 0, 0.6) 0px 2px 14px" }} className="pl-h2-lg">
                <Link href="/accelerator/" className="pl-h2-link">
                  {"Credit Accelerator 🚀"}
                </Link>
              </h2>
              <div style={{ "maxWidth": "640px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.85)" }}>
                {"Perfect for people who want a done-for-you credit repair experience without the commitment of our VIP program."}
              </div>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1fr", "gap": "24px", "alignItems": "stretch" }} className="pl-grid3">
              <div className="pl-lift pl-glass pl-card pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "34px 32px", "display": "flex", "flexDirection": "column", "gap": "18px" }}>
                <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "24px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"Why Clients Love It"}
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "13px" }}>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Affordable month-to-month membership"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"No long-term contracts or commitments"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Cancel anytime"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Backed by our 90-Day Money-Back Guarantee"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pl-lift pl-glass pl-card pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "34px 32px", "display": "flex", "flexDirection": "column", "gap": "18px" }}>
                <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "24px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"Everything Included"}
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "13px" }}>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Full-service credit repair from start to finish"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Unlimited negative items challenged across all three credit bureaus"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Monthly strategy & progress reviews"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Dedicated support team"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Mobile app access"}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ "background": "rgba(4, 26, 48, 0.72)", "backdropFilter": "blur(28px) saturate(140%)", "border": "1px solid rgba(120, 190, 255, 0.28)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.14) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "34px 32px", "display": "flex", "flexDirection": "column", "gap": "18px" }} className="pl-lift pl-glass pl-card pl-reveal">
                <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "24px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"Best For"}
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "fontSize": "20px", "lineHeight": "1.2" }}>
                      {"🏡"}
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.55", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"First-time homebuyers"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "fontSize": "20px", "lineHeight": "1.2" }}>
                      {"🚗"}
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.55", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Auto financing"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "fontSize": "20px", "lineHeight": "1.2" }}>
                      {"💳"}
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.55", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Collections, charge-offs & late payments"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "12px", "alignItems": "flex-start" }}>
                    <span style={{ "fontSize": "20px", "lineHeight": "1.2" }}>
                      {"📈"}
                    </span>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.55", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Rebuilding your credit"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-cta-stack" style={{ "display": "flex", "justifyContent": "center" }}>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://link.creditdanny.com/payment-link/6a23442771a0aa761e463451" className="pl-cta-ghost pl-cta" style={{ "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "letterSpacing": "0.2px", "fontSize": "24px", "padding": "14px 30px", "borderRadius": "10px", "background": "rgb(255, 255, 255)", "color": "var(--color-blue-600)", "textDecoration": "none", "boxShadow": "rgba(12, 112, 195, 0.5) 0px 0px 24px", "transition": "background 200ms ease-out, color 200ms ease-out, box-shadow 200ms ease-out" }}>
                {"Start My Credit Transformation"}
              </a>
              <Link href="/accelerator/" className="pl-learn">
                {"Learn More"}
                <span className="pl-learn-arrow" aria-hidden="true">{"›"}</span>
              </Link>
              {" "}
            </div>
          </div>
        </section>
        <section data-screen-label="Sponsorship Program" style={{ "background": "rgb(0, 0, 0)", "padding": "48px 32px", "borderBottom": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-sec">
          <div style={{ "maxWidth": "1060px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "gap": "40px" }} className="pl-reveal">
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "18px", "textAlign": "center" }}>
              <div style={{ "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "16px", "letterSpacing": "1px", "padding": "9px 26px", "borderRadius": "999px", "display": "flex", "alignItems": "center", "gap": "8px" }} className="pl-pill">
                <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
                <span>
                  {"Our Give Back Program"}
                </span>
              </div>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "64px", "lineHeight": "1", "color": "rgb(255, 255, 255)", "textShadow": "rgba(0, 0, 0, 0.6) 0px 2px 14px" }} className="pl-h2-lg">
                <Link href="/sponsorship/" className="pl-h2-link">
                  {"The Sponsorship Program 🤝"}
                </Link>
              </h2>
              <div style={{ "maxWidth": "720px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.85)" }}>
                {"A limited opportunity for qualified applicants to receive credit restoration support at little to no cost while becoming part of the Credit Danny community."}
              </div>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "1.15fr 0.85fr", "gap": "24px", "alignItems": "stretch" }} className="pl-grid2">
              <div className="pl-lift pl-glass pl-card pl-reveal" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "padding": "34px 32px", "display": "flex", "flexDirection": "column", "gap": "18px" }}>
                <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "24px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"Everything Included"}
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "13px" }}>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      <strong>
                        {"IMPORTANT:"}
                      </strong>
                      {" Smart Credit Membership Required"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"FREE Done-for-You Credit Repair"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Personalized Credit Improvement Plan"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Access to Credit Danny's Community"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Ongoing Progress Tracking"}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "gap": "11px", "alignItems": "flex-start" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ "flexShrink": "0", "marginTop": "1px" }}>
                      <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                      <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgba(255, 255, 255, 0.9)" }}>
                      {"Eligibility for Special Promotions & Giveaways"}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ "background": "rgba(12, 112, 195, 0.14)", "border": "1px solid rgba(12, 112, 195, 0.35)", "borderRadius": "25px", "padding": "34px 32px", "display": "flex", "flexDirection": "column", "gap": "18px" }} className="pl-lift pl-tint pl-card pl-reveal">
                <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "24px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"Who This Is For"}
                </div>
                <div style={{ "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.9)" }}>
                  {"Individuals who are serious about improving their credit but may not be ready for one of our premium programs."}
                </div>
                <div style={{ "fontSize": "13px", "fontStyle": "italic", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.55)" }}>
                  {"Applications are reviewed individually and approval is not guaranteed."}
                </div>
              </div>
            </div>
            <div className="pl-cta-stack" style={{ "display": "flex", "justifyContent": "center" }}>
              {" "}
              <Link href="/sponsorship-apply/" className="pl-cta-solid pl-cta" style={{ "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "letterSpacing": "0.2px", "fontSize": "24px", "padding": "14px 30px", "borderRadius": "10px", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "textDecoration": "none", "boxShadow": "rgba(12, 112, 195, 0.5) 0px 0px 24px", "transition": "background 200ms ease-out, color 200ms ease-out, box-shadow 200ms ease-out" }}>
                {"Apply for Sponsorship"}
              </Link>
              <Link href="/sponsorship/" className="pl-learn">
                {"Learn More"}
                <span className="pl-learn-arrow" aria-hidden="true">{"›"}</span>
              </Link>
              {" "}
            </div>
          </div>
        </section>
        <section data-screen-label="Program comparison" style={{ "background": "rgb(0, 0, 0)", "padding": "104px 32px" }} className="pl-sec">
          <div style={{ "maxWidth": "980px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "gap": "52px" }} className="pl-reveal">
            <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "54px", "lineHeight": "1.04", "textAlign": "center", "color": "rgb(255, 255, 255)" }} className="pl-h2">
              {"Which Program Is "}
              <span style={{ "color": "var(--color-blue-600)" }}>
                {"Right for You?"}
              </span>
            </h2>
            <div style={{ "background": "rgb(12, 17, 24)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "overflow": "hidden" }}>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "background": "rgba(255, 255, 255, 0.04)" }} className="pl-cmp-row">
                <div style={{ "padding": "22px 32px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "22px", "color": "rgb(255, 255, 255)", "display": "flex", "alignItems": "center" }} className="pl-reveal">
                  {"Features"}
                </div>
                <div style={{ "padding": "18px 16px", "background": "var(--color-blue-600)", "textAlign": "center", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "2px" }} className="pl-reveal">
                  <span style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "19px", "color": "rgb(255, 255, 255)", "lineHeight": "1.1" }}>
                    {"Credit Accelerator"}
                  </span>
                  <span style={{ "fontFamily": "var(--font-body)", "fontWeight": "600", "fontSize": "11px", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.75)" }}>
                    {"Full-Service"}
                  </span>
                </div>
                <div style={{ "padding": "18px 16px", "background": "var(--color-blue-700)", "textAlign": "center", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "2px" }} className="pl-reveal">
                  <span style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "19px", "color": "rgb(255, 255, 255)", "lineHeight": "1.1" }}>
                    {"Credit Blueprint"}
                  </span>
                  <span style={{ "fontFamily": "var(--font-body)", "fontWeight": "600", "fontSize": "11px", "letterSpacing": "1.5px", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.75)" }}>
                    {"VIP Program"}
                  </span>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"SmartCredit Monitoring"}
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Unlimited Negative Items"}
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Mobile Access"}
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"90-Day Money-Back Guarantee"}
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Full-Service Credit Repair"}
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Monthly Reviews"}
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Priority Processing"}
                </div>
                <div style={{ "textAlign": "center", "color": "rgba(255, 255, 255, 0.25)", "fontWeight": "600" }} className="pl-reveal">
                  <span className="pl-no" role="img" aria-label="Not included" />
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Direct Access To Danny"}
                </div>
                <div style={{ "textAlign": "center", "color": "rgba(255, 255, 255, 0.25)", "fontWeight": "600" }} className="pl-reveal">
                  <span className="pl-no" role="img" aria-label="Not included" />
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Monthly Strategy Calls"}
                </div>
                <div style={{ "textAlign": "center", "color": "rgba(255, 255, 255, 0.25)", "fontWeight": "600" }} className="pl-reveal">
                  <span className="pl-no" role="img" aria-label="Not included" />
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Mortgage Preparation"}
                </div>
                <div style={{ "textAlign": "center", "color": "rgba(255, 255, 255, 0.25)", "fontWeight": "600" }} className="pl-reveal">
                  <span className="pl-no" role="img" aria-label="Not included" />
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Business Funding Guidance"}
                </div>
                <div style={{ "textAlign": "center", "color": "rgba(255, 255, 255, 0.25)", "fontWeight": "600" }} className="pl-reveal">
                  <span className="pl-no" role="img" aria-label="Not included" />
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ "display": "grid", "gridTemplateColumns": "1.5fr 1fr 1fr", "alignItems": "center", "padding": "15px 0px", "borderTop": "1px solid rgba(255, 255, 255, 0.08)" }} className="pl-cmp-row">
                <div style={{ "padding": "0px 32px", "fontWeight": "600", "fontSize": "14px", "color": "rgba(255, 255, 255, 0.9)" }} className="pl-reveal">
                  {"Funding Network Access"}
                </div>
                <div style={{ "textAlign": "center", "color": "rgba(255, 255, 255, 0.25)", "fontWeight": "600" }} className="pl-reveal">
                  <span className="pl-no" role="img" aria-label="Not included" />
                </div>
                <div style={{ "textAlign": "center" }} className="pl-reveal">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="#0c70c3" />
                    <path d="M5.5 10.4l3 2.8 6-6.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Real results" style={{ "background": "linear-gradient(65deg, var(--color-black) 25%, var(--color-blue-600) 100%)", "borderBottom": "1px solid rgba(255, 255, 255, 0.08)", "padding": "72px 32px" }} className="pl-sec pl-results-sec">
          <div style={{ "maxWidth": "1180px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "320px 1fr", "gap": "64px", "alignItems": "center" }} className="pl-results pl-reveal">
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "18px" }} className="pl-reveal">
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "54px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="pl-h2">
                {"Real People. "}
                <br className="pl-brk" />
                <span style={{ "color": "var(--color-blue-600)" }}>
                  {"Real Results."}
                </span>
              </h2>
              <div style={{ "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.6)" }} className="pl-results-lede">
                {"Thousands of clients have seen real results with Credit Danny."}
              </div>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1fr", "gap": "24px" }} className="pl-grid3 pl-reveal">
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "alignItems": "stretch" }} className="pl-reveal">
                <div className="pl-lift pl-glass" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "transition": "transform 300ms cubic-bezier(0.16, 0.84, 0.44, 1), box-shadow 300ms cubic-bezier(0.16, 0.84, 0.44, 1)", "padding": "24px 16px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px", "boxSizing": "border-box" }}>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "18px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"609"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"Before"}
                      </div>
                    </div>
                    {" "}
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00adee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"804"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"After"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontWeight": "600", "fontSize": "20px", "color": "var(--color-success)" }}>
                    {"+195"}
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "letterSpacing": "1px", "color": "rgba(255, 255, 255, 0.55)" }}>
                    {"POINT INCREASE"}
                  </div>
                </div>
                <div style={{ "textAlign": "center", "fontWeight": "700", "fontSize": "13px", "color": "rgb(255, 255, 255)" }}>
                  {"Jorge G."}
                </div>
              </div>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "alignItems": "stretch" }} className="pl-reveal">
                <div className="pl-lift pl-glass" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "transition": "transform 300ms cubic-bezier(0.16, 0.84, 0.44, 1), box-shadow 300ms cubic-bezier(0.16, 0.84, 0.44, 1)", "padding": "24px 16px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px", "boxSizing": "border-box" }}>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "18px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"629"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"Before"}
                      </div>
                    </div>
                    {" "}
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00adee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"787"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"After"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontWeight": "600", "fontSize": "20px", "color": "var(--color-success)" }}>
                    {"+158"}
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "letterSpacing": "1px", "color": "rgba(255, 255, 255, 0.55)" }}>
                    {"POINT INCREASE"}
                  </div>
                </div>
                <div style={{ "textAlign": "center", "fontWeight": "700", "fontSize": "13px", "color": "rgb(255, 255, 255)" }}>
                  {"Samantha B."}
                </div>
              </div>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "alignItems": "stretch" }} className="pl-reveal">
                <div className="pl-lift pl-glass" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "transition": "transform 300ms cubic-bezier(0.16, 0.84, 0.44, 1), box-shadow 300ms cubic-bezier(0.16, 0.84, 0.44, 1)", "padding": "24px 16px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px", "boxSizing": "border-box" }}>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "18px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"498"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"Before"}
                      </div>
                    </div>
                    {" "}
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00adee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"715"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"After"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontWeight": "600", "fontSize": "20px", "color": "var(--color-success)" }}>
                    {"+217"}
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "letterSpacing": "1px", "color": "rgba(255, 255, 255, 0.55)" }}>
                    {"POINT INCREASE"}
                  </div>
                </div>
                <div style={{ "textAlign": "center", "fontWeight": "700", "fontSize": "13px", "color": "rgb(255, 255, 255)" }}>
                  {"Steven B."}
                </div>
              </div>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "alignItems": "stretch" }} className="pl-reveal">
                <div className="pl-lift pl-glass" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "transition": "transform 300ms cubic-bezier(0.16, 0.84, 0.44, 1), box-shadow 300ms cubic-bezier(0.16, 0.84, 0.44, 1)", "padding": "24px 16px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px", "boxSizing": "border-box" }}>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "18px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"520"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"Before"}
                      </div>
                    </div>
                    {" "}
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00adee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"797"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"After"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontWeight": "600", "fontSize": "20px", "color": "var(--color-success)" }}>
                    {"+277"}
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "letterSpacing": "1px", "color": "rgba(255, 255, 255, 0.55)" }}>
                    {"POINT INCREASE"}
                  </div>
                </div>
                <div style={{ "textAlign": "center", "fontWeight": "700", "fontSize": "13px", "color": "rgb(255, 255, 255)" }}>
                  {"Eli G."}
                </div>
              </div>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "alignItems": "stretch" }} className="pl-reveal">
                <div className="pl-lift pl-glass" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "transition": "transform 300ms cubic-bezier(0.16, 0.84, 0.44, 1), box-shadow 300ms cubic-bezier(0.16, 0.84, 0.44, 1)", "padding": "24px 16px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px", "boxSizing": "border-box" }}>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "18px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"542"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"Before"}
                      </div>
                    </div>
                    {" "}
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00adee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"736"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"After"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontWeight": "600", "fontSize": "20px", "color": "var(--color-success)" }}>
                    {"+194"}
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "letterSpacing": "1px", "color": "rgba(255, 255, 255, 0.55)" }}>
                    {"POINT INCREASE"}
                  </div>
                </div>
                <div style={{ "textAlign": "center", "fontWeight": "700", "fontSize": "13px", "color": "rgb(255, 255, 255)" }}>
                  {"Natalie T."}
                </div>
              </div>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "alignItems": "stretch" }} className="pl-reveal">
                <div className="pl-lift pl-glass" style={{ "background": "linear-gradient(165deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 45%, rgba(255, 255, 255, 0.06) 100%)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "25px", "boxShadow": "rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.45) 0px 20px 50px", "transition": "transform 300ms cubic-bezier(0.16, 0.84, 0.44, 1), box-shadow 300ms cubic-bezier(0.16, 0.84, 0.44, 1)", "padding": "24px 16px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px", "boxSizing": "border-box" }}>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "18px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"538"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"Before"}
                      </div>
                    </div>
                    {" "}
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="#00adee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "44px", "color": "rgb(255, 255, 255)" }}>
                        {"791"}
                      </div>
                      <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"After"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontWeight": "600", "fontSize": "20px", "color": "var(--color-success)" }}>
                    {"+253"}
                  </div>
                  <div style={{ "fontFamily": "var(--font-body)", "fontSize": "12px", "letterSpacing": "1px", "color": "rgba(255, 255, 255, 0.55)" }}>
                    {"POINT INCREASE"}
                  </div>
                </div>
                <div style={{ "textAlign": "center", "fontWeight": "700", "fontSize": "13px", "color": "rgb(255, 255, 255)" }}>
                  {"Daniel A."}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Client reviews" style={{ "position": "relative", "background": "rgb(0, 0, 0)", "overflow": "hidden", "padding": "88px 32px 104px" }} className="pl-sec">
          <div style={{ "position": "relative", "maxWidth": "1180px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "gap": "52px", "alignItems": "center" }} className="pl-reveal">
            <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px", "alignItems": "center", "textAlign": "center" }}>
              <div style={{ "fontFamily": "var(--font-body)", "fontWeight": "700", "fontSize": "13px", "letterSpacing": "3px", "textTransform": "uppercase", "color": "var(--color-blue-600)" }}>
                {"Reviews"}
              </div>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "54px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="pl-h2">
                {"What Clients Are Saying"}
              </h2>
            </div>
            <div className="pl-trustindex" style={{ "width": "100%" }}>
              <TrustindexWidget src="https://cdn.trustindex.io/loader.js?4a6b3dc78504482e1176fa985de" />
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270408 current_page_item menu-item-27268755">
                      <Link href="/plans/" aria-current="page" className="elementor-item elementor-item-active">
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270408 current_page_item menu-item-27268755">
                      <Link href="/plans/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>
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
