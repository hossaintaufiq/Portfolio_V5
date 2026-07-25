"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { whatIBuild } from "@/data/content";
import { motion } from "framer-motion";

const ACCENTS = [
  "from-sky-500/20 via-sky-400/5 to-transparent border-sky-400/25",
  "from-violet-500/20 via-violet-400/5 to-transparent border-violet-400/25",
  "from-emerald-500/20 via-emerald-400/5 to-transparent border-emerald-400/25",
  "from-amber-500/20 via-amber-400/5 to-transparent border-amber-400/25",
  "from-fuchsia-500/20 via-fuchsia-400/5 to-transparent border-fuchsia-400/25",
  "from-cyan-500/20 via-cyan-400/5 to-transparent border-cyan-400/25",
];

const DOTS = [
  "bg-sky-400",
  "bg-violet-400",
  "bg-emerald-400",
  "bg-amber-400",
  "bg-fuchsia-400",
  "bg-cyan-400",
];

export function WhatIBuild() {
  return (
    <SectionFrame id="what-i-build" tone="emerald" className="border-y border-white/5">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="What I deliver"
          title="Enterprise software, AI systems, and modern applications."
          description="The product types I have designed, built, and shipped for clients and teams."
          className="mb-0 md:mb-0"
          tone="cool"
        />
        <Reveal>
          <p className="max-w-sm text-sm leading-relaxed text-muted lg:text-right">
            Useful context for roles in product engineering, platform teams, and
            technical founding work.
          </p>
        </Reveal>
      </div>

      <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {whatIBuild.map((group, index) => (
          <StaggerItem key={group.title}>
            <motion.article
              whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.4 : -0.4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`relative h-full overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-md ${ACCENTS[index % ACCENTS.length]}`}
            >
              <motion.div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
                animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.1, 1] }}
                transition={{ duration: 4 + index * 0.3, repeat: Infinity }}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-300">
                    <span
                      className={`mt-2 h-1.5 w-1.5 rounded-full ${DOTS[index % DOTS.length]}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionFrame>
  );
}
