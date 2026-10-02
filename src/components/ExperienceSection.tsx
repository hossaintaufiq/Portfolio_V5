"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import FounderFeature from "./FounderFeature";
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  Layers,
  ArrowRight,
  TrendingUp,
  Award,
} from "lucide-react";

export default function ExperienceSection() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              02 / EXPERIENCE
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              TRACK RECORD
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [ENTERPRISE SAAS · FORTUNE 500 CLIENTS · SCALABILITY]
          </div>
        </div>

        {/* 01. Founder Feature Spotlight */}
        <FounderFeature />

        {/* 02. Employment Experience Timeline Cards */}
        <div className="space-y-8">
          <div className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-black"></span>
            // PROFESSIONAL EMPLOYMENT TIMELINE
          </div>

          <div className="grid grid-cols-1 gap-8">
            {experience.map((exp, idx) => (
              <div
                key={exp.id}
                className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-md p-6 sm:p-8 relative group hover:border-[#2563EB] transition-colors"
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b-2 border-black">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-black text-white font-mono text-xs font-bold">
                        EXPERIENCE 0{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 bg-white text-black border border-black font-mono text-xs font-bold">
                        {exp.locationType}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-black uppercase tracking-tight">
                      {exp.role}{" "}
                      <span className="text-[#2563EB]">@ {exp.company}</span>
                    </h3>
                    {exp.companyContext && (
                      <p className="font-mono text-xs text-neutral-600 mt-1">
                        ↳ {exp.companyContext}
                      </p>
                    )}
                  </div>

                  <div className="font-mono font-bold text-xs sm:text-sm px-3 py-1.5 bg-[#FF5500] text-black border-2 border-black w-fit lg:self-start brutal-shadow-sm">
                    <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-black" />
                    {exp.period}
                  </div>
                </div>

                {/* Description & Impact Bullets */}
                <div className="py-6 space-y-4">
                  <p className="text-base text-neutral-800 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Highlights / Achievements */}
                  {exp.highlight && (
                    <div className="p-4 bg-[#F4F4F0] border-2 border-black border-l-8 border-l-[#FF5500] font-mono text-xs sm:text-sm">
                      <div className="text-[11px] font-bold text-[#FF5500] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#FF5500]" />
                        <span>KEY PRODUCTION IMPACT:</span>
                      </div>
                      <div className="text-neutral-900 font-semibold leading-relaxed">
                        Developed the official platform for{" "}
                        <span className="font-bold text-black">
                          SHORBORNO School ERP
                        </span>
                        , serving{" "}
                        <span className="font-bold text-[#FF5500] bg-[#FF5500]/10 px-1 border-b-2 border-[#FF5500]">
                          100+ educational institutions
                        </span>{" "}
                        across Bangladesh while improving application
                        performance, maintainability, and user experience.
                      </div>
                    </div>
                  )}

                  {exp.achievement && (
                    <div className="p-4 bg-[#F4F4F0] border-2 border-black border-l-8 border-l-[#2563EB] font-mono text-xs sm:text-sm">
                      <div className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>PERFORMANCE ACHIEVEMENT:</span>
                      </div>
                      <div className="text-neutral-900 font-semibold leading-relaxed">
                        Reduced front-end load time by{" "}
                        <span className="font-bold text-[#2563EB] bg-[#2563EB]/10 px-1 border-b-2 border-[#2563EB]">
                          20%
                        </span>{" "}
                        through code splitting, lazy loading, and bundle
                        optimisation; designed API integration layers that
                        measurably reduced cross-service latency.
                      </div>
                    </div>
                  )}

                  {exp.additional && (
                    <p className="font-mono text-xs text-neutral-700 italic border-l-2 border-neutral-400 pl-3">
                      ↳ {exp.additional}
                    </p>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t-2 border-dashed border-neutral-300 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-neutral-500 mr-2 uppercase">
                    TECHNOLOGIES:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-[#10B981]/15 text-black font-mono text-xs font-bold border border-black hover:bg-[#10B981] hover:text-black transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
