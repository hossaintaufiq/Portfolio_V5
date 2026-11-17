"use client";

import { Search } from "lucide-react";
import { OPEN_PALETTE } from "@/lib/nav";

/** Header button that opens the quick finder. */
export default function PaletteButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE))}
      aria-label="Search and quick navigation"
      className="inline-flex h-8 items-center gap-2 rounded-full border border-white/25 px-2.5 text-xs opacity-80 hover:opacity-100 lg:px-3"
    >
      <Search className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      <span className="hidden lg:inline">Search</span>
      <kbd className="hidden rounded border border-white/30 px-1.5 text-[10px] leading-4 lg:inline">Ctrl K</kbd>
    </button>
  );
}
