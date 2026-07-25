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
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const PREVIEW_TONES = [
  "from-sky-500/25 via-violet-500/15 to-transparent",
  "from-violet-500/25 via-fuchsia-500/15 to-transparent",
  "from-emerald-500/25 via-cyan-500/15 to-transparent",
  "from-amber-500/25 via-orange-500/15 to-transparent",
];

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
    if (active === "All") {
      return projects.filter((p) => !featuredTitles.has(p.title));
    }
    return projects.filter((p) => p.category === active);
  }, [active, featured]);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[#060912]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_20%_0%,rgba(167,139,250,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_70%,rgba(56,189,248,0.14),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_50%_100%,rgba(244,114,182,0.1),transparent_50%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade opacity-20" />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Selected work"
          title="Production projects with measurable ownership."
          description="Enterprise platforms, AI products, and web systems — links and repositories included for review."
          tone="cool"
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {(["All", ...visibleCategories] as const).map((category) => (
              <motion.button
                key={category}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs transition-colors",
                  active === category
                    ? "border-transparent bg-gradient-to-r from-sky-400 to-violet-400 text-slate-950"
                    : "border-border text-muted hover:border-border-strong hover:text-foreground",
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {active === "All" && (
          <div className="mb-12 space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-gold">
              Featured projects
            </p>
            {featured.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <FeaturedCaseStudy
                  project={project}
                  reverse={index % 2 === 1}
                  tone={PREVIEW_TONES[index % PREVIEW_TONES.length]}
                />
              </Reveal>
            ))}
          </div>
        )}

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {active === "All" ? "Additional projects" : active}
          </p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {rest.map((project, index) => (
                <motion.div
                  key={`${project.title}-${active}`}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                >
                  <CompactProjectCard
                    project={project}
                    tone={PREVIEW_TONES[index % PREVIEW_TONES.length]}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCaseStudy({
  project,
  reverse,
  tone,
}: {
  project: Project;
  reverse?: boolean;
  tone: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="panel panel-glow overflow-hidden"
    >
      <div
        className={cn(
          "grid lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div
          className={cn(
            "relative min-h-[260px] overflow-hidden border-b border-border bg-gradient-to-br p-6 lg:min-h-full lg:border-b-0 lg:border-r",
            tone,
          )}
        >
          <div className="absolute inset-0 grid-fade opacity-30" />
          <motion.div
            className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl"
            animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative flex h-full flex-col justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-sky-100/90">
                {project.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {project.title}
              </h3>
            </div>
            <motion.div
              className="rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur-md"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-3 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-2/3 rounded bg-white/20" />
                <div className="h-2 w-full rounded bg-white/12" />
                <div className="h-2 w-5/6 rounded bg-white/12" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-14 rounded-lg border border-sky-300/30 bg-sky-400/20" />
                  <div className="h-14 rounded-lg border border-violet-300/30 bg-violet-400/20" />
                  <div className="h-14 rounded-lg border border-amber-300/30 bg-amber-300/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
            {project.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Meta label="Problem" text={project.problem} color="text-rose-300" />
            <Meta label="Solution" text={project.solution} color="text-emerald-300" />
            <Meta label="Architecture" text={project.architecture} color="text-sky-300" />
            <Meta label="Outcome" text={project.outcome} color="text-amber-300" />
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
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-2 text-xs font-semibold text-slate-950"
              >
                Live
              </motion.a>
            )}
            {project.personal_host && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.personal_host}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-300 px-4 py-2 text-xs font-semibold text-slate-950"
              >
                Host
              </motion.a>
            )}
            {project.repoUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted hover:text-foreground"
              >
                GitHub
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CompactProjectCard({
  project,
  tone,
}: {
  project: Project;
  tone: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="panel panel-glow flex h-full flex-col overflow-hidden"
    >
      <div className={cn("h-24 bg-gradient-to-br", tone)} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.18em] text-accent-gold">
            {project.category}
          </p>
          <div className="flex gap-2 text-[11px]">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sky-300">
                Live
              </a>
            )}
            {project.personal_host && (
              <a href={project.personal_host} target="_blank" rel="noopener noreferrer" className="text-violet-300">
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
      </div>
    </motion.article>
  );
}

function Meta({
  label,
  text,
  color,
}: {
  label: string;
  text: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-black/25 p-3.5">
      <p className={cn("text-[10px] uppercase tracking-[0.16em]", color)}>
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
    </div>
  );
}
