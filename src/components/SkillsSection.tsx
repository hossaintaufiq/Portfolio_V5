"use client";

import React, { useState, useMemo } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Code2,
  Server,
  Cpu,
  Layout,
  Database,
  Cloud,
  CheckSquare,
  Terminal,
  Search,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  SlidersHorizontal,
  Workflow,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

// Associative project mapping for interactive telemetry
const SKILL_PROJECT_MAP: Record<string, string> = {
  TypeScript: "Softlligence Cloud · Mango EV · Playpen School · Lucy AI",
  Python: "Neptune Shorts · Lucy AI · Dhaka Road Network · AI Research",
  FastAPI: "Neptune Shorts · Lucy AI · Dhaka Road Network",
  "Next.js": "Softlligence Cloud · MEV Website · Admission Portal",
  "React.js": "Brooksource Enterprise · AcuMens Media · Neptune Shorts",
  "React 19": "Lucy AI Assistant · Neptune Shorts UI",
  Vite: "AcuMens Media Inc · Neptune Shorts · Lucy AI Assistant",
  PostgreSQL: "Softlligence Cloud · MEV Systems · Mango EV",
  "Multimodal RAG": "North South University Research Lab",
  "faster-whisper": "Neptune Shorts (STT) · Lucy AI Assistant",
  OpenCV: "Neptune Shorts (Face-Tracker) · HandTrack Studio",
  MediaPipe: "HandTrack Studio (Dual-Hand Tracker)",
  "Ollama LLMs": "Lucy AI (Qwen3 0.6B) · Neptune Shorts (Titler)",
  "PyTorch / CUDA": "Deep Learning Research · Neptune Shorts",
  AWS: "Softlligence Cloud Multi-Tenant · Mango EV",
  Docker: "Microservices · Enterprise Deployment Containers",
  "Prisma ORM": "Softlligence Cloud Multi-Tenant SaaS",
  WebSockets: "Lucy AI (Live Voice Talk Loop)",
  "Graph Algorithms (Dijkstra/A*)": "Dhaka Road Network Pathfinding Engine",
  Redux: "Brooksource Fortune 500 React Solutions",
  "Tailwind CSS 4": "Portfolio v5 · Neptune Shorts · Lucy AI · AcuMens Media",
};

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState<string>("TypeScript");

  const categoryDescriptions: Record<string, string> = {
    "01_LANG": "Core languages for systems, algorithmic problems & web services",
    "02_BACK": "Distributed backend architectures, APIs & authentication",
    "03_AIML": "Multimodal RAG frameworks, LLMs, Computer Vision & predictive ML",
    "04_FRNT": "Modern component systems, state management & reactive UIs",
    "05_DATA": "Relational & document stores with schema indexing",
    "06_CLOD": "Cloud hosting, continuous integration & containerization",
    "07_METH": "Engineering discipline, testing patterns & graph data structures",
  };

  const getCategoryMeta = (code: string) => {
    switch (code) {
      case "01_LANG":
        return {
          icon: <Code2 className="w-4 h-4 text-[#FF5500]" />,
          accentColor: "border-l-[#FF5500]",
          textColor: "text-[#FF5500]",
          bgLight: "bg-[#FF5500]/10",
        };
      case "02_BACK":
        return {
          icon: <Server className="w-4 h-4 text-[#2563EB]" />,
          accentColor: "border-l-[#2563EB]",
          textColor: "text-[#2563EB]",
          bgLight: "bg-[#2563EB]/10",
        };
      case "03_AIML":
        return {
          icon: <Cpu className="w-4 h-4 text-[#10B981]" />,
          accentColor: "border-l-[#10B981]",
          textColor: "text-[#10B981]",
          bgLight: "bg-[#10B981]/10",
        };
      case "04_FRNT":
        return {
          icon: <Layout className="w-4 h-4 text-purple-600" />,
          accentColor: "border-l-purple-600",
          textColor: "text-purple-600",
          bgLight: "bg-purple-600/10",
        };
      case "05_DATA":
        return {
          icon: <Database className="w-4 h-4 text-amber-600" />,
          accentColor: "border-l-amber-600",
          textColor: "text-amber-600",
          bgLight: "bg-amber-600/10",
        };
      case "06_CLOD":
        return {
          icon: <Cloud className="w-4 h-4 text-cyan-600" />,
          accentColor: "border-l-cyan-600",
          textColor: "text-cyan-600",
          bgLight: "bg-cyan-600/10",
        };
      case "07_METH":
        return {
          icon: <CheckSquare className="w-4 h-4 text-emerald-600" />,
          accentColor: "border-l-emerald-600",
          textColor: "text-emerald-600",
          bgLight: "bg-emerald-600/10",
        };
      default:
        return {
          icon: <Terminal className="w-4 h-4" />,
          accentColor: "border-l-black",
          textColor: "text-black",
          bgLight: "bg-neutral-100",
        };
    }
  };

  // Filter skills based on category and search query
  const filteredCategories = useMemo(() => {
    return skills
      .map((cat) => {
        const matchesCategory =
          selectedCategory === "ALL" ||
          cat.categoryCode === selectedCategory ||
          cat.name.toLowerCase().includes(selectedCategory.toLowerCase());

        if (!matchesCategory) return null;

        const filteredSkills = cat.skills.filter((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );

        if (searchQuery.trim() !== "" && filteredSkills.length === 0) {
          return null;
        }

        return {
          ...cat,
          skills: searchQuery.trim() !== "" ? filteredSkills : cat.skills,
        };
      })
      .filter(Boolean);
  }, [skills, selectedCategory, searchQuery]);

  const totalFilteredSkills = useMemo(() => {
    return filteredCategories.reduce(
      (sum, cat) => sum + (cat ? cat.skills.length : 0),
      0
    );
  }, [filteredCategories]);

  // Core 4 Pillars HUD
  const corePillars = [
    {
      title: "BACKEND & DISTRIBUTED SYSTEMS",
      focus: "FastAPI · Node.js · Express · REST / GraphQL · WebSockets · Multi-Tenant RBAC",
      highlight: "High concurrency, strict auth & microservice contracts",
      color: "border-[#2563EB] text-[#2563EB]",
      icon: <Server className="w-4 h-4 text-[#2563EB]" />,
    },
    {
      title: "AI / ML, RAG & COMPUTER VISION",
      focus: "Multimodal RAG · faster-whisper · OpenCV · MediaPipe · Ollama · PyTorch",
      highlight: "Local-first offline AI pipelines & hallucination mitigation",
      color: "border-[#10B981] text-[#10B981]",
      icon: <Cpu className="w-4 h-4 text-[#10B981]" />,
    },
    {
      title: "DATA ENGINES & GRAPH ALGORITHMS",
      focus: "PostgreSQL · Prisma ORM · Graph Routing (Dijkstra/A*) · Spatial Indexing · MongoDB",
      highlight: "Relational integrity, schema indexing & graph pathfinding",
      color: "border-[#FF5500] text-[#FF5500]",
      icon: <Database className="w-4 h-4 text-[#FF5500]" />,
    },
    {
      title: "MODERN WEB & CLOUD INFRASTRUCTURE",
      focus: "Next.js 16 · React 19 · TypeScript · AWS Cloud · Docker · GitHub Actions CI/CD",
      highlight: "Zero-fluff type rigor & production automated deployment",
      color: "border-black text-black",
      icon: <Cloud className="w-4 h-4 text-neutral-800" />,
    },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-14 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              05 / TECHNICAL TAXONOMY & TOOLCHAIN
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              SKILLS & STACK
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [VERIFIED PRODUCTION TOOLCHAIN · BACKEND · AI/ML · GRAPH ALGORITHMS]
          </div>
        </div>

        {/* 01. CORE ARCHITECTURE PILLARS (BENTO HUD) */}
        <div className="mb-10">
          <div className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>// FOUR CORE PRODUCTION PILLARS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-black brutal-shadow-md p-4 sm:p-5 flex flex-col justify-between hover:border-black hover:-translate-y-0.5 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-neutral-200">
                    <span className="font-mono text-[10px] font-black uppercase text-neutral-400">
                      PILLAR_0{idx + 1}
                    </span>
                    {pillar.icon}
                  </div>
                  <h3 className="font-display font-black text-base uppercase tracking-tight text-black mb-2">
                    {pillar.title}
                  </h3>
                  <div className="font-mono text-xs font-bold text-neutral-800 leading-relaxed mb-3">
                    {pillar.focus}
                  </div>
                </div>
                <div className="pt-2 border-t border-dashed border-neutral-300 font-mono text-[11px] text-neutral-600 leading-snug">
                  ↳ {pillar.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 02. INTERACTIVE TELEMETRY & LIVE SKILL INSPECTOR */}
        <div className="bg-black text-white border-2 sm:border-[3px] border-black brutal-shadow-lg p-4 sm:p-6 mb-8 font-mono">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-neutral-800 mb-4">
            <div className="flex items-center gap-2 text-xs text-[#10B981] font-bold uppercase">
              <Terminal className="w-4 h-4" />
              <span>// LIVE_TOOLCHAIN_INSPECTOR</span>
            </div>
            <div className="text-[11px] text-neutral-400 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#10B981] animate-pulse inline-block"></span>
              <span>HOVER / TAP ANY BADGE FOR DEPLOYMENT MAPPING</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-xs">
            <div className="md:col-span-4 bg-[#141517] p-3 border border-neutral-700">
              <span className="text-neutral-400 block text-[10px] uppercase mb-1">
                ACTIVE INSPECTION TARGET:
              </span>
              <span className="font-display font-black text-lg sm:text-xl text-[#FF5500] uppercase tracking-wider block">
                {hoveredSkill}
              </span>
            </div>

            <div className="md:col-span-8 bg-[#141517] p-3 border border-neutral-700">
              <span className="text-neutral-400 block text-[10px] uppercase mb-1">
                ASSOCIATED PRODUCTION DEPLOYMENTS & REPOSITORIES:
              </span>
              <span className="font-bold text-white text-xs sm:text-sm leading-relaxed block">
                {SKILL_PROJECT_MAP[hoveredSkill] ||
                  "Production-grade software systems across commercial and academic repositories."}
              </span>
            </div>
          </div>
        </div>

        {/* 03. SEARCH & CATEGORY FILTER BAR */}
        <div className="bg-white border-2 sm:border-[3px] border-black p-4 brutal-shadow-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 font-mono text-xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "ALL", label: "ALL" },
              { id: "01_LANG", label: "LANGUAGES" },
              { id: "02_BACK", label: "BACKEND" },
              { id: "03_AIML", label: "AI / ML / CV" },
              { id: "04_FRNT", label: "FRONTEND" },
              { id: "05_DATA", label: "DATABASES" },
              { id: "06_CLOD", label: "CLOUD & DEVOPS" },
              { id: "07_METH", label: "ALGORITHMS" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-2.5 py-1 font-bold border-2 border-black transition-all ${
                  selectedCategory === tab.id
                    ? "bg-black text-white brutal-shadow-sm"
                    : "bg-white text-black hover:bg-neutral-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Real-time Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search tools (e.g. Python, Docker, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-[#F4F4F0] border-2 border-black text-black font-mono text-xs font-bold focus:outline-none focus:bg-white placeholder:text-neutral-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-black text-neutral-600 hover:text-black"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 04. CATEGORIZED SKILLS TAXONOMY GRID */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => {
              if (!category) return null;
              const meta = getCategoryMeta(category.categoryCode);
              const desc =
                categoryDescriptions[category.categoryCode] ||
                "Production toolchain";

              return (
                <div
                  key={category.categoryCode}
                  className={`bg-white border-2 sm:border-[3px] border-black border-l-8 ${meta.accentColor} brutal-shadow-md flex flex-col justify-between group hover:border-black transition-colors`}
                >
                  <div>
                    {/* Category Header */}
                    <div className="bg-black text-white p-3.5 sm:p-4 flex items-center justify-between border-b-2 border-black font-mono">
                      <div className="flex items-center gap-2">
                        {meta.icon}
                        <span className="font-bold text-xs sm:text-sm tracking-wider uppercase truncate">
                          {category.name}
                        </span>
                      </div>
                      <span className={`text-[11px] ${meta.textColor} font-bold flex-shrink-0`}>
                        {category.categoryCode}
                      </span>
                    </div>

                    {/* Short Description */}
                    <div className="p-3 bg-[#F4F4F0] border-b border-neutral-300 font-mono text-[11px] text-neutral-600 leading-snug">
                      {desc}
                    </div>

                    {/* Skills Items Block */}
                    <div className="p-4 sm:p-5">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => {
                          const isHovered = hoveredSkill === skill;
                          return (
                            <button
                              key={sIdx}
                              onMouseEnter={() => setHoveredSkill(skill)}
                              onClick={() => setHoveredSkill(skill)}
                              className={`px-3 py-1.5 font-mono text-xs font-bold text-left flex items-center gap-1.5 transition-all border ${
                                isHovered
                                  ? "bg-[#FF5500] text-black border-black brutal-shadow-sm -translate-y-0.5"
                                  : "bg-white text-black border-black hover:bg-[#FF5500] hover:text-black"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 inline-block ${
                                  isHovered ? "bg-white" : "bg-black"
                                }`}
                              ></span>
                              <span>{skill}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Count Ticker */}
                  <div className="bg-[#F4F4F0] px-4 py-2 border-t border-black font-mono text-[10px] text-neutral-600 flex items-center justify-between">
                    <span>VERIFIED MODULES</span>
                    <span className="font-bold text-black">
                      {category.skills.length} VERIFIED
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 bg-white border-2 border-black brutal-shadow-md text-center font-mono">
            <div className="text-sm font-bold text-black mb-1">
              NO MATCHING TOOLS FOUND FOR &ldquo;{searchQuery}&rdquo;
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="mt-2 px-3 py-1 bg-black text-white text-xs font-bold uppercase hover:bg-[#FF5500] hover:text-black transition-colors"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
