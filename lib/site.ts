/**
 * Central site configuration: company facts, contact details, navigation.
 * Single source of truth for anything that appears in more than one place.
 */

export const site = {
  name: "HostAllies",
  legalName: "HostAllies",
  tagline: "Your Ally in Vacation Rental Success",
  positioning: "Built by Property Managers, for Property Managers",
  description:
    "Back-office financial and revenue management for short-term rental property managers — trust accounting, owner statements, reconciliation, and tax, handled by an ally who speaks your language.",
  // Update NEXT_PUBLIC_SITE_URL in production. Falls back to the live domain.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.hostallies.com",
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
  // The proof stats used site-wide (MYND delivery network).
  stats: [
    { value: "1,800+", label: "Skilled professionals" },
    { value: "12M+", label: "Transactions processed / yr" },
    { value: "$7B+", label: "In financial throughput" },
  ],
} as const;

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Financial Management", href: "/services/financial-management" },
  { label: "Revenue Management", href: "/services/revenue-management" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Resources", href: "/resources" },
] as const;

export const footerNav = {
  Services: [
    { label: "Financial Management", href: "/services/financial-management" },
    { label: "Revenue Management", href: "/services/revenue-management" },
    { label: "Partnerships", href: "/partnerships" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city} ${site.address.region} ${site.address.postalCode}`;
