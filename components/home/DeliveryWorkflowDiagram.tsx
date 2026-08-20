type DeliveryWorkflowDiagramProps = {
  /** Full-width band for Why HostAllies; default is a contained panel. */
  variant?: "panel" | "band";
};

/**
 * `tight` crops the viewBox to the flow itself. The default box carries 16px of
 * dead space on the left and 48px above and below the rows, which scales up with
 * the diagram and reads as an empty panel. Cropping leaves 8px of breathing room
 * and puts the first node flush with the left edge. The band variant keeps the
 * original box.
 */
function WorkflowSvg({
  className,
  tight = false,
}: {
  className?: string;
  tight?: boolean;
}) {
  return (
    <svg
      viewBox={tight ? "16 40 704 80" : "0 0 720 160"}
      className={className}
      role="img"
      aria-label="Diagram: PMS booking data flows through three-way reconciliation to owner statements"
    >
      <defs>
        <marker
          id="workflow-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#607364" />
        </marker>
      </defs>
      <rect
        x="16"
        y="48"
        width="160"
        height="64"
        rx="12"
        fill="#F9F2E4"
        stroke="#91AA94"
        strokeWidth="1.5"
      />
      <text
        x="96"
        y="76"
        textAnchor="middle"
        className="fill-pine-dark text-[13px] font-medium"
        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
      >
        PMS &amp; payouts
      </text>
      <text
        x="96"
        y="96"
        textAnchor="middle"
        className="fill-pine text-[11px]"
        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
      >
        Booking data in
      </text>

      <line
        x1="176"
        y1="80"
        x2="248"
        y2="80"
        stroke="#607364"
        strokeWidth="1.5"
        markerEnd="url(#workflow-arrow)"
      />

      <rect
        x="248"
        y="48"
        width="200"
        height="64"
        rx="12"
        fill="#FFFFFF"
        stroke="#475451"
        strokeWidth="1.5"
      />
      <text
        x="348"
        y="76"
        textAnchor="middle"
        fill="#1F2A28"
        style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 13, fontWeight: 500 }}
      >
        3-way reconciliation
      </text>
      <text
        x="348"
        y="96"
        textAnchor="middle"
        fill="#475451"
        style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11 }}
      >
        Bank · ledger · PMS
      </text>

      <line
        x1="448"
        y1="80"
        x2="520"
        y2="80"
        stroke="#607364"
        strokeWidth="1.5"
        markerEnd="url(#workflow-arrow)"
      />

      <rect
        x="520"
        y="48"
        width="184"
        height="64"
        rx="12"
        fill="#F9F2E4"
        stroke="#91AA94"
        strokeWidth="1.5"
      />
      <text
        x="612"
        y="76"
        textAnchor="middle"
        fill="#1F2A28"
        style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 13, fontWeight: 500 }}
      >
        Owner statement
      </text>
      <text
        x="612"
        y="96"
        textAnchor="middle"
        fill="#475451"
        style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11 }}
      >
        Reconciled detail out
      </text>
    </svg>
  );
}

export function DeliveryWorkflowDiagram({
  variant = "panel",
}: DeliveryWorkflowDiagramProps) {
  if (variant === "band") {
    return (
      <figure className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-y border-sand bg-white py-8 sm:py-10">
        <figcaption className="sr-only">
          Workflow from property management system through reconciliation to owner
          statement delivery
        </figcaption>
        <div className="container">
          <div className="rounded-panel border border-moss bg-sand px-4 py-8 sm:px-8">
            <WorkflowSvg className="mx-auto h-auto w-full max-w-5xl" />
            <p className="mt-4 text-center text-label text-pine">
              Systems and workflows that connect your stack to reconciled reporting
            </p>
          </div>
        </div>
      </figure>
    );
  }

  return (
    /* Panel bleeds into the container gutter like the Why callout. Caption and
       flow share one centred column (max-w-2xl) so they share a single axis.
       Band variant is untouched. */
    <figure className="panel-elevated -mx-4 overflow-hidden bg-white px-[calc(theme(spacing.4)-var(--border-width))] py-6 md:-mx-8 md:px-[calc(theme(spacing.8)-var(--border-width))]">
      <figcaption className="sr-only">
        Workflow from property management system through reconciliation to owner
        statement delivery
      </figcaption>
      <div className="mx-auto w-full max-w-2xl">
        <p className="text-center text-label text-pine">
          Systems and workflows that connect your stack to reconciled reporting
        </p>
        {/* The tight viewBox is flush on the left but keeps 16 user-units of
            empty space on the right (704-wide window, nodes end at 704 while
            the window runs to 720). A 8/704 shift centres the node group on the
            same axis as the caption without touching the viewBox. */}
        <WorkflowSvg
          tight
          className="mt-5 h-auto w-full translate-x-[calc(100%*8/704)]"
        />
      </div>
    </figure>
  );
}
