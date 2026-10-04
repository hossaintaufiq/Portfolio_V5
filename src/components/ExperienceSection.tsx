"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Building2,
  Calendar,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  CheckCircle2,
  Terminal,
  ExternalLink,
  ChevronRight,
  FileText,
  ArrowUpRight,
  Cpu,
  Car,
  Settings,
  Code2,
  Users,
  GraduationCap,
  Zap,
  ShieldCheck,
  Layers,
  Sparkles,
  Activity,
  Check,
  Copy,
} from "lucide-react";

export default function ExperienceSection() {
  const { founderFeature } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<"ALL" | "MAIN_ENGINEERING" | "LEADERSHIP_TRACK">("ALL");
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const copyCommit = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  // Git DAG Commit Milestones
  const gitCommitItems = [
    {
      id: "commit-mev",
      commitHash: "a4f89d1",
      branch: "main",
      branchTag: "origin/production",
      stepNum: "01",
      category: "MAIN_ENGINEERING",
      commitType: "feat(ev-platform)",
      commitTitle: "Architect in-house EV platform & operational CRM systems",
      role: "Software Engineer",
      company: "MEV (Mango Electric Vehicle)",
      companyContext: "Electric Vehicle Manufacturer · In-House Vehicle Platform & Operations",
      period: "Jan 2026 – Present",
      location: "Dhaka, Bangladesh · On-site",
      themeColor: "#FF5500", // High-voltage Orange
      tagColor: "bg-[#FF5500] text-black",
      badge: "ACTIVE ON-SITE ROLE",
      ciStatus: "CI: 3/3 PASSING · LIVE PROD",
      releaseTag: "v3.2.0-mev",
      isHead: true,
      icon: <Car className="w-4 h-4 text-white" />,
      summary:
        "Developing software applications for MEV's locally built electric vehicles and architecting internal operational CRM and management tools.",
      deliverables: [
        "Maintain and enhance MEV's internal management systems, supporting mission-critical day-to-day operations across the business.",
        "Develop applications for MEV's locally built electric vehicles, delivering software for the in-house vehicle platform.",
        "Build and maintain operational CRM and customer-facing tools using Next.js, Express.js, PostgreSQL, and TypeScript.",
      ],
      technologies: ["Next.js", "Express.js", "PostgreSQL", "TypeScript", "Node.js", "Vehicle Platform", "CRM"],
    },
    {
      id: "commit-brooksource",
      commitHash: "7bc2014",
      branch: "main",
      branchTag: "release/fortune500",
      stepNum: "02",
      category: "MAIN_ENGINEERING",
      commitType: "perf(frontend)",
      commitTitle: "Optimize React bundle performance and reduce latency by 20%",
      role: "Full-Stack Developer",
      company: "Brooksource",
      companyContext: "US-based staffing firm delivering React solutions to Fortune 500 clients",
      period: "Apr 2023 – Sep 2024",
      location: "Remote (US Enterprise)",
      themeColor: "#EC4899", // Magenta Pink
      tagColor: "bg-[#EC4899] text-white",
      badge: "FORTUNE 500 CLIENTS",
      ciStatus: "CI: 4/4 PASSING · STABLE",
      releaseTag: "v2.8.0-enterprise",
      isHead: false,
      icon: <Settings className="w-4 h-4 text-white" />,
      summary:
        "Engineered production React.js & TypeScript applications with Redux serving high-traffic Fortune 500 enterprise clients.",
      deliverables: [
        "Reduced front-end load time by 20% through code splitting, lazy loading, and bundle optimization.",
        "Engineered API integration layers that measurably reduced cross-service communication latency.",
        "Consistently shipped features ahead of schedule across distributed Agile teams spanning multiple time zones.",
      ],
      technologies: ["React.js", "TypeScript", "Redux", "API Integration", "Agile", "Bundle Optimization"],
    },
    {
      id: "commit-americares",
      commitHash: "e182390",
      branch: "main",
      branchTag: "foundation/core-ui",
      stepNum: "03",
      category: "MAIN_ENGINEERING",
      commitType: "feat(web)",
      commitTitle: "Build modular web UI patterns & cross-service REST APIs",
      role: "Associate, Web Developer",
      company: "Americares",
      companyContext: "Global Health & Humanitarian Organization Web Applications",
      period: "Feb 2023 – Nov 2023",
      location: "Remote / Hybrid",
      themeColor: "#06B6D4", // Cyan Blue
      tagColor: "bg-[#06B6D4] text-black",
      badge: "CAREER FOUNDATION",
      ciStatus: "CI: 2/2 PASSING · MERGED",
      releaseTag: "v1.0.0-foundation",
      isHead: false,
      icon: <Code2 className="w-4 h-4 text-white" />,
      summary:
        "Built and maintained responsive web applications, establishing strong software engineering foundations and reusable UI patterns.",
      deliverables: [
        "Built and maintained web applications as an Associate Web Developer, exploring modern engineering practices to grow rapidly.",
        "Collaborated on responsive UI components, cross-browser compatibility, and modular codebase maintenance.",
      ],
      technologies: ["JavaScript", "React.js", "HTML5", "CSS3", "REST APIs", "Git"],
    },
    {
      id: "commit-nsu-acm",
      commitHash: "93f41aa",
      branch: "leadership/community",
      branchTag: "branch/acm-rnd",
      stepNum: "04",
      category: "LEADERSHIP_TRACK",
      commitType: "feat(community)",
      commitTitle: "Coordinate web development platforms & moderate R&D tracks",
      role: "Coordinator Web Group & Moderator R&D Group",
      company: "NSU ACM Student Chapter",
      companyContext: "ACM Student Chapter · North South University",
      period: "Oct 18, 2024 – Present",
      location: "Dhaka, Bangladesh",
      themeColor: "#84CC16", // Lime Green
      tagColor: "bg-[#84CC16] text-black",
      badge: "LEADERSHIP & RESEARCH",
      ciStatus: "STATUS: ACTIVE STEERING",
      releaseTag: "acm-v2.0",
      isHead: true,
      icon: <Cpu className="w-4 h-4 text-black" />,
      summary:
        "Leading and coordinating the web technical group while moderating research and development tracks, hackathons, and technical workshops.",
      deliverables: [
        "Coordinate web development initiatives, portal maintenance, and technical platforms for NSU ACM.",
        "Moderate research & development focus groups guiding students in Deep Learning, NLP, and AI applications.",
        "Organize national computing competitions, workshops, and technical mentorship sessions.",
      ],
      technologies: ["Web Architecture", "Research Moderation", "Student Leadership", "ACM"],
    },
    {
      id: "commit-bylc",
      commitHash: "c59102b",
      branch: "leadership/community",
      branchTag: "branch/youth-leader",
      stepNum: "05",
      category: "LEADERSHIP_TRACK",
      commitType: "feat(facilitation)",
      commitTitle: "Facilitate youth development workshops & community engagement",
      role: "Volunteer — 'Be the Next Leader'",
      company: "Bangladesh Youth Leadership Center (BYLC)",
      companyContext: "National Youth Leadership & Community Initiative",
      period: "Oct 20, 2022 – Oct 20, 2023",
      location: "Dhaka, Bangladesh",
      themeColor: "#8B5CF6", // Violet Purple
      tagColor: "bg-[#8B5CF6] text-white",
      badge: "COMMUNITY LEADERSHIP",
      ciStatus: "STATUS: COMPLETED",
      releaseTag: "bylc-2023",
      isHead: false,
      icon: <Users className="w-4 h-4 text-white" />,
      summary:
        "Participated in the 'Be the next leader' youth development initiative, facilitating leadership workshops and public engagement.",
      deliverables: [
        "Facilitated youth leadership workshops, community outreach initiatives, and collaborative training camps.",
        "Honed public speaking, stakeholder engagement, and team coordination across diverse student cohorts.",
      ],
      technologies: ["Leadership", "Community Outreach", "Public Speaking", "BYLC"],
    },
    {
      id: "commit-ndnsc",
      commitHash: "d0018f2",
      branch: "leadership/community",
      branchTag: "branch/ndc-admin",
      stepNum: "06",
      category: "LEADERSHIP_TRACK",
      commitType: "feat(governance)",
      commitTitle: "Direct club administration & convention logistics at Notre Dame College",
      role: "Vice President, Dep of Administration",
      company: "Notre Dame Nature Study Club (NDNSC)",
      companyContext: "Notre Dame College, Dhaka",
      period: "Jul 15, 2018 – Jun 14, 2020",
      location: "Dhaka, Bangladesh",
      themeColor: "#F59E0B", // Amber Gold
      tagColor: "bg-[#F59E0B] text-black",
      badge: "EXECUTIVE GOVERNANCE",
      ciStatus: "STATUS: COMPLETED",
      releaseTag: "ndc-2020",
      isHead: false,
      icon: <GraduationCap className="w-4 h-4 text-black" />,
      summary:
        "Directed club administration, team governance, and logistical operations for nationwide student conventions, exhibitions, and competitions.",
      deliverables: [
        "Managed club administration, executive communications, and event logistics for major college festivals.",
        "Led a multidisciplinary student administrative committee, ensuring smooth coordination and budget execution.",
      ],
      technologies: ["Administration", "Event Logistics", "Executive Governance", "Notre Dame College"],
    },
  ];

  const filteredCommits = gitCommitItems.filter((item) => {
    if (filter === "ALL") return true;
    return item.category === filter;
  });

  return (
    <section
      id="experience"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-14 sm:py-20 lg:py-24 relative overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              <GitBranch className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>02 / CAREER REPOSITORY & GIT COMMIT GRAPH</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              CAREER PIPELINE
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Branch Filter Tabs */}
            <div className="flex flex-wrap items-center bg-white border-2 border-black p-1 brutal-shadow-sm font-mono text-xs font-bold">
              <button
                onClick={() => setFilter("ALL")}
                className={`px-2.5 sm:px-3 py-1 transition-all ${
                  filter === "ALL"
                    ? "bg-black text-white"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                ALL COMMITS ({gitCommitItems.length})
              </button>
              <button
                onClick={() => setFilter("MAIN_ENGINEERING")}
                className={`px-2.5 sm:px-3 py-1 transition-all flex items-center gap-1 ${
                  filter === "MAIN_ENGINEERING"
                    ? "bg-[#FF5500] text-black"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                <GitBranch className="w-3 h-3" />
                <span>main (3)</span>
              </button>
              <button
                onClick={() => setFilter("LEADERSHIP_TRACK")}
                className={`px-2.5 sm:px-3 py-1 transition-all flex items-center gap-1 ${
                  filter === "LEADERSHIP_TRACK"
                    ? "bg-[#84CC16] text-black"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                <GitMerge className="w-3 h-3" />
                <span>leadership (3)</span>
              </button>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 sm:px-4 py-2 bg-[#FF5500] text-black font-mono font-bold text-xs uppercase border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 hover:bg-[#ff691e]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 01. ORIGIN MASTER REPOSITORY: SOFTLLIGENCE TECHNOLOGIES       */}
        {/* ============================================================ */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-white border-2 sm:border-[3px] lg:border-[4px] border-black brutal-shadow-xl overflow-hidden group">
            {/* Top Git Header Banner */}
            <div className="bg-black text-white px-4 sm:px-8 py-3.5 border-b-2 sm:border-b-[3px] border-black flex flex-wrap items-center justify-between gap-2 font-mono">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                <span className="w-2.5 h-2.5 bg-[#FF5500]"></span>
                <span className="text-[#FF5500]">origin/softlligence-tech</span>
                <span className="text-neutral-500">::</span>
                <span className="text-neutral-300">FOUNDER & EXECUTIVE REPOSITORY</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 bg-[#10B981] text-black font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>PRODUCTION RUNNING</span>
                </span>
                <span className="text-neutral-400 hidden sm:inline">SHA-256 VERIFIED</span>
              </div>
            </div>

            {/* Large Executive Content Area */}
            <div className="p-4 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* Left Column: Scope, Narrative & Deliverables */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-black text-white font-mono text-xs font-black uppercase">
                        ROLE: {founderFeature.role}
                      </span>
                      <span className="px-2.5 py-1 bg-[#10B981]/20 text-black border border-black font-mono text-xs font-bold">
                        ORIGIN MASTER
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black mb-3 leading-tight">
                      {founderFeature.company}
                    </h3>

                    <p className="text-sm sm:text-lg text-neutral-800 leading-relaxed font-normal mb-5 border-l-4 border-[#FF5500] pl-3.5 bg-[#F4F4F0] py-3">
                      Founder of{" "}
                      <span className="font-bold text-black">
                        Softlligence Technologies
                      </span>{" "}
                      and contributor to{" "}
                      <span className="font-bold text-[#2563EB]">
                        production software
                      </span>{" "}
                      used by businesses and educational institutions.
                    </p>
                  </div>

                  {/* Production Scope Checklist */}
                  <div className="space-y-2 font-mono">
                    <div className="text-xs font-bold text-black uppercase tracking-wider flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>// PRODUCTION SCOPE & ARCHITECTURE:</span>
                    </div>
                    {founderFeature.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white border-2 border-black hover:border-[#FF5500] transition-colors"
                      >
                        <span className="w-2 h-2 bg-[#FF5500] flex-shrink-0 mt-1.5"></span>
                        <span className="text-xs sm:text-sm text-neutral-900 font-semibold leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Strip */}
                  <div className="pt-4 border-t-2 border-dashed border-neutral-300">
                    <div className="font-mono text-xs font-bold text-neutral-500 uppercase mb-2">
                      CORE FOUNDATION STACK:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "AWS",
                        "Next.js",
                        "Node.js",
                        "Express",
                        "TailwindCSS",
                        "Prisma",
                        "PostgreSQL",
                        "TypeScript",
                      ].map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-[#10B981]/15 text-black font-mono text-xs font-bold border border-black hover:bg-[#10B981] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Spec Console */}
                <div className="lg:col-span-5 bg-black text-white p-5 sm:p-7 border-2 sm:border-[3px] border-black font-mono flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-[#10B981] font-bold mb-4 pb-2 border-b border-neutral-800 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>// STUDIO_SPECIFICATION</span>
                      </span>
                      <span>ID: SFT-FOUNDER</span>
                    </div>

                    <div className="space-y-3.5 text-xs">
                      <div className="border-b border-neutral-800 pb-3">
                        <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-1">
                          PLATFORM DOMAIN
                        </span>
                        <span className="font-bold text-white text-xs sm:text-base leading-snug block">
                          Enterprise Manufacturing ERP / MIS SaaS
                        </span>
                      </div>

                      <div className="border-b border-neutral-800 pb-3">
                        <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-1">
                          ARCHITECTURE DESIGN
                        </span>
                        <span className="font-bold text-white leading-relaxed block">
                          Multi-Tenant SaaS with Strict RBAC Isolation & Modular Schemas
                        </span>
                      </div>

                      <div className="border-b border-neutral-800 pb-3">
                        <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-1">
                          CORE IMPACT
                        </span>
                        <span className="font-bold text-[#FF5500] leading-relaxed block">
                          Production software deployed across businesses and educational entities
                        </span>
                      </div>

                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-1">
                          HOSTING INFRASTRUCTURE
                        </span>
                        <span className="font-bold text-[#10B981] block">
                          AWS Cloud · Scalable PostgreSQL · Node Micro-Services
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-4 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <a
                      href="https://www.softlligence.tech"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 sm:py-3 bg-[#10B981] text-black font-bold text-xs uppercase text-center border-2 border-black hover:bg-[#0ea372] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>VISIT SOFTLLIGENCE.TECH</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#projects"
                      className="w-full py-2.5 sm:py-3 bg-white text-black font-bold text-xs uppercase text-center border-2 border-black hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>VIEW CASE STUDY ↓</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 02. GIT COMMIT DAG & PIPELINE GRAPH                          */}
        {/* ============================================================ */}
        <div className="space-y-6">
          {/* Top DAG Status HUD */}
          <div className="bg-white border-2 border-black p-3 brutal-shadow-sm font-mono text-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-bold text-black">
                <GitBranch className="w-4 h-4 text-[#FF5500]" />
                <span>BRANCHES:</span>
              </span>
              <span className="px-2 py-0.5 bg-black text-white font-bold text-[11px]">
                main
              </span>
              <span className="px-2 py-0.5 bg-[#84CC16] text-black font-bold text-[11px]">
                leadership/community
              </span>
            </div>

            <div className="flex items-center gap-4 text-neutral-600 text-[11px]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="font-bold text-black">CI PIPELINE: PASSING</span>
              </span>
              <span>COMMITS: {filteredCommits.length}</span>
            </div>
          </div>

          {/* Git Commit Stream */}
          <div className="relative">
            {/* Vertical Git Branch Spine Line (Desktop / Tablet) */}
            <div className="hidden md:block absolute left-8 top-6 bottom-6 w-1 bg-black z-0"></div>
            <div className="hidden md:block absolute left-[52px] top-40 bottom-24 w-0.5 border-r-2 border-dashed border-[#84CC16] z-0"></div>

            <div className="space-y-8 sm:space-y-10 relative z-10">
              {filteredCommits.map((item, idx) => {
                const isMainBranch = item.branch === "main";

                return (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-start gap-4 lg:gap-6 group"
                  >
                    {/* LEFT GIT DAG NODE GRAPH (DESKTOP) */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0 w-16 pt-2 select-none">
                      {/* Commit Node Circle */}
                      <div
                        className="w-11 h-11 rounded-full border-2 sm:border-[3px] border-black flex items-center justify-center brutal-shadow-sm transition-transform duration-300 group-hover:scale-110 z-20 relative"
                        style={{ backgroundColor: item.themeColor }}
                      >
                        <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center border border-white">
                          {item.icon}
                        </div>

                        {item.isHead && (
                          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#10B981] border-2 border-black rounded-full animate-ping"></span>
                        )}
                      </div>
                    </div>

                    {/* RIGHT GIT COMMIT INSPECTION CARD */}
                    <div className="flex-1 min-w-0 w-full">
                      <div className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-lg overflow-hidden transition-all duration-300 group-hover:translate-x-1">
                        {/* Git Commit Header Bar */}
                        <div className="bg-[#F4F4F0] border-b-2 border-black p-3 sm:px-5 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                          {/* Commit Hash & Branch Badge */}
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => copyCommit(item.commitHash)}
                              className="px-2 py-0.5 bg-black text-white font-bold hover:bg-[#FF5500] hover:text-black transition-colors flex items-center gap-1 text-[11px]"
                              title="Click to copy commit hash"
                            >
                              <GitCommit className="w-3 h-3" />
                              <span>{item.commitHash}</span>
                              {copiedHash === item.commitHash ? (
                                <Check className="w-3 h-3 text-[#10B981]" />
                              ) : (
                                <Copy className="w-3 h-3 opacity-60" />
                              )}
                            </button>

                            <span
                              className={`px-2 py-0.5 font-bold text-[10px] border border-black ${
                                isMainBranch ? "bg-black text-white" : "bg-[#84CC16] text-black"
                              }`}
                            >
                              [{item.branch}]
                            </span>

                            <span className="text-neutral-500 text-[11px] font-semibold hidden sm:inline">
                              {item.releaseTag}
                            </span>
                          </div>

                          {/* CI Status & Period */}
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-white border border-black text-black font-bold text-[10px] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-[#10B981] inline-block"></span>
                              <span>{item.ciStatus}</span>
                            </span>

                            <span className="font-bold text-neutral-800 text-[11px] flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-neutral-500" />
                              <span>{item.period}</span>
                            </span>
                          </div>
                        </div>

                        {/* Commit Message & Scope Body */}
                        <div className="p-4 sm:p-6 lg:p-7">
                          {/* Conventional Commit Header */}
                          <div className="font-mono text-xs sm:text-sm font-bold text-neutral-700 mb-2 flex items-center gap-2">
                            <span
                              className="px-2 py-0.5 rounded-none font-black text-black text-xs"
                              style={{ backgroundColor: `${item.themeColor}30` }}
                            >
                              {item.commitType}
                            </span>
                            <span className="text-neutral-900 font-semibold truncate">
                              {item.commitTitle}
                            </span>
                          </div>

                          {/* Role & Company Header */}
                          <div className="mb-4">
                            <h3 className="font-display font-black text-xl sm:text-3xl text-black uppercase tracking-tight">
                              {item.role}{" "}
                              <span
                                className="underline decoration-4 underline-offset-4"
                                style={{ color: item.themeColor }}
                              >
                                @ {item.company}
                              </span>
                            </h3>
                            <p className="font-mono text-xs sm:text-sm text-neutral-600 mt-1 flex items-center gap-1">
                              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                              <span>{item.companyContext}</span>
                            </p>
                          </div>

                          {/* Summary Narrative */}
                          <p className="text-xs sm:text-base text-neutral-800 leading-relaxed font-normal mb-4 sm:mb-5 border-l-4 border-black pl-3 bg-[#F4F4F0] py-2 sm:py-2.5">
                            {item.summary}
                          </p>

                          {/* Commit Changes / Key Highlights Diff List */}
                          <div className="space-y-2 mb-4 sm:mb-5 font-mono text-xs sm:text-sm">
                            <div className="text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                              <GitPullRequest className="w-3 h-3" />
                              <span>// VERIFIED COMMIT DELIVERABLES & IMPACT:</span>
                            </div>
                            {item.deliverables.map((bullet, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex items-start gap-2.5 p-2 sm:p-2.5 bg-white border border-neutral-300 hover:border-black transition-colors"
                              >
                                <span className="text-[#10B981] font-bold font-mono text-sm leading-none mt-0.5 flex-shrink-0">
                                  +
                                </span>
                                <span className="text-neutral-900 leading-relaxed font-medium">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Stack & Commit Footer */}
                          <div className="pt-3 border-t-2 border-dashed border-neutral-300 flex flex-wrap items-center justify-between gap-2.5 font-mono">
                            <div className="flex flex-wrap gap-1 sm:gap-1.5">
                              {item.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 sm:px-2.5 py-0.5 bg-[#F4F4F0] text-neutral-900 text-[10px] sm:text-[11px] font-bold border border-black hover:bg-black hover:text-white transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <a
                              href="/resume.pdf"
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-bold text-[#FF5500] hover:underline flex items-center gap-1"
                            >
                              <span>INSPECT FULL RESUME</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
