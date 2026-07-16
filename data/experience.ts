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
