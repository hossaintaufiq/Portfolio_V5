"use client";

import { useEffect, useState } from "react";
import PaletteButton from "./PaletteButton";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/**
 * A compact bar that slides in as soon as the main header scrolls out of
 * view, so the navigation is never lost. It also shows where you are.
 */
export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  // Show the bar whenever the page header is off screen.
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(header);
    return () => io.disconnect();
  }, []);

  // Mark the section being read.
  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter((el): el is HTMLElement =>
      Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-label="Sticky navigation"
      role="navigation"
      // Off screen and out of the tab order until it is needed.
      inert={!visible}
      className={`fixed inset-x-0 top-0 z-[45] border-b border-white/10 bg-[#0f1527]/88 text-white backdrop-blur-md transition-transform duration-300 motion-reduce:transition-none ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1180px] items-center gap-4 px-5 sm:px-6 md:px-10 min-[1700px]:max-w-[1320px]">
        <a
          href="#top"
          className="hidden whitespace-nowrap font-serif text-base font-semibold tracking-tight sm:block"
        >
          Hossain Ahmmed Taufiq
        </a>

        <ul className="-mx-1 flex min-w-0 flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap px-1 text-sm [scrollbar-width:none] sm:justify-end [&::-webkit-scrollbar]:hidden">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`inline-block rounded-full px-3 py-2 transition-colors ${
                  active === l.id ? "bg-white/15 font-medium text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-3 py-2 font-medium underline decoration-white/30 decoration-2 underline-offset-4 hover:decoration-white"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <PaletteButton />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
