"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Code2,
  Server,
  Cpu,
  Layout,
  Database,
  Cloud,
  CheckSquare,
  Terminal,
} from "lucide-react";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  const categoryDescriptions: Record<string, string> = {
    "01_LANG": "Core languages for systems, algorithmic problems & web services",
    "02_BACK": "Distributed backend architectures, APIs & authentication",
    "03_AIML": "Multimodal RAG frameworks, LLMs & predictive machine learning",
    "04_FRNT": "Modern component systems, state management & reactive UIs",
    "05_DATA": "Relational & document stores with schema indexing",
    "06_CLOD": "Cloud hosting, continuous integration & containerization",
    "07_METH": "Engineering discipline, testing patterns & data structures",
  };

  const getCategoryMeta = (code: string) => {
    switch (code) {
      case "01_LANG":
        return {
          icon: <Code2 className="w-4 h-4 text-[#FF5500]" />,
          accentColor: "border-l-[#FF5500]",
          textColor: "text-[#FF5500]",
        };
      case "02_BACK":
        return {
          icon: <Server className="w-4 h-4 text-[#2563EB]" />,
          accentColor: "border-l-[#2563EB]",
          textColor: "text-[#2563EB]",
        };
      case "03_AIML":
        return {
          icon: <Cpu className="w-4 h-4 text-[#10B981]" />,
          accentColor: "border-l-[#10B981]",
          textColor: "text-[#10B981]",
        };
      case "04_FRNT":
        return {
          icon: <Layout className="w-4 h-4 text-purple-600" />,
          accentColor: "border-l-purple-600",
          textColor: "text-purple-600",
        };
      case "05_DATA":
        return {
          icon: <Database className="w-4 h-4 text-amber-600" />,
          accentColor: "border-l-amber-600",
          textColor: "text-amber-600",
        };
      case "06_CLOD":
        return {
          icon: <Cloud className="w-4 h-4 text-cyan-600" />,
          accentColor: "border-l-cyan-600",
          textColor: "text-cyan-600",
        };
      case "07_METH":
        return {
          icon: <CheckSquare className="w-4 h-4 text-emerald-600" />,
          accentColor: "border-l-emerald-600",
          textColor: "text-emerald-600",
        };
      default:
        return {
          icon: <Terminal className="w-4 h-4" />,
          accentColor: "border-l-black",
          textColor: "text-black",
        };
    }
  };

  return (
    <section
      id="skills"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              05 / TECHNICAL TAXONOMY
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              SKILLS & TOOLCHAIN
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [STRUCTURED BY DOMAIN · RIGOROUS · PRODUCTION GRADE]
          </div>
        </div>

        {/* Skills Grid with Category Numbers and Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((category, idx) => {
            const meta = getCategoryMeta(category.categoryCode);
            const desc = categoryDescriptions[category.categoryCode] || "Production toolchain";
            return (
              <div
                key={category.categoryCode}
                className={`bg-white border-2 sm:border-[3px] border-black border-l-8 ${meta.accentColor} brutal-shadow-md flex flex-col justify-between group hover:border-black transition-colors ${
                  idx === 0 || idx === 1 ? "lg:col-span-1 xl:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="bg-black text-white p-4 flex items-center justify-between border-b-2 border-black font-mono">
                    <div className="flex items-center gap-2">
                      {meta.icon}
                      <span className="font-bold text-xs sm:text-sm tracking-wider uppercase">
                        {category.name}
                      </span>
                    </div>
                    <span className={`text-[11px] ${meta.textColor} font-bold`}>
                      {category.categoryCode}
                    </span>
                  </div>

                  {/* Short Description */}
                  <div className="p-3 bg-[#F4F4F0] border-b border-neutral-300 font-mono text-[11px] text-neutral-600">
                    {desc}
                  </div>

                  {/* Skills Items Block */}
                  <div className="p-4 sm:p-5">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="px-3 py-1.5 bg-white border border-black font-mono text-xs font-bold text-black flex items-center gap-1.5 hover:bg-[#FF5500] hover:text-black transition-colors group/item"
                        >
                          <span className="w-1.5 h-1.5 bg-black group-hover/item:bg-white inline-block"></span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Count Ticker */}
                <div className="bg-[#F4F4F0] px-4 py-2 border-t border-black font-mono text-[10px] text-neutral-600 flex items-center justify-between">
                  <span>MODULE COUNT</span>
                  <span className="font-bold text-black">{category.skills.length} VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
