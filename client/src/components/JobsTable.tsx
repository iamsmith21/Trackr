import type { Job } from "../types";

interface JobsTableProps {
  jobList: Job[];
  onDelete: (id: string) => void;
}

export default function JobsTable({ jobList, onDelete }: JobsTableProps) {
  function handleStatusBGColor(status: string) {
    if (status.toLowerCase() === "applied") return "bg-blue-500";
    if (status.toLowerCase() === "rejected") return "bg-red-500";
    if (status.toLowerCase() === "interviewing") return "bg-yellow-500";
    if (status.toLowerCase() === "pending") return "bg-gray-500";
    if (status.toLowerCase() === "accepted") return "bg-green-500";

    return "bg-amber-100 text-amber-800";
  }

  return (
    <table className="w-full border border-black">
      <thead>
        <tr className="divide-x divide-black">
          <th className="text-left px-4 py-2 "> Company </th>
          <th className="text-left px-4 py-2 "> Role </th>
          <th className="text-left px-4 py-2 "> URL </th>
          <th className="text-left px-4 py-2"> Date Applied </th>
          <th className="text-left px-4 py-2"> Status </th>
          <th className="text-left px-4 py-2"> Notes </th>
          <th className="text-left px-4 py-2"> Actions </th>
        </tr>
      </thead>

      <tbody>
        {jobList.map((j) => {
          return (
            <tr key={j.id} className="divide-x divide-black">
              <td className="px-4 py-3 border-t"> {j.company}</td>
              <td className="px-4 py-3 border-t"> {j.role}</td>
              <td className="px-4 py-3 border-t"> {j.jobUrl}</td>
              <td className="px-4 py-3 border-t">
                {new Date(j.appliedAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 border-t">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${handleStatusBGColor(j.status)}`}
                >
                  {j.status}
                </span>
              </td>
              <td className="px-4 py-3 border-t"> {j.notes}</td>

              {/* delete : j.id */}
              <td className="px-4 py-3 border-t ">
                <button onClick={() => onDelete(j.id)} className="text-red-700">
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
