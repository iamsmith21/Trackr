import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function TermsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#EDF3ED] dark:bg-[#0A0E0B] text-[#162518] dark:text-[#E6EDE7] antialiased relative overflow-hidden flex flex-col justify-between selection:bg-[#CBE0CE] dark:selection:bg-[#1C2C1E] transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-emerald-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-green-400/5 blur-[130px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="max-w-[1000px] w-full mx-auto px-6 py-6 flex items-center justify-between z-10">
        <Logo />
        <button
          onClick={() => navigate("/")}
          className="text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-full border border-[#162518]/10 dark:border-white/10 text-[#162518] dark:text-[#E6EDE7] hover:bg-[#162518]/5 dark:hover:bg-white/5 transition-all duration-200 active:scale-95 cursor-pointer"
        >
          Back to Home
        </button>
      </header>

      {/* Main Document Content */}
      <main className="max-w-[800px] w-full mx-auto px-6 py-12 flex-grow z-10">
        <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-md border border-[#162518]/5 dark:border-white/5 rounded-3xl p-8 sm:p-12 shadow-xl">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-[#162518] dark:text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 dark:text-[#4E6150] mb-8 font-medium">
            Effective Date: July 14, 2026
          </p>

          <div className="space-y-6 text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
            <p>
              Welcome to Trackr. By accessing our website, using the <strong>Trackr</strong> dashboard, or installing the <strong>Trackr Clipper</strong> Chrome extension, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <hr className="border-[#162518]/5 dark:border-white/5" />

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                These terms govern your use of the Trackr hosted platform and extension. If you do not agree with any part of these terms, please discontinue use of the services immediately.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                2. Public Beta Service
              </h2>
              <p>
                Trackr is currently in public beta. Features may change, be paused, or be updated. We do not guarantee continuous uptime or absolute compatibility with every job board layout, though we strive to maintain clean service stability.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                3. User Account Security
              </h2>
              <p>
                You are responsible for safeguarding your credentials. Passwords are encrypted on our server, but we urge users to employ strong, unique passwords. You are responsible for all activities that occur under your user session.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                4. Self-Hosting & Open Source License
              </h2>
              <p>
                Trackr is open-source software. You are free to fork the codebase, host it on your own server, connect it to your own Supabase instance, and run it locally. Self-hosted instances are governed by the license terms stated in the repository.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                5. Third-Party Websites & APIs
              </h2>
              <p>
                The Trackr Clipper extension interacts with third-party web domains (such as LinkedIn) to extract role descriptions. Trackr is not affiliated with, endorsed by, or responsible for the service guidelines, markup changes, or policies of these external platforms.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                6. Limitation of Liability
              </h2>
              <p className="italic">
                The service is provided "as is" and "as available" without warranties of any kind, express or implied. Under no circumstances shall Trackr or its contributors be liable for any direct, indirect, incidental, or consequential damages resulting from data loss, service outages, or career results.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                7. Beta User Benefits & Upgrades
              </h2>
              <p>
                Any user signing up during the public beta phase is granted lifetime access to all core dashboard features and designated future premium modules (AI cover letters, Gmail syncing, and advanced charts) on our managed cloud version without subscription fees.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="max-w-[1000px] w-full mx-auto px-6 py-8 border-t border-[#162518]/5 dark:border-white/5 text-xs text-slate-400 dark:text-[#4E6150] text-center">
        <span>&copy; {new Date().getFullYear()} Trackr. All rights reserved.</span>
      </footer>
    </div>
  );
}
