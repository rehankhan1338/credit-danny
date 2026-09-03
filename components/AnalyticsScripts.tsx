import Script from "next/script";

/**
 * GA4 + Clicky + Meta Pixel — payloads byte-identical to the original site's
 * head, loaded via next/script (lazyOnload). They are fetched and executed
 * during browser idle time after the window `load` event, so none of the
 * three third-party bundles competes with rendering or hydration (they used
 * to run right after hydration, inside the Lighthouse measurement window).
 * Queue seeding (dataLayer/fbq) still precedes each async library, so the
 * initial PageView events are never lost — they are just sent a moment
 * later. Running after hydration also avoids the intermittent React #418
 * hydration failures the Meta Pixel loader caused when it inserted its
 * script element mid-hydration.
 */
export default function AnalyticsScripts() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-D191NWX75L" strategy="lazyOnload" />
      <Script id="cd-gtag" strategy="lazyOnload">
        {"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-D191NWX75L');\n"}
      </Script>
      <Script data-id="101501312" src="https://static.getclicky.com/js" strategy="lazyOnload" />
      <Script id="cd-fbq" strategy="lazyOnload">
        {"\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '937342555296844');\nfbq('track', 'PageView');\n"}
      </Script>
    </>
  );
}
