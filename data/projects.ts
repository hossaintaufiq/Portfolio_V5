export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  personal_host?: string;
  repoUrl?: string;
  featured?: boolean;
};

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
  },
  {
    title: "SHORBORNO — Website",
    description:
      "Full-stack SHORBORNO platform built with Next.js, TypeScript, Node.js, Express.js, and MySQL over RESTful APIs, with Framer Motion for polished UI motion. Delivers a full-featured CRM powered by Gemini 2.5 AI automation for intelligent task management, and extends workflows to a native Android app (Kotlin) and Telegram bot for voice and chat-based CRM interactions.",
    tags: [
      "Next.js",
      "Express.js",
      "MySQL",
      "TypeScript",
      "Framer Motion",
      "Node.js",
      "REST API",
      "Gemini 2.5",
      "Kotlin",
      "Telegram API",
    ],
    liveUrl: "https://shorborno.cloud/",
    featured: true,
  },
  {
    title: "Playpen School Website",
    description:
      "Playpen School Website is a platform that represents the school and allows parents to book school services online. It is built with Next.js, TypeScript, Node.js, Tailwind CSS, PostgreSQL, Express.js, Payment Gateway, AWS, and CDN.",
    tags: ["Next.js", "TypeScript", "Node.js","Tailwind CSS", "PostgreSQL", "Express.js", "Payment Gateway","AWS","CDN"],
    liveUrl: "https://playpen.edu.bd/",
    personal_host: "https://playpen-project.vercel.app/",
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
  {
    title: "FocusFlow — Desktop App",
    description:
      "Fully offline desktop productivity system built with Python, PySide6, and Matplotlib. Integrates task management, habit tracking, Pomodoro timers, notes, calendar, analytics dashboards, and automated backup/recovery into one local-first workspace — no cloud dependency required.",
    tags: ["Python", "PySide6", "Matplotlib", "Desktop"],
    repoUrl: "https://github.com/hossaintaufiq/FocusFlow",
    featured: true,
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
  },
];
