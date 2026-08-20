"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type DisclosureProps = {
  id?: string;
  /** Always-visible content above the trigger (e.g. pain item title). */
  summary?: ReactNode;
  expandLabel?: string;
  collapseLabel?: string;
  children: ReactNode;
  className?: string;
  summaryClassName?: string;
  buttonClassName?: string;
  defaultOpen?: boolean;
};

/**
 * Collapsible region — all `children` stay in the DOM for crawlers.
 * Visual collapse uses max-height + overflow:hidden, not conditional render.
 */
export function Disclosure({
  id: idProp,
  summary,
  expandLabel = "See full details",
  collapseLabel = "Show less",
  children,
  className = "",
  summaryClassName = "",
  buttonClassName = "",
  defaultOpen = false,
}: DisclosureProps) {
  const autoId = useId().replace(/:/g, "");
  const id = idProp ?? autoId;
  const panelId = `${id}-panel`;
  const [open, setOpen] = useState(defaultOpen);
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const measure = useCallback(() => {
    const el = innerRef.current;
    if (!el) return;
    setMaxHeight(open ? el.scrollHeight : 0);
  }, [open]);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    measure();
  }, [measure, children]);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className={className}>
      {summary && (
        <div
          className={`text-body text-pine [[data-tone=dark]_&]:text-sand-light ${summaryClassName}`}
        >
          {summary}
        </div>
      )}

      <button
        type="button"
        className={`mt-3 inline-flex items-center gap-2 rounded-control text-body font-medium text-orange-dark transition-colors hover:text-pine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-dark ${buttonClassName}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
      >
        {open ? collapseLabel : expandLabel}
        <Chevron open={open} />
      </button>

      <div
        id={panelId}
        className={`overflow-hidden ${
          reduceMotion ? "" : "transition-[max-height] duration-300 ease-in-out"
        }`}
        style={{ maxHeight: open ? maxHeight : 0 }}
        aria-hidden={open ? undefined : true}
      >
        <div ref={innerRef} className="pt-3">
          {children}
        </div>
      </div>
    </div>
  );
}
