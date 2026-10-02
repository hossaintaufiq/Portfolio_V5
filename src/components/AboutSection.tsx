"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Terminal,
  Server,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  const quickBadges = [
    { label: "FOCUS", value: "BACKEND / AI / ML", color: "text-[#2563EB]" },
    { label: "BUILD", value: "PRODUCTION SYSTEMS", color: "text-[#FF5500]" },
    { label: "RESEARCH", value: "MULTIMODAL RAG", color: "text-[#10B981]" },
    { label: "FOUNDER", value: "SOFTLLIGENCE", color: "text-black" },
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-3 border-b-2 border-black">
          <div>
            <div className="inline-block px-2.5 py-0.5 bg-black text-white font-mono text-xs font-bold uppercase mb-1.5 brutal-shadow-sm">
              {about.sectionCode}
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black">
              ENGINEERING PROFILE
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [ARCH: DISTRIBUTED BACKEND · ML SYSTEMS · FOUNDER]
          </div>
        </div>

        {/* Quick Identity HUD Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
          {quickBadges.map((badge, bIdx) => (
            <div
              key={bIdx}
              className="p-3 bg-white border-2 border-black font-mono brutal-shadow-sm"
            >
              <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                // {badge.label}
              </div>
              <div className={`text-xs sm:text-sm font-black ${badge.color} tracking-tight`}>
                {badge.value}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Main Editorial Narrative Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-white border-2 sm:border-[3px] border-black p-5 sm:p-6 brutal-shadow">
              <h3 className="font-display font-black text-xl sm:text-2xl text-black tracking-tight mb-4 leading-snug">
                ENGINEER. BUILDER. AI RESEARCHER. FOUNDER.
              </h3>
              
              <div className="space-y-3 text-sm sm:text-base text-neutral-800 leading-relaxed">
                <p className="border-l-4 border-black pl-3.5">
                  I am a{" "}
                  <span className="font-bold text-black bg-[#FF5500]/10 border-b-2 border-[#FF5500] px-0.5">
                    Software Engineer
                  </span>{" "}
                  focused on architecting resilient{" "}
                  <span className="font-bold text-[#2563EB]">
                    backend systems
                  </span>
                  ,{" "}
                  <span className="font-semibold text-black">
                    scalable full-stack web applications
                  </span>
                  , and production-grade{" "}
                  <span className="font-bold text-[#10B981]">
                    AI/ML pipelines
                  </span>
                  .
                </p>

                <p className="border-l-4 border-[#2563EB] pl-3.5">
                  As the Founder of{" "}
                  <span className="font-bold text-black bg-neutral-100 border border-black px-1 text-xs sm:text-sm">
                    Softlligence Technologies
                  </span>
                  , I build and contribute to production software deployed across
                  businesses and educational institutions. My work spans{" "}
                  <span className="font-semibold text-[#2563EB]">
                    multi-tenant SaaS architecture
                  </span>
                  , enterprise ERP engines, and cross-service API design.
                </p>

                <p className="border-l-4 border-[#10B981] pl-3.5">
                  Concurrently pursuing my B.Sc. in Computer Science &
                  Engineering at{" "}
                  <span className="font-semibold text-black">
                    North South University
                  </span>{" "}
                  (CGPA 3.83/4.00), my research focuses on Deep Learning and{" "}
                  <span className="font-bold text-[#10B981] bg-[#10B981]/10 border-b-2 border-[#10B981] px-0.5">
                    Multimodal Retrieval-Augmented Generation (RAG)
                  </span>{" "}
                  with cross-modal hallucination mitigation.
                </p>
              </div>
            </div>

            {/* Engineering Principles Manifesto */}
            <div className="bg-black text-white border-2 sm:border-[3px] border-black p-5 sm:p-6 brutal-shadow font-mono">
              <div className="flex items-center gap-2 text-[#10B981] font-bold text-xs uppercase mb-3">
                <Terminal className="w-4 h-4" />
                <span>// CORE ENGINEERING PRINCIPLES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#18191B] p-2.5 border border-neutral-700">
                  <span className="text-[#FF5500] font-bold block mb-0.5">
                    01. PRODUCTION SCALABILITY
                  </span>
                  Clean REST/GraphQL contracts, database indexing, and strict tenant isolation.
                </div>
                <div className="bg-[#18191B] p-2.5 border border-neutral-700">
                  <span className="text-[#2563EB] font-bold block mb-0.5">
                    02. FACTUAL AI SYSTEMS
                  </span>
                  Mitigating hallucination in multimodal RAG through grounded cross-modal validation.
                </div>
                <div className="bg-[#18191B] p-2.5 border border-neutral-700">
                  <span className="text-[#10B981] font-bold block mb-0.5">
                    03. TYPE RIGOR
                  </span>
                  End-to-end TypeScript & Python typing guarantees across distributed services.
                </div>
                <div className="bg-[#18191B] p-2.5 border border-neutral-700">
                  <span className="text-white font-bold block mb-0.5">
                    04. MEASURABLE PERFORMANCE
                  </span>
                  Code splitting, lazy loading, caching strategies, and Core Web Vitals optimization.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Matrix & Founder Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border-2 sm:border-[3px] border-black p-5 brutal-shadow-md">
              <div className="font-mono text-xs font-bold text-[#FF5500] uppercase mb-3 pb-2 border-b-2 border-black flex items-center justify-between">
                <span>SPECIFICATION MATRIX</span>
                <span className="text-[#10B981] font-bold">● VERIFIED</span>
              </div>

              <div className="space-y-2.5 font-mono">
                {about.attributes.map((attr, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-[#F4F4F0] border border-black hover:border-[#2563EB] transition-colors"
                  >
                    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                      {attr.label}
                    </div>
                    <div className="text-xs font-bold text-black">
                      {attr.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="bg-[#FF5500] text-black border-2 sm:border-[3px] border-black p-4 brutal-shadow">
              <div className="font-mono text-xs font-black uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FOUNDER & RESEARCH DUALITY</span>
              </div>
              <p className="text-xs font-semibold leading-relaxed">
                Balancing commercial SaaS product execution at Softlligence
                Technologies with deep academic inquiry in deep learning and
                multimodal AI at North South University.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
