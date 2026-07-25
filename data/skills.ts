export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Prisma",
    ],
  },
  {
    title: "Cloud",
    items: ["Docker", "GitHub Actions", "Vercel", "AWS", "Firebase"],
  },
  {
    title: "AI",
    items: [
      "OpenAI",
      "LangChain",
      "RAG",
      "Python",
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "System Design",
    items: [
      "Architecture",
      "Caching",
      "API Design",
      "Authentication",
      "Database Design",
      "Scalability",
      "CI/CD",
    ],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Linux"],
  },
];
