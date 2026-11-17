import { Fragment } from "react";

// The phrases worth catching the eye in project and experience copy. Longer
// phrases are tried first so they win over the shorter ones inside them.
const TERMS = [
  "multi-tenant",
  "tenant isolation",
  "tenant data",
  "Four Next.js apps",
  "one Express backend",
  "tenant resolution",
  "RBAC",
  "Redis caching",
  "Cloudflare R2",
  "Cloudflare CDN",
  "industry-template framework",
  "payment gateway",
  "CMS",
  "live updates",
  "online admissions",
  "3D",
  "Three.js",
  "Blender",
  "GSAP",
  "Core Web Vitals",
  "server-rendered",
  "ordinary CPU laptop",
  "nothing leaving the machine",
  "speech-to-text and text-to-speech",
  "speech-to-text",
  "25 tk to under 10 tk",
  "20%",
  "Fortune 500",
  "retrieval-augmented",
  "RAG",
  "LLM",
  "cross-service latency",
  "ahead of schedule",
  "without waiting for a developer",
  "configuration, not a rebuild",
  "look-ahead bias",
  "look-ahead",
  "paper trading",
  "survivorship bias",
  "ten specialist AI agents",
];

const escape = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const PATTERN = new RegExp(
  `(?<![\\w-])(${[...TERMS]
    .sort((a, b) => b.length - a.length)
    .map(escape)
    .join("|")})(?![\\w-])`,
  "gi",
);

/** Text with its key phrases marked like a highlighter pen. */
export default function Highlight({ text }: { text: string }) {
  const parts = text.split(PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="hl">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
