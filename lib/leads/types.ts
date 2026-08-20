/** Lead source tags — used across contact forms and launch-list captures. */
export type LeadSource =
  | "contact_form"
  | "consultation_form"
  | "trustkeeping_launch_list";

export type Lead = {
  id: string;
  source: LeadSource;
  email: string;
  createdAt: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  website?: string;
  units?: string;
  employees?: string;
  interest?: string;
  message?: string;
};

export type LeadInput = Omit<Lead, "id" | "createdAt">;
