"use client";

import { useEffect } from "react";

/**
 * Lazy Wistia bootstrap. The pages originally loaded player.js plus one
 * embed module per video right after hydration, on every visit, whether or
 * not a player ever came near the viewport. This component injects the very
 * same scripts (same URLs, same `type="module"`) the first time any
 * <wistia-player> on the page comes within 600px of the viewport — for a
 * player that is already on screen that happens immediately after mount.
 *
 * The scripts are appended to <head> and de-duplicated by src, so they are
 * fetched once per session even across client-side navigations; the custom
 * element, once defined, upgrades any <wistia-player> React later renders.
 */
const PLAYER_SRC = "https://fast.wistia.com/player.js";

function inject(src: string, asModule: boolean) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  if (asModule) s.type = "module";
  document.head.appendChild(s);
}

export default function WistiaLoader({ mediaIds }: { mediaIds: string[] }) {
  const key = mediaIds.join(",");

  useEffect(() => {
    const ids = key ? key.split(",") : [];
    const load = () => {
      inject(PLAYER_SRC, false);
      ids.forEach((id) => inject(`https://fast.wistia.com/embed/${id}.js`, true));
    };

    const players = Array.from(document.querySelectorAll("wistia-player"));
    if (!players.length || !("IntersectionObserver" in window)) {
      load();
      return;
    }

    let done = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (done || !entries.some((e) => e.isIntersecting)) return;
        done = true;
        io.disconnect();
        load();
      },
      { rootMargin: "600px 0px" }
    );
    players.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, [key]);

  return null;
}
