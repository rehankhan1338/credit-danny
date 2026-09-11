"use client";

import { useEffect } from "react";
import { prefersReduce } from "./reduce";

/**
 * Stand-in for the Premium Addons "Lottie" widget handler. The widget renders
 * `.premium-lottie-animation` with data-lottie-url / -loop / -speed / -render
 * attributes and relies on Premium Addons' JS (bodymovin) to play the JSON.
 * This loads the same lottie-web build the home page already ships
 * (/assets/js/lottie.min.js) the first time a widget comes near the viewport
 * and plays each animation with the widget's own settings. Animation JSON is
 * fetched from the site's own /wp-content/ path, which the proxy serves.
 */
type LottieAnim = {
  destroy(): void;
  setSpeed(speed: number): void;
  setDirection(direction: 1 | -1): void;
};
type LottieLib = {
  loadAnimation(opts: Record<string, unknown>): LottieAnim;
};

const LIB_SRC = "/assets/js/lottie.min.js";
let libPromise: Promise<LottieLib> | null = null;

function loadLib(): Promise<LottieLib> {
  const existing = (window as unknown as { lottie?: LottieLib }).lottie;
  if (existing) return Promise.resolve(existing);
  if (libPromise) return libPromise;
  libPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = LIB_SRC;
    s.async = true;
    s.onload = () => resolve((window as unknown as { lottie: LottieLib }).lottie);
    s.onerror = () => {
      libPromise = null;
      reject(new Error("failed to load " + LIB_SRC));
    };
    document.body.appendChild(s);
  });
  return libPromise;
}

const localUrl = (u: string) => u.replace(/^https:\/\/(www\.)?creditdanny\.com\/wp-content\//, "/wp-content/");

export default function PremiumLottie() {
  useEffect(() => {
    const boxes = Array.from(
      document.querySelectorAll<HTMLElement>(".premium-lottie-animation[data-lottie-url]")
    );
    if (!boxes.length) return;

    const anims = new Map<HTMLElement, LottieAnim>();
    let cancelled = false;

    const start = (box: HTMLElement) => {
      if (anims.has(box)) return;
      loadLib()
        .then((lottie) => {
          if (cancelled || anims.has(box)) return;
          const loop = box.getAttribute("data-lottie-loop") === "true";
          const speed = parseFloat(box.getAttribute("data-lottie-speed") || "1") || 1;
          const reverse = box.getAttribute("data-lottie-reverse") === "true";
          const anim = lottie.loadAnimation({
            container: box,
            renderer: box.getAttribute("data-lottie-render") || "svg",
            loop,
            autoplay: !prefersReduce(),
            path: localUrl(box.getAttribute("data-lottie-url") || ""),
          });
          if (speed !== 1) anim.setSpeed(speed);
          if (reverse) anim.setDirection(-1);
          anims.set(box, anim);
        })
        .catch(() => {});
    };

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            io?.unobserve(e.target);
            start(e.target as HTMLElement);
          });
        },
        { rootMargin: "300px 0px" }
      );
      boxes.forEach((b) => io!.observe(b));
    } else {
      boxes.forEach(start);
    }

    return () => {
      cancelled = true;
      io?.disconnect();
      anims.forEach((a) => a.destroy());
      anims.clear();
    };
  }, []);

  return null;
}
