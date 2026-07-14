import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
    setIsDark(document.documentElement.classList.contains("dark"));
  }, [navigate]);

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

  return (
    <div className="min-h-screen bg-[#EDF3ED] dark:bg-[#000000] text-[#162518] dark:text-[#E6EDE7] antialiased flex flex-col justify-between selection:bg-[#CBE0CE] dark:selection:bg-[#1C2C1E] transition-colors duration-300">
      
      {/* Environmental Style Navigation Header */}
      <header className="max-w-[1200px] w-full mx-auto px-6 py-6 flex items-center justify-between z-10">
        <Logo />
        
        <div className="flex items-center gap-3">
          {/* GitHub Repository Link */}
          <a
            href="https://github.com/iamsmith21/Trackr"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full border border-[#162518]/10 dark:border-white/10 text-[#162518] dark:text-[#E6EDE7] hover:bg-[#162518]/5 dark:hover:bg-white/5 transition-all duration-200 flex items-center justify-center cursor-pointer"
            title="GitHub Repository"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
          </a>

          {/* Dark Mode Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-[#162518]/10 dark:border-white/10 text-[#162518] dark:text-[#E6EDE7] hover:bg-[#162518]/5 dark:hover:bg-white/5 transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center"
            title="Toggle theme"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Sign In Button */}
          <button
            onClick={() => navigate("/login")}
            className="text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-full border border-[#162518]/10 dark:border-white/10 text-[#162518] dark:text-[#E6EDE7] hover:bg-[#162518]/5 dark:hover:bg-white/5 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </header>


      {/* Main Content */}
      <main className="max-w-[1200px] w-full mx-auto px-6 py-16 text-center z-10">
        
        {/* Hero Header */}
        <div className="max-w-[1000px] mx-auto mb-16">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-[#162518] dark:text-white mb-6">
            Track, organize, and
            <br />
            <span className="font-serif italic font-bold text-[#2F5C3B] dark:text-[#4FA367] pr-2">
              accelerate
            </span>{" "}
            your job search.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#4E6150] dark:text-[#A6B5A8] max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            A clean, environmental workspace to track your active applications, calculate metrics, and grow your career. Simple, private, and fast.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/register")}
              className="w-full sm:w-auto bg-[#2F5C3B] dark:bg-[#E6EDE7] text-white dark:text-[#0A0E0B] hover:bg-[#24472E] dark:hover:bg-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer text-sm shadow-md"
            >
              Get Started Free
            </button>
            <button
              onClick={() => navigate("/login")}
              className="w-full sm:w-auto bg-transparent border border-[#162518]/20 dark:border-white/10 text-[#162518] dark:text-[#E6EDE7] hover:bg-[#162518]/5 dark:hover:bg-white/5 font-bold py-3.5 px-8 rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer text-sm"
            >
              Try Beta Demo
            </button>
          </div>
        </div>

        {/* HIGH-FIDELITY APP INTERFACE VISUAL PREVIEW */}
        <section className="mb-28 max-w-[1000px] mx-auto">
          <div className="bg-white/70 dark:bg-[#161617]/70 backdrop-blur-md border border-[#162518]/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 text-left">
            {/* Window title bar */}
            <div className="px-6 py-4 bg-slate-100/50 dark:bg-black/40 border-b border-[#162518]/5 dark:border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-400/80"></span>
              </div>
              <span className="text-xs font-semibold text-slate-400 tracking-wide select-none">Trackr. Workspace</span>
              <div className="w-12"></div>
            </div>

            {/* Dashboard Mockup Body */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Mock Analytics Panel (Bento Gauges) */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 select-none">
                  Bento Analytics Panel
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Gauge 1: Total Applied */}
                  <div className="bg-white/50 dark:bg-white/[0.02] border border-[#162518]/5 dark:border-white/5 p-5 rounded-2xl flex flex-col items-center justify-between text-center relative overflow-hidden group">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider select-none">Total Applied</span>
                    <span className="text-4xl font-extrabold text-[#162518] dark:text-white my-3 select-none">15</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full select-none">+2 this week</span>
                  </div>

                  {/* Gauge 2: Response Rate */}
                  <div className="bg-white/50 dark:bg-white/[0.02] border border-[#162518]/5 dark:border-white/5 p-5 rounded-2xl flex flex-col items-center justify-between text-center relative overflow-hidden group">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider select-none">Response Rate</span>
                    <div className="relative flex items-center justify-center my-2">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle cx="32" cy="32" r="26" strokeWidth="6" stroke="rgba(0,0,0,0.05)" className="dark:stroke-white/5" fill="transparent" />
                        <circle cx="32" cy="32" r="26" strokeWidth="6" stroke="#2F5C3B" className="dark:stroke-[#81C784]" fill="transparent" strokeDasharray="163.36" strokeDashoffset="98.0" strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-xs font-extrabold text-[#162518] dark:text-white select-none">40%</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-400 select-none">6 Responses</span>
                  </div>

                  {/* Gauge 3: Interview Rate */}
                  <div className="bg-white/50 dark:bg-white/[0.02] border border-[#162518]/5 dark:border-white/5 p-5 rounded-2xl flex flex-col items-center justify-between text-center relative overflow-hidden group">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider select-none">Interview Conversion</span>
                    <div className="relative flex items-center justify-center my-2">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle cx="32" cy="32" r="26" strokeWidth="6" stroke="rgba(0,0,0,0.05)" className="dark:stroke-white/5" fill="transparent" />
                        <circle cx="32" cy="32" r="26" strokeWidth="6" stroke="#10B981" fill="transparent" strokeDasharray="163.36" strokeDashoffset="109.4" strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-xs font-extrabold text-[#162518] dark:text-white select-none">33%</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-400 select-none">5 Interview Stages</span>
                  </div>

                  {/* Gauge 4: Offer Rate */}
                  <div className="bg-white/50 dark:bg-white/[0.02] border border-[#162518]/5 dark:border-white/5 p-5 rounded-2xl flex flex-col items-center justify-between text-center relative overflow-hidden group">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider select-none">Offer Success</span>
                    <div className="relative flex items-center justify-center my-2">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle cx="32" cy="32" r="26" strokeWidth="6" stroke="rgba(0,0,0,0.05)" className="dark:stroke-white/5" fill="transparent" />
                        <circle cx="32" cy="32" r="26" strokeWidth="6" stroke="#8B5CF6" fill="transparent" strokeDasharray="163.36" strokeDashoffset="142.1" strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-xs font-extrabold text-[#162518] dark:text-white select-none">13%</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-400 select-none">2 Offers Received</span>
                  </div>
                </div>
              </div>

              {/* Mock Kanban Pipeline Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 select-none">
                  Glassmorphic Kanban Board
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  
                  {/* Applied Column */}
                  <div className="bg-slate-50/55 dark:bg-black/20 border border-[#162518]/5 dark:border-white/5 rounded-2xl p-4 space-y-3 flex flex-col justify-start">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700 dark:text-[#A6B5A8] select-none">Applied</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/50 dark:bg-white/5 text-slate-500 dark:text-[#A6B5A8] select-none">2</span>
                    </div>
                    <div className="bg-white/80 dark:bg-[#1D1D1F]/80 p-3.5 rounded-xl border border-slate-200/50 dark:border-white/5 shadow-sm hover:scale-[1.02] transition-all cursor-grab select-none">
                      <h4 className="text-xs font-extrabold text-[#162518] dark:text-white">Apple</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">iOS Developer</p>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded mt-2.5 inline-block">1 day ago</span>
                    </div>
                    <div className="bg-white/80 dark:bg-[#1D1D1F]/80 p-3.5 rounded-xl border border-slate-200/50 dark:border-white/5 shadow-sm hover:scale-[1.02] transition-all cursor-grab select-none">
                      <h4 className="text-xs font-extrabold text-[#162518] dark:text-white">Meta</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">Production Engineer</p>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded mt-2.5 inline-block">3 days ago</span>
                    </div>
                  </div>

                  {/* Interviewing Column */}
                  <div className="bg-slate-50/55 dark:bg-black/20 border border-[#162518]/5 dark:border-white/5 rounded-2xl p-4 space-y-3 flex flex-col justify-start">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-500 select-none">Interviewing</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 select-none">2</span>
                    </div>
                    <div className="bg-white/80 dark:bg-[#1D1D1F]/80 p-3.5 rounded-xl border border-emerald-500/20 dark:border-emerald-500/10 shadow-sm hover:scale-[1.02] transition-all cursor-grab select-none">
                      <h4 className="text-xs font-extrabold text-[#162518] dark:text-white flex items-center justify-between">
                        Google
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">Software Engineer, L3</p>
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded mt-2.5 inline-block">Onsite Scheduled</span>
                    </div>
                    <div className="bg-white/80 dark:bg-[#1D1D1F]/80 p-3.5 rounded-xl border border-slate-200/50 dark:border-white/5 shadow-sm hover:scale-[1.02] transition-all cursor-grab select-none">
                      <h4 className="text-xs font-extrabold text-[#162518] dark:text-white">Stripe</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">Backend Engineer</p>
                      <span className="text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded mt-2.5 inline-block">Tech Screen</span>
                    </div>
                  </div>

                  {/* Offered Column */}
                  <div className="bg-slate-50/55 dark:bg-black/20 border border-[#162518]/5 dark:border-white/5 rounded-2xl p-4 space-y-3 flex flex-col justify-start">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-700 dark:text-purple-400 select-none">Offered</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 select-none">1</span>
                    </div>
                    <div className="bg-[#FAF7FC] dark:bg-[#1F1926] p-3.5 rounded-xl border border-purple-500/30 dark:border-purple-500/20 shadow-md hover:scale-[1.02] transition-all cursor-grab select-none relative overflow-hidden">
                      <div className="absolute right-0 top-0 bg-purple-500 text-white text-[8px] font-extrabold tracking-wide uppercase px-2 py-0.5 rounded-bl">Offer 🎉</div>
                      <h4 className="text-xs font-extrabold text-[#162518] dark:text-white mt-1">Vercel</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">Developer Advocate</p>
                      <span className="text-[9px] font-bold text-purple-600 dark:text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded mt-2.5 inline-block">Base: $150,000</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CHROME EXTENSION SECTION */}
        <section className="mb-28 max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F5C3B] dark:text-[#4FA367] select-none">
              Introducing Trackr Clipper
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#162518] dark:text-white">
              Clip roles in one click.
              <br />
              No manual copy-pasting.
            </h2>
            <p className="text-sm sm:text-base text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
              Tired of copying company names, roles, and URLs manually? The <strong>Trackr Clipper</strong> extension parses active job pages on LinkedIn instantly and updates your dashboard pipeline.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-[#81C784] flex items-center justify-center text-xs font-bold">✓</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-[#A6B5A8]">Automatic metadata extraction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-[#81C784] flex items-center justify-center text-xs font-bold">✓</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-[#A6B5A8]">JWT authorization sync</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-[#81C784] flex items-center justify-center text-xs font-bold">✓</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-[#A6B5A8]">Pending approval - Store release soon</span>
              </div>
            </div>
          </div>

          {/* Chrome Extension Mockup UI */}
          <div className="relative bg-white/70 dark:bg-[#161617]/70 border border-[#162518]/10 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-4 right-4 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full select-none">
              Chrome Extension Popup
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Logo />
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-xs font-bold text-slate-400">Clipper</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Company</label>
                <div className="w-full bg-slate-100 dark:bg-[#1D1D1F] border border-transparent dark:border-white/5 rounded-xl px-4 py-2.5 text-xs text-[#162518] dark:text-white font-bold select-none">
                  Google
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Role Title</label>
                <div className="w-full bg-slate-100 dark:bg-[#1D1D1F] border border-transparent dark:border-white/5 rounded-xl px-4 py-2.5 text-xs text-[#162518] dark:text-white font-bold select-none">
                  Software Engineer, L3
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Source URL</label>
                <div className="w-full bg-slate-100 dark:bg-[#1D1D1F] border border-transparent dark:border-white/5 rounded-xl px-4 py-2.5 text-xs text-slate-400 truncate font-mono select-none">
                  https://www.linkedin.com/jobs/view/39274291/
                </div>
              </div>
              <button className="w-full bg-[#2F5C3B] hover:bg-[#24472E] text-white font-bold py-3 rounded-xl transition-all text-xs cursor-pointer shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-1.5 active:scale-98">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add to Trackr
              </button>
            </div>
          </div>
        </section>

        {/* PREMIUM FEATURES ROADMAP TIMELINE */}
        <section className="mb-20 max-w-[1000px] mx-auto text-left border-t border-[#162518]/5 dark:border-white/5 pt-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F5C3B] dark:text-[#4FA367] select-none block mb-2">
            The Roadmap
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#162518] dark:text-white mb-10">
            Upcoming Premium Add-ons.
            <br />
            Free for beta adopters.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/40 dark:bg-white/[0.01] border border-[#162518]/5 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:translate-y-[-4px] transition-all duration-300">
              <div className="text-purple-600 bg-purple-500/10 w-9 h-9 rounded-xl flex items-center justify-center font-bold mb-4 select-none">AI</div>
              <h3 className="font-bold text-[#162518] dark:text-white mb-2 text-sm">AI Prep Guide & Cover Letter</h3>
              <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
                Generate tailored cover letters and interview prep guides dynamically based on the scraped job page.
              </p>
            </div>

            <div className="bg-white/40 dark:bg-white/[0.01] border border-[#162518]/5 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:translate-y-[-4px] transition-all duration-300">
              <div className="text-blue-600 bg-blue-500/10 w-9 h-9 rounded-xl flex items-center justify-center font-bold mb-4 select-none">✉</div>
              <h3 className="font-bold text-[#162518] dark:text-white mb-2 text-sm">Gmail Sync & Tracking</h3>
              <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
                Integrate securely with email client inbox API to scan for recruiter replies and auto-update application statuses.
              </p>
            </div>

            <div className="bg-white/40 dark:bg-white/[0.01] border border-[#162518]/5 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:translate-y-[-4px] transition-all duration-300">
              <div className="text-emerald-600 bg-emerald-500/10 w-9 h-9 rounded-xl flex items-center justify-center font-bold mb-4 select-none">$</div>
              <h3 className="font-bold text-[#162518] dark:text-white mb-2 text-sm">Offer Calculator</h3>
              <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
                Input and evaluate base salary, target bonus percentage, sign-on rewards, and equity vesting side-by-side.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-28 max-w-[800px] mx-auto text-left border-t border-[#162518]/5 dark:border-white/5 pt-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F5C3B] dark:text-[#4FA367] select-none block mb-2 text-center">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#162518] dark:text-white mb-12 text-center">
            Got questions? We've got answers.
          </h2>

          <div className="space-y-6">
            <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm border border-[#162518]/5 dark:border-white/5 p-6 rounded-2xl">
              <h3 className="font-bold text-[#162518] dark:text-white mb-2 text-sm">Is Trackr really free?</h3>
              <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
                Yes! Trackr is currently in free public beta. To thank you for testing the application, all accounts registered during this phase will receive lifetime access to all future premium features (including AI interview preparation and automated email sync) completely free.
              </p>
            </div>

            <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm border border-[#162518]/5 dark:border-white/5 p-6 rounded-2xl">
              <h3 className="font-bold text-[#162518] dark:text-white mb-2 text-sm">How does the Chrome Clipper work?</h3>
              <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
                Once installed, you can navigate to any job listing page on LinkedIn. Clicking the Trackr Clipper extension instantly reads the company name, role title, and listing URL, saving them directly to your dashboard pipeline in one click.
              </p>
            </div>

            <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm border border-[#162518]/5 dark:border-white/5 p-6 rounded-2xl">
              <h3 className="font-bold text-[#162518] dark:text-white mb-2 text-sm">Can I host this application myself?</h3>
              <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
                Absolutely! Trackr is built on an Open-Core model. The entire core application (including the Kanban workspace, list view, and browser clipper extension) is 100% open-source and free to self-host. Upcoming cloud-reliant premium integrations (like AI prep) require server resources. On our managed cloud platform we charge a small subscription to cover this, but self-hosters can unlock them for free by simply configuring their own API keys (e.g. OpenAI) in their local environment config.
              </p>
            </div>

            <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm border border-[#162518]/5 dark:border-white/5 p-6 rounded-2xl">
              <h3 className="font-bold text-[#162518] dark:text-white mb-2 text-sm">Is my data secure and private?</h3>
              <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
                We believe your career search belongs strictly to you. We isolate database tables by authenticated user IDs, encrypt all logins in transit, and do not track or sell your search metrics or application data.
              </p>
            </div>
          </div>
        </section>

        {/* Minimalist Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-1000px mx-auto text-left border-t border-[#162518]/5 dark:border-white/5 pt-16">
          <div className="group">
            <div className="text-[#2F5C3B] dark:text-[#4FA367] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#162518] dark:text-white mb-2">Metrics</h3>
            <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
              Track conversion and response rates automatically based on active application stages.
            </p>
          </div>

          <div className="group">
            <div className="text-[#2F5C3B] dark:text-[#4FA367] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#162518] dark:text-white mb-2">Privacy</h3>
            <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
              Your applications belong to you. Fully segmented database tables ensure absolute privacy.
            </p>
          </div>

          <div className="group">
            <div className="text-[#2F5C3B] dark:text-[#4FA367] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#162518] dark:text-white mb-2">Simplicity</h3>
            <p className="text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
              No bloated fields. Fast row creation, status changes, and direct link navigations.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-[1200px] w-full mx-auto px-6 py-12 border-t border-[#162518]/5 dark:border-white/5 text-xs text-slate-400 dark:text-[#4E6150] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>&copy; {new Date().getFullYear()} Trackr. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-[#162518] dark:hover:text-white cursor-pointer transition-colors no-underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-[#162518] dark:hover:text-white cursor-pointer transition-colors no-underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}

