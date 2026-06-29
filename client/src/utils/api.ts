import type { CreateJobInput } from "../types";

export async function getJobs() {
  try {
    const res = await fetch("http://localhost:3001/api/jobs");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch jobs:", error);
    return [];
  }
}

export async function createJob(formData: CreateJobInput) {
  await fetch("http://localhost:3001/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
}

export async function deleteJob(id: string) {
  await fetch(`http://localhost:3001/api/jobs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
