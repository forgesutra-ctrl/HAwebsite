import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Tell us about your STR portfolio and goals. Book a free consultation with HostAllies — trust accounting, owner statements, reconciliation, tax, and revenue management, handled.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Free Consultation | HostAllies",
    description:
      "Tell us about your portfolio and goals. We'll show you exactly how we'd take the back office off your plate.",
    url: "/contact",
  },
};

function ContactDetail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-rule py-4">
      <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
        {label}
      </dt>
      <dd className="mt-1.5 text-[15px] text-ink">{children}</dd>
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

      <section className="border-b border-rule">
        <div className="container py-14 sm:py-16">
          <div className="max-w-3xl">
            <Eyebrow>Get started</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Let's take the back office off your plate.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
              Tell us about your portfolio and goals. We'll follow up to book a
              free consultation and show you exactly how we'd handle your books.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.85fr] lg:gap-16">
          {/* Form */}
          <div className="rounded-3xl border border-rule bg-surface-2 p-6 sm:p-9">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:pt-2">
            <h2 className="font-serif text-2xl">Prefer to reach us directly?</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              We're happy to talk it through. However you get in touch, you'll
              hear back within one business day.
            </p>

            <dl className="mt-6">
              <ContactDetail label="Phone">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="hover:text-ember"
                >
                  {site.phone}
                </a>
              </ContactDetail>
              <ContactDetail label="Email">
                <a href={`mailto:${site.email}`} className="hover:text-ember">
                  {site.email}
                </a>
              </ContactDetail>
              <ContactDetail label="Office">{fullAddress}</ContactDetail>
              <ContactDetail label="LinkedIn">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ember"
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

            {/* Scheduling embed slot — drop a Calendly/HubSpot embed here when chosen. */}
            <div className="mt-8 rounded-2xl border border-dashed border-rule-strong bg-surface p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                Scheduling
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                Fill out the form and we'll send you a link to grab a time — or
                we can embed a live scheduler here once you choose one.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
