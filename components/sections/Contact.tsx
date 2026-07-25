"use client";

import { Reveal } from "@/components/ui/Reveal";
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
    <section
      id="contact"
      className="ambient-finale relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade opacity-30" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell relative">
        <Reveal>
          <div className="panel relative overflow-hidden px-6 py-10 text-center sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_50%),radial-gradient(circle_at_80%_100%,rgba(212,165,116,0.1),transparent_40%)]" />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-sky-300/85">
                Contact
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]">
                <span className="text-gradient">
                  Let&apos;s build software that scales.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Available for focused engineering partnerships across product,
                backend, and AI systems.
              </p>

              <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
                {availability.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-2xl border border-border bg-black/25 p-4 text-left transition-colors hover:border-sky-400/35"
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
                  className="rounded-2xl border border-border bg-black/25 p-4 text-left transition-colors hover:border-sky-400/35"
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    Phone
                  </p>
                  <p className="mt-2 text-sm text-foreground">{siteConfig.phone}</p>
                </a>
                <div className="rounded-2xl border border-border bg-black/25 p-4 text-left">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-sky-400/20 bg-sky-400/10 px-4 py-3 text-sm font-medium text-sky-100 transition-colors hover:border-sky-300/40 hover:bg-sky-400/15"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
