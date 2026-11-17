"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUp, ExternalLink, MessageCircle, X } from "lucide-react";
import { FIRST_CHIPS, reply, type Action, type Reply } from "@/lib/guide";

type Message = { id: number; from: "bot" | "user"; text: string; actions?: Action[] };

const GREETING: Reply = {
  text: "Hi, I am the guide for this portfolio. Ask me about the projects, experience or skills, or tell me where to go and I will scroll you there.",
  chips: FIRST_CHIPS,
};

/** Scroll to a section or project and pulse it so the eye finds it. */
function goTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "start" });
  el.classList.remove("nav-flash");
  void el.offsetWidth; // restart the animation if it is already running
  el.classList.add("nav-flash");
  window.setTimeout(() => el.classList.remove("nav-flash"), 1800);
}

export default function ChatGuide() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [chips, setChips] = useState<string[]>(GREETING.chips ?? []);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: GREETING.text },
  ]);
  const nextId = useRef(1);
  const log = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const timer = useRef<number | undefined>(undefined);

  // A link ending in #guide opens the chat straight away.
  useEffect(() => {
    const t = window.setTimeout(() => {
      if (window.location.hash === "#guide") setOpen(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  // A gentle nudge once, a few seconds in.
  useEffect(() => {
    const show = window.setTimeout(() => setTeaser(true), 3500);
    const hide = window.setTimeout(() => setTeaser(false), 12000);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  // Keep the newest message in view.
  useEffect(() => {
    const el = log.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) field.current?.focus();
  }, [open]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setInput("");
    setChips([]);
    setMessages((m) => [...m, { id: nextId.current++, from: "user", text }]);
    setTyping(true);
    timer.current = window.setTimeout(() => {
      const r = reply(text);
      setMessages((m) => [
        ...m,
        { id: nextId.current++, from: "bot", text: r.text, actions: r.actions },
      ]);
      setChips(r.chips ?? FIRST_CHIPS);
      setTyping(false);
      if (r.autoNav) {
        goTo(r.autoNav);
        // On a phone the panel covers the page, so step aside.
        if (window.innerWidth < 640) setOpen(false);
      }
    }, 450);
  };

  const run = (a: Action) => {
    if (a.kind === "nav") {
      goTo(a.id);
      if (window.innerWidth < 640) setOpen(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Portfolio guide"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          className="absolute bottom-16 right-0 flex h-[min(34rem,calc(100dvh-7rem))] w-[calc(100vw-2rem)] max-w-[24rem] flex-col overflow-hidden border border-rule bg-[var(--arch-node)] text-ink shadow-[0_30px_70px_-20px_rgba(22,33,58,0.55)]"
        >
          <div className="flex items-center justify-between bg-[#16213a] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2440d8] font-serif text-sm font-semibold">
                T
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Portfolio guide</p>
                <p className="flex items-center gap-1.5 text-xs text-[#aab4cf]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5fd38d]" />
                  Ask, or tell me where to go
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close the guide"
              className="rounded p-1 text-[#aab4cf] hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div
            ref={log}
            role="log"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m) => (
              <div key={m.id} className={m.from === "user" ? "flex justify-end" : "flex"}>
                <div
                  className={`max-w-[88%] whitespace-pre-line px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-[#2440d8] text-white"
                      : "border border-rule bg-[var(--surface)]"
                  }`}
                >
                  {m.text}
                  {m.actions && m.actions.length > 0 && (
                    <span className="mt-3 flex flex-wrap gap-2">
                      {m.actions.map((a) =>
                        a.kind === "nav" ? (
                          <button
                            key={a.label + a.id}
                            type="button"
                            onClick={() => run(a)}
                            className="inline-flex min-h-8 items-center gap-1 border border-signal px-2.5 py-1 text-xs font-medium text-signal hover:bg-signal hover:text-[var(--arch-node)]"
                          >
                            {a.label}
                            <ArrowRight className="h-3 w-3" aria-hidden="true" />
                          </button>
                        ) : (
                          <a
                            key={a.label + a.href}
                            href={a.href}
                            target={a.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noreferrer"
                            className="inline-flex min-h-8 items-center gap-1 border border-rule px-2.5 py-1 text-xs font-medium hover:border-signal hover:text-signal"
                          >
                            {a.label}
                            <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          </a>
                        ),
                      )}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex">
                <div className="flex items-center gap-1 border border-rule bg-[var(--surface)] px-3.5 py-3" aria-label="Typing">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-muted motion-safe:animate-bounce"
                      style={{ animationDelay: `${i * 120}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {chips.length > 0 && !typing && (
            <div className="flex flex-wrap gap-2 border-t border-rule px-4 py-3">
              {chips.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => send(c)}
                  className="min-h-9 rounded-full border border-rule px-3.5 py-1.5 text-xs font-medium hover:border-signal hover:text-signal"
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-rule px-3 py-3"
          >
            <label htmlFor="guide-input" className="sr-only">
              Ask the guide
            </label>
            <input
              id="guide-input"
              ref={field}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Try: show me the Kia project"
              autoComplete="off"
              maxLength={200}
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={!input.trim() || typing}
              className="flex h-9 w-9 items-center justify-center bg-[#2440d8] text-white disabled:opacity-40"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      {!open && teaser && (
        <p className="absolute bottom-3 right-16 whitespace-nowrap border border-rule bg-[var(--arch-node)] px-3 py-2 text-xs font-medium text-ink shadow-lg">
          Need a guide? Ask me anything.
        </p>
      )}

      <button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          setTeaser(false);
        }}
        aria-expanded={open}
        aria-label={open ? "Close the portfolio guide" : "Open the portfolio guide"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#2440d8] text-white shadow-[0_14px_30px_-8px_rgba(36,64,216,0.7)] transition-transform hover:scale-105"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        )}
        {!open && (
          <span className="absolute right-0.5 top-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#5fd38d] opacity-70 motion-safe:animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#2440d8] bg-[#5fd38d]" />
          </span>
        )}
      </button>
    </div>
  );
}
