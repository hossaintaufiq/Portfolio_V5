import { Mail, MapPin, Phone } from "lucide-react";
import { siGithub } from "simple-icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const link =
  "inline-flex items-center gap-2.5 underline decoration-white/40 decoration-2 underline-offset-4 hover:decoration-white";

// LinkedIn's mark is not in the brand icon set, so this is a plain "in" tile.
function LinkedInMark() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
      <rect width="20" height="20" rx="3" fill="currentColor" />
      <text
        x="10"
        y="14.5"
        textAnchor="middle"
        fontSize="11.5"
        fontWeight="700"
        fontFamily="var(--font-plex-sans), system-ui, sans-serif"
        fill="#2440d8"
      >
        in
      </text>
    </svg>
  );
}

export default function Contact() {
  const { email, phone, links, location } = PORTFOLIO_DATA.identity;
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-signal text-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-10 md:py-32">
        <h2
          id="contact-title"
          className="max-w-[18ch] font-serif text-4xl font-medium leading-[1.05] tracking-tight md:text-7xl"
        >
          Building backend or AI systems? Write to me.
        </h2>
        <a
          href={`mailto:${email}`}
          className="mt-10 inline-flex items-center gap-4 break-all font-serif text-xl underline decoration-white/40 decoration-2 underline-offset-8 hover:decoration-white md:text-4xl"
        >
          <Mail className="h-6 w-6 shrink-0 md:h-9 md:w-9" strokeWidth={1.5} aria-hidden="true" />
          {email}
        </a>
        <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm font-medium">
          <li>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={link}>
              <LinkedInMark />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noreferrer" className={link}>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                <path d={siGithub.path} />
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className={link}>
              <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              {phone}
            </a>
          </li>
          <li className="inline-flex items-center gap-2.5 opacity-85">
            <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            {location}
          </li>
        </ul>
      </div>
    </section>
  );
}
