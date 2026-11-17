import type { ReactNode } from "react";

/**
 * A page section. The headline is a large display line of its own, set apart
 * from the smaller item headings inside, with one italic word to underline.
 */
export default function Section({
  id,
  title,
  headline,
  index,
  blurb,
  aside,
  wide = false,
  children,
}: {
  id: string;
  /** Short name of the section, shown as the label above the headline. */
  title: string;
  /** The display headline. Falls back to the title. */
  headline?: ReactNode;
  /** Section number shown before the label, for example "01". */
  index?: string;
  /** One line that says what the section is. */
  blurb?: string;
  /** Extra content under the blurb, such as a jump list. */
  aside?: ReactNode;
  /** Content starts at the left edge instead of beside a narrow intro column. */
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-rule py-16 md:py-24"
    >
      <header className={`max-w-[22ch] md:max-w-4xl ${wide ? "mb-10 md:mb-12" : "mb-12 md:mb-16"}`}>
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {index && <span className="tabular-nums text-signal">{index}</span>}
          <span aria-hidden="true" className="h-px w-10 bg-rule" />
          {title}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-5 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl md:text-6xl"
        >
          {headline ?? title}
        </h2>
      </header>

      {wide ? (
        <div>
          {(blurb || aside) && (
            <div className="mb-10 max-w-[68ch] md:mb-14">
              {blurb && <p className="leading-relaxed text-muted">{blurb}</p>}
              {aside && <div className="mt-5">{aside}</div>}
            </div>
          )}
          {children}
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-[11rem_1fr] md:gap-12">
          <div>
            {blurb && <p className="text-sm leading-relaxed text-muted">{blurb}</p>}
            {aside && <div className="mt-6 hidden md:block">{aside}</div>}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      )}
    </section>
  );
}
