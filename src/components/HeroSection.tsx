"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  Cpu,
  ExternalLink,
  Copy,
  Check,
  Server,
  MapPin,
  Zap,
  Briefcase,
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
    <section className="relative w-full border-b-2 sm:border-b-[3px] border-black bg-[#F4F4F0] bg-grid-pattern pt-4 pb-12 lg:pt-6 lg:pb-16 overflow-hidden">
      {/* Decorative technical coordinate bar */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 font-mono text-xs text-neutral-500 select-none">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 bg-[#FF5500]"></span>
          SYS_ID: HAT-01 // PRODUCTION ARCHITECTURE
        </span>
        <span>LOC: DHAKA, BANGLADESH [23.8103° N, 90.4125° E]</span>
        <span>STACK: TYPESCRIPT · PYTHON · NEXT.JS · RAG</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Tight, High-Impact Identity & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-mono text-xs font-bold border border-black w-fit mb-3 brutal-shadow-sm">
              <span className="w-2 h-2 bg-[#10B981]"></span>
              <span>ENGINEER + BUILDER + AI RESEARCHER + FOUNDER</span>
            </div>

            {/* Compact 2-Line Name Header (Zero Wasted Vertical Space) */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-black uppercase leading-[1.02] mb-3">
              HOSSAIN AHMMED{" "}
              <span className="text-[#FF5500] underline decoration-black decoration-4 sm:decoration-6 underline-offset-4">
                TAUFIQ
              </span>
            </h1>

            {/* Sub-headline / Role Bar */}
            <div className="p-2.5 sm:p-3 bg-white border-2 border-black brutal-shadow-sm mb-4 inline-block w-fit">
              <p className="font-mono font-bold text-xs sm:text-sm text-black flex items-center gap-2">
                <Server className="w-4 h-4 text-[#2563EB]" />
                <span>
                  Software Engineer ·{" "}
                  <span className="text-[#2563EB]">Backend</span> ·{" "}
                  <span className="text-[#10B981]">AI/ML Systems</span>
                </span>
              </p>
            </div>

            {/* Professional Summary with Controlled Editorial Highlights */}
            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal mb-5 max-w-2xl border-l-4 border-[#FF5500] pl-3.5 bg-white/70 py-2">
              &ldquo;Software Engineer with experience building{" "}
              <span className="font-semibold text-black bg-[#FF5500]/10 border-b-2 border-[#FF5500] px-0.5">
                scalable full-stack web applications
              </span>
              ,{" "}
              <span className="font-semibold text-[#2563EB]">
                backend services
              </span>
              , and{" "}
              <span className="font-semibold text-[#10B981]">
                AI-powered products
              </span>
              .&rdquo;
            </p>

            {/* Credential & Identity Badges Strip */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
              <span className="px-2 py-0.5 bg-white font-mono text-[10px] sm:text-[11px] font-bold text-black border border-black brutal-shadow-sm hover:bg-[#FF5500] hover:text-black transition-colors">
                #FOUNDER @ SOFTLLIGENCE
              </span>
              <span className="px-2 py-0.5 bg-white font-mono text-[10px] sm:text-[11px] font-bold text-black border border-black brutal-shadow-sm hover:bg-[#2563EB] hover:text-white transition-colors">
                #BACKEND-FOCUSED
              </span>
              <span className="px-2 py-0.5 bg-white font-mono text-[10px] sm:text-[11px] font-bold text-black border border-black brutal-shadow-sm hover:bg-[#10B981] hover:text-black transition-colors">
                #AI/ML SYSTEMS
              </span>
              <span className="px-2 py-0.5 bg-white font-mono text-[10px] sm:text-[11px] font-bold text-black border border-black brutal-shadow-sm hover:bg-black hover:text-white transition-colors">
                #NSU CSE (CGPA 3.83)
              </span>
              <span className="px-2 py-0.5 bg-white font-mono text-[10px] sm:text-[11px] font-bold text-black border border-black brutal-shadow-sm hover:bg-[#FF5500] hover:text-black transition-colors">
                #MULTIMODAL RAG
              </span>
            </div>

            {/* Recruiter-Ready CTA Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 sm:px-5 py-2.5 bg-white text-black font-mono font-bold text-xs sm:text-sm uppercase border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 hover:bg-[#10B981] hover:text-black transition-colors"
              >
                <span>RESUME (PDF)</span>
                <ExternalLink className="w-4 h-4 text-black" />
              </a>

              <a
                href="#projects"
                className="px-4 sm:px-5 py-2.5 bg-[#FF5500] text-black font-mono font-bold text-xs sm:text-sm uppercase border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 hover:bg-[#ff691e]"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#research"
                className="px-4 sm:px-5 py-2.5 bg-black text-white font-mono font-bold text-xs sm:text-sm uppercase border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 hover:bg-neutral-800"
              >
                <span>VIEW RESEARCH</span>
                <Cpu className="w-4 h-4 text-[#10B981]" />
              </a>

              <a
                href="#contact"
                className="px-4 sm:px-5 py-2.5 bg-[#F4F4F0] text-black font-mono font-bold text-xs sm:text-sm uppercase border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 hover:bg-white hover:text-[#2563EB]"
              >
                <span>GET IN TOUCH</span>
                <ExternalLink className="w-4 h-4 text-[#2563EB]" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Centered Portrait & Floating Animated Satellite Badges */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 lg:pt-0">
            {/* Top-Left Floating Badge with Animation */}
            <div className="hidden sm:flex absolute -top-2 -left-3 z-20 items-center gap-1.5 px-2.5 py-1 bg-[#FF5500] text-black font-mono text-[11px] font-black border-2 border-black brutal-shadow-sm animate-float-slow">
              <Zap className="w-3.5 h-3.5" />
              <span>BACKEND ARCHITECT</span>
            </div>

            {/* Top-Right Floating Badge with Animation */}
            <div className="hidden sm:flex absolute top-8 -right-3 z-20 items-center gap-1.5 px-2.5 py-1 bg-[#10B981] text-black font-mono text-[11px] font-black border-2 border-black brutal-shadow-sm animate-float-alt">
              <Cpu className="w-3.5 h-3.5" />
              <span>MULTIMODAL RAG</span>
            </div>

            {/* Bottom-Left Floating Badge */}
            <div className="hidden sm:flex absolute bottom-14 -left-4 z-20 items-center gap-1.5 px-2.5 py-1 bg-black text-white font-mono text-[11px] font-bold border-2 border-white brutal-shadow-sm animate-float-slow">
              <span className="w-2 h-2 bg-[#10B981] inline-block"></span>
              <span>FOUNDER @ SOFTLLIGENCE</span>
            </div>

            {/* Centered Portrait Card Container */}
            <div className="w-full max-w-[390px] bg-white border-2 sm:border-[3px] border-black brutal-shadow-lg relative overflow-hidden group">
              {/* Photo Area with Centered hero-updated.jpg */}
              <div className="relative w-full h-[330px] sm:h-[370px] bg-[#F7F7F4] flex items-center justify-center overflow-hidden">
                <Image
                  src="/hero-updated.jpg"
                  alt="Hossain Ahmmed Taufiq — Software Engineer · Backend · AI/ML Systems"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 390px"
                  className="object-cover object-center filter contrast-[1.02] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Integrated Clean Spec & Copy Email Bar */}
              <div className="bg-[#111111] text-white p-3 border-t-2 border-black flex items-center justify-between gap-2 font-mono text-xs">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 bg-[#10B981] animate-pulse inline-block flex-shrink-0"></span>
                  <span className="truncate text-neutral-300 text-[11px]">
                    {identity.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 bg-[#FF5500] text-black font-mono text-xs font-bold border border-black brutal-shadow-sm brutal-btn flex items-center gap-1 flex-shrink-0 hover:bg-[#ff6c23] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
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
          </div>
        </div>
      </div>
    </section>
  );
}
