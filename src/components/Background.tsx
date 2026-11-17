import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Scribble from "./Scribble";
import Section from "./Section";

export default function Background() {
  const { education, certifications, volunteering, languages } = PORTFOLIO_DATA;
  return (
    <Section
      id="background"
      title="Background"
      headline={
        <>
          Where I{" "}
          <Scribble variant="swash" inView>
            <em>come from</em>
          </Scribble>
          .
        </>
      }
      index="05"
      blurb="Education, certifications, volunteering and languages."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-serif text-xl font-medium">Education</h3>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.id}>
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted">
                  {e.institution}. {e.timeline}. {e.cgpa}.
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-10 font-serif text-xl font-medium">
            Certifications
          </h3>
          <ul className="space-y-2 text-sm">
            {certifications.map((c) => (
              <li key={c.name}>
                <span className="font-medium">{c.name}</span>
                <span className="text-muted">, {c.issuer}</span>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-10 font-serif text-xl font-medium">
            Languages
          </h3>
          <ul className="space-y-2 text-sm">
            {languages.map((l) => (
              <li key={l.name}>
                <span className="font-medium">{l.name}</span>
                <span className="text-muted">
                  , {l.proficiency.toLowerCase()}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-xl font-medium">
            Leadership and volunteering
          </h3>
          <ul className="space-y-6">
            {volunteering.map((v) => (
              <li key={v.id}>
                <p className="font-medium">{v.role}</p>
                <p className="text-sm text-muted">
                  {v.organization}. {v.period}.
                </p>
                {v.description && (
                  <p className="mt-2 text-sm leading-relaxed">{v.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
