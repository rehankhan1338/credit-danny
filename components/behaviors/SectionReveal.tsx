"use client";

import { useEffect } from "react";
import { prefersReduce } from "./reduce";

/**
 * Port of the inline "section reveal" script the WordPress cd-pages templates
 * ship: the direct children of every <section> (or, when a section has a
 * single wrapper, that wrapper's children) start translated down and faded
 * out, then slide in with a small stagger as they enter the viewport. A
 * scroll/resize sweep plus a short polling loop catch anything the
 * IntersectionObserver misses (e.g. content that is already on screen or a
 * page too short to scroll). Everything is reverted on unmount.
 */
export default function SectionReveal() {
  useEffect(() => {
    if (prefersReduce() || !("IntersectionObserver" in window)) return;

    const skip = (el: Element) => {
      const t = el.tagName;
      if (t === "SCRIPT" || t === "STYLE") return true;
      if (el.getAttribute("aria-hidden") === "true") return true;
      const pos = getComputedStyle(el).position;
      return pos === "absolute" || pos === "fixed" || pos === "sticky";
    };

    const targets: Array<[HTMLElement, number]> = [];
    document.querySelectorAll("section").forEach((sec) => {
      let kids = Array.from(sec.children).filter((k) => !skip(k));
      if (kids.length === 1 && kids[0].children.length > 1) {
        const inner = Array.from(kids[0].children).filter((k) => !skip(k));
        if (inner.length > 1) kids = inner;
      }
      kids.forEach((k, i) => targets.push([k as HTMLElement, i]));
    });
    if (!targets.length) return;

    const delays = new Map<HTMLElement, number>();
    targets.forEach(([el, i]) => {
      delays.set(el, Math.min(i, 5) * 90);
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.willChange = "opacity, transform";
    });

    void document.body.offsetHeight;
    targets.forEach(([el]) => {
      const d = delays.get(el) ?? 0;
      el.style.transition =
        `opacity .75s cubic-bezier(.16,1,.3,1) ${d}ms, transform .75s cubic-bezier(.16,1,.3,1) ${d}ms`;
    });

    const pending = new Set(targets.map(([el]) => el));
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const show = (el: HTMLElement) => {
      if (!pending.has(el)) return;
      pending.delete(el);
      el.style.opacity = "";
      el.style.transform = "";
      io.unobserve(el);
      const t = setTimeout(() => {
        el.style.transition = "";
        el.style.willChange = "";
        timers.delete(t);
      }, 1600);
      timers.add(t);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && show(e.target as HTMLElement)),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    targets.forEach(([el]) => io.observe(el));

    let ticking = false;
    const sweep = () => {
      ticking = false;
      if (!pending.size) return;
      const h = window.innerHeight;
      const doc = document.scrollingElement || document.documentElement;
      if (doc.scrollHeight - h - window.scrollY <= 4) Array.from(pending).forEach(show);
      Array.from(pending).forEach((el) => {
        if (el.getBoundingClientRect().top < h) show(el);
      });
      if (!pending.size) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
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
    const poll = setInterval(() => {
      sweep();
      if (!pending.size || ++ticks > 150) clearInterval(poll);
    }, 200);
    sweep();

    return () => {
      clearInterval(poll);
      timers.forEach((t) => clearTimeout(t));
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      targets.forEach(([el]) => {
        el.style.opacity = "";
        el.style.transform = "";
        el.style.transition = "";
        el.style.willChange = "";
      });
    };
  }, []);

  return null;
}
