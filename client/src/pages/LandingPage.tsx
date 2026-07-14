import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#EDF3ED] dark:bg-[#000000] text-[#162518] dark:text-[#E6EDE7] antialiased flex flex-col justify-between selection:bg-[#CBE0CE] dark:selection:bg-[#1C2C1E] transition-colors duration-300">
      
      {/* Environmental Style Navigation Header */}
      <header className="max-w-[1200px] w-full mx-auto px-6 py-6 flex items-center justify-between z-10">
        <Logo />
        <button
          onClick={() => navigate("/login")}
          className="text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-full border border-[#162518]/10 dark:border-white/10 text-[#162518] dark:text-[#E6EDE7] hover:bg-[#162518]/5 dark:hover:bg-white/5 transition-all duration-200 active:scale-95 cursor-pointer"
        >
          Sign In
        </button>
      </header>

      {/* Main Hero Showcase */}
      <main className="max-w-[1000px] w-full mx-auto px-6 py-16 md:py-24 text-center flex-grow flex flex-col justify-center z-10">
        
        {/* Bold Geometric Display Header using Sora */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-[#162518] dark:text-white mb-6">
          Track, organize, and
          <br />
          <span className="font-serif italic font-bold text-[#2F5C3B] dark:text-[#4FA367] pr-2">
            accelerate
          </span>{" "}
          your job search.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#4E6150] dark:text-[#A6B5A8] max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          A clean, environmental workspace to track your active applications, calculate metrics, and grow your career. Simple, private, and fast.
        </p>

        {/* Minimalist Bold Pill CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={() => navigate("/register")}
            className="w-full sm:w-auto bg-[#2F5C3B] dark:bg-[#E6EDE7] text-white dark:text-[#0A0E0B] hover:bg-[#24472E] dark:hover:bg-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer text-sm shadow-sm"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full sm:w-auto bg-transparent border border-[#162518]/20 dark:border-white/10 text-[#162518] dark:text-[#E6EDE7] hover:bg-[#162518]/5 dark:hover:bg-white/5 font-bold py-3.5 px-8 rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer text-sm"
          >
            View Dashboard
          </button>
        </div>

        {/* Minimalist Environmental Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left border-t border-[#162518]/5 dark:border-white/5 pt-16">
          
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
          <span className="hover:text-[#162518] dark:hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-[#162518] dark:hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </footer>
    </div>
  );
}
