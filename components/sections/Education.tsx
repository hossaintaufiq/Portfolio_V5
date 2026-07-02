"use client";

import { Reveal } from "@/components/ui/Reveal";
import { certifications, education, languages } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="relative flex min-h-[100dvh] scroll-mt-20 items-center overflow-hidden border-t border-white/5 py-10 pt-20 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-1/4 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[12%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <div className="mb-8 text-center sm:mb-10">
          <Reveal>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent sm:text-sm">
              Education
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-[family-name:var(--font-brand)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Academic profile and{" "}
              <span className="bg-gradient-to-r from-foreground via-amber-300 to-cyan-300 bg-clip-text text-transparent">
                scholarly track
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Formal education, certifications, and language proficiency in one academic ledger.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {education.map((item, idx) => (
              <Reveal key={item.degree} delay={idx * 0.08}>
                <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1117]/90 p-5 backdrop-blur-xl sm:p-6">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between border-b border-dashed border-white/15 pb-3">
                      <div>
                        <h3 className="text-base font-semibold text-foreground sm:text-lg">
                          {item.degree}
                        </h3>
                        <p className="mt-1 text-sm text-accent">{item.institution}</p>
                      </div>
                      <time className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-muted sm:text-xs">
                        {item.period}
                      </time>
                    </div>
                    <ul className="space-y-2.5">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="space-y-5">
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-white/10 bg-[#0f1117]/90 p-5 backdrop-blur-xl sm:p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
                  Certifications
                </p>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-white/10 bg-[#0f1117]/90 p-5 backdrop-blur-xl sm:p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
                  Languages
                </p>
                <ul className="space-y-3">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="rounded-full border border-white/15 bg-white/[0.04] px-2 py-0.5 text-xs text-muted">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
