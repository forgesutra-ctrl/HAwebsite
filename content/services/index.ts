/**
 * Service page content registry.
 *
 * @cms-editable Import content from per-service files below.
 * To add or edit copy, modify the corresponding `*.content.ts` file.
 */
import type { ServicePageContent } from "./types";
import trustAccounting from "./trust-accounting.content";
import bookkeeping from "./bookkeeping.content";
import ownerStatements from "./owner-statements.content";
import financialManagement from "./financial-management.content";
import expenseManagement from "./expense-management.content";
import reportingAdvisory from "./reporting-advisory.content";
import taxPreparation from "./tax-preparation.content";
import operationsAccounting from "./operations-accounting.content";

export type { ServicePageContent, ServiceFaq, ServiceStep, ServiceDeliverable } from "./types";

export const servicePages: Record<string, ServicePageContent> = {
  "trust-accounting": trustAccounting,
  bookkeeping,
  "owner-statements": ownerStatements,
  "financial-management": financialManagement,
  "expense-management": expenseManagement,
  "reporting-advisory": reportingAdvisory,
  "tax-preparation": taxPreparation,
  "operations-accounting": operationsAccounting,
};

export function getServicePage(slug: string): ServicePageContent | undefined {
  return servicePages[slug];
}

export function getAllServicePageSlugs(): string[] {
  return Object.keys(servicePages);
}
