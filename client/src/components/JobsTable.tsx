import type { Job } from "../types";

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
      return "bg-blue-50 text-blue-600 border border-blue-200/60";
    if (status === "rejected")
      return "bg-rose-50 text-rose-600 border border-rose-200/60";
    if (status === "interview")
      return "bg-amber-50 text-amber-700 border border-amber-200/60";
    if (status === "ghosted")
      return "bg-slate-100 text-slate-600 border border-slate-200/60";
    if (status === "offer")
      return "bg-emerald-50 text-emerald-700 border border-emerald-200/60";

    return "bg-slate-50 text-slate-500 border border-slate-200/60";
  }



  return (
    <div className="w-full bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-3xl p-6 shadow-xl shadow-indigo-900/5 overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-3 text-left">
        <thead>
          <tr>
            <th className="text-slate-400 font-semibold text-xs uppercase tracking-wider px-6 pb-2 border-b border-slate-100">
              Company
            </th>
            <th className="text-slate-400 font-semibold text-xs uppercase tracking-wider px-6 pb-2 border-b border-slate-100">
              Role
            </th>
            <th className="text-slate-400 font-semibold text-xs uppercase tracking-wider px-6 pb-2 border-b border-slate-100">
              URL
            </th>
            <th className="text-slate-400 font-semibold text-xs uppercase tracking-wider px-6 pb-2 border-b border-slate-100">
              Date Applied
            </th>
            <th className="text-slate-400 font-semibold text-xs uppercase tracking-wider px-6 pb-2 border-b border-slate-100">
              Status
            </th>
            <th className="text-slate-400 font-semibold text-xs uppercase tracking-wider px-6 pb-2 border-b border-slate-100">
              Notes
            </th>
            <th className="text-slate-400 font-semibold text-xs uppercase tracking-wider px-6 pb-2 border-b border-slate-100">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {jobList.map((j) => {
            return (
              <tr
                key={j.id}
                className="hover:-translate-y-0.5 transition-transform duration-200"
              >
                {/* 
                  Note the 'first:rounded-l-2xl' and 'last:rounded-r-2xl' classes. 
                  Since we are using 'border-separate', we round the far left cell 
                  and far right cell to create a capsule card shape.
                */}
                <td className="py-4 px-6 text-sm font-semibold text-slate-900 bg-slate-50/50 first:rounded-l-2xl border-t border-b border-l border-slate-100/85">
                  {j.company}
                </td>
                <td className="py-4 px-6 text-sm text-slate-600 bg-slate-50/50 border-t border-b border-slate-100/85">
                  {j.role}
                </td>
                <td className="py-4 px-6 text-sm text-blue-500 bg-slate-50/50 border-t border-b border-slate-100/85">
                  <a
                    href={j.jobUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {j.jobUrl ? "Link" : "None"}
                  </a>
                </td>
                <td className="py-4 px-6 text-sm text-slate-500 bg-slate-50/50 border-t border-b border-slate-100/85">
                  {new Date(j.appliedAt).toLocaleDateString()}
                </td>
                <td className="py-4 px-6 text-sm bg-slate-50/50 border-t border-b border-slate-100/85">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${handleStatusBGColor(j.status)}`}
                  >
                    {j.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-slate-500 bg-slate-50/50 border-t border-b border-slate-100/85 max-w-[150px] truncate">
                  {j.notes || "-"}
                </td>
                <td className="py-4 px-6 text-sm bg-slate-50/50 last:rounded-r-2xl border-t border-b border-r border-slate-100/85">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onEdit(j)}
                      className="text-blue-600 hover:text-blue-800 text-xs font-semibold hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                    <span className="text-slate-200">|</span>
                    <button
                      onClick={() => onDelete(j.id)}
                      className="text-rose-600 hover:text-rose-800 text-xs font-semibold hover:underline cursor-pointer"
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
