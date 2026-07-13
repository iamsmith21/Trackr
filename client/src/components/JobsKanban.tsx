import { useState } from "react";
import { Link } from "react-router-dom";
import type { Job } from "../types";

interface JobsKanbanProps {
  jobList: Job[];
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string, newStatus: string) => void;
}

const COLUMNS = [
  { id: "applied", name: "Applied", color: "border-emerald-500/20 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400" },
  { id: "interview", name: "Interviewing", color: "border-amber-500/20 bg-amber-500/5 text-amber-700 dark:text-amber-400" },
  { id: "offer", name: "Offered", color: "border-green-500/20 bg-green-500/5 text-green-700 dark:text-green-400" },
  { id: "rejected", name: "Rejected", color: "border-rose-500/20 bg-rose-500/5 text-rose-700 dark:text-rose-400" },
  { id: "ghosted", name: "Ghosted", color: "border-slate-500/20 bg-slate-500/5 text-slate-700 dark:text-slate-400" }
];

const CARD_THEMES: Record<string, { border: string; glow: string }> = {
  applied: {
    border: "border-l-emerald-500",
    glow: "hover:shadow-[0_8px_30px_rgb(16_185_129_/_0.12)] hover:border-emerald-500/20"
  },
  interview: {
    border: "border-l-amber-500",
    glow: "hover:shadow-[0_8px_30px_rgb(245_158_11_/_0.12)] hover:border-amber-500/20"
  },
  offer: {
    border: "border-l-green-500",
    glow: "hover:shadow-[0_8px_30px_rgb(34_197_94_/_0.12)] hover:border-green-500/20"
  },
  rejected: {
    border: "border-l-rose-500",
    glow: "hover:shadow-[0_8px_30px_rgb(239_68_68_/_0.12)] hover:border-rose-500/20"
  },
  ghosted: {
    border: "border-l-slate-400",
    glow: "hover:shadow-[0_8px_30px_rgb(148_163_184_/_0.12)] hover:border-slate-400/20"
  }
};

export default function JobsKanban({
  jobList,
  onDelete,
  onUpdateStatus,
}: JobsKanbanProps) {
  const [dragOverCounts, setDragOverCounts] = useState<Record<string, number>>({});

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnter = (colId: string) => {
    setDragOverCounts((prev) => ({
      ...prev,
      [colId]: (prev[colId] || 0) + 1,
    }));
  };

  const handleDragLeave = (colId: string) => {
    setDragOverCounts((prev) => ({
      ...prev,
      [colId]: Math.max(0, (prev[colId] || 0) - 1),
    }));
  };

  const handleDrop = (e: React.DragEvent, targetStatus: string) => {
    e.preventDefault();
    setDragOverCounts((prev) => ({
      ...prev,
      [targetStatus]: 0,
    }));
    const id = e.dataTransfer.getData("text/plain");
    if (id) {
      onUpdateStatus(id, targetStatus);
    }
  };

  const handleDragEnd = () => {
    setDragOverCounts({});
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start w-full">
      {COLUMNS.map((col) => {
        const columnJobs = jobList.filter((j) => j.status === col.id);
        const isHovered = (dragOverCounts[col.id] || 0) > 0;

        return (
          <div
            key={col.id}
            onDragOver={handleDragOver}
            onDragEnter={() => handleDragEnter(col.id)}
            onDragLeave={() => handleDragLeave(col.id)}
            onDrop={(e) => handleDrop(e, col.id)}
            className={`border rounded-3xl p-4 flex flex-col min-h-[550px] backdrop-blur-md transition-all duration-300 ${
              isHovered
                ? "bg-emerald-500/[0.06] border-emerald-500/30 scale-[1.02] shadow-lg shadow-emerald-500/5 ring-2 ring-emerald-500/10"
                : "bg-slate-100/20 dark:bg-white/[0.02] border-[#162518]/5 dark:border-white/[0.05]"
            }`}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#162518]/5 dark:border-white/5">
              <h4 className="text-xs font-black tracking-wider text-slate-800 dark:text-[#a1a1a6] uppercase pl-1">
                {col.name}
              </h4>
              <span className={`text-[10px] font-black tracking-wide px-2 py-0.5 rounded-full ${col.color}`}>
                {columnJobs.length}
              </span>
            </div>

            {/* Column Cards Container */}
            <div className="space-y-3 flex flex-col grow overflow-y-auto">
              {columnJobs.map((j) => {
                const cardTheme = CARD_THEMES[j.status] || CARD_THEMES.applied;

                return (
                  <div
                    key={j.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, j.id)}
                    onDragEnd={handleDragEnd}
                    className={`bg-white/95 dark:bg-[#121214]/95 border-t border-r border-b border-[#162518]/10 dark:border-white/10 rounded-2xl p-5 border-l-4 ${
                      cardTheme.border
                    } ${
                      cardTheme.glow
                    } hover:-translate-y-0.5 transition-all duration-300 cursor-grab active:cursor-grabbing`}
                  >
                    <Link
                      to={`/jobs/${j.id}`}
                      className="block font-display font-bold text-sm text-slate-900 dark:text-white hover:underline leading-snug mb-1"
                    >
                      {j.role}
                    </Link>
                    <p className="text-xs font-semibold text-[#2F5C3B] dark:text-[#81C784] mb-4">
                      {j.company}
                    </p>

                    <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-slate-100 dark:border-white/5">
                      <select
                        value={j.status}
                        onChange={(e) => onUpdateStatus(j.id, e.target.value)}
                        className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-500 dark:text-slate-400 rounded-lg px-2 py-1 outline-none cursor-pointer"
                      >
                        <option value="applied">Applied</option>
                        <option value="interview">Interviewing</option>
                        <option value="offer">Offered</option>
                        <option value="rejected">Rejected</option>
                        <option value="ghosted">Ghosted</option>
                      </select>

                      <button
                        onClick={() => onDelete(j.id)}
                        className="text-rose-500/75 hover:text-rose-600 dark:text-rose-400/70 dark:hover:text-rose-300 p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors duration-200 cursor-pointer active:scale-90"
                        title="Delete Application"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}

              {columnJobs.length === 0 && (
                <div className="h-20 border border-dashed border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-slate-300 dark:text-white/10 text-xs font-semibold select-none">
                  No jobs here
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}