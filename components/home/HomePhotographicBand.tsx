import Image from "next/image";
import { midPageBandCopy } from "@/lib/content/homepage";

/** Full-bleed photographic break between offer ladder and Why HostAllies. */
export function HomePhotographicBand() {
  return (
    <section
      className="relative h-[320px] overflow-hidden"
      aria-label={midPageBandCopy.ariaLabel}
    >
      <Image
        src="/images/home/cabin-room.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_65%]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-pine-dark/72" aria-hidden="true" />
      <div className="container relative flex h-full items-center">
        <blockquote className="max-w-2xl border-l-2 border-orange pl-6 sm:pl-8">
          <p className="font-heading text-h3 font-semibold leading-snug text-white sm:text-h2">
            {midPageBandCopy.statement}
          </p>
          <footer className="mt-4 text-label text-sand-light">
            {midPageBandCopy.attribution}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
