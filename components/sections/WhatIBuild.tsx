"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatIBuild } from "@/data/content";
import { motion } from "framer-motion";

export function WhatIBuild() {
  return (
    <section
      id="what-i-build"
      className="ambient-navy relative scroll-mt-24 overflow-hidden border-y border-border/60 py-20 sm:py-28"
    >
      <div className="section-shell relative">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What I build"
            title="Product surfaces with enterprise weight."
            description="ERP, CRM, AI systems, internal tools, and developer platforms."
            className="mb-0 md:mb-0"
            tone="default"
          />
          <Reveal>
            <p className="max-w-sm text-sm leading-relaxed text-muted lg:text-right">
              Each category below maps to systems I design, architect, and ship
              end-to-end.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whatIBuild.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <motion.article
                whileHover={{ y: -5, rotateX: 2 }}
                style={{ transformPerspective: 900 }}
                className="panel relative h-full overflow-hidden p-6"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl" />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 rounded-full bg-sky-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
