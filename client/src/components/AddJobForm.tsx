import { useEffect, useState } from "react";
import { createJob, updateJob } from "../utils/api";
import type { Job } from "../types";

interface AddJobFormProps {
  fetchJobs: () => void;
  editingJob: Job | null;
  isOnEdit: (job: Job | null) => void;
}

export default function AddJobForm({
  fetchJobs,
  editingJob,
  isOnEdit,
}: AddJobFormProps) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [jobUrl, setUrl] = useState("");
  const [status, setStatus] = useState("applied");
  const [notes, setNote] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (editingJob) {
      await updateJob(editingJob.id, { company, role, jobUrl, status, notes });
    } else {
      await createJob({
        company,
        role,
        jobUrl,
        status,
        notes,
      });
    }
    fetchJobs();
    isOnEdit(null);

    setCompany("");
    setRole("");
    setUrl("");
    setStatus("applied");
    setNote("");
  }

  useEffect(() => {
    if (editingJob) {
      setCompany(editingJob.company);
      setRole(editingJob.role);
      setUrl(editingJob.jobUrl);
      setStatus(editingJob.status);
      setNote(editingJob.notes);
    } else {
      setCompany("");
      setRole("");
      setUrl("");
      setStatus("applied");
      setNote("");
    }
  }, [editingJob]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Company Name</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Google"
          type="text"
        />

        <label> Role</label>
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Software Developer"
          type="text"
        />

        <label> URL</label>
        <input
          value={jobUrl}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://joburl.com"
          type="text"
        />

        <label> Application Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="applied">Applied</option>
          <option value="interview">Interviewing</option>
          <option value="offer">Offered</option>
          <option value="rejected">Rejected</option>
          <option value="ghosted">Ghosted</option>
        </select>

        <label> Notes</label>
        <input
          value={notes}
          onChange={(e) => setNote(e.target.value)}
          placeholder="I got this job from..."
          type="text"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
