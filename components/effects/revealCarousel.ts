import { prefersReduce } from "@/components/behaviors/reduce";

type RevealEl = HTMLElement & {
  __delay?: number;
  __base?: string;
  __prop?: "transform" | "translate";
  __floats?: boolean;
};

export type RevealCarouselOptions = {
  revealSelector: string;
  floats: boolean;
  splitFlush: boolean;
  autoplayMs: number;
};

export function setupRevealCarousel(opts: RevealCarouselOptions): () => void {
  const reduce = prefersReduce();
  const cleanups: Array<() => void> = [];

  if (!reduce && "IntersectionObserver" in window) {
    const marked: RevealEl[] = [];
    const vh = window.innerHeight;
    document.querySelectorAll("section").forEach((section) => {
      const picked: RevealEl[] = [];
      section.querySelectorAll<RevealEl>(opts.revealSelector).forEach((el) => {
        if (el.closest("[data-track]")) return;
        if (opts.floats) {
          const floater = el.closest("[data-float]");
          if (floater && floater !== el) return;
          el.__floats = !!floater;
        }
        if (el.closest("[data-reveal]")) return;
        const rect = el.getBoundingClientRect();
        if (rect.height === 0) return;
        if (rect.top < vh && rect.bottom > 0) return;
        el.setAttribute("data-reveal", "");
        picked.push(el);
      });
      picked.forEach((el, i) => {
        el.__delay = Math.min(i * 55, 480);
        el.__base = el.style.transition || "";
        el.__prop = el.__floats ? "transform" : "translate";
        el.style.opacity = "0";
        el.style.setProperty(el.__prop, el.__floats ? "translateY(-18px)" : "0 -18px");
        if (!opts.splitFlush) {
          el.style.transition =
            `opacity 620ms cubic-bezier(.22,.61,.36,1) ${el.__delay}ms,` +
            `${el.__prop} 720ms cubic-bezier(.22,.61,.36,1) ${el.__delay}ms`;
        }
        marked.push(el);
      });
    });

    if (opts.splitFlush) {
      void document.body.offsetHeight;
      marked.forEach((el) => {
        el.style.transition =
          `opacity 620ms cubic-bezier(.22,.61,.36,1) ${el.__delay}ms,` +
          `${el.__prop} 720ms cubic-bezier(.22,.61,.36,1) ${el.__delay}ms`;
      });
    }

    const restore = (el: RevealEl) => {
      el.style.opacity = "";
      if (el.__prop) el.style.removeProperty(el.__prop);
      el.style.transition = el.__base || "";
      el.removeAttribute("data-reveal");
    };
    const pending = new Set(marked);
    const timers = new Set<number>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) reveal(e.target as RevealEl);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    function reveal(el: RevealEl) {
      if (!pending.delete(el)) return;
      el.style.opacity = "1";
      el.style.setProperty(el.__prop!, el.__floats ? "translateY(0)" : "0 0");
      io.unobserve(el);
      const t = window.setTimeout(() => {
        timers.delete(t);
        restore(el);
      }, 1400);
      timers.add(t);
    }
    marked.forEach((el) => io.observe(el));

    const guard = window.setTimeout(() => pending.forEach(reveal), 8000);

    cleanups.push(() => {
      io.disconnect();
      window.clearTimeout(guard);
      timers.forEach((t) => window.clearTimeout(t));
      marked.forEach(restore);
    });
  }

  const track = document.querySelector<HTMLElement>("#results [data-track]");
  if (track && track.firstElementChild) {
    let driving = false;
    let from = 0;
    const pitch = () => track.firstElementChild!.getBoundingClientRect().width + 20;
    const index = () => Math.round(track.scrollLeft / pitch());
    const last = () => track.children.length - 1;
    let driveOff: number | undefined;
    const goTo = (i: number) => {
      driving = true;
      from = i;
      track.scrollTo({ left: i * pitch(), behavior: "smooth" });
      window.clearTimeout(driveOff);
      driveOff = window.setTimeout(() => {
        driving = false;
      }, 900);
    };
    const step = (dir: number) => {
      const i = index();
      if (dir > 0) goTo(i >= last() ? 0 : i + 1);
      else goTo(i <= 0 ? last() : i - 1);
    };

    const prev = document.querySelector('#results [aria-label="Previous"]');
    const next = document.querySelector('#results [aria-label="Next"]');
    const onPrev = () => step(-1);
    const onNext = () => step(1);
    if (prev) prev.addEventListener("click", onPrev);
    if (next) next.addEventListener("click", onNext);
    cleanups.push(() => {
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
    });

    const paged = window.matchMedia("(max-width:560px)");
    let settle: number | undefined;
    const onDown = () => {
      from = index();
    };
    (["touchstart", "pointerdown"] as const).forEach((ev) => {
      track.addEventListener(ev, onDown, { passive: true });
      cleanups.push(() => track.removeEventListener(ev, onDown));
    });
    const onScroll = () => {
      if (driving || !paged.matches) return;
      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        const landed = index();
        const want = Math.max(0, Math.min(last(), Math.max(from - 1, Math.min(from + 1, landed))));
        if (want !== landed) goTo(want);
        from = want;
      }, 130);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => {
      track.removeEventListener("scroll", onScroll);
      window.clearTimeout(settle);
      window.clearTimeout(driveOff);
    });

    if (!reduce) {
      const timer = window.setInterval(() => step(1), opts.autoplayMs);
      const stop = () => window.clearInterval(timer);
      (["pointerdown", "wheel", "touchstart"] as const).forEach((ev) => {
        track.addEventListener(ev, stop, { passive: true, once: true });
      });
      cleanups.push(() => window.clearInterval(timer));
    }
  }

  return () => cleanups.forEach((fn) => fn());
}
