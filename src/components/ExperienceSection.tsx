"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import FounderFeature from "./FounderFeature";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
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
            // PROFESSIONAL EMPLOYMENT HISTORY
          </div>

          <div className="grid grid-cols-1 gap-8">
            {experience.map((exp, idx) => (
              <div
                key={exp.id}
                className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-md p-6 sm:p-8 relative group hover:border-[#FF5500] transition-colors"
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b-2 border-black">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-black text-white font-mono text-xs font-bold">
                        EXPERIENCE 0{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#2563EB] text-white font-mono text-xs font-bold">
                        {exp.locationType}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-black uppercase tracking-tight">
                      {exp.role}{" "}
                      <span className="text-[#FF5500]">@ {exp.company}</span>
                    </h3>
                    {exp.companyContext && (
                      <p className="font-mono text-xs text-neutral-600 mt-1">
                        ↳ {exp.companyContext}
                      </p>
                    )}
                  </div>

                  <div className="font-mono font-bold text-xs sm:text-sm px-3 py-1.5 bg-[#F4F4F0] border-2 border-black w-fit lg:self-start">
                    <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-[#FF5500]" />
                    {exp.period}
                  </div>
                </div>

                {/* Description & Accomplishments */}
                <div className="py-6 space-y-4">
                  <p className="text-base text-neutral-900 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Highlights / Achievements */}
                  {exp.highlight && (
                    <div className="p-4 bg-[#F4F4F0] border-2 border-black border-l-8 border-l-[#FF5500] font-mono text-xs sm:text-sm">
                      <div className="text-[11px] font-bold text-[#FF5500] uppercase tracking-wider mb-1">
                        ★ KEY IMPACT HIGHLIGHT:
                      </div>
                      <div className="text-neutral-900 font-semibold leading-relaxed">
                        {exp.highlight}
                      </div>
                    </div>
                  )}

                  {exp.achievement && (
                    <div className="p-4 bg-[#F4F4F0] border-2 border-black border-l-8 border-l-[#2563EB] font-mono text-xs sm:text-sm">
                      <div className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider mb-1">
                        ★ PERFORMANCE ACHIEVEMENT:
                      </div>
                      <div className="text-neutral-900 font-semibold leading-relaxed">
                        {exp.achievement}
                      </div>
                    </div>
                  )}

                  {exp.additional && (
                    <p className="font-mono text-xs text-neutral-700 italic">
                      ↳ {exp.additional}
                    </p>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t-2 border-dashed border-neutral-300 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-neutral-500 mr-2 uppercase">
                    TECH STACK:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-black text-white font-mono text-xs font-bold border border-black hover:bg-[#FF5500] hover:text-black transition-colors"
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
