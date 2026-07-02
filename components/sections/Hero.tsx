import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          {profile.role}
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:bg-surface"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <span className="inline-flex items-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {profile.availability}
          </span>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
