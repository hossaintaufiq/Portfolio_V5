"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: number;
  reverse?: boolean;
};

export function Marquee({
  items,
  className,
  speed = 35,
  reverse = false,
}: MarqueeProps) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-sky-500/10 via-violet-500/10 to-amber-400/10 py-3",
        className,
      )}
    >
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap"
        animate={
          reduce
            ? undefined
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-3 text-sm font-medium text-slate-200/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
