"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/content";
import { motion } from "framer-motion";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="ambient-violet relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Achievements"
          title="Signals across engineering, leadership, research, and academics."
          description="Real milestones only — presented as a visual scoreboard, not empty claims."
          tone="cool"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                className="panel relative overflow-hidden p-6"
              >
                <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {group.category}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {String(group.items.length).padStart(2, "0")} marks
                    </span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 border-l border-sky-400/30 pl-3 text-sm leading-relaxed text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
