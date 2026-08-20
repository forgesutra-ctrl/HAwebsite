import Link from "next/link";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceProofSlot } from "@/components/services/ServiceProofSlot";
import { ServiceWhatYouGetList } from "@/components/services/ServiceWhatYouGetList";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { getVerifiedServiceProofs } from "@/src/content/claims-register";
import {
  getRelatedServices,
  type ServicePageContent,
} from "@/lib/content/services";

export function ServicePageView({ service }: { service: ServicePageContent }) {
  const related = getRelatedServices(service.relatedServices, service.slug);
  const proofs = getVerifiedServiceProofs(service.slug, service.proofIds);
  const showProofSection = proofs.length > 0;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/trust-accounting" },
          { name: service.hero.category, url: `/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={service.hero.h1}
        description={service.meta.description}
        slug={service.slug}
        serviceType={service.hero.category}
      />

      {/* Hero — category and page intent */}
      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-24">
          <div className="max-w-prose">
            <Eyebrow>{service.hero.category}</Eyebrow>
            <p className="mt-4 text-body font-medium text-orange-dark">
              {service.searchIntent}
            </p>
            <h1 className="mt-5">{service.hero.h1}</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">
              {service.hero.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/consultation" size="lg" arrow>
                Book a 30-minute consultation
              </ButtonLink>
              {service.slug === "trust-accounting" && (
                <ButtonLink
                  href="/trust-accounting-assessment"
                  size="lg"
                  variant="secondary"
                >
                  Request a trust accounting assessment
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <Section>
        <SectionHeading
          eyebrow="Audience"
          title={service.audience.heading}
          intro={service.audience.intro}
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {service.audience.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-card border border-moss bg-white px-5 py-4"
            >
              <span className="mt-0.5 text-moss-dark" aria-hidden="true">
                →
              </span>
              <span className="text-body text-pine-dark">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* The problem */}
      <Section divider>
        <SectionHeading
          eyebrow="The challenge"
          title={service.problem.heading}
          intro={service.problem.intro}
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {service.problem.points.map((point) => (
            <li
              key={point}
              className="rounded-card border border-moss bg-white p-6 text-body text-pine"
            >
              {point}
            </li>
          ))}
        </ul>
      </Section>

      {/* What HostAllies does */}
      <Section>
        <SectionHeading
          eyebrow="Deliverables"
          title={service.deliverables.heading}
          intro={service.deliverables.intro}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {service.deliverables.items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-card border border-moss bg-white p-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-label text-moss-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h3 text-pine-dark">{item.title}</h3>
              </div>
              <p className="mt-3 text-body text-pine">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section divider>
        <SectionHeading
          eyebrow="Process"
          title={service.howItWorks.heading}
          intro={service.howItWorks.intro}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.howItWorks.steps.map((step, i) => (
            <div key={step.title}>
              <div className="text-label text-moss-dark">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 border-t-2 border-pine-dark pt-4">
                <h3 className="text-h3 text-pine-dark">{step.title}</h3>
                <p className="mt-2 text-body text-pine">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What you get */}
      <Section divider>
        <SectionHeading
          eyebrow="Outcomes"
          title={service.whatYouGet.heading}
          intro={service.whatYouGet.intro}
        />
        <div className="mt-10 rounded-panel border border-moss bg-white p-6 sm:p-8">
          <ServiceWhatYouGetList
            serviceSlug={service.slug}
            items={service.whatYouGet.items}
          />
        </div>
      </Section>

      {/* Proof slot — gated */}
      {showProofSection && (
        <Section divider>
          <SectionHeading
            eyebrow="Results"
            title="Proof from validated client work"
          />
          <div className="mt-10">
            <ServiceProofSlot
              serviceSlug={service.slug}
              proofIds={service.proofIds}
            />
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section divider>
        <SectionHeading eyebrow="Questions" title="Good to know." />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {service.faq.map((f) => (
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

      {/* Related services */}
      {related.length > 0 && (
        <Section divider>
          <SectionHeading
            eyebrow="Related"
            title="Services that work together"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group rounded-card border border-moss bg-white p-6 transition-colors hover:border-pine-dark"
              >
                <p className="text-label text-moss-dark">{rel.hero.category}</p>
                <h3 className="mt-2 text-h3 text-pine-dark group-hover:text-pine">
                  {rel.hero.h1}
                </h3>
                <p className="mt-2 line-clamp-2 text-body text-pine">
                  {rel.meta.description}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <CtaBand
        eyebrow={service.cta.eyebrow}
        title={service.cta.title}
        body={service.cta.body}
        ctaLabel={service.cta.primaryLabel ?? "Book a 30-minute consultation"}
        ctaHref={service.cta.primaryHref ?? "/consultation"}
        secondaryLabel={service.cta.secondaryLabel}
        secondaryHref={service.cta.secondaryHref}
      />
    </>
  );
}
