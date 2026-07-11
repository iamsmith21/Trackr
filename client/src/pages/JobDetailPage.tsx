import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById, updateJob } from "../utils/api";
import type { Job } from "../types";

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchJobDetails() {
      if (!id) return;
      setLoading(true);
      const res = await getJobById(id);
      if (res && res.success) {
        setJob(res.data);
        setNotes(res.data.notes || "");
      } else {
        setError("Could not retrieve job application details.");
      }
      setLoading(false);
    }
    fetchJobDetails();
  }, [id]);

  async function handleSaveNotes() {
    if (!id || !job) return;
    setSaving(true);
    try {
      await updateJob(id, {
        company: job.company,
        role: job.role,
        jobUrl: job.jobUrl,
        status: job.status,
        notes: notes,
      });
      // Update local state to reflect change
      setJob({ ...job, notes });
      alert("Notes updated successfully!");
    } catch (err) {
      alert("Failed to update notes.");
    }
    setSaving(false);
  }

  function handleStatusBGColor(status: string) {
    if (status === "applied")
      return "bg-emerald-50 text-emerald-700 dark:bg-[#30D158]/10 dark:text-[#30D158] border border-emerald-200/40";
    if (status === "rejected")
      return "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-200/40";
    if (status === "interview")
      return "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200/40";
    if (status === "ghosted")
      return "bg-slate-100 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400 border border-slate-200/40";
    if (status === "offer")
      return "bg-green-100 text-green-800 dark:bg-emerald-500/10 dark:text-emerald-400 border border-green-200/40";
    return "bg-slate-50 text-slate-500 border border-slate-200/40";
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#EDF3ED] dark:bg-[#000000] text-[#162518] dark:text-[#E6EDE7] flex items-center justify-center font-sans">
        <p className="font-semibold text-lg animate-pulse">Loading job details...</p>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-[#EDF3ED] dark:bg-[#000000] text-[#162518] dark:text-[#E6EDE7] flex flex-col items-center justify-center p-6 text-center font-sans">
        <p className="text-rose-600 dark:text-rose-400 font-bold text-lg mb-4">{error || "Job not found."}</p>
        <button onClick={() => navigate("/dashboard")} className="bg-[#2F5C3B] text-white py-2 px-6 rounded-full font-semibold">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDF3ED] dark:bg-[#000000] text-[#162518] dark:text-[#E6EDE7] antialiased flex flex-col font-sans transition-colors duration-300">
      
      {/* Detail Header Bar */}
      <header className="max-w-4xl w-full mx-auto px-6 pt-12 pb-6 flex items-center justify-between">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-[#162518]/10 dark:border-white/10 text-[#162518] dark:text-[#E6EDE7] hover:bg-[#162518]/5 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer active:scale-95"
        >
          ← Back to Dashboard
        </button>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl w-full mx-auto px-6 pb-24 flex-grow">
        
        {/* Job Title Header Card */}
        <div className="bg-white/70 dark:bg-white/5 border border-[#162518]/10 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-emerald-950/5 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${handleStatusBGColor(job.status)}`}>
              {job.status}
            </span>
            <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
              Applied on {new Date(job.appliedAt).toLocaleDateString()}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            {job.role}
          </h1>
          <p className="text-lg font-semibold text-[#2F5C3B] dark:text-[#81C784] mb-6">
            {job.company}
          </p>

          {job.jobUrl && (
            <a
              href={job.jobUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#2F5C3B] hover:bg-[#24472E] dark:bg-[#E6EDE7] dark:text-[#0A0E0B] dark:hover:bg-white text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 text-sm shadow-sm active:scale-[0.98] cursor-pointer"
            >
              View Original Job Listing ↗
            </a>
          )}
        </div>

        {/* Notes & Prep Area */}
        <div className="bg-white/70 dark:bg-white/5 border border-[#162518]/10 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-emerald-950/5">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Interview Prep & Application Notes
          </h2>
          
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Type your notes here... (e.g. interviewer names, preparation questions, next steps, salary estimates)"
            rows={10}
            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#E6EDE7] rounded-2xl px-4 py-4 text-sm transition-all duration-300 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 outline-none resize-y mb-6"
          />

          <button
            onClick={handleSaveNotes}
            disabled={saving}
            className="w-full sm:w-auto bg-[#2F5C3B] hover:bg-[#24472E] dark:bg-[#E6EDE7] dark:text-[#0A0E0B] dark:hover:bg-white text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-300 active:scale-[0.98] cursor-pointer text-sm shadow-sm disabled:opacity-50"
          >
            {saving ? "Saving Changes..." : "Save Notes"}
          </button>
        </div>

      </main>
    </div>
  );
}
