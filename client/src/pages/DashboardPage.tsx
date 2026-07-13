import { useEffect, useState } from "react";
import AddJobForm from "../components/AddJobForm";
import JobsTable from "../components/JobsTable";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import type { Job } from "../types";
import { getJobs, deleteJob, updateJob } from "../utils/api";
import JobsKanban from "../components/JobsKanban";



export default function DashboardPage() {
  const [jobList, setJobList] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"table" | "kanban">("table")

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

  useEffect(() => {
    if (editingJob) {
      setIsModalOpen(true);
    }
  }, [editingJob])

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingJob(null)
  }

  async function handleUpdateStatus(id:string, newStatus : string) {
    const jobToUpdate = jobList.find(j=> j.id === id)
    if (!jobToUpdate) return;

    try {
      await updateJob(id, {
        company : jobToUpdate.company,
        role: jobToUpdate.role,
        jobUrl: jobToUpdate.jobUrl,
        status: newStatus as any,
        notes: jobToUpdate.notes,
      })
      fetchJobs()
    } catch (error) {
      alert("Failed to update status.")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-800 antialiased relative overflow-hidden pb-16">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-blue-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-indigo-400/15 blur-[130px] pointer-events-none" />
      <Navbar onAddClick={() => setIsModalOpen(true)}/>
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
        <StatsCard jobList={jobList} />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/70 dark:bg-white/5 border border-[#162518]/10 dark:border-white/10 rounded-2xl p-4 shadow-sm">
            <h3 className="text-md font-bold text-slate-900 dark:text-white uppercase tracking-wider">Active Applications</h3>
            <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200/50 dark:border-white/5 self-start sm:self-auto">
              <button onClick={() => setViewMode("table")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${viewMode === "table" ? "bg-[#2F5C3B] text-white dark:bg-[#E6EDE7] dark:text-[#0A0E0B] shadow-sm"
                  : "text-slate-500 dark:text-[#86868B] hover:text-slate-900 dark:hover:text-white"}`}
                >List View</button>
              <button onClick={() => setViewMode("kanban")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === "kanban"
                  ? "bg-[#2F5C3B] text-white dark:bg-[#E6EDE7] dark:text-[#0A0E0B] shadow-sm"
                  : "text-slate-500 dark:text-[#86868B] hover:text-slate-900 dark:hover:text-white"
              }`}
                >Kanban Board</button>
            </div>
          </div>

          {viewMode === "table" ? (

            <JobsTable
              jobList={jobList}
              onDelete={handleDelete}
              onEdit={setEditingJob}
            />
          ) : (
            <JobsKanban
            jobList={jobList}
            onDelete={handleDelete}
            onUpdateStatus={handleUpdateStatus}
            />
          )}
       
       {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ">
          <div className="w-full max-w-md relative">
            <button
            onClick={handleCloseModal}
            className="absolute top-5 right-6 z-10 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-semibold cursor-pointer text-lg transition-colors"
              aria-label="Close modal"
            >x</button>
             <AddJobForm
              fetchJobs={fetchJobs}
              editingJob={editingJob}
              isOnEdit={setEditingJob}
              onClose={handleCloseModal}
            />
          </div>
        </div>
       )}
      
      </main>
    </div>
  );
}
