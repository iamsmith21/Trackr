# Trackr. 💼

A minimal, privacy-first, and premium job application tracking workspace. Keep your job search pipeline organized, measure interview conversion rates, and clip new roles in one click.

🚀 **[Live Application Dashboard](https://trackr-workspace.vercel.app/)**

---

## 🛠️ Tech Stack
*   **Frontend:** React (Vite), TypeScript, Tailwind CSS, Glassmorphic UI Design
*   **Backend:** Node.js, Express, TypeScript (Serverless Deployment on Vercel)
*   **Database:** Supabase (PostgreSQL), Prisma ORM
*   **Security:** JSON Web Tokens (JWT) for secure session persistence

---

## ✨ Features
1.  **Glassmorphic Kanban Board:** Dynamic drag-and-drop board to manage job pipeline stages (Applied, Interviewing, Offered, Rejected, Ghosted).
2.  **Chrome Extension Clipper:** Scrapes role details, company name, and job posting URLs directly from LinkedIn pages.
3.  **Bento Analytics Panel:** High-fidelity dashboard displaying real-time success stats and radial conversion rate meters.
4.  **Airy List View:** A clean, borderless row table that aggregates application details, application dates, and links.
5.  **Session Persistence:** Securely remembers your profile credentials so you stay logged in dynamically.

---

## 💻 Running Locally

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and a PostgreSQL instance (or Supabase account) set up.

### 2. Database Configuration
Create a `.env` file in the `server/` directory and configure your connection strings:
```ini
DATABASE_URL="your-supabase-connection-string"
JWT_SECRET="your-secure-jwt-secret-key"
```

### 3. Server Setup
```bash
cd server
npm install
npx prisma db push
npm run dev
```

### 4. Client Setup
Configure the environment file `client/.env`:
```ini
VITE_API_URL="http://localhost:3001"
```
Then run the dev server:
```bash
cd client
npm install
npm run dev
```

---

## 🔌 Chrome Extension Setup
1.  Navigate to `chrome://extensions/` in your Chrome browser.
2.  Enable **Developer mode** in the top-right corner.
3.  Click **Load unpacked** in the top-left corner.
4.  Select the `chrome-extension/` directory from this project.
5.  Clip jobs directly from any LinkedIn listing page!

---

## 🛡️ License & Privacy
*   **Open Source:** Feel free to self-host and customize.
*   **Privacy:** Read our public [Privacy Policy](PRIVACY.md).
