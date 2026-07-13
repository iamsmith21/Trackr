
export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Sleek SVG Mark */}
      <svg
        className="w-8 h-8 transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#81C784" />
            <stop offset="100%" stopColor="#2F5C3B" />
          </linearGradient>
        </defs>

        {/* Translucent background stem for depth */}
        <rect
          x="13"
          y="10"
          width="6"
          height="18"
          rx="3"
          className="fill-[#2F5C3B]/20 dark:fill-[#81C784]/20"
        />

        {/* Primary gradient stem */}
        <rect
          x="13"
          y="13"
          width="6"
          height="12"
          rx="3"
          fill="url(#logo-grad)"
        />

        {/* Primary horizontal crossbar */}
        <rect
          x="4"
          y="5"
          width="24"
          height="6"
          rx="3"
          fill="url(#logo-grad)"
        />

        {/* High-tech target dot indicator */}
        <circle
          cx="24"
          cy="8"
          r="1.75"
          className="fill-white dark:fill-[#0A0E0B]"
        />
      </svg>

      {/* Geometric Sora Wordmark */}
      <span className="font-display font-black text-xl tracking-tight text-slate-900 dark:text-white">
        Track<span className="text-[#2F5C3B] dark:text-[#81C784]">r.</span>
      </span>
    </div>
  );
}
