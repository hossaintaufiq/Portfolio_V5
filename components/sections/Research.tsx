import { research } from "@/data/research";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Research"
          title="AI & deep learning research"
          description="Active research at North South University at the intersection of clinical ML and multimodal AI."
        />

        <div className="space-y-8">
          {research.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-accent">{item.institution}</p>
                  {item.supervisor && (
                    <p className="mt-1 text-sm text-muted">
                      Supervisor: {item.supervisor}
                    </p>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <time className="text-sm text-muted">{item.period}</time>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
                    {item.status}
                  </p>
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-muted">{item.description}</p>

              {item.repoUrl && (
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                  View repository →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
