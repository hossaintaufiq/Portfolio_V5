"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Globe,
  Users,
  Image as ImageIcon,
  Zap,
  CalendarCheck,
  Mail,
  CreditCard,
  ShieldCheck,
  Building2,
  KeyRound,
  Package,
  Factory,
  Receipt,
  ChartColumn,
  LayoutTemplate,
  Sparkles,
  Mic,
  Volume2,
  AudioLines,
  BookOpen,
  Terminal,
  Landmark,
} from "lucide-react";
import {
  NODE_H,
  NODE_W,
  type Architecture,
  type ArchNode,
  type Glyph,
} from "@/data/architectures";
import { findIcon, iconColor } from "@/data/icons";

const GLYPHS: Record<Glyph, typeof Globe> = {
  globe: Globe,
  users: Users,
  image: ImageIcon,
  zap: Zap,
  calendar: CalendarCheck,
  mail: Mail,
  card: CreditCard,
  shield: ShieldCheck,
  building: Building2,
  key: KeyRound,
  package: Package,
  factory: Factory,
  receipt: Receipt,
  chart: ChartColumn,
  template: LayoutTemplate,
  sparkles: Sparkles,
  mic: Mic,
  volume: Volume2,
  audio: AudioLines,
  book: BookOpen,
  terminal: Terminal,
  landmark: Landmark,
};

const INK = "#16213a";
const MUTED = "#56607a";
const SIGNAL = "#2440d8";

/** The tip and heading of a path made of M, L, H and V commands. */
function endOf(d: string) {
  const re = /([MLHV])([^MLHV]*)/g;
  let x = 0;
  let y = 0;
  let dx = 1;
  let dy = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(d))) {
    const n = m[2].trim().split(/[\s,]+/).map(Number);
    const px = x;
    const py = y;
    if (m[1] === "M" || m[1] === "L") {
      x = n[0];
      y = n[1];
    } else if (m[1] === "H") x = n[0];
    else y = n[0];
    if (m[1] !== "M" && (x !== px || y !== py)) {
      dx = x - px;
      dy = y - py;
    }
  }
  return { x, y, angle: (Math.atan2(dy, dx) * 180) / Math.PI };
}

const T = {
  zone: 0.045,
  node: 0.05,
  edgeStart: 0.8,
  edgeStep: 0.09,
  draw: 0.6,
};

export default function ArchDiagram({ arch }: { arch: Architecture }) {
  const ref = useRef<SVGSVGElement>(null);
  const [shown, setShown] = useState(false);
  const [flow, setFlow] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t0 = setTimeout(
      () => setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches),
      0,
    );
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      clearTimeout(t0);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!shown || reduce) return;
    const total = (T.edgeStart + arch.edges.length * T.edgeStep + T.draw + 0.3) * 1000;
    const t = setTimeout(() => setFlow(true), total);
    return () => clearTimeout(t);
  }, [shown, reduce, arch.edges.length]);

  const visible = shown || reduce;
  const byId = useMemo(() => new Map(arch.nodes.map((n) => [n.id, n])), [arch.nodes]);

  const related = useMemo(() => {
    if (!active) return null;
    const ids = new Set<string>([active]);
    arch.edges.forEach((e) => {
      if (e.from === active) ids.add(e.to);
      if (e.to === active) ids.add(e.from);
    });
    return ids;
  }, [active, arch.edges]);

  const activeNode = active ? byId.get(active) : undefined;

  const renderMark = (n: ArchNode) => {
    const x = n.x + 14;
    const y = n.y + (n.h ?? NODE_H) / 2 - 8;
    const brand = n.icon ? findIcon(n.icon) : undefined;
    if (brand) {
      return (
        <g transform={`translate(${x} ${y}) scale(${16 / 24})`}>
          <path d={brand.path} fill={iconColor(brand)} />
        </g>
      );
    }
    if (n.glyph) {
      const Glyph = GLYPHS[n.glyph];
      return <Glyph x={x} y={y} width={16} height={16} strokeWidth={1.75} color={SIGNAL} />;
    }
    return null;
  };

  return (
    <figure className="mt-8 md:-ml-[14rem]">
      <div className="overflow-x-auto border border-rule bg-white/55">
        <svg
          ref={ref}
          viewBox={arch.viewBox}
          role="group"
          aria-label={arch.label}
          className="h-auto w-full min-w-[860px]"
          onMouseLeave={() => setActive(null)}
        >
          <g fontFamily="var(--font-plex-sans), system-ui, sans-serif">
            {/* Boundaries */}
            {arch.zones.map((z, i) => (
              <g
                key={z.label}
                style={{
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.6s ease-out ${i * T.zone}s`,
                }}
              >
                <rect
                  x={z.x}
                  y={z.y}
                  width={z.w}
                  height={z.h}
                  fill={z.outer ? "rgba(36,64,216,0.035)" : "rgba(22,33,58,0.03)"}
                  stroke={z.outer ? "#9fb0f5" : "#b4bccb"}
                  strokeWidth={1}
                  strokeDasharray="5 5"
                />
                <text x={z.x + 12} y={z.y + 18} fontSize="11" fontWeight="500" fill={MUTED}>
                  {z.label}
                </text>
              </g>
            ))}

            {/* Connections: faint track, then the drawn line */}
            {arch.edges.map((e, i) => {
              const hot = !active || e.from === active || e.to === active;
              const end = endOf(e.d);
              const delay = T.edgeStart + i * T.edgeStep;
              const colour = e.quiet ? "#8d97ad" : SIGNAL;
              return (
                <g
                  key={i}
                  fill="none"
                  strokeLinejoin="round"
                  style={{ opacity: hot ? 1 : 0.18, transition: "opacity 0.25s" }}
                >
                  <path d={e.d} stroke="#d3d8e2" strokeWidth={1.5} />
                  <path
                    d={e.d}
                    pathLength={1}
                    stroke={colour}
                    strokeWidth={e.quiet ? 1.5 : 2}
                    strokeDasharray={e.quiet ? "4 4" : 1}
                    strokeDashoffset={visible || e.quiet ? 0 : 1}
                    style={
                      e.quiet
                        ? {
                            opacity: visible ? 1 : 0,
                            transition: `opacity 0.5s ease-out ${delay}s`,
                          }
                        : { transition: `stroke-dashoffset ${T.draw}s ease-out ${delay}s` }
                    }
                  />
                  {e.arrow !== false && (
                    <path
                      d="M0 0 L-8 -4.2 L-8 4.2 Z"
                      fill={colour}
                      stroke="none"
                      transform={`translate(${end.x} ${end.y}) rotate(${end.angle})`}
                      style={{
                        opacity: visible ? 1 : 0,
                        transition: `opacity 0.3s ease-out ${delay + T.draw}s`,
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Edge labels */}
            {arch.edges.map(
              (e, i) =>
                e.label && (
                  <text
                    key={`l${i}`}
                    x={e.label.x}
                    y={e.label.y}
                    fontSize="10.5"
                    fill={MUTED}
                    stroke="#f4f6f9"
                    strokeWidth={4}
                    paintOrder="stroke"
                    style={{
                      opacity: visible && (!active || e.from === active || e.to === active) ? 1 : 0,
                      transition: `opacity 0.4s ease-out ${visible && !active ? T.edgeStart + i * T.edgeStep + T.draw : 0}s`,
                    }}
                  >
                    {e.label.text}
                  </text>
                ),
            )}

            {/* Nodes */}
            {arch.nodes.map((n, i) => {
              const w = n.w ?? NODE_W;
              const h = n.h ?? NODE_H;
              const isActive = active === n.id;
              const dim = related && !related.has(n.id);
              const pick = () => setActive(n.id);
              return (
                <g
                  key={n.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`${n.title}. ${n.desc}`}
                  aria-pressed={isActive}
                  onMouseEnter={pick}
                  onFocus={pick}
                  onBlur={() => setActive(null)}
                  onClick={pick}
                  onKeyDown={(ev) => {
                    if (ev.key === "Escape") setActive(null);
                  }}
                  className="cursor-pointer outline-none [&:focus-visible>rect]:stroke-[#2440d8] [&:focus-visible>rect]:stroke-[3]"
                  style={{
                    opacity: visible ? (dim ? 0.3 : 1) : 0,
                    transition: `opacity ${visible && active ? 0.2 : 0.5}s ease-out ${
                      visible && !active ? 0.3 + i * T.node : 0
                    }s`,
                  }}
                >
                  <rect
                    x={n.x}
                    y={n.y}
                    width={w}
                    height={h}
                    fill={isActive ? "#eef1ff" : "#fbfcfd"}
                    stroke={isActive ? SIGNAL : INK}
                    strokeWidth={isActive ? 1.75 : 1.25}
                    style={{ transition: "fill 0.2s, stroke 0.2s" }}
                  />
                  {renderMark(n)}
                  <text
                    x={n.x + (n.icon || n.glyph ? 38 : 14)}
                    y={n.sub ? n.y + 23 : n.y + h / 2 + 4.5}
                    fontSize="13"
                    fontWeight="500"
                    fill={INK}
                  >
                    {n.title}
                  </text>
                  {n.sub && (
                    <text
                      x={n.x + (n.icon || n.glyph ? 38 : 14)}
                      y={n.y + 39}
                      fontSize="10.5"
                      fill={MUTED}
                    >
                      {n.sub}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Data packets travelling along the main connections */}
            {flow && !active &&
              arch.edges
                .filter((e) => !e.quiet)
                .map((e, i) => (
                  <circle key={`p${i}`} r={3.5} fill={SIGNAL} pointerEvents="none">
                    <animateMotion
                      dur="2.4s"
                      begin={`${(i % 5) * 0.4}s`}
                      repeatCount="indefinite"
                      path={e.d}
                    />
                  </circle>
                ))}
          </g>
        </svg>
      </div>
      <figcaption
        aria-live="polite"
        className="mt-3 min-h-[4.25rem] max-w-[68ch] text-sm leading-relaxed text-muted md:ml-[14rem]"
      >
        {activeNode ? (
          <>
            <span className="font-medium text-ink">{activeNode.title}. </span>
            {activeNode.desc}
          </>
        ) : (
          arch.caption
        )}
      </figcaption>
    </figure>
  );
}
