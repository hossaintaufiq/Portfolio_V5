"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function DashboardMock({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("panel p-4 sm:p-5", className)}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
            Operations
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            Production Control
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300">
          Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Latency", value: "38ms" },
          { label: "Throughput", value: "12.4k" },
          { label: "Error rate", value: "0.04%" },
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            className="rounded-xl border border-border bg-black/25 p-3"
            animate={reduce ? undefined : { y: [0, -2, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] uppercase tracking-wider text-muted">
              {metric.label}
            </p>
            <p className="mt-2 font-mono text-sm text-sky-200">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-border bg-black/25 p-3">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs text-muted">Request volume</p>
          <p className="text-xs text-accent-gold">+18%</p>
        </div>
        <div className="flex h-20 items-end gap-1.5">
          {[35, 48, 42, 60, 55, 72, 68, 80, 74, 88, 82, 94].map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-sky-500/20 via-sky-400/50 to-violet-300/70"
              style={{ height: `${h}%` }}
              animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.07 }}
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
    { c: "fn", t: " shipPlatform" },
    { c: "plain", t: "(spec: SystemSpec) {" },
    { c: "plain", t: "  const architecture = await design(spec);" },
    { c: "plain", t: "  const services = compose(architecture);" },
    { c: "plain", t: "  return deploy(services, {" },
    { c: "string", t: '    mode: "production",' },
    { c: "string", t: '    observe: true,' },
    { c: "plain", t: "  });" },
    { c: "plain", t: "}" },
  ];

  return (
    <div className={cn("panel overflow-hidden", className)}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-muted">
          architecture.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-6 sm:text-xs">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            <span className="mr-3 inline-block w-4 text-right text-white/20">
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
    <div className={cn("panel p-4 sm:p-5", className)}>
      <p className="text-[10px] uppercase tracking-[0.2em] text-accent-gold">
        Architecture
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">Service topology</p>
      <svg viewBox="0 0 420 180" className="mt-4 h-auto w-full" aria-hidden>
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
    <div className={cn("panel p-4 sm:p-5", className)}>
      <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
        Delivery
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">CI / CD pipeline</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
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
