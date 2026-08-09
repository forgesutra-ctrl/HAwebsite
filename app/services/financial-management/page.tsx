import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Financial Management for Short-Term Rentals",
  description:
    "Trust accounting, owner statements, reconciliation, reporting, and tax for STR property managers. Audit-ready books handled by a dedicated Ally — free consultation available.",
  alternates: { canonical: "/services/financial-management" },
  openGraph: {
    title: "Financial Management for Short-Term Rentals | HostAllies",
    description:
      "Audit-ready trust accounting, owner statements, reconciliation, and tax for STR property managers.",
    url: "/services/financial-management",
  },
};

const capabilities = [
  {
    title: "Revenue reconciliation",
    body: "Seamless reconciliation for bookings and payments across every channel.",
  },
  {
    title: "Expense management",
    body: "Expense handling that's automated, precise, and secure.",
  },
  {
    title: "Owner statements",
    body: "Accurate, timely statements your owners actually understand.",
  },
  {
    title: "Trust accounting",
    body: "Full compliance with trust accounting standards and fund separation.",
  },
  {
    title: "Operating accounting",
    body: "Day-to-day books managed to deliver accurate financials.",
  },
  {
    title: "Reporting & insights",
    body: "Reporting that helps you manage the business, not just record it.",
  },
];

const offerings = [
  {
    id: "trust-accounting",
    title: "Trust Accounting",
    body: "Efficient, transparent management of trust funds — with rigorous separation of guest funds and owner disbursements for total auditability.",
  },
  {
    id: "operational-accounting",
    title: "Operational Accounting",
    body: "Streamlined day-to-day financial operations so nothing slips between bookings, payouts, and close.",
  },
  {
    id: "financial-reporting",
    title: "Financial Reporting",
    body: "Clear insight into financial performance, with reports built for owners and operators alike.",
  },
  {
    id: "management-reporting",
    title: "Management Reporting",
    body: "Strategic data that drives informed decisions on pricing, cost, and portfolio growth.",
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    body: "Strategies built for long-term financial success and confident, budgeted growth.",
  },
  {
    id: "income-tax-filing",
    title: "Income Tax Filing",
    body: "Accurate and timely filing of income taxes, handled by specialists who know STR.",
  },
  {
    id: "lodging-tax-filing",
    title: "Lodging Tax Filing",
    body: "Lodging tax compliance made easy across the multi-jurisdiction maze STR operators face.",
  },
  {
    id: "expense-management",
    title: "Expense Management",
    body: "Efficient, secure handling of expenses and payments, integrated with your stack.",
  },
];

const differentiators = [
  {
    title: "Dedicated account manager",
    body: "Personalized support from a single contact who acts as your financial advisor.",
  },
  {
    title: "White-glove onboarding",
    body: "A smooth setup that gets you started right, without disrupting your operation.",
  },
  {
    title: "24/5 delivery team",
    body: "Work happens around the clock, with support available as you need it.",
  },
  {
    title: "Maximum accuracy & automation",
    body: "Precise, efficient bookkeeping through the right mix of experience and technology.",
  },
];

const faqs = [
  {
    q: "Do you work inside our existing PMS and accounting tools?",
    a: "Yes. We work directly within the platforms you already run — Guesty, Hostfully, Track, QuickBooks, Clearing, and more — rather than forcing a migration.",
  },
  {
    q: "How do you handle trust accounting compliance?",
    a: "We maintain rigorous separation of guest funds and owner disbursements, reconciled to the cent, so your trust accounts are audit-ready at any time.",
  },
  {
    q: "Can you handle both income tax and lodging tax?",
    a: "We handle income tax filing and multi-jurisdiction lodging tax compliance, so nothing falls through the cracks between jurisdictions.",
  },
  {
    q: "What size portfolio do you support?",
    a: "We support property managers from a handful of units to several hundred, scaling our delivery team to match your growth.",
  },
];

export default function FinancialManagementPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Financial Management", url: "/services/financial-management" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-rule">
        <div className="container py-16 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Financial Management</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Short-term rental finances, handled with precision.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
              Our experienced team works around the clock to save you time and
              money while holding the highest standards of accounting — so your
              books stay flawless and your owners stay confident.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg" arrow>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="#offerings" size="lg" variant="secondary">
                See what we handle
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <Section>
        <SectionHeading
          eyebrow="What we make easy"
          title="Financial management, made easy for our clients."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="bg-surface p-6">
              <h3 className="text-lg text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mid CTA banner */}
      <section className="bg-brand-tint">
        <div className="container flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
          <h2 className="max-w-2xl text-2xl sm:text-[1.75rem]">
            Get a free consultation and a customized plan to improve your
            financial management practices.
          </h2>
          <ButtonLink href="/contact" size="lg" arrow className="shrink-0">
            Book now
          </ButtonLink>
        </div>
      </section>

      {/* Offerings */}
      <Section id="offerings">
        <SectionHeading
          eyebrow="Service offerings"
          title="Eight services. One accountable Ally."
          intro="Each offering is delivered by specialists who understand STR nuances — no generic bookkeeping, no handoffs to strangers."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offerings.map((o, i) => (
            <div
              key={o.id}
              id={o.id}
              className="scroll-mt-24 rounded-2xl border border-rule bg-surface p-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl">{o.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Differentiators */}
      <Section tone="surface" divider>
        <SectionHeading
          eyebrow="What makes our approach different"
          title="The difference is in how we show up."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <div key={d.title}>
              <div className="font-mono text-sm text-brand">
                0{i + 1}
              </div>
              <div className="mt-3 border-t-2 border-ink pt-4">
                <h3 className="text-lg">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {d.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Packages — request a quote (no invented pricing) */}
      <Section>
        <div className="rounded-3xl border border-rule bg-surface p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow>Bookkeeping, tax &amp; finance packages</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Packages that scale with your business.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Every portfolio is different — unit count, tooling, tax exposure,
                and how much of the back office you want off your plate. We build
                a package around your operation and share transparent pricing in
                your consultation.
              </p>
              <div className="mt-7">
                <ButtonLink href="/contact" size="lg" arrow>
                  Request a custom quote
                </ButtonLink>
              </div>
            </div>
            <ul className="grid gap-3">
              {[
                "Priced to your unit count and scope",
                "Bookkeeping, trust accounting & reconciliation",
                "Income & lodging tax add-ons",
                "Fractional CFO reporting when you need it",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-rule bg-surface-2 px-5 py-4"
                >
                  <span className="mt-0.5 text-ledger">✓</span>
                  <span className="text-[15px] text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface" divider>
        <SectionHeading eyebrow="Questions" title="Good to know." />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-rule bg-surface p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium text-ink">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-rule text-ink-soft transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Financial management? Handled."
        title="Focus on strategy and scaling. We'll take care of the rest."
        ctaLabel="Talk to a Financial Management expert"
      />
    </>
  );
}
