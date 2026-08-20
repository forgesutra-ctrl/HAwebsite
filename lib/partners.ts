/**
 * Partner / platform logos with relationship classification.
 * Default classification is experiencedWith until formally confirmed.
 */

export type PartnerRelationship =
  | "formalPartner"
  | "officialIntegration"
  | "experiencedWith"
  | "compatibleWith"
  | "usedByCustomers";

export const partnerRelationshipLabels: Record<PartnerRelationship, string> = {
  formalPartner: "Formal partner",
  officialIntegration: "Official integration",
  experiencedWith: "Experienced with",
  compatibleWith: "Compatible with",
  usedByCustomers: "Used by customers",
};

export type PartnerLogo = {
  name: string;
  src?: string;
  relationship: PartnerRelationship;
};

/** Platforms HostAllies works across — logo when available, wordmark otherwise. */
export const partnerLogos: PartnerLogo[] = [
  {
    name: "Guesty",
    src: "/images/partners/guesty.png",
    relationship: "experiencedWith",
  },
  {
    name: "Hostfully",
    src: "/images/partners/hostfully.png",
    relationship: "experiencedWith",
  },
  {
    name: "Track",
    src: "/images/partners/track.png",
    relationship: "experiencedWith",
  },
  {
    name: "Hostaway",
    relationship: "experiencedWith",
  },
  {
    name: "OwnerRez",
    relationship: "experiencedWith",
  },
  {
    name: "QuickBooks",
    src: "/images/partners/quickbooks.png",
    relationship: "experiencedWith",
  },
  {
    name: "Clearing",
    src: "/images/partners/clearing.png",
    relationship: "experiencedWith",
  },
  {
    name: "Ramp",
    src: "/images/partners/ramp.png",
    relationship: "experiencedWith",
  },
  {
    name: "Stripe",
    relationship: "experiencedWith",
  },
];
