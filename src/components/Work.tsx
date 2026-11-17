import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ARCHITECTURES } from "@/data/architectures";
import ArchDiagram from "./ArchDiagram";
import fs from "node:fs";
import path from "node:path";
import ProjectVisual from "./ProjectVisual";
import Highlight from "./Highlight";
import Scribble from "./Scribble";
import Section from "./Section";
import TechList from "./TechList";

const FEATURED = ["softlligence-cloud", "shorborno-cloud", "kia-bangladesh", "playpen-school", "lucy-ai-assistant"];

const NAMES: Record<string, string> = {
  "softlligence-cloud": "Softlligence Manufacturing Cloud",
  "shorborno-cloud": "Shorborno Cloud",
  "playpen-school": "Playpen School website",
  "mango-ev": "Mango Electric Vehicle website",
  "kia-bangladesh": "Kia Bangladesh",
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

// A real screenshot dropped into public/projects/<id>.(png|jpg|jpeg|webp)
// replaces the drawn illustration automatically.
function findShot(id: string): string | undefined {
  for (const ext of ["png", "jpg", "jpeg", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "projects", `${id}.${ext}`))) {
      return `/projects/${id}.${ext}`;
    }
  }
  return undefined;
}

const STORY = [
  ["The problem", "problem"],
  ["What I built", "built"],
  ["The result", "result"],
] as const;

export default function Work() {
  const all = PORTFOLIO_DATA.projects;
  const featured = FEATURED.map((id) => all.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  const others = all.filter((p) => !FEATURED.includes(p.id));

  return (
    <Section
      id="work"
      title="Work"
      wide
      headline={
        <>
          Things I have{" "}
          <Scribble variant="swash" inView>
            <em>built</em>
          </Scribble>
          , end to end.
        </>
      }
      index="01"
      blurb="Every featured project comes with its real architecture. Hover any part to see why it exists."
      aside={
        <ol className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {featured.map((p, i) => (
            <li key={p.id}>
              <a href={`#${p.id}`} className="font-medium underline decoration-rule decoration-2 underline-offset-4 hover:decoration-signal">
                <span className="mr-2 tabular-nums text-xs">{String(i + 1).padStart(2, "0")}</span>
                {NAMES[p.id] ?? p.title}
              </a>
            </li>
          ))}
        </ol>
      }
    >
      <ol className="divide-y divide-rule">
        {featured.map((p, idx) => {
          const live = isSpecific(p.liveUrl) ? p.liveUrl : undefined;
          const source = isSpecific(p.githubUrl) ? p.githubUrl : undefined;
          const name = NAMES[p.id] ?? p.title;
          const shot = findShot(p.id);
          const hasStory = Boolean(p.problem && p.built && p.result);
          return (
            <li key={p.id} id={p.id} className="scroll-mt-8 py-12 first:pt-0">
              <div className="reveal">
                <p className="text-sm tabular-nums text-muted">
                  {String(idx + 1).padStart(2, "0")} / {p.category.toLowerCase()}
                  {p.status && ` / ${p.status.toLowerCase()}`}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-medium tracking-tight md:text-4xl">
                  <Scribble variant="swash" inView>
                    {name}
                  </Scribble>
                </h3>
                <p className="mt-3 text-muted">{p.subtitle}</p>
                <p className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium">
                  {live && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#16a34a]/40 bg-[#16a34a]/10 px-2.5 py-1 text-[#15803d] dark:text-[#5fd38d]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
                      Live
                    </span>
                  )}
                  {p.status && !live && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d97706]/40 bg-[#d97706]/10 px-2.5 py-1 text-[#b45309] dark:text-[#fbbf24]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d97706]" />
                      In development
                    </span>
                  )}
                  <span className="rounded-full border border-rule px-2.5 py-1 text-muted">
                    {p.technologies.length} technologies
                  </span>
                  {p.modules && (
                    <span className="rounded-full border border-rule px-2.5 py-1 text-muted">
                      {p.modules.length} modules
                    </span>
                  )}
                </p>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
                <div className="reveal">
                  <ProjectVisual id={p.id} name={name} shot={shot} />
                </div>
                <div className="reveal">
                  {hasStory ? (
                    <dl className="space-y-5">
                      {STORY.map(([label, key]) => (
                        <div key={key} className="border-l-2 border-signal pl-4">
                          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                            {label}
                          </dt>
                          <dd className="mt-1 leading-relaxed">
                            <Highlight text={p[key] ?? ""} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <p className="max-w-[62ch] text-lg leading-relaxed">
                      <Highlight text={p.description} />
                    </p>
                  )}
                </div>
              </div>

              {ARCHITECTURES[p.id] && <ArchDiagram arch={ARCHITECTURES[p.id]} />}

              <TechList items={p.technologies} className="mt-6 text-sm text-muted" />

              {(hasStory || p.modules) && (
                <details className="group mt-6 max-w-[62ch]">
                  <summary className="cursor-pointer text-sm font-medium text-signal underline underline-offset-4 marker:content-none">
                    <span className="group-open:hidden">Full details</span>
                    <span className="hidden group-open:inline">Hide details</span>
                  </summary>
                  <div className="mt-4 space-y-4 leading-relaxed">
                    {hasStory && (
                      <p>
                        <Highlight text={p.description} />
                      </p>
                    )}
                    {p.additional && (
                      <p className="text-muted">
                        <Highlight text={p.additional} />
                      </p>
                    )}
                    {p.modules && (
                      <p className="text-sm">
                        <span className="font-medium">Covers: </span>
                        <span className="text-muted">{p.modules.join(", ")}.</span>
                      </p>
                    )}
                  </div>
                </details>
              )}

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
                {p.isPrivateRepo && <span className="text-muted">Private repository</span>}
              </p>
            </li>
          );
        })}
      </ol>

      <h3 id="more-projects" className="mb-2 mt-12 scroll-mt-8 font-serif text-xl font-medium">
        More projects
      </h3>
      <ul className="divide-y divide-rule border-y border-rule">
        {others.map((p) => {
          const href = isSpecific(p.githubUrl) ? p.githubUrl : undefined;
          const name = NAMES[p.id] ?? p.title;
          const live = isSpecific(p.liveUrl) ? p.liveUrl : undefined;
          return (
            <li
              key={p.id}
              className="grid gap-1 py-4 transition-[padding,background-color] duration-200 hover:bg-[var(--surface-hover)] sm:grid-cols-[14rem_1fr] sm:gap-8 sm:hover:pl-4"
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
                {live && (
                  <>
                    {" "}
                    <a href={live} target="_blank" rel="noreferrer" className={linkClass}>
                      Visit the site
                    </a>
                  </>
                )}
                <TechList items={p.technologies.slice(0, 4)} className="mt-2" />
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
