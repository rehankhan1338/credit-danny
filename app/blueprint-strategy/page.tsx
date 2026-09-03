import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import Link from "next/link";
import Script from "next/script";
import "@/public/assets/css/pages/blueprint-strategy.css";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedHeaderTop from "@/components/shared/SharedHeaderTop";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import OttoSeo from "@/components/OttoSeo";

/** Server-side rendered on every request (SSR); blog routes stay on ISR. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  "title": "The Credit Blueprint Strategy Session | Credit Danny",
  "description": "A private 30-minute Zoom session with Credit Danny: a full 3-bureau analysis, the factors holding your scores back, and a personalized blueprint built around your goals.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/blueprint-strategy/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "article",
    "title": "The Credit Blueprint Strategy Session | Credit Danny",
    "description": "A private 30-minute Zoom session with Credit Danny: a full 3-bureau analysis, the factors holding your scores back, and a personalized blueprint built around your goals.",
    "url": "https://creditdanny.com/blueprint-strategy/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Blueprint Strategy Session",
        "type": "image/jpeg"
      }
    ],
    "publishedTime": "2026-08-12T21:24:47-07:00"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "The Credit Blueprint Strategy Session | Credit Danny",
    "description": "A private 30-minute Zoom session with Credit Danny: a full 3-bureau analysis, the factors holding your scores back, and a personalized blueprint built around your goals.",
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

export default function BlueprintStrategyPage() {
  return (
    <>
      <BodyClass className="wp-singular page-template page-template-page-blueprint-strategy page-template-page-blueprint-strategy-php page page-id-27270425 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-blueprint-strategy eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRmJsdWVwcmludC1zdHJhdGVneSUyRiZhbXA7X3dwbm9uY2U9YmY4MjUxMzk0YiJ9" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://creditdanny.com/blueprint-strategy/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"https://creditdanny.com\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"https://creditdanny.com/blueprint-strategy/\",\"name\":\"Blueprint Strategy Session\"}}]},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/blueprint-strategy/#webpage\",\"url\":\"https://creditdanny.com/blueprint-strategy/\",\"name\":\"The Credit Blueprint Strategy Session | Credit Danny\",\"datePublished\":\"2026-08-12T21:24:47-07:00\",\"dateModified\":\"2026-08-12T21:24:47-07:00\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"https://creditdanny.com/blueprint-strategy/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/\",\"url\":\"https://creditdanny.com/author/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"The Credit Blueprint Strategy Session | Credit Danny\",\"datePublished\":\"2026-08-12T21:24:47-07:00\",\"dateModified\":\"2026-08-12T21:24:47-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"A private 30-minute Zoom session with Credit Danny: a full 3-bureau analysis, the factors holding your scores back, and a personalized blueprint built around your goals.\",\"name\":\"The Credit Blueprint Strategy Session | Credit Danny\",\"@id\":\"https://creditdanny.com/blueprint-strategy/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/blueprint-strategy/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/blueprint-strategy/#webpage\"}}]}" }} />
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
      <div id="bs-page">
        <div className="sc-host" data-sc-name="source">
          <div style={{ "fontFamily": "var(--font-body)", "color": "rgb(0, 0, 0)", "overflowX": "hidden" }}>
            <div style={{ "position": "relative", "background": "radial-gradient(128% 116% at 0% 100%, rgb(12, 112, 195) 0%, rgb(11, 98, 171) 8%, rgb(9, 80, 140) 16%, rgb(8, 64, 110) 25%, rgb(6, 40, 70) 34%, rgb(3, 25, 42) 46%, rgb(1, 10, 18) 60%, rgb(0, 0, 0) 76%) rgb(0, 0, 0)", "overflow": "hidden" }}>
              <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "mixBlendMode": "screen", "backgroundImage": "linear-gradient(rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(120, 190, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.09) 1px, transparent 1px)", "backgroundSize": "24px 24px, 24px 24px, 120px 120px, 120px 120px" }} />
              <div style={{ "position": "relative", "display": "grid", "gridTemplateColumns": "1.2fr 0.8fr", "gap": "72px", "alignItems": "center", "maxWidth": "1320px", "margin": "0px auto", "padding": "96px 48px" }}>
                <div>
                  <div className="bs-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px", "border": "1px solid rgb(255, 255, 255)", "borderRadius": "999px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)" }}>
                    {" "}
                    <span style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "boxShadow": "rgba(0, 173, 238, 0.75) 0px 0px 6px 2px, rgba(0, 173, 238, 0.4) 0px 0px 14px 4px" }} />
                    {" "}
                    <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.28em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"Private Strategy Session"}
                    </span>
                    {" "}
                  </div>
                  <h1 style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(46px, 5.2vw, 86px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)", "margin": "26px 0px 0px", "textWrap": "balance" }}>
                    {"The Credit Blueprint"}
                    <br />
                    {"Strategy Session"}
                  </h1>
                  <p style={{ "fontSize": "19px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.82)", "margin": "26px 0px 0px", "maxWidth": "600px", "textWrap": "pretty" }}>
                    {"You'll meet directly with Credit Danny for a private 30-minute Zoom strategy session focused entirely on your credit profile, score factors, and long-term financial positioning."}
                  </p>
                  <div style={{ "display": "flex", "alignItems": "center", "marginTop": "32px" }}>
                    {" "}
                    <span className="bs-oneliner" style={{ "fontSize": "17px", "fontWeight": "700", "fontStyle": "italic", "color": "rgba(255, 255, 255, 0.85)", "lineHeight": "1.6", "whiteSpace": "nowrap" }}>
                      {"This is not a basic consultation with an entry-level rep."}
                    </span>
                    {" "}
                  </div>
                </div>
                <div style={{ "borderRadius": "25px", "overflow": "hidden", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.22)", "boxShadow": "rgba(0, 0, 0, 0.45) 0px 24px 60px" }}>
                  <div style={{ "background": "var(--color-blue-600)", "padding": "18px 24px", "textAlign": "center", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "letterSpacing": "1px", "color": "rgb(255, 255, 255)" }}>
                    {"Investment"}
                  </div>
                  <div style={{ "padding": "34px 36px 38px", "textAlign": "center" }}>
                    <div style={{ "display": "flex", "alignItems": "center", "gap": "14px" }}>
                      {" "}
                      <span style={{ "flex": "1 1 0%", "height": "1px", "background": "rgba(255, 255, 255, 0.2)" }} />
                      {" "}
                      <span style={{ "width": "38px", "height": "38px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                        {" "}
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <rect x="2.5" y="4" width="15" height="13.5" rx="2.5" stroke="#fff" strokeWidth="1.8" />
                          <path d="M2.5 8h15" stroke="#fff" strokeWidth="1.8" />
                          <path d="M6.5 2.5v3M13.5 2.5v3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                          <circle cx="7" cy="12" r="1.1" fill="#fff" />
                          <circle cx="10.5" cy="12" r="1.1" fill="#fff" />
                          <circle cx="14" cy="12" r="1.1" fill="#fff" />
                        </svg>
                        {" "}
                      </span>
                      {" "}
                      <span style={{ "flex": "1 1 0%", "height": "1px", "background": "rgba(255, 255, 255, 0.2)" }} />
                      {" "}
                    </div>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "96px", "lineHeight": "0.9", "color": "rgb(255, 255, 255)", "marginTop": "26px" }}>
                      {"$49"}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginTop": "14px" }}>
                      {"30-Minute Private Zoom Session"}
                    </div>
                    <div style={{ "height": "1px", "background": "rgba(255, 255, 255, 0.2)", "margin": "28px 0px" }} />
                    <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.65", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
                      {"If you decide to enroll in the Credit Blueprint Program afterward, your $49 consultation fee will be "}
                      <strong style={{ "fontWeight": "700", "color": "rgb(255, 255, 255)" }}>
                        {"fully credited"}
                      </strong>
                      {" toward your program investment."}
                    </p>
                    <div data-cta-glow="" className="bs-scp0" style={{ "display": "grid", "borderRadius": "10px", "marginTop": "28px", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1), transform 220ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                      <div className="sc-host-x" style={{ "display": "contents" }}>
                        <Link href="/consult-calendar/" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "letterSpacing": "0.2px", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "transition": "filter var(--duration-standard) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)", "fontSize": "30px", "padding": "16px 32px", "borderRadius": "10px", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "borderWidth": "medium", "borderStyle": "none", "borderColor": "currentcolor", "borderImage": "none" }}>
                          {"Book Your Session"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ "maxWidth": "1320px", "margin": "0px auto", "padding": "70px 48px 40px", "display": "grid", "gridTemplateColumns": "0.72fr 1.28fr", "gap": "56px", "alignItems": "center" }}>
              <div style={{ "position": "relative", "width": "100%", "aspectRatio": "4 / 5", "borderRadius": "25px", "overflow": "hidden", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px" }}>
                {" "}
                <img width="812" height="812" loading="lazy" decoding="async" src="/assets/img/slot-session-danny-opt.webp" alt="Photo of Danny goes here" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "borderRadius": "0px" }} />
                {" "}
              </div>
              <div>
                <div className="sc-host-x" style={{ "display": "contents" }}>
                  <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "36px", "lineHeight": "1.1", "textAlign": "left", "color": "rgb(0, 0, 0)" }}>
                    {"During this session, we will:"}
                  </div>
                </div>
                <div style={{ "display": "grid", "gap": "18px", "marginTop": "28px" }}>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                    {" "}
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <span style={{ "fontSize": "17px", "lineHeight": "1.5", "textWrap": "pretty" }}>
                      {"Conduct a full 3-bureau credit analysis"}
                    </span>
                    {" "}
                  </div>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                    {" "}
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <span style={{ "fontSize": "17px", "lineHeight": "1.5", "textWrap": "pretty" }}>
                      {"Identify the key factors holding your scores back"}
                    </span>
                    {" "}
                  </div>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                    {" "}
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <span style={{ "fontSize": "17px", "lineHeight": "1.5", "textWrap": "pretty" }}>
                      {"Review negative accounts, utilization, inquiries, and reporting structure"}
                    </span>
                    {" "}
                  </div>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                    {" "}
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <span style={{ "fontSize": "17px", "lineHeight": "1.5", "textWrap": "pretty" }}>
                      {"Build a personalized blueprint tailored to your specific goals"}
                    </span>
                    {" "}
                  </div>
                  <div style={{ "display": "flex", "gap": "14px", "alignItems": "flex-start" }}>
                    {" "}
                    <span style={{ "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0", "marginTop": "2px" }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {" "}
                    <span style={{ "fontSize": "17px", "lineHeight": "1.5", "textWrap": "pretty" }}>
                      {"Map out a strategic execution plan designed to strengthen your overall credit profile"}
                    </span>
                    {" "}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ "maxWidth": "1320px", "margin": "0px auto", "padding": "40px 48px 70px" }}>
              <div style={{ "position": "relative", "overflow": "hidden", "borderRadius": "25px", "background": "linear-gradient(212deg,#000 26%,var(--color-blue-600) 100%)", "padding": "76px 64px", "textAlign": "center" }}>
                {" "}
                <img loading="lazy" decoding="async" src="/assets/img/hex-pattern.svg" alt="" style={{ "position": "absolute", "top": "-90px", "left": "-90px", "width": "520px", "opacity": "0.16", "pointerEvents": "none" }} />
                {" "}
                <p style={{ "position": "relative", "margin": "0px auto", "maxWidth": "900px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(30px, 3vw, 48px)", "lineHeight": "1.15", "color": "rgb(255, 255, 255)", "textWrap": "balance" }}>
                  {"This session is designed for individuals who want real guidance, clear direction, and a serious strategy, not generic advice."}
                </p>
              </div>
            </div>
            <div style={{ "background": "var(--surface-tint)", "padding": "70px 0px" }}>
              <div style={{ "maxWidth": "1320px", "margin": "0px auto", "padding": "0px 48px" }}>
                <div className="sc-host-x" style={{ "display": "contents" }}>
                  <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "50px", "lineHeight": "1.1", "textAlign": "center", "color": "rgb(0, 0, 0)" }}>
                    {"What makes this different"}
                  </div>
                </div>
                <div style={{ "display": "grid", "gridTemplateColumns": "repeat(2, 1fr)", "gap": "26px", "marginTop": "48px" }}>
                  <div style={{ "background": "rgb(255, 255, 255)", "borderRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px", "padding": "44px 40px" }}>
                    <p style={{ "margin": "0px", "fontSize": "19px", "lineHeight": "1.65", "textWrap": "pretty" }}>
                      {"Unlike most companies that hand clients off to junior agents or scripted support teams, your session is "}
                      <strong style={{ "fontWeight": "700", "color": "var(--color-blue-600)" }}>
                        {"personally conducted by Credit Danny"}
                      </strong>
                      {"."}
                    </p>
                  </div>
                  <div style={{ "background": "rgb(255, 255, 255)", "borderRadius": "25px", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 0px 10px", "padding": "44px 40px" }}>
                    <p style={{ "margin": "0px", "fontSize": "19px", "lineHeight": "1.65", "textWrap": "pretty" }}>
                      {"You're getting direct insight, tailored recommendations, and a high-level strategy built specifically for your situation."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ "position": "relative", "overflow": "hidden", "background": "radial-gradient(128% 116% at 0% 100%, rgb(12, 112, 195) 0%, rgb(11, 98, 171) 8%, rgb(9, 80, 140) 16%, rgb(8, 64, 110) 25%, rgb(6, 40, 70) 34%, rgb(3, 25, 42) 46%, rgb(1, 10, 18) 60%, rgb(0, 0, 0) 76%) rgb(0, 0, 0)", "padding": "104px 48px", "textAlign": "center" }}>
              <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "mixBlendMode": "screen", "backgroundImage": "linear-gradient(rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(120, 190, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.09) 1px, transparent 1px)", "backgroundSize": "24px 24px, 24px 24px, 120px 120px, 120px 120px" }} />
              <div style={{ "position": "relative", "maxWidth": "820px", "margin": "0px auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "28px" }}>
                <div data-cta-glow="" className="bs-scp0" style={{ "display": "inline-flex", "borderRadius": "10px", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1), transform 220ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  <div className="sc-host-x" style={{ "display": "contents" }}>
                    <Link href="/consult-calendar/" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "letterSpacing": "0.2px", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "transition": "filter var(--duration-standard) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)", "fontSize": "30px", "padding": "16px 32px", "borderRadius": "10px", "background": "var(--color-blue-600)", "color": "rgb(255, 255, 255)", "borderWidth": "medium", "borderStyle": "none", "borderColor": "currentcolor", "borderImage": "none" }}>
                      {"Book Your Session"}
                    </Link>
                  </div>
                </div>
                <p style={{ "margin": "0px", "fontSize": "16px", "fontStyle": "italic", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.6)", "textWrap": "pretty" }}>
                  {"Please note: This is not a discovery call. These consultations are reserved for individuals who are serious, financially ready, and looking for real strategy and results."}
                </p>
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
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-27264055">
                      <Link href="/blueprint-strategy/" aria-current="page" className="elementor-item elementor-item-active">
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27269543">
                      <Link href="/sponsorship/" className="elementor-item" tabIndex={-1}>
                        {"Apply for Free Credit Repair"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-27264055">
                      <Link href="/blueprint-strategy/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>
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
