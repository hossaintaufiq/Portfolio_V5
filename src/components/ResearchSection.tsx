"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Cpu,
  FlaskConical,
  Microscope,
  FileText,
  UserCheck,
  Calendar,
  AlertTriangle,
  Network,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ResearchSection() {
  const { research } = PORTFOLIO_DATA;

  return (
    <section
      id="research"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              04 / RESEARCH & EXPERIMENTAL LAB
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              AI / ML RESEARCH
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [NORTH SOUTH UNIVERSITY · DEEP LEARNING · MULTIMODAL RAG]
          </div>
        </div>

        {/* Scientific Laboratory Banner */}
        <div className="bg-black text-white p-6 sm:p-8 border-2 sm:border-[3px] border-black brutal-shadow mb-10 font-mono">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#10B981] font-bold text-xs uppercase">
                <FlaskConical className="w-4 h-4" />
                <span>// RESEARCH HYPOTHESIS & SCIENTIFIC DOMAINS</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Multimodal Retrieval-Augmented Generation & Deep Predictive Modeling
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
                Investigating cross-modal consistency across text, images, and tabular data to mitigate hallucinations in large foundation models, alongside multi-task deep architectures for scientific property prediction.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="px-3 py-1.5 bg-[#FF5500] text-black font-bold text-xs border border-white">
                ACADEMIC LAB @ NSU
              </span>
            </div>
          </div>
        </div>

        {/* Research Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {research.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-md p-6 flex flex-col justify-between relative group hover:border-[#2563EB] transition-colors"
            >
              <div>
                {/* Header Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-black font-mono text-xs">
                  <span className="px-2 py-0.5 bg-black text-white font-bold">
                    LAB_0{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 bg-[#10B981] text-black font-bold text-[11px] truncate max-w-[180px]">
                    {item.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-black mb-3 leading-snug group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>

                {/* Metadata */}
                <div className="space-y-1.5 font-mono text-xs text-neutral-600 mb-4 p-3 bg-[#F4F4F0] border border-black">
                  <div className="font-bold text-black flex items-center gap-1.5">
                    <Microscope className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-700">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.timeline}</span>
                  </div>
                  {item.supervisor && (
                    <div className="flex items-center gap-1.5 text-[#2563EB] font-bold">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Supervisor: {item.supervisor}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-800 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Disclaimer if any */}
                {item.disclaimer && (
                  <div className="p-3 bg-[#FFF3CD] border border-[#FFEBAA] text-neutral-900 font-mono text-[11px] flex items-start gap-2 mb-4">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>NOTE:</strong> {item.disclaimer}
                    </span>
                  </div>
                )}
              </div>

              <div>
                {/* Tags */}
                <div className="pt-3 border-t border-neutral-300 mb-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#111111] text-white font-mono text-[10px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                {item.hasGithub && item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 bg-black text-white font-mono text-xs font-bold border-2 border-black flex items-center justify-center gap-1.5 hover:bg-[#FF5500] hover:text-black transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>VIEW EXPERIMENTAL CODE</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
