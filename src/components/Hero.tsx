import { ArrowDown, Download, Mail, MessageCircle } from "lucide-react";
import { siGithub } from "simple-icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import TraceDiagram from "./TraceDiagram";
import Scribble from "./Scribble";

const underline =
  "underline decoration-white/30 decoration-2 underline-offset-4 hover:decoration-white";

type Proof = {
  /** Animated number; leave out when the figure is text. */
  to?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  label: string;
  where: string;
  tag?: string;
};

// Only figures that are true and sourced from the work itself.
const PROOF: Proof[] = [
  { to: 200, suffix: "+", label: "schools use the SaaS I build", where: "Shorborno Cloud, ZeroDevs Ltd" },
  { to: 4, suffix: " apps", label: "on one multi-tenant backend", where: "Softlligence Manufacturing Cloud" },
  { to: 20, suffix: "%", label: "faster front-end load", where: "Brooksource, Fortune 500 client" },
  {
    text: "< 10 tk",
    label: "per speaking session, down from 25",
    where: "Edumax Labs, speech AI",
    tag: "Target",
  },
];

export default function Hero() {
  const { email, phone, links, availability } = PORTFOLIO_DATA.identity;
  const whatsapp = `https://wa.me/${phone.replace(/\D/g, "")}`;

  return (
    <section id="top" className="pb-16 pt-4 md:pb-24 md:pt-10">
      <div className="grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {availability && (
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm text-[#d5dcf0]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#5fd38d] opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5fd38d]" />
              </span>
              {availability}
            </p>
          )}

          <h1 className="mt-6 font-serif text-[clamp(2.1rem,9.4vw,2.7rem)] font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]">
            I build the{" "}
            <Scribble tone="light" variant="swash">
              backend and AI systems
            </Scribble>{" "}
            behind education and manufacturing software.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[#b5bed3]">
            A founder-engineer who ships end to end: from a school SaaS used
            by 200+ schools and a multi-tenant manufacturing ERP to speech AI
            for students&rsquo; speaking practice at Edumax Labs. Based in Dhaka,
            finishing my computer science degree at North South University.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="col-span-2 inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#16213a] hover:bg-[#dfe5ff]"
            >
              <Download className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Resume
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Email me
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                <path d={siGithub.path} />
              </svg>
              GitHub
            </a>
          </div>
          <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <a href="#work" className={`inline-flex items-center gap-1.5 ${underline}`}>
              Read the work
              <ArrowDown className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={underline}>
              LinkedIn
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 ${underline}`}
            >
              <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
              WhatsApp
            </a>
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {PROOF.map((p) => (
              <div key={p.where}>
                <dt className="sr-only">{p.where}</dt>
                <dd>
                  <p className="font-serif text-4xl font-medium leading-none tracking-tight">
                    {p.to !== undefined ? (
                      <>
                        <span className="sr-only">
                          {p.prefix}
                          {p.to}
                          {p.suffix}
                        </span>
                        <span aria-hidden="true">
                          {p.prefix}
                          <span className="count" style={{ "--to": p.to } as React.CSSProperties} />
                          {p.suffix}
                        </span>
                      </>
                    ) : (
                      p.text
                    )}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-[#d5dcf0]">
                    {p.label}
                    {p.tag && (
                      <span className="ml-2 rounded-sm bg-[#7f95ff]/20 px-1.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-[#b8c4ff]">
                        {p.tag}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-[#8f9bbd]">{p.where}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <TraceDiagram />
        </div>
      </div>
    </section>
  );
}
