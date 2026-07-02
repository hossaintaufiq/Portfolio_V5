import { navLinks, siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#090c12] py-8 sm:py-10">
      <div className="pointer-events-none absolute -top-12 left-0 right-0 h-12 overflow-hidden sm:-top-14 sm:h-14">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,96 C180,50 320,140 520,110 C710,82 840,18 1030,44 C1210,68 1320,138 1440,106 L1440,160 L0,160 Z"
            fill="rgba(9,12,18,0.95)"
          />
          <path
            d="M0,98 C190,55 330,142 525,112 C720,84 845,20 1035,46 C1215,70 1325,140 1440,108"
            fill="none"
            stroke="rgba(34,211,238,0.25)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 xl:max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-[family-name:var(--font-brand)] text-xl font-semibold tracking-wide text-foreground">
              {siteConfig.brandName}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Full-Stack Engineer · Backend & AI/ML Systems
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Social</p>
            <div className="mt-3 flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
