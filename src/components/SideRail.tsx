"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Mail } from "lucide-react";
import { siGithub } from "simple-icons";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

// Dhaka time, so a visitor sees when the person on the other end is awake.
const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 30_000);
  return () => clearInterval(id);
};
const clock = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dhaka",
  }).format(new Date());

const mark = "mix-blend-difference text-white";

/** Page-edge furniture for wide screens: a section index and a contact rail. */
export default function SideRail({
  email,
  github,
  linkedin,
}: {
  email: string;
  github: string;
  linkedin: string;
}) {
  const [active, setActive] = useState<string>("");
  const time = useSyncExternalStore(subscribe, clock, () => "");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav
        aria-label="Sections"
        className={`${mark} pointer-events-none fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 min-[1340px]:block`}
      >
        <ul className="pointer-events-auto space-y-4">
          {SECTIONS.map((s) => {
            const on = active === s.id;
            return (
              <li key={s.id}>
                <a href={`#${s.id}`} className="group relative flex items-center" aria-label={s.label}>
                  <span
                    aria-hidden="true"
                    className={`block rounded-full border border-current transition-all duration-200 ${
                      on ? "h-3 w-3 bg-current" : "h-2 w-2 opacity-60 group-hover:opacity-100"
                    }`}
                  />
                  <span className="absolute left-6 whitespace-nowrap text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                    {s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <aside
        aria-label="Contact shortcuts"
        className={`${mark} fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 min-[1340px]:flex`}
      >
        <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className="opacity-70 hover:opacity-100">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="currentColor">
            <path d={siGithub.path} />
          </svg>
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[13px] font-bold leading-none opacity-70 hover:opacity-100">
          in
        </a>
        <a href={`mailto:${email}`} aria-label="Email" className="opacity-70 hover:opacity-100">
          <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
        </a>
        <span aria-hidden="true" className="h-14 w-px bg-current opacity-40" />
        {time && (
          <span className="rotate-180 text-[11px] font-medium tracking-[0.14em] opacity-70 [writing-mode:vertical-rl]">
            DHAKA {time}
          </span>
        )}
      </aside>
    </>
  );
}
