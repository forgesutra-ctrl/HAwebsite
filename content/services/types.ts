/**
 * Service page content schema.
 *
 * @cms-editable All copy lives in sibling `*.content.ts` files — edit those
 * files after SEO audits; do not change `ServicePageView` for copy updates.
 */

export type ServiceFaq = { q: string; a: string };

export type ServiceStep = { title: string; body: string };

export type ServiceDeliverable = { title: string; body: string };

export type ServicePageContent = {
  slug: string;
  /** Primary search intent — surfaced in hero as page intent. */
  searchIntent: string;
  meta: {
    /** Search-intent phrase — becomes "{title} | HostAllies" (≤60 chars total). */
    title: string;
    description: string;
  };
  hero: {
    category: string;
    h1: string;
    intro: string;
  };
  audience: {
    heading: string;
    intro?: string;
    items: string[];
  };
  problem: {
    heading: string;
    intro?: string;
    points: string[];
  };
  deliverables: {
    heading: string;
    intro?: string;
    items: ServiceDeliverable[];
  };
  howItWorks: {
    heading: string;
    intro?: string;
    steps: ServiceStep[];
  };
  whatYouGet: {
    heading: string;
    intro?: string;
    items: string[];
  };
  /** Registered proof IDs — proof section renders only when records exist. */
  proofIds?: readonly string[];
  faq: ServiceFaq[];
  /** Slugs of related services (must exist in the services registry). */
  relatedServices: string[];
  cta: {
    eyebrow: string;
    title: string;
    body?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};
