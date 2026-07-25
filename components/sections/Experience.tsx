"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="ambient-gold relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Experience"
              title="Ownership across founding, SaaS, and enterprise delivery."
              description="A timeline of production responsibility — architecture, product engineering, and shipped systems."
              tone="gold"
              className="mb-6 md:mb-8"
            />
            <div className="panel hidden p-5 lg:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
                Focus
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Technical strategy, scalable systems, client discovery, and
                production-ready delivery across ERP, CRM, AI, and modern web
                platforms.
              </p>
            </div>
          </div>

          <div ref={ref} className="relative">
            <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-border md:block" />
            <motion.div
              className="absolute left-[15px] top-0 hidden w-px origin-top bg-gradient-to-b from-accent-gold via-sky-400 to-violet-400 md:block"
              style={{ height }}
            />

            <div className="space-y-5">
              {experience.map((job, index) => (
                <Reveal key={`${job.company}-${job.period}`} delay={index * 0.05}>
                  <div className="relative md:pl-12">
                    <span className="absolute left-[10px] top-8 hidden h-3 w-3 rounded-full border border-accent-gold/50 bg-[#0c1420] shadow-[0_0_16px_rgba(212,165,116,0.45)] md:block" />
                    <motion.article
                      whileHover={{ y: -3 }}
                      className="panel panel-gold p-5 sm:p-7"
                    >
                      <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-accent-gold">
                            Milestone {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                            {job.role}
                          </h3>
                          <p className="mt-1 text-sm text-sky-100/85">
                            {job.company}
                          </p>
                          {job.location && (
                            <p className="mt-1 text-sm text-muted">{job.location}</p>
                          )}
                        </div>
                        <time className="font-mono text-xs text-muted sm:text-sm">
                          {job.period}
                        </time>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                        {job.description}
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {job.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-relaxed text-slate-300"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
