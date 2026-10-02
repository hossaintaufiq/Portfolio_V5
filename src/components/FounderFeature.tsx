"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Building2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  Server,
} from "lucide-react";

export default function FounderFeature() {
  const { founderFeature } = PORTFOLIO_DATA;

  return (
    <div className="mb-14">
      {/* Studio Header Card */}
      <div className="bg-white border-2 sm:border-[3px] border-black brutal-shadow-lg overflow-hidden">
        {/* Top brutalist bar */}
        <div className="bg-[#FF5500] text-black px-4 sm:px-6 py-3 border-b-2 sm:border-b-[3px] border-black flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono font-black text-xs sm:text-sm tracking-wider uppercase">
            <Building2 className="w-4 h-4" />
            <span>FOUNDER & VENTURE SPOTLIGHT</span>
          </div>
          <div className="font-mono text-xs font-bold px-2.5 py-0.5 bg-black text-white">
            {founderFeature.status}
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block px-2.5 py-0.5 bg-black text-white font-mono text-xs font-bold uppercase mb-3">
                ROLE: {founderFeature.role}
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black mb-4">
                {founderFeature.company}
              </h3>
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-medium mb-6 border-l-4 border-black pl-3.5">
                Founder of{" "}
                <span className="font-bold text-black">
                  Softlligence Technologies
                </span>{" "}
                and contributor to{" "}
                <span className="font-semibold text-[#2563EB]">
                  production software
                </span>{" "}
                used by businesses and educational institutions.
              </p>

              <div className="space-y-2 font-mono text-xs sm:text-sm">
                <div className="font-bold text-black uppercase tracking-wider mb-1.5">
                  // PRODUCTION SCOPE & ARCHITECTURE:
                </div>
                {founderFeature.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 bg-[#F4F4F0] border border-black hover:border-[#FF5500] transition-colors"
                  >
                    <span className="w-2 h-2 bg-[#FF5500] flex-shrink-0 mt-1.5"></span>
                    <span className="text-neutral-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-black text-white p-6 border-2 border-black font-mono">
              <div className="text-xs text-[#10B981] font-bold mb-3 flex items-center justify-between pb-2 border-b border-neutral-800">
                <span>// STUDIO_SPECIFICATION</span>
                <span>ID: SFT-FOUNDER</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400 block text-[10px] uppercase">
                    PLATFORM DOMAIN
                  </span>
                  <span className="font-bold text-white text-sm">
                    Enterprise Manufacturing ERP / MIS SaaS
                  </span>
                </div>
                <div className="border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400 block text-[10px] uppercase">
                    ARCHITECTURE
                  </span>
                  <span className="font-bold text-white">
                    Multi-Tenant, Modular RBAC, Commercial Ops
                  </span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">
                    CORE IMPACT
                  </span>
                  <span className="font-bold text-[#FF5500]">
                    Production software used by businesses and educational
                    institutions
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800">
                <a
                  href="#projects"
                  className="w-full block py-2.5 bg-[#10B981] text-black font-bold text-xs uppercase text-center border-2 border-black hover:bg-[#0ea372] transition-colors"
                >
                  VIEW SOFTLLIGENCE CLOUD CASE STUDY ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
