"use client";

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
    <section className="ambient-hero relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:min-h-[100dvh] lg:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              Available for production engineering partnerships
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-sky-300/85">
              {profile.name} · Software Engineer · Technical Founder
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">
              <span className="text-gradient">{profile.headline}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              {profile.supporting}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-2">
              {TRUST.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-slate-950/40 px-3 py-1.5 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-300 via-white to-amber-200 px-7 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_-18px_rgba(56,189,248,0.75)] transition-transform hover:-translate-y-0.5"
              >
                Explore systems
              </a>
              <a
                href={profile.resumeUrl}
                download="Resume.pdf"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white/[0.03] px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-border-strong hover:bg-white/[0.06]"
              >
                Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full px-4 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
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

        <div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10 blur-2xl"
            animate={reduce ? undefined : { opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          <div className="relative grid gap-4">
            <Reveal delay={0.1}>
              <DashboardMock />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.16} y={36}>
                <CodeWindow className="h-full" />
              </Reveal>
              <Reveal delay={0.2} y={36}>
                <ArchitectureDiagram className="h-full" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
