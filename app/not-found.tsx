import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Eyebrow>Off the ledger</Eyebrow>
      <h1 className="mt-6 font-mono text-6xl font-semibold text-brand">404</h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">
        This page doesn't reconcile. It may have moved — let's get you back to
        something that balances.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" arrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/resources" variant="secondary">
          Browse resources
        </ButtonLink>
      </div>
    </div>
  );
}
