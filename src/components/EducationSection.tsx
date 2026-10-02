"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  GraduationCap,
  Award,
  Languages,
  BookOpen,
  Calendar,
  Sparkles,
  CheckCircle2,
  BookmarkCheck,
} from "lucide-react";

export default function EducationSection() {
  const { education, certifications, languages } = PORTFOLIO_DATA;

  return (
    <section
      id="education"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              06 / ACADEMICS & CREDENTIALS
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              EDUCATION & CERTIFICATIONS
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [NORTH SOUTH UNIVERSITY · NOTRE DAME COLLEGE · PROFESSIONAL CERTS]
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-md p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#FF5500] transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-black font-mono text-xs">
                  <span className="px-2.5 py-0.5 bg-black text-white font-bold uppercase">
                    DEGREE_0{idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#10B981] text-black font-bold">
                    {edu.cgpa}
                  </span>
                </div>

                {/* Degree & School */}
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-black mb-1">
                  {edu.degree}
                </h3>
                <div className="font-mono text-sm font-bold text-[#FF5500] mb-4">
                  {edu.institution}
                </div>

                <div className="font-mono text-xs text-neutral-600 mb-6 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.timeline}</span>
                </div>

                {/* Coursework & Focus if available */}
                {edu.coursework && (
                  <div className="mb-4 space-y-2 font-mono text-xs">
                    <span className="font-bold text-black uppercase tracking-wider block">
                      RELEVANT COURSEWORK:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 bg-[#F4F4F0] text-black border border-black font-semibold"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.researchFocus && (
                  <div className="mb-4 space-y-2 font-mono text-xs">
                    <span className="font-bold text-[#2563EB] uppercase tracking-wider block">
                      RESEARCH FOCUS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.researchFocus.map((res, rIdx) => (
                        <span
                          key={rIdx}
                          className="px-2 py-0.5 bg-black text-white font-bold"
                        >
                          {res}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.additional && (
                  <div className="p-3 bg-[#F4F4F0] border border-black font-mono text-xs text-neutral-800 leading-relaxed">
                    <span className="font-bold text-black block mb-1">
                      LEADERSHIP & EXTRACURRICULAR:
                    </span>
                    {edu.additional}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Languages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications Box */}
          <div className="lg:col-span-8 bg-white border-2 sm:border-[3px] border-black brutal-shadow p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-6">
              <div className="flex items-center gap-2 font-mono font-black text-sm uppercase">
                <Award className="w-4 h-4 text-[#FF5500]" />
                <span>CERTIFICATIONS & SPECIALIZATIONS</span>
              </div>
              <span className="font-mono text-xs text-neutral-500">
                {certifications.length} CREDENTIALS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#F4F4F0] border-2 border-black flex flex-col justify-between hover:bg-[#FF5500] hover:text-black transition-colors group"
                >
                  <div className="font-bold text-xs sm:text-sm text-black group-hover:text-black">
                    {cert.name}
                  </div>
                  <div className="text-[11px] text-neutral-600 group-hover:text-neutral-900 mt-1">
                    Issued by: {cert.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Box */}
          <div className="lg:col-span-4 bg-black text-white border-2 sm:border-[3px] border-black brutal-shadow p-6 sm:p-8 font-mono flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                <div className="flex items-center gap-2 text-[#10B981] font-bold text-sm uppercase">
                  <Languages className="w-4 h-4" />
                  <span>LANGUAGES</span>
                </div>
                <span className="text-xs text-neutral-400">FLUENCY</span>
              </div>

              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#161719] border border-neutral-700"
                  >
                    <div className="font-bold text-white text-base mb-1">
                      {lang.name}
                    </div>
                    <div className="text-xs text-[#FF5500] font-semibold">
                      {lang.proficiency}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400">
              // READY FOR GLOBAL COLLABORATION & DISTRIBUTED ENGINEERING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
