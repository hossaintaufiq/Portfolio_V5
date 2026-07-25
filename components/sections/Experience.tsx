"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
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
    <SectionFrame id="experience" tone="gold">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Experience"
            title="Roles with production ownership and technical leadership."
            description="Founding engineering, SaaS delivery, and enterprise product work across distributed teams."
            tone="gold"
            className="mb-6 md:mb-8"
          />
          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md lg:block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
              Strengths recruiters care about
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Architecture decisions, client communication, shipping under
              constraints, and building systems that stay maintainable after launch.
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
            {experience.map((job, index) => {
              const accents = [
                "from-amber-400/15 border-amber-400/25",
                "from-sky-400/15 border-sky-400/25",
                "from-violet-400/15 border-violet-400/25",
                "from-emerald-400/15 border-emerald-400/25",
              ];
              return (
                <Reveal key={`${job.company}-${job.period}`} delay={index * 0.05}>
                  <div className="relative md:pl-12">
                    <motion.span
                      className="absolute left-[9px] top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-amber-300/70 bg-[#0c1420] shadow-[0_0_18px_rgba(251,191,36,0.55)] md:block"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <motion.article
                      whileHover={{ y: -6, x: 4 }}
                      className={`overflow-hidden rounded-2xl border bg-gradient-to-br to-transparent p-5 backdrop-blur-md sm:p-7 ${accents[index % accents.length]}`}
                    >
                      <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-accent-gold">
                            Role {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                            {job.role}
                          </h3>
                          <p className="mt-1 text-sm text-sky-100/85">{job.company}</p>
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
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-amber-300 to-sky-300" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
