import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Partnerships — The STR Tool Ecosystem",
  description:
    "HostAllies works inside the STR industry's leading tools and partners with QuickBooks, Clearing, Guesty, Ramp, Hostfully, and Track to help property managers grow through Tech + Talent.",
  alternates: { canonical: "/partnerships" },
  openGraph: {
    title: "Partnerships — The STR Tool Ecosystem | HostAllies",
    description:
      "We work inside your favorite STR tools and partner with the best in the ecosystem.",
    url: "/partnerships",
  },
};

const ecosystem = [
  {
    title: "Property Management Software",
    intro: "We work inside the industry's leading PMS platforms:",
    tools: ["Guesty", "Hostfully", "Hostaway", "OwnerRez", "Track"],
  },
  {
    title: "Accounting & Taxes",
    intro:
      "We integrate financial data across your stack — trust accounting, bookkeeping, and tax prep:",
    tools: ["QuickBooks", "Clearing", "Guesty (financial module)", "TurboTax"],
  },
  {
    title: "Payment Processing",
    intro:
      "From collecting guest payments to reconciling payouts, we're fluent in the tools that keep cash flowing:",
    tools: ["Lynnbrook Group", "Stripe", "GuestyPay"],
  },
  {
    title: "Expense Management",
    intro:
      "We help clients get control of their spending with modern expense platforms:",
    tools: ["Ramp", "Topkey"],
  },
];

const preferred = [
  {
    name: "Clearing",
    logo: "/images/partners/clearing.png",
    href: "https://www.getclearing.co/",
    blurb:
      "Takes the stress out of managing your hosting finances, with automated income and expense tracking that delivers real-time insight into profitability.",
  },
  {
    name: "QuickBooks",
    logo: "/images/partners/quickbooks.png",
    href: "https://quickbooks.intuit.com/",
    blurb:
      "Brings clarity to your rental finances with robust bookkeeping tools, seamless integrations, and easy-to-use reporting.",
  },
  {
    name: "Guesty",
    logo: "/images/partners/guesty.png",
    href: "https://www.guesty.com/",
    blurb:
      "Simplifies every part of your rental business — from listings and calendars to guest communication and financial reporting — in one platform.",
  },
  {
    name: "Ramp",
    logo: "/images/partners/ramp.png",
    href: "https://ramp.com/",
    blurb:
      "Gives property managers complete control over spending with smart corporate cards, automated expense tracking, and real-time budget insight.",
  },
  {
    name: "Hostfully",
    logo: "/images/partners/hostfully.png",
    href: "https://www.hostfully.com/",
    blurb:
      "Streamlines property management with a centralized platform to automate operations and deliver a five-star guest experience.",
  },
  {
    name: "Track",
    logo: "/images/partners/track-uncropped.png",
    href: "https://tnsinc.com/",
    blurb:
      "A comprehensive PMS that centralizes reservations, accounting, owner communication, and ops — helping STR managers scale efficiently.",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Partnerships", url: "/partnerships" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-rule">
        <div className="container py-16 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Partnerships</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Powerful tech. Trusted Allies.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
              We have deep experience working with all your favorite tools across
              the STR landscape — and we keep growing our partnership ecosystem to
              serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <Section>
        <SectionHeading
          eyebrow="Tool ecosystem"
          title="We work inside the tools you already run."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ecosystem.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-rule bg-surface p-7"
            >
              <h3 className="text-xl">{cat.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {cat.intro}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-rule bg-surface-2 px-3 py-1.5 font-mono text-xs text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Preferred partners */}
      <Section tone="surface" divider>
        <SectionHeading
          eyebrow="Preferred partners"
          title="Partners with awesome benefits."
          intro="We've teamed up with select partners to offer special discounts and tailored onboarding for HostAllies clients. They share our commitment to helping property managers grow profitably through Tech + Talent."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preferred.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-2xl border border-rule bg-surface p-7"
            >
              <div className="relative h-8 w-32">
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  sizes="140px"
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-soft">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink hover:text-ember"
                >
                  {p.name}
                </a>{" "}
                {p.blurb}
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ember hover:gap-2.5"
              >
                Learn about special offers
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Why partner */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Become a partner"
            title="Why partner with HostAllies?"
          />
          <ul className="grid gap-4">
            {[
              "Grow exposure for your offering to property managers",
              "Implement your solutions more efficiently with our help",
              "Offer special pricing to your community",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-rule bg-surface p-5"
              >
                <span className="mt-0.5 text-ledger">✓</span>
                <span className="text-[15px] text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        eyebrow="Grow together. Win together."
        title="Let's help property managers grow, together."
        body="Whether you're building tech, offering a service, or strengthening the property management community — we'd love to hear from you."
        ctaLabel="Contact to partner"
      />
    </>
  );
}
