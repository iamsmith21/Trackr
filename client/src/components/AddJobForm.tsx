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
    <div className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-900/5 relative overflow-hidden">
      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 mb-6">
        {editingJob ? "Edit Job Application" : "Add New Job"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Company Name</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Google"
            type="text"
            required
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Role</label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Software Developer"
            type="text"
            required
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">URL</label>
          <input
            value={jobUrl}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://joburl.com"
            type="text"
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Application Status</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            required
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none appearance-none cursor-pointer"
          >
            <option value="applied">Applied</option>
            <option value="interview">Interviewing</option>
            <option value="offer">Offered</option>
            <option value="rejected">Rejected</option>
            <option value="ghosted">Ghosted</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Notes</label>
          <input
            value={notes}
            onChange={(e) => setNote(e.target.value)}
            placeholder="(Optional) I got this job from..."
            type="text"
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
          />
        </div>

        <button 
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 active:scale-[0.98] cursor-pointer"
        >
          {editingJob ? "Save Changes" : "Add Job"}
        </button>
      </form>
    </div>
  );

}
