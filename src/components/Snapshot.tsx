import { Download, Mail, MessageCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Scribble from "./Scribble";
import AskGuideButton from "./AskGuideButton";

/** A skimmable fact sheet so a recruiter has the essentials in ten seconds. */
export default function Snapshot() {
  const { identity, education } = PORTFOLIO_DATA;
  const nsu = education[0];
  const updated = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(new Date());

  const facts: { label: string; lines: string[] }[] = [
    {
      label: "Role",
      lines: ["Backend AI Engineer", "Edumax Labs, since Nov 2026", "Founder, Softlligence Technologies"],
    },
    {
      label: "Strongest with",
      lines: ["Node.js, Express, FastAPI", "PostgreSQL, Redis, Prisma", "RAG, speech and LLM pipelines"],
    },
    {
      label: "Education",
      lines: ["B.Sc. Computer Science, North South University", `CGPA ${nsu.cgpa.split(" ")[0]}, graduating Dec 2026`],
    },
    {
      label: "Based in",
      lines: [`${identity.location}, GMT+6`, "Bangla (native), English (professional)", identity.availability],
    },
  ];

  return (
    <section aria-labelledby="snapshot-title" className="pt-12 md:pt-16">
      <div className="border border-rule bg-[var(--surface)] p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h2 id="snapshot-title" className="font-serif text-2xl font-medium tracking-tight md:text-3xl">
            <Scribble inView>Recruiter snapshot</Scribble>
          </h2>
          <p className="text-xs text-muted">Updated {updated}</p>
        </div>

        <dl className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="border-t-2 border-signal pt-3">
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">{f.label}</dt>
              <dd className="mt-2 space-y-1 text-sm leading-snug">
                {f.lines.map((l, i) => (
                  <p key={l} className={i === 0 ? "font-medium" : "text-muted"}>
                    {l}
                  </p>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-rule pt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#16213a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2440d8] dark:bg-white dark:text-[#16213a] dark:hover:bg-[#dfe5ff]"
          >
            <Download className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Download resume
          </a>
          <a
            href={`mailto:${identity.email}`}
            className="inline-flex items-center gap-2 border border-rule px-5 py-3 text-sm font-semibold hover:border-signal hover:text-signal"
          >
            <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Email
          </a>
          <a
            href={`https://wa.me/${identity.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-rule px-5 py-3 text-sm font-semibold hover:border-signal hover:text-signal"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            WhatsApp
          </a>
          <AskGuideButton />
        </div>
      </div>
    </section>
  );
}
