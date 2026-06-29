import { useState } from "react";
import { createJob } from "../utils/api";

interface AddJobFormProps {
  fetchJobs: () => void;
}

export default function AddJobForm({ fetchJobs }: AddJobFormProps) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [jobUrl, setUrl] = useState("");
  const [status, setStatus] = useState("Applied");
  const [notes, setNote] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // console.log({ company, role, jobUrl, status, note });
    await createJob({
      company,
      role,
      jobUrl,
      status,
      notes,
    });
    fetchJobs();
  }
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
          <option value="Applied">Applied</option>
          <option value="Pending">Pending</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
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
