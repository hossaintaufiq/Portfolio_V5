"use client";

import { skillCategories } from "@/data/skills";

const categoryColors: Record<string, string> = {
  Backend: "#22d3ee",
  "AI / ML": "#a78bfa",
  Languages: "#34d399",
  Frontend: "#60a5fa",
  Databases: "#fbbf24",
  Mobile: "#f472b6",
  Tools: "#fb7185",
  Others: "#f59e0b",
};

export function SkillsList() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="h-full w-full opacity-30"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="90" y1="100" x2="360" y2="180" stroke="#22d3ee" strokeOpacity="0.35" />
          <line x1="360" y1="180" x2="620" y2="110" stroke="#a78bfa" strokeOpacity="0.35" />
          <line x1="620" y1="110" x2="920" y2="190" stroke="#34d399" strokeOpacity="0.35" />
          <line x1="280" y1="330" x2="540" y2="260" stroke="#60a5fa" strokeOpacity="0.35" />
          <line x1="540" y1="260" x2="860" y2="320" stroke="#fbbf24" strokeOpacity="0.35" />
          <circle cx="90" cy="100" r="6" fill="#22d3ee" />
          <circle cx="360" cy="180" r="6" fill="#a78bfa" />
          <circle cx="620" cy="110" r="6" fill="#34d399" />
          <circle cx="920" cy="190" r="6" fill="#60a5fa" />
          <circle cx="280" cy="330" r="6" fill="#f472b6" />
          <circle cx="540" cy="260" r="6" fill="#fb7185" />
          <circle cx="860" cy="320" r="6" fill="#f59e0b" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <h3 className="mb-6 text-xl font-semibold text-foreground sm:text-2xl">
          Skills List
        </h3>
        <p className="mb-6 text-sm text-muted sm:text-base">
          Neural map of technologies and domains.
        </p>
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              style={{
                boxShadow: `0 0 0 1px ${
                  categoryColors[category.title] ?? "#22d3ee"
                }22, 0 0 20px ${categoryColors[category.title] ?? "#22d3ee"}22`,
                animationDelay: `${index * 60}ms`,
              }}
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: categoryColors[category.title] ?? "#22d3ee" }}
                />
                <p className="text-sm font-semibold text-foreground">
                  {category.title}
                </p>
              </div>
              <ul className="space-y-1 text-sm text-muted">
                {category.items.map((skill) => (
                  <li key={`${category.title}-${skill}`} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: categoryColors[category.title] ?? "#22d3ee" }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
              <span
                className="pointer-events-none absolute -top-2 -right-2 h-4 w-4 rounded-full"
                style={{
                  background: categoryColors[category.title] ?? "#22d3ee",
                  boxShadow: `0 0 16px ${categoryColors[category.title] ?? "#22d3ee"}`,
                }}
              />
              <span
                className="pointer-events-none absolute -bottom-2 -left-2 h-3 w-3 rounded-full"
                style={{
                  background: categoryColors[category.title] ?? "#22d3ee",
                  opacity: 0.8,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
