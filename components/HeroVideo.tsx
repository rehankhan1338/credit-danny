"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { preload } from "react-dom";

/**
 * Home hero background video, deferred.
 *
 * The original markup autoplayed an 18 MB mp4 with preload="auto", so the
 * video competed with everything above the fold. Now a lightweight poster
 * frame paints immediately (it is the hero's LCP candidate and is preloaded
 * at high priority) and the re-encoded 3.6 MB clip is attached only after the
 * window `load` event, during idle time — so it never delays LCP, FCP or
 * hydration. Once attached it autoplays muted exactly as before.
 */
export default function HeroVideo({
  src,
  poster,
  style,
}: {
  src: string;
  poster: string;
  style?: CSSProperties;
}) {
  preload(poster, { as: "image", fetchPriority: "high" });
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let cancelled = false;
    let idleId: number | undefined;
    let usedIdle = false;

    const start = () => {
      if (cancelled || v.getAttribute("src")) return;
      v.src = src;
      v.load();
      v.play().catch(() => {
        /* autoplay refused (data-saver etc.) — the poster stays visible */
      });
    };
    const whenIdle = () => {
      if (typeof window.requestIdleCallback === "function") {
        usedIdle = true;
        idleId = window.requestIdleCallback(start, { timeout: 2500 });
      } else {
        idleId = window.setTimeout(start, 250);
      }
    };

    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", whenIdle);
      if (idleId !== undefined) {
        if (usedIdle) window.cancelIdleCallback(idleId);
        else window.clearTimeout(idleId);
      }
    };
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      loop
      muted
      autoPlay
      playsInline
      preload="none"
      aria-hidden="true"
      style={style}
    />
  );
}
