import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="Have a project in mind or want to say hello? I'd love to hear from you."
            className="mb-8"
          />

          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-2xl font-semibold text-foreground transition-colors hover:text-accent sm:text-3xl"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-lg text-muted transition-colors hover:text-accent"
              >
                {siteConfig.phone}
              </a>
              <p className="mt-2 text-muted">{siteConfig.location}</p>
            </div>

            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
