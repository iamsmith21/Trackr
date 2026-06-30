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
    <>
      <Navbar />
      <StatsCard />
      <AddJobForm
        fetchJobs={fetchJobs}
        editingJob={editingJob}
        isOnEdit={setEditingJob}
      />
      <JobsTable
        jobList={jobList}
        onDelete={handleDelete}
        onEdit={setEditingJob}
      />
    </>
  );
}