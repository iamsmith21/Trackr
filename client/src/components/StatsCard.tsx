import type { Job } from "../types";

// Helper component to render the custom SVG Radial Gauge
function RadialGauge({
  percentage,
  strokeColor,
}: {
  percentage: number;
  strokeColor: string;
}) {
  const radius = 16;
  const strokeWidth = 3;
  const normalizedRadius = radius - strokeWidth;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0 select-none">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
        {/* Background track circle */}
        <circle
          className="stroke-slate-200/60 dark:stroke-white/5"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={16}
          cy={16}
        />
        {/* Foreground progress circle */}
        <circle
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          cx={16}
          cy={16}
          r={normalizedRadius}
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {/* Center percentage label */}
      <span className="absolute text-[9px] font-black text-slate-800 dark:text-white">
        {percentage}%
      </span>
    </div>
  );
}

export default function StatsCard({ jobList }: { jobList: Job[] }) {
  const totalApplied = jobList.length;
  const interviews = jobList.filter((j) => j.status === "interview").length;
  const offers = jobList.filter((j) => j.status === "offer").length;
  const responseRate = totalApplied > 0 
    ? Math.round((jobList.filter((j) => j.status !== "applied").length / totalApplied) * 100) 
    : 0;

  // Calculate conversion percentages
  const interviewRate = totalApplied > 0 ? Math.round((interviews / totalApplied) * 100) : 0;
  const offerRate = totalApplied > 0 ? Math.round((offers / totalApplied) * 100) : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      
      {/* Card 1: Total Applied */}
      <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-[#162518]/10 dark:border-white/10 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
            Total Applied
          </p>
          <p className="text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            {totalApplied}
          </p>
          <p className="text-[10px] font-bold text-slate-400 dark:text-[#86868B] mt-1">
            Applications active
          </p>
        </div>
        <RadialGauge percentage={100} strokeColor="#2F5C3B" />
      </div>

      {/* Card 2: Interviews */}
      <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-[#162518]/10 dark:border-white/10 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
            Interviews
          </p>
          <p className="text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            {interviews}
          </p>
          <p className="text-[10px] font-bold text-amber-500/95 mt-1">
            Stage conversion
          </p>
        </div>
        <RadialGauge percentage={interviewRate} strokeColor="#F59E0B" />
      </div>

      {/* Card 3: Offers */}
      <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-[#162518]/10 dark:border-white/10 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
            Offers
          </p>
          <p className="text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            {offers}
          </p>
          <p className="text-[10px] font-bold text-emerald-500 mt-1">
            Success rate
          </p>
        </div>
        <RadialGauge percentage={offerRate} strokeColor="#10B981" />
      </div>

      {/* Card 4: Response Rate */}
      <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-[#162518]/10 dark:border-white/10 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
            Response Rate
          </p>
          <p className="text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            {responseRate}%
          </p>
          <p className="text-[10px] font-bold text-blue-500 mt-1">
            Active callback
          </p>
        </div>
        <RadialGauge percentage={responseRate} strokeColor="#3B82F6" />
      </div>
      
    </div>
  );
}
