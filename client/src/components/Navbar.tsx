import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar({ onAddClick }: { onAddClick: () => void }) {
  const [isDark, setIsDark] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    const root = document.documentElement;
    if (nextDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-[#161617]/70 backdrop-blur-md border-b border-slate-200/60 dark:border-white/10 px-6 py-4 flex items-center justify-between transition-all duration-300">
      <Logo />

      <div className="flex items-center gap-2">
        <button
          onClick={onAddClick}
          className="bg-[#2F5C3B] hover:bg-[#24472E] dark:bg-[#E6EDE7] dark:text-[#0A0E0B] dark:hover:bg-white active:scale-95 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer flex items-center gap-1.5"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Job
        </button>

        <a
        href="https://chromewebstore.google.com/detail/trackr-clipper/your-actual-id" // Replace with your approved store link
        target="_blank"
        rel="noreferrer"
        className="text-slate-500 hover:text-slate-800 dark:text-[#a1a1a6] dark:hover:text-[#F5F5F7] text-xs font-bold px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-[#1D1D1F] dark:hover:bg-[#2C2C2E] transition-all duration-300 flex items-center gap-1.5"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 11.517-1.325l.409.308a.75.75 0 001.077-.219l1.455-2.505a.75.75 0 011.026-.274l1.37.79a.75.75 0 01.274 1.027l-1.455 2.504a.75.75 0 00.22 1.078l.408.307a.75.75 0 01-.518 1.325l-.041-.02M10.5 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Extension
      </a>
      
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#1D1D1F] dark:hover:bg-[#2C2C2E] text-slate-600 dark:text-[#a1a1a6] dark:hover:text-[#F5F5F7] transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center"
        >
          {isDark ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        <button
          onClick={handleLogout}
          className="bg-slate-100 hover:bg-rose-50 hover:text-rose-600 dark:bg-[#1D1D1F] dark:hover:bg-rose-950/20 dark:hover:text-rose-400 border border-slate-200/50 dark:border-white/10 text-slate-600 dark:text-[#a1a1a6] text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 active:scale-95"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
