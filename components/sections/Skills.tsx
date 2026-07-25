"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";
import { useState } from "react";

const NODE_COLORS = [
  "#38bdf8",
  "#8b7cf6",
  "#d4a574",
  "#34d399",
  "#f472b6",
  "#60a5fa",
];

export function Skills() {
  const [active, setActive] = useState(0);
  const activeCategory = skillCategories[active];

  return (
    <section
      id="skills"
      className="ambient-slate relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Tech ecosystem"
          title="A connected engineering stack."
          description="Interactive categories with a living network — not a flat badge dump."
          tone="cool"
        />

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal>
            <div className="panel relative min-h-[320px] overflow-hidden p-4 sm:min-h-[420px] sm:p-6">
              <div className="absolute inset-0 grid-fade opacity-30" />
              <svg
                viewBox="0 0 500 420"
                className="relative h-full w-full"
                aria-hidden
              >
                <defs>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {skillCategories.map((category, index) => {
                  const angle =
                    (index / skillCategories.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 250 + Math.cos(angle) * 145;
                  const y = 210 + Math.sin(angle) * 130;
                  const color = NODE_COLORS[index % NODE_COLORS.length];
                  const isActive = index === active;

                  return (
                    <g key={category.title}>
                      <line
                        x1="250"
                        y1="210"
                        x2={x}
                        y2={y}
                        stroke={color}
                        strokeOpacity={isActive ? 0.55 : 0.18}
                        strokeWidth={isActive ? 1.8 : 1}
                      />
                      <circle cx="250" cy="210" r="34" fill="url(#nodeGlow)" />
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={isActive ? 18 : 12}
                        fill={color}
                        fillOpacity={isActive ? 0.95 : 0.55}
                        className="cursor-pointer"
                        onClick={() => setActive(index)}
                        whileHover={{ scale: 1.15 }}
                      />
                      <text
                        x={x}
                        y={y + 32}
                        textAnchor="middle"
                        fill={isActive ? "#e2e8f0" : "#94a3b8"}
                        fontSize="11"
                        className="cursor-pointer"
                        onClick={() => setActive(index)}
                      >
                        {category.title}
                      </text>
                    </g>
                  );
                })}
                <circle
                  cx="250"
                  cy="210"
                  r="22"
                  fill="#0b1528"
                  stroke="rgba(56,189,248,0.45)"
                />
                <text
                  x="250"
                  y="214"
                  textAnchor="middle"
                  fill="#bae6fd"
                  fontSize="10"
                >
                  Stack
                </text>
              </svg>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-4 flex flex-wrap gap-2">
                {skillCategories.map((category, index) => (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      active === index
                        ? "border-sky-300/40 bg-sky-400/10 text-sky-100"
                        : "border-border text-muted hover:text-foreground"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal key={activeCategory.title}>
              <div className="panel p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent-gold">
                  Category
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  {activeCategory.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {activeCategory.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="rounded-full border border-border bg-black/25 px-3.5 py-2 text-sm text-slate-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
