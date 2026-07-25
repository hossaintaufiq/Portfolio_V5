"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/data/projects";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const featured = useMemo(
    () => projects.filter((project) => project.featured).slice(0, 4),
    [],
  );

  const visibleCategories = useMemo(
    () =>
      projectCategories.filter((category) =>
        projects.some((project) => project.category === category),
      ),
    [],
  );

  const rest = useMemo(() => {
    const featuredTitles = new Set(featured.map((p) => p.title));
    const pool =
      active === "All"
        ? projects.filter((p) => !featuredTitles.has(p.title))
        : projects.filter((p) => p.category === active);
    return active === "All" ? pool : projects.filter((p) => p.category === active);
  }, [active, featured]);

  return (
    <section
      id="projects"
      className="ambient-violet relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade opacity-25" />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems shipped as product experiences."
          description="Enterprise platforms, AI products, and production web systems — every project and link preserved."
          tone="cool"
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {(["All", ...visibleCategories] as const).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs transition-colors",
                  active === category
                    ? "border-sky-300/35 bg-sky-400/10 text-sky-100"
                    : "border-border text-muted hover:border-border-strong hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {active === "All" && (
          <div className="mb-12 space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-gold">
              Featured case studies
            </p>
            {featured.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <FeaturedCaseStudy project={project} reverse={index % 2 === 1} />
              </Reveal>
            ))}
          </div>
        )}

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {active === "All" ? "More systems" : active}
          </p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {(active === "All" ? rest : rest).map((project, index) => (
              <Reveal key={`${project.title}-${active}`} delay={index * 0.04}>
                <CompactProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCaseStudy({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="panel overflow-hidden"
    >
      <div
        className={cn(
          "grid lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="relative min-h-[240px] overflow-hidden border-b border-border bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(139,124,246,0.16),transparent_40%),linear-gradient(160deg,#0b1528,#0a1020)] p-6 lg:min-h-full lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 grid-fade opacity-30" />
          <div className="relative flex h-full flex-col justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
                {project.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {project.title}
              </h3>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
              <div className="mb-3 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-2/3 rounded bg-white/15" />
                <div className="h-2 w-full rounded bg-white/10" />
                <div className="h-2 w-5/6 rounded bg-white/10" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-14 rounded-lg border border-sky-400/20 bg-sky-400/10" />
                  <div className="h-14 rounded-lg border border-violet-400/20 bg-violet-400/10" />
                  <div className="h-14 rounded-lg border border-amber-300/20 bg-amber-300/10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
            {project.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Meta label="Problem" text={project.problem} />
            <Meta label="Solution" text={project.solution} />
            <Meta label="Architecture" text={project.architecture} />
            <Meta label="Outcome" text={project.outcome} />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-black/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-medium text-sky-100 hover:bg-sky-400/15"
              >
                Live
              </a>
            )}
            {project.personal_host && (
              <a
                href={project.personal_host}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-medium text-violet-100 hover:bg-violet-400/15"
              >
                Host
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted hover:text-foreground"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CompactProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="panel flex h-full flex-col p-5 transition-colors hover:border-sky-400/25"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] uppercase tracking-[0.18em] text-accent-gold">
          {project.category}
        </p>
        <div className="flex gap-2 text-[11px]">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-sky-200">
              Live
            </a>
          )}
          {project.personal_host && (
            <a href={project.personal_host} target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:text-violet-200">
              Host
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
              GitHub
            </a>
          )}
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function Meta({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-black/20 p-3.5">
      <p className="text-[10px] uppercase tracking-[0.16em] text-sky-300/75">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
    </div>
  );
}
