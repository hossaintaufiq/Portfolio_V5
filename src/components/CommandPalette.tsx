"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  CornerDownLeft,
  FileText,
  FlaskConical,
  FolderGit2,
  Layers,
  Mail,
  MessageCircle,
  Moon,
  Search,
  User,
  Wrench,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { OPEN_GUIDE, OPEN_PALETTE, goTo, toggleTheme } from "@/lib/nav";

type Item = {
  label: string;
  hint: string;
  group: "Go to" | "Projects" | "Actions";
  icon: typeof Search;
  keywords?: string;
  run: () => void;
};

const { identity } = PORTFOLIO_DATA;

const ITEMS: Item[] = [
  { group: "Go to", label: "Work", hint: "Featured projects", icon: Layers, keywords: "projects portfolio", run: () => goTo("work") },
  { group: "Go to", label: "Experience", hint: "Roles and timeline", icon: Briefcase, keywords: "jobs career history", run: () => goTo("experience") },
  { group: "Go to", label: "Research", hint: "Papers and independent research", icon: FlaskConical, keywords: "neptune rag papers", run: () => goTo("research") },
  { group: "Go to", label: "Skills", hint: "Tools by category", icon: Wrench, keywords: "stack tech", run: () => goTo("skills") },
  { group: "Go to", label: "Background", hint: "Education and volunteering", icon: User, keywords: "education degree certifications", run: () => goTo("background") },
  { group: "Go to", label: "Contact", hint: "Send a message", icon: Mail, keywords: "hire email form", run: () => goTo("contact") },
  { group: "Projects", label: "Softlligence Manufacturing Cloud", hint: "Multi-tenant ERP, four apps", icon: FolderGit2, keywords: "erp steel garments saas", run: () => goTo("softlligence-cloud") },
  { group: "Projects", label: "Kia Bangladesh", hint: "Immersive 3D showroom", icon: FolderGit2, keywords: "three.js blender gsap", run: () => goTo("kia-bangladesh") },
  { group: "Projects", label: "Playpen School", hint: "CMS, admissions, payments", icon: FolderGit2, keywords: "school cms payment", run: () => goTo("playpen-school") },
  { group: "Projects", label: "Lucy", hint: "Local voice assistant", icon: FolderGit2, keywords: "voice ollama whisper", run: () => goTo("lucy-ai-assistant") },
  { group: "Projects", label: "More projects", hint: "Everything else", icon: FolderGit2, keywords: "mango neptune shorts focusflow", run: () => goTo("more-projects") },
  { group: "Actions", label: "Open resume", hint: "PDF, new tab", icon: FileText, keywords: "cv download", run: () => window.open("/resume.pdf", "_blank", "noopener") },
  { group: "Actions", label: "Send an email", hint: identity.email, icon: Mail, keywords: "mail contact", run: () => (window.location.href = `mailto:${identity.email}`) },
  { group: "Actions", label: "Open GitHub", hint: "Source and repositories", icon: ArrowUpRight, keywords: "code repos", run: () => window.open(identity.links.github, "_blank", "noopener") },
  { group: "Actions", label: "Open LinkedIn", hint: "Profile", icon: ArrowUpRight, keywords: "profile", run: () => window.open(identity.links.linkedin, "_blank", "noopener") },
  { group: "Actions", label: "Ask the guide", hint: "Chat that navigates", icon: MessageCircle, keywords: "chat bot help", run: () => window.dispatchEvent(new Event(OPEN_GUIDE)) },
  { group: "Actions", label: "Switch theme", hint: "Light or dark", icon: Moon, keywords: "dark light mode", run: toggleTheme },
];

/** A Ctrl or Cmd + K quick finder for every part of the page. */
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const field = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return ITEMS;
    return ITEMS.filter((it) => {
      const hay = `${it.label} ${it.hint} ${it.group} ${it.keywords ?? ""}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [query]);

  const show = () => {
    setQuery("");
    setIndex(0);
    setOpen(true);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (!o) {
            setQuery("");
            setIndex(0);
          }
          return !o;
        });
      }
    };
    const onOpen = () => show();
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) field.current?.focus();
  }, [open]);

  useEffect(() => {
    list.current?.querySelector<HTMLElement>(`[data-i="${index}"]`)?.scrollIntoView({ block: "nearest" });
  }, [index]);

  const run = (it: Item) => {
    setOpen(false);
    // Let the dialog unmount before scrolling or opening anything.
    window.setTimeout(it.run, 30);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-[#0b1020]/60 px-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Quick navigation"
        className="w-full max-w-xl overflow-hidden border border-rule bg-[var(--arch-node)] text-ink shadow-[0_40px_90px_-20px_rgba(0,0,0,0.6)]"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setIndex((i) => Math.min(i + 1, results.length - 1));
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            setIndex((i) => Math.max(i - 1, 0));
          }
          if (e.key === "Enter" && results[index]) {
            e.preventDefault();
            run(results[index]);
          }
        }}
      >
        <div className="flex items-center gap-3 border-b border-rule px-4">
          <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
          <input
            ref={field}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIndex(0);
            }}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[index] ? `palette-${index}` : undefined}
            aria-label="Search sections, projects and actions"
            placeholder="Jump to a section, project or action"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent py-4 text-base placeholder:text-muted focus:outline-none"
          />
          <kbd className="hidden rounded border border-rule px-1.5 py-0.5 text-[11px] text-muted sm:block">Esc</kbd>
        </div>

        <ul id="palette-list" ref={list} role="listbox" className="max-h-[52vh] overflow-y-auto py-2">
          {results.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-muted">
              Nothing matches. Try &ldquo;kia&rdquo;, &ldquo;resume&rdquo; or &ldquo;research&rdquo;.
            </li>
          )}
          {results.map((it, i) => {
            const header = i === 0 || results[i - 1].group !== it.group ? it.group : null;
            const Icon = it.icon;
            return (
              <li key={it.label} role="presentation">
                {header && (
                  <p className="px-4 pb-1 pt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    {header}
                  </p>
                )}
                <div
                  id={`palette-${i}`}
                  data-i={i}
                  role="option"
                  aria-selected={i === index}
                  onMouseMove={() => setIndex(i)}
                  onClick={() => run(it)}
                  className={`mx-2 flex cursor-pointer items-center gap-3 px-3 py-2.5 ${
                    i === index ? "bg-[#2440d8] text-white" : ""
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span className="text-sm font-medium">{it.label}</span>
                  <span className={`ml-auto truncate text-xs ${i === index ? "text-white/80" : "text-muted"}`}>
                    {it.hint}
                  </span>
                  {i === index && <CornerDownLeft className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 border-t border-rule px-4 py-2.5 text-[11px] text-muted">
          <span>↑ ↓ to move</span>
          <span>Enter to open</span>
          <span className="ml-auto">Ctrl or ⌘ K anywhere</span>
        </div>
      </div>
    </div>
  );
}
