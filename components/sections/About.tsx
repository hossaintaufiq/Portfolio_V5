import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="About"
          title="A bit about me"
          description="Background, approach, and what drives my work."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-6">
            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Role
                </dt>
                <dd className="mt-1 font-medium text-foreground">{profile.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Education
                </dt>
                <dd className="mt-1 font-medium text-foreground">
                  {profile.education}
                </dd>
                <dd className="text-sm text-muted">{profile.university}</dd>
                <dd className="text-sm text-muted">CGPA: {profile.cgpa}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Contact
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Status
                </dt>
                <dd className="mt-1 font-medium text-foreground">
                  {profile.availability}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Resume
                </dt>
                <dd className="mt-1">
                  <a
                    href={profile.resumeUrl}
                    download="Hossain_Ahmmed_Taufiq_Resume.pdf"
                    className="font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    Download PDF →
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
