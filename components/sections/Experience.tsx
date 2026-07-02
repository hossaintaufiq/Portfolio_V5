"use client";

import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-[100dvh] scroll-mt-20 items-center overflow-hidden border-t border-white/5 py-10 pt-20 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <div className="mb-8 text-center sm:mb-10">
          <Reveal>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent sm:text-sm">
              Experience
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-[family-name:var(--font-brand)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              A road built through{" "}
              <span className="bg-gradient-to-r from-foreground via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                product execution
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Roles and impact across teams, products, and engineering ownership.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[6px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400/40 via-white/10 to-violet-400/40 md:block" />
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[48px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] md:block" />

          <div className="space-y-6 sm:space-y-8">
            {experience.map((job, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Reveal key={`${job.company}-${job.period}`} delay={index * 0.08}>
                  <div className="relative md:grid md:grid-cols-[1fr_72px_1fr] md:items-center">
                    <div
                      className={cn(
                        "md:col-span-1",
                        isLeft ? "md:pr-6 lg:pr-10" : "md:col-start-3 md:pl-6 lg:pl-10",
                      )}
                    >
                      <motion.article
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 280, damping: 22 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(34,211,238,0.35)] sm:p-6"
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                              {job.role}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-accent sm:text-base">
                              {job.company}
                            </p>
                            {job.location && (
                              <p className="mt-1 text-xs text-muted sm:text-sm">
                                {job.location}
                              </p>
                            )}
                          </div>
                          <time className="shrink-0 text-xs text-muted sm:text-sm">
                            {job.period}
                          </time>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                          {job.description}
                        </p>

                        <ul className="mt-4 space-y-2.5">
                          {job.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 text-xs leading-relaxed text-muted sm:text-sm"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(34,211,238,0.35)]" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.article>
                    </div>

                    <div className="relative hidden h-full items-center justify-center md:flex">
                      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-2xl" />
                      <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/40 bg-[#0b0f18] shadow-[0_0_18px_4px_rgba(34,211,238,0.25)]">
                        <div className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
