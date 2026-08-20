import type { Metadata } from "next";
import { AccentPanel, Eyebrow } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.consultation;

export default function ConsultationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Consultation", url: "/consultation" },
        ]}
      />
      <section className="border-b border-moss bg-white">
        <div className="container py-14 sm:py-16">
          <div className="max-w-prose">
            <Eyebrow>Consultation</Eyebrow>
            <h1 className="mt-6">Book a 30-minute consultation.</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">
              Tell us about your portfolio and goals. We&apos;ll follow up to schedule
              your consultation and outline how we&apos;d handle your back office.
            </p>
          </div>
        </div>
      </section>
      <div className="container py-16">
        <AccentPanel className="mx-auto max-w-2xl p-6 sm:p-9">
          <ContactForm formPurpose="consultation" />
        </AccentPanel>
      </div>
    </>
  );
}
