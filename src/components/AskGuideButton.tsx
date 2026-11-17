"use client";

import { MessageCircle } from "lucide-react";
import { OPEN_GUIDE } from "@/lib/nav";

/** Opens the navigating guide chat from anywhere on the page. */
export default function AskGuideButton({ tone = "default" }: { tone?: "default" | "snapshot" }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_GUIDE))}
      className={`inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold underline underline-offset-4 ${
        tone === "snapshot" ? "text-[var(--snap-fg)] decoration-[var(--snap-ghost)] hover:decoration-[var(--snap-fg)]" : "text-signal"
      }`}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      Ask the guide anything
    </button>
  );
}
