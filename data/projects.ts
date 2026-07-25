export type ProjectCategory =
  | "Enterprise Systems"
  | "Web Applications"
  | "Mobile Applications"
  | "AI Products"
  | "Developer Tools"
  | "Research"
  | "Open Source";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  personal_host?: string;
  repoUrl?: string;
  featured?: boolean;
  category: ProjectCategory;
  problem: string;
  solution: string;
  architecture: string;
  outcome: string;
};

export const projectCategories: ProjectCategory[] = [
  "Enterprise Systems",
  "Web Applications",
  "Mobile Applications",
  "AI Products",
  "Developer Tools",
  "Research",
  "Open Source",
];

export const projects: Project[] = [
  {
    title: "Mango Electric Vehicle Website",
    description:
      "Full-stack marketing and operations platform for Mango's electric vehicle brand. Built vehicle showcase pages, reservation and inquiry workflows, and backend APIs on Next.js, TypeScript, Node.js, Express.js, and PostgreSQL — with payment gateway integration on AWS. Focused on Framer Motion-driven UX, SEO, accessibility, and performance optimizations for fast page loads.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Express.js",
      "Payment Gateway",
      "AWS",
      "Framer Motion",
    ],
    liveUrl: "https://www.mevauto.com/",
    featured: true,
    category: "Enterprise Systems",
    problem:
      "An emerging EV brand needed a production web platform for vehicle discovery, reservations, and inquiries — without sacrificing performance or SEO.",
    solution:
      "Shipped a full-stack marketing and operations site with showcase pages, reservation/inquiry workflows, and payment-ready backend services.",
    architecture:
      "Next.js + TypeScript frontend, Node.js/Express APIs, PostgreSQL persistence, AWS deployment, Framer Motion for restrained product motion.",
    outcome:
      "A public production site supporting vehicle discovery and conversion flows with SEO and accessibility as first-class constraints.",
  },
  {
    title: "SHORBORNO — School ERP Website",
    description:
      "Official website for SHORBORNO, a cloud-based School ERP platform serving 100+ educational institutions across Bangladesh. Built with Next.js, TypeScript, Node.js, Express.js, and MySQL over RESTful APIs, with Framer Motion for polished UI — showcasing product features, onboarding flows, and institutional outreach for a nationwide SaaS education platform.",
    tags: [
      "Next.js",
      "Express.js",
      "MySQL",
      "TypeScript",
      "Framer Motion",
      "Node.js",
      "REST API",
    ],
    liveUrl: "https://shorborno.cloud/",
    featured: true,
    category: "Enterprise Systems",
    problem:
      "A nationwide School ERP SaaS needed a professional product site that could communicate capability and support institutional onboarding.",
    solution:
      "Built the official SHORBORNO website with product storytelling, onboarding-oriented UX, and a typed full-stack foundation.",
    architecture:
      "Next.js + TypeScript UI, Express REST APIs, MySQL, Framer Motion for subtle interaction polish.",
    outcome:
      "Product-facing presence for a cloud School ERP serving 100+ educational institutions across Bangladesh.",
  },
  {
    title: "Playpen School Website",
    description:
      "Playpen School Website is a platform that represents the school and allows parents to book school services online. It is built with Next.js, TypeScript, Node.js, Tailwind CSS, PostgreSQL, Express.js, Payment Gateway, AWS, and CDN.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Express.js",
      "Payment Gateway",
      "AWS",
      "CDN",
    ],
    liveUrl: "https://playpen.edu.bd/",
    personal_host: "https://playpen-project.vercel.app/",
    repoUrl: "https://github.com/hossaintaufiq/Playpen_Project",
    featured: true,
    category: "Web Applications",
    problem:
      "The school needed a digital presence where parents could discover offerings and book services online.",
    solution:
      "Delivered a production school platform with service booking, payment integration, and a maintainable TypeScript stack.",
    architecture:
      "Next.js frontend, Express APIs, PostgreSQL, payment gateway, AWS + CDN for delivery.",
    outcome:
      "Live institutional website with online booking for admissions, payments, and school activities.",
  },
  {
    title: "NSU ACM Chapter Website",
    description:
      "Official chapter website achieving sub-second load times via static rendering and aggressive CDN caching. Clean TypeScript architecture for long-term maintainability.",
    tags: ["Next.js", "TypeScript", "Static Rendering", "CDN", "Tailwind CSS"],
    liveUrl: "https://nsusc.acm.org",
    repoUrl: "https://github.com/hossaintaufiq/ACM-Website2025",
    featured: true,
    category: "Web Applications",
    problem:
      "The ACM chapter needed an official site that stayed fast, maintainable, and easy to update over time.",
    solution:
      "Built a statically rendered Next.js site with aggressive CDN caching and a clean TypeScript architecture.",
    architecture:
      "Next.js static rendering, TypeScript, Tailwind CSS, CDN-first delivery.",
    outcome:
      "Official chapter website with sub-second load characteristics and long-term maintainability.",
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
    category: "AI Products",
    problem:
      "Teams needed CRM workflows that were not limited to a single web UI — including chat and mobile entry points.",
    solution:
      "Built a Gemini-powered CRM with web, Android, and Telegram surfaces for task automation and conversational workflows.",
    architecture:
      "Next.js + Express + MongoDB core, Gemini 2.5 automation, Kotlin Android client, Telegram bot APIs.",
    outcome:
      "Multi-channel CRM prototype spanning web, native mobile, and conversational interfaces.",
  },
  {
    title: "FocusFlow — Desktop App",
    description:
      "Fully offline desktop productivity system built with Python, PySide6, and Matplotlib. Integrates task management, habit tracking, Pomodoro timers, notes, calendar, analytics dashboards, and automated backup/recovery into one local-first workspace — no cloud dependency required.",
    tags: ["Python", "PySide6", "Matplotlib", "Desktop"],
    repoUrl: "https://github.com/hossaintaufiq/FocusFlow",
    featured: true,
    category: "Developer Tools",
    problem:
      "Productivity tools often force cloud accounts and fragmented apps for tasks, habits, and focus sessions.",
    solution:
      "Designed a fully offline desktop productivity operating system with integrated modules and automated backup/recovery.",
    architecture:
      "Python + PySide6 desktop shell, Matplotlib analytics, local-first storage and recovery flows.",
    outcome:
      "A local productivity workspace covering tasks, habits, Pomodoro, notes, calendar, and analytics.",
  },
  {
    title: "Stock Price Prediction",
    description:
      "End-to-end Jupyter pipeline forecasting stock movement by merging Yahoo Finance (BSE) data with Indian news sentiment via TextBlob. Compares ARIMA, LSTM, Random Forest, XGBoost, LightGBM, and more — Random Forest achieved the lowest MAE on the test split.",
    tags: [
      "Python",
      "scikit-learn",
      "TensorFlow",
      "TextBlob",
      "yfinance",
      "Jupyter",
    ],
    repoUrl: "https://github.com/hossaintaufiq/StockPricePrediction",
    featured: true,
    category: "Research",
    problem:
      "Price forecasting with market data alone ignores narrative signals present in news sentiment.",
    solution:
      "Built an end-to-end pipeline merging BSE market data with Indian news sentiment and comparing classical, deep learning, and ensemble models.",
    architecture:
      "Yahoo Finance + TextBlob sentiment merge, ARIMA/LSTM baselines, regression ensembles evaluated with MAE/RMSE.",
    outcome:
      "Random Forest delivered the lowest MAE among evaluated models on the prepared test split.",
  },
  {
    title: "LUCY — Local AI Assistant",
    description:
      "Local-first J.A.R.V.I.S.-style personal AI that runs fully offline on CPU. Combines FastAPI + Ollama (Qwen3), Whisper STT, Kokoro TTS, and a React UI for chat, live voice, agents, and on-device memory — privacy-first ML product engineering with one-click Windows packaging.",
    tags: [
      "Python",
      "FastAPI",
      "Ollama",
      "Whisper",
      "React",
      "TypeScript",
      "Local LLM",
    ],
    repoUrl: "https://github.com/hossaintaufiq/Autonomous_Ai_Agents",
    featured: true,
    category: "AI Products",
    problem:
      "Most personal assistants require cloud dependency, limiting privacy and offline usefulness on ordinary laptops.",
    solution:
      "Productized a local-first assistant with chat, live voice, STT/TTS, agents, and Windows one-click packaging.",
    architecture:
      "React/TypeScript UI, FastAPI backend, Ollama (Qwen3), Whisper STT, Kokoro TTS, SQLite memory, CPU-first inference.",
    outcome:
      "A privacy-first personal AI that runs locally on CPU with install/launch packaging for Windows.",
  },
];
