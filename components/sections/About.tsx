"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineMock } from "@/components/ui/Visuals";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="ambient-navy relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="section-shell relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Engineering with product judgment and systems depth."
              description="I design and ship platforms organizations can operate — not demos that collapse under real usage."
              tone="cool"
            />

            <div className="space-y-5">
              {profile.bio.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 0.06}>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.14}>
              <div className="mt-7 flex flex-wrap gap-2">
                {profile.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1.5 text-xs text-sky-100/90"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal>
              <PipelineMock />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Role", value: profile.role },
                {
                  label: "Education",
                  value: `${profile.education}\n${profile.university}\nCGPA ${profile.cgpa}`,
                },
                { label: "Availability", value: profile.availability },
                {
                  label: "Contact",
                  value: `${siteConfig.email}\n${siteConfig.phone}`,
                },
              ].map((card, i) => (
                <Reveal key={card.label} delay={0.08 + i * 0.05}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="panel h-full p-5 transition-colors hover:border-sky-400/25"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/75">
                      {card.label}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground/90">
                      {card.value}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <a
                href={profile.resumeUrl}
                download="Resume.pdf"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-white/[0.03] text-sm font-medium text-foreground transition-colors hover:border-accent-gold/40 hover:bg-accent-gold/5"
              >
                Download resume
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
