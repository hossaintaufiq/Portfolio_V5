"use client";

import { HeroTechVisual } from "@/components/hero/HeroTechVisual";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-accent/5 blur-3xl sm:h-64 sm:w-64" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-6 sm:gap-10 sm:px-6 sm:py-8 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-10 xl:max-w-7xl">
        <div className="order-1 lg:order-1">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent sm:mb-4 sm:text-sm">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-foreground via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg md:text-xl">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <Magnetic>
                <a
                  href="#projects"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-[0_8px_30px_rgba(34,211,238,0.28)] transition-all hover:-translate-y-0.5 hover:opacity-95 sm:h-12 sm:w-auto sm:px-6"
                >
                  View my work
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-border/70 bg-white/5 px-5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-surface sm:h-12 sm:w-auto sm:px-6"
                >
                  Get in touch
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-6 md:mt-10 md:gap-8">
              <span className="inline-flex items-center gap-2 text-xs text-muted sm:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                {profile.availability}
              </span>
              <SocialLinks />
            </div>
          </Reveal>
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
