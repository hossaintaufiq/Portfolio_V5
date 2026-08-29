"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { PipelineMock } from "@/components/ui/Visuals";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { label: "Years building", value: 3, suffix: "+" },
  { label: "Shipped systems", value: 8, suffix: "+" },
  { label: "CGPA", value: 3.83, decimals: 2, suffix: "" },
  { label: "Research projects", value: 4, suffix: "" },
] as const;

export function About() {
  return (
    <SectionFrame id="about" tone="sky">
      <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center mb-8">
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.02] shadow-xl shadow-sky-500/5 sm:h-32 sm:w-32"
            >
              <Image
                src="/profile_pic.jpg"
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="min-w-0 flex-1">
              <SectionHeading
                eyebrow="About"
                title="I build reliable software for real users and real operations."
                description="Full-stack engineer with backend depth, AI experience, and a bias toward clean architecture and shipping."
                tone="cool"
              />
            </div>
          </div>

          <div className="space-y-5">
            {profile.bio.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.06}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <div className="mt-7 flex flex-wrap gap-2">
              {profile.focusAreas.map((area) => (
                <motion.span
                  key={area}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-full border border-sky-400/25 bg-gradient-to-r from-sky-400/10 to-violet-400/10 px-3 py-1.5 text-xs text-sky-100"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
          <Stagger className="grid grid-cols-2 gap-3">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md"
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-mono text-2xl font-semibold text-gradient-cool sm:text-3xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={"decimals" in stat ? stat.decimals : 0}
                    />
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <PipelineMock />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Role", value: profile.role, accent: "from-sky-400/15" },
              {
                label: "Education",
                value: `${profile.education}\n${profile.university}\nCGPA ${profile.cgpa}`,
                accent: "from-violet-400/15",
              },
              {
                label: "Availability",
                value: profile.availability,
                accent: "from-emerald-400/15",
              },
              {
                label: "Contact",
                value: `${siteConfig.email}\n${siteConfig.phone}`,
                accent: "from-amber-400/15",
              },
            ].map((card, i) => (
              <Reveal key={card.label} delay={0.08 + i * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl border border-white/10 bg-gradient-to-br ${card.accent} to-transparent p-5 backdrop-blur-md`}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/75">
                    {card.label}
                  </p>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground/90">
                    {card.value}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <Magnetic className="w-full">
              <a
                href={profile.resumeUrl}
                download="Resume.pdf"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-r from-amber-400/10 via-transparent to-sky-400/10 text-sm font-medium text-foreground transition-colors hover:border-amber-300/50"
              >
                Download resume
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </SectionFrame>
  );
}
