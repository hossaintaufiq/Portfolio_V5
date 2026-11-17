import { ArrowUp } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const updated = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(new Date());
  return (
    <footer className="border-t border-rule py-10 text-sm text-muted">
      <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-6">
        <div className="max-w-[40ch]">
          <p className="font-serif text-lg font-medium text-ink">Hossain Ahmmed Taufiq</p>
          <p className="mt-1 leading-relaxed">
            Backend and AI engineer in Dhaka. Founder of Softlligence Technologies.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#top"
          className="inline-flex items-center gap-2 border border-rule px-3 py-2 font-medium text-ink hover:border-signal hover:text-signal"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
          Back to top
        </a>
      </div>
      <p className="mt-8 border-t border-rule pt-5 text-xs">
        &copy; {new Date().getFullYear()} Hossain Ahmmed Taufiq. Designed and built by hand with Next.js, Tailwind
        CSS and no template. Updated {updated}.
      </p>
    </footer>
  );
}
