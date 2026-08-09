import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="HostAllies — home"
    >
      <Image
        src="/brand/hostallies-logo-orange.png"
        alt="HostAllies"
        width={2037}
        height={643}
        priority
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}
