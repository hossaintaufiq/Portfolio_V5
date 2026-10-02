"use client";

import React, { useState } from "react";
import {
  ArrowDownRight,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  Copy,
  Check,
  Server,
  Activity,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const { identity } = PORTFOLIO_DATA;

  const copyEmail = () => {
    navigator.clipboard.writeText(identity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative w-full border-b-2 sm:border-b-[3px] border-black bg-[#F4F4F0] bg-grid-pattern pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      {/* Decorative technical coordinates */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 font-mono text-xs text-neutral-500 select-none">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 bg-[#FF5500]"></span>
          SYS_ID: HAT-01 // PRODUCTION ARCHITECTURE
        </span>
        <span>LAT: 23.8103° N | LON: 90.4125° E</span>
        <span>STACK: NEXT.JS / TS / NODE / PY / RAG</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Big Bold Identity & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white font-mono text-xs font-bold border-2 border-black w-fit mb-4 brutal-shadow-sm">
              <span className="w-2 h-2 bg-[#10B981]"></span>
              <span>ENGINEER + BUILDER + AI RESEARCHER + FOUNDER</span>
            </div>

            {/* Oversized Name */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tighter text-black uppercase leading-[0.92] mb-4">
              HOSSAIN
              <br />
              AHMMED
              <br />
              <span className="text-[#FF5500] underline decoration-black decoration-4 sm:decoration-8 underline-offset-4">
                TAUFIQ
              </span>
            </h1>

            {/* Sub-headline / Title */}
            <div className="p-3 sm:p-4 bg-white border-2 sm:border-[3px] border-black brutal-shadow mb-6">
              <p className="font-mono font-bold text-sm sm:text-base text-black flex items-center gap-2">
                <Server className="w-4 h-4 text-[#2563EB]" />
                {identity.title}
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-neutral-900 leading-relaxed font-normal mb-8 max-w-2xl border-l-4 border-[#FF5500] pl-4 bg-white/60 py-2">
              &ldquo;{identity.summary}&rdquo;
            </p>

            {/* Credential & Identity Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {identity.statusBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white font-mono text-[11px] font-bold text-black border-2 border-black brutal-shadow-sm hover:bg-[#FF5500] hover:text-black transition-colors"
                >
                  #{badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-[#FF5500] text-black font-mono font-bold text-sm uppercase border-2 sm:border-[3px] border-black brutal-shadow brutal-btn flex items-center gap-2 hover:bg-[#ff691e]"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#research"
                className="px-6 py-3.5 bg-black text-white font-mono font-bold text-sm uppercase border-2 sm:border-[3px] border-black brutal-shadow brutal-btn flex items-center gap-2 hover:bg-neutral-800"
              >
                <span>VIEW RESEARCH</span>
                <Cpu className="w-4 h-4 text-[#10B981]" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 bg-white text-black font-mono font-bold text-sm uppercase border-2 sm:border-[3px] border-black brutal-shadow brutal-btn flex items-center gap-2 hover:bg-neutral-100"
              >
                <span>CONTACT ME</span>
                <ExternalLink className="w-4 h-4 text-[#2563EB]" />
              </a>
            </div>
          </div>

          {/* Right Column: Brutalist Technical Information Block */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Terminal Header Info Card */}
            <div className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-md">
              {/* Window Header */}
              <div className="bg-black text-white px-4 py-2 flex items-center justify-between border-b-2 border-black font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="font-bold">ENGINEER_SPEC // V5.0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#FF5500] inline-block border border-white"></span>
                  <span className="w-2.5 h-2.5 bg-[#2563EB] inline-block border border-white"></span>
                  <span className="w-2.5 h-2.5 bg-[#10B981] inline-block border border-white"></span>
                </div>
              </div>

              {/* Info Matrix Content */}
              <div className="p-5 sm:p-6 space-y-4 font-mono">
                <div className="border-b border-dashed border-neutral-300 pb-3">
                  <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                    LOCATION
                  </div>
                  <div className="text-base font-bold text-black flex items-center justify-between">
                    <span>{identity.location}</span>
                    <span className="text-xs px-2 py-0.5 bg-[#2563EB] text-white font-bold">
                      REMOTE / HYBRID
                    </span>
                  </div>
                </div>

                <div className="border-b border-dashed border-neutral-300 pb-3">
                  <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                    ROLE
                  </div>
                  <div className="text-base font-bold text-black">
                    Software Engineer
                  </div>
                </div>

                <div className="border-b border-dashed border-neutral-300 pb-3">
                  <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                    FOCUS
                  </div>
                  <div className="text-base font-extrabold text-black flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-black text-white text-xs">
                      BACKEND
                    </span>
                    <span>/</span>
                    <span className="px-2 py-0.5 bg-[#FF5500] text-black text-xs font-bold">
                      AI & ML SYSTEMS
                    </span>
                  </div>
                </div>

                <div className="border-b border-dashed border-neutral-300 pb-3">
                  <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                    VENTURE
                  </div>
                  <div className="text-sm font-bold text-black flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#FF5500]"></span>
                    <span>Founder of Softlligence Technologies</span>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                    STATUS
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#10B981] animate-ping inline-block"></span>
                    <span className="text-sm font-bold text-black">
                      Building + Researching (Multimodal RAG)
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Quick Copy Email */}
              <div className="bg-[#F4F4F0] p-4 border-t-2 border-black flex items-center justify-between gap-2">
                <div className="truncate font-mono text-xs text-neutral-700">
                  {identity.email}
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 bg-black text-white font-mono text-xs font-bold border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Tech Ticker Box */}
            <div className="bg-black text-white p-4 border-2 sm:border-[3px] border-black brutal-shadow font-mono text-xs">
              <div className="flex items-center justify-between text-[#10B981] font-bold mb-2 pb-1 border-b border-neutral-800">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  PIPELINE HIGHLIGHTS
                </span>
                <span className="text-neutral-400">REST · GRAPHQL · RAG</span>
              </div>
              <p className="text-neutral-300 text-[11px] leading-relaxed">
                Production architecture spanning Node.js, Express, Next.js,
                PostgreSQL, PySide6, and Multimodal LLM pipelines with
                hallucination mitigation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
