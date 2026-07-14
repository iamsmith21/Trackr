import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 dark:text-[#4E6150] mb-8 font-medium">
            Effective Date: July 14, 2026
          </p>

          <div className="space-y-6 text-sm text-[#4E6150] dark:text-[#A6B5A8] leading-relaxed">
            <p>
              At Trackr, we build software designed to streamline your career journey while fully respecting your privacy. This Privacy Policy details how we handle information in the <strong>Trackr</strong> web application and the <strong>Trackr Clipper</strong> browser extension.
            </p>

            <hr className="border-[#162518]/5 dark:border-white/5" />

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                1. Overview
              </h2>
              <p>
                Trackr is a private, user-authenticated job application tracking platform. By design, your data is securely stored in your database instance. We do not run background telemetry, track your global web usage, or monetize your information.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                2. Information We Collect
              </h2>
              <p className="mb-2">
                To operate the service, the application collects and stores:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Account Credentials:</strong> Your email address, first name, last name, and a securely salted password hash (encrypted using bcrypt) to authenticate your login sessions.
                </li>
                <li>
                  <strong>Job Tracker Data:</strong> Information you explicitly choose to record, including role titles, company names, job posting URLs, note descriptions, and application statuses.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                3. Data Handled by the Chrome Extension
              </h2>
              <p className="mb-2">
                The <strong>Trackr Clipper</strong> extension is designed with a single, narrow purpose to pre-fill job application forms:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Active Tab Scrapes:</strong> When you click the extension popup on a supported job site (e.g., LinkedIn), the extension reads the active page's DOM to extract the company name, job title, and listing URL. This processing happens entirely locally on your device.
                </li>
                <li>
                  <strong>Local Storage:</strong> The extension stores your secure JSON Web Token (JWT) locally inside <code>chrome.storage.local</code> to keep you logged in.
                </li>
                <li>
                  <strong>Data Sharing:</strong> The extension communicates only with your specified secure Trackr API backend to POST the clipped job. It does not track your general browsing history or share data with any third-party services.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                4. How We Use Your Data
              </h2>
              <p className="mb-2">
                We use your data solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Authenticate and authorize your secure dashboard login sessions.</li>
                <li>Display, analyze, and manage your active job applications on your dashboard.</li>
              </ul>
              <p className="mt-2 font-semibold text-[#2F5C3B] dark:text-[#4FA367]">
                We do not sell, rent, trade, or distribute your personal information or application data to recruiters, marketers, or any third parties.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                5. Security & Encryption
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>All communications between the browser, extension, and backend are encrypted in transit via standard HTTPS.</li>
                <li>Passwords are securely hashed on the database server.</li>
                <li>Database tables are strictly separated by unique user IDs to ensure absolute data isolation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                6. Access and Deletion
              </h2>
              <p>
                You retain complete ownership of your data: Deleting a job card on the dashboard or Kanban board immediately and permanently purges that record from the database.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#162518] dark:text-white mb-2">
                7. Open Source & Self-Hosting
              </h2>
              <p>
                If you have any questions or want to host your own version of this software, please visit our open-source repository at <a href="https://github.com/iamsmith21/Trackr" target="_blank" rel="noreferrer" className="text-[#2F5C3B] dark:text-[#81C784] hover:underline font-medium">GitHub</a>.
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
