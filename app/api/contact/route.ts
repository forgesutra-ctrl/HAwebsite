import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * The delivery destination is intentionally left un-wired for now (see §8 of the
 * brief — form target TBD). This route validates input, applies honeypot spam
 * protection, and returns a success response so the front end works end-to-end.
 *
 * TO GO LIVE, pick one and implement inside `deliver()`:
 *   • Email:   set RESEND_API_KEY + CONTACT_TO, POST to https://api.resend.com/emails
 *   • CRM:     forward the payload to HubSpot / your CRM's forms API
 *   • Webhook: POST to a Zapier/Make webhook via CONTACT_WEBHOOK_URL
 * Until then, submissions are logged server-side so nothing is lost in testing.
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
  // honeypot — must stay empty
  company_url?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: Partial<Payload>): string | null {
  if (body.company_url) return "spam"; // honeypot tripped
  if (!body.firstName?.trim()) return "First name is required.";
  if (!body.lastName?.trim()) return "Last name is required.";
  if (!body.email?.trim() || !EMAIL_RE.test(body.email))
    return "A valid email is required.";
  if (!body.phone?.trim()) return "Phone is required.";
  if (!body.company?.trim()) return "Company name is required.";
  if (!body.interest?.trim()) return "Please tell us what you need help with.";
  return null;
}

async function deliver(body: Payload): Promise<void> {
  // Placeholder delivery. Replace with Resend/CRM/webhook when the target is chosen.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return;
  }
  // eslint-disable-next-line no-console
  console.info("[contact] new submission (delivery not yet wired):", {
    name: `${body.firstName} ${body.lastName}`,
    email: body.email,
    company: body.company,
    interest: body.interest,
  });
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
    // Pretend success so bots don't learn anything.
    return NextResponse.json({ ok: true });
  }
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  try {
    await deliver(body as Payload);
  } catch {
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
