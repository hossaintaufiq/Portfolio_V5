import { Download, Mail, MessageCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Scribble from "./Scribble";
import AskGuideButton from "./AskGuideButton";
import Waves from "./Waves";

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

  const ghost =
    "inline-flex items-center gap-2 border border-white/55 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15";

  return (
    <section aria-labelledby="snapshot-title" className="pt-12 md:pt-16">
      <div className="snapshot relative overflow-hidden p-6 pb-28 text-white shadow-[0_34px_70px_-34px_rgba(36,64,216,0.75)] md:p-10 md:pb-32">
        <Waves />

        <div className="relative">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-4">
            <h2 id="snapshot-title" className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              <Scribble tone="peach" variant="swash" inView>
                Recruiter snapshot
              </Scribble>
            </h2>
            <p className="rounded-full bg-black/20 px-3 py-1 text-xs text-white/90">Updated {updated}</p>
          </div>

          <dl className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="border-t-[3px] border-[#ffd9a8] bg-white/12 px-4 pb-4 pt-3 backdrop-blur-[2px]"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ffe6c6]">{f.label}</dt>
                <dd className="mt-2 space-y-1 text-sm leading-snug">
                  {f.lines.map((l, i) => (
                    <p key={l} className={i === 0 ? "font-semibold" : "text-white/90"}>
                      {l}
                    </p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#2440d8] hover:bg-[#fff1de]"
            >
              <Download className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Download resume
            </a>
            <a href={`mailto:${identity.email}`} className={ghost}>
              <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Email
            </a>
            <a
              href={`https://wa.me/${identity.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className={ghost}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              WhatsApp
            </a>
            <AskGuideButton tone="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
