/**
 * GA4 conversion events — fired on CTA clicks and successful form submissions.
 * Requires NEXT_PUBLIC_GA_ID in the deployment environment.
 */

export type ConversionEvent =
  | "cta_consultation"
  | "cta_trust_assessment"
  | "form_contact_submit"
  | "form_consultation_submit";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(
  event: ConversionEvent,
  params?: Record<string, string>,
): void {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", event, {
    event_category: "conversion",
    ...params,
  });
}

/** Map internal CTA destinations to GA4 conversion event names. */
export const CTA_CONVERSION_BY_HREF: Record<string, ConversionEvent> = {
  "/consultation": "cta_consultation",
  "/trust-accounting-assessment": "cta_trust_assessment",
};

export function conversionEventForHref(
  href: string,
): ConversionEvent | undefined {
  const path = href.split("?")[0].split("#")[0];
  return CTA_CONVERSION_BY_HREF[path];
}
