"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Award,
  FileText,
  CheckCircle2,
  Zap,
  Activity,
  Compass,
  ArrowUp,
  Cpu,
  ShieldCheck,
  Terminal,
  ExternalLink,
  ChevronRight,
  Route,
  Navigation,
  Milestone,
  Briefcase,
  HeartHandshake,
  Users,
  Code2,
  Car,
  Globe2,
  Flame,
  Search,
  Settings,
  MessageSquare,
  Bookmark,
  GraduationCap,
} from "lucide-react";

export default function ExperienceSection() {
  const { founderFeature } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<"ALL" | "ENGINEERING" | "LEADERSHIP">("ALL");

  // All unified journey items following the winding road
  const allRoadItems = [
    {
      id: "road-mev",
      stepNum: "01",
      category: "ENGINEERING",
      role: "Software Engineer",
      company: "MEV (Mango Electric Vehicle)",
      companyContext: "Electric Vehicle Manufacturer · In-House Vehicle Platform & Operations",
      period: "Jan 2026 – Present",
      location: "Dhaka, Bangladesh · On-site",
      themeColor: "#FF5500", // High-voltage Orange
      rimColor: "border-[#FF5500]",
      bgAccent: "bg-[#FF5500]",
      textAccent: "text-[#FF5500]",
      icon: <Car className="w-5 h-5 text-white" />,
      isCurrent: true,
      summary:
        "Developing software applications for MEV's locally built electric vehicles and architecting internal operational CRM and management tools.",
      deliverables: [
        "Maintain and enhance MEV's internal management systems, supporting mission-critical day-to-day operations across the business.",
        "Develop applications for MEV's locally built electric vehicles, delivering software for the in-house vehicle platform.",
        "Build and maintain operational CRM and customer-facing tools using Next.js, Express.js, PostgreSQL, and TypeScript.",
      ],
      technologies: ["Next.js", "Express.js", "PostgreSQL", "TypeScript", "Node.js", "Vehicle Platform", "CRM"],
      badge: "ACTIVE ON-SITE ROLE",
    },
    {
      id: "road-brooksource",
      stepNum: "02",
      category: "ENGINEERING",
      role: "Full-Stack Developer",
      company: "Brooksource",
      companyContext: "US-based staffing firm delivering React solutions to Fortune 500 clients",
      period: "Apr 2023 – Sep 2024",
      location: "Remote (US Enterprise)",
      themeColor: "#EC4899", // Vibrant Magenta Pink (from reference image)
      rimColor: "border-[#EC4899]",
      bgAccent: "bg-[#EC4899]",
      textAccent: "text-[#EC4899]",
      icon: <Settings className="w-5 h-5 text-white" />,
      isCurrent: false,
      summary:
        "Engineered production React.js & TypeScript applications with Redux serving high-traffic Fortune 500 enterprise clients.",
      deliverables: [
        "Reduced front-end load time by 20% through code splitting, lazy loading, and bundle optimization.",
        "Engineered API integration layers that measurably reduced cross-service communication latency.",
        "Consistently shipped features ahead of schedule across distributed Agile teams spanning multiple time zones.",
      ],
      technologies: ["React.js", "TypeScript", "Redux", "API Integration", "Agile", "Bundle Optimization"],
      badge: "FORTUNE 500 CLIENTS",
    },
    {
      id: "road-americares",
      stepNum: "03",
      category: "ENGINEERING",
      role: "Associate, Web Developer",
      company: "Americares",
      companyContext: "Global Health & Humanitarian Organization Web Applications",
      period: "Feb 2023 – Nov 2023",
      location: "Remote / Hybrid",
      themeColor: "#06B6D4", // Cyan Blue (from reference image)
      rimColor: "border-[#06B6D4]",
      bgAccent: "bg-[#06B6D4]",
      textAccent: "text-[#06B6D4]",
      icon: <Code2 className="w-5 h-5 text-white" />,
      isCurrent: false,
      summary:
        "Built and maintained responsive web applications, establishing strong software engineering foundations and reusable UI patterns.",
      deliverables: [
        "Built and maintained web applications as an Associate Web Developer, exploring modern engineering practices to grow rapidly.",
        "Collaborated on responsive UI components, cross-browser compatibility, and modular codebase maintenance.",
      ],
      technologies: ["JavaScript", "React.js", "HTML5", "CSS3", "REST APIs", "Git"],
      badge: "CAREER FOUNDATION",
    },
    {
      id: "road-nsu-acm",
      stepNum: "04",
      category: "LEADERSHIP",
      role: "Coordinator Web Group & Moderator R&D Group",
      company: "NSU ACM Student Chapter",
      companyContext: "ACM Student Chapter · North South University",
      period: "Oct 18, 2024 – Present",
      location: "Dhaka, Bangladesh",
      themeColor: "#84CC16", // Lime Green (from reference image)
      rimColor: "border-[#84CC16]",
      bgAccent: "bg-[#84CC16]",
      textAccent: "text-[#84CC16]",
      icon: <Cpu className="w-5 h-5 text-black" />,
      isCurrent: true,
      summary:
        "Leading and coordinating the web technical group while moderating research and development tracks, hackathons, and technical workshops.",
      deliverables: [
        "Coordinate web development initiatives, portal maintenance, and technical platforms for NSU ACM.",
        "Moderate research & development focus groups guiding students in Deep Learning, NLP, and AI applications.",
        "Organize national computing competitions, workshops, and technical mentorship sessions.",
      ],
      technologies: ["Web Architecture", "Research Moderation", "Student Leadership", "ACM"],
      badge: "LEADERSHIP & RESEARCH",
    },
    {
      id: "road-bylc",
      stepNum: "05",
      category: "LEADERSHIP",
      role: "Volunteer — 'Be the Next Leader'",
      company: "Bangladesh Youth Leadership Center (BYLC)",
      companyContext: "National Youth Leadership & Community Initiative",
      period: "Oct 20, 2022 – Oct 20, 2023",
      location: "Dhaka, Bangladesh",
      themeColor: "#8B5CF6", // Purple / Violet
      rimColor: "border-[#8B5CF6]",
      bgAccent: "bg-[#8B5CF6]",
      textAccent: "text-[#8B5CF6]",
      icon: <Users className="w-5 h-5 text-white" />,
      isCurrent: false,
      summary:
        "Participated in the 'Be the next leader' youth development initiative, facilitating leadership workshops and public engagement.",
      deliverables: [
        "Facilitated youth leadership workshops, community outreach initiatives, and collaborative training camps.",
        "Honed public speaking, stakeholder engagement, and team coordination across diverse student cohorts.",
      ],
      technologies: ["Leadership", "Community Outreach", "Public Speaking", "BYLC"],
      badge: "COMMUNITY LEADERSHIP",
    },
    {
      id: "road-ndnsc",
      stepNum: "06",
      category: "LEADERSHIP",
      role: "Vice President, Dep of Administration",
      company: "Notre Dame Nature Study Club (NDNSC)",
      companyContext: "Notre Dame College, Dhaka",
      period: "Jul 15, 2018 – Jun 14, 2020",
      location: "Dhaka, Bangladesh",
      themeColor: "#F59E0B", // Amber Gold
      rimColor: "border-[#F59E0B]",
      bgAccent: "bg-[#F59E0B]",
      textAccent: "text-[#F59E0B]",
      icon: <GraduationCap className="w-5 h-5 text-black" />,
      isCurrent: false,
      summary:
        "Directed club administration, team governance, and logistical operations for nationwide student conventions, exhibitions, and competitions.",
      deliverables: [
        "Managed club administration, executive communications, and event logistics for major college festivals.",
        "Led a multidisciplinary student administrative committee, ensuring smooth coordination and budget execution.",
      ],
      technologies: ["Administration", "Event Logistics", "Executive Governance", "Notre Dame College"],
      badge: "EXECUTIVE GOVERNANCE",
    },
  ];

  const filteredItems = allRoadItems.filter((item) => {
    if (filter === "ALL") return true;
    return item.category === filter;
  });

  return (
    <section
      id="experience"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              <Route className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>02 / CAREER ROAD & LEADERSHIP</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              JOURNEY ROAD
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Tabs */}
            <div className="flex items-center bg-white border-2 border-black p-1 brutal-shadow-sm font-mono text-xs font-bold">
              <button
                onClick={() => setFilter("ALL")}
                className={`px-3 py-1 transition-all ${
                  filter === "ALL"
                    ? "bg-black text-white"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                ALL ({allRoadItems.length})
              </button>
              <button
                onClick={() => setFilter("ENGINEERING")}
                className={`px-3 py-1 transition-all ${
                  filter === "ENGINEERING"
                    ? "bg-[#FF5500] text-black"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                ENGINEERING (3)
              </button>
              <button
                onClick={() => setFilter("LEADERSHIP")}
                className={`px-3 py-1 transition-all ${
                  filter === "LEADERSHIP"
                    ? "bg-[#84CC16] text-black"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                LEADERSHIP (3)
              </button>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#FF5500] text-black font-mono font-bold text-xs uppercase border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 hover:bg-[#ff691e]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 01. LARGE DOMINANT FOUNDER CARD (1ST AT THE TOP)             */}
        {/* ============================================================ */}
        <div className="mb-14">
          <div className="bg-white border-2 sm:border-[4px] border-black brutal-shadow-xl overflow-hidden group">
            {/* Top Status Banner */}
            <div className="bg-[#FF5500] text-black px-5 sm:px-8 py-3.5 border-b-2 sm:border-b-[3px] border-black flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 font-mono font-black text-xs sm:text-sm tracking-wider uppercase">
                <Building2 className="w-4 h-4 text-black" />
                <span>VENTURE STUDIO // FOUNDER & EXECUTIVE RECORD</span>
              </div>
              <div className="font-mono text-xs font-bold px-3 py-1 bg-black text-white border border-black flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#10B981] animate-pulse inline-block"></span>
                <span>ACTIVE ENGINEERING STUDIO</span>
              </div>
            </div>

            {/* Large Executive Content Area */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Column: Scope, Narrative & Deliverables */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-black text-white font-mono text-xs font-black uppercase">
                        ROLE: {founderFeature.role}
                      </span>
                      <span className="px-2.5 py-1 bg-[#10B981]/20 text-black border border-black font-mono text-xs font-bold">
                        ORIGIN POINT
                      </span>
                    </div>

                    <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black mb-3 leading-tight">
                      {founderFeature.company}
                    </h3>

                    <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal mb-5 border-l-4 border-[#FF5500] pl-3.5 bg-[#F4F4F0] py-3">
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
                  <div className="space-y-2.5 font-mono">
                    <div className="text-xs font-bold text-black uppercase tracking-wider flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>// PRODUCTION SCOPE & ARCHITECTURE:</span>
                    </div>
                    {founderFeature.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-white border-2 border-black hover:border-[#FF5500] transition-colors"
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
                <div className="lg:col-span-5 bg-black text-white p-6 sm:p-7 border-2 sm:border-[3px] border-black font-mono flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-[#10B981] font-bold mb-4 pb-2 border-b border-neutral-800 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>// STUDIO_SPECIFICATION</span>
                      </span>
                      <span>ID: SFT-FOUNDER</span>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div className="border-b border-neutral-800 pb-3">
                        <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-1">
                          PLATFORM DOMAIN
                        </span>
                        <span className="font-bold text-white text-sm sm:text-base leading-snug block">
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

                  <div className="mt-8 pt-4 border-t border-neutral-800">
                    <a
                      href="#projects"
                      className="w-full block py-3 bg-[#10B981] text-black font-bold text-xs uppercase text-center border-2 border-black hover:bg-[#0ea372] transition-colors"
                    >
                      VIEW SOFTLLIGENCE CLOUD CASE STUDY ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 02. DETAILED S-CURVE SWITCHBACK ROAD (MATCHING REFERENCE)     */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <div className="font-mono text-xs font-bold text-neutral-600 uppercase tracking-widest flex items-center justify-between pb-2 border-b-2 border-black">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-black"></span>
              // S-CURVE SWITCHBACK HIGHWAY & MILESTONES
            </span>
            <span className="text-neutral-500 font-mono">
              STATIONS: {filteredItems.length}
            </span>
          </div>

          <div className="relative">
            {/* The List of Cards connected with real SVG Switchback Curves */}
            <div className="space-y-8 sm:space-y-12">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-stretch gap-0 md:gap-4 group relative"
                >
                  {/* LEFT: DETAILED SVG SWITCHBACK ROAD SEGMENT (DESKTOP) */}
                  <div className="hidden md:flex flex-col items-center justify-center w-36 lg:w-44 flex-shrink-0 relative select-none">
                    <svg
                      className="w-full h-full min-h-[260px] overflow-visible"
                      viewBox="0 0 160 260"
                      fill="none"
                    >
                      {/* 1. Road Asphalt Base Path (Sharp Switchback Loop) */}
                      <path
                        d="M 40,0 L 40,50 Q 40,90 85,100 Q 135,110 135,130 Q 135,150 85,160 Q 40,170 40,210 L 40,260"
                        stroke="#475569"
                        strokeWidth="38"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* 2. Outer Dark Road Edges */}
                      <path
                        d="M 40,0 L 40,50 Q 40,90 85,100 Q 135,110 135,130 Q 135,150 85,160 Q 40,170 40,210 L 40,260"
                        stroke="#0F172A"
                        strokeWidth="42"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="-z-10"
                      />

                      {/* 3. Outer Colorful Curved Curb Cap (from Reference Image) */}
                      <path
                        d="M 75,98 Q 140,110 140,130 Q 140,150 75,162"
                        stroke={item.themeColor}
                        strokeWidth="10"
                        strokeLinecap="round"
                      />

                      {/* 4. Center Dashed White Road Lane Stripe */}
                      <path
                        d="M 40,0 L 40,50 Q 40,90 85,100 Q 135,110 135,130 Q 135,150 85,160 Q 40,170 40,210 L 40,260"
                        stroke="#FFFFFF"
                        strokeWidth="3.5"
                        strokeDasharray="7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* 5. Pointer Arrow to Card on Right (from Reference Image) */}
                      <polygon
                        points="146,130 132,120 132,140"
                        fill={item.themeColor}
                      />
                    </svg>

                    {/* 6. Circular Colored Icon Pin (Centered precisely inside the loop) */}
                    <div
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 sm:border-[3px] border-black flex items-center justify-center brutal-shadow-sm transition-transform duration-300 group-hover:scale-110 z-20"
                      style={{ backgroundColor: item.themeColor }}
                    >
                      <div className="w-8 h-8 lg:w-9 lg:h-9 bg-black rounded-full flex items-center justify-center border border-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* MOBILE ROADWAY HEADER (FOR SMALL SCREENS) */}
                  <div className="md:hidden flex items-center gap-3 mb-2 px-2">
                    <div
                      className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center brutal-shadow-sm"
                      style={{ backgroundColor: item.themeColor }}
                    >
                      <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center border border-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="font-mono text-xs font-black uppercase text-black">
                      WAYPOINT {item.stepNum} // {item.role}
                    </div>
                  </div>

                  {/* RIGHT: THE CONTENT CARD (MATCHING REFERENCE IMAGE) */}
                  <div className="flex-1">
                    <div className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-lg p-6 sm:p-8 relative transition-all duration-300 group-hover:border-black group-hover:translate-x-1">
                      {/* Pointer Notch on card edge */}
                      <div
                        className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-6 bg-black"
                        style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
                      ></div>

                      {/* Top Header Row: Big Colored Step Number */}
                      <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b-2 border-black mb-4">
                        <div className="flex items-center gap-3">
                          {/* Giant Step Number in Theme Color */}
                          <div
                            className="font-display font-black text-4xl sm:text-5xl leading-none"
                            style={{ color: item.themeColor }}
                          >
                            {item.stepNum}
                          </div>

                          <div>
                            <span className="px-2.5 py-0.5 bg-black text-white font-mono text-xs font-bold uppercase tracking-wider block w-fit">
                              {item.badge}
                            </span>
                            <span className="font-mono text-[11px] text-neutral-500 font-bold block mt-0.5">
                              {item.location}
                            </span>
                          </div>
                        </div>

                        <div className="font-mono font-bold text-xs sm:text-sm px-3 py-1 bg-[#F4F4F0] border-2 border-black flex items-center gap-1.5 brutal-shadow-sm">
                          <Calendar className="w-3.5 h-3.5 text-black" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <div className="mb-4">
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-black uppercase tracking-tight">
                          {item.role}{" "}
                          <span
                            className="underline decoration-4 underline-offset-4"
                            style={{ color: item.themeColor }}
                          >
                            @ {item.company}
                          </span>
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-neutral-600 mt-1 flex items-center gap-1">
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{item.companyContext}</span>
                        </p>
                      </div>

                      {/* Summary Narrative */}
                      <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal mb-5 border-l-4 border-black pl-3.5 bg-[#F4F4F0] py-2.5">
                        {item.summary}
                      </p>

                      {/* Deliverables / Impact Points */}
                      <div className="space-y-2 mb-5 font-mono text-xs sm:text-sm">
                        <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                          // KEY HIGHLIGHTS & DELIVERABLES:
                        </div>
                        {item.deliverables.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2.5 p-2.5 bg-white border border-neutral-300 hover:border-black transition-colors"
                          >
                            <span
                              className="w-2 h-2 flex-shrink-0 mt-1.5"
                              style={{ backgroundColor: item.themeColor }}
                            ></span>
                            <span className="text-neutral-900 leading-relaxed font-medium">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tags & Action Link */}
                      <div className="pt-3 border-t-2 border-dashed border-neutral-300 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 bg-[#F4F4F0] text-neutral-900 font-mono text-[11px] font-bold border border-black"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <a
                          href="/resume.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs font-bold text-[#FF5500] hover:underline flex items-center gap-1"
                        >
                          <span>VIEW RESUME SPECS</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
