"use client";

import { useEffect } from "react";

export default function PlayMarks() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(".cd-playmark, .ct-playmark").forEach((mark) => {
      const frame = mark.parentElement;
      const player = frame?.querySelector<HTMLElement>("wistia-player, video");
      if (!frame || !player) return;
      const offClass = mark.classList.contains("ct-playmark") ? "ct-off" : "cd-off";
      const off = () => mark.classList.add(offClass);
      for (const name of ["play", "playing", "wistia-play"]) {
        player.addEventListener(name, off);
        cleanups.push(() => player.removeEventListener(name, off));
      }
      frame.addEventListener("pointerdown", off);
      cleanups.push(() => frame.removeEventListener("pointerdown", off));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
