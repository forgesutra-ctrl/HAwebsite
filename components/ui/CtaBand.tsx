import type { ReactNode } from "react";
import { ButtonLink } from "./Button";

/**
 * Closing call-to-action band on the deep green surface, orange button as the
 * single accent.
 */
export function CtaBand({
  eyebrow = "Get started",
  title,
  body,
  ctaLabel = "Book a free consultation",
  ctaHref = "/contact",
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
    <section className="bg-green-deep py-20 text-[color:var(--on-green)] sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-3xl text-[color:var(--on-green)] sm:text-4xl lg:text-[2.8rem]">
            {title}
          </h2>
          {body && (
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--on-green-soft)]">
              {body}
            </p>
          )}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={ctaHref} size="lg" arrow>
              {ctaLabel}
            </ButtonLink>
            {secondaryLabel && secondaryHref && (
              <ButtonLink
                href={secondaryHref}
                size="lg"
                variant="secondary"
                className="border-[color:var(--on-green-rule)] bg-transparent text-[color:var(--on-green)] hover:border-brand hover:text-brand"
              >
                {secondaryLabel}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
