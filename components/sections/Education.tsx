"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, education, languages } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="ambient-slate relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation for systems work."
          description="Computer Science & Engineering with depth across algorithms, systems, and machine learning."
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 0.06}>
                <article className="panel overflow-hidden">
                  <div className="border-b border-border bg-gradient-to-r from-sky-400/5 via-transparent to-violet-400/5 px-5 py-4 sm:px-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                          {item.degree}
                        </h3>
                        <p className="mt-1 text-sm text-sky-100/80">
                          {item.institution}
                        </p>
                      </div>
                      <time className="font-mono text-xs text-muted">
                        {item.period}
                      </time>
                    </div>
                  </div>
                  <ul className="space-y-2.5 p-5 sm:p-6">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-300" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="space-y-4">
            <Reveal delay={0.08}>
              <div className="panel p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent-gold">
                  Certifications
                </p>
                <ul className="mt-4 space-y-2.5">
                  {certifications.map((cert) => (
                    <li key={cert} className="text-sm text-muted">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="panel p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
                  Languages
                </p>
                <ul className="mt-4 space-y-3">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-center justify-between gap-3 text-sm"
                    >
                      <span className="text-foreground">{lang.name}</span>
                      <span className="text-muted">{lang.level}</span>
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
