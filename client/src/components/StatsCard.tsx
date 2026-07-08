import type { Job } from "../types";

export default function StatsCard({jobList} : {jobList: Job[]}) {

  const totalApplied = jobList.length;
  const Interviews = jobList.filter((j) => j.status === "interview").length
  const Offers = jobList.filter((j) => j.status === "offer").length
  const responseRate = totalApplied > 0 ? Math.round((jobList.filter((j) => j.status !== "applied").length/totalApplied)*100) : 0

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {/* Card 1 */}
      <div className="bg-white/60 backdrop-blur-sm border border-[#162518]/10 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-white/80 hover:-translate-y-1 transition-all duration-300">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          Total Applied
        </p>
        <p className="text-3xl font-bold text-slate-900 tracking-tight">{totalApplied}</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/60 backdrop-blur-sm border border-[#162518]/10 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-white/80 hover:-translate-y-1 transition-all duration-300">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          Interviews
        </p>
        <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 tracking-tight">
          {Interviews}
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/60 backdrop-blur-sm border border-[#162518]/10 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-white/80 hover:-translate-y-1 transition-all duration-300">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          Offers
        </p>
        <p className="text-3xl font-bold text-[#2F5C3B] dark:text-[#81C784] tracking-tight">
          {Offers}
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white/60 backdrop-blur-sm border border-[#162518]/10 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-white/80 hover:-translate-y-1 transition-all duration-300">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          Response Rate
        </p>
        <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">
          {responseRate}%
        </p>
      </div>
    </div>
  );
}
