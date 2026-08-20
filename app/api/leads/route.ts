import { NextResponse } from "next/server";
import { saveLead } from "@/lib/leads/store";
import type { LeadSource } from "@/lib/leads/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ALLOWED_SOURCES: LeadSource[] = [
  "trustkeeping_launch_list",
  "contact_form",
  "consultation_form",
];

type Payload = {
  email?: string;
  source?: LeadSource;
  company_url?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.company_url) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }

  const source = body.source ?? "trustkeeping_launch_list";
  if (!ALLOWED_SOURCES.includes(source)) {
    return NextResponse.json({ error: "Invalid source." }, { status: 400 });
  }

  try {
    await saveLead({ source, email });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
