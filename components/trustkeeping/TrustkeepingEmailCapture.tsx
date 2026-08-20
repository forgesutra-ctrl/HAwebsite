"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "min-w-0 flex-1 rounded-control border border-sand bg-white px-4 py-3 text-body text-pine-dark placeholder:text-moss-dark transition-colors focus:border-orange-dark focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-orange-dark";

export function TrustkeepingEmailCapture({
  heading,
  body,
  buttonLabel,
  successMessage,
  compact = false,
}: {
  heading: string;
  body: string;
  buttonLabel: string;
  successMessage: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const emailId = useId();
  const honeypotId = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: fd.get("email"),
          source: "trustkeeping_launch_list",
          company_url: fd.get("company_url"),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-card border border-moss bg-white text-center ${
          compact ? "p-6" : "p-8"
        }`}
      >
        <p className="text-body font-medium text-pine-dark">{successMessage}</p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-card border border-moss bg-white ${
        compact ? "p-6" : "p-8 sm:p-10"
      }`}
    >
      <h2 className={compact ? "text-h3 text-pine-dark" : "text-h2"}>{heading}</h2>
      <p className="mt-3 text-body text-pine">{body}</p>

      <form onSubmit={onSubmit} noValidate className="mt-6">
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor={honeypotId}>Company URL</label>
          <input
            id={honeypotId}
            name="company_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <label htmlFor={emailId} className="sr-only">
            Email address
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={fieldBase}
          />
          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="shrink-0"
          >
            {status === "submitting" ? "Joining…" : buttonLabel}
          </Button>
        </div>

        {status === "error" && error && (
          <p
            role="alert"
            className="mt-3 rounded-control border border-orange-dark bg-white px-4 py-3 text-sm text-orange-dark"
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
