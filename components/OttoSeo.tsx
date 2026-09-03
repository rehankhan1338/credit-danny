"use client";

import { useEffect } from "react";

/**
 * SearchAtlas / OTTO dynamic-optimization embed — the exact script the
 * original site injected inline on every page (same src, uuid, id and
 * attributes). Injected AFTER hydration instead of during parse: OTTO
 * rewrites the DOM, and doing that mid-hydration made React throw
 * intermittent mismatch errors (#418). The injection is additionally
 * scheduled for the first idle period (2s at the latest) so it never
 * competes with the page's own scripts for main-thread time right after
 * hydration. The script itself loads async over the network either way.
 */
export default function OttoSeo() {
  useEffect(() => {
    const inject = () => {
      if (document.getElementById("sa-dynamic-optimization")) return;
      const script = document.createElement("script");
      script.setAttribute("nowprocket", "");
      script.setAttribute("nitro-exclude", "");
      script.src = "https://seo-tools.leadconnectorhq.com/scripts/dynamic_optimization.js";
      script.dataset.uuid = "58cbacf0-317a-4dc6-8c30-0cb3b4922b96";
      script.id = "sa-dynamic-optimization";
      document.head.appendChild(script);
    };
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(inject, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(inject, 300);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
