export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Playpen School Website",
    description:
      "Playpen School Website is a platform that represents the school and allows parents to book school services online. It is built with Next.js, TypeScript, Node.js, Tailwind CSS, PostgreSQL, Express.js, Payment Gateway, AWS, and CDN.",
    tags: ["Next.js", "TypeScript", "Node.js","Tailwind CSS", "PostgreSQL", "Express.js", "Payment Gateway","AWS","CDN"],
    liveUrl: "https://playpen.edu.bd/",
    repoUrl: "https://github.com/hossaintaufiq/Playpen_Project",
    featured: true,
  },
  {
    title: "NSU ACM Chapter Website",
    description:
      "Official chapter website achieving sub-second load times via static rendering and aggressive CDN caching. Clean TypeScript architecture for long-term maintainability.",
    tags: ["Next.js", "TypeScript", "Static Rendering", "CDN", "Tailwind CSS"],
    liveUrl: "https://nsusc.acm.org",
    repoUrl: "https://github.com/hossaintaufiq/ACM-Website2025",
    featured: true,
  },
  {
    title: "Justkaaj — Service Marketplace",
    description:
      "Production marketplace connecting customers with local service providers. Features an ML recommendation engine, multi-role auth, and user & admin dashboards. Modular backend built for horizontal scale — 500+ active users and 200+ service providers.",
    tags: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "ML",
      "Express.js",
      "Payment Gateway",
      "AWS",
    ],
    liveUrl: "https://justkaaj.com",
    repoUrl: "https://github.com/hossaintaufiq/JustKaaj",
    featured: true,
  },

  {
    title: "AI CRM — Web, Mobile & Telegram Bot",
    description:
      "Full-featured CRM with Gemini 2.5 AI automation for intelligent task management. Extended to a native Android app (Kotlin) and Telegram bot enabling voice and chat-based CRM workflows.",
    tags: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Gemini 2.5",
      "Kotlin",
      "Telegram API",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/hossaintaufiq/CSE327_Project",
    featured: true,
  },
 
  
];
