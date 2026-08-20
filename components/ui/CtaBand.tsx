import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { Section } from "./Section";

export function CtaBand({
  eyebrow = "Get started",
  title,
  body,
  ctaLabel = "Book a 30-minute consultation",
  ctaHref = "/consultation",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Section tone="dark" className="py-16 sm:py-24 lg:py-24">
      <div className="mx-auto max-w-prose text-center">
        <p className="text-label">{eyebrow}</p>
        <h2 className="mt-5">{title}</h2>
        {body && <p className="mx-auto mt-5 max-w-prose text-body">{body}</p>}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={ctaHref} size="lg" arrow>
            {ctaLabel}
          </ButtonLink>
          {secondaryLabel && secondaryHref && (
            <ButtonLink href={secondaryHref} size="lg" variant="secondaryOnDark">
              {secondaryLabel}
            </ButtonLink>
          )}
        </div>
      </div>
    </Section>
  );
}
