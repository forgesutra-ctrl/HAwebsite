import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.faqs;

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
    a: "We support property managers from a handful of units to several hundred, scaling our delivery to match your growth.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/blog" },
          { name: "FAQs", url: "/resources/faqs" },
        ]}
      />
      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-20">
          <div className="max-w-prose">
            <Eyebrow>FAQs</Eyebrow>
            <h1 className="mt-6">Good to know.</h1>
          </div>
        </div>
      </section>
      <Section>
        <SectionHeading title="Common questions" className="sr-only" />
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-card border border-moss bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-h3 text-pine-dark">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-sand text-pine transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-body text-pine">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Still have questions? Let's talk."
        ctaHref="/consultation"
      />
    </>
  );
}
