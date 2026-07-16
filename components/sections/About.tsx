"use client";

import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

const highlights = [
  { label: "Experience", value: "3+", suffix: " yrs" },
  { label: "CGPA", value: "3.79", suffix: "" },
  { label: "Research", value: "2", suffix: " active" },
  { label: "Focus", value: "AI/ML", suffix: "" },
] as const;

const focusAreas = [
  "Backend Systems",
  "LLM Integration",
  "Product Leadership",
  "Research",
] as const;

type InfoCardProps = {
  label: string;
  children: ReactNode;
  delay?: number;
};

function InfoCard({ label, children, delay = 0 }: InfoCardProps) {
  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ y: -4, borderColor: "rgba(34, 211, 238, 0.35)" }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-shadow hover:shadow-[0_12px_40px_-20px_rgba(34,211,238,0.45)]"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-accent">{label}</p>
        <div className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
          {children}
        </div>
      </motion.div>
    </Reveal>
  );
}

function StatCard({
  label,
  value,
  suffix,
  delay,
}: {
  label: string;
  value: string;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm transition-colors hover:border-cyan-400/30 hover:bg-white/[0.06] sm:p-5"
    >
      <p className="text-[10px] font-medium uppercase tracking-widest text-muted sm:text-xs">
        {label}
      </p>
      <p className="mt-2 font-[family-name:var(--font-geist-mono)] text-2xl font-bold text-foreground sm:text-3xl">
        <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          {value}
        </span>
        {suffix && <span className="text-base text-muted sm:text-lg">{suffix}</span>}
      </p>
    </motion.div>
  );
}

export function About() {
  const [activeBio, setActiveBio] = useState(0);

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent sm:text-sm">
            About
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-[family-name:var(--font-brand)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Building products with{" "}
            <span className="bg-gradient-to-r from-foreground via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              engineering depth
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Background, approach, and what drives my work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Main bio panel */}
          <div className="space-y-6">
            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                <div className="flex border-b border-white/10 bg-white/[0.02]">
                  {profile.bio.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveBio(index)}
                      className={cn(
                        "flex-1 px-4 py-3 text-xs font-medium uppercase tracking-wider transition-colors sm:px-6 sm:text-sm",
                        activeBio === index
                          ? "bg-white/10 text-foreground"
                          : "text-muted hover:text-foreground",
                      )}
                    >
                      {index === 0 ? "Overview" : "Journey"}
                    </button>
                  ))}
                </div>

                <div className="relative min-h-[200px] p-6 sm:p-8">
                  {profile.bio.map((paragraph, index) => (
                    <motion.p
                      key={paragraph}
                      initial={false}
                      animate={{
                        opacity: activeBio === index ? 1 : 0,
                        y: activeBio === index ? 0 : 12,
                        position: activeBio === index ? "relative" : "absolute",
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={cn(
                        "text-base leading-relaxed text-muted sm:text-lg",
                        activeBio !== index && "pointer-events-none inset-x-6 top-6 sm:inset-x-8 sm:top-8",
                      )}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <motion.span
                    key={area}
                    whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.4)" }}
                    className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground sm:text-sm"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(34,211,238,0.14),transparent_42%),radial-gradient(circle_at_85%_20%,rgba(167,139,250,0.16),transparent_38%)]" />
                <div className="relative">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-accent sm:text-xs">
                      Engineering Snapshot
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.45)]" />
                      Active
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-white/10 bg-black/20 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted">Backend</p>
                      <p className="mt-1 text-xs font-semibold text-cyan-300">Node.js</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-black/20 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted">AI</p>
                      <p className="mt-1 text-xs font-semibold text-violet-300">RAG/LLM</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-black/20 p-2">
                      <p className="text-[9px] uppercase tracking-wider text-muted">Data</p>
                      <p className="mt-1 text-xs font-semibold text-emerald-300">PostgreSQL</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.24}>
              <Magnetic className="w-full sm:max-w-sm">
                <a
                  href={profile.resumeUrl}
                  download="Resume.pdf"
                  className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-full border border-cyan-300/25 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 px-5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-cyan-300/45 hover:shadow-[0_10px_35px_-18px_rgba(34,211,238,0.7)]"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative">Download Resume →</span>
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, i) => (
                <StatCard
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  suffix={item.suffix}
                  delay={i * 0.08}
                />
              ))}
            </div>

            <InfoCard label="Role" delay={0.1}>
              {profile.role}
            </InfoCard>

            <InfoCard label="Education" delay={0.14}>
              <p className="font-medium">{profile.education}</p>
              <p className="mt-1 text-muted">{profile.university}</p>
              <p className="mt-1 text-sm text-muted">CGPA: {profile.cgpa}</p>
            </InfoCard>

            <InfoCard label="Availability" delay={0.18}>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
                {profile.availability}
              </span>
            </InfoCard>

            <InfoCard label="Contact" delay={0.22}>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="block font-medium text-accent transition-opacity hover:opacity-80"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm text-muted transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </InfoCard>

          </div>
        </div>
      </div>
    </section>
  );
}
