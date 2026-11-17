import PaletteButton from "./PaletteButton";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:gap-x-8 py-5 lg:flex-nowrap lg:py-8">
      <a
        href="#top"
        className="order-1 whitespace-nowrap font-serif text-base sm:text-lg font-semibold tracking-tight lg:mr-auto"
      >
        Hossain Ahmmed Taufiq
      </a>
      <div className="order-2 ml-auto flex items-center gap-2 lg:order-3 lg:ml-0">
        <PaletteButton />
        <ThemeToggle />
      </div>
      <nav
        aria-label="Primary"
        className="order-3 -mx-6 w-[calc(100%+3rem)] overflow-x-auto px-6 [scrollbar-width:none] lg:order-2 lg:mx-0 lg:w-auto lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(90deg,#000_90%,transparent)] lg:[mask-image:none]"
      >
        <ul className="flex items-center gap-x-6 whitespace-nowrap text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="inline-block py-2 opacity-75 hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block py-2 font-medium underline decoration-white/30 decoration-2 underline-offset-4 hover:decoration-white"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
