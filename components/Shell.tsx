import AnalyticsScripts from "@/components/AnalyticsScripts";
import BehaviorsGate from "@/components/behaviors/BehaviorsGate";
import JsDetect from "@/components/JsDetect";
import "@/public/assets/css/google-fonts.css";
import "@/public/assets/css/style.css";

/**
 * The single document shell (one root layout — required for client-side
 * navigation; separate root layouts force a full page load on every link).
 *
 * <body> server-renders the class set shared by all 19 pages. Each page's
 * <BodyClass> then restores its full original string pre-paint. Page-specific
 * classes are safe to target from CSS (team.css scopes a rule to body.cd-team)
 * because the layout effect runs before first paint — but such rules must
 * expect the class to be absent in the server-rendered HTML.
 *
 * suppressHydrationWarning ×2: several pages run a pre-paint one-liner that
 * adds a JS-detection class to <html>, and BodyClass rewrites the body class
 * — both are deliberate pre-hydration mutations React must not diff away.
 */
const SHARED_BODY_CLASS =
  "wp-singular page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor eio-default hello-elementor-default elementor-default elementor-kit-27255861";

export default function Shell({ children }: { children: React.ReactNode }) {
  // data-scroll-behavior tells Next.js the CSS sets scroll-behavior:smooth,
  // so it suspends smooth scrolling while resetting scroll on route
  // transitions — without it, navigations kept the previous page's scroll
  // position instead of landing at the top. Same-page anchor smoothness
  // is unaffected.
  return (
    <html
      lang="en-US"
      prefix="og: https://ogp.me/ns#"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={SHARED_BODY_CLASS} suppressHydrationWarning>
        <JsDetect />
        <AnalyticsScripts />
        {children}
        <BehaviorsGate />
      </body>
    </html>
  );
}
