import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.careers;

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/blog" },
          { name: "Careers", url: "/resources/careers" },
        ]}
      />
      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-24">
          <div className="max-w-prose">
            <Eyebrow>Careers</Eyebrow>
            <h1 className="mt-6">Build with operators who get STR finance.</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">
              We&apos;re always interested in hearing from people who care about
              precision, hospitality, and the back office that keeps STR portfolios
              growing. Reach out to learn about open roles.
            </p>
            <div className="mt-8">
              <ButtonLink href={`mailto:${site.email}`} size="lg" arrow>
                Email {site.email}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Interested in joining HostAllies?"
        ctaHref="/contact"
        ctaLabel="Contact us"
      />
    </>
  );
}
