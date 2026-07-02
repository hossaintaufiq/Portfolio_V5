"use client";

import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, socialLinks } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[100dvh] scroll-mt-20 items-center overflow-hidden py-10 pt-20 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[12%] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f18]/90 p-6 backdrop-blur-xl sm:p-10">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
            viewBox="0 0 1200 520"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <circle cx="180" cy="120" r="6" fill="#22d3ee" />
            <circle cx="420" cy="190" r="5" fill="#c4b5fd" />
            <circle cx="700" cy="110" r="6" fill="#22d3ee" />
            <circle cx="980" cy="210" r="5" fill="#c4b5fd" />
            <circle cx="860" cy="390" r="6" fill="#22d3ee" />
            <circle cx="520" cy="360" r="5" fill="#c4b5fd" />
            <path d="M180 120 L420 190 L700 110 L980 210" stroke="url(#conn)" strokeOpacity="0.45" />
            <path d="M420 190 L520 360 L860 390 L980 210" stroke="url(#conn)" strokeOpacity="0.35" />
            <defs>
              <linearGradient id="conn" x1="140" y1="110" x2="1020" y2="410" gradientUnits="userSpaceOnUse">
                <stop stopColor="#22d3ee" />
                <stop offset="0.5" stopColor="#a78bfa" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative">
            <Reveal>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent sm:text-sm">
                Contact
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-3xl font-[family-name:var(--font-brand)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Let&apos;s build a strong{" "}
                <span className="bg-gradient-to-r from-foreground via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  connection
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                Have a project in mind or want to collaborate on backend + AI systems? Reach out through any channel below.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all hover:border-cyan-300/45"
              >
                <p className="text-[10px] uppercase tracking-widest text-accent">Email</p>
                <p className="mt-2 text-sm font-medium text-foreground sm:text-base break-all">
                  {siteConfig.email}
                </p>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-all hover:border-cyan-300/45"
              >
                <p className="text-[10px] uppercase tracking-widest text-accent">Phone</p>
                <p className="mt-2 text-sm font-medium text-foreground sm:text-base">
                  {siteConfig.phone}
                </p>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md sm:col-span-2 lg:col-span-1">
                <p className="text-[10px] uppercase tracking-widest text-accent">Location</p>
                <p className="mt-2 text-sm font-medium text-foreground sm:text-base">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/10 via-white/[0.02] to-violet-500/10 px-4 py-3 text-center text-sm font-semibold text-foreground transition-all hover:border-cyan-300/55 hover:shadow-[0_10px_35px_-18px_rgba(34,211,238,0.7)]"
                >
                  <span className="bg-gradient-to-r from-cyan-200 to-violet-200 bg-clip-text text-transparent">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
