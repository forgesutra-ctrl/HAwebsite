import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import type { Lead, LeadInput } from "./types";

const DATA_DIR = path.join(process.cwd(), ".data");
const LEADS_FILE = path.join(DATA_DIR, "leads.jsonl");

function newLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

async function persistLocally(lead: Lead): Promise<void> {
  if (process.env.VERCEL === "1") return;

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(LEADS_FILE, `${JSON.stringify(lead)}\n`, "utf8");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn("[leads] local persist failed:", err);
  }
}

async function forwardWebhook(lead: Lead): Promise<void> {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return;

  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
}

/** Single lead store shared by contact forms and launch-list captures. */
export async function saveLead(input: LeadInput): Promise<Lead> {
  const lead: Lead = {
    ...input,
    id: newLeadId(),
    createdAt: new Date().toISOString(),
  };

  await persistLocally(lead);
  await forwardWebhook(lead);

  // eslint-disable-next-line no-console
  console.info("[leads] saved:", {
    id: lead.id,
    source: lead.source,
    email: lead.email,
  });

  return lead;
}
