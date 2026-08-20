import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.trustAccountingAssessment;

export default function TrustAccountingAssessmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          {
            name: "Trust Accounting Assessment",
            url: "/trust-accounting-assessment",
          },
        ]}
      />
      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-24">
          <div className="max-w-prose">
            <Eyebrow>Trust Accounting Assessment</Eyebrow>
            <h1 className="mt-6">Know where your trust accounting stands.</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">
              Before you add units or onboard owners, get clarity on fund separation,
              reconciliation gaps, and compliance risk — with a structured assessment
              from STR accounting specialists.
            </p>
            <div className="mt-8">
              <ButtonLink href="/consultation" size="lg" arrow>
                Request an assessment
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Audit-ready trust accounting starts with clarity."
        ctaLabel="Book a 30-minute consultation"
        ctaHref="/consultation"
      />
    </>
  );
}
