export type SkillCategory = {
  title: string;
  summary: string;
  items: string[];
};

/** Primary stack signals for recruiters scanning the skills section. */
export const skillHighlights = [
  "Full-Stack Web",
  "JavaScript / TypeScript",
  "Node.js + Express",
  "Python",
  "Java",
  "Kotlin / Android",
] as const;

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    summary:
      "Polyglot foundation across web, backend services, scripting, and mobile clients.",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Kotlin",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frontend",
    summary:
      "Full-stack web UIs — product interfaces, marketing sites, and dashboards with strong UX.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "SEO",
      "Accessibility",
    ],
  },
  {
    title: "Backend",
    summary:
      "APIs and server logic with Node/Express, plus Java and Python for service and tooling work.",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Java",
      "Python",
      "API Design",
      "Webhooks",
    ],
  },
  {
    title: "Data",
    summary:
      "Relational and document stores, caching, and schema design for production query patterns.",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Firebase",
      "Database Design",
      "Indexing",
      "Data Modeling",
    ],
  },
  {
    title: "Mobile",
    summary:
      "Native Android with Kotlin and multi-channel clients wired into shared backends.",
    items: [
      "Kotlin",
      "Android",
      "API Integration",
      "Telegram Bots",
      "Cross-channel UX",
    ],
  },
  {
    title: "Cloud",
    summary:
      "Shipping and running apps with containers, CI/CD, and managed cloud services.",
    items: [
      "AWS",
      "Docker",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Payment Gateways",
    ],
  },
  {
    title: "AI",
    summary:
      "Applied AI and ML — from RAG assistants to research-backed models and automation.",
    items: [
      "Python",
      "OpenAI",
      "LangChain",
      "RAG",
      "Gemini",
      "TensorFlow",
      "PyTorch",
      "Machine Learning",
    ],
  },
  {
    title: "Practice",
    summary:
      "Day-to-day engineering craft that keeps delivery reliable and systems maintainable.",
    items: [
      "System Design",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Figma",
      "Testing",
      "Scalability",
    ],
  },
];
