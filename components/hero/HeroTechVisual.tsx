"use client";

import { motion } from "framer-motion";

const codeLines = [
  { tokens: [{ t: "const", c: "text-violet-400" }, { t: " stack", c: "text-foreground" }, { t: " =", c: "text-muted" }, { t: " {", c: "text-foreground" }] },
  { tokens: [{ t: "  backend:", c: "text-cyan-300" }, { t: ' "Node.js · GraphQL"', c: "text-emerald-400" }, { t: ",", c: "text-muted" }] },
  { tokens: [{ t: "  frontend:", c: "text-cyan-300" }, { t: ' "Next.js · TS"', c: "text-emerald-400" }, { t: ",", c: "text-muted" }] },
  { tokens: [{ t: "  ai:", c: "text-cyan-300" }, { t: ' "RAG · LLM"', c: "text-emerald-400" }, { t: ",", c: "text-muted" }], hideOnMobile: true },
  { tokens: [{ t: "  database:", c: "text-cyan-300" }, { t: ' "PostgreSQL"', c: "text-emerald-400" }, { t: ",", c: "text-muted" }], hideOnMobile: true },
  { tokens: [{ t: "  status:", c: "text-cyan-300" }, { t: ' "shipping"', c: "text-amber-300" }] },
  { tokens: [{ t: "};", c: "text-foreground" }] },
  { tokens: [{ t: "await", c: "text-violet-400" }, { t: " deploy(stack);", c: "text-muted" }], hideOnMobile: true },
];

const techBadges = [
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "TypeScript",
  "GraphQL",
  "TensorFlow",
  "RAG",
  "AWS",
];

export function HeroTechVisual() {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-transparent blur-2xl sm:-inset-4" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0f]/90 shadow-[0_24px_80px_-24px_rgba(34,211,238,0.35)] backdrop-blur-xl sm:rounded-2xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2.5 sm:px-4 sm:py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 sm:h-3 sm:w-3" />
          <span className="ml-1 truncate font-mono text-[10px] text-muted sm:ml-2 sm:text-xs">
            taufiq@portfolio ~ /full-stack
          </span>
        </div>

        <div className="relative border-b border-white/5 px-4 py-5 text-center sm:px-6 sm:py-6 md:py-8">
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
          >
            <span className="bg-gradient-to-br from-cyan-200 to-violet-300 bg-clip-text font-mono text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
              HAT
            </span>
          </motion.div>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/80 sm:mt-3 sm:text-xs sm:tracking-[0.35em]">
            Full-Stack · AI/ML
          </p>
        </div>

        <div className="max-h-[140px] overflow-hidden p-3 font-mono text-[10px] leading-relaxed sm:max-h-none sm:p-4 sm:text-[11px] md:p-5 md:text-xs">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`flex gap-2 sm:gap-3 ${line.hideOnMobile ? "hidden sm:flex" : ""}`}
            >
              <span className="select-none text-white/20">{String(i + 1).padStart(2, "0")}</span>
              <span className="break-all sm:break-normal">
                {line.tokens.map((token, j) => (
                  <span key={j} className={token.c}>
                    {token.t}
                  </span>
                ))}
                {i === codeLines.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-0.5 inline-block h-3 w-1.5 bg-cyan-300 sm:h-3.5 sm:w-2"
                  />
                )}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 border-t border-white/5 bg-white/[0.02] p-3 sm:gap-2 sm:p-4">
          {techBadges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.04 }}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-medium text-muted sm:px-2.5 sm:py-1 sm:text-[10px] md:text-xs"
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_4px_rgba(34,211,238,0.5)] sm:-right-2 sm:-top-2 sm:h-3 sm:w-3"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_3px_rgba(167,139,250,0.45)] sm:h-2 sm:w-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </div>
  );
}
