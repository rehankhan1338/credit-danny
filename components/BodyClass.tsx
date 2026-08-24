"use client";

import { useIsoLayoutEffect } from "@/components/useIsoLayoutEffect";

/**
 * Applies the page's original WordPress <body> class string.
 *
 * The root layout server-renders only the classes shared by every page.
 * This component restores the full original string before paint, both on
 * initial hydration and on every client-side navigation, so the live DOM
 * matches the original site exactly.
 *
 * Because page CSS is global and persists across client navigations, a page
 * stylesheet that must not leak onto other pages can scope its rules to a
 * page-specific class from this string (team.css does, via body.cd-team) —
 * the swap here un-matches those rules the moment the page changes.
 */
export default function BodyClass({ className }: { className: string }) {
  useIsoLayoutEffect(() => {
    document.body.className = className;
  }, [className]);

  return null;
}
