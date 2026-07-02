import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border bg-surface/50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A snapshot of the tools and frameworks I use day to day."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
