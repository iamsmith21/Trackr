import { useEffect, useState } from "react"

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)

    const root = document.documentElement
    if (nextDark) {
      root.classList.add("dark")
      localStorage.setItem('theme', 'dark')
    } else {
      
      root.classList.remove("dark")
      localStorage.setItem('theme', 'light')
    }
  }
  return (


    <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-[#161617]/70 backdrop-blur-md border-b border-slate-200/60 dark:border-white/10 px-6 py-4 flex items-center justify-between transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20">
          T
        </div>
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-[#d2d2d7] bg-clip-text text-transparent">
          Trackr
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#1D1D1F] dark:hover:bg-[#2C2C2E] text-slate-600 dark:text-[#a1a1a6] dark:hover:text-[#F5F5F7] transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        <button className="bg-slate-100 hover:bg-rose-50 hover:text-rose-600 dark:bg-[#1D1D1F] dark:hover:bg-rose-950/20 dark:hover:text-rose-400 border border-slate-200/50 dark:border-white/10 text-slate-600 dark:text-[#a1a1a6] text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 active:scale-95">
          Logout
        </button>
      </div>
    </nav>
  );
}
