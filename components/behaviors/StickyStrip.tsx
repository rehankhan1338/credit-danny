"use client";

import { useEffect } from "react";

export default function StickyStrip({
  stripSel,
  startSel,
  endSel,
  onClass,
}: {
  stripSel: string;
  startSel: string;
  endSel: string;
  onClass: string;
}) {
  useEffect(() => {
    const strip = document.querySelector(stripSel);
    if (!strip) return;
    const start = document.querySelector(startSel);
    const end = document.querySelector(endSel);

    if (!("IntersectionObserver" in window) || !start || !end) {
      strip.classList.add(onClass);
      return;
    }
    let startOn = true,
      endOn = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === start) startOn = e.isIntersecting;
          else if (e.target === end) endOn = e.isIntersecting;
        });
        strip.classList.toggle(onClass, !startOn && !endOn);
      },
      { threshold: 0 }
    );
    io.observe(start);
    io.observe(end);
    return () => io.disconnect();
  }, [stripSel, startSel, endSel, onClass]);

  return null;
}
