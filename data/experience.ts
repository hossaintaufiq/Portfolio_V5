export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "ZERODEVS LTD",
    location: "Bangladesh · Software firm",
    period: "Jan 2026 — May 2026",
    description:
      "Bangladeshi software firm building SaaS products — developed client platforms including SHORBORNO School ERP and other full-stack web applications.",
    highlights: [
      "Developed the official website for SHORBORNO, a cloud-based School ERP platform serving 100+ educational institutions across Bangladesh",
      "Built full-stack SaaS features with Next.js, TypeScript, Node.js, Express.js, and MySQL over RESTful APIs",
      "Delivered product-facing UI with Framer Motion, focusing on performance, clarity, and institutional onboarding",
      "Collaborated with the team on delivery timelines, code quality, and iterative SaaS product improvements",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Brooksource",
    location: "Remote · US-based consultancy",
    period: "Apr 2023 — Sep 2024",
    description:
      "Enterprise React consultancy delivering solutions to Fortune 500 clients.",
    highlights: [
      "Built production React.js + TypeScript applications with Redux for high-traffic enterprise clients",
      "Reduced front-end load time by 20% through code splitting, lazy loading, and bundle optimisation",
      "Designed API integration layers that measurably reduced cross-service latency",
      "Consistently shipped features ahead of schedule across distributed Agile teams",
    ],
  },
  {
    role: "Web Developer",
    company: "Americares",
    location: "Remote · Global non-profit",
    period: "Nov 2022 — Jun 2023",
    description:
      "Global health organisation operating in 25+ countries — mobile-first React applications for staff worldwide.",
    highlights: [
      "Developed mobile-first React.js apps integrating third-party APIs and internal services",
      "Reduced backend request failure rate by 25% via error handling, retry logic, and response caching",
      "Hardened auth with JWT, input validation, and HTTPS enforcement",
    ],
  },
];
