"use client";

import { useEffect } from "react";

/**
 * Port of the inline script on the WordPress /5kgiveaway/ page:
 *
 * 1. Spots counter — `[data-gw="left"]` / `[data-gw="claimed"]` / `[data-gw="bar"]`.
 *    Starts from the server-rendered number, drifts down one spot every 5–10 s
 *    (capped at 40 spots per visit, never below 110), pauses while the tab is
 *    hidden, and refreshes from the WordPress endpoint /wp-json/cd/v1/giveaway
 *    (proxied) if that reports fewer spots than currently shown.
 * 2. Sticky strip — `.gw-strip` gets `is-on` once `.gw-hero` has scrolled out.
 * 3. Play mark — `.gw-playmark` gets `gw-off` when its Wistia player starts.
 */
export default function GiveawayBehaviors() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // 1. spots counter
    (() => {
      let TOTAL = 500;
      const MIN = 5000, MAX = 10000, MAX_DRIFT = 40, FLOOR = 110, MIN_SHOWN = 150;
      const lefts = Array.from(document.querySelectorAll<HTMLElement>('[data-gw="left"]'));
      const claimed = document.querySelector<HTMLElement>('[data-gw="claimed"]');
      const bar = document.querySelector<HTMLElement>('[data-gw="bar"]');
      if (!lefts.length || !claimed || !bar) return;

      let left = parseInt(lefts[0].textContent || "", 10) || 350;
      let realStart = left;
      let timer: ReturnType<typeof setTimeout> | null = null;
      let alive = true;

      const paint = () => {
        lefts.forEach((el) => (el.textContent = String(left)));
        const taken = TOTAL - left;
        claimed.textContent = `${taken} of ${TOTAL} claimed`;
        bar.style.width = `${Math.round((taken * 100) / TOTAL)}%`;
      };
      const stopped = () => left <= FLOOR || realStart - left >= MAX_DRIFT;
      const schedule = () => {
        if (!alive || stopped()) return;
        timer = setTimeout(tick, MIN + Math.random() * (MAX - MIN));
      };
      const tick = () => {
        if (!alive || stopped()) return;
        left -= 1;
        paint();
        schedule();
      };
      const onVisibility = () => {
        if (document.hidden) {
          if (timer) clearTimeout(timer);
          timer = null;
        } else if (timer === null) {
          schedule();
        }
      };
      document.addEventListener("visibilitychange", onVisibility);

      paint();
      schedule();

      fetch("/wp-json/cd/v1/giveaway", { cache: "no-store", credentials: "omit" })
        .then((r) => (r.ok ? r.json() : null))
        .then((d: { left?: number; total?: number } | null) => {
          if (!alive || !d || typeof d.left !== "number") return;
          const fresh = Math.max(MIN_SHOWN, d.left);
          if (fresh >= left) return;
          if (typeof d.total === "number" && d.total > 0) TOTAL = d.total;
          left = fresh;
          realStart = left;
          paint();
        })
        .catch(() => {});

      cleanups.push(() => {
        alive = false;
        if (timer) clearTimeout(timer);
        document.removeEventListener("visibilitychange", onVisibility);
      });
    })();

    // 2. sticky strip
    (() => {
      const strip = document.querySelector(".gw-strip");
      const hero = document.querySelector(".gw-hero");
      if (!strip) return;
      if (!hero || !("IntersectionObserver" in window)) {
        strip.classList.add("is-on");
        return;
      }
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => strip.classList.toggle("is-on", !e.isIntersecting)),
        { threshold: 0 }
      );
      io.observe(hero);
      cleanups.push(() => io.disconnect());
    })();

    // 3. play mark
    (() => {
      const mark = document.querySelector(".gw-playmark");
      if (!mark) return;
      const frame = mark.parentElement;
      const player = frame?.querySelector("wistia-player");
      if (!frame || !player) return;
      const off = () => mark.classList.add("gw-off");
      const events = ["play", "playing", "wistia-play"];
      events.forEach((n) => player.addEventListener(n, off));
      frame.addEventListener("pointerdown", off);
      cleanups.push(() => {
        events.forEach((n) => player.removeEventListener(n, off));
        frame.removeEventListener("pointerdown", off);
      });
    })();

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
