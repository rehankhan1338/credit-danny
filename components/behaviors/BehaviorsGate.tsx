"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Behaviors from "./Behaviors";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function BehaviorsGate() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return <Behaviors key={pathname} />;
}
