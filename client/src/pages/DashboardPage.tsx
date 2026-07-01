import { useEffect, useState } from "react";
import AddJobForm from "../components/AddJobForm";
import JobsTable from "../components/JobsTable";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import type { Job } from "../types";
import { getJobs, deleteJob } from "../utils/api";

export default function DashboardPage() {
  const [jobList, setJobList] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  async function fetchJobs() {
    const data = await getJobs();
    setJobList(data.data);
  }

  async function handleDelete(id: string) {
    await deleteJob(id);
    fetchJobs();
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-800 antialiased relative overflow-hidden pb-16">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-blue-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-indigo-400/15 blur-[130px] pointer-events-none" />
      <Navbar />
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
        <StatsCard jobList={jobList} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <AddJobForm
              fetchJobs={fetchJobs}
              editingJob={editingJob}
              isOnEdit={setEditingJob}
            />
          </div>
          <div className="lg:col-span-2">
            <JobsTable
              jobList={jobList}
              onDelete={handleDelete}
              onEdit={setEditingJob}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
