"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ContactSection() {
  const { identity } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-3 border-b-2 border-black">
          <div>
            <div className="inline-block px-2.5 py-0.5 bg-black text-white font-mono text-xs font-bold uppercase mb-1.5 brutal-shadow-sm">
              07 / CONTACT
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black">
              LET&apos;S CONNECT
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [BACKEND SYSTEMS · AI/ML RESEARCH · PRODUCTION ENGINEERING]
          </div>
        </div>

        {/* Big Premium Black Panel Container with Compact Headline */}
        <div className="bg-black text-white border-2 sm:border-[4px] border-black brutal-shadow-xl p-5 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Header Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-neutral-800 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#10B981]">
              <span className="w-2 h-2 bg-[#10B981] animate-pulse inline-block"></span>
              <span>OPEN TO CONNECTIONS</span>
            </div>
            <div className="font-mono text-xs text-neutral-400">
              TIMEZONE: GMT+6 (DHAKA, BANGLADESH)
            </div>
          </div>

          {/* Compact Headline & Statement (Zero Wasted Vertical Space) */}
          <div className="max-w-4xl space-y-4 mb-8">
            <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight">
              LET&apos;S BUILD{" "}
              <span className="text-[#FF5500]">SOMETHING INTELLIGENT.</span>
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-2xl border-l-2 border-[#2563EB] pl-3.5">
              I&apos;m open to{" "}
              <span className="text-white font-semibold">
                software engineering
              </span>
              ,{" "}
              <span className="text-[#2563EB] font-semibold">
                backend systems
              </span>
              ,{" "}
              <span className="text-[#10B981] font-semibold">
                AI/ML research
              </span>
              , and technically challenging product opportunities.
            </p>
          </div>

          {/* Interactive Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* 01. EMAIL CARD */}
            <div className="bg-[#141517] border-2 border-neutral-700 p-4 sm:p-5 flex flex-col justify-between hover:border-[#FF5500] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold text-[#FF5500] uppercase tracking-wider">
                    // EMAIL
                  </span>
                  <Mail className="w-4 h-4 text-[#FF5500]" />
                </div>
                <div className="font-mono text-xs font-bold text-white break-all mb-3">
                  {identity.email}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-800 font-mono text-xs">
                <button
                  onClick={() => copyToClipboard(identity.email, "email")}
                  aria-label="Copy email address to clipboard"
                  className="py-1.5 px-2 bg-white text-black font-bold border border-white flex items-center justify-center gap-1 hover:bg-neutral-200 transition-colors text-[11px]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>COPIED ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${identity.email}`}
                  aria-label="Send email"
                  className="py-1.5 px-2 bg-[#FF5500] text-black font-bold border border-black flex items-center justify-center gap-1 hover:bg-[#ff691e] transition-colors text-[11px]"
                >
                  <span>SEND</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 02. PHONE CARD */}
            <div className="bg-[#141517] border-2 border-neutral-700 p-4 sm:p-5 flex flex-col justify-between hover:border-[#2563EB] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold text-[#2563EB] uppercase tracking-wider">
                    // PHONE / WA
                  </span>
                  <Phone className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div className="font-mono text-xs sm:text-sm font-bold text-white mb-1">
                  {identity.phone}
                </div>
                <div className="font-mono text-[10px] text-neutral-400 mb-3">
                  Direct Line (GMT+6)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-800 font-mono text-xs">
                <button
                  onClick={() => copyToClipboard(identity.phone, "phone")}
                  aria-label="Copy phone number to clipboard"
                  className="py-1.5 px-2 bg-white text-black font-bold border border-white flex items-center justify-center gap-1 hover:bg-neutral-200 transition-colors text-[11px]"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>COPIED ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
                <a
                  href={`tel:${identity.phone.replace(/\s+/g, "")}`}
                  aria-label="Call phone number"
                  className="py-1.5 px-2 bg-[#2563EB] text-white font-bold border border-black flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors text-[11px]"
                >
                  <span>CALL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 03. LINKEDIN CARD */}
            <div className="bg-[#141517] border-2 border-neutral-700 p-4 sm:p-5 flex flex-col justify-between hover:border-[#10B981] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold text-[#10B981] uppercase tracking-wider">
                    // LINKEDIN
                  </span>
                  <LinkedinIcon className="w-4 h-4 text-[#10B981]" />
                </div>
                <div className="font-display font-extrabold text-base text-white uppercase mb-1">
                  Hossain Taufiq
                </div>
                <div className="font-mono text-[10px] text-neutral-400 mb-3">
                  Professional network & updates.
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 font-mono text-xs">
                <a
                  href={identity.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="w-full py-1.5 bg-white text-black font-bold border border-white flex items-center justify-center gap-1 hover:bg-[#10B981] hover:text-black transition-colors text-xs"
                >
                  <span>OPEN LINK</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 04. GITHUB CARD */}
            <div className="bg-[#141517] border-2 border-neutral-700 p-4 sm:p-5 flex flex-col justify-between hover:border-white transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                    // GITHUB
                  </span>
                  <GithubIcon className="w-4 h-4 text-white" />
                </div>
                <div className="font-display font-extrabold text-base text-white uppercase mb-1">
                  @hossaintaufiq
                </div>
                <div className="font-mono text-[10px] text-neutral-400 mb-3">
                  Repositories, tools & research.
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 font-mono text-xs">
                <a
                  href={identity.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open GitHub profile"
                  className="w-full py-1.5 bg-white text-black font-bold border border-white flex items-center justify-center gap-1 hover:bg-[#FF5500] hover:text-black transition-colors text-xs"
                >
                  <span>OPEN GITHUB</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Technical Scope Footer inside Contact Panel */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="text-[#FF5500] font-bold">●</span>
              <span>SOFTWARE ENGINEERING</span>
              <span className="text-neutral-600">|</span>
              <span className="text-[#2563EB] font-bold">●</span>
              <span>BACKEND SYSTEMS</span>
              <span className="text-neutral-600">|</span>
              <span className="text-[#10B981] font-bold">●</span>
              <span>AI / ML</span>
            </div>
            <div className="text-neutral-500">
              DHAKA, BANGLADESH · WORLDWIDE REMOTE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
