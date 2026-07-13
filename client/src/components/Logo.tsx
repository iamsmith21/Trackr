
export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Sleek SVG Mark */}
      <svg
        className="w-8 h-8 transform group-hover:scale-105 transition-transform duration-300"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left column bar representing foundations */}
        <rect
          x="6"
          y="14"
          width="4"
          height="12"
          rx="2"
          className="fill-[#2F5C3B] dark:fill-[#81C784] opacity-40"
        />
        
        {/* Middle column bar representing interviews */}
        <rect
          x="12"
          y="8"
          width="4"
          height="18"
          rx="2"
          className="fill-[#2F5C3B] dark:fill-[#81C784] opacity-75"
        />

        {/* Upward check/growth arrow representing the offer */}
        <path
          d="M18 20L22 24L30 12"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-[#2F5C3B] dark:stroke-[#81C784]"
        />

        {/* Outer connection nodes */}
        <circle
          cx="30"
          cy="12"
          r="2.5"
          className="fill-[#1A3A22] dark:fill-emerald-400 animate-pulse"
        />
      </svg>

      {/* Geometric Sora Wordmark */}
      <span className="font-display font-black text-xl tracking-tight text-slate-900 dark:text-white">
        Track<span className="text-[#2F5C3B] dark:text-[#81C784]">r.</span>
      </span>
    </div>
  );
}
