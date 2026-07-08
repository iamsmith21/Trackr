import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await loginUser(email, password);

    if (!data.success) {
      console.log(data.message);
      return;
    }
    localStorage.setItem("token", data.token);
    navigate("/dashboard");
  }

    return (
    <div className="min-h-screen bg-[#EDF3ED] dark:bg-[#0A0E0B] text-[#162518] dark:text-[#E6EDE7] antialiased relative overflow-hidden flex items-center justify-center p-4">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-green-400/10 blur-[130px] pointer-events-none" />

      {/* Main Frosted Glass Card */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-[#162518]/10 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#2F5C3B] dark:bg-[#E6EDE7] flex items-center justify-center text-white dark:text-[#0A0E0B] font-extrabold text-xl shadow-lg shadow-emerald-500/15 mb-4">
            T
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Welcome Back to Trackr
          </h2>
          <p className="text-sm text-slate-500 mt-1.5 font-medium">
            Sign in to manage your job applications
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              type="email"
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm transition-all duration-300 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              type="password"
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm transition-all duration-300 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#2F5C3B] hover:bg-[#24472E] dark:bg-[#E6EDE7] dark:text-[#0A0E0B] dark:hover:bg-white text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-500 mt-6 font-medium">
          Don't have an account?{" "}
          <span 
            onClick={() => navigate("/register")}
            className="text-[#2F5C3B] dark:text-[#81C784] hover:underline cursor-pointer font-semibold"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
