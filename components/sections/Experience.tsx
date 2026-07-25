"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { experience, experienceFocus } from "@/data/experience";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const ACCENTS = [
  {
    color: "#d4a574",
    soft: "rgba(212,165,116,0.14)",
    border: "rgba(212,165,116,0.28)",
    bar: "from-amber-300 via-orange-300 to-amber-200",
  },
  {
    color: "#38bdf8",
    soft: "rgba(56,189,248,0.14)",
    border: "rgba(56,189,248,0.28)",
    bar: "from-sky-400 via-cyan-300 to-sky-200",
  },
  {
    color: "#a78bfa",
    soft: "rgba(167,139,250,0.14)",
    border: "rgba(167,139,250,0.28)",
    bar: "from-violet-400 via-fuchsia-300 to-violet-200",
  },
  {
    color: "#34d399",
    soft: "rgba(52,211,153,0.14)",
    border: "rgba(52,211,153,0.28)",
    bar: "from-emerald-400 via-teal-300 to-emerald-200",
  },
] as const;

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 35%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  const totalHighlights = experience.reduce(
    (sum, job) => sum + job.highlights.length,
    0,
  );

  return (
    <SectionFrame id="experience" tone="gold">
      <div className="mb-10 max-w-3xl lg:mb-14">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent-gold">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            <span className="text-gradient">
              Production roles with ownership, delivery, and technical leadership.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Founding engineering, SaaS platforms, and enterprise product work —
            balanced across architecture, implementation, and client outcomes.
          </p>
        </Reveal>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left column — career profile + first half of timeline weight via summary */}
        <div className="flex flex-col gap-5 lg:sticky lg:top-28">
          <Reveal>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080d18]/90">
              <div className="border-b border-white/10 bg-gradient-to-br from-amber-300/10 via-sky-400/5 to-transparent px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/85">
                  Career profile
                </p>
                <p className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  Full-stack engineer spanning founding work, SaaS delivery, and
                  enterprise consultancy.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Strongest signals for hiring teams: architecture decisions,
                  shipping under constraints, client communication, and systems
                  that stay maintainable after launch.
                </p>
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
                {[
                  { label: "Roles", value: String(experience.length).padStart(2, "0") },
                  { label: "Impact points", value: String(totalHighlights) },
                  { label: "Scope", value: "Global" },
                ].map((stat) => (
                  <div key={stat.label} className="px-3 py-4 text-center sm:px-4">
                    <p className="font-mono text-lg text-foreground sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="px-5 py-5 sm:px-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                  Focus areas
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experienceFocus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080d18]/90 p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                Role timeline
              </p>
              <div className="mt-4 space-y-3">
                {experience.map((job, index) => {
                  const tone = ACCENTS[index % ACCENTS.length];
                  return (
                    <a
                      key={`${job.company}-nav`}
                      href={`#exp-${index}`}
                      className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
                    >
                      <span
                        className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{
                          background: tone.color,
                          boxShadow: `0 0 12px ${tone.color}`,
                        }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <p className="truncate text-sm font-medium text-foreground">
                            {job.company}
                          </p>
                          <p className="font-mono text-[10px] text-muted">
                            {job.period}
                          </p>
                        </div>
                        <p className="mt-0.5 truncate text-xs text-slate-400">
                          {job.role}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-amber-300/10 via-transparent to-sky-400/10 p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-accent-gold">
                Engagement types
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {[
                  "Founding & technical leadership",
                  "Enterprise SaaS product delivery",
                  "Remote consultancy for US / global orgs",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-amber-300 to-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Right column — detailed roles */}
        <div ref={ref} className="relative min-w-0">
          <div className="absolute bottom-3 left-[15px] top-3 hidden w-px bg-white/10 md:block" />
          <motion.div
            className="absolute left-[15px] top-3 hidden w-px origin-top bg-gradient-to-b from-amber-300 via-sky-400 to-violet-400 md:block"
            style={{ height }}
          />

          <div className="space-y-5">
            {experience.map((job, index) => {
              const tone = ACCENTS[index % ACCENTS.length];
              return (
                <Reveal key={`${job.company}-${job.period}`} delay={index * 0.04}>
                  <div id={`exp-${index}`} className="relative scroll-mt-28 md:pl-12">
                    <span
                      className="absolute left-[9px] top-8 hidden h-3.5 w-3.5 rounded-full border-2 bg-[#0c1420] md:block"
                      style={{
                        borderColor: tone.color,
                        boxShadow: reduce
                          ? undefined
                          : `0 0 16px ${tone.color}`,
                      }}
                    />

                    <motion.article
                      whileHover={reduce ? undefined : { y: -3 }}
                      className="overflow-hidden rounded-[1.35rem] border bg-[#080d18]/95"
                      style={{ borderColor: tone.border }}
                    >
                      <div
                        className={`h-1 bg-gradient-to-r ${tone.bar}`}
                        aria-hidden
                      />

                      <div className="p-5 sm:p-6">
                        <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className="rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.14em]"
                                style={{
                                  borderColor: tone.border,
                                  background: tone.soft,
                                  color: tone.color,
                                }}
                              >
                                Role {String(index + 1).padStart(2, "0")}
                              </span>
                              {job.location ? (
                                <span className="text-[11px] text-muted">
                                  {job.location}
                                </span>
                              ) : null}
                            </div>
                            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                              {job.role}
                            </h3>
                            <p className="mt-1 text-sm text-sky-100/85">
                              {job.company}
                            </p>
                          </div>
                          <time className="shrink-0 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-slate-300">
                            {job.period}
                          </time>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-muted">
                          {job.description}
                        </p>

                        {job.stack?.length ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {job.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md border border-white/10 bg-black/25 px-2.5 py-1 text-[11px] text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        ) : null}

                        <ul className="mt-5 space-y-2.5">
                          {job.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 text-sm leading-relaxed text-slate-300"
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: tone.color }}
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
