import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Section from "./Section";

const TITLES: Record<string, string> = {
  "res-rag": "Multimodal RAG with cross-modal hallucination reduction",
  "res-multitask":
    "Multi-task learning for band gap and formation energy prediction",
  "res-stock": "Validating stock market price prediction algorithms",
};

export default function Research() {
  return (
    <Section id="research" title="Research">
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
              <p className="mt-5 max-w-[62ch] leading-relaxed">{r.description}</p>
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
