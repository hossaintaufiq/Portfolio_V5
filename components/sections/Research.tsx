"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { research } from "@/data/research";
import { motion } from "framer-motion";

export function Research() {
  return (
    <section
      id="research"
      className="ambient-gold relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Research"
          title="Published and active research threads."
          description="Academic rigor presented with product-grade clarity — every existing research item retained."
          tone="gold"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {research.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                className="panel relative overflow-hidden p-0"
              >
                <div className="border-b border-border bg-[linear-gradient(120deg,rgba(212,165,116,0.08),rgba(56,189,248,0.05),transparent)] px-5 py-4 sm:px-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-accent-gold/30 bg-accent-gold/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-accent-gold">
                      {item.status}
                    </span>
                    <time className="font-mono text-[11px] text-muted">
                      {item.period}
                    </time>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-sky-100/80">{item.institution}</p>
                  {item.supervisor && (
                    <p className="mt-1 text-xs text-muted">
                      Supervisor: {item.supervisor}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-[1.2fr_0.8fr] sm:p-6">
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <div className="rounded-xl border border-border bg-black/25 p-3">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                      Research map
                    </p>
                    <svg viewBox="0 0 180 90" className="mt-3 h-auto w-full" aria-hidden>
                      <circle cx="30" cy="45" r="8" fill="#38bdf8" fillOpacity="0.7" />
                      <circle cx="90" cy="25" r="7" fill="#8b7cf6" fillOpacity="0.7" />
                      <circle cx="90" cy="65" r="7" fill="#d4a574" fillOpacity="0.7" />
                      <circle cx="150" cy="45" r="8" fill="#34d399" fillOpacity="0.7" />
                      <path
                        d="M38 45 H82 M98 28 L142 42 M98 62 L142 48"
                        stroke="rgba(148,163,184,0.45)"
                        strokeWidth="1.2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>

                {item.repoUrl ? (
                  <div className="border-t border-border px-5 py-4 sm:px-6">
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-sky-200 transition-colors hover:text-sky-100"
                    >
                      View repository →
                    </a>
                  </div>
                ) : null}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
