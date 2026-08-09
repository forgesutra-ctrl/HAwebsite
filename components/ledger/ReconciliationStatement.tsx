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

export function ReconciliationStatement() {
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

    // Trigger when the statement scrolls into view (or immediately if already visible).
    const el = hostRef.current;
    if (!el) {
      animate();
      return;
    }
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
  }, []);

  return (
    <div
      ref={hostRef}
      className="overflow-hidden rounded-2xl border border-rule bg-surface shadow-[var(--shadow-lg)]"
      role="img"
      aria-label="An owner statement reconciling to a zero balance — debits and credits in balance."
    >
      <div className="flex items-center justify-between border-b border-rule px-6 py-4">
        <div className="font-display text-base font-semibold text-ink">
          Owner Statement · Unit&nbsp;#4671
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          June 2026
        </div>
      </div>

      <table className="w-full border-collapse font-mono text-[13.5px]">
        <thead>
          <tr>
            <th className="px-6 pb-2 pt-3 text-left text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-soft">
              Line item
            </th>
            <th className="px-6 pb-2 pt-3 text-right text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-soft">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.label}>
              <td className="border-t border-rule px-6 py-2.5 text-ink">
                {r.label}
              </td>
              <td
                className={`tnum border-t border-rule px-6 py-2.5 text-right ${
                  r.amount < 0 ? "text-ember" : "text-ledger"
                }`}
              >
                {fmt(r.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between border-t-2 border-ink px-6 py-4">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
            Difference
          </div>
          <div
            className={`tnum font-mono text-xl font-semibold ${
              balanced ? "text-ledger" : "text-ember"
            }`}
          >
            {balanced ? "$0.00" : "−" + fmt(diff).replace("-", "")}
          </div>
        </div>
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs font-semibold tracking-[0.04em] transition-all duration-500 ${
            balanced
              ? "bg-ledger-soft text-ledger"
              : "text-amber"
          }`}
          style={
            balanced
              ? undefined
              : { background: "color-mix(in srgb, var(--amber) 15%, transparent)" }
          }
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {balanced ? "Balanced" : "Reconciling…"}
        </div>
      </div>
    </div>
  );
}
