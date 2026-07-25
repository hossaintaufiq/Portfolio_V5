"use client";

import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArchitectureDiagram,
  CodeWindow,
  DashboardMock,
} from "@/components/ui/Visuals";
import { profile } from "@/data/profile";
import { siteConfig, socialLinks } from "@/data/site";
import { motion, useReducedMotion } from "framer-motion";

const TRUST = [
  "Enterprise Systems",
  "AI Engineering",
  "Backend Architecture",
  "Technical Founder",
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const github = socialLinks.find((s) => s.label === "GitHub")?.href;
  const linkedIn = socialLinks.find((s) => s.label === "LinkedIn")?.href;

  return (
    <section className="ambient-hero relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-20 lg:min-h-[100dvh] lg:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade opacity-30 sm:opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 hidden h-72 w-72 rounded-full bg-sky-500/10 blur-3xl sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 hidden h-80 w-80 rounded-full bg-violet-500/10 blur-3xl sm:block"
      />

      <div className="section-shell relative grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="min-w-0">
          <Reveal>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span className="leading-snug">
                Available for software engineering roles and technical partnerships
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-sky-300/85 sm:mt-6 sm:text-xs sm:tracking-[0.24em]">
              {profile.name} · Software Engineer · Technical Founder
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-3 max-w-2xl text-[1.85rem] font-semibold leading-tight tracking-tight sm:mt-4 sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">
              <span className="text-gradient">{profile.headline}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-lg">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-2 text-sm text-slate-400 sm:mt-3 sm:text-base">
              {profile.supporting}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {TRUST.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-slate-950/40 px-2.5 py-1 text-[11px] text-slate-300 sm:px-3 sm:py-1.5 sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
              <Magnetic>
                <a
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-sky-300 via-white to-amber-200 px-5 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_-18px_rgba(56,189,248,0.75)] sm:h-12 sm:px-7"
                >
                  View projects
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={profile.resumeUrl}
                  download="Resume.pdf"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-white/[0.03] px-5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-border-strong hover:bg-white/[0.06] sm:h-12 sm:px-6"
                >
                  Download resume
                </a>
              </Magnetic>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full px-3 text-sm font-medium text-muted transition-colors hover:text-foreground sm:h-12 sm:px-4"
              >
                Contact
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted sm:mt-8">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-200">
                  GitHub
                </a>
              )}
              {linkedIn && (
                <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-sky-200">
                  LinkedIn
                </a>
              )}
              <a href={`mailto:${siteConfig.email}`} className="hover:text-sky-200">
                Email
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative min-w-0">
          <motion.div
            className="absolute -inset-3 hidden rounded-[2rem] bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10 blur-2xl sm:block sm:-inset-4"
            animate={reduce ? undefined : { opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          <div className="relative grid gap-3 sm:gap-4">
            <Reveal delay={0.1}>
              <DashboardMock />
            </Reveal>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
              <Reveal delay={0.16} y={28}>
                <CodeWindow className="h-full min-w-0" />
              </Reveal>
              <Reveal delay={0.2} y={28}>
                <ArchitectureDiagram className="h-full min-w-0" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
