"use client";

import { useEffect, useState } from "react";

type Position = { x: number; y: number };

export function PremiumCursor() {
  const [enabled, setEnabled] = useState(false);
  const [trail, setTrail] = useState<Position[]>([]);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    setEnabled(true);

    const onMove = (event: MouseEvent) => {
      const next = { x: event.clientX, y: event.clientY };
      setTrail((prev) => [next, ...prev].slice(0, 8));
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block">
      {trail.map((point, idx) => (
        <span
          key={`${point.x}-${point.y}-${idx}`}
          className="absolute h-2 w-2 rounded-full bg-cyan-300/70 blur-[1px]"
          style={{
            transform: `translate(${point.x - 4}px, ${point.y - 4}px)`,
            opacity: 1 - idx / 10,
          }}
        />
      ))}
    </div>
  );
}
