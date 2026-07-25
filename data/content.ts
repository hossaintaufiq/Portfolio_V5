export const philosophy = [
  {
    title: "Clean Architecture",
    description:
      "Clear boundaries between UI, domain, and infrastructure so systems stay understandable as they grow.",
  },
  {
    title: "Maintainability",
    description:
      "Code should be readable by the next engineer — including future me — without archaeological digging.",
  },
  {
    title: "Scalability",
    description:
      "Design for realistic load, graceful failure modes, and growth paths instead of premature complexity.",
  },
  {
    title: "Developer Experience",
    description:
      "Good tooling, typed contracts, and predictable workflows reduce friction and raise delivery quality.",
  },
  {
    title: "Performance",
    description:
      "Fast interfaces and efficient backends are product features — measured, not guessed.",
  },
  {
    title: "Accessibility",
    description:
      "Interfaces should work for more people by default: keyboard, contrast, semantics, and reduced motion.",
  },
  {
    title: "Security",
    description:
      "Auth, validation, least privilege, and safe defaults belong in the architecture — not as afterthoughts.",
  },
  {
    title: "Long-term thinking",
    description:
      "Ship value now without trapping the system in decisions that cannot be evolved later.",
  },
] as const;

export const whatIBuild = [
  {
    title: "Enterprise Software",
    items: ["ERP", "CRM", "CMS", "MES", "Business Dashboards"],
  },
  {
    title: "AI Systems",
    items: ["RAG pipelines", "Local LLM assistants", "Automation", "ML workflows"],
  },
  {
    title: "Internal Tools",
    items: ["Admin panels", "Ops dashboards", "Workflow systems"],
  },
  {
    title: "Web Applications",
    items: ["SaaS products", "Marketing platforms", "Institutional sites"],
  },
  {
    title: "Mobile Applications",
    items: ["Android clients", "Cross-channel product surfaces"],
  },
  {
    title: "Developer Platforms",
    items: ["Desktop tooling", "Local-first apps", "API-backed products"],
  },
] as const;

export const systemDesignSteps = [
  {
    title: "Discovery",
    description: "Clarify goals, constraints, users, and success criteria before committing architecture.",
  },
  {
    title: "Architecture",
    description: "Define service boundaries, data flow, trust zones, and the simplest design that can grow.",
  },
  {
    title: "Database",
    description: "Model entities, indexes, and consistency needs around real query patterns.",
  },
  {
    title: "Backend",
    description: "Build APIs, auth, validation, and domain logic with observability in mind.",
  },
  {
    title: "Frontend",
    description: "Ship clear interfaces with strong hierarchy, accessibility, and predictable state.",
  },
  {
    title: "Testing",
    description: "Cover critical paths, regressions, and contracts that protect production confidence.",
  },
  {
    title: "Deployment",
    description: "Automate releases with CI/CD, environment parity, and safe rollout habits.",
  },
  {
    title: "Monitoring",
    description: "Watch latency, errors, and product signals so issues surface before users do.",
  },
  {
    title: "Maintenance",
    description: "Iterate with debt awareness — improve operability while continuing to deliver.",
  },
] as const;

export const achievements = [
  {
    category: "Engineering",
    items: [
      "Shipped production platforms for education, EV, and SaaS clients",
      "Built multi-channel AI CRM spanning web, Android, and Telegram",
      "Designed local-first AI assistant with CPU-optimized inference packaging",
    ],
  },
  {
    category: "Leadership",
    items: [
      "Co-founded Softlligence Technologies",
      "Led architecture and technical strategy for enterprise/AI product work",
      "Owned client discovery and product planning conversations",
    ],
  },
  {
    category: "Research",
    items: [
      "Active deep-learning research on EEG-based epilepsy detection",
      "Multimodal RAG with cross-modal hallucination reduction",
      "Published multi-task ML and stock prediction research work",
    ],
  },
  {
    category: "Academic",
    items: [
      "B.Sc. CSE at North South University — CGPA 3.83 / 4.00",
      "HSC Science — GPA 5.00 / 5.00 (Notre Dame College)",
      "Relevant depth across systems, ML, and software engineering coursework",
    ],
  },
] as const;
