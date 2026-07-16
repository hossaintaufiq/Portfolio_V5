"use client";

import { HeroTechVisual } from "@/components/hero/HeroTechVisual";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { siteConfig, socialLinks } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROTATING_TAGLINES = [
  "Building production software.",
  "Designing scalable backends.",
  "Creating AI-powered products.",
  "Machine learning engineer.",
  "LLM & RAG developer.",
  "Backend systems engineer.",
] as const;

const TRUST_METRICS = [
  "AI & ML Research",
  "Full-Stack & Backend",
  "Machine Learning",
  "Open Source Contributions",
] as const;

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % ROTATING_TAGLINES.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const currentTagline = ROTATING_TAGLINES[taglineIndex];
  const github = socialLinks.find((s) => s.label.toLowerCase().includes("github"))?.href;
  const linkedIn = socialLinks.find((s) => s.label.toLowerCase().includes("linkedin"))?.href;

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-accent/5 blur-3xl sm:h-64 sm:w-64" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-6 sm:gap-10 sm:px-6 sm:py-8 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-10 xl:max-w-7xl">
        <div className="order-1 space-y-6 lg:order-1">
          <Reveal>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent sm:mb-3 sm:text-sm">
              <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                {profile.name}
              </span>{" "}
              · Full-Stack Engineer · AI/ML Systems
            </p>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="max-w-3xl font-[family-name:var(--font-brand)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.4rem]">
              <span className="block bg-gradient-to-r from-foreground via-cyan-200 to-foreground bg-clip-text text-transparent">
                Building AI-powered products
              </span>
              <span className="block bg-gradient-to-r from-cyan-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                that scale safely to production.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-3 min-h-[1.5rem] text-sm text-muted sm:text-base">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTagline}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="inline-block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent"
                >
                  {currentTagline}
                </motion.span>
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-[1.02rem]">
              I build scalable backend systems, AI-powered applications, and production-ready software
              using modern technologies. Focused on clean architecture, reliability, and intelligent systems
              that solve complex engineering problems end‑to‑end.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
              {TRUST_METRICS.map((metric) => (
                <motion.span
                  key={metric}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[10px] font-medium text-muted backdrop-blur-md sm:text-[11px]"
                >
                  {metric}
                </motion.span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <Magnetic>
                <a
                  href="#projects"
                  className="relative inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-[0_8px_30px_rgba(34,211,238,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(34,211,238,0.40)] sm:h-12 sm:px-7"
                >
                  View Projects
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={profile.resumeUrl}
                  download="Resume.pdf"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-6 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-accent/40 hover:bg-white/10 sm:h-12 sm:px-7"
                >
                  Download Resume
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-transparent bg-transparent px-4 text-sm font-semibold text-muted transition-all hover:border-accent/40 hover:bg-white/[0.04] hover:text-foreground sm:h-12 sm:px-5"
                >
                  Contact Me
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-100 sm:text-sm"
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.03, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_3px_rgba(16,185,129,0.7)]" />
                Available for full‑time software engineering roles
              </motion.span>

              <div className="flex gap-2 sm:gap-3">
                {github && (
                  <Magnetic>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-muted shadow-[0_0_0_1px_rgba(148,163,184,0.25)] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-transform group-hover:scale-110"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-11C23.5 5.65 18.35.5 12 .5Z" />
                      </svg>
                    </a>
                  </Magnetic>
                )}
                {linkedIn && (
                  <Magnetic>
                    <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-muted shadow-[0_0_0_1px_rgba(148,163,184,0.25)] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-transform group-hover:scale-110"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.32 8.09h4.36V24H.32zM8.34 8.09h4.18v2.17h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.22 2.9 5.22 6.68V24h-4.36v-8.1c0-1.93-.04-4.41-2.69-4.41-2.7 0-3.11 2.11-3.11 4.29V24H8.34z" />
                      </svg>
                    </a>
                  </Magnetic>
                )}
                <Magnetic>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-muted shadow-[0_0_0_1px_rgba(148,163,184,0.25)] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                    aria-label="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:scale-110"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href={profile.resumeUrl}
                    download="Resume.pdf"
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-muted shadow-[0_0_0_1px_rgba(148,163,184,0.25)] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                    aria-label="Resume"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:scale-110"
                    >
                      <path d="M12 3v14" />
                      <path d="m6 11 6 6 6-6" />
                      <path d="M5 21h14" />
                    </svg>
                  </a>
                </Magnetic>
              </div>
            </div>
          </Reveal>

          {/* Education card intentionally removed to keep the hero recruiter-focused */}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 w-full max-w-md justify-self-center sm:max-w-lg lg:order-2 lg:max-w-none lg:justify-self-end"
        >
          <HeroTechVisual />
        </motion.div>
      </div>
    </section>
  );
}
