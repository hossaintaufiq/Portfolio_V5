import {
  siNextdotjs,
  siTypescript,
  siPostgresql,
  siPrisma,
  siExpress,
  siNodedotjs,
  siFastapi,
  siPython,
  siReact,
  siVite,
  siTailwindcss,
  siDocker,
  siSqlite,
  siOllama,
  siOpencv,
  siPytorch,
  siTensorflow,
  siMongodb,
  siMysql,
  siRedux,
  siGit,
  siFigma,
  siFramer,
  siJavascript,
  siHtml5,
  siCss,
  siDjango,
  siGraphql,
  siFirebase,
  siVercel,
  siFfmpeg,
  siLangchain,
  siScikitlearn,
  siNumpy,
  siGooglegemini,
  siGithubactions,
  siGithub,
  siCplusplus,
  siOpenjdk,
  siSocketdotio,
  siRedis,
  siCloudflare,
  siGsap,
  siThreedotjs,
  siBlender,
} from "simple-icons";

export type BrandIcon = { path: string; hex: string; title: string };

const REGISTRY: Record<string, BrandIcon> = {
  nextjs: siNextdotjs,
  typescript: siTypescript,
  postgresql: siPostgresql,
  prisma: siPrisma,
  express: siExpress,
  nodejs: siNodedotjs,
  fastapi: siFastapi,
  python: siPython,
  react: siReact,
  vite: siVite,
  tailwindcss: siTailwindcss,
  docker: siDocker,
  sqlite: siSqlite,
  ollama: siOllama,
  opencv: siOpencv,
  pytorch: siPytorch,
  tensorflow: siTensorflow,
  mongodb: siMongodb,
  mysql: siMysql,
  redux: siRedux,
  git: siGit,
  figma: siFigma,
  framermotion: siFramer,
  javascript: siJavascript,
  html5: siHtml5,
  css3: siCss,
  django: siDjango,
  graphql: siGraphql,
  firebase: siFirebase,
  vercel: siVercel,
  ffmpeg: siFfmpeg,
  langchain: siLangchain,
  scikitlearn: siScikitlearn,
  numpy: siNumpy,
  geminiapi: siGooglegemini,
  githubactions: siGithubactions,
  github: siGithub,
  cpp: siCplusplus,
  java: siOpenjdk,
  websockets: siSocketdotio,
  redis: siRedis,
  cloudflare: siCloudflare,
  gsap: siGsap,
  threejs: siThreedotjs,
  blender: siBlender,
};

const ALIASES: Record<string, string> = {
  expressjs: "express",
  reactjs: "react",
  react19: "react",
  prismaorm: "prisma",
  ollamallms: "ollama",
  pytorchcuda: "pytorch",
  tailwind: "tailwindcss",
  tailwindcss4: "tailwindcss",
  node: "nodejs",
  nextjs16: "nextjs",
  "c": "cpp",
  cloudflarer2: "cloudflare",
  r2: "cloudflare",
  cloudflarecdn: "cloudflare",
  fasterwhisper: "",
};

const normalise = (name: string) =>
  name.toLowerCase().replace(/c\+\+/g, "cpp").replace(/[^a-z0-9]/g, "");

/** Find a brand logo for a technology name, or undefined if there is none. */
export function findIcon(name: string): BrandIcon | undefined {
  const raw = normalise(name);
  const candidates = [raw, raw.replace(/\d+$/, ""), ALIASES[raw], ALIASES[raw.replace(/\d+$/, "")]];
  for (const key of candidates) {
    if (key && REGISTRY[key]) return REGISTRY[key];
  }
  // "PyTorch / CUDA" style names: try the first word-ish token.
  const first = name.split(/[\s/,]+/)[0];
  const k = first ? normalise(first) : "";
  return k && REGISTRY[k] ? REGISTRY[k] : undefined;
}

const INK = "var(--icon-ink)";

/** Brand colour, softened to the page ink when it would be too dark or too light. */
export function iconColor(icon: BrandIcon): string {
  const n = parseInt(icon.hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return lum < 0.18 || lum > 0.78 ? INK : `#${icon.hex}`;
}
