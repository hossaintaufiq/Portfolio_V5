import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  tone?: "default" | "gold" | "cool";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl md:mb-14",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-medium uppercase tracking-[0.22em]",
            tone === "gold" && "text-accent-gold",
            tone === "cool" && "text-sky-300/90",
            tone === "default" && "text-sky-300/80",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.85rem] md:leading-[1.08]",
          tone === "gold" && "text-gradient",
          tone === "cool" && "text-gradient-cool",
          tone === "default" && "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
