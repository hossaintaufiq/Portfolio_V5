"use client";

import { Reveal } from "@/components/ui/Reveal";
import { skillCategories, skillHighlights } from "@/data/skills";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const CATEGORY_META = [
  {
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.45)",
    gradient: "from-amber-300 via-orange-300 to-yellow-400",
    label: "Core languages across web, backend, and mobile",
  },
  {
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.45)",
    gradient: "from-sky-400 via-cyan-300 to-blue-400",
    label: "Full-stack web interfaces and product UI",
  },
  {
    color: "#34d399",
    glow: "rgba(52,211,153,0.45)",
    gradient: "from-emerald-400 via-teal-300 to-cyan-400",
    label: "Node, Express, Java, and Python services",
  },
  {
    color: "#818cf8",
    glow: "rgba(129,140,248,0.45)",
    gradient: "from-indigo-400 via-violet-300 to-sky-300",
    label: "Databases, caching, and data modeling",
  },
  {
    color: "#fb7185",
    glow: "rgba(251,113,133,0.45)",
    gradient: "from-rose-400 via-pink-300 to-fuchsia-400",
    label: "Kotlin Android and multi-channel clients",
  },
  {
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.4)",
    gradient: "from-amber-400 via-orange-300 to-rose-300",
    label: "Cloud deploy, containers, and CI/CD",
  },
  {
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.5)",
    gradient: "from-violet-400 via-fuchsia-300 to-purple-400",
    label: "ML, LLMs, RAG, and applied AI",
  },
  {
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.45)",
    gradient: "from-cyan-300 via-sky-300 to-indigo-300",
    label: "Architecture, tooling, and delivery craft",
  },
] as const;

export function Skills() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const totalSkills = useMemo(
    () => skillCategories.reduce((sum, c) => sum + c.items.length, 0),
    [],
  );

  const meta = CATEGORY_META[active % CATEGORY_META.length];
  const category = skillCategories[active];

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % skillCategories.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#060912]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.24),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_8%_80%,rgba(167,139,250,0.2),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_92%_65%,rgba(251,191,36,0.16),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_70%_20%,rgba(52,211,153,0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-25" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: meta.glow }}
        animate={
          reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell relative">
        <div className="mb-8 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-sky-300/90">
              Technical skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.9rem] md:leading-[1.08]">
              <span className="text-gradient-cool">
                Full-stack engineer across web, backend, and mobile.
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Production experience with Node.js, Express, Python, Java, Kotlin,
              and the supporting stack needed to design, build, and ship software
              end to end.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: "Categories", value: skillCategories.length },
                { label: "Technologies", value: totalSkills },
                { label: "Identity", value: "Full-stack" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center shadow-[0_0_40px_-28px_rgba(56,189,248,0.55)] backdrop-blur-md sm:px-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-mono text-lg text-foreground sm:text-xl">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Core stack strip */}
        <Reveal delay={0.04}>
          <div className="mb-8 overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-r from-sky-400/10 via-violet-400/10 to-amber-300/10 p-[1px]">
            <div className="rounded-[1.3rem] bg-[#080d18]/90 px-4 py-4 sm:px-5 sm:py-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-sky-300/90">
                    Core stack
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    What I use most when building production systems
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillHighlights.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={reduce ? undefined : { opacity: 0, y: 8 }}
                      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-100 shadow-[0_0_24px_-16px_rgba(125,211,252,0.8)]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-wrap lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            {skillCategories.map((item, index) => {
              const tone = CATEGORY_META[index % CATEGORY_META.length];
              const selected = index === active;
              return (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative shrink-0 overflow-hidden rounded-full border px-4 py-2.5 text-left transition-colors"
                  style={{
                    borderColor: selected
                      ? `${tone.color}88`
                      : "rgba(148,163,184,0.18)",
                    background: selected
                      ? `linear-gradient(135deg, ${tone.color}33, transparent)`
                      : "rgba(255,255,255,0.02)",
                    boxShadow: selected ? `0 0 28px -12px ${tone.glow}` : "none",
                  }}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: tone.color,
                        boxShadow: `0 0 10px ${tone.color}`,
                      }}
                    />
                    <span className="text-sm font-medium text-foreground">
                      {item.title}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {String(item.items.length).padStart(2, "0")}
                    </span>
                  </span>
                  {selected && (
                    <motion.span
                      layoutId="skills-rail-glow"
                      className="pointer-events-none absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${tone.color}22, transparent)`,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080d18]/80 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md sm:p-6 sm:backdrop-blur-xl lg:min-h-[560px]">
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background: `radial-gradient(circle at 50% 45%, ${meta.color}22, transparent 55%)`,
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_45%)]" />

              <div className="absolute left-1/2 top-[46%] hidden h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 lg:block">
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute inset-0 rounded-full border border-dashed"
                    style={{
                      inset: `${(ring - 1) * 12}%`,
                      borderColor: `${meta.color}${ring === 2 ? "44" : "22"}`,
                    }}
                    animate={
                      reduce
                        ? undefined
                        : { rotate: ring % 2 === 0 ? 360 : -360 }
                    }
                    transition={{
                      duration: 40 + ring * 12,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>

              {!reduce &&
                Array.from({ length: 6 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute hidden h-1.5 w-1.5 rounded-full md:block"
                    style={{
                      left: `${12 + ((i * 17) % 76)}%`,
                      top: `${18 + ((i * 23) % 64)}%`,
                      background: CATEGORY_META[i % CATEGORY_META.length].color,
                    }}
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.25, 0.85, 0.25],
                    }}
                    transition={{
                      duration: 3.5 + (i % 3),
                      repeat: Infinity,
                      delay: i * 0.25,
                    }}
                  />
                ))}

              <div className="relative z-10 flex h-full min-h-[240px] flex-col items-center justify-center sm:min-h-[300px] lg:min-h-[440px]">
                <motion.div
                  className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/15 bg-[#0b1324]/90 sm:h-44 sm:w-44 lg:h-48 lg:w-48"
                  style={{ boxShadow: `0 0 70px -8px ${meta.glow}` }}
                  animate={reduce ? undefined : { rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <div
                    className={`absolute inset-3 rounded-full bg-gradient-to-br ${meta.gradient} opacity-25 blur-md`}
                  />
                  <div
                    className={`absolute inset-[18%] rounded-full bg-gradient-to-br ${meta.gradient} opacity-10`}
                  />
                  <div className="relative px-3 text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                      Active domain
                    </p>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={category.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="mt-2 text-xl font-semibold text-foreground sm:text-2xl"
                      >
                        {category.title}
                      </motion.p>
                    </AnimatePresence>
                    <p className="mt-2 text-[11px] leading-snug text-sky-200/80 sm:text-xs">
                      {meta.label}
                    </p>
                  </div>
                </motion.div>

                <div className="pointer-events-none absolute inset-0 hidden lg:block">
                  {skillCategories.map((item, index) => {
                    const angle =
                      (index / skillCategories.length) * Math.PI * 2 - Math.PI / 2;
                    const radius = 42;
                    const x = 50 + Math.cos(angle) * radius;
                    const y = 46 + Math.sin(angle) * radius;
                    const tone = CATEGORY_META[index % CATEGORY_META.length];
                    const selected = index === active;

                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setActive(index)}
                        className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${x}%`, top: `${y}%` }}
                        aria-label={`Select ${item.title}`}
                      >
                        <motion.span
                          className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs backdrop-blur-md"
                          style={{
                            borderColor: selected
                              ? `${tone.color}99`
                              : "rgba(255,255,255,0.12)",
                            background: selected
                              ? `${tone.color}33`
                              : "rgba(8,13,24,0.75)",
                            boxShadow: selected
                              ? `0 0 24px -6px ${tone.glow}`
                              : "none",
                            color: selected ? "#f8fafc" : "#94a3b8",
                          }}
                          animate={
                            reduce
                              ? undefined
                              : {
                                  y: selected ? [0, -4, 0] : [0, -2, 0],
                                  scale: selected ? 1.08 : 1,
                                }
                          }
                          transition={{
                            duration: selected ? 2.2 : 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          whileHover={{ scale: 1.12 }}
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: tone.color }}
                          />
                          {item.title}
                        </motion.span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative z-10 mt-2 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-[11px] text-muted">
                <span className="min-w-0">
                  Browse languages, backend, mobile, cloud, and AI
                </span>
                <span className="shrink-0 font-mono text-sky-200/80">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(skillCategories.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080d18]/85 p-5 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.95)] backdrop-blur-md sm:p-7 sm:backdrop-blur-xl"
                style={{ boxShadow: `0 0 80px -40px ${meta.glow}` }}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${meta.gradient}`}
                />
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                  style={{ background: meta.glow }}
                />
                <div
                  className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full blur-3xl"
                  style={{ background: `${meta.color}22` }}
                />

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 max-w-md">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                        Category
                      </p>
                      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                        {category.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-sky-100/80">
                        {category.summary}
                      </p>
                    </div>
                    <div
                      className="rounded-2xl border px-3 py-2 text-center"
                      style={{
                        borderColor: `${meta.color}55`,
                        background: `${meta.color}18`,
                      }}
                    >
                      <p className="font-mono text-xl text-foreground">
                        {String(category.items.length).padStart(2, "0")}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-muted">
                        skills
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-1.5">
                    {skillCategories.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Go to ${skillCategories[index].title}`}
                        onClick={() => setActive(index)}
                        className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                      >
                        <motion.span
                          className="block h-full rounded-full"
                          style={{ background: CATEGORY_META[index].color }}
                          initial={false}
                          animate={{
                            width:
                              index === active
                                ? "100%"
                                : index < active
                                  ? "100%"
                                  : "0%",
                            opacity: index === active ? 1 : 0.35,
                          }}
                          transition={{ duration: 0.45 }}
                        />
                      </button>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {category.items.map((skill, i) => {
                      const isHot = hoveredSkill === skill;
                      return (
                        <motion.button
                          key={skill}
                          type="button"
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          initial={{ opacity: 0, y: 14, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: i * 0.035, duration: 0.35 }}
                          whileHover={{ y: -4, scale: 1.03 }}
                          className="group relative overflow-hidden rounded-2xl border px-4 py-4 text-left"
                          style={{
                            borderColor: isHot
                              ? `${meta.color}88`
                              : "rgba(255,255,255,0.1)",
                            background: isHot
                              ? `linear-gradient(145deg, ${meta.color}28, rgba(0,0,0,0.35))`
                              : "linear-gradient(165deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                            boxShadow: isHot
                              ? `0 16px 40px -24px ${meta.glow}`
                              : "none",
                          }}
                        >
                          <div
                            className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${meta.gradient} opacity-0 transition-opacity group-hover:opacity-80`}
                          />
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-medium text-foreground">
                              {skill}
                            </span>
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{
                                background: meta.color,
                                boxShadow: isHot
                                  ? `0 0 12px ${meta.color}`
                                  : "none",
                              }}
                            />
                          </div>
                          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                            <motion.span
                              className="block h-full rounded-full"
                              style={{ background: meta.color }}
                              initial={{ width: "0%" }}
                              animate={{
                                width: isHot
                                  ? "100%"
                                  : `${58 + ((i * 11) % 35)}%`,
                              }}
                              transition={{ duration: 0.45 }}
                            />
                          </div>
                          <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted">
                            Hands-on delivery
                          </p>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <Reveal delay={0.1}>
              <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-violet-400/15 p-4 sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                      Recruiter takeaway
                    </p>
                    <p className="mt-1 text-sm text-slate-200">
                      Full-stack web developer who also ships with Java, Python,
                      Node/Express, and Kotlin — comfortable owning UI, APIs,
                      data, mobile clients, and AI-assisted features.
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setActive(
                          (prev) =>
                            (prev - 1 + skillCategories.length) %
                            skillCategories.length,
                        )
                      }
                      className="rounded-full border border-white/15 px-3 py-2 text-xs text-muted hover:border-sky-300/40 hover:text-foreground"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActive((prev) => (prev + 1) % skillCategories.length)
                      }
                      className={`rounded-full bg-gradient-to-r px-4 py-2 text-xs font-semibold text-slate-950 ${meta.gradient}`}
                    >
                      Next category
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
