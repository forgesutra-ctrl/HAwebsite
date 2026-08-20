import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { TrustkeepingEmailCapture } from "@/components/trustkeeping/TrustkeepingEmailCapture";
import { trustkeepingLaunch } from "@/lib/content/trustkeeping";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.trustkeeping;

export default function TrustkeepingPage() {
  const content = trustkeepingLaunch;
  const captureProps = {
    heading: content.emailCapture.heading,
    body: content.emailCapture.body,
    buttonLabel: content.emailCapture.button,
    successMessage: content.emailCapture.success,
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Trustkeeping", url: "/trustkeeping" },
        ]}
      />

      {/* Hero — brand lockup, headline, first capture */}
      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-heading text-label tracking-wide text-moss-dark">
              <span className="text-h3 font-bold text-pine-dark">
                {content.brandLockup.product}
              </span>
              <span className="mx-2 text-moss-dark" aria-hidden="true">
                ·
              </span>
              <span>{content.brandLockup.poweredBy}</span>
            </p>

            <h1 className="mt-8 text-display text-pine-dark">
              {content.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-prose text-body text-pine lg:text-h3">
              {content.intro}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <TrustkeepingEmailCapture {...captureProps} />
          </div>
        </div>
      </section>

      {/* Planned content pillars */}
      <Section>
        <SectionHeading
          eyebrow="Planned content"
          title={content.pillars.heading}
          intro={content.pillars.intro}
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.pillars.items.map((pillar, i) => (
            <article
              key={pillar.title}
              className="rounded-card border border-moss bg-white p-6"
            >
              <p className="text-label text-moss-dark">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-h3 text-pine-dark">{pillar.title}</h3>
              <p className="mt-2 text-body text-pine">{pillar.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Three financial layers */}
      <Section divider>
        <SectionHeading
          eyebrow="Framework"
          title={content.financialLayers.heading}
          intro={content.financialLayers.intro}
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.financialLayers.layers.map((layer) => (
            <article
              key={layer.tier}
              className="rounded-card border border-moss bg-white p-7"
            >
              <p className="text-label text-moss-dark">{layer.tier}</p>
              <h3 className="mt-3 text-h3 text-pine-dark">{layer.title}</h3>
              <p className="mt-3 text-body text-pine">{layer.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Second email capture */}
      <Section>
        <div className="mx-auto max-w-xl">
          <TrustkeepingEmailCapture {...captureProps} compact />
        </div>
      </Section>

      {/* FAQ */}
      <Section divider>
        <SectionHeading
          eyebrow="Questions"
          title="Good to know."
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-10 max-w-3xl grid gap-4">
          {content.faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-card border border-moss bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-h3 text-pine-dark">
                {item.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-sand text-pine transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-body text-pine">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
