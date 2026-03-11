'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      setIsLoading(true); // Start loading state for button feedback
      setTimeout(() => {
        router.push('/dashboard'); // Simulate navigation delay for realistic UX
      }, 600);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 font-sans overflow-hidden">
      {/* BACKGROUND LAYER: Full-screen university imagery with darkened filter */}
      <div
        className="absolute inset-0 z-0 bg-[#0054A6] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/arellano.webp')",
          filter: 'brightness(0.5) contrast(1.1)',
        }}
      />

      {/* LOGIN CARD CONTAINER: The main white box housing the form */}
      <div className="relative z-10 max-w-md w-full bg-white rounded-[20px] shadow-2xl p-10 md:p-14">
        {/* HEADER SECTION: Logo and School Branding */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <img
              src="/LOGO.png"
              alt="School Logo"
              className="h-28 w-auto object-contain"
            />
          </div>

          <h1 className="text-[28px] font-bold tracking-tight text-[#1B2559] leading-tight mb-1">
            Arellano University
          </h1>

          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            LMS PORTAL
          </p>
        </div>

        {/* LOGIN FORM: Handles credential submission */}
        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >
          {/* EMAIL INPUT FIELD: Required field with custom focus states */}
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-700 ml-1">
              Email Address
            </label>

            <input
              type="email"
              required
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all shadow-sm"
              placeholder="admin@arellano.edu.ph"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD INPUT FIELD: Required field with hidden characters */}
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-700 ml-1">
              Password
            </label>

            <input
              type="password"
              required
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all shadow-sm"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* SUBMIT BUTTON: Dynamically disables if inputs are empty; shows loading spinner */}
          <button
            type="submit"
            disabled={!email || !password}
            className={`w-full py-4 mt-2 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-3
            ${
              !email || !password
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-[#0054A6] text-white hover:bg-[#003E7A] active:scale-[0.98]'
            }`}
          >
            Sign In
            {isLoading && (
              <div className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
            )}
          </button>
        </form>

        {/* FORGOT PASSWORD: Secondary action link */}
        <div className="mt-10 text-center">
          <button
            type="button"
            className="text-[11px] font-black text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
          >
            FORGOT PASSWORD?
          </button>
        </div>
      </div>
    </div>
  );
}
