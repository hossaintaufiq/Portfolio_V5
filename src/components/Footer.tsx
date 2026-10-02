"use client";

import React from "react";
import { ArrowUp, Terminal, Shield, Code, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white border-t-2 sm:border-t-[3px] border-black pt-12 pb-10 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-neutral-800">
          {/* Brand block */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 font-display font-black text-xl text-white">
              <span className="w-6 h-6 bg-[#FF5500] text-black text-xs font-mono font-bold flex items-center justify-center">
                HT
              </span>
              <span>{PORTFOLIO_DATA.identity.name}</span>
            </div>
            <p className="text-neutral-400 max-w-md leading-relaxed">
              Software Engineer · Backend & AI/ML Systems Builder. Founder of
              Softlligence Technologies. Researcher in Multimodal RAG & Deep
              Learning at North South University.
            </p>
            <div className="text-[11px] text-[#10B981] font-bold">
              SYS.BUILD: v5.4 // NEXT.JS 16 // TAILWIND 4 // TYPESCRIPT 5
            </div>
          </div>

          {/* Quick Sitemap */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-bold text-[#FF5500] uppercase tracking-wider mb-2">
              // INDEX
            </div>
            <ul className="space-y-1 text-neutral-300">
              <li>
                <a href="#about" className="hover:text-white hover:underline">
                  01 / ABOUT
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white hover:underline">
                  02 / EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white hover:underline">
                  03 / PROJECTS
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-white hover:underline">
                  04 / RESEARCH
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white hover:underline">
                  05 / SKILLS
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white hover:underline">
                  06 / EDUCATION
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline">
                  07 / CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Back to Top & System Spec */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 bg-[#FF5500] text-black font-bold uppercase border-2 border-white brutal-shadow-sm brutal-btn flex items-center gap-2 hover:bg-[#ff681a]"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="text-left md:text-right text-[11px] text-neutral-500 mt-6 md:mt-0">
              <div>DESIGN SYSTEM: NEO-BRUTALISM</div>
              <div>DHAKA, BANGLADESH</div>
            </div>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} HOSSAIN AHMMED TAUFIQ. ALL SYSTEM RIGHTS
            RESERVED.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#10B981]">● STRICT_TYPING_ACTIVE</span>
            <span>|</span>
            <span>ZERO FABRICATED METRICS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
