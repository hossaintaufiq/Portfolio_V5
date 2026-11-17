import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Highlight from "./Highlight";
import Scribble from "./Scribble";
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
    lead: e.highlight ?? e.achievement ?? e.points?.[0] ?? e.description,
    points: (e.points ?? []).filter(
      (pt) => pt !== (e.highlight ?? e.achievement ?? e.points?.[0]),
    ),
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
      lead: "Founded an engineering studio that ships multi-tenant ERP for manufacturers, with strict tenant isolation.",
      points: founderFeature.deliverables,
      tech: ["AWS", "Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "Cloudflare R2", "TypeScript"],
    },
    ...earlier.map(toRole),
  ];

  return (
    <Section
      id="experience"
      title="Experience"
      headline={
        <>
          Where I have{" "}
          <Scribble inView>
            <em>worked</em>
          </Scribble>
          , and what I owned.
        </>
      }
      index="02"
      blurb="Where I have worked, newest first, and what I was responsible for."
    >
      <ol className="relative">
        {roles.map((r) => (
          <li
            key={r.id}
            className="reveal group/li relative grid gap-3 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <div className="text-sm text-muted sm:pt-1.5">
              <p className="tabular-nums">{r.period}</p>
              {/present|ongoing/i.test(r.period) && (
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#16a34a]/40 bg-[#16a34a]/10 px-2.5 py-1 text-xs font-medium text-[#15803d] dark:text-[#5fd38d]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-70 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
                  </span>
                  Current
                </p>
              )}
            </div>
            <div className="relative border-l-2 border-rule pb-12 pl-6 group-last/li:pb-2 sm:pl-8">
              <span
                aria-hidden="true"
                className={`absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-signal ${
                  /present|ongoing/i.test(r.period) ? "bg-signal" : "bg-[var(--page-b)]"
                }`}
              />
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                {r.role}, {r.company}
              </h3>
              {r.context && (
                <p className="mt-1 text-sm text-muted">{r.context}</p>
              )}
              <p className="mt-4 max-w-[62ch] text-lg font-medium leading-snug">
                <Highlight text={r.lead} />
              </p>
              {r.points.length > 0 && (
                <details className="group mt-3 max-w-[62ch]">
                  <summary className="cursor-pointer text-sm font-medium text-signal underline underline-offset-4 marker:content-none">
                    <span className="group-open:hidden">Show details</span>
                    <span className="hidden group-open:inline">Hide details</span>
                  </summary>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed marker:text-muted">
                    {r.points.map((pt) => (
                      <li key={pt}>
                        <Highlight text={pt} />
                      </li>
                    ))}
                  </ul>
                </details>
              )}
              <TechList items={r.tech} className="mt-5 max-w-[62ch] text-sm text-muted" />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
