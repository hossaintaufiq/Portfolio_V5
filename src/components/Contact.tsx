import { Mail, MapPin, Phone } from "lucide-react";
import { siGithub } from "simple-icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ContactForm from "./ContactForm";

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
        fill="#1b2f9e"
      >
        in
      </text>
    </svg>
  );
}

export default function Contact() {
  const { email, phone, links, location } = PORTFOLIO_DATA.identity;
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="grade-contact text-white"
    >
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 sm:px-6 md:gap-16 md:px-10 md:py-28 lg:grid-cols-12 min-[1700px]:max-w-[1320px]">
        <div className="lg:col-span-6">
          <h2
            id="contact-title"
            className="font-serif text-[clamp(2rem,8vw,2.5rem)] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Building backend or AI systems? Write to me.
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-white/80">
            Tell me what you are building and where you need help. I read every
            message and reply by email.
          </p>

          <ul className="mt-10 space-y-4 text-sm font-medium">
            <li>
              <a href={`mailto:${email}`} className={link}>
                <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                {email}
              </a>
            </li>
            <li>
              <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className={link}>
                <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                {phone}
              </a>
            </li>
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
            <li className="inline-flex items-center gap-2.5 text-white/80">
              <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              {location}
            </li>
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <ContactForm email={email} />
        </div>
      </div>
    </section>
  );
}
