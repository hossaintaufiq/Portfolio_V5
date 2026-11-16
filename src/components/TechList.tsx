import { Cloud } from "lucide-react";
import { findIcon, iconColor } from "@/data/icons";

// A technology name with its brand logo when one exists, or a small marker
// so every item keeps the same rhythm.
export default function TechList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {items.map((name) => {
        const icon = findIcon(name);
        return (
          <li key={name} className="inline-flex items-center gap-2">
            {name.toLowerCase() === "aws" ? (
              <Cloud
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
                strokeWidth={2}
                color="#ff9900"
              />
            ) : icon ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
                fill={iconColor(icon)}
              >
                <path d={icon.path} />
              </svg>
            ) : (
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 border border-muted/60"
              />
            )}
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
