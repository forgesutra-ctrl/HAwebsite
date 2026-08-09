import Image from "next/image";

const LOGOS = [
  { name: "Guesty", src: "/images/partners/guesty.png" },
  { name: "QuickBooks", src: "/images/partners/quickbooks.png" },
  { name: "Clearing", src: "/images/partners/clearing.png" },
  { name: "Ramp", src: "/images/partners/ramp.png" },
  { name: "Hostfully", src: "/images/partners/hostfully.png" },
  { name: "Track", src: "/images/partners/track.png" },
];

export function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
      {LOGOS.map((logo) => (
        <div
          key={logo.name}
          className="relative h-7 w-24 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8 sm:w-28"
          title={logo.name}
        >
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            sizes="120px"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
