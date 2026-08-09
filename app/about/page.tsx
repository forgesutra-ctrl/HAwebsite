import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { StatBand } from "@/components/ui/StatBand";
import { CtaBand } from "@/components/ui/CtaBand";
import { TeamMemberCard } from "@/components/site/TeamMemberCard";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "About HostAllies — Your Allies in STR Finance",
  description:
    "HostAllies was built by short-term rental operators to give property managers the turn-key back office they wished they had. Meet the leadership team and our MYND partnership.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About HostAllies — Your Allies in STR Finance",
    description:
      "Built by STR operators, for STR operators. Meet the leadership team and the MYND partnership behind HostAllies.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      {/* Intro */}
      <section className="border-b border-rule">
        <div className="container py-16 sm:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Our story</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              We built the back office we wished we'd had.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
              HostAllies started inside a short-term rental business, not a
              spreadsheet. After a decade acquiring and managing STR portfolios
              across US markets, our founder knew exactly where the back office
              breaks — and built the turn-key solution to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Our mission"
            title="You are at the center of everything we do."
          />
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Managing finances across STRs — while keeping your own business on
              track — is too complex and too important to handle solo. Generalist
              bookkeepers lack the industry DNA; building an in-house finance team
              is prohibitively expensive.
            </p>
            <p>
              We give you something better than outsourced help: a reliable
              partner who knows your business, speaks your language, and helps you
              grow profitably. Trust accounting, OTA payouts, owner statements,
              lodging tax — handled with the precision your owners can feel.
            </p>
            <p className="font-serif text-xl italic text-ink">
              This isn't outsourcing. It's scalable peace of mind.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section tone="surface" divider>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The scale behind us</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Enterprise capacity, operator empathy.
          </h2>
        </div>
        <div className="mt-10">
          <StatBand />
        </div>
      </Section>

      {/* Your Allies — full bios */}
      <Section>
        <SectionHeading
          eyebrow="Your Allies"
          title="The leadership team behind HostAllies."
          intro="Dedicated to helping you scale profitably — with the operational and financial depth STR portfolios demand."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {team.map((m) => (
            <TeamMemberCard key={m.name} member={m} full />
          ))}
        </div>
      </Section>

      {/* MYND partnership */}
      <Section tone="green">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow [--ember:var(--brand)]">
              Strategic partnership
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.6rem]">
              HostAllies &amp; MYND: a new financial engine for STR growth.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:color-mix(in_srgb,var(--paper)_74%,transparent)]">
              Our co-investment partnership with MYND Integrated Solutions merges
              HostAllies' deep roots in vacation rental operations with MYND's two
              decades of global finance and accounting expertise. The result is
              more than outsourced bookkeeping — it's a fractional CFO function,
              backed by a global delivery team of 1,800+ professionals working
              directly within your existing tech stack.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="/resources/hostallies-mynd-a-new-financial-engine-for-str-growth"
                arrow
              >
                Read the announcement
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-3">
            {[
              "Audit-ready trust accounting",
              "Fractional CFO strategy & profit-leak analysis",
              "Regulatory & multi-jurisdiction tax compliance",
              "Seamless integration into your tech stack",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[color:color-mix(in_srgb,var(--paper)_16%,transparent)] bg-[color:color-mix(in_srgb,var(--paper)_5%,transparent)] px-5 py-4"
              >
                <span className="mt-0.5 text-brand">✓</span>
                <span className="text-[15px] text-[color:color-mix(in_srgb,var(--paper)_88%,transparent)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        eyebrow="Gain an ally"
        title="Why settle for outsourcing when you can gain an Ally?"
        body="Tell us about your portfolio and goals. We'll show you exactly how we'd take the back office off your plate."
      />
    </>
  );
}
