"use client";

import { useEffect, useRef } from "react";

export default function SmartBar({ barId }: { barId: string }) {
  const last = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const bar = document.getElementById(barId);
    if (!bar) return;
    const BASE = "0 4px 18px rgba(0,0,0,.45)";
    const DEEP = "0 10px 28px rgba(0,0,0,.55)";
    last.current = window.scrollY;

    function update() {
      const y = window.scrollY;
      const h = bar!.offsetHeight;
      if (y <= 80) {
        bar!.style.transform = "translateY(0)";
        bar!.style.boxShadow = BASE;
      } else {
        if (y > last.current + 6) bar!.style.transform = `translateY(-${h + 2}px)`;
        else if (y < last.current - 6) bar!.style.transform = "translateY(0)";
        bar!.style.boxShadow = DEEP;
      }
      last.current = y;
      ticking.current = false;
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    }

    function onClick(e: MouseEvent) {
      const t = e.target as Element | null;
      if (t?.closest && t.closest("[data-menu-open]")) bar!.style.transform = "translateY(0)";
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, [barId]);

  return null;
}
