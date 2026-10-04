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
  points?: string[];
  highlight?: string;
  achievement?: string;
  additional?: string;
  technologies: string[];
  stepLevel?: number;
  badge?: string;
}

export interface VolunteerItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  tagline?: string;
  description?: string;
  tags?: string[];
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
      resume: "/resume.pdf",
      softlligence: "https://www.softlligence.tech",
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
      label: "ORGANIZATIONAL & CLIENT REACH",
      detail: "Through scalable multi-tenant SaaS & enterprise deployments",
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
        value: "Production platforms serving industrial clients & Fortune 500 ecosystems",
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
    websiteUrl: "https://www.softlligence.tech",
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
      id: "exp-mev",
      role: "Software Engineer",
      company: "MEV (Mango Electric Vehicle)",
      period: "Jan 2026 – Present",
      locationType: "On-site",
      companyContext:
        "Electric Vehicle Manufacturer · In-House Vehicle Platform & Operations",
      description:
        "Maintain and enhance MEV's internal management systems supporting day-to-day operations, while building software applications for locally built electric vehicles.",
      points: [
        "Maintain and enhance MEV's internal management systems, supporting day-to-day operations across the business.",
        "Develop applications for MEV's locally built electric vehicles, delivering software for the in-house vehicle platform.",
        "Build and maintain CRM and customer-facing tools using Next.js, Express.js, PostgreSQL, and TypeScript.",
      ],
      highlight:
        "Engineered vehicle management systems & customer-facing operational tools with Next.js, Express.js, PostgreSQL, and TypeScript.",
      technologies: [
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "TypeScript",
        "Node.js",
        "Vehicle Platform",
        "CRM Systems",
      ],
      stepLevel: 3,
      badge: "CURRENT ROLE · ACTIVE",
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
        "Developed and maintained production React.js + TypeScript applications with Redux serving high-traffic enterprise clients across distributed Agile teams.",
      points: [
        "Developed and maintained production React.js + TypeScript applications with Redux serving high-traffic enterprise clients.",
        "Reduced front-end load time by 20% through code splitting, lazy loading, and bundle optimisation; designed API integration layers that measurably reduced cross-service latency.",
        "Consistently shipped features ahead of schedule across distributed Agile teams spanning multiple time zones.",
      ],
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
        "Performance Optimization",
      ],
      stepLevel: 2,
      badge: "ENTERPRISE · FORTUNE 500",
    },
    {
      id: "exp-americares",
      role: "Associate, Web Developer",
      company: "Americares",
      period: "Feb 2023 – Nov 2023",
      locationType: "Remote / Hybrid",
      companyContext:
        "Global Health & Humanitarian Organization Web Applications",
      description:
        "Built and maintained web applications as an Associate Web Developer, exploring a wide range of tools and modern engineering practices to grow quickly as an engineer.",
      points: [
        "Built and maintained web applications as an Associate Web Developer, exploring a wide range of tools and practices to grow quickly as an engineer.",
        "Collaborated on responsive UI components, cross-browser compatibility, and modular codebase maintenance.",
      ],
      technologies: [
        "JavaScript",
        "React.js",
        "HTML5",
        "CSS3",
        "REST APIs",
        "Git",
      ],
      stepLevel: 1,
      badge: "CAREER FOUNDATION",
    },
  ] as ExperienceItem[],

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
      liveUrl: "https://www.softlligence.tech",
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
    {
      id: "handtrack-studio",
      title: "HANDTRACK STUDIO — DUAL-HAND JIGSAW",
      category: "COMPUTER VISION / AI",
      subtitle: "Real-Time Dual-Hand Tracking & Gesture Puzzle Engine",
      description:
        "Architected an interactive computer vision application using MediaPipe and OpenCV that transforms live webcam input into a dual-hand gesture-controlled jigsaw puzzle engine with sub-pixel landmark tracking.",
      modules: [
        "MediaPipe Hand Landmarker",
        "Dual-Hand Tracking (2 Hands)",
        "Temporal Smoothing (EMA)",
        "Pinch & Frame Detection",
        "Interactive Jigsaw Physics",
        "Snap-to-Grid Placement",
      ],
      additional:
        "Engineered exponential moving average (EMA) temporal smoothing to eliminate hand tremor jitter, implemented independent dual-pointer state tracking, and designed custom real-time HUD overlays.",
      technologies: [
        "Python",
        "OpenCV",
        "MediaPipe",
        "NumPy",
        "Computer Vision",
        "Gesture Recognition",
      ],
      githubUrl: "https://github.com/hossaintaufiq/Hand_Tracking",
    },
    {
      id: "lucy-ai-assistant",
      title: "LUCY — AUTONOMOUS AI ASSISTANT",
      category: "AUTONOMOUS AI AGENTS",
      subtitle: "Local-First J.A.R.V.I.S.-Style Voice & AI Companion on CPU",
      description:
        "Engineered an end-to-end local-first personal AI assistant with bidirectional live voice (Whisper STT + Kokoro TTS), on-device CPU LLM inference via Ollama, streaming WebSocket APIs, and customizable markdown memory.",
      modules: [
        "Local LLM Serving (Ollama / Qwen3 0.6B)",
        "Live Voice Talk Loop (Mic → STT → TTS)",
        "faster-whisper (int8 CPU)",
        "Kokoro Neural TTS",
        "FastAPI & Streaming WebSockets",
        "React 19 + Vite 6 + Tailwind 4 UI",
        "Persistent Markdown Soul & Memory",
      ],
      additional:
        "Engineered zero-cloud local inference optimized for standard laptops without discrete GPUs, custom Windows packaging with one-click bat/PowerShell launchers, and real-time streaming telemetry views.",
      technologies: [
        "Python",
        "FastAPI",
        "React 19",
        "TypeScript",
        "Ollama",
        "faster-whisper",
        "Kokoro TTS",
        "WebSockets",
        "Tailwind CSS 4",
        "SQLite",
      ],
      githubUrl: "https://github.com/hossaintaufiq/Autonomous_Ai_Agents",
    },
    {
      id: "uni-admission-portal",
      title: "PRIVATE UNIVERSITY ADMISSION PORTAL",
      category: "EDUCATION PORTAL",
      subtitle: "University Comparison, Tuition Analytics & Test Prep Platform",
      description:
        "Engineered a comprehensive web platform for prospective university students, providing real-time admission deadlines, program & curriculum comparisons, tuition breakdown analytics, university rankings, and sample entrance exam question banks.",
      modules: [
        "Admission Deadline Tracker",
        "Cross-University Subject Comparison",
        "Tuition & Fee Breakdown Analytics",
        "University Rankings Matrix",
        "Sample Admission Test Bank",
        "Program Offerings Explorer",
      ],
      additional:
        "Designed an intuitive student-centric comparison interface with structured data filtering to help candidates make data-driven university admission decisions.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "Data Analytics",
      ],
      githubUrl: "https://github.com/hossaintaufiq/University_Admission_Helper",
    },
    {
      id: "neptune-shorts",
      title: "NEPTUNE SHORTS — LOCAL AI VIDEO-TO-SHORTS",
      category: "AI VIDEO & COMPUTER VISION",
      subtitle: "100% Private, Local Video-to-Shorts Generator with Face-Tracking & Whisper",
      description:
        "Architected a desktop web application running 100% locally and privately to convert horizontal videos into viral 9:16 vertical shorts. Combines local faster-whisper speech-to-text, semantic moment selection (15–20s windowing), OpenCV Haar Cascade face-tracking with EMA smoothing, local Ollama clickbait titling, and FFmpeg audio normalization (EBU R128 + FFT denoiser).",
      modules: [
        "Local faster-whisper STT (CTranslate2)",
        "Semantic Moment Selection (15-20s)",
        "OpenCV Face Tracking & Reframing (9:16)",
        "EMA Coordinate Smoothing (Anti-Jitter)",
        "Local Ollama / NLP Clickbait Titler",
        "EBU R128 Normalizer & FFT Denoiser",
        "CUDA GPU (nvenc) / CPU (int8) Pipeline",
        "FastAPI Backend + React/Vite UI",
      ],
      additional:
        "Features auto-detecting hardware acceleration for NVIDIA CUDA (float16 + h264_nvenc) with seamless CPU int8 quantization fallback. Complete full-stack local workflow with automated one-click launcher (run.py).",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "Vite",
        "Tailwind CSS 4",
        "OpenCV",
        "faster-whisper",
        "FFmpeg",
        "Ollama",
        "PyTorch / CUDA",
      ],
      githubUrl: "https://github.com/hossaintaufiq/Youtube_Video_Generator",
    },
    {
      id: "dhaka-road-network",
      title: "DHAKA ROAD NETWORK — GRAPH ROUTING & DISPATCH",
      category: "BACKEND & ALGORITHMS",
      subtitle: "Graph Algorithms & Shortest-Path Navigation Engine for Urban Delivery Logistics",
      description:
        "Engineered a high-performance graph routing and spatial pathfinding backend designed for on-demand delivery platforms (Foodpanda, local couriers) navigating Dhaka city's complex road network. Implements optimized graph data structures, Dijkstra / A* shortest-path algorithms, one-way street constraints, and dynamic traffic weight heuristics to fast-track rider dispatch and ETA computation.",
      modules: [
        "Dhaka Urban Road Graph Modeling",
        "Dijkstra & A* Shortest Path Algorithms",
        "Dynamic Traffic & Turn Restriction Weights",
        "Delivery Rider Fast-Track Routing",
        "Spatial Coordinate Geocoding & Indexing",
        "High-Throughput Dispatch REST APIs",
      ],
      additional:
        "Designed for low-latency routing across dense metropolitan networks with hundreds of intersections and multi-constraint road topologies. Provides scalable REST endpoints for real-time rider dispatch and trip ETA optimization.",
      technologies: [
        "Python",
        "Graph Algorithms",
        "Dijkstra / A*",
        "Data Structures",
        "FastAPI",
        "Spatial Indexing",
        "REST APIs",
        "Routing Engine",
      ],
      githubUrl: "https://github.com/hossaintaufiq/DhakaRoadNetwork",
    },
    {
      id: "acumens-media",
      title: "ACUMENS MEDIA INC — AI MEDIA PLATFORM",
      category: "FRONTEND & AI MEDIA",
      subtitle: "Modern AI Media Agency & Creative Production Web Platform",
      description:
        "Engineered the modern, high-converting frontend web platform for AcuMens Media Inc, an AI-powered media production agency. Built with React and Vite, featuring smooth scroll interactions, responsive service showcase modules, pricing calculators, interactive portfolio reels, and high Core Web Vitals optimization.",
      modules: [
        "AI Media Services Showcase",
        "Interactive Creative Portfolio Reel",
        "Dynamic Pricing & Package Estimator",
        "Lead Generation & Client Inquiry Workflows",
        "Responsive Fluid Layouts & Micro-Animations",
        "High-Performance Vite Asset Optimization",
      ],
      additional:
        "Delivered a slick, responsive agency interface with modular component architecture, tailored micro-animations, and fast page load times across all mobile and desktop devices.",
      technologies: [
        "React.js",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive UI",
        "Web Performance",
      ],
      githubUrl: "https://github.com/hossaintaufiq/AcuMens-Media-Inc",
    },
  ] as Project[],

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
  ] as ResearchItem[],

  skills: [
    {
      name: "PROGRAMMING LANGUAGES",
      categoryCode: "01_LANG",
      skills: ["TypeScript", "Python", "JavaScript", "C++", "Java", "SQL"],
    },
    {
      name: "BACKEND & ARCHITECTURE",
      categoryCode: "02_BACK",
      skills: [
        "FastAPI",
        "Node.js",
        "Express.js",
        "Django",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "Prisma ORM",
        "Microservices",
        "RBAC Security",
      ],
    },
    {
      name: "AI, ML & COMPUTER VISION",
      categoryCode: "03_AIML",
      skills: [
        "Multimodal RAG",
        "faster-whisper",
        "OpenCV",
        "MediaPipe",
        "Ollama LLMs",
        "PyTorch / CUDA",
        "LangChain",
        "Scikit-learn",
        "TensorFlow",
        "Gemini API",
      ],
    },
    {
      name: "FRONTEND ENGINEERING",
      categoryCode: "04_FRNT",
      skills: [
        "Next.js",
        "React.js",
        "React 19",
        "Tailwind CSS 4",
        "Redux",
        "Vite",
        "HTML5",
        "CSS3",
        "Framer Motion",
      ],
    },
    {
      name: "DATABASES & STORAGE",
      categoryCode: "05_DATA",
      skills: ["PostgreSQL", "Prisma", "MySQL", "MongoDB", "SQLite", "Firebase"],
    },
    {
      name: "CLOUD, DEVOPS & SYSTEMS",
      categoryCode: "06_CLOD",
      skills: ["AWS", "Docker", "Git", "GitHub Actions", "CI/CD", "Vercel", "FFmpeg"],
    },
    {
      name: "ALGORITHMS & METHODOLOGIES",
      categoryCode: "07_METH",
      skills: ["Graph Algorithms (Dijkstra/A*)", "Data Structures", "Agile / Scrum", "Test-Driven Dev", "System Design"],
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

  volunteering: [
    {
      id: "vol-nsu-acm",
      role: "Coordinator Web Group & Moderator Research and Development Group",
      organization: "NSU ACM Student Chapter",
      period: "Oct 18, 2024 – Present",
      location: "Dhaka, Bangladesh",
      tagline: "Web Architecture, Research Guidance & Event Operations",
      description:
        "Leading and coordinating the web technical group while moderating research and development tracks, organizing hackathons, technical workshops, and developer mentoring.",
      tags: ["Web Architecture", "Research Moderation", "Student Leadership", "ACM"],
    },
    {
      id: "vol-bylc",
      role: "Volunteer",
      organization: "Bangladesh Youth Leadership Center (BYLC)",
      period: "Oct 20, 2022 – Oct 2023",
      location: "Dhaka, Bangladesh",
      tagline: "Be the next leader",
      description:
        "Participated in the 'Be the next leader' youth development initiative, facilitating leadership workshops, community outreach programs, and public engagement events.",
      tags: ["Leadership", "Community Outreach", "Public Speaking", "BYLC"],
    },
    {
      id: "vol-ndnsc",
      role: "Vice President, Dep of Administration",
      organization: "Notre Dame Nature Study Club (NDNSC)",
      period: "Jul 15, 2018 – Jun 14, 2020",
      location: "Dhaka, Bangladesh",
      tagline: "Administrative Leadership & National Festival Management",
      description:
        "Directed club administration, team governance, and logistical operations for nationwide environmental conventions, exhibitions, and student competitions.",
      tags: ["Administration", "Event Logistics", "Executive Leadership", "Notre Dame College"],
    },
  ] as VolunteerItem[],

  languages: [
    { name: "Bangla", proficiency: "Native" },
    { name: "English", proficiency: "Professional Fluency (written & spoken)" },
  ],
};
