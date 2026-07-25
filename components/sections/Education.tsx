"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, education, languages } from "@/data/education";

export function Education() {
  return (
    <SectionFrame id="education" tone="sky">
      <SectionHeading
        eyebrow="Education"
        title="Computer Science foundation with strong academic performance."
        description="Coursework across algorithms, systems, software engineering, and machine learning."
        tone="cool"
      />

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.06}>
              <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
                <div className="border-b border-white/10 bg-gradient-to-r from-sky-400/10 via-transparent to-violet-400/10 px-5 py-4 sm:px-6">
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
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md sm:p-6">
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
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md sm:p-6">
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
    </SectionFrame>
  );
}
