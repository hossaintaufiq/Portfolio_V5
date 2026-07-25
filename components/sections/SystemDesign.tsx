"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { systemDesignSteps } from "@/data/content";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const STEP_COLORS = [
  "from-sky-400 to-cyan-300",
  "from-violet-400 to-fuchsia-300",
  "from-emerald-400 to-teal-300",
  "from-amber-400 to-orange-300",
  "from-rose-400 to-pink-300",
  "from-indigo-400 to-sky-300",
  "from-lime-400 to-emerald-300",
  "from-cyan-400 to-blue-300",
  "from-fuchsia-400 to-violet-300",
];

export function SystemDesign() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 40%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <SectionFrame id="system-design" tone="sky">
      <SectionHeading
        eyebrow="Delivery process"
        title="How I take software from discovery to production."
        description="A practical workflow recruiters can map to senior product and platform engineering roles."
        tone="cool"
      />

      <div ref={ref} className="relative">
        <div className="mb-8 hidden h-1.5 overflow-hidden rounded-full bg-border md:block">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-amber-300"
            style={{ width }}
          />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {systemDesignSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.04}
              className="min-w-[250px] md:min-w-0"
            >
              <motion.article
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${STEP_COLORS[index % STEP_COLORS.length]}`}
                />
                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-300/80">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <motion.span
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${STEP_COLORS[index % STEP_COLORS.length]}`}
                    animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
