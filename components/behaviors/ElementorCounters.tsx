"use client";

import { useEffect } from "react";
import { prefersReduce } from "./reduce";

/**
 * Stand-in for Elementor's counter widget handler. The widget renders
 * `.elementor-counter-number` with the start value as text plus data-from-value,
 * data-to-value, data-duration and data-delimiter attributes; Elementor's
 * frontend JS counts it up (jQuery numerator) once the widget scrolls into
 * view. This does the same without Elementor: ease-out count from "from" to
 * "to", thousands delimiter applied, decimals preserved from the target value.
 */
export default function ElementorCounters() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".elementor-counter-number[data-to-value]")
    );
    if (!els.length) return;

    const format = (el: HTMLElement, value: number, decimals: number) => {
      const delimiter = el.getAttribute("data-delimiter") ?? ",";
      const [int, frac] = value.toFixed(decimals).split(".");
      const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
      el.textContent = frac !== undefined ? `${grouped}.${frac}` : grouped;
    };
    const decimalsOf = (raw: string) => (raw.includes(".") ? raw.split(".")[1].length : 0);

    if (prefersReduce() || !("IntersectionObserver" in window)) {
      els.forEach((el) => {
        const raw = el.getAttribute("data-to-value") || "0";
        format(el, parseFloat(raw) || 0, decimalsOf(raw));
      });
      return;
    }

    const frames = new Set<number>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          const rawTo = el.getAttribute("data-to-value") || "0";
          const to = parseFloat(rawTo) || 0;
          const from = parseFloat(el.getAttribute("data-from-value") || "0") || 0;
          const duration = parseInt(el.getAttribute("data-duration") || "2000", 10) || 2000;
          const decimals = decimalsOf(rawTo);
          let t0: number | null = null;
          const frame = (ts: number) => {
            if (t0 === null) t0 = ts;
            const p = Math.min((ts - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            format(el, from + (to - from) * eased, decimals);
            if (p < 1) frames.add(requestAnimationFrame(frame));
          };
          frames.add(requestAnimationFrame(frame));
        });
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      frames.forEach((f) => cancelAnimationFrame(f));
    };
  }, []);

  return null;
}
