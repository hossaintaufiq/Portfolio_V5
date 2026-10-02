"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
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
    { href: "#about", label: "01/ABOUT", id: "about" },
    { href: "#experience", label: "02/EXP", id: "experience" },
    { href: "#projects", label: "03/PROJECTS", id: "projects" },
    { href: "#research", label: "04/RESEARCH", id: "research" },
    { href: "#skills", label: "05/SKILLS", id: "skills" },
    { href: "#education", label: "06/EDU", id: "education" },
    { href: "#contact", label: "07/CONTACT", id: "contact" },
  ];

  return (
    <div className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto">
      <header className="w-full bg-[#F4F4F0] border-2 sm:border-[3px] border-black brutal-shadow-md px-3 sm:px-5 py-2 sm:py-2.5 transition-all">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-display font-black text-lg sm:text-xl tracking-tight text-black group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black text-white flex items-center justify-center font-mono font-bold text-xs sm:text-sm border-2 border-black group-hover:bg-[#FF5500] group-hover:text-black transition-colors">
              HAT
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold text-sm sm:text-base tracking-wider">
                TAUFIQ<span className="text-[#FF5500]">.DEV</span>
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-neutral-600 uppercase">
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
                  className={`px-3 py-1.5 font-mono text-xs font-bold transition-all border-2 ${
                    isActive
                      ? "bg-black text-white border-black brutal-shadow-sm"
                      : "bg-transparent text-neutral-800 border-transparent hover:border-black hover:bg-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`mailto:${PORTFOLIO_DATA.identity.email}`}
              className="px-3.5 py-1.5 bg-[#FF5500] text-black font-mono font-bold text-xs uppercase border-2 border-black brutal-shadow-sm brutal-btn flex items-center gap-1.5 hover:bg-[#ff6a1f]"
            >
              <span>HIRE / CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`mailto:${PORTFOLIO_DATA.identity.email}`}
              className="sm:hidden px-2 py-1 bg-[#FF5500] text-black font-mono font-bold text-[10px] border-2 border-black brutal-shadow-sm"
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

        {/* Mobile Drawer Menu Attached Directly Under Floating Bar */}
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
                  href={PORTFOLIO_DATA.identity.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-black text-white font-mono text-xs font-bold border-2 border-black text-center"
                >
                  GITHUB REPOSITORY
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.identity.email}`}
                  className="px-3 py-2 bg-[#FF5500] text-black font-mono text-xs font-bold border-2 border-black text-center"
                >
                  EMAIL: {PORTFOLIO_DATA.identity.email}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
