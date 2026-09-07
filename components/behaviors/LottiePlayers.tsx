"use client";

import { useEffect } from "react";
import { prefersReduce } from "./reduce";

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
