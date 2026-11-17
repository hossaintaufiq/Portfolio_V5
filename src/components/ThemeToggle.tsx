"use client";

import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/lib/nav";

// The theme is set before paint by a small script in the layout, so this
// button holds no state. Both icons render and CSS shows the right one.
export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between light and dark theme"
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 opacity-80 hover:opacity-100"
    >
      <Sun className="hidden h-4 w-4 dark:block" strokeWidth={1.75} aria-hidden="true" />
      <Moon className="h-4 w-4 dark:hidden" strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
