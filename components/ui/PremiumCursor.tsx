"use client";

import { useEffect, useRef } from "react";

/** Lightweight cursor trail via DOM updates — no React re-renders on move. */
export function PremiumCursor() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    if (coarse || reduced || narrow) return;

    const root = rootRef.current;
    if (!root) return;

    const dots = Array.from({ length: 6 }, (_, i) => {
      const el = document.createElement("span");
      el.className = "absolute h-1.5 w-1.5 rounded-full bg-sky-300/70 will-change-transform";
      el.style.opacity = String(1 - i / 7);
      root.appendChild(el);
      return el;
    });

    const points: { x: number; y: number }[] = Array.from({ length: dots.length }, () => ({
      x: -20,
      y: -20,
    }));
    let mx = -20;
    let my = -20;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const tick = () => {
      points[0].x += (mx - points[0].x) * 0.35;
      points[0].y += (my - points[0].y) * 0.35;
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.28;
        points[i].y += (points[i - 1].y - points[i].y) * 0.28;
      }
      dots.forEach((dot, i) => {
        dot.style.transform = `translate3d(${points[i].x - 3}px, ${points[i].y - 3}px, 0)`;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      dots.forEach((dot) => dot.remove());
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      aria-hidden
    />
  );
}
