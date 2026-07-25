"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function DashboardMock({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("panel p-3.5 sm:p-5", className)}>
      <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
            Operations
          </p>
          <p className="mt-1 truncate text-sm font-medium text-foreground">
            Production Control
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300">
          Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {[
          { label: "Latency", value: "38ms" },
          { label: "Throughput", value: "12.4k" },
          { label: "Error rate", value: "0.04%" },
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            className="rounded-xl border border-border bg-black/25 p-2.5 sm:p-3"
            animate={reduce ? undefined : { y: [0, -2, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[9px] uppercase tracking-wider text-muted sm:text-[10px]">
              {metric.label}
            </p>
            <p className="mt-1.5 font-mono text-xs text-sky-200 sm:mt-2 sm:text-sm">
              {metric.value}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-2.5 rounded-xl border border-border bg-black/25 p-2.5 sm:mt-3 sm:p-3">
        <div className="mb-2.5 flex items-center justify-between sm:mb-3">
          <p className="text-xs text-muted">Request volume</p>
          <p className="text-xs text-accent-gold">+18%</p>
        </div>
        <div className="flex h-14 items-end gap-1 sm:h-20 sm:gap-1.5">
          {[35, 48, 42, 60, 55, 72, 68, 80, 74, 88, 82, 94].map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-sky-500/20 via-sky-400/50 to-violet-300/70"
              style={{ height: `${h}%` }}
              animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.08 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CodeWindow({ className }: { className?: string }) {
  const lines = [
    { c: "keyword", t: "export async function" },
    { c: "fn", t: " ship(spec) {" },
    { c: "plain", t: "  const arch = await design(spec);" },
    { c: "plain", t: "  return deploy(arch, {" },
    { c: "string", t: '    mode: "production",' },
    { c: "string", t: "    observe: true," },
    { c: "plain", t: "  });" },
    { c: "plain", t: "}" },
  ] as const;

  return (
    <div className={cn("panel overflow-hidden", className)}>
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5 sm:px-4 sm:py-3">
        <span className="h-2 w-2 rounded-full bg-rose-400/70 sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-amber-300/70 sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70 sm:h-2.5 sm:w-2.5" />
        <span className="ml-1.5 truncate font-mono text-[10px] uppercase tracking-widest text-muted">
          architecture.ts
        </span>
      </div>
      <pre className="overflow-hidden p-3 font-mono text-[10px] leading-5 sm:p-4 sm:text-[11px] sm:leading-6">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            <span className="mr-2 inline-block w-3 text-right text-white/20 sm:mr-3 sm:w-4">
              {i + 1}
            </span>
            <span
              className={cn(
                line.c === "keyword" && "text-violet-300",
                line.c === "fn" && "text-sky-300",
                line.c === "string" && "text-amber-200/90",
                line.c === "plain" && "text-slate-300",
              )}
            >
              {line.t}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}

export function ArchitectureDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("panel overflow-hidden p-3.5 sm:p-5", className)}>
      <p className="text-[10px] uppercase tracking-[0.2em] text-accent-gold">
        Architecture
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">Service topology</p>
      <svg
        viewBox="0 0 420 180"
        className="mt-3 h-auto w-full max-h-36 sm:mt-4 sm:max-h-none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="archLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8b7cf6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d4a574" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path
          d="M70 90 H150 M150 90 C190 90 190 40 230 40 H320 M150 90 C190 90 190 140 230 140 H320"
          stroke="url(#archLine)"
          strokeWidth="1.5"
          fill="none"
        />
        {[
          { x: 40, y: 72, label: "Client" },
          { x: 132, y: 72, label: "API" },
          { x: 302, y: 22, label: "Workers" },
          { x: 302, y: 122, label: "Data" },
        ].map((node) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y={node.y}
              width="56"
              height="36"
              rx="10"
              fill="rgba(15,23,42,0.9)"
              stroke="rgba(148,163,184,0.3)"
            />
            <text
              x={node.x + 28}
              y={node.y + 22}
              textAnchor="middle"
              fill="#cbd5e1"
              fontSize="10"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function PipelineMock({ className }: { className?: string }) {
  const stages = ["Build", "Test", "Secure", "Deploy", "Observe"];
  return (
    <div className={cn("panel overflow-hidden p-3.5 sm:p-5", className)}>
      <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
        Delivery
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">CI / CD pipeline</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5">
        {stages.map((stage, i) => (
          <div key={stage} className="flex items-center gap-2">
            <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs text-sky-100">
              {stage}
            </span>
            {i < stages.length - 1 && (
              <span className="hidden h-px w-4 bg-gradient-to-r from-sky-400/50 to-violet-400/40 sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
