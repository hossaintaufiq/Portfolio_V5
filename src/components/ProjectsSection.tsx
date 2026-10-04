"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import {
  ExternalLink,
  Lock,
  ArrowUpRight,
  SlidersHorizontal,
  Server,
  Database,
  Layers,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState("ALL");

  const categories = [
    "ALL",
    "ENTERPRISE",
    "AI AGENTS / ML",
    "BACKEND / ALGO",
    "SAAS",
    "EDUCATION",
    "DESKTOP",
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "ENTERPRISE") return p.category.includes("ENTERPRISE");
    if (filter === "AI AGENTS / ML")
      return (
        p.category.includes("AGENT") ||
        p.category.includes("VISION") ||
        p.category.includes("AI")
      );
    if (filter === "BACKEND / ALGO")
      return (
        p.category.includes("BACKEND") || p.category.includes("ALGORITHM")
      );
    if (filter === "SAAS") return p.type === "SaaS" || p.category.includes("SAAS");
    if (filter === "EDUCATION") return p.category.includes("EDUCATION");
    if (filter === "DESKTOP") return p.category.includes("DESKTOP");
    return true;
  });

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => !p.featured);

  const getCategoryBadgeColor = (cat: string) => {
    if (cat.includes("AGENT")) return "bg-[#FF5500] text-black";
    if (cat.includes("ENTERPRISE")) return "bg-[#FF5500] text-black";
    if (cat.includes("BACKEND") || cat.includes("ALGORITHM"))
      return "bg-[#06B6D4] text-black";
    if (cat.includes("SAAS")) return "bg-[#2563EB] text-white";
    if (cat.includes("EDUCATION")) return "bg-[#10B981] text-black";
    if (cat.includes("VISION") || cat.includes("AI"))
      return "bg-[#84CC16] text-black";
    if (cat.includes("DESKTOP")) return "bg-black text-white";
    return "bg-black text-white";
  };

  return (
    <section
      id="projects"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              03 / CASE STUDY ARCHIVE
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              PRODUCTION SYSTEMS
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [ENTERPRISE ERP · MULTI-TENANT SAAS · DESKTOP / AI ARCHITECTURE]
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="font-mono text-xs font-bold text-neutral-500 mr-2 flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            FILTER CATEGORY:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 font-mono text-xs font-bold border-2 border-black transition-all ${
                filter === cat
                  ? "bg-black text-white brutal-shadow-sm"
                  : "bg-white text-black hover:bg-neutral-100 hover:text-[#2563EB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 01. DOMINANT FEATURED PROJECT: SOFTLLIGENCE MANUFACTURING CLOUD */}
        {(filter === "ALL" || filter === "ENTERPRISE" || filter === "SAAS") && (
          <div className="mb-10">
            <div className="bg-white border-2 sm:border-[4px] border-black brutal-shadow-xl p-6 sm:p-8 lg:p-10 relative group">
              {/* Featured Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#FF5500] text-black font-mono font-black text-xs uppercase border border-black">
                    ★ FEATURED FLAGSHIP CASE STUDY
                  </span>
                  <span className={`px-2.5 py-0.5 font-mono text-xs font-bold ${getCategoryBadgeColor(featuredProject.category)}`}>
                    [{featuredProject.category}]
                  </span>
                </div>
                <div className="font-mono text-xs font-bold text-neutral-500">
                  PROJECT_ID: PRJ-01 // PRODUCTION ARCHITECTURE
                </div>
              </div>

              {/* Title & Description with Editorial Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black leading-tight">
                    {featuredProject.title}
                  </h3>
                  <div className="font-mono text-sm font-bold text-[#2563EB]">
                    ↳ {featuredProject.subtitle}
                  </div>
                  <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                    Built a{" "}
                    <span className="font-bold text-black bg-[#FF5500]/10 border-b-2 border-[#FF5500] px-0.5">
                      multi-tenant
                    </span>{" "}
                    Manufacturing{" "}
                    <span className="font-bold text-[#2563EB]">
                      ERP/MIS platform
                    </span>{" "}
                    for industrial businesses with modular architecture and{" "}
                    <span className="font-semibold text-black">
                      enterprise-grade scalability
                    </span>
                    .
                  </p>

                  {featuredProject.additional && (
                    <div className="p-4 bg-[#F4F4F0] border-2 border-black font-mono text-xs sm:text-sm text-neutral-900 leading-relaxed">
                      <span className="text-[#FF5500] font-bold block mb-1 uppercase">
                        // ARCHITECTURAL DESIGN & TENANT ISOLATION:
                      </span>
                      {featuredProject.additional}
                    </div>
                  )}

                  {/* Core Modules Grid */}
                  {featuredProject.modules && (
                    <div>
                      <div className="font-mono text-xs font-bold text-black uppercase tracking-wider mb-2">
                        CORE ENTERPRISE MODULES:
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 font-mono text-xs">
                        {featuredProject.modules.map((mod, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-2 bg-white border border-black font-bold text-center group-hover:border-[#FF5500] transition-colors"
                          >
                            + {mod}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Spec Card & Action Links */}
                <div className="lg:col-span-5 bg-black text-white p-6 border-2 sm:border-[3px] border-black font-mono flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between text-[#10B981] font-bold text-xs mb-4 pb-2 border-b border-neutral-800">
                      <span>// SYSTEM METADATA</span>
                      <span>AWS HOSTED</span>
                    </div>

                    <div className="space-y-3 text-xs mb-6">
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase">
                          TENANCY MODEL
                        </span>
                        <span className="font-bold text-white">
                          Multi-Tenant SaaS with RBAC Isolation
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase">
                          DATABASE & ORM
                        </span>
                        <span className="font-bold text-white">
                          PostgreSQL & Prisma with Modular Schemas
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase">
                          SECTOR COMPATIBILITY
                        </span>
                        <span className="font-bold text-[#FF5500]">
                          Reusable Industry-Template Framework
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-neutral-400 text-[10px] uppercase mb-2">
                        KEY TECHNOLOGIES
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-[#1C1D20] text-[#10B981] border border-neutral-700 text-[11px] font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 bg-[#FF5500] text-black font-bold text-xs uppercase text-center border-2 border-black flex items-center justify-center gap-1 hover:bg-[#ff6c21]"
                    >
                      <span>LIVE URL</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 bg-white text-black font-bold text-xs uppercase text-center border-2 border-black flex items-center justify-center gap-1 hover:bg-neutral-200"
                    >
                      <span>GITHUB</span>
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 02. ASYMMETRIC GRID FOR SECONDARY PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {secondaryProjects
            .filter((p) => {
              if (filter === "ALL") return true;
              if (filter === "ENTERPRISE") return p.category.includes("ENTERPRISE");
              if (filter === "AI AGENTS / ML")
                return (
                  p.category.includes("AGENT") ||
                  p.category.includes("VISION") ||
                  p.category.includes("AI")
                );
              if (filter === "BACKEND / ALGO")
                return (
                  p.category.includes("BACKEND") || p.category.includes("ALGORITHM")
                );
              if (filter === "SAAS") return p.type === "SaaS" || p.category.includes("SAAS");
              if (filter === "EDUCATION") return p.category.includes("EDUCATION");
              if (filter === "DESKTOP") return p.category.includes("DESKTOP");
              return true;
            })
            .map((project, idx) => (
              <div
                key={project.id}
                className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-md p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#2563EB] transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-black">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 font-mono text-xs font-bold uppercase ${getCategoryBadgeColor(project.category)}`}>
                        [{project.category}]
                      </span>
                    </div>
                    {project.status && (
                      <span className="px-2 py-0.5 bg-[#10B981] text-black font-mono text-[11px] font-bold">
                        {project.status}
                      </span>
                    )}
                    {project.type && (
                      <span className="px-2 py-0.5 bg-[#2563EB] text-white font-mono text-[11px] font-bold">
                        {project.type}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-black mb-1 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <div className="font-mono text-xs font-bold text-neutral-600 mb-4">
                    ↳ {project.subtitle}
                  </div>

                  {/* Description with selective keyword highlight */}
                  <p className="text-sm text-neutral-800 leading-relaxed font-normal mb-4">
                    {project.id === "playpen-school" ? (
                      <>
                        Developed a production-ready school management platform
                        enabling{" "}
                        <span className="font-semibold text-black bg-[#10B981]/15 px-0.5">
                          online admissions
                        </span>
                        ,{" "}
                        <span className="font-semibold text-[#2563EB]">
                          tuition payments
                        </span>
                        , and event management.
                      </>
                    ) : project.id === "mango-ev" ? (
                      <>
                        Scalable full-stack platform implementing secure{" "}
                        <span className="font-semibold text-[#2563EB]">
                          reservation workflows
                        </span>
                        , inquiry management, and payment integration.
                      </>
                    ) : project.id === "focusflow-app" ? (
                      <>
                        Architected a{" "}
                        <span className="font-semibold text-black bg-neutral-200 px-0.5">
                          fully offline productivity application
                        </span>{" "}
                        using Python and PySide6 with local data persistence.
                      </>
                    ) : project.id === "handtrack-studio" ? (
                      <>
                        Interactive computer vision application using{" "}
                        <span className="font-semibold text-black bg-[#84CC16]/20 px-0.5 border-b border-[#84CC16]">
                          MediaPipe & OpenCV
                        </span>{" "}
                        for real-time dual-hand tracking, sub-pixel landmark detection, and gesture-controlled jigsaw puzzles.
                      </>
                    ) : project.id === "lucy-ai-assistant" ? (
                      <>
                        Local-first personal AI assistant built with{" "}
                        <span className="font-semibold text-black bg-[#FF5500]/15 px-0.5 border-b border-[#FF5500]">
                          FastAPI, React 19 & Ollama
                        </span>{" "}
                        featuring bidirectional live voice (Whisper STT + Kokoro TTS), on-device CPU LLM inference, and persistent markdown memory.
                      </>
                    ) : project.id === "uni-admission-portal" ? (
                      <>
                        Comprehensive student admission portal featuring{" "}
                        <span className="font-semibold text-black bg-[#10B981]/15 px-0.5 border-b border-[#10B981]">
                          real-time deadline tracking
                        </span>
                        , subject & curriculum comparisons, tuition breakdown analytics, and entrance test question banks.
                      </>
                    ) : project.id === "neptune-shorts" ? (
                      <>
                        Local AI video-to-shorts generator running 100% privately with{" "}
                        <span className="font-semibold text-black bg-[#FF5500]/15 px-0.5 border-b border-[#FF5500]">
                          faster-whisper STT & OpenCV face-tracking
                        </span>
                        , semantic moment selection (15–20s), EMA jitter-free reframing (9:16), local Ollama clickbait titling, and EBU R128 audio normalization.
                      </>
                    ) : project.id === "dhaka-road-network" ? (
                      <>
                        Graph routing and pathfinding backend for on-demand delivery logistics (Foodpanda & local fleets) implementing{" "}
                        <span className="font-semibold text-black bg-[#06B6D4]/20 px-0.5 border-b border-[#06B6D4]">
                          Dijkstra & A* algorithms
                        </span>
                        , turn-restriction weights, and spatial indexing to fast-track rider routing and ETA computation across Dhaka city.
                      </>
                    ) : project.id === "acumens-media" ? (
                      <>
                        Modern agency frontend for AcuMens Media Inc built with{" "}
                        <span className="font-semibold text-black bg-[#2563EB]/15 px-0.5 border-b border-[#2563EB]">
                          React & Vite
                        </span>
                        , featuring interactive portfolio reels, service showcases, package pricing calculators, and Core Web Vitals performance tuning.
                      </>
                    ) : (
                      project.description
                    )}
                  </p>

                  {/* Additional notes */}
                  {project.additional && (
                    <div className="p-3 bg-[#F4F4F0] border border-black font-mono text-xs text-neutral-800 leading-relaxed mb-4">
                      {project.additional}
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech Stack */}
                  <div className="pt-3 border-t-2 border-dashed border-neutral-300 mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[#F4F4F0] text-neutral-900 border border-black font-mono text-[11px] font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 bg-black text-white border-2 border-black brutal-shadow-sm flex items-center gap-1.5 hover:bg-[#FF5500] hover:text-black transition-colors"
                      >
                        <span>LIVE URL</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {project.previewUrl && (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 bg-[#2563EB] text-white border-2 border-black brutal-shadow-sm flex items-center gap-1.5 hover:bg-blue-700 transition-colors"
                      >
                        <span>PERSONAL PREVIEW</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 bg-white text-black border-2 border-black brutal-shadow-sm flex items-center gap-1.5 hover:bg-neutral-200 hover:text-[#2563EB] transition-colors"
                      >
                        <span>GITHUB</span>
                        <GithubIcon className="w-3 h-3" />
                      </a>
                    )}

                    {project.isPrivateRepo && (
                      <span className="px-3 py-1.5 bg-neutral-200 text-neutral-700 border-2 border-neutral-400 font-mono text-xs flex items-center gap-1.5 cursor-not-allowed">
                        <Lock className="w-3 h-3" />
                        <span>PRIVATE REPO</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
