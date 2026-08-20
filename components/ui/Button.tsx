import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { conversionEventForHref } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "secondaryOnDark" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-control font-body font-medium tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-dark disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-body",
  lg: "min-h-12 px-7 py-3.5 text-body",
};

const variants: Record<Variant, string> = {
  primary:
    "border border-orange bg-orange !text-black hover:border-orange-dark hover:bg-orange-dark hover:!text-white",
  secondary:
    "border border-moss bg-white !text-pine-dark hover:border-orange-dark hover:!text-orange-dark",
  secondaryOnDark:
    "border border-white bg-transparent !text-white hover:border-sand-light hover:!text-sand-light",
  ghost: "!text-pine-dark hover:!text-orange-dark",
};

function classes(variant: Variant, size: Size, extra?: string) {
  return `${base} ${sizes[size]} ${variants[variant]}${extra ? " " + extra : ""}`;
}

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="translate-y-px"
  >
    <path
      d="M3 8h9M8.5 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  const external = href.startsWith("http");
  const cls = classes(variant, size, className);
  const conversion = !external ? conversionEventForHref(href) : undefined;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
        {arrow && <Arrow />}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={cls}
      data-conversion={conversion}
      {...rest}
    >
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
} & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
