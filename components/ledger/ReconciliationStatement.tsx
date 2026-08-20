"use client";

import { useEffect, useRef, useState } from "react";

type Row = { label: string; amount: number };

const ROWS: Row[] = [
  { label: "Rental income (gross)", amount: 18420.0 },
  { label: "Cleaning fees collected", amount: 2160.0 },
  { label: "OTA payout — Airbnb", amount: -540.0 },
  { label: "Management commission (20%)", amount: -3684.0 },
  { label: "Cleaning cost — vendor", amount: -1785.0 },
  { label: "Lodging tax — held in trust", amount: -1289.4 },
  { label: "Owner disbursement", amount: -13281.6 },
];

const START_DIFF = 2743.19;

function fmt(n: number) {
  return (
    (n < 0 ? "-" : "") +
    "$" +
    Math.abs(n).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

export function ReconciliationStatement({
  layout = "default",
}: {
  /** Hero overlay: nowrap at 430px width, ≤530px tall (78% of the photo). */
  layout?: "default" | "hero";
}) {
  const [diff, setDiff] = useState(START_DIFF);
  const [balanced, setBalanced] = useState(false);
  const rafRef = useRef<number | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finish = () => {
      setDiff(0);
      setBalanced(true);
    };

    if (reduce) {
      finish();
      return;
    }

    const animate = () => {
      if (hasRun.current) return;
      hasRun.current = true;
      const dur = 1600;
      let t0: number | null = null;
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDiff(START_DIFF * (1 - eased));
        if (p < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          finish();
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const el = hostRef.current;
    if (el) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            animate();
            io.disconnect();
          }
        },
        { threshold: 0.35 }
      );
      io.observe(el);
      return () => {
        io.disconnect();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    animate();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const isHero = layout === "hero";
  const cellPad = isHero ? "px-4" : "px-6";
  const cellPy = isHero ? "py-3.5" : "py-2.5";
  const blockPy = isHero ? "py-5" : "py-4";
  const tableSize = "text-sm";
  const nowrap = isHero
    ? "max-xl:whitespace-normal xl:whitespace-nowrap"
    : "";

  return (
    <div
      ref={hostRef}
      className={`overflow-hidden rounded-panel border border-moss bg-white ${
        isHero ? "max-lg:overflow-x-auto" : ""
      }`}
      role="img"
      aria-label="An owner statement reconciling to a zero balance — debits and credits in balance."
    >
      <div
        className={`flex items-center justify-between border-b border-sand ${blockPy} ${cellPad}`}
      >
        <div
          className={`font-heading font-semibold text-pine-dark ${isHero ? "text-sm" : "text-base"}`}
        >
          Owner Statement · Unit&nbsp;#4671
        </div>
        <div className={`text-label text-pine ${nowrap}`}>June 2026</div>
      </div>

      <table className={`w-full border-collapse ${tableSize}`}>
        <thead>
          <tr>
            <th
              className={`pb-1 pt-2 text-left text-label text-pine ${cellPad} ${nowrap}`}
            >
              Line item
            </th>
            <th
              className={`pb-1 pt-2 text-right text-label text-pine ${cellPad} ${nowrap}`}
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.label}>
              <td
                className={`border-t border-sand text-pine-dark ${cellPad} ${cellPy} ${nowrap}`}
              >
                {r.label}
              </td>
              <td
                className={`tnum border-t border-sand text-right text-pine-dark ${cellPad} ${cellPy} ${nowrap}`}
              >
                {fmt(r.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className={`flex items-center justify-between border-t-2 border-pine-dark ${blockPy} ${cellPad}`}
      >
        <div>
          <div className="text-label text-pine">Difference</div>
          <div
            className={`tnum font-medium text-pine-dark ${isHero ? "text-lg" : "text-xl"}`}
          >
            {balanced ? "$0.00" : "−" + fmt(diff).replace("-", "")}
          </div>
        </div>
        <div
          className={`inline-flex items-center gap-2 rounded-control border px-2.5 py-1 text-label transition-colors duration-500 ${
            balanced
              ? "border-moss-dark bg-sand text-pine-dark"
              : "border-orange-dark bg-sand text-orange-dark"
          }`}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-current"
            aria-hidden="true"
          />
          {balanced ? "Balanced" : "Reconciling…"}
        </div>
      </div>
    </div>
  );
}
