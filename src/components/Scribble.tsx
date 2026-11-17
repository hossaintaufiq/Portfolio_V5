import type { ReactNode } from "react";

/** Hand-drawn underline for a headline word or phrase. */
export default function Scribble({
  children,
  tone = "ink",
  variant = "wave",
  inView = false,
}: {
  children: ReactNode;
  /** "light" is for dark backgrounds, "peach" for the vibrant gradient card. */
  tone?: "ink" | "light" | "peach";
  variant?: "wave" | "swash";
  /** Draw on scroll instead of on load, for headlines below the fold. */
  inView?: boolean;
}) {
  const cls = [
    "scribble",
    variant === "swash" && "scribble-swash",
    tone === "light" && "scribble-light",
    tone === "peach" && "scribble-peach",
    inView && "scribble-view",
  ]
    .filter(Boolean)
    .join(" ");
  return <span className={cls}>{children}</span>;
}
