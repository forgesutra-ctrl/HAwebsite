import { NextResponse } from "next/server";
import { saveLead } from "@/lib/leads/store";
import type { LeadSource } from "@/lib/leads/types";

/**
 * Contact form handler — validates input, applies honeypot spam protection,
 * and writes to the shared lead store (local file + optional webhook).
 *
 * Set CONTACT_WEBHOOK_URL to forward leads to Zapier/Make/CRM.
 */

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website?: string;
  units?: string;
  employees?: string;
  interest: string;
  message?: string;
  source?: LeadSource;
  company_url?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: Partial<Payload>): string | null {
  if (body.company_url) return "spam";
  if (!body.firstName?.trim()) return "First name is required.";
  if (!body.lastName?.trim()) return "Last name is required.";
  if (!body.email?.trim() || !EMAIL_RE.test(body.email))
    return "A valid email is required.";
  if (!body.phone?.trim()) return "Phone is required.";
  if (!body.company?.trim()) return "Company name is required.";
  if (!body.interest?.trim()) return "Please tell us what you need help with.";
  return null;
}

export async function POST(request: Request) {
  let body: Partial<Payload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const error = validate(body);
  if (error === "spam") {
    return NextResponse.json({ ok: true });
  }
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const source: LeadSource =
    body.source === "consultation_form" ? "consultation_form" : "contact_form";

  try {
    await saveLead({
      source,
      email: body.email!.trim(),
      firstName: body.firstName!.trim(),
      lastName: body.lastName!.trim(),
      phone: body.phone!.trim(),
      company: body.company!.trim(),
      website: body.website?.trim(),
      units: body.units?.trim(),
      employees: body.employees?.trim(),
      interest: body.interest!.trim(),
      message: body.message?.trim(),
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Please email us directly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
