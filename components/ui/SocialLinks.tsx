import { socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap gap-3 sm:gap-4", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
