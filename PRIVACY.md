# Privacy Policy for Trackr and Trackr Clipper

**Effective Date:** July 14, 2026

At Trackr, we build software designed to streamline your career journey while fully respecting your privacy. This Privacy Policy details how we handle information in the **Trackr** web application and the **Trackr Clipper** browser extension.

---

## 1. Overview
Trackr is a private, user-authenticated job application tracking platform. By design, your data is securely stored in your personal database instance (configured via Supabase/PostgreSQL). We do not run background telemetry, track your global web usage, or monetize your information.

## 2. Information We Collect
To operate the service, the application collects and stores:
*   **Account Credentials:** Your email address, first name, last name, and a securely salted password hash (encrypted using bcrypt) to authenticate your login sessions.
*   **Job Tracker Data:** Information you explicitly choose to record, including role titles, company names, job posting URLs, note descriptions, and application statuses.

## 3. Data Handled by the Chrome Extension
The **Trackr Clipper** extension is designed with a single, narrow purpose to pre-fill job application forms.
*   **Active Tab Scrapes:** When you click the extension popup on a supported job site (e.g., LinkedIn), the extension reads the active page's DOM to extract the company name, job title, and listing URL. This processing happens entirely locally on your device.
*   **Local Storage:** The extension stores your secure JSON Web Token (JWT) locally inside `chrome.storage.local` to keep you logged in.
*   **Data Sharing:** The extension communicates only with your specified secure Trackr API backend (`vercel.app` or local server) to POST the clipped job. It does not track your general browsing history or share data with any third-party services.

## 4. How We Use Your Data
We use your data solely to:
*   Authenticate and authorize your secure dashboard login sessions.
*   Display, analyze, and manage your active job applications on your dashboard.

**We do not sell, rent, trade, or distribute your personal information or application data to recruiters, marketers, or any third parties.**

## 5. Security & Encryption
*   All communications between the browser, extension, and backend are encrypted in transit via standard HTTPS.
*   Passwords are hashed on the database server.
*   Database tables are strictly separated by unique user IDs to ensure absolute data isolation.

## 6. Access and Deletion
You retain complete ownership of your data:
*   Deleting a job card on the dashboard or Kanban board immediately and permanently purges that record from the database.
*   To wipe all account information, you can remove your account profile from the database directly.

## 7. Contact & Support
If you have any questions or want to host your own version of this software, please visit our open-source repository at [GitHub](https://github.com/iamsmith21/Trackr).
