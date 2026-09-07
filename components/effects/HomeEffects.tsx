"use client";

import { useEffect } from "react";
import { prefersReduce } from "@/components/behaviors/reduce";

type RevealEl = HTMLElement & { __delay?: number };
type TrackEl = HTMLElement & { __idle?: number };

export default function HomeEffects() {
  useEffect(() => {
    const reduce = prefersReduce();
    const cleanups: Array<() => void> = [];

    if (!reduce && "IntersectionObserver" in window) {
      const skip = (el: Element) => {
        const tag = el.tagName;
        if (tag === "VIDEO" || tag === "SCRIPT" || tag === "STYLE") return true;
        if (el.getAttribute("aria-hidden") === "true") return true;
        const pos = getComputedStyle(el).position;
        return pos === "absolute" || pos === "fixed" || pos === "sticky";
      };
      const targets: Array<[RevealEl, number]> = [];
      document.querySelectorAll("section, footer").forEach((sec) => {
        if (sec.closest("[data-menu-panel]")) return;
        let kids = Array.prototype.filter.call(sec.children, (k: Element) => !skip(k));
        if (kids.length === 1 && kids[0].children.length > 1) {
          const inner = Array.prototype.filter.call(kids[0].children, (k: Element) => !skip(k));
          if (inner.length > 1) kids = inner;
        }
        kids.forEach((k: RevealEl, i: number) => targets.push([k, i]));
      });
      targets.forEach(([el, i]) => {
        el.__delay = Math.min(i, 5) * 90;
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.willChange = "opacity, transform";
      });
      void document.body.offsetHeight;
      targets.forEach(([el]) => {
        el.style.transition =
          `opacity .75s cubic-bezier(.16,1,.3,1) ${el.__delay}ms, ` +
          `transform .75s cubic-bezier(.16,1,.3,1) ${el.__delay}ms`;
      });
      const pending = new Set(targets.map((p) => p[0]));
      const show = (el: RevealEl) => {
        if (!pending.has(el)) return;
        pending.delete(el);
        el.style.opacity = "";
        el.style.transform = "";
        io.unobserve(el);
        setTimeout(() => {
          el.style.transition = "";
          el.style.willChange = "";
        }, 1600);
      };
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) show(e.target as RevealEl);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );
      targets.forEach(([el]) => io.observe(el));

      let ticking = false;
      const sweep = () => {
        ticking = false;
        if (!pending.size) return;
        const h = window.innerHeight;
        const doc = document.scrollingElement!;
        if (doc.scrollHeight - h - window.scrollY <= 4) {
          Array.from(pending).forEach(show);
        }
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
      const tick = window.setInterval(() => {
        sweep();
        if (!pending.size || ++ticks > 150) window.clearInterval(tick);
      }, 200);
      sweep();
      cleanups.push(() => {
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        window.clearInterval(tick);
      });
    }

    const track = document.querySelector<TrackEl>('[data-track="results"]');
    if (track && track.firstElementChild) {
      let driving = false;
      const pitch = () => {
        const a = track.children[0],
          b = track.children[1];
        if (!b) return a.getBoundingClientRect().width;
        return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
      };
      const step = (dir: number) => {
        const p = pitch();
        const max = track.scrollWidth - track.clientWidth;
        let to = track.scrollLeft + dir * p;
        if (to > max + 2) to = 0;
        else if (to < -2) to = max;
        driving = true;
        track.scrollTo({ left: to, behavior: reduce ? "auto" : "smooth" });
        setTimeout(() => {
          driving = false;
        }, 700);
      };
      let timer: number | undefined;
      const play = () => {
        window.clearInterval(timer);
        if (!reduce) timer = window.setInterval(() => step(1), 3800);
      };
      const pause = () => window.clearInterval(timer);
      document.querySelectorAll('[aria-label="Previous"]').forEach((b) => {
        const fn = () => {
          pause();
          step(-1);
          play();
        };
        b.addEventListener("click", fn);
        cleanups.push(() => b.removeEventListener("click", fn));
      });
      document.querySelectorAll('[aria-label="Next"]').forEach((b) => {
        const fn = () => {
          pause();
          step(1);
          play();
        };
        b.addEventListener("click", fn);
        cleanups.push(() => b.removeEventListener("click", fn));
      });
      const onScrollTrack = () => {
        if (driving) return;
        pause();
        window.clearTimeout(track.__idle);
        track.__idle = window.setTimeout(play, 2600);
      };
      track.addEventListener("pointerenter", pause);
      track.addEventListener("pointerleave", play);
      track.addEventListener("touchstart", pause, { passive: true });
      track.addEventListener("scroll", onScrollTrack, { passive: true });
      play();
      cleanups.push(() => {
        pause();
        window.clearTimeout(track.__idle);
        track.removeEventListener("pointerenter", pause);
        track.removeEventListener("pointerleave", play);
        track.removeEventListener("touchstart", pause);
        track.removeEventListener("scroll", onScrollTrack);
      });
    }

    const jumpNav = document.querySelector<HTMLElement>(".cd-jump");
    if (jumpNav) {
      const rail = jumpNav.querySelector<HTMLElement>(".cd-jump-rail");
      const pills = Array.from(
        jumpNav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      ).flatMap((link) => {
        const target = document.getElementById(link.hash.slice(1));
        return target ? [{ link, target }] : [];
      });
      if (pills.length) {
        let active: HTMLAnchorElement | null = null;
        let spyTick = false;
        const center = (link: HTMLAnchorElement) => {
          if (!rail || rail.scrollWidth <= rail.clientWidth + 2) return;
          rail.scrollTo({
            left: link.offsetLeft - (rail.clientWidth - link.offsetWidth) / 2,
            behavior: reduce ? "auto" : "smooth",
          });
        };
        const update = () => {
          spyTick = false;
          const line = jumpNav.getBoundingClientRect().bottom + 8;
          let best: HTMLAnchorElement | null = null;
          let bestTop = -Infinity;
          for (const { link, target } of pills) {
            const top = target.getBoundingClientRect().top;
            if (top <= line && top > bestTop) {
              bestTop = top;
              best = link;
            }
          }
          if (best === active) return;
          active?.classList.remove("is-active");
          active = best;
          if (active) {
            active.classList.add("is-active");
            center(active);
          }
        };
        const onSpy = () => {
          if (!spyTick) {
            spyTick = true;
            requestAnimationFrame(update);
          }
        };
        window.addEventListener("scroll", onSpy, { passive: true });
        window.addEventListener("resize", onSpy);
        update();
        cleanups.push(() => {
          window.removeEventListener("scroll", onSpy);
          window.removeEventListener("resize", onSpy);
          active?.classList.remove("is-active");
        });
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
