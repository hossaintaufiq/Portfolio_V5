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
    role: "Founder & CEO",
    company: "Justkaaj",
    location: "Dhaka, Bangladesh",
    period: "Apr 2024 — Present",
    description:
      "Service marketplace startup — architected and launched a full-stack platform with a custom ML recommendation engine.",
    highlights: [
      "Scaled to 500+ active users and 200+ service providers in production",
      "Built secure REST APIs, role-based auth, real-time dashboards, and admin panel — cut manual operations by 40%",
      "Led a cross-functional team of 4–6 engineers through sprint planning, architecture, code reviews, and roadmap execution",
      "Secured government funding support and pitched to international investors",
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
