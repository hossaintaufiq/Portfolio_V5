import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-rule py-16 md:py-24"
    >
      <div className="grid gap-8 md:grid-cols-[11rem_1fr] md:gap-12">
        <h2
          id={`${id}-title`}
          className="font-serif text-2xl font-medium tracking-tight"
        >
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
