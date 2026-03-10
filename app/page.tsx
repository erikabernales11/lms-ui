'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in to Arellano University Portal...`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/arellano bg.jpg')", // Ensure the file extension matches your folder (.jpg or .png)
          filter: 'brightness(0.6)',
        }}
      />

      <div className="relative z-10 max-w-md w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border border-white/20">
        <div className="text-center mb-8">
          {/* Logo Section */}
          <div className="flex justify-center mb-4">
            <img
              src="/LOGO.png"
              alt="Arellano University Logo"
              className="h-24 w-auto object-contain"
            />
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Arellano University
          </h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">
            Learning Management System
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all text-slate-900"
              placeholder="student.name@arellano.edu.ph"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 ml-1">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all text-slate-900"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform active:scale-95 shadow-lg shadow-blue-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <button className="text-xs font-bold text-slate-400 hover:text-blue-700 transition-colors uppercase tracking-widest">
            Forgot Credentials?
          </button>
        </div>
      </div>
    </div>
  );
}
