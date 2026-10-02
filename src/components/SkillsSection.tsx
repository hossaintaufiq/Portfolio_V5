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

  const getCategoryIcon = (code: string) => {
    switch (code) {
      case "01_LANG":
        return <Code2 className="w-4 h-4 text-[#FF5500]" />;
      case "02_BACK":
        return <Server className="w-4 h-4 text-[#2563EB]" />;
      case "03_AIML":
        return <Cpu className="w-4 h-4 text-[#10B981]" />;
      case "04_FRNT":
        return <Layout className="w-4 h-4 text-purple-600" />;
      case "05_DATA":
        return <Database className="w-4 h-4 text-amber-600" />;
      case "06_CLOD":
        return <Cloud className="w-4 h-4 text-cyan-600" />;
      case "07_METH":
        return <CheckSquare className="w-4 h-4 text-emerald-600" />;
      default:
        return <Terminal className="w-4 h-4" />;
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
            [CATEGORIZED · RIGOROUS · PRODUCTION STACK]
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((category, idx) => (
            <div
              key={category.categoryCode}
              className={`bg-white border-2 sm:border-[3px] border-black brutal-shadow-md flex flex-col justify-between group hover:border-[#FF5500] transition-colors ${
                idx === 0 || idx === 1 ? "lg:col-span-1 xl:col-span-2" : ""
              }`}
            >
              {/* Category Header */}
              <div className="bg-black text-white p-4 flex items-center justify-between border-b-2 border-black font-mono">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(category.categoryCode)}
                  <span className="font-bold text-xs sm:text-sm tracking-wider uppercase">
                    {category.name}
                  </span>
                </div>
                <span className="text-[10px] text-[#10B981] font-bold">
                  {category.categoryCode}
                </span>
              </div>

              {/* Skills Items Block */}
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 bg-[#F4F4F0] border-2 border-black font-mono text-xs font-bold text-black flex items-center gap-1.5 hover:bg-[#FF5500] hover:text-black transition-colors group/item"
                    >
                      <span className="w-1.5 h-1.5 bg-black group-hover/item:bg-white inline-block"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Count Ticker */}
              <div className="bg-[#F4F4F0] px-4 py-2 border-t border-black font-mono text-[10px] text-neutral-600 flex items-center justify-between">
                <span>VERIFIED MODULES</span>
                <span>{category.skills.length} ITEMS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
