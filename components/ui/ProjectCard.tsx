"use client";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: Project;
  className?: string;
  featured?: boolean;
};

export function ProjectCard({
  project,
  className,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className={cn(
        "group surface-card overflow-hidden transition-colors hover:border-border-strong",
        featured && "md:col-span-2",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3.5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="truncate text-xs font-medium uppercase tracking-[0.16em] text-muted">
            {project.category}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-1 text-xs text-muted transition-colors hover:bg-white/[0.04] hover:text-foreground"
              aria-label={`View ${project.title} live`}
            >
              Live
            </a>
          )}
          {project.personal_host && (
            <a
              href={project.personal_host}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-1 text-xs text-muted transition-colors hover:bg-white/[0.04] hover:text-foreground"
              aria-label={`View ${project.title} personal host`}
            >
              Host
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-1 text-xs text-muted transition-colors hover:bg-white/[0.04] hover:text-foreground"
              aria-label={`View ${project.title} source code`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className={cn("p-5 sm:p-6", featured && "sm:p-8")}>
        <h3
          className={cn(
            "font-semibold tracking-tight text-foreground",
            featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
          {project.description}
        </p>

        {featured && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <MetaBlock label="Problem" text={project.problem} />
            <MetaBlock label="Solution" text={project.solution} />
            <MetaBlock label="Architecture" text={project.architecture} />
            <MetaBlock label="Outcome" text={project.outcome} />
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function MetaBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-black/20 p-4">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{text}</p>
    </div>
  );
}
