"use client";

import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { siteConfig, socialLinks } from "@/data/site";
import { motion, useReducedMotion } from "framer-motion";

const availability = [
  "Senior Software Engineering",
  "Technical Consulting",
  "Enterprise Software",
  "AI Systems",
  "Startup MVPs",
  "Full Stack Development",
] as const;

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <SectionFrame id="contact" tone="mixed" className="pb-24 sm:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.75rem] p-[1px] shimmer-border">
          <div className="relative overflow-hidden rounded-[1.7rem] bg-[#070b14] px-6 py-10 text-center sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.16),transparent_50%),radial-gradient(circle_at_80%_100%,rgba(251,191,36,0.12),transparent_40%)]" />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-[18%] top-1/4 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl"
              animate={
                reduce ? undefined : { x: [0, 24, 0], opacity: [0.3, 0.55, 0.3] }
              }
              transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-sky-300">
                Contact
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]">
                <span className="text-gradient">
                  Open to roles where strong engineering ownership matters.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Available for full-stack, backend, AI, and technical consulting
                opportunities. Happy to discuss product scope, architecture, and
                delivery timelines.
              </p>

              <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
                {availability.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-2xl border border-border bg-black/30 p-4 text-left transition-colors hover:border-sky-400/50"
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    Email
                  </p>
                  <p className="mt-2 break-all text-sm text-foreground">
                    {siteConfig.email}
                  </p>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="rounded-2xl border border-border bg-black/30 p-4 text-left transition-colors hover:border-violet-400/50"
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    Phone
                  </p>
                  <p className="mt-2 text-sm text-foreground">{siteConfig.phone}</p>
                </a>
                <div className="rounded-2xl border border-border bg-black/30 p-4 text-left">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-3">
                {socialLinks.map((link, i) => (
                  <Magnetic key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block rounded-2xl px-4 py-3 text-center text-sm font-semibold text-slate-950 ${
                        i === 0
                          ? "bg-gradient-to-r from-sky-300 to-cyan-200"
                          : i === 1
                            ? "bg-gradient-to-r from-violet-300 to-fuchsia-200"
                            : "bg-gradient-to-r from-amber-300 to-orange-200"
                      }`}
                    >
                      {link.label}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionFrame>
  );
}
