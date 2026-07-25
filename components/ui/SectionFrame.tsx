import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionFrameProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "sky" | "violet" | "gold" | "emerald" | "rose" | "mixed";
};

const TONES: Record<NonNullable<SectionFrameProps["tone"]>, string> = {
  sky: [
    "bg-[radial-gradient(ellipse_80%_55%_at_50%_-8%,rgba(56,189,248,0.22),transparent_55%)]",
    "bg-[radial-gradient(ellipse_45%_35%_at_90%_70%,rgba(34,211,238,0.12),transparent_50%)]",
    "bg-[radial-gradient(ellipse_40%_30%_at_10%_80%,rgba(167,139,250,0.12),transparent_50%)]",
  ].join(" "),
  violet: [
    "bg-[radial-gradient(ellipse_75%_50%_at_20%_0%,rgba(167,139,250,0.22),transparent_55%)]",
    "bg-[radial-gradient(ellipse_50%_40%_at_85%_70%,rgba(56,189,248,0.14),transparent_50%)]",
    "bg-[radial-gradient(ellipse_35%_30%_at_50%_100%,rgba(244,114,182,0.1),transparent_50%)]",
  ].join(" "),
  gold: [
    "bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,rgba(251,191,36,0.16),transparent_55%)]",
    "bg-[radial-gradient(ellipse_45%_40%_at_15%_80%,rgba(56,189,248,0.14),transparent_50%)]",
    "bg-[radial-gradient(ellipse_35%_30%_at_60%_50%,rgba(249,115,22,0.08),transparent_50%)]",
  ].join(" "),
  emerald: [
    "bg-[radial-gradient(ellipse_70%_50%_at_15%_10%,rgba(52,211,153,0.16),transparent_55%)]",
    "bg-[radial-gradient(ellipse_45%_40%_at_85%_70%,rgba(56,189,248,0.14),transparent_50%)]",
    "bg-[radial-gradient(ellipse_35%_30%_at_50%_100%,rgba(167,139,250,0.1),transparent_50%)]",
  ].join(" "),
  rose: [
    "bg-[radial-gradient(ellipse_70%_50%_at_70%_0%,rgba(244,114,182,0.16),transparent_55%)]",
    "bg-[radial-gradient(ellipse_45%_40%_at_15%_75%,rgba(167,139,250,0.14),transparent_50%)]",
    "bg-[radial-gradient(ellipse_40%_35%_at_90%_60%,rgba(56,189,248,0.1),transparent_50%)]",
  ].join(" "),
  mixed: [
    "bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(56,189,248,0.2),transparent_55%)]",
    "bg-[radial-gradient(ellipse_45%_40%_at_15%_85%,rgba(167,139,250,0.18),transparent_50%)]",
    "bg-[radial-gradient(ellipse_40%_35%_at_90%_25%,rgba(251,191,36,0.14),transparent_50%)]",
  ].join(" "),
};

export function SectionFrame({
  children,
  id,
  className,
  tone = "sky",
}: SectionFrameProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:py-32",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#060912]" />
      <div className={cn("pointer-events-none absolute inset-0", TONES[tone])} />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-20" />
      <div className="section-shell relative">{children}</div>
    </section>
  );
}
