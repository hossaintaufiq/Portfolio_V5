export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  type?: string;
  status?: string;
  description: string;
  additional?: string;
  modules?: string[];
  technologies: string[];
  liveUrl?: string;
  previewUrl?: string;
  githubUrl?: string;
  isPrivateRepo?: boolean;
  featured?: boolean;
  metrics?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  institution: string;
  timeline: string;
  supervisor?: string;
  status: string;
  description: string;
  hasGithub?: boolean;
  githubUrl?: string;
  tags: string[];
  disclaimer?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  locationType: string;
  companyContext?: string;
  description: string;
  highlight?: string;
  achievement?: string;
  additional?: string;
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  categoryCode: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "HOSSAIN AHMMED TAUFIQ",
    shortName: "TAUFIQ",
    title: "Software Engineer · Backend · AI/ML Systems",
    location: "Dhaka, Bangladesh",
    email: "hossainahmmedtaufiq22@gmail.com",
    phone: "+880 1728-360834",
    links: {
      linkedin: "https://linkedin.com/in/hossaintaufiq",
      github: "https://github.com/hossaintaufiq",
      portfolio: "#",
    },
    summary:
      "Software Engineer with experience building scalable full-stack web applications, backend services, and AI-powered products.",
    founderTitle: "Founder of Softlligence Technologies",
    currentStatus:
      "B.Sc. Computer Science & Engineering student at North South University, while conducting research in Multimodal RAG and Deep Learning.",
    statusBadges: [
      "FOUNDER @ SOFTLLIGENCE TECHNOLOGIES",
      "BACKEND-FOCUSED ENGINEER",
      "AI/ML SYSTEMS BUILDER",
      "CS STUDENT @ NSU",
      "RESEARCHER IN MULTIMODAL RAG & DEEP LEARNING",
    ],
  },

  metrics: [
    {
      value: "100+",
      label: "EDUCATIONAL INSTITUTIONS SERVED",
      detail: "Through Shorborno School ERP platform across Bangladesh",
      accent: "orange",
    },
    {
      value: "20%",
      label: "FRONT-END LOAD TIME REDUCTION",
      detail: "Code splitting, lazy loading, and bundle optimization at Brooksource",
      accent: "blue",
    },
    {
      value: "3.83",
      label: "CGPA / 4.00",
      detail: "B.Sc. in Computer Science & Engineering, North South University",
      accent: "green",
    },
    {
      value: "5.00",
      label: "HSC GPA / 5.00",
      detail: "Higher Secondary Certificate (Science), Notre Dame College",
      accent: "dark",
    },
  ],

  about: {
    sectionCode: "01 / ABOUT",
    headline: "ENGINEER. BUILDER. AI RESEARCHER. FOUNDER.",
    narrative: [
      "I am a Software Engineer focused on architecting resilient backend systems, scalable full-stack web applications, and production-grade AI/ML pipelines.",
      "As the Founder of Softlligence Technologies, I build and contribute to production software deployed across businesses and educational institutions. My work spans multi-tenant SaaS architecture, enterprise ERP engines, and cross-service API design.",
      "Concurrently pursuing my B.Sc. in Computer Science & Engineering at North South University (CGPA 3.83/4.00), my academic and experimental work is deeply invested in Deep Learning and Multimodal Retrieval-Augmented Generation (RAG) with cross-modal hallucination mitigation.",
    ],
    attributes: [
      {
        label: "CORE SPECIALIZATION",
        value: "Backend Services & Distributed Web Applications",
      },
      {
        label: "AI/ML FOCUS",
        value: "Multimodal RAG, Hallucination Reduction, LLM Pipelines",
      },
      {
        label: "ENTERPRISE FOOTPRINT",
        value: "Production platforms serving 100+ institutions & Fortune 500 clients",
      },
      {
        label: "ENGINEERING ETHOS",
        value: "Strict Typing, Modularity, High Concurrency & Zero Fluff",
      },
    ],
  },

  founderFeature: {
    badge: "VENTURE / STUDIO",
    company: "SOFTLLIGENCE TECHNOLOGIES",
    role: "FOUNDER",
    description:
      "Founder of Softlligence Technologies and contributor to production software used by businesses and educational institutions.",
    deliverables: [
      "Enterprise Manufacturing ERP/MIS multi-tenant platforms",
      "Production-grade web architecture with strict tenant isolation",
      "Scalable backend services engineered with TypeScript, Node.js, and PostgreSQL",
    ],
    status: "ACTIVE ENGINEERING STUDIO",
  },

  experience: [
    {
      id: "exp-zerodevs",
      role: "Software Engineer",
      company: "ZERODEVS LTD",
      period: "Jan 2025 – May 2026",
      locationType: "On-site",
      description:
        "Engineered full-stack SaaS applications using Node.js, Express.js, MySQL, REST APIs, Next.js, and TypeScript, delivering scalable and production-ready software solutions.",
      highlight:
        "Developed the official platform for SHORBORNO School ERP, serving 100+ educational institutions across Bangladesh while improving application performance, maintainability, and user experience.",
      technologies: [
        "Node.js",
        "Express.js",
        "MySQL",
        "REST APIs",
        "Next.js",
        "TypeScript",
      ],
    },
    {
      id: "exp-brooksource",
      role: "Full-Stack Developer",
      company: "Brooksource",
      period: "Apr 2023 – Sep 2024",
      locationType: "Remote",
      companyContext:
        "US-based staffing firm delivering React solutions to Fortune 500 clients",
      description:
        "Developed and maintained production React.js + TypeScript applications with Redux serving high-traffic enterprise clients.",
      achievement:
        "Reduced front-end load time by 20% through code splitting, lazy loading, and bundle optimisation; designed API integration layers that measurably reduced cross-service latency.",
      additional:
        "Consistently shipped features ahead of schedule across distributed Agile teams spanning multiple time zones.",
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "API Integration",
        "Agile",
      ],
    },
  ],

  projects: [
    {
      id: "softlligence-cloud",
      title: "SOFTLLIGENCE MANUFACTURING CLOUD",
      category: "ENTERPRISE ERP / MIS SAAS",
      subtitle: "Enterprise Manufacturing ERP/MIS SaaS",
      featured: true,
      description:
        "Built a multi-tenant Manufacturing ERP/MIS platform for industrial businesses with modular architecture and enterprise-grade scalability.",
      modules: [
        "Authentication",
        "Multi-tenancy",
        "RBAC",
        "Inventory",
        "Manufacturing",
        "Commercial Operations",
        "Reporting",
      ],
      additional:
        "Designed a reusable industry-template framework supporting multiple manufacturing sectors while ensuring secure tenant isolation, scalable architecture, and AI-ready platform integration.",
      technologies: [
        "AWS",
        "Next.js",
        "Node.js",
        "Express",
        "TailwindCSS",
        "Prisma",
        "PostgreSQL",
        "TypeScript",
      ],
      liveUrl: "https://github.com/hossaintaufiq",
      githubUrl: "https://github.com/hossaintaufiq",
    },
    {
      id: "playpen-school",
      title: "PLAYPEN SCHOOL WEBSITE",
      category: "EDUCATION PORTAL",
      subtitle: "School Management & Admissions Platform",
      status: "Ongoing",
      description:
        "Developed a production-ready school management platform enabling online admissions, tuition payments, event management, and parent engagement through an intuitive web interface.",
      additional:
        "Built reusable UI components and secure backend services with TypeScript and Express.js, improving maintainability, scalability, and future feature development.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Express.js",
        "AWS",
        "Payment Gateway",
      ],
      liveUrl: "https://github.com/hossaintaufiq",
      previewUrl: "https://github.com/hossaintaufiq",
      githubUrl: "https://github.com/hossaintaufiq",
    },
    {
      id: "shorborno-erp",
      title: "SHORBORNO — SCHOOL MANAGEMENT ERP",
      category: "SAAS PLATFORM",
      subtitle: "Cloud-Based School ERP Serving 100+ Institutions",
      type: "SaaS",
      description:
        "Developed and maintained the official SaaS platform website for a cloud-based School ERP serving 100+ educational institutions, emphasizing scalability, performance, and responsive design.",
      additional:
        "Implemented modern frontend architecture, API integration, and SEO optimization while collaborating with stakeholders to deliver production-ready features aligned with business requirements.",
      technologies: [
        "RESTful API",
        "Node.js",
        "Next.js",
        "Express.js",
        "MySQL",
        "TypeScript",
        "Framer Motion",
      ],
      liveUrl: "https://github.com/hossaintaufiq",
      isPrivateRepo: true,
    },
    {
      id: "mango-ev",
      title: "MANGO ELECTRIC VEHICLE WEBSITE",
      category: "AUTOMOTIVE PLATFORM",
      subtitle: "Full-Stack EV Reservation & Inquiries System",
      description:
        "Engineered a scalable full-stack platform using Next.js, Express.js, and PostgreSQL, implementing secure reservation workflows, inquiry management, payment integration, and role-based backend APIs.",
      additional:
        "Optimized Core Web Vitals through server-side rendering, image optimization, caching strategies, and SEO best practices, delivering a fast, responsive, and accessible user experience.",
      technologies: [
        "Node.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Express.js",
        "Next.js",
        "TypeScript",
        "AWS",
        "Framer Motion",
      ],
      liveUrl: "https://github.com/hossaintaufiq",
      isPrivateRepo: true,
    },
    {
      id: "focusflow-app",
      title: "FOCUSFLOW — DESKTOP APP",
      category: "OFFLINE PRODUCTIVITY",
      subtitle: "Modular Python/PySide6 Desktop Application",
      description:
        "Architected a fully offline productivity application using Python and PySide6, integrating task management, habit tracking, calendar scheduling, note-taking, analytics, and automated backup systems.",
      additional:
        "Designed a modular desktop architecture with local data persistence and interactive data visualization, providing a fast, privacy-focused productivity solution without cloud dependencies.",
      technologies: ["Python", "PySide6", "Matplotlib"],
      githubUrl: "https://github.com/hossaintaufiq",
    },
  ],

  research: [
    {
      id: "res-rag",
      title: "MULTIMODAL RAG WITH CROSS-MODAL HALLUCINATION REDUCTION",
      institution: "North South University",
      timeline: "Aug 2025 – Present",
      supervisor: "Dr. Nabil Bin Hannan",
      status: "Preparing for conference submission",
      description:
        "Designed and implemented a multimodal Retrieval-Augmented Generation (RAG) framework integrating text, images, and tables, applying cross-modal hallucination reduction techniques to improve factual consistency and reliability in LLM-generated responses.",
      tags: [
        "Multimodal RAG",
        "Hallucination Mitigation",
        "LLMs",
        "NLP & Computer Vision",
        "Cross-Modal Fusion",
      ],
    },
    {
      id: "res-multitask",
      title: "MULTI-TASK ML FOR BAND GAP & FORMATION ENERGY PREDICTION",
      institution: "North South University",
      timeline: "Sept 2025 – Jan 2026",
      status: "Publication",
      description:
        "Developed a multi-task deep learning model for simultaneous band gap classification and formation energy prediction, achieving higher predictive performance and computational efficiency compared to single-task baseline models.",
      tags: [
        "Deep Learning",
        "Multi-Task Learning",
        "Material Science ML",
        "Predictive Modeling",
      ],
    },
    {
      id: "res-stock",
      title: "VALIDATING STOCK MARKET PRICE PREDICTING ALGORITHMS",
      institution: "North South University",
      timeline: "Mar 2026 – Present",
      status: "Publication",
      hasGithub: true,
      githubUrl: "https://github.com/hossaintaufiq",
      description:
        "Built an end-to-end machine learning pipeline for stock price forecasting using financial time-series and news sentiment analysis, evaluating: ARIMA, LSTM, Random Forest, XGBoost, and LightGBM. Random Forest achieved the best predictive accuracy in this project.",
      disclaimer: "Documented research project result. Not financial advice.",
      tags: [
        "Time-Series Forecasting",
        "Sentiment Analysis",
        "Random Forest (Best Accuracy)",
        "LSTM",
        "XGBoost",
        "LightGBM",
        "ARIMA",
      ],
    },
  ],

  skills: [
    {
      name: "PROGRAMMING LANGUAGES",
      categoryCode: "01_LANG",
      skills: ["TypeScript", "Python", "JavaScript", "Java", "C++", "SQL"],
    },
    {
      name: "BACKEND & ARCHITECTURE",
      categoryCode: "02_BACK",
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "REST APIs",
        "GraphQL",
        "JWT",
        "Microservices",
        "WebSockets",
      ],
    },
    {
      name: "AI / ML SYSTEMS",
      categoryCode: "03_AIML",
      skills: [
        "LLM Integration",
        "RAG Systems",
        "LangChain",
        "Scikit-learn",
        "TensorFlow",
        "Gemini API",
        "Prompt Engineering",
      ],
    },
    {
      name: "FRONTEND ENGINEERING",
      categoryCode: "04_FRNT",
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Redux",
        "Framer Motion",
      ],
    },
    {
      name: "DATABASES & STORAGE",
      categoryCode: "05_DATA",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    },
    {
      name: "CLOUD & DEVOPS",
      categoryCode: "06_CLOD",
      skills: ["Git", "GitHub", "GitHub Actions", "Docker", "AWS", "Vercel"],
    },
    {
      name: "METHODOLOGIES & PRACTICES",
      categoryCode: "07_METH",
      skills: ["Agile", "CI/CD", "Testing", "OOP", "DSA"],
    },
  ],

  education: [
    {
      id: "nsu",
      degree: "B.Sc. Computer Science & Engineering",
      institution: "North South University, Dhaka",
      timeline: "Expected: December 2026",
      cgpa: "3.83 / 4.00",
      coursework: [
        "DSA",
        "Machine Learning",
        "AI",
        "Software Engineering",
        "Database Systems",
        "Web Development",
      ],
      researchFocus: [
        "Epilepsy Detection (Deep Learning)",
        "Multimodal RAG (NLP/CV)",
      ],
    },
    {
      id: "ndc",
      degree: "HSC, Science",
      institution: "Notre Dame College, Dhaka",
      timeline: "Jan 2020",
      cgpa: "5.00 / 5.00 (GPA)",
      additional:
        "Volunteered in organizing and hosting college events. Developed teamwork, leadership, public speaking, and event management skills.",
    },
  ],

  certifications: [
    { name: "Full-Stack Web Dev", issuer: "Programming Hero" },
    { name: "DSA", issuer: "Udemy & Phitron" },
    { name: "AI & ML", issuer: "GP Academy, Programming Hero, Udemy" },
    { name: "Public Speaking", issuer: "BYLC" },
    { name: "Bash Scripting", issuer: "freeCodeCamp" },
    { name: "Arduino", issuer: "Gobeshona" },
  ],

  languages: [
    { name: "Bangla", proficiency: "Native" },
    { name: "English", proficiency: "Professional Fluency (written & spoken)" },
  ],
};
