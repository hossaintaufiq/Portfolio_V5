import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Highlight from "./Highlight";
import Scribble from "./Scribble";
import Section from "./Section";

const TITLES: Record<string, string> = {
  "res-rag": "Multimodal RAG with cross-modal hallucination reduction",
  "res-multitask":
    "Multi-task learning for band gap and formation energy prediction",
  "res-stock": "Validating stock market price prediction algorithms",
  "res-neptune": "NEPTUNE: a quantitative research and paper trading platform",
};

// A link only counts if it points at something specific, not a profile root.
const isSpecific = (url?: string) => {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.hostname !== "github.com" || u.pathname.split("/").filter(Boolean).length >= 2;
  } catch {
    return false;
  }
};

export default function Research() {
  return (
    <Section
      id="research"
      title="Research"
      headline={
        <>
          Questions I am{" "}
          <Scribble variant="swash" inView>
            <em>researching</em>
          </Scribble>
          .
        </>
      }
      index="03"
      blurb="Academic and independent research in retrieval, deep learning and markets."
    >
      <ol className="divide-y divide-rule">
        {PORTFOLIO_DATA.research.map((r) => (
          <li
            key={r.id}
            className="grid gap-4 py-10 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <p className="text-sm text-muted">{r.timeline}</p>
            <div>
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                {TITLES[r.id] ?? r.title}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {r.institution}
                {r.supervisor ? `, supervised by ${r.supervisor}` : ""}. Status:{" "}
                {r.status.toLowerCase()}.
              </p>
              <p className="mt-5 max-w-[62ch] leading-relaxed"><Highlight text={r.description} /></p>
              {r.findings && (
                <div className="mt-5 max-w-[62ch]">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    What the research found
                  </p>
                  <ul className="mt-2 space-y-2 border-l-2 border-signal pl-4 leading-relaxed">
                    {r.findings.map((f) => (
                      <li key={f}>
                        <Highlight text={f} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {r.hasGithub && isSpecific(r.githubUrl) && (
                <p className="mt-5 text-sm font-medium">
                  <a
                    href={r.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-signal underline underline-offset-4"
                  >
                    Read the source
                  </a>
                </p>
              )}
              {r.disclaimer && (
                <p className="mt-3 max-w-[62ch] text-sm text-muted">
                  {r.disclaimer}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
