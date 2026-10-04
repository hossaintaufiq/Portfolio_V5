"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "projects",
        "research",
        "skills",
        "education",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "ABOUT", id: "about" },
    { href: "#experience", label: "EXPERIENCE", id: "experience" },
    { href: "#projects", label: "PROJECTS", id: "projects" },
    { href: "#research", label: "RESEARCH", id: "research" },
    { href: "#skills", label: "SKILLS", id: "skills" },
    { href: "#education", label: "EDUCATION", id: "education" },
    { href: "#contact", label: "CONTACT", id: "contact" },
  ];

  return (
    <div className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl mx-auto">
      <header className="w-full bg-[#F4F4F0] border-2 sm:border-[3px] border-black brutal-shadow-md px-3 sm:px-5 py-2 sm:py-2.5 transition-all">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-display font-black text-base sm:text-lg tracking-tight text-black group"
          >
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-mono font-bold text-xs border border-black group-hover:bg-[#FF5500] group-hover:text-black transition-colors">
              HAT
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold text-xs sm:text-sm tracking-wider">
                TAUFIQ<span className="text-[#FF5500]">.DEV</span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
                ENGINEER · AI/ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 font-mono text-xs font-bold transition-all border ${isActive
                      ? "bg-black text-white border-black brutal-shadow-sm"
                      : "bg-transparent text-neutral-800 border-transparent hover:border-black hover:bg-white hover:text-[#2563EB]"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-white text-black font-mono font-bold text-xs uppercase border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 hover:bg-black hover:text-white transition-colors"
            >
              <span>RESUME (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5500]" />
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 bg-[#FF5500] text-black font-mono font-bold text-xs uppercase border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 hover:bg-[#ff6a1f]"
            >
              <span>HIRE / CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="sm:hidden px-2 py-1 bg-white text-black font-mono font-bold text-[10px] border border-black brutal-shadow-sm"
            >
              RESUME
            </a>
            <a
              href="#contact"
              className="sm:hidden px-2 py-1 bg-[#FF5500] text-black font-mono font-bold text-[10px] border border-black brutal-shadow-sm"
            >
              HIRE
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 bg-black text-white border-2 border-black brutal-shadow-sm hover:bg-neutral-800 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="xl:hidden border-t-2 border-black mt-3 pt-3">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 bg-white border-2 border-black font-mono font-bold text-xs tracking-wider flex items-center justify-between brutal-shadow-sm active:translate-x-1 active:translate-y-1"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5500]" />
                </a>
              ))}
              <div className="pt-2 border-t border-dashed border-neutral-400 mt-1 flex flex-col gap-1.5">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-[#FF5500] text-black font-mono text-xs font-bold border-2 border-black text-center flex items-center justify-center gap-1.5"
                >
                  <span>DOWNLOAD / VIEW RESUME (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.identity.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-black text-white font-mono text-xs font-bold border-2 border-black text-center"
                >
                  GITHUB REPOSITORY
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 bg-white text-black font-mono text-xs font-bold border-2 border-black text-center hover:bg-[#FF5500] transition-colors"
                >
                  GO TO CONTACT SECTION ↓
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
