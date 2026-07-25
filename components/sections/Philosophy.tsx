"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { philosophy } from "@/data/content";
import { motion } from "framer-motion";

const COLORS = [
  "border-sky-400/30 from-sky-400/15",
  "border-violet-400/30 from-violet-400/15",
  "border-emerald-400/30 from-emerald-400/15",
  "border-amber-400/30 from-amber-400/15",
  "border-fuchsia-400/30 from-fuchsia-400/15",
  "border-cyan-400/30 from-cyan-400/15",
  "border-rose-400/30 from-rose-400/15",
  "border-indigo-400/30 from-indigo-400/15",
];

export function Philosophy() {
  return (
    <SectionFrame id="philosophy" tone="violet">
      <SectionHeading
        eyebrow="How I work"
        title="Engineering standards that protect quality at scale."
        description="How I approach architecture, delivery, and long-term maintainability on production teams."
        tone="cool"
      />

      <Stagger className="grid gap-4 md:grid-cols-2">
        {philosophy.map((item, index) => (
          <StaggerItem key={item.title}>
            <motion.article
              whileHover={{ y: -6, x: index % 2 === 0 ? 4 : -4 }}
              className={`flex gap-4 rounded-2xl border bg-gradient-to-br to-transparent p-5 backdrop-blur-md sm:p-6 ${COLORS[index % COLORS.length]}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-black/30 font-mono text-sm text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionFrame>
  );
}
