"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { philosophy } from "@/data/content";
import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="ambient-violet relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Engineering philosophy"
          title="Principles that keep systems durable."
          description="Architecture choices that prioritize longevity, clarity, and operability."
          tone="cool"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {philosophy.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <motion.article
                whileHover={{ scale: 1.01 }}
                className="panel flex gap-4 p-5 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-400/10 font-mono text-sm text-violet-200">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
