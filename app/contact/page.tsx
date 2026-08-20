import type { Metadata } from "next";
import { AccentPanel, Eyebrow } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { site, fullAddress } from "@/lib/site";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.contact;

function ContactDetail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-sand py-4">
      <dt className="text-label text-moss-dark">{label}</dt>
      <dd className="mt-1.5 text-body text-pine-dark">{children}</dd>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <section className="border-b border-moss bg-white">
        <div className="container py-14 sm:py-16">
          <div className="max-w-prose">
            <Eyebrow>Get started</Eyebrow>
            <h1 className="mt-6">Let&apos;s take the back office off your plate.</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">
              Tell us about your portfolio and goals. We&apos;ll follow up to book a
              free consultation and show you exactly how we&apos;d handle your books.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.85fr] lg:gap-16">
          <AccentPanel className="p-6 sm:p-9">
            <ContactForm formPurpose="contact" />
          </AccentPanel>

          <aside className="lg:pt-2">
            <h2 className="font-heading text-h2">Prefer to reach us directly?</h2>
            <p className="mt-3 text-body text-pine">
              We&apos;re happy to talk it through. However you get in touch, you&apos;ll
              hear back within one business day.
            </p>

            <dl className="mt-6">
              <ContactDetail label="Phone">
                <a href={`tel:${site.phoneHref}`} className="hover:text-orange-dark">
                  {site.phone}
                </a>
              </ContactDetail>
              <ContactDetail label="Email">
                <a href={`mailto:${site.email}`} className="hover:text-orange-dark">
                  {site.email}
                </a>
              </ContactDetail>
              <ContactDetail label="Office">{fullAddress}</ContactDetail>
              <ContactDetail label="LinkedIn">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-orange-dark"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.65h.05c.53-1 1.83-2.05 3.76-2.05C20.6 8.6 22 10.3 22 13.7V21h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V21H9V9Z" />
                  </svg>
                  Follow HostAllies
                </a>
              </ContactDetail>
            </dl>

            <div className="mt-8 rounded-card border border-dashed border-moss bg-white p-5">
              <p className="text-label text-moss-dark">Scheduling</p>
              <p className="mt-2 text-body text-pine">
                Fill out the form and we&apos;ll send you a link to grab a time — or
                we can embed a live scheduler here once you choose one.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
