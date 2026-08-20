import { CtaBand } from "@/components/ui/CtaBand";
import { finalCta } from "@/src/content/home";

export function HomeFinalCta() {
  return (
    <CtaBand
      eyebrow={finalCta.eyebrow}
      title={finalCta.heading}
      body={finalCta.body}
      ctaLabel={finalCta.primaryCta.label}
      ctaHref={finalCta.primaryCta.href}
      secondaryLabel={finalCta.secondaryCta.label}
      secondaryHref={finalCta.secondaryCta.href}
    />
  );
}
