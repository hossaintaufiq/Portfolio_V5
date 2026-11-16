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

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-rule border-y border-rule">
        {PORTFOLIO_DATA.skills.map((c) => {
          const Icon = ICONS[c.categoryCode] ?? Code2;
          return (
            <div
              key={c.categoryCode}
              className="grid gap-3 py-6 transition-[padding,background-color] duration-200 hover:bg-white/60 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:hover:pl-4"
            >
              <dt className="flex items-center gap-3 font-medium">
                <Icon className="h-5 w-5 text-signal" strokeWidth={1.75} aria-hidden="true" />
                {NAMES[c.categoryCode] ?? c.name}
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
