"use client";

import dynamic from "next/dynamic";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";

const SkillsGlobe = dynamic(
  () => import("@/components/three/SkillsGlobe").then((m) => m.SkillsGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(58vh,520px)] min-h-[320px] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
      </div>
    ),
  },
);

const legendColors: Record<string, string> = {
  Backend: "#22d3ee",
  "AI / ML": "#a78bfa",
  Languages: "#34d399",
  Frontend: "#60a5fa",
  Databases: "#fbbf24",
  "Mobile & Tools": "#f472b6",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-[100dvh] scroll-mt-20 items-center overflow-hidden border-y border-white/5 py-6 pt-20 sm:py-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <div className="mb-6 text-center sm:mb-8">
          <Reveal>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent sm:text-sm">
              Skills
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Technologies orbiting my{" "}
              <span className="bg-gradient-to-r from-foreground via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                stack
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted sm:text-base">
              Hover nodes to explore — drag to rotate the globe.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <SkillsGlobe />
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3">
            {skillCategories.map((category) => (
              <span
                key={category.title}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-muted sm:px-3 sm:py-1.5 sm:text-xs"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: legendColors[category.title] }}
                />
                {category.title}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
