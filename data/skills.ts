export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Deep Learning",
      "RAG Systems",
      "EEG Processing",
      "Gemini API",
      "LLM Integration",
    ],
  },
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "C#", ".NET"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Query Optimisation"],
  },
  {
    title: "Mobile & Tools",
    items: [
      "Kotlin (Android)",
      "React Native",
      "Git",
      "GitHub Actions",
      "Web Scraping",
      "Automation",
    ],
  },
];
