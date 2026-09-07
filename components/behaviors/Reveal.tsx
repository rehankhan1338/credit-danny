"use client";

import { useEffect } from "react";
import { prefersReduce } from "./reduce";

export default function Reveal({
  sel,
  inClass,
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.08,
}: {
  sel: string;
  inClass: string;
  rootMargin?: string;
  threshold?: number;
}) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(sel));
    if (!els.length) return;

    if (!("IntersectionObserver" in window) || prefersReduce()) {
      els.forEach((el) => el.classList.add(inClass));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(inClass);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin, threshold }
    );
    els.forEach((el) => io.observe(el));

    const t = window.setTimeout(() => {
      els.forEach((el) => el.classList.add(inClass));
    }, 8000);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [sel, inClass, rootMargin, threshold]);

  return null;
}
