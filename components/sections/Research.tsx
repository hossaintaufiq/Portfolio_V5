"use client";

import { Reveal } from "@/components/ui/Reveal";
import { research } from "@/data/research";
import { motion } from "framer-motion";

export function Research() {
  return (
    <section
      id="research"
      className="relative flex min-h-[100dvh] scroll-mt-20 items-center overflow-hidden border-t border-white/5 py-10 pt-20 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <div className="mb-8 text-center sm:mb-10">
          <Reveal>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent sm:text-sm">
              Research
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Neural network of{" "}
              <span className="bg-gradient-to-r from-foreground via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                research threads
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Active research at North South University across deep learning, multimodal RAG, and applied ML systems.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 1200 820"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M120 150 C 310 220, 460 120, 620 250 C 760 360, 900 320, 1080 430"
              stroke="url(#researchLine)"
              strokeWidth="2"
              strokeDasharray="8 10"
              opacity="0.35"
            />
            <path
              d="M100 580 C 290 500, 460 610, 620 520 C 820 410, 930 520, 1100 460"
              stroke="url(#researchLine)"
              strokeWidth="2"
              strokeDasharray="8 10"
              opacity="0.28"
            />
            <defs>
              <linearGradient id="researchLine" x1="100" y1="0" x2="1100" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#22d3ee" />
                <stop offset="0.5" stopColor="#c4b5fd" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {research.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f18]/90 backdrop-blur-xl transition-all hover:border-accent/40 hover:shadow-[0_18px_70px_-35px_rgba(34,211,238,0.45)]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.09),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3 sm:px-5">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/85" />
                    <span className="h-2.5 w-2.5 rounded-full bg-violet-400/85" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/85" />
                    <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-widest text-muted sm:text-xs">
                      research_node_{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-accent sm:text-base">{item.institution}</p>
                        {item.supervisor && (
                          <p className="mt-1 text-xs text-muted sm:text-sm">
                            Supervisor: {item.supervisor}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0">
                        <time className="block text-xs text-muted sm:text-sm">{item.period}</time>
                        <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-accent sm:text-xs">
                          {item.status}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted sm:text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(34,211,238,0.45)]" />
                        Connected Thread
                      </div>

                      {item.repoUrl && (
                        <a
                          href={item.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-accent transition-opacity hover:opacity-80 sm:text-sm"
                        >
                          View repository →
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
