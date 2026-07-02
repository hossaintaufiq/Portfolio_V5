import { certifications, education, languages } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-border bg-surface/50 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Formal education, certifications, and languages."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {education.map((item) => (
              <article
                key={item.degree}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-accent">{item.institution}</p>
                  </div>
                  <time className="shrink-0 text-sm text-muted">{item.period}</time>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="text-sm text-muted">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                Languages
              </h3>
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
