import type { ReactNode } from "react";

export type SectionTone = "light" | "dark" | "sand";

/** @deprecated Prefer `light`, `dark`, or `sand`. Inset callouts use `AccentPanel`. */
type LegacyTone = "page" | "pine" | "surface" | "accent";

type Tone = SectionTone | LegacyTone;

function resolveTone(tone: Tone): SectionTone {
  if (tone === "dark" || tone === "pine") return "dark";
  if (tone === "sand" || tone === "accent") return "sand";
  return "light";
}

const toneClasses: Record<SectionTone, string> = {
  light: "bg-white text-pine-dark",
  sand: [
    "bg-sand text-pine-dark",
    "[&_h2]:text-pine-dark [&_h3]:text-pine-dark",
    "[&_.text-label]:text-orange-dark [&_.eyebrow]:text-orange-dark",
    "[&_.text-body]:text-pine [&_.text-pine]:text-pine",
    "[&_.text-pine-dark]:text-pine-dark",
  ].join(" "),
  dark: [
    "bg-pine-dark text-white border-t border-pine-dark",
    "[&_h2]:text-white [&_h3]:text-white",
    "[&_.text-label]:text-sand-light [&_.eyebrow]:text-sand-light",
    "[&_.text-body]:text-sand-light [&_.text-pine]:text-sand-light",
    "[&_.text-pine-dark]:text-white",
  ].join(" "),
};

export function Section({
  children,
  tone = "light",
  className = "",
  divider = false,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  divider?: boolean;
  id?: string;
}) {
  const resolved = resolveTone(tone);
  const dividerClass =
    divider && resolved === "light" ? "border-t border-moss" : "";

  return (
    <section
      id={id}
      data-tone={resolved}
      className={`${toneClasses[resolved]} ${dividerClass} py-12 sm:py-16 lg:py-24 ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

/** Sand inset panel on white — not a section background. */
export function AccentPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-panel border-[length:var(--border-width)] border-moss bg-sand text-pine-dark ${className}`}
    >
      {children}
    </div>
  );
}

export function LedgerHead({
  label,
  reference,
  className = "",
}: {
  label: string;
  reference?: string;
  className?: string;
}) {
  return (
    <div className={`border-t-2 border-pine-dark pt-3 ${className}`}>
      <div className="flex items-baseline justify-between gap-4 text-label text-pine [[data-tone=dark]_&]:text-sand-light">
        <span>{label}</span>
        {reference && (
          <span className="text-moss-dark [[data-tone=dark]_&]:text-sand-light">
            {reference}
          </span>
        )}
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow [[data-tone=dark]_&]:text-sand-light">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  reference,
  title,
  intro,
  align = "left",
  layout = "stacked",
  className = "",
}: {
  eyebrow?: string;
  reference?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  /** `split` puts eyebrow + title left and intro right from lg up. Opt-in. */
  layout?: "stacked" | "split";
  className?: string;
}) {
  if (layout === "split") {
    return (
      <div
        className={`lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-16 ${className}`}
      >
        <div>
          {eyebrow && <LedgerHead label={eyebrow} reference={reference} />}
          <h2 className="mt-5">{title}</h2>
        </div>
        {intro && (
          // pt-3.5 matches LedgerHead's 2px rule plus pt-3, so the intro's first
          // line sits on the same baseline as the eyebrow.
          <p className="mt-5 text-body text-pine [[data-tone=dark]_&]:text-sand-light lg:mt-0 lg:pt-3.5">
            {intro}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      {eyebrow && <LedgerHead label={eyebrow} reference={reference} />}
      <div
        className={`${align === "center" ? "mx-auto text-center" : ""} max-w-prose`}
      >
        <h2 className="mt-5">{title}</h2>
        {intro && (
          <p
            className={`mt-5 text-body text-pine [[data-tone=dark]_&]:text-sand-light ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
