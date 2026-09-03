"use client";

import { useEffect } from "react";
import { prefersReduce } from "./reduce";

/**
 * [data-lottie] animation boxes (main.js module 6), lazily.
 *
 * The original loaded lottie.min.js (305 KB) plus lottie-data.js — an 820 KB
 * blob inlining every animation — on page load. Now the player library is
 * fetched only when the first animation box comes within 300px of the
 * viewport, and each animation's own JSON is fetched (via lottie's `path`)
 * only when that box approaches — so the initial load carries none of it and
 * an animation the visitor never scrolls to is never fetched.
 * Only mounted on pages that loaded assets/js/lottie.min.js originally.
 */
const LOTTIE_ALWAYS_LOOP = false;
const LIB_SRC = "/assets/js/lottie.min.js";

let libPromise: Promise<void> | null = null;
function loadLib(): Promise<void> {
  if (window.lottie) return Promise.resolve();
  if (libPromise) return libPromise;
  libPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = LIB_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      libPromise = null;
      reject(new Error("failed to load " + LIB_SRC));
    };
    document.body.appendChild(s);
  });
  return libPromise;
}

export default function LottiePlayers() {
  useEffect(() => {
    const boxes = Array.from(document.querySelectorAll<HTMLElement>("[data-lottie]"));
    if (!boxes.length) return;
    const reduce = prefersReduce();
    let cancelled = false;

    function start(el: HTMLElement) {
      if (cancelled || el.dataset.lottieStarted || !window.lottie) return;
      el.dataset.lottieStarted = "1";

      /* Reduced motion: play once, do not loop (see original notes).
         data-lottie-motion="always" opts a specific animation back in. */
      const force = LOTTIE_ALWAYS_LOOP || el.getAttribute("data-lottie-motion") === "always";
      const calm = reduce && !force;

      const fit = el.getAttribute("data-lottie-fit") || "meet";
      const src = el.getAttribute("data-lottie") || "";
      const key = src.split("/").pop() || "";
      const inline = window.CD_LOTTIE && window.CD_LOTTIE[key];

      const opts: Record<string, unknown> = {
        container: el,
        renderer: "svg",
        loop: !calm,
        autoplay: true,
        rendererSettings: { preserveAspectRatio: "xMidYMid " + fit },
      };
      if (inline) opts.animationData = inline;
      else opts.path = src.startsWith("assets/") ? "/" + src : src;

      const anim = window.lottie.loadAnimation(opts);
      anim.addEventListener("data_failed", () => {
        console.error("[lottie] could not load", el.getAttribute("data-lottie"));
      });
      (el as HTMLElement & { __lottie?: unknown }).__lottie = anim;
    }

    const arm = (el: HTMLElement) => {
      loadLib()
        .then(() => start(el))
        .catch((err) => console.error(err));
    };

    if (!("IntersectionObserver" in window)) {
      boxes.forEach(arm);
      return () => {
        cancelled = true;
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          arm(e.target as HTMLElement);
        });
      },
      { rootMargin: "300px 0px" }
    );
    boxes.forEach((b) => io.observe(b));

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  return null;
}
