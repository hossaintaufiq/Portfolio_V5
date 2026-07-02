"use client";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 190, damping: 20, mass: 0.4 });
  const springY = useSpring(rotateY, { stiffness: 190, damping: 20, mass: 0.4 });

  const onMove: React.MouseEventHandler<HTMLElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 10);
  };

  return (
    <motion.article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all hover:border-accent/40 hover:shadow-[0_18px_80px_-40px_rgba(34,211,238,0.65)]",
        className,
      )}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        <div className="flex shrink-0 gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:scale-110 hover:text-accent"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLinkIcon />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:scale-110 hover:text-accent"
              aria-label={`View ${project.title} source code`}
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>

      <p className="mb-6 flex-1 leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
