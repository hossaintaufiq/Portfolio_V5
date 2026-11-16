"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { findIcon } from "@/data/icons";

// A live request through a retrieval-augmented backend, the kind of system
// this portfolio's owner builds. It plays once on load, can be replayed, and
// each node can be inspected.

type Node = {
  id: number;
  x: number;
  y: number;
  w: number;
  title: string;
  sub: string;
  detail: string;
  icon?: string;
};

const NODES: Node[] = [
  {
    id: 0,
    x: 60,
    y: 20,
    w: 180,
    title: "Client",
    sub: "Education product",
    detail: "A student or teacher asks a question from inside an education product.",
  },
  {
    id: 1,
    x: 60,
    y: 120,
    w: 180,
    title: "API service",
    icon: "FastAPI",
    sub: "FastAPI, Express",
    detail:
      "Authenticates the caller, enforces role and tenant boundaries, and validates the request.",
  },
  {
    id: 2,
    x: 60,
    y: 230,
    w: 180,
    title: "Retrieval",
    sub: "Vector search, reranking",
    detail:
      "Finds the most relevant text, images and tables. This is the focus of my multimodal RAG research.",
  },
  {
    id: 3,
    x: 60,
    y: 340,
    w: 180,
    title: "Language model",
    sub: "Grounded answer",
    detail:
      "Writes an answer from the retrieved context only, with checks that reduce cross-modal hallucination.",
  },
  {
    id: 5,
    x: 280,
    y: 230,
    w: 130,
    title: "PostgreSQL",
    icon: "PostgreSQL",
    sub: "Tenants, users",
    detail:
      "Stores tenants, users and content, modelled with Prisma and isolated per tenant.",
  },
];

/** Brand colour on the dark hero; very dark logos switch to near-white. */
function onDark(hex: string) {
  const n = parseInt(hex, 16);
  const lum = (0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255;
  return lum < 0.25 ? "#f4f6fa" : `#${hex}`;
}

const RESPONSE_DETAIL =
  "The answer returns to the client with its sources, so users can check where it came from.";
const LAST_STEP = 4;
const STEP_MS = 850;

export default function TraceDiagram() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(0);
  const [reduce, setReduce] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = useCallback(() => {
    clearTimers();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(LAST_STEP);
      setSelected(LAST_STEP);
      return;
    }
    setStep(0);
    setSelected(0);
    for (let s = 1; s <= LAST_STEP; s++) {
      timers.current.push(
        setTimeout(() => {
          setStep(s);
          setSelected(s);
        }, 600 + s * STEP_MS),
      );
    }
  }, []);

  useEffect(() => {
    // Autoplay once on mount; the effect only schedules timers.
    const t = setTimeout(() => {
      setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      play();
    }, 0);
    return () => {
      clearTimeout(t);
      clearTimers();
    };
  }, [play]);

  const inspect = (id: number) => {
    clearTimers();
    setStep(LAST_STEP);
    setSelected(id);
  };

  const detail =
    selected === LAST_STEP
      ? { title: "Response, 200 OK", text: RESPONSE_DETAIL }
      : {
          title: NODES.find((n) => n.id === selected)?.title ?? "",
          text: NODES.find((n) => n.id === selected)?.detail ?? "",
        };

  const seg = (n: number) => ({
    pathLength: 1,
    strokeDasharray: 1,
    strokeDashoffset: step >= n ? 0 : 1,
    style: { transition: "stroke-dashoffset 0.7s ease-out" },
  });

  return (
    <div>
      <svg
        viewBox="0 0 440 400"
        role="group"
        aria-label="Request flow through a retrieval-augmented backend. Select a part to read what it does."
        className="h-auto w-full"
      >
        <g fontFamily="var(--font-plex-sans), system-ui, sans-serif">
          {/* Quiet link: API to database */}
          <path d="M240 142 H345 V230" fill="none" stroke="#4a5677" strokeWidth="1.5" />

          {NODES.map((n) => {
            const active = selected === n.id;
            const reached = n.id === 5 || step >= n.id;
            return (
              <g
                key={n.id}
                role="button"
                tabIndex={0}
                aria-label={`${n.title}: ${n.detail}`}
                aria-pressed={active}
                onClick={() => inspect(n.id)}
                onMouseEnter={() => inspect(n.id)}
                onFocus={() => inspect(n.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    inspect(n.id);
                  }
                }}
                className="cursor-pointer outline-none [&:focus-visible>rect]:stroke-white [&:focus-visible>rect]:stroke-[3]"
              >
                <rect
                  x={n.x}
                  y={n.y}
                  width={n.w}
                  height={44}
                  fill={active ? "#2440d8" : "rgba(255,255,255,0.05)"}
                  stroke={active ? "#a9b8ff" : reached ? "#8f9bbd" : "#4a5677"}
                  strokeWidth={1.5}
                  style={{ transition: "fill 0.3s, stroke 0.3s" }}
                />
                {(() => {
                  const brand = n.icon ? findIcon(n.icon) : undefined;
                  const tx = n.x + (brand ? 40 : 16);
                  return (
                    <>
                      {brand && (
                        <g transform={`translate(${n.x + 14} ${n.y + 13}) scale(${18 / 24})`}>
                          <path d={brand.path} fill={onDark(brand.hex)} />
                        </g>
                      )}
                      <text x={tx} y={n.y + 20} fontSize="14" fontWeight="500" fill="#f4f6fa">
                        {n.title}
                      </text>
                      <text x={tx} y={n.y + 36} fontSize="11" fill={active ? "#dfe5ff" : "#aab4cf"}>
                        {n.sub}
                      </text>
                    </>
                  );
                })()}
              </g>
            );
          })}

          <text x="160" y="97" fontSize="11" fill="#aab4cf">POST /ask</text>
          <text x="160" y="205" fontSize="11" fill="#aab4cf">query</text>
          <text x="160" y="315" fontSize="11" fill="#aab4cf">context</text>
          <text x="300" y="34" fontSize="11" fill="#aab4cf">200 OK</text>
        </g>

        {/* The trace, drawn segment by segment */}
        <g fill="none" stroke="#7f95ff" strokeWidth="2.5" strokeLinejoin="round" pointerEvents="none">
          <path d="M150 64 V120" {...seg(1)} />
          <path d="M150 164 V230" {...seg(2)} />
          <path d="M150 274 V340" {...seg(3)} />
          <path d="M240 362 H425 V42 H240" {...seg(4)} />
        </g>

        {/* Once the trace completes, requests keep flowing through it */}
        {step >= LAST_STEP && !reduce && (
          <g pointerEvents="none">
            {[0, 1.4].map((begin) => (
              <circle key={begin} r={4} fill="#dfe5ff">
                <animateMotion
                  dur="2.8s"
                  begin={`${begin}s`}
                  repeatCount="indefinite"
                  path="M150 64 V120 V164 V230 V274 V340 M150 340 V362 H425 V42 H240"
                />
              </circle>
            ))}
          </g>
        )}
      </svg>

      <div className="mt-4 border-t border-white/15 pt-4" aria-live="polite">
        <p className="font-serif text-lg font-medium">{detail.title}</p>
        <p className="mt-1 min-h-[3.5rem] max-w-[46ch] text-sm leading-relaxed text-[#b5bed3]">
          {detail.text}
        </p>
        <button
          type="button"
          onClick={play}
          className="mt-2 text-sm font-medium underline decoration-white/30 decoration-2 underline-offset-4 hover:decoration-white"
        >
          Replay the request
        </button>
      </div>
    </div>
  );
}
