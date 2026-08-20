import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.notFound;

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Eyebrow>Off the ledger</Eyebrow>
      <h1 className="mt-6 font-heading text-display text-orange-dark">404</h1>
      <p className="mt-4 max-w-prose text-body text-pine">
        This page doesn&apos;t reconcile. It may have moved — let&apos;s get you back to
        something that balances.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" arrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/resources/blog" variant="secondary">
          Browse resources
        </ButtonLink>
      </div>
    </div>
  );
}
