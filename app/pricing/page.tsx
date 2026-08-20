import type { Metadata } from "next";
import { AccentPanel, Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { PricingComparisonTable } from "@/components/pricing/PricingComparisonTable";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.pricing;

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/pricing" },
        ]}
      />
      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-24">
          <div className="max-w-prose">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mt-6">Packages scoped to your portfolio.</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">
              Every operation is different — unit count, tooling, tax exposure, and
              how much of the back office you want off your plate. We build a package
              around your business and share transparent pricing in your consultation.
            </p>
            <div className="mt-8">
              <ButtonLink href="/consultation" size="lg" arrow>
                Book a 30-minute consultation
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section divider>
        <SectionHeading
          eyebrow="Compare tiers"
          title="What each level of the offer ladder includes."
          intro="Every capability below stays on the page for your review — expand any row for the full scope. Portfolio pricing is shared in your consultation."
        />
        <div className="mt-10">
          <PricingComparisonTable />
        </div>
      </Section>

      <section className="border-t border-moss bg-white">
        <div className="container py-12">
          <AccentPanel className="px-6 py-10 sm:px-10">
            <h2 className="text-h3 text-pine-dark">How we scope your package</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Priced to your unit count and scope",
                "Bookkeeping, trust accounting & reconciliation",
                "Income & lodging tax add-ons",
                "Reporting & advisory when you need it",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-card border border-moss bg-white px-5 py-4"
                >
                  <span className="mt-0.5 text-moss-dark" aria-hidden="true">
                    ✓
                  </span>
                  <span className="text-body text-pine-dark">{item}</span>
                </li>
              ))}
            </ul>
          </AccentPanel>
        </div>
      </section>

      <CtaBand
        title="Ready to see pricing for your portfolio?"
        ctaHref="/consultation"
      />
    </>
  );
}
