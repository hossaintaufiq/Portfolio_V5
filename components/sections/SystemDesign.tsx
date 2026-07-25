"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { systemDesignSteps } from "@/data/content";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function SystemDesign() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 40%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="system-design"
      className="ambient-navy relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="System design"
          title="A delivery path from discovery to maintenance."
          description="Horizontal process storytelling — how I take systems from intent to production ownership."
          tone="default"
        />

        <div ref={ref} className="relative">
          <div className="mb-8 hidden h-1 overflow-hidden rounded-full bg-border md:block">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-accent-gold"
              style={{ width }}
            />
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-3">
            {systemDesignSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.03} className="min-w-[240px] md:min-w-0">
                <motion.article
                  whileHover={{ y: -4 }}
                  className="panel h-full p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-300/80">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-sky-400/80" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
