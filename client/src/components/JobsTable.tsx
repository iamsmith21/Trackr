import type { Job } from "../types";
import { Link } from "react-router-dom";

interface JobsTableProps {
  jobList: Job[];
  onDelete: (id: string) => void;
  onEdit: (job: Job) => void;
}

export default function JobsTable({
  jobList,
  onDelete,
  onEdit,
}: JobsTableProps) {
  function handleStatusBGColor(status: string) {
    if (status === "applied")
      return "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200/20";
    if (status === "rejected")
      return "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-200/20";
    if (status === "interview")
      return "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200/20";
    if (status === "ghosted")
      return "bg-slate-50 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400 border border-slate-200/20";
    if (status === "offer")
      return "bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-[#81C784] border border-green-200/20";

    return "bg-slate-50 text-slate-500 border border-slate-200/20";
  }

  return (
    <div className="w-full bg-white/50 dark:bg-white/5 border border-[#162518]/10 dark:border-white/10 rounded-3xl p-6 shadow-xl shadow-emerald-950/5 overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[#162518]/10 dark:border-white/10">
            <th className="text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase tracking-wider px-6 pb-4">
              Company
            </th>
            <th className="text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase tracking-wider px-6 pb-4">
              Role
            </th>
            <th className="text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase tracking-wider px-6 pb-4">
              URL
            </th>
            <th className="text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase tracking-wider px-6 pb-4">
              Date Applied
            </th>
            <th className="text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase tracking-wider px-6 pb-4">
              Status
            </th>
            <th className="text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase tracking-wider px-6 pb-4">
              Notes
            </th>
            <th className="text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase tracking-wider px-6 pb-4 text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#162518]/5 dark:divide-white/5">
          {jobList.map((j) => {
            return (
              <tr
                key={j.id}
                className="hover:bg-slate-50/50 dark:hover:bg-white/[0.01] transition-colors duration-200"
              >
                <td className="py-4.5 px-6 text-sm font-bold text-slate-900 dark:text-white">
                  <Link 
                    to={`/jobs/${j.id}`} 
                    className="hover:underline text-[#2F5C3B] dark:text-[#81C784] cursor-pointer"
                  >
                    {j.company}
                  </Link>
                </td>
                <td className="py-4.5 px-6 text-sm text-slate-600 dark:text-slate-300">
                  {j.role}
                </td>
                <td className="py-4.5 px-6 text-sm text-emerald-700 dark:text-[#81C784]">
                  {j.jobUrl ? (
                    <a
                      href={j.jobUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline opacity-80 hover:opacity-100"
                    >
                      View Link ↗
                    </a>
                  ) : (
                    <span className="text-slate-300 dark:text-slate-600 font-semibold text-xs">None</span>
                  )}
                </td>
                <td className="py-4.5 px-6 text-sm text-slate-500 dark:text-slate-400">
                  {new Date(j.appliedAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })}
                </td>
                <td className="py-4.5 px-6 text-sm">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold capitalize ${handleStatusBGColor(j.status)}`}
                  >
                    {j.status}
                  </span>
                </td>
                <td className="py-4.5 px-6 text-sm text-slate-500 dark:text-slate-400 max-w-[150px] truncate">
                  {j.notes || <span className="text-slate-300 dark:text-slate-700">-</span>}
                </td>
                <td className="py-4.5 px-6 text-sm text-right">
                  <div className="flex items-center justify-end gap-3.5">
                    <button
                      onClick={() => onEdit(j)}
                      className="text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      Edit
                    </button>
                    <span className="text-slate-200 dark:text-white/5 select-none">|</span>
                    <button
                      onClick={() => onDelete(j.id)}
                      className="text-rose-500/80 hover:text-rose-600 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
