import type { ReactNode } from "react";

type Tone = "field" | "surface" | "green";

const toneClasses: Record<Tone, string> = {
  field: "bg-field text-ink",
  surface: "bg-surface-2 text-ink",
  // Deep green promoted to a real surface — flip the working tokens so nested
  // components (text-ink, border-rule, bg-surface) adapt automatically.
  green:
    "bg-green text-[color:var(--on-green)] [--ink:var(--on-green)] [--ink-soft:var(--on-green-soft)] [--ink-faint:var(--on-green-soft)] [--rule:var(--on-green-rule)] [--rule-strong:var(--on-green-rule)] [--surface:color-mix(in_srgb,var(--on-green)_7%,transparent)] [--surface-2:color-mix(in_srgb,var(--on-green)_7%,transparent)]",
};

export function Section({
  children,
  tone = "field",
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
  return (
    <section
      id={id}
      className={`${toneClasses[tone]} ${
        divider ? "border-t border-rule" : ""
      } py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

/**
 * Ledger section header — a heavy hairline, a mono label at the left margin, and
 * an optional running reference at the right, the way a statement is ruled off.
 * Replaces the old floating orange-dash eyebrow.
 */
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
    <div className={`border-t-2 border-ink pt-3 ${className}`}>
      <div className="flex items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
        <span>{label}</span>
        {reference && <span className="text-ink-faint">{reference}</span>}
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  reference,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  reference?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && <LedgerHead label={eyebrow} reference={reference} />}
      <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.6rem]">{title}</h2>
        {intro && (
          <p
            className={`mt-5 text-lg leading-relaxed text-ink-soft ${
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
