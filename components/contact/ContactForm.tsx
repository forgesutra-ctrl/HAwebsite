"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const interests = [
  "Financial Management",
  "Revenue Management",
  "Both",
  "Partnership inquiry",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-xl border border-rule bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint transition-colors focus:border-brand focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand";
const labelBase =
  "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft";

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className={labelBase}>
      {children}
      {required && <span className="text-ember"> *</span>}
    </label>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
      setError("Network error. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ledger/30 bg-ledger-soft p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-ledger text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12.5l4.5 4.5L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-4 font-serif text-2xl text-ink">Thanks — we've got it.</h3>
        <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
          One of our Allies will be in touch shortly to book your free
          consultation. Prefer to talk now? Call us at{" "}
          <a href="tel:+14047351666" className="text-ember hover:underline">
            404-735-1666
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs text-ink-soft underline hover:text-ember"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {/* Honeypot — visually hidden, must stay empty */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_url">Company URL</label>
        <input
          id="company_url"
          name="company_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName" required>
            First name
          </Label>
          <input id="firstName" name="firstName" className={fieldBase} required />
        </div>
        <div>
          <Label htmlFor="lastName" required>
            Last name
          </Label>
          <input id="lastName" name="lastName" className={fieldBase} required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldBase}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" required>
            Phone
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldBase}
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="company" required>
            Company name
          </Label>
          <input id="company" name="company" className={fieldBase} required />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            className={fieldBase}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="units">Number of units managed</Label>
          <input
            id="units"
            name="units"
            inputMode="numeric"
            className={fieldBase}
          />
        </div>
        <div>
          <Label htmlFor="employees">Employees</Label>
          <input
            id="employees"
            name="employees"
            inputMode="numeric"
            className={fieldBase}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="interest" required>
          What do you need help with?
        </Label>
        <select id="interest" name="interest" className={fieldBase} required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="message">Anything else we should know?</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldBase} resize-y`}
        />
      </div>

      {status === "error" && error && (
        <p
          role="alert"
          className="rounded-xl border border-ember/30 bg-brand-tint px-4 py-3 text-sm text-ember"
        >
          {error}
        </p>
      )}

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"} arrow>
          {status === "submitting" ? "Sending…" : "Book my free consultation"}
        </Button>
        <p className="text-xs text-ink-faint">
          No spam. We reply within one business day.
        </p>
      </div>
    </form>
  );
}
