import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border bg-surface/50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Roles and impact across teams and products."
        />

        <div className="space-y-8">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-accent">{job.company}</p>
                  {job.location && (
                    <p className="mt-1 text-sm text-muted">{job.location}</p>
                  )}
                </div>
                <time className="shrink-0 text-sm text-muted">{job.period}</time>
              </div>

              <p className="mt-4 leading-relaxed text-muted">{job.description}</p>

              <ul className="mt-4 space-y-2">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
