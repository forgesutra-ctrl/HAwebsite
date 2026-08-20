/**
 * Central site configuration: company facts, contact details, footer navigation.
 * Header navigation lives in lib/navigation.ts.
 */

import {
  servicesNav,
  solutionsNav,
  processNav,
  resourcesNav,
  primaryCta,
} from "./navigation";

import { getSiteUrl } from "./seo";

export const site = {
  name: "HostAllies",
  legalName: "HostAllies",
  tagline: "Reliable numbers. Clear control. An accountable financial Ally.",
  positioning: "Trust accounting and financial management for STR property managers",
  description:
    "STR property managers: trust accounting, bookkeeping, owner statements, and reporting — reliable numbers and an accountable financial Ally.",
  url: getSiteUrl(),
  email: "hello@hostallies.com",
  phone: "404-735-1666",
  phoneHref: "+14047351666",
  linkedin: "https://www.linkedin.com/company/hostallies",
  address: {
    street: "4671 Chardonnay Ct",
    city: "Dunwoody",
    region: "GA",
    postalCode: "30328",
    country: "US",
  },
  googleSiteVerification: "Xe6iAoSGPphwB8gp5E73OU-vCVRQKM_135e_GCyQfO8",
  consultationCta: primaryCta,
} as const;

export const footerNav = {
  Services: servicesNav.items.map(({ label, href }) => ({ label, href })),
  Solutions: solutionsNav.items.map(({ label, href }) => ({ label, href })),
  Company: [
    ...processNav.items.map(({ label, href }) => ({ label, href })),
    { label: "Pricing", href: "/pricing" },
    { label: "Trustkeeping", href: "/trustkeeping" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: resourcesNav.items.map(({ label, href }) => ({ label, href })),
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city} ${site.address.region} ${site.address.postalCode}`;
