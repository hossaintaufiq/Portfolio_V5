import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Code2,
  Server,
  Brain,
  Layout,
  Database,
  Cloud,
  ListChecks,
  Palette,
} from "lucide-react";
import Scribble from "./Scribble";
import Section from "./Section";
import TechList from "./TechList";

const NAMES: Record<string, string> = {
  "01_LANG": "Languages",
  "02_BACK": "Backend",
  "03_AIML": "AI and machine learning",
  "04_FRNT": "Frontend",
  "05_DATA": "Data",
  "06_CLOD": "Cloud and tooling",
  "07_METH": "Methods",
  "08_DSGN": "Design and formatting",
};

const ICONS: Record<string, typeof Code2> = {
  "01_LANG": Code2,
  "02_BACK": Server,
  "03_AIML": Brain,
  "04_FRNT": Layout,
  "05_DATA": Database,
  "06_CLOD": Cloud,
  "07_METH": ListChecks,
  "08_DSGN": Palette,
};

// Strongest first, because that is what the role is about.
const ORDER = ["02_BACK", "03_AIML", "04_FRNT", "05_DATA", "06_CLOD", "01_LANG", "07_METH", "08_DSGN"];
const CORE = new Set(["02_BACK", "03_AIML"]);

export default function Skills() {
  const categories = [...PORTFOLIO_DATA.skills].sort(
    (a, b) => ORDER.indexOf(a.categoryCode) - ORDER.indexOf(b.categoryCode),
  );
  return (
    <Section
      id="skills"
      title="Skills"
      headline={
        <>
          Tools I{" "}
          <Scribble inView>
            <em>reach for</em>
          </Scribble>{" "}
          every day.
        </>
      }
      index="04"
      blurb="Grouped by the job they do, strongest first. Backend and AI is where I go deepest."
    >
      <dl className="divide-y divide-rule border-y border-rule">
        {categories.map((c) => {
          const Icon = ICONS[c.categoryCode] ?? Code2;
          return (
            <div
              key={c.categoryCode}
              className="grid gap-3 py-6 transition-[padding,background-color] duration-200 hover:bg-[var(--surface-hover)] sm:grid-cols-[13rem_1fr] sm:gap-8 sm:hover:pl-4"
            >
              <dt className="flex items-center gap-3 font-medium">
                <Icon className="h-5 w-5 text-signal" strokeWidth={1.75} aria-hidden="true" />
                {NAMES[c.categoryCode] ?? c.name}
                {CORE.has(c.categoryCode) && (
                  <span className="rounded-sm bg-[#2440d8]/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-signal">
                    Core
                  </span>
                )}
              </dt>
              <dd className="max-w-[62ch] text-sm leading-relaxed text-muted">
                <TechList items={c.skills} />
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
