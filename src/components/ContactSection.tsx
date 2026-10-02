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
  Terminal,
  MapPin,
  Send,
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
      className="w-full bg-[#F4F4F0] border-b-2 sm:border-b-[3px] border-black py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-black">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold uppercase mb-2 brutal-shadow-sm">
              07 / CONTACT & ENGAGEMENT
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
              INITIATE TRANSMISSION
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600">
            [AVAILABLE FOR FULL-TIME ROLES · CONTRACTS · AI COLLABORATION]
          </div>
        </div>

        {/* Huge Closing Statement Container */}
        <div className="bg-black text-white border-2 sm:border-[4px] border-black brutal-shadow-xl p-6 sm:p-10 lg:p-14 mb-12 relative overflow-hidden">
          {/* Subtle background coordinate */}
          <div className="absolute top-4 right-4 font-mono text-[10px] text-neutral-600 hidden sm:block">
            CONNECT_PORT // TCP_22
          </div>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5500] text-black font-mono font-black text-xs uppercase border border-white">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OPEN TO OPPORTUNITIES & RESEARCH</span>
            </div>

            <h3 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.95]">
              LET&apos;S BUILD
              <br />
              <span className="text-[#FF5500]">SOMETHING</span>
              <br />
              INTELLIGENT.
            </h3>

            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl">
              Whether you are looking for a backend architect for high-load systems, an AI/ML engineer for multimodal RAG pipelines, or a technical builder with founder drive — let&apos;s connect.
            </p>
          </div>
        </div>

        {/* Brutalist Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 01. Direct Email Card */}
          <div className="bg-white border-2 sm:border-[3px] border-black brutal-shadow p-6 flex flex-col justify-between group hover:border-[#FF5500] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] font-bold text-neutral-500 uppercase">
                  DIRECT EMAIL
                </span>
                <Mail className="w-5 h-5 text-[#FF5500]" />
              </div>
              <div className="font-mono text-xs sm:text-sm font-bold text-black break-all mb-4">
                {identity.email}
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-neutral-300 font-mono text-xs">
              <a
                href={`mailto:${identity.email}`}
                className="w-full py-2 bg-[#FF5500] text-black font-bold border-2 border-black flex items-center justify-center gap-1.5 hover:bg-[#ff6a1d] transition-colors"
              >
                <span>OPEN EMAIL APP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(identity.email, "email")}
                className="w-full py-2 bg-black text-white font-bold border-2 border-black flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 02. Phone & WhatsApp Card */}
          <div className="bg-white border-2 sm:border-[3px] border-black brutal-shadow p-6 flex flex-col justify-between group hover:border-[#2563EB] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] font-bold text-neutral-500 uppercase">
                  DIRECT PHONE
                </span>
                <Phone className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div className="font-mono text-base font-bold text-black mb-1">
                {identity.phone}
              </div>
              <div className="font-mono text-xs text-neutral-500 mb-4">
                Dhaka (GMT+6) / WhatsApp Available
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-neutral-300 font-mono text-xs">
              <a
                href={`tel:${identity.phone.replace(/\s+/g, "")}`}
                className="w-full py-2 bg-[#2563EB] text-white font-bold border-2 border-black flex items-center justify-center gap-1.5 hover:bg-blue-700 transition-colors"
              >
                <span>CALL DIRECTLY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(identity.phone, "phone")}
                className="w-full py-2 bg-black text-white font-bold border-2 border-black flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>COPIED NUMBER</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY PHONE</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 03. LinkedIn Card */}
          <div className="bg-white border-2 sm:border-[3px] border-black brutal-shadow p-6 flex flex-col justify-between group hover:border-[#10B981] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] font-bold text-neutral-500 uppercase">
                  LINKEDIN NETWORK
                </span>
                <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
              </div>
              <div className="font-display font-extrabold text-xl text-black uppercase mb-1">
                Hossain Taufiq
              </div>
              <div className="font-mono text-xs text-neutral-600 mb-4">
                Connect for professional inquiries & updates.
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-300 font-mono text-xs">
              <a
                href={identity.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-black text-white font-bold border-2 border-black flex items-center justify-center gap-1.5 hover:bg-[#FF5500] hover:text-black transition-colors"
              >
                <span>VIEW LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 04. GitHub Card */}
          <div className="bg-white border-2 sm:border-[3px] border-black brutal-shadow p-6 flex flex-col justify-between group hover:border-black transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] font-bold text-neutral-500 uppercase">
                  GITHUB REPOSITORIES
                </span>
                <GithubIcon className="w-5 h-5 text-black" />
              </div>
              <div className="font-display font-extrabold text-xl text-black uppercase mb-1">
                @hossaintaufiq
              </div>
              <div className="font-mono text-xs text-neutral-600 mb-4">
                Inspect open source code, research scripts & tools.
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-300 font-mono text-xs">
              <a
                href={identity.links.github}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-black text-white font-bold border-2 border-black flex items-center justify-center gap-1.5 hover:bg-[#FF5500] hover:text-black transition-colors"
              >
                <span>VIEW GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
