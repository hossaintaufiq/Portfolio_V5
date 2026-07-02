import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative flex min-h-[100dvh] scroll-mt-20 items-center overflow-hidden py-10 pt-20 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[12%] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few things I've built — from side projects to production apps."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-6 grid gap-5 lg:gap-6">
            {other.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
