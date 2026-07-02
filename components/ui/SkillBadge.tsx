import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  label: string;
  className?: string;
};

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5",
        className,
      )}
    >
      {label}
    </span>
  );
}
