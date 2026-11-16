import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ARCHITECTURES } from "@/data/architectures";
import ArchDiagram from "./ArchDiagram";
import Section from "./Section";
import TechList from "./TechList";

const FEATURED = ["softlligence-cloud", "mango-ev", "lucy-ai-assistant"];

const NAMES: Record<string, string> = {
  "softlligence-cloud": "Softlligence Manufacturing Cloud",
  "playpen-school": "Playpen School website",
  "mango-ev": "Mango Electric Vehicle website",
  "focusflow-app": "FocusFlow",
  "handtrack-studio": "HandTrack Studio",
  "lucy-ai-assistant": "Lucy",
  "uni-admission-portal": "University admission portal",
  "neptune-shorts": "Neptune Shorts",
  "dhaka-road-network": "Dhaka Road Network",
  "acumens-media": "AcuMens Media",
};

// A link only counts if it points at something specific, not a profile root.
const isSpecific = (url?: string) => {
  if (!url) return false;
  try {
    const u = new URL(url);
    return (
      u.hostname !== "github.com" ||
      u.pathname.split("/").filter(Boolean).length >= 2
    );
  } catch {
    return false;
  }
};

const linkClass = "text-signal underline underline-offset-4";

export default function Work() {
  const all = PORTFOLIO_DATA.projects;
  const featured = FEATURED.map((id) => all.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  const others = all.filter((p) => !FEATURED.includes(p.id));

  return (
    <Section id="work" title="Work">
      <ol className="divide-y divide-rule">
        {featured.map((p) => {
          const live = isSpecific(p.liveUrl) ? p.liveUrl : undefined;
          const source = isSpecific(p.githubUrl) ? p.githubUrl : undefined;
          return (
            <li key={p.id} className="py-10 first:pt-0">
              <h3 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                {NAMES[p.id] ?? p.title}
              </h3>
              <p className="mt-2 text-muted">{p.subtitle}</p>
              <p className="mt-6 max-w-[62ch] text-lg leading-relaxed">
                {p.description}
              </p>
              {p.additional && (
                <p className="mt-4 max-w-[62ch] leading-relaxed text-muted">
                  {p.additional}
                </p>
              )}
              {ARCHITECTURES[p.id] && <ArchDiagram arch={ARCHITECTURES[p.id]} />}
              {p.modules && (
                <p className="mt-6 max-w-[62ch] text-sm leading-relaxed">
                  <span className="font-medium">Covers: </span>
                  <span className="text-muted">{p.modules.join(", ")}.</span>
                </p>
              )}
              <TechList items={p.technologies} className="mt-5 text-sm text-muted" />
              <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                {live && (
                  <a href={live} target="_blank" rel="noreferrer" className={linkClass}>
                    Visit the site
                  </a>
                )}
                {source && (
                  <a href={source} target="_blank" rel="noreferrer" className={linkClass}>
                    Read the source
                  </a>
                )}
                {p.isPrivateRepo && (
                  <span className="text-muted">Private repository</span>
                )}
              </p>
            </li>
          );
        })}
      </ol>

      <h3 className="mb-2 mt-12 font-serif text-xl font-medium">More projects</h3>
      <ul className="divide-y divide-rule border-y border-rule">
        {others.map((p) => {
          const href = isSpecific(p.githubUrl) ? p.githubUrl : undefined;
          const name = NAMES[p.id] ?? p.title;
          return (
            <li
              key={p.id}
              className="grid gap-1 py-4 transition-[padding,background-color] duration-200 hover:bg-white/60 sm:grid-cols-[14rem_1fr] sm:gap-8 sm:hover:pl-4"
            >
              <span className="font-medium">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-rule decoration-2 underline-offset-4 hover:decoration-signal"
                  >
                    {name}
                  </a>
                ) : (
                  name
                )}
              </span>
              <span className="text-sm leading-relaxed text-muted">
                {p.subtitle}
                <TechList items={p.technologies.slice(0, 4)} className="mt-2" />
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
