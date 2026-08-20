import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { HeroVisual } from "@/components/home/HeroVisual";
import { HomeHeroHeadline } from "@/components/home/HomeHeroHeadline";
import { HomeHeroProofStrip } from "@/components/home/HomeHeroProofStrip";
import { HomeTrustedBySection } from "@/components/home/HomeTrustedBySection";
import { HomePainSection } from "@/components/home/HomePainSection";
import { HomeOfferLadderSection } from "@/components/home/HomeOfferLadderSection";
import { HomePhotographicBand } from "@/components/home/HomePhotographicBand";
import { HomeWhySection } from "@/components/home/HomeWhySection";
import { HomeHowWeWorkSection } from "@/components/home/HomeHowWeWorkSection";
import { HomeResultsSection } from "@/components/home/HomeResultsSection";
import { HomePlatformsSection } from "@/components/home/HomePlatformsSection";
import { HomeYourAlliesSection } from "@/components/home/HomeYourAlliesSection";
import { HomeFinalCta } from "@/components/home/HomeSections";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { experiencedWithStrip, hero, meta } from "@/src/content/home";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    url: "/",
  },
  twitter: {
    description: meta.twitterDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <section className="relative overflow-hidden border-b border-moss bg-white xl:overflow-visible">
        <div
          className="ruled pointer-events-none absolute inset-0 -z-10 opacity-40"
          aria-hidden="true"
        />
        {/* The overlap layout needs 660 + 64 + 476 = 1200px of content box, so it
            engages at xl. Binding it to lg overflowed the viewport between 1024
            and 1200px and pushed the photo off-screen. */}
        <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:py-12 md:px-8 lg:py-14 xl:px-0">
          <div className="grid items-start gap-8 xl:grid-cols-[660px_476px] xl:gap-x-16 xl:gap-y-0">
            <div className="rise relative z-10 min-w-0 xl:w-[660px]">
              <p className="text-label text-orange-dark lg:whitespace-nowrap">
                {hero.eyebrow}
              </p>
              <HomeHeroHeadline />
              <p className="mt-4 max-w-none text-body text-pine">{hero.body}</p>
              <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                <ButtonLink
                  href={hero.primaryCta.href}
                  size="lg"
                  arrow
                  className="shrink-0"
                >
                  {hero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={hero.secondaryCta.href}
                  size="lg"
                  variant="secondary"
                  className="shrink-0"
                >
                  {hero.secondaryCta.label}
                </ButtonLink>
              </div>

              <HomeHeroProofStrip />

              {/* Moved out of its own pine-dark strip section so the left
                  column carries proof below the CTAs instead of ending in
                  249px of dead space beside the photo. */}
              <p className="mt-7 border-t border-moss pt-6 text-body text-pine">
                <span className="font-medium text-pine-dark">
                  {experiencedWithStrip.leadIn}
                </span>{" "}
                {experiencedWithStrip.rest}
              </p>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      <HomeTrustedBySection />
      <HomePainSection />
      <HomeOfferLadderSection />
      <HomePhotographicBand />
      <HomeWhySection />
      <HomeHowWeWorkSection />
      <HomeResultsSection />
      <HomePlatformsSection />
      <HomeYourAlliesSection />
      <HomeFinalCta />
    </>
  );
}
