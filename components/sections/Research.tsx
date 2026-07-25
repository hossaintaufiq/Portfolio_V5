"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { research, type ResearchItem } from "@/data/research";
import { motion } from "framer-motion";

const TONES = [
  {
    accent: "#38bdf8",
    soft: "rgba(56,189,248,0.14)",
    edge: "rgba(56,189,248,0.35)",
    wash: "from-sky-400/15 via-cyan-300/5 to-transparent",
  },
  {
    accent: "#a78bfa",
    soft: "rgba(167,139,250,0.14)",
    edge: "rgba(167,139,250,0.35)",
    wash: "from-violet-400/15 via-fuchsia-300/5 to-transparent",
  },
  {
    accent: "#d4a574",
    soft: "rgba(212,165,116,0.14)",
    edge: "rgba(212,165,116,0.35)",
    wash: "from-amber-300/15 via-orange-300/5 to-transparent",
  },
  {
    accent: "#34d399",
    soft: "rgba(52,211,153,0.14)",
    edge: "rgba(52,211,153,0.35)",
    wash: "from-emerald-400/15 via-teal-300/5 to-transparent",
  },
] as const;

function MethodPipeline({
  steps,
  accent,
}: {
  steps: string[];
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#05080f]/80 p-3.5 sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
          Method pipeline
        </p>
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
        />
      </div>

      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2.5">
            <div className="flex w-6 shrink-0 flex-col items-center">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-md border font-mono text-[10px] text-slate-100"
                style={{
                  borderColor: `${accent}66`,
                  background: `${accent}22`,
                }}
              >
                {i + 1}
              </span>
              {i < steps.length - 1 ? (
                <span
                  className="mt-1 h-3 w-px"
                  style={{ background: `${accent}44` }}
                />
              ) : null}
            </div>
            <div
              className="min-w-0 flex-1 rounded-lg border px-3 py-2 text-xs font-medium text-slate-100"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background:
                  i === steps.length - 1
                    ? `linear-gradient(120deg, ${accent}28, rgba(255,255,255,0.03))`
                    : "rgba(255,255,255,0.03)",
              }}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResearchCard({
  item,
  index,
}: {
  item: ResearchItem;
  index: number;
}) {
  const tone = TONES[index % TONES.length];

  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080d18]/90"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.wash} opacity-90`}
      />
      <div
        className="pointer-events-none absolute -right-10 top-0 h-36 w-36 rounded-full blur-3xl"
        style={{ background: tone.soft }}
      />

      <div className="relative border-b border-white/10 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.14em]"
            style={{
              borderColor: tone.edge,
              background: tone.soft,
              color: tone.accent,
            }}
          >
            {item.status}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300">
            {item.domain}
          </span>
          <time className="ml-auto font-mono text-[11px] text-muted">
            {item.period}
          </time>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-[1.35rem] sm:leading-snug">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-sky-100/80">{item.institution}</p>
        {item.supervisor ? (
          <p className="mt-1 text-xs text-muted">
            Supervisor · {item.supervisor}
          </p>
        ) : null}
      </div>

      <div className="relative grid flex-1 gap-5 p-5 sm:grid-cols-[1.15fr_0.85fr] sm:p-6">
        <div className="flex min-w-0 flex-col">
          <p className="text-sm leading-relaxed text-muted">{item.description}</p>

          <div className="mt-4">
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
              Techniques
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {item.methods.map((method) => (
                <span
                  key={method}
                  className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] text-slate-200"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        <MethodPipeline steps={item.pipeline} accent={tone.accent} />
      </div>

      {item.repoUrl ? (
        <div className="relative mt-auto border-t border-white/10 px-5 py-4 sm:px-6">
          <a
            href={item.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-sky-200 transition-colors hover:text-sky-100"
          >
            View repository
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      ) : null}
    </motion.article>
  );
}

export function Research() {
  return (
    <SectionFrame id="research" tone="gold">
      <SectionHeading
        eyebrow="Research"
        title="Applied research with publication and submission tracks."
        description="Deep learning, multimodal RAG, materials ML, and forecasting — method pipelines and techniques from active and completed work."
        tone="gold"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {research.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05} className="h-full">
            <ResearchCard item={item} index={index} />
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
