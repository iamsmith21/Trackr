export type JobStatus =
  | "applied"
  | "interview"
  | "offer"
  | "rejected"
  | "ghosted";

export interface CreateJobInput {
  company: string;
  role: string;
  jobUrl: string;
  status: string;
  notes: string;
}

export interface Job {
  id: string;
  company: string;
  role: string;
  jobUrl: string;
  status: JobStatus;
  notes: string;
  appliedAt: string;
}
