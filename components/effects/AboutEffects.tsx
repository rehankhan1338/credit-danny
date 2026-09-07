"use client";

import { useEffect } from "react";

export default function AboutEffects() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    reveals.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(26px)";
    });
    void document.body.offsetHeight;
    reveals.forEach((el) => {
      el.style.transition =
        "opacity .7s cubic-bezier(.16,1,.3,1)," + "transform .7s cubic-bezier(.16,1,.3,1)";
    });
    const pending = new Set(reveals);
    const show = (el: HTMLElement) => {
      if (!pending.has(el)) return;
      pending.delete(el);
      el.style.opacity = "1";
      el.style.transform = "none";
      io.unobserve(el);
    };
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) show(e.target as HTMLElement);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));

    let ticking = false;
    const sweep = () => {
      ticking = false;
      if (!pending.size) return;
      const h = window.innerHeight,
        doc = document.scrollingElement!;
      if (doc.scrollHeight - h - window.scrollY <= 4) Array.from(pending).forEach(show);
      Array.from(pending).forEach((el) => {
        if (el.getBoundingClientRect().top < h) show(el);
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sweep);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    let ticks = 0;
    const t = window.setInterval(() => {
      sweep();
      if (!pending.size || ++ticks > 150) window.clearInterval(t);
    }, 200);
    sweep();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearInterval(t);
    };
  }, []);

  return null;
}
