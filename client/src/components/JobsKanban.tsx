import { Link } from "react-router-dom";
import type { Job } from "../types";
import React, { useState } from "react";


interface JobsKanbanProps {
    jobList: Job[];
    onDelete : (id : string) => void;
    onUpdateStatus : (id: string, newStatus: string) => void;
}

const COLUMNS = [
  { id: "applied", name: "Applied", color: "border-emerald-500/20 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400" },
  { id: "interview", name: "Interviewing", color: "border-amber-500/20 bg-amber-500/5 text-amber-700 dark:text-amber-400" },
  { id: "offer", name: "Offered", color: "border-green-500/20 bg-green-500/5 text-green-700 dark:text-green-400" },
  { id: "rejected", name: "Rejected", color: "border-rose-500/20 bg-rose-500/5 text-rose-700 dark:text-rose-400" },
  { id: "ghosted", name: "Ghosted", color: "border-slate-500/20 bg-slate-500/5 text-slate-700 dark:text-slate-400" }
]

export default function JobsKanban({
    jobList, onDelete, onUpdateStatus
} : JobsKanbanProps) {

    const [activeColHover, setActiveColHover] = useState<string | null>(null)

    const handleDragStart = (e : React.DragEvent, id: string) => {
        e.dataTransfer.setData("text/plain", id)
        e.dataTransfer.effectAllowed = "move"
    }

    const handleDragOver = (e : React.DragEvent) => {
        e.preventDefault()
    }

    const handleDragEnter = (colId : string) => {
        setActiveColHover(colId)
    }

    const handleDragLeave = () => {
        setActiveColHover(null)
    }

    const handleDrop = (e :React.DragEvent, targetStatus: string) => {
        e.preventDefault()
        setActiveColHover(null)
        const id = e.dataTransfer.getData("text/plain")
        if (id) {
            onUpdateStatus(id, targetStatus)
        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start w-full">
            {COLUMNS.map((col) => {
                const columnJobs = jobList.filter((j) => j.status === col.id)
                const isHovered = activeColHover === col.id
                return (
                <div
            key={col.id}
            onDragOver={handleDragOver}
            onDragEnter={() => handleDragEnter(col.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, col.id)}
            className={`border rounded-2xl p-4 flex flex-col min-h-[550px] transition-all duration-300 ${
              isHovered
                ? "bg-emerald-500/5 border-emerald-500/30 scale-[1.02] shadow-lg shadow-emerald-500/5 ring-2 ring-emerald-500/10"
                : "bg-white/50 dark:bg-white/5 border-[#162518]/10 dark:border-white/10"
            }`}
          >
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/50 dark:border-white/5">
                            <h4 className="text-sm font-bold px-2 py-0.5 border-b border-slate-200/50 dark:border-white/5">
                                {col.name}
                            </h4>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${col.color}`}>{columnJobs.length}</span>
                        </div>

                        <div className="space-y-3 flex flex-col grow overflow-y-auto">
                            {columnJobs.map((j) => (
                                <div key={j.id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, j.id)}
                                className="bg-white dark:bg-[#121214] border border-[#162518]/10 dark:border-white/10 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                                    <Link to={`/jobs/${j.id}`}
                                    className="block font-display font-bold text-sm text-slate-900 dark:text-white hover:underline leading-snug mb-1">{j.role}</Link>
                                    <p className="text-xs font-semibold text-slate-500 dark:text-[#86868B] mb-4">{j.company}</p>

                                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
                                        <select value={j.status} onChange={(e) => onUpdateStatus(j.id, e.target.value)}
                                            className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 rounded-lg px-2 py-1 outline-none cursor-pointer">

                                           <option value="applied">Applied</option>
                                            <option value="interview">Interviewing</option>
                                            <option value="offer">Offered</option>
                                            <option value="rejected">Rejected</option>
                                            <option value="ghosted">Ghosted</option>

                                         </select>
                                        
                                        <button
                                        onClick={() => onDelete(j.id)}
                                        className="text-rose-500 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors duration-200 cursor-pointer active:scale-90"
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
                            ))}

                            {columnJobs.length === 0 && (
                                <div className="h-24 border border-dashed border-slate-200 dark:border-white/5 rounded-xl flex items-center justify-center text-slate-300 dark:text-white/10 text-xs font-semibold select-none">No jobs here</div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}