import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few things I've built — from side projects to production apps."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-6 grid gap-6">
            {other.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
