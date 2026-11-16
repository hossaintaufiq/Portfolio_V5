const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 py-6 md:py-8">
      <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
        Hossain Ahmmed Taufiq
      </a>
      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="opacity-70 hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline decoration-white/30 decoration-2 underline-offset-4 hover:decoration-white"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
