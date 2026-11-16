import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Section from "./Section";
import TechList from "./TechList";

export default function Experience() {
  const { experience, founderFeature } = PORTFOLIO_DATA;
  const [current, ...earlier] = experience;

  const toRole = (e: (typeof experience)[number]) => ({
    id: e.id,
    period: e.period,
    role: e.role,
    company: e.company,
    context: e.companyContext,
    points: e.points ?? [],
    tech: e.technologies,
  });

  const roles = [
    toRole(current),
    {
      id: "founder",
      period: "Ongoing",
      role: "Founder",
      company: "Softlligence Technologies",
      context: "Engineering studio building software for businesses and schools",
      points: founderFeature.deliverables,
      tech: ["AWS", "Next.js", "Node.js", "Prisma", "PostgreSQL", "TypeScript"],
    },
    ...earlier.map(toRole),
  ];

  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-rule">
        {roles.map((r) => (
          <li
            key={r.id}
            className="grid gap-4 py-10 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <p className="text-sm text-muted">{r.period}</p>
            <div>
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                {r.role}, {r.company}
              </h3>
              {r.context && (
                <p className="mt-1 text-sm text-muted">{r.context}</p>
              )}
              <ul className="mt-5 max-w-[62ch] list-disc space-y-2 pl-5 leading-relaxed marker:text-muted">
                {r.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <TechList items={r.tech} className="mt-5 max-w-[62ch] text-sm text-muted" />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
