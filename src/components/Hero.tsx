import { Briefcase, Building2, FlaskConical } from "lucide-react";
import TraceDiagram from "./TraceDiagram";

const underline =
  "underline decoration-white/30 decoration-2 underline-offset-4 hover:decoration-white";

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-6 md:pb-24 md:pt-14">
      <div className="grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="font-serif text-[2.6rem] font-medium leading-[1.04] tracking-[-0.025em] sm:text-6xl lg:text-[4.75rem]">
            I build the backend and AI systems behind education and
            manufacturing software.
          </h1>
          <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-[#b5bed3]">
            I&rsquo;m a software engineer in Dhaka, finishing my computer
            science degree at North South University. I design the services,
            data models and retrieval pipelines that turn AI features into
            products people rely on.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#work"
              className="bg-paper px-6 py-3 text-sm font-medium text-ink hover:bg-white"
            >
              Read the work
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className={`text-sm font-medium ${underline}`}>
              Download resume
            </a>
            <a href="#contact" className={`text-sm font-medium ${underline}`}>
              Get in touch
            </a>
          </div>

          <dl className="mt-14 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-3">
            <div>
              <dt className="flex items-center gap-2 text-sm text-[#aab4cf]">
                <Briefcase className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                Now
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">
                Backend AI engineer at Edumax Labs, since 10 November 2026
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm text-[#aab4cf]">
                <Building2 className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                Founder
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">
                Softlligence Technologies, multi-tenant ERP for manufacturers
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm text-[#aab4cf]">
                <FlaskConical className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                Research
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">
                Multimodal RAG and hallucination reduction at North South
                University
              </dd>
            </div>
          </dl>
        </div>

        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <TraceDiagram />
        </div>
      </div>
    </section>
  );
}
