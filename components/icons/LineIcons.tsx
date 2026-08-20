import type { SVGProps } from "react";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type IconProps = SVGProps<SVGSVGElement>;

export function IconReconciliation(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path {...stroke} d="M4 7h16M4 12h16M4 17h10" />
      <path {...stroke} d="M18 15l2 2-4 4-2-2" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path {...stroke} d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function IconStatements(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path {...stroke} d="M8 4h8l4 4v12H8V4z" />
      <path {...stroke} d="M16 4v4h4M10 12h6M10 16h4" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <rect {...stroke} x="4" y="5" width="16" height="15" rx="1.5" />
      <path {...stroke} d="M8 3v4M16 3v4M4 10h16" />
      <path {...stroke} d="M8 14h2M12 14h2M16 14h2M8 17h2" />
    </svg>
  );
}

export function IconChart(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path {...stroke} d="M5 19V9M10 19V5M15 19v-7M20 19V11" />
    </svg>
  );
}

export function IconTaxDocument(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path {...stroke} d="M8 4h8l4 4v12H8V4z" />
      <path {...stroke} d="M16 4v4h4" />
      <path {...stroke} d="M10 13h6M10 17h4" />
      <path {...stroke} d="M12 10v3" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <circle {...stroke} cx="12" cy="12" r="8" />
      <path {...stroke} d="M12 8v5l3 2" />
    </svg>
  );
}

export function IconTrustLedger(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path {...stroke} d="M6 4h12v16H6z" />
      <path {...stroke} d="M9 8h6M9 12h6M9 16h4" />
      <path {...stroke} d="M4 8h2M4 12h2M4 16h2" />
    </svg>
  );
}

export function IconBookkeeping(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path {...stroke} d="M5 5h14v14H5z" />
      <path {...stroke} d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  );
}

export function IconFinancialMgmt(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path {...stroke} d="M4 18l4-6 4 3 5-8 3 5" />
      <path {...stroke} d="M4 20h16" />
    </svg>
  );
}

export function IconAddons(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <circle {...stroke} cx="12" cy="12" r="8" />
      <path {...stroke} d="M12 8v8M8 12h8" />
    </svg>
  );
}

export type PainIconId =
  | "reconciliation"
  | "statements"
  | "calendar"
  | "chart"
  | "tax"
  | "clock";

export type TierIconId = "trust" | "bookkeeping" | "finance" | "addons";

const painIcons = {
  reconciliation: IconReconciliation,
  statements: IconStatements,
  calendar: IconCalendar,
  chart: IconChart,
  tax: IconTaxDocument,
  clock: IconClock,
} as const;

const tierIcons = {
  trust: IconTrustLedger,
  bookkeeping: IconBookkeeping,
  finance: IconFinancialMgmt,
  addons: IconAddons,
} as const;

export function PainLineIcon({ id }: { id: PainIconId }) {
  const Icon = painIcons[id];
  return <Icon className="text-orange-dark" />;
}

export function TierLineIcon({ id }: { id: TierIconId }) {
  const Icon = tierIcons[id];
  return <Icon className="text-pine" />;
}
