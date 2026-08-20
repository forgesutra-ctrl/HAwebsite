import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.caseStudies;

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/blog" },
          { name: "Case Studies", url: "/resources/case-studies" },
        ]}
      />
      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-24">
          <div className="max-w-prose">
            <Eyebrow>Case Studies</Eyebrow>
            <h1 className="mt-6">Client outcomes we can stand behind.</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">
              We share case studies that show how STR operators scale with
              HostAllies. Book a consultation to discuss outcomes relevant to your
              portfolio.
            </p>
            <div className="mt-8">
              <ButtonLink href="/consultation" size="lg" arrow>
                Book a 30-minute consultation
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Want to discuss results like these for your portfolio?"
        ctaHref="/consultation"
      />
    </>
  );
}
