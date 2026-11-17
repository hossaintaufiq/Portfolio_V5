// The brain of the portfolio guide. It runs in the browser, with no server or
// API key: it matches the visitor's words to an intent and answers from the
// same data that builds the page, so it can never drift from the site.

import { PORTFOLIO_DATA as D, type Project } from "../data/portfolioData";

export type Action =
  | { kind: "nav"; label: string; id: string }
  | { kind: "link"; label: string; href: string };

export type Reply = {
  text: string;
  actions?: Action[];
  /** Suggested next questions, shown as quick replies. */
  chips?: string[];
  /** Section or project id to scroll to straight away. */
  autoNav?: string;
};

export const FIRST_CHIPS = [
  "Show projects",
  "Where has he worked?",
  "Skills",
  "Resume",
  "How do I contact him?",
];

const FEATURED = ["softlligence-cloud", "kia-bangladesh", "playpen-school", "lucy-ai-assistant"];

const NAMES: Record<string, string> = {
  "softlligence-cloud": "Softlligence Manufacturing Cloud",
  "playpen-school": "Playpen School website",
  "mango-ev": "Mango Electric Vehicle website",
  "kia-bangladesh": "Kia Bangladesh",
  "focusflow-app": "FocusFlow",
  "handtrack-studio": "HandTrack Studio",
  "lucy-ai-assistant": "Lucy",
  "uni-admission-portal": "University admission portal",
  "neptune-shorts": "Neptune Shorts",
  "dhaka-road-network": "Dhaka Road Network",
  "acumens-media": "AcuMens Media",
};

const ALIASES: Record<string, string[]> = {
  "softlligence-cloud": ["softlligence", "manufacturing cloud", "erp", "mis", "steel mill", "garments", "saas"],
  "kia-bangladesh": ["kia", "showroom"],
  "playpen-school": ["playpen", "school", "cms"],
  "lucy-ai-assistant": ["lucy", "voice assistant", "jarvis", "assistant"],
  "mango-ev": ["mango", "ev", "electric vehicle"],
  "focusflow-app": ["focusflow", "productivity", "desktop app"],
  "handtrack-studio": ["handtrack", "gesture", "jigsaw", "hand tracking"],
  "uni-admission-portal": ["admission portal", "university portal"],
  "neptune-shorts": ["neptune shorts", "shorts", "video to shorts"],
  "dhaka-road-network": ["dhaka road", "routing", "road network", "dijkstra"],
  "acumens-media": ["acumens", "media agency"],
};

/* --------------------------------- helpers -------------------------------- */

const esc = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** True when the text contains the term as a whole word or phrase. */
const has = (text: string, term: string) =>
  new RegExp(`(^|[^a-z0-9+#])${esc(term)}($|[^a-z0-9+#])`, "i").test(text);

const hasAny = (text: string, terms: string[]) => terms.some((t) => has(text, t));

const norm = (s: string) => s.toLowerCase().replace(/\.js\b/g, "").replace(/[^a-z0-9+#]/g, "");

const firstSentence = (s: string) => {
  const m = s.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : s).trim();
};

const isSpecific = (url?: string) => {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.hostname !== "github.com" || u.pathname.split("/").filter(Boolean).length >= 2;
  } catch {
    return false;
  }
};

const list = (items: string[]) => items.map((i) => `• ${i}`).join("\n");

const shortCompany = (c: string) => (c.startsWith("Edumax") ? "Edumax Labs" : c);

const RESEARCH_TITLES: Record<string, string> = {
  "res-rag": "Multimodal RAG with cross-modal hallucination reduction",
  "res-multitask": "Multi-task learning for band gap and formation energy prediction",
  "res-stock": "Validating stock market price prediction algorithms",
  "res-neptune": "NEPTUNE: a quantitative research and paper trading platform",
};

const SHORT_LABEL: Record<string, string> = {
  "softlligence-cloud": "Softlligence",
  "kia-bangladesh": "Kia",
  "playpen-school": "Playpen",
  "lucy-ai-assistant": "Lucy",
};

const projectName = (p: Project) => NAMES[p.id] ?? p.title;
const navId = (p: Project) => (FEATURED.includes(p.id) ? p.id : "more-projects");

/* ------------------------------ knowledge sets ---------------------------- */

const techVocabulary = (() => {
  const names = new Set<string>();
  D.projects.forEach((p) => p.technologies.forEach((t) => names.add(t)));
  D.skills.forEach((c) => c.skills.forEach((s) => names.add(s)));
  D.experience.forEach((e) => e.technologies.forEach((t) => names.add(t)));
  return [...names]
    .filter((n) => n.length >= 3 && !/[/&(]/.test(n))
    .map((n) => ({ name: n, key: norm(n), terms: [n.toLowerCase(), n.toLowerCase().replace(/\.js\b/, "")] }));
})();

const pageActions = {
  contact: { kind: "nav", label: "Go to Contact", id: "contact" } as Action,
  work: { kind: "nav", label: "Go to Work", id: "work" } as Action,
  experience: { kind: "nav", label: "Go to Experience", id: "experience" } as Action,
};

/* --------------------------------- answers -------------------------------- */

function aboutProject(p: Project): Reply {
  const live = isSpecific(p.liveUrl) ? p.liveUrl : undefined;
  const source = isSpecific(p.githubUrl) ? p.githubUrl : undefined;
  const story = p.result ?? firstSentence(p.description);
  const tech = p.technologies.slice(0, 6).join(", ");
  const status = p.status ? ` Status: ${p.status.toLowerCase()}.` : "";
  const actions: Action[] = [{ kind: "nav", label: "Jump to project", id: navId(p) }];
  if (live) actions.push({ kind: "link", label: "Visit the site", href: live });
  if (source) actions.push({ kind: "link", label: "Read the source", href: source });
  return {
    text: `${projectName(p)}: ${p.subtitle}.\n${story}${status}\nBuilt with ${tech}.`,
    actions,
    chips: ["Show projects", "Where has he worked?", "How do I contact him?"],
    autoNav: navId(p),
  };
}

function aboutTech(key: string, name: string): Reply | null {
  const used = D.projects.filter((p) => p.technologies.some((t) => norm(t) === key));
  const roles = D.experience.filter((e) => e.technologies.some((t) => norm(t) === key));
  const inSkills = D.skills.some((c) => c.skills.some((s) => norm(s) === key));
  if (!used.length && !roles.length && !inSkills) return null;
  const parts: string[] = [];
  if (used.length) parts.push(`Projects: ${used.map(projectName).join(", ")}.`);
  if (roles.length) parts.push(`Roles: ${roles.map((e) => shortCompany(e.company)).join(", ")}.`);
  const actions: Action[] = [{ kind: "nav", label: "See Skills", id: "skills" }];
  if (used[0]) actions.unshift({ kind: "nav", label: `See ${projectName(used[0])}`, id: navId(used[0]) });
  return {
    text: `Yes, ${name} is part of his toolkit.\n${parts.join("\n")}`.trim(),
    actions,
    chips: ["Show projects", "Skills", "Resume"],
  };
}

const whatsapp = `https://wa.me/${D.identity.phone.replace(/\D/g, "")}`;

export function reply(input: string): Reply {
  const text = input.toLowerCase().trim();
  const words = text.split(/\s+/).filter(Boolean);
  const wantsGo = hasAny(text, ["go", "take", "show", "open", "scroll", "navigate", "jump", "bring", "see"]);
  const short = words.length <= 3;

  if (!text) {
    return { text: "Ask me about his projects, experience or skills, or tell me where to take you.", chips: FIRST_CHIPS };
  }

  // Greetings and goodbyes.
  if (short && hasAny(text, ["hi", "hello", "hey", "salam", "assalamu alaikum", "good morning", "good evening"])) {
    return {
      text: "Hi, I am the guide for Taufiq's portfolio. I can answer questions about his work and take you straight to any part of the page. What would you like to see?",
      chips: FIRST_CHIPS,
    };
  }
  if (hasAny(text, ["thanks", "thank you", "thx", "bye", "goodbye"])) {
    return {
      text: "You are welcome. If you would like to talk to him directly, the contact section is one click away.",
      actions: [pageActions.contact],
      chips: ["Show projects", "Resume"],
    };
  }

  // Resume.
  if (hasAny(text, ["resume", "cv", "curriculum vitae", "download"])) {
    return {
      text: "Here is his resume as a PDF.",
      actions: [{ kind: "link", label: "Open resume", href: "/resume.pdf" }, pageActions.contact],
      chips: ["Where has he worked?", "Skills", "How do I contact him?"],
    };
  }

  // Contact and hiring.
  if (
    hasAny(text, ["contact", "email", "mail", "phone", "call", "whatsapp", "linkedin", "github", "reach", "hire", "hiring", "talk to", "message", "get in touch"])
  ) {
    return {
      text: `You can reach him at ${D.identity.email} or on ${D.identity.phone}. ${D.identity.availability}.`,
      actions: [
        { kind: "link", label: "Email", href: `mailto:${D.identity.email}` },
        { kind: "link", label: "WhatsApp", href: whatsapp },
        { kind: "link", label: "LinkedIn", href: D.identity.links.linkedin },
        { kind: "link", label: "GitHub", href: D.identity.links.github },
        pageActions.contact,
      ],
      chips: ["Resume", "Show projects"],
      autoNav: wantsGo ? "contact" : undefined,
    };
  }

  // A specific project by name.
  const named = D.projects.find((p) =>
    [projectName(p).toLowerCase(), ...(ALIASES[p.id] ?? [])].some((t) => has(text, t)),
  );
  if (named && !hasAny(text, ["all projects", "projects"])) return aboutProject(named);

  // NEPTUNE, the trading research.
  if (hasAny(text, ["neptune", "trading", "trading bot", "quant", "quantitative", "crypto", "cryptocurrency", "backtest", "look-ahead"])) {
    return {
      text: "NEPTUNE is his independent research platform for cryptocurrency trading, paper trading only. Ten specialist AI agents are coordinated by a central brain, and every paper trade goes through an independent risk manager.\nHe found and documented a look-ahead bias in his first strategy, fixed it, and reported the honest result: it was not profitable. The current daily trend rule returned +52% against -44% for buy and hold across 36 coins, with the limits stated openly.",
      actions: [
        { kind: "nav", label: "See the research", id: "research" },
        { kind: "link", label: "Read the source", href: "https://github.com/hossaintaufiq/Trading_Bot" },
      ],
      chips: ["Research", "Show projects", "Skills"],
      autoNav: "research",
    };
  }

  // Edumax and the speech work.
  if (hasAny(text, ["edumax", "stt", "tts", "speech", "speaking", "25 tk", "cost per session"])) {
    const e = D.experience[0];
    return {
      text: `${e.role} at ${shortCompany(e.company)} since 10 November 2026.\nHe is responsible for the speech-to-text and text-to-speech pipeline behind students' speaking practice, aiming to cut the cost per session from 25 tk to under 10 tk.`,
      actions: [pageActions.experience],
      chips: ["Show projects", "Skills", "Research"],
      autoNav: "experience",
    };
  }

  // Founder and Softlligence the company.
  if (hasAny(text, ["founder", "founded", "startup", "company", "softlligence technologies"])) {
    return {
      text: `He founded Softlligence Technologies, an engineering studio that ships multi-tenant ERP for manufacturers. Its main product is the Softlligence Manufacturing Cloud, with four Next.js apps on one Express backend.`,
      actions: [
        { kind: "nav", label: "Show the project", id: "softlligence-cloud" },
        { kind: "link", label: "softlligence.tech", href: D.identity.links.softlligence },
      ],
      chips: ["Where has he worked?", "Skills"],
      autoNav: "softlligence-cloud",
    };
  }

  // A technology by name.
  const tech = techVocabulary.find((t) => t.terms.some((term) => has(text, term)));
  if (tech) {
    const answer = aboutTech(tech.key, tech.name);
    if (answer) return answer;
  }

  // Sections.
  if (hasAny(text, ["experience", "worked", "work history", "career", "job", "jobs", "role", "roles", "employer", "currently"])) {
    const lines = D.experience.slice(0, 4).map((e) => `${e.role}, ${shortCompany(e.company)} (${e.period})`);
    return {
      text: `Recent roles:\n${list(lines)}`,
      actions: [pageActions.experience],
      chips: ["Show projects", "Skills", "Resume"],
      autoNav: "experience",
    };
  }
  if (hasAny(text, ["research", "paper", "papers", "publication", "publications", "rag", "thesis"])) {
    const lines = D.research.map((r) => RESEARCH_TITLES[r.id] ?? r.title);
    return {
      text: `He researches at North South University:\n${list(lines)}`,
      actions: [{ kind: "nav", label: "Go to Research", id: "research" }],
      chips: ["Where has he worked?", "Skills", "Education"],
      autoNav: "research",
    };
  }
  if (hasAny(text, ["education", "degree", "university", "cgpa", "gpa", "study", "studying", "nsu", "college", "certification", "certifications", "volunteer", "volunteering"])) {
    const nsu = D.education[0];
    return {
      text: `${nsu.degree}, ${nsu.institution}. CGPA ${nsu.cgpa}, expected ${nsu.timeline.replace("Expected: ", "")}. Before that, HSC Science at Notre Dame College with a perfect 5.00.`,
      actions: [{ kind: "nav", label: "Go to Background", id: "background" }],
      chips: ["Research", "Resume"],
      autoNav: "background",
    };
  }
  if (hasAny(text, ["skills", "skill", "stack", "tech", "technologies", "tools", "languages", "toolkit"])) {
    const pick = D.skills.slice(1, 4).map((c) => `${c.name.charAt(0)}${c.name.slice(1).toLowerCase()}: ${c.skills.slice(0, 5).join(", ")}`);
    return {
      text: `His strongest areas:\n${list(pick)}`,
      actions: [{ kind: "nav", label: "Go to Skills", id: "skills" }],
      chips: ["Show projects", "Express", "Redis"],
      autoNav: "skills",
    };
  }
  if (hasAny(text, ["project", "projects", "portfolio", "built", "build", "work", "works", "apps", "websites"])) {
    const lines = FEATURED.map((id) => D.projects.find((p) => p.id === id))
      .filter((p): p is Project => Boolean(p))
      .map((p) => `${projectName(p)}: ${p.subtitle}`);
    return {
      text: `Four featured projects:\n${list(lines)}\nThere are more below them.`,
      actions: [
        ...FEATURED.map((id): Action => ({ kind: "nav", label: SHORT_LABEL[id], id })),
        { kind: "nav", label: "More projects", id: "more-projects" },
      ],
      chips: ["Kia Bangladesh", "Playpen School", "Where has he worked?"],
      autoNav: "work",
    };
  }

  // Availability, location, who is he.
  if (hasAny(text, ["available", "availability", "open to", "looking for", "where is he", "located", "location", "based", "dhaka", "timezone", "time zone"])) {
    return {
      text: `${D.identity.availability}. He is based in ${D.identity.location} (GMT+6).`,
      actions: [{ kind: "link", label: "Email", href: `mailto:${D.identity.email}` }, pageActions.contact],
      chips: ["Resume", "Show projects"],
    };
  }
  if (hasAny(text, ["who", "about", "introduce", "yourself", "summary", "taufiq", "hossain"])) {
    return {
      text: "Hossain Ahmmed Taufiq is a software engineer focused on backend and AI/ML systems. He is the founder of Softlligence Technologies and a backend AI engineer at Edumax Labs, and he is finishing his computer science degree at North South University in Dhaka.",
      actions: [pageActions.work, pageActions.experience],
      chips: ["Show projects", "Where has he worked?", "Resume"],
    };
  }

  return {
    text: "I did not catch that. I can answer questions about his projects, experience, skills, research and education, take you to any section, or share his contact details.",
    chips: FIRST_CHIPS,
  };
}
