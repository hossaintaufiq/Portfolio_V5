"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import {
  ExternalLink,
  Lock,
  Layers,
  Sparkles,
  Server,
  ArrowUpRight,
  Database,
  Cpu,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["ALL", "ENTERPRISE", "SAAS", "EDUCATION", "DESKTOP / ML"];

  const filteredProjects = projects.filter((p) => {
    if (filter === "ALL") return true;
    if (filter === "ENTERPRISE") return p.category.includes("ENTERPRISE");
    if (filter === "SAAS") return p.type === "SaaS" || p.category.includes("SAAS");
    if (filter === "EDUCATION") return p.category.includes("EDUCATION");
    if (filter === "DESKTOP / ML") return p.category.includes("DESKTOP");
    return true;
  });

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => !p.featured);

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
              03 / SELECTED PROJECTS
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              PRODUCTION SYSTEMS
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [ENTERPRISE ERP · MULTI-TENANT ARCHITECTURE · WEB PLATFORMS]
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="font-mono text-xs font-bold text-neutral-500 mr-2 flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 font-mono text-xs font-bold border-2 border-black transition-all ${
                filter === cat
                  ? "bg-black text-white brutal-shadow-sm"
                  : "bg-white text-black hover:bg-neutral-100"
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
              {/* Featured Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#FF5500] text-black font-mono font-black text-xs uppercase border-2 border-black">
                    ★ FEATURED FLAGSHIP ARCHITECTURE
                  </span>
                  <span className="px-2.5 py-0.5 bg-black text-white font-mono text-xs font-bold">
                    {featuredProject.category}
                  </span>
                </div>
                <div className="font-mono text-xs font-bold text-neutral-500">
                  PROJECT_ID: PRJ-01 // PRODUCTION
                </div>
              </div>

              {/* Title & Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black leading-tight">
                    {featuredProject.title}
                  </h3>
                  <div className="font-mono text-sm font-bold text-[#2563EB]">
                    {featuredProject.subtitle}
                  </div>
                  <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                    {featuredProject.description}
                  </p>
                  {featuredProject.additional && (
                    <div className="p-4 bg-[#F4F4F0] border-2 border-black font-mono text-xs sm:text-sm text-neutral-900 leading-relaxed">
                      <span className="text-[#FF5500] font-bold block mb-1 uppercase">
                        // ARCHITECTURAL DESIGN:
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
                        TECHNOLOGY STACK
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-[#1C1D20] text-[#F4F4F0] border border-neutral-700 text-[11px] font-bold"
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
              if (filter === "SAAS") return p.type === "SaaS" || p.category.includes("SAAS");
              if (filter === "EDUCATION") return p.category.includes("EDUCATION");
              if (filter === "DESKTOP / ML") return p.category.includes("DESKTOP");
              return true;
            })
            .map((project, idx) => (
              <div
                key={project.id}
                className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-md p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#FF5500] transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-black">
                    <span className="px-2 py-0.5 bg-black text-white font-mono text-xs font-bold uppercase">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="px-2 py-0.5 bg-[#10B981] text-black font-mono text-xs font-bold">
                        STATUS: {project.status}
                      </span>
                    )}
                    {project.type && (
                      <span className="px-2 py-0.5 bg-[#2563EB] text-white font-mono text-xs font-bold">
                        TYPE: {project.type}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-black mb-1 group-hover:text-[#FF5500] transition-colors">
                    {project.title}
                  </h3>
                  <div className="font-mono text-xs font-bold text-neutral-600 mb-4">
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-800 leading-relaxed font-normal mb-4">
                    {project.description}
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
                          className="px-2 py-0.5 bg-[#F4F4F0] text-black border border-black font-mono text-[11px] font-bold"
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
                        className="px-3 py-1.5 bg-white text-black border-2 border-black brutal-shadow-sm flex items-center gap-1.5 hover:bg-neutral-200 transition-colors"
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
