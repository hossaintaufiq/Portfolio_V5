"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  FileCode2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Terminal,
  ShieldAlert,
} from "lucide-react";

export default function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              {about.sectionCode}
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              ENGINEERING IDENTITY
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [ARCH: DISTRIBUTED BACKEND · ML SYSTEMS · FOUNDER]
          </div>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border-2 sm:border-[3px] border-black p-6 sm:p-8 brutal-shadow">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-black tracking-tight mb-6 leading-snug">
                {about.headline}
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-neutral-800 leading-relaxed">
                {about.narrative.map((paragraph, idx) => (
                  <p key={idx} className="border-l-2 border-black pl-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Engineering Principles Manifesto */}
            <div className="bg-black text-white border-2 sm:border-[3px] border-black p-6 sm:p-8 brutal-shadow font-mono">
              <div className="flex items-center gap-2 text-[#10B981] font-bold text-xs uppercase mb-4">
                <Terminal className="w-4 h-4" />
                <span>// ENGINEERING PHILOSOPHIES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#18191B] p-3 border border-neutral-700">
                  <span className="text-[#FF5500] font-bold block mb-1">
                    01. PRODUCTION SCALABILITY
                  </span>
                  Clean REST/GraphQL contracts, database indexing, and strict
                  tenant isolation for high availability.
                </div>
                <div className="bg-[#18191B] p-3 border border-neutral-700">
                  <span className="text-[#2563EB] font-bold block mb-1">
                    02. FACTUAL AI SYSTEMS
                  </span>
                  Addressing hallucination in multimodal RAG through cross-modal
                  validation and grounded retrievals.
                </div>
                <div className="bg-[#18191B] p-3 border border-neutral-700">
                  <span className="text-[#10B981] font-bold block mb-1">
                    03. TYPE RIGOR
                  </span>
                  Full TypeScript and Python typing guarantees across frontend,
                  backend, and data payloads.
                </div>
                <div className="bg-[#18191B] p-3 border border-neutral-700">
                  <span className="text-white font-bold block mb-1">
                    04. MEASURABLE PERFORMANCE
                  </span>
                  Code splitting, lazy loading, caching strategies, and Core Web
                  Vitals optimization.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border-2 sm:border-[3px] border-black p-6 brutal-shadow-md">
              <div className="font-mono text-xs font-bold text-[#FF5500] uppercase mb-4 pb-2 border-b-2 border-black flex items-center justify-between">
                <span>SPECIFICATION MATRIX</span>
                <span>STATUS: VERIFIED</span>
              </div>

              <div className="space-y-4">
                {about.attributes.map((attr, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#F4F4F0] border-2 border-black font-mono"
                  >
                    <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                      {attr.label}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-black">
                      {attr.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="bg-[#FF5500] text-black border-2 sm:border-[3px] border-black p-6 brutal-shadow">
              <div className="font-mono text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>FOUNDER & RESEARCH DUALITY</span>
              </div>
              <p className="text-sm font-semibold leading-relaxed">
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
