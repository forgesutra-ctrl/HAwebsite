import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Revenue Management for Short-Term Rentals",
  description:
    "Data-driven dynamic pricing, market trend analysis, and revenue forecasting for STR property managers. Keep every property competitively priced through every season.",
  alternates: { canonical: "/services/revenue-management" },
  openGraph: {
    title: "Revenue Management for Short-Term Rentals | HostAllies",
    description:
      "Dynamic pricing, market analysis, and forecasting that unlock higher profitability for STR portfolios.",
    url: "/services/revenue-management",
  },
};

const services = [
  {
    title: "Dynamic Pricing Optimization",
    body: "We use advanced pricing tools and market insights to adjust rates in real time, so your properties are always competitively priced — maximizing bookings without sacrificing revenue.",
    benefit:
      "Stay responsive to market changes and seasonal demand, capturing more bookings at the best rates.",
  },
  {
    title: "Market Trend Analysis",
    body: "We continuously monitor local, regional, and industry-wide trends — peak seasons, area events, broader shifts — and benchmark your performance with rich competitor analysis to keep your listings ahead of the curve.",
    benefit:
      "Make data-driven decisions that boost occupancy and keep your competitive edge in an evolving market.",
  },
  {
    title: "Revenue Forecasting",
    body: "Our forecasting uses historical data, booking trends, and predictive analytics to give you a clear picture of potential earnings across seasonality and demand fluctuations.",
    benefit:
      "Plan confidently with precise income projections — budget effectively and set realistic growth goals.",
  },
  {
    title: "Owner Communication Support",
    body: "Transparent, detailed reports show the impact of our strategies — pricing decisions, booking trends, and performance — with automated owner updates that reduce manual effort.",
    benefit:
      "Demonstrate measurable results that strengthen owner trust and help you retain and grow your portfolio.",
  },
];

// Rewritten so they no longer duplicate the "How It Works" steps (live-site bug).
const differentiators = [
  {
    title: "Increase occupancy, maximize earnings",
    body: "Real-time rate adjustments keep your calendar full at the best possible price — so you capture demand without leaving revenue on the table.",
  },
  {
    title: "Stay ahead of the competition",
    body: "Continuous market and competitor analysis positions your listings as the top choice as trends and seasons shift beneath you.",
  },
  {
    title: "Save time and reduce complexity",
    body: "We own the pricing engine and the owner reporting, so you get the upside of dynamic pricing without the daily overhead.",
  },
];

const steps = [
  {
    step: "01",
    title: "Assessment",
    body: "We evaluate your current pricing strategy and identify opportunities — analyzing your booking data, understanding your target market, and benchmarking against competitors.",
  },
  {
    step: "02",
    title: "Implementation",
    body: "We integrate advanced pricing tools into your systems and establish a dynamic strategy tailored to your properties and market, collaborating with you for a seamless transition.",
  },
  {
    step: "03",
    title: "Ongoing Management",
    body: "We continuously monitor performance, adjust rates as needed, and provide regular reports — staying proactive so your strategy evolves alongside market trends.",
  },
];

export default function RevenueManagementPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Revenue Management", url: "/services/revenue-management" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-rule">
        <div className="container py-16 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Revenue Management</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Unlock higher profitability with data-driven pricing.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
              Optimize your pricing strategy with industry-leading expertise and
              tools designed to keep you ahead of the competition — and capture
              every dollar the market will bear.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg" arrow>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="#how" size="lg" variant="secondary">
                How it works
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="What we make easy"
          title="Revenue management, made easy for our clients."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl border border-rule bg-surface p-7"
            >
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
              <div className="mt-5 border-t border-rule pt-4">
                <p className="text-sm leading-relaxed text-ink">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ledger">
                    Benefit →{" "}
                  </span>
                  {s.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mid CTA */}
      <section className="bg-brand-tint">
        <div className="container flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
          <h2 className="max-w-2xl text-2xl sm:text-[1.75rem]">
            Get a free consultation and a customized plan to improve your revenue
            management practices.
          </h2>
          <ButtonLink href="/contact" size="lg" arrow className="shrink-0">
            Book now
          </ButtonLink>
        </div>
      </section>

      {/* Differentiators */}
      <Section>
        <SectionHeading
          eyebrow="What makes our approach different"
          title="Pricing power, without the operational drag."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-rule bg-surface p-7"
            >
              <h3 className="text-xl">{d.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" tone="surface" divider>
        <SectionHeading eyebrow="How it works" title="From assessment to autopilot." />
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.step}>
              <div className="font-mono text-sm text-brand">{s.step}</div>
              <div className="mt-3 border-t-2 border-ink pt-4">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        eyebrow="Revenue management? Handled."
        title="Focus on strategy and scaling. We'll take care of the rest."
        ctaLabel="Talk to a Revenue Management expert"
      />
    </>
  );
}
