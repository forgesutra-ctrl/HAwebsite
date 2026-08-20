import { buildPageMetadata } from "@/lib/seo";

/** Central SEO definitions for static routes — edit copy here after audits. */
export const staticPageSeo = {
  home: buildPageMetadata({
    title: "STR Trust Accounting & Financial Management",
    description:
      "STR property managers: trust accounting, bookkeeping, owner statements, and reporting — reliable numbers and an accountable financial Ally.",
    path: "/",
  }),
  consultation: buildPageMetadata({
    title: "Book STR Back-Office Consultation",
    description:
      "Property managers: schedule a 30-minute consultation on trust accounting, bookkeeping, owner statements, and financial management for your portfolio.",
    path: "/consultation",
  }),
  contact: buildPageMetadata({
    title: "Contact HostAllies STR Finance Team",
    description:
      "STR property managers: share your portfolio and goals. We handle trust accounting, bookkeeping, owner statements, and financial reporting.",
    path: "/contact",
  }),
  pricing: buildPageMetadata({
    title: "STR Back-Office Pricing & Packages",
    description:
      "Property managers: portfolio-scoped pricing for trust accounting, bookkeeping, and financial management. Request a custom quote from HostAllies.",
    path: "/pricing",
  }),
  trustkeeping: buildPageMetadata({
    title: "STR Trust Accounting Resource Hub",
    description:
      "Property managers: guides and training on STR trust accounting and finance. Join the release list for reconciliation, close, and compliance resources.",
    path: "/trustkeeping",
    noindex: true,
  }),
  trustAccountingAssessment: buildPageMetadata({
    title: "STR Trust Accounting Assessment",
    description:
      "STR operators: request a structured review of fund separation, reconciliation gaps, and control weaknesses before you scale your portfolio.",
    path: "/trust-accounting-assessment",
  }),
  blog: buildPageMetadata({
    title: "STR Finance Guides & Resources",
    description:
      "Property managers: guides on trust accounting, lodging tax, profitability, and STR financial operations from HostAllies.",
    path: "/resources/blog",
  }),
  caseStudies: buildPageMetadata({
    title: "STR Client Results & Case Studies",
    description:
      "Property managers: validated back-office outcomes from STR operators working with HostAllies.",
    path: "/resources/case-studies",
  }),
  faqs: buildPageMetadata({
    title: "STR Finance FAQs for Property Managers",
    description:
      "STR operators: answers on trust accounting, bookkeeping, owner statements, tax preparation, and financial management with HostAllies.",
    path: "/resources/faqs",
  }),
  careers: buildPageMetadata({
    title: "Careers in STR Finance & Accounting",
    description:
      "Join HostAllies: trust accounting, bookkeeping, and financial management roles for short-term rental property managers.",
    path: "/resources/careers",
  }),
  partnerships: buildPageMetadata({
    title: "STR Platform & Accounting Partners",
    description:
      "Property managers: HostAllies works with Guesty, QuickBooks, Clearing, and leading STR platforms and accounting tools.",
    path: "/partnerships",
    noindex: true,
  }),
  notFound: buildPageMetadata({
    title: "Page Not Found",
    description:
      "The page you requested could not be found. Return to HostAllies for STR trust accounting and financial management.",
    path: "/404",
    noindex: true,
  }),
} as const;
