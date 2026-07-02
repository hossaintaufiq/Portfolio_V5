export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details: string[];
};

export const education: EducationItem[] = [
  {
    degree: "B.Sc. Computer Science & Engineering",
    institution: "North South University, Dhaka",
    period: "Expected Dec 2026",
    details: [
      "CGPA: 3.79 / 4.00",
      "Relevant coursework: DSA, Machine Learning, AI, Software Engineering, Database Systems, Web Development",
      "Research: Epilepsy Detection (Deep Learning) · Multimodal RAG (NLP/CV)",
    ],
  },
  {
    degree: "HSC, Science",
    institution: "Notre Dame College, Dhaka",
    period: "Jan 2020",
    details: [
      "GPA: 5.00 / 5.00",
      "Volunteered in organizing and hosting college events.",
      "Developed teamwork, leadership, public speaking, and event management skills.",
    ],
  },
];

export const certifications = [
  "Full-Stack Web Dev (Programming Hero)",
  "DSA (Udemy & Phitron)",
  "AI & ML (GP Academy, Programming Hero, Udemy)",
  "Public Speaking (BYLC)",
  "Bash Scripting (freeCodeCamp)",
  "Arduino (Gobeshona)",
] as const;

export const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Professional fluency (written & spoken)" },
] as const;
