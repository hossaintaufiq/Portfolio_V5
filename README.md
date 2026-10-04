# ⚡ HOSSAIN AHMMED TAUFIQ — ENGINEER PORTFOLIO (V5)

> **Production-grade, Neo-Brutalist technical portfolio showcasing full-stack systems engineering, scalable backend architecture, and AI/ML research.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Live Site](https://img.shields.io/badge/Live-Portfolio-FF5500?style=flat-square)](https://taufiq.dev)

---

## 🏛️ Overview

A modern, high-impact developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with an engineering-first **Neo-Brutalist** aesthetic featuring technical coordinate bars, interactive toolchain HUDs, and real-world verified metrics.

- **Developer**: Hossain Ahmmed Taufiq
- **Focus**: Backend Engineering · Scalable Web Architectures · AI/ML Systems
- **Founder**: [Softlligence Technologies](https://www.softlligence.tech)
- **Education**: North South University — B.S. in Computer Science & Engineering (CGPA: 3.83 / 4.00, Magna Cum Laude)

---

## ✨ Key Portfolio Sections & Features

1. **⚡ Hero Terminal & Satellite System**
   - High-contrast identity header with recruiter-ready CTAs.
   - 6 asynchronous floating satellite chips highlighting core technical specializations (`Backend Architect`, `Multimodal RAG`, `20% Load Reduction`, `Graph Routing & A*`, `Founder @ Softlligence`, `NSU CSE 3.83`).
   - One-click email copy widget with visual verification.

2. **📊 Verified Metrics Telemetry Bar**
   - Real metrics highlighting 100+ deployed organizations, 20% backend load reduction, sub-200ms p95 latencies, and 3.83 CGPA academic excellence.

3. **🏢 Softlligence Founder Spotlight**
   - Interactive live link to [www.softlligence.tech](https://www.softlligence.tech).
   - Core metrics: 100+ client instances, multi-tenant RBAC, real-time inventory ledger, and enterprise ERP microservices.

4. **🔀 Git DAG Interactive Career Pipeline**
   - Interactive Git-commit visualization representing career progression from Software Engineer & Lead Architect @ Softlligence to Academic Research Fellow @ NSU.
   - Interactive commit nodes with diff inspection and live stats.

5. **🛠️ Core Projects Showcase**
   - **[Softlligence Enterprise Suite](https://www.softlligence.tech)**: Multi-tenant ERP and inventory ecosystem serving 100+ organizations.
   - **[Neptune Shorts](https://github.com/hossaintaufiq/Youtube_Video_Generator)**: 100% private, local AI video-to-shorts generator powered by faster-whisper and OpenCV face tracking.
   - **[Dhaka Road Network](https://github.com/hossaintaufiq/DhakaRoadNetwork)**: High-performance graph routing and spatial pathfinding engine for hyper-local logistics (Foodpanda/courier delivery).
   - **[AcuMens Media Inc](https://github.com/hossaintaufiq/AcuMens-Media-Inc)**: Enterprise AI media and creative production service platform.
   - **[Multimodal RAG Clinical Assistant](https://github.com/hossaintaufiq)**: HIPAA-aligned biomedical visual-question answering engine using PyTorch, FAISS, and LangChain.
   - **[Distributed Stream Engine](https://github.com/hossaintaufiq)**: High-throughput event processing platform in Go, Kafka, and Redis handling 50k+ events/sec.

6. **🔬 Academic Research & Publications**
   - Brain tumor segmentation using Multi-Head Self-Attention Fusion CNNs (BRATS dataset).
   - Latency-optimized vector similarity retrieval for Edge RAG pipelines.

7. **🎛️ Interactive Toolchain Matrix & Project Filter**
   - Filterable skills HUD grouping Backend, AI/ML, Frontend, and Cloud/DevOps.
   - Clickable skill tags that cross-link directly to matching production projects.

8. **📬 Direct Contact Section**
   - Smooth-scrolling anchor navigation with zero forced mailto redirects.
   - Interactive copy-to-clipboard actions for email and phone, plus direct links to LinkedIn and GitHub.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with Neo-Brutalist tokens |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG Icons |
| **Typography** | Space Grotesk (Display), Inter (Sans), JetBrains Mono (Mono) |
| **Deployment** | Vercel / Netlify / Docker |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hossaintaufiq/Portfolio_V5.git
   cd Portfolio_V5
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Create a production build:**
   ```bash
   npm run build
   npm start
   ```

---

## 📁 Project Structure

```
├── public/
│   ├── hero-updated.jpg         # Profile portrait
│   ├── resume.pdf               # Downloadable resume
│   └── icons & assets
├── src/
│   ├── app/
│   │   ├── globals.css          # Neo-brutalist tokens & keyframe animations
│   │   ├── layout.tsx           # SEO metadata & font setup
│   │   └── page.tsx             # Main entry point & section assembler
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed brutalist navigation & mobile drawer
│   │   ├── HeroSection.tsx      # High-impact bio & animated satellite chips
│   │   ├── MetricsBar.tsx       # Telemetry & engineering metrics
│   │   ├── FounderFeature.tsx   # Softlligence spotlight panel
│   │   ├── AboutSection.tsx     # Engineering philosophy & core competencies
│   │   ├── ExperienceSection.tsx# Git DAG interactive career pipeline
│   │   ├── ProjectsSection.tsx  # Project showcase with category filters
│   │   ├── ResearchSection.tsx  # Academic publications & datasets
│   │   ├── SkillsSection.tsx    # Interactive toolchain HUD & project map
│   │   ├── EducationSection.tsx # NSU credentials & academic achievements
│   │   ├── ContactSection.tsx   # Direct contact panel & clipboard utilities
│   │   ├── Footer.tsx           # Technical specs & return-to-top button
│   │   └── Icons.tsx            # Custom brand SVGs
│   └── data/
│       └── portfolioData.ts     # Single source of truth data schema
├── next.config.ts               # Next.js build configuration
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # Strict TypeScript configuration
```

---

## 📬 Contact & Connect

- **Email**: [contact@taufiq.dev](mailto:contact@taufiq.dev)
- **LinkedIn**: [linkedin.com/in/hossaintaufiq](https://www.linkedin.com/in/hossaintaufiq)
- **GitHub**: [@hossaintaufiq](https://github.com/hossaintaufiq)
- **Website**: [softlligence.tech](https://www.softlligence.tech)

---

⭐ *Built with strict typing, clean architectures, and zero placeholder data.*
