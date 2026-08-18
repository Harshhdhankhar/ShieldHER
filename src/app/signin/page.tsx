'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart, Lock, Mail, Eye, EyeOff, Shield } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const EASE = [0.22, 0.61, 0.36, 1] as const;

export default function SignInPage() {
  const { login } = useAuth();
  const reduce = useReducedMotion();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email);
  };

  return (
    <div
      className="min-h-screen bg-[#F5F0E8] text-[#202020] flex flex-col justify-between selection:bg-[#F3A9BC] relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 85% 15%, rgba(243, 169, 188, 0.35) 0%, transparent 50%),
          radial-gradient(ellipse at 15% 85%, rgba(244, 229, 140, 0.3) 0%, transparent 45%),
          linear-gradient(rgba(122, 41, 72, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(122, 41, 72, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 28px 28px, 28px 28px',
      }}
    >
      {/* Top Brand Header */}
      <header className="px-6 py-5 border-b-2 border-[#202020] bg-[#FFFDF9]/80 backdrop-blur-xs relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-sans text-2xl font-extrabold tracking-tight text-[#202020]">
            shield<span className="font-editorial-serif italic font-normal text-[#7A2948]">HER</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#B63A5B] ml-1 align-baseline" />
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-1.5 bg-[#FFFDF9] hover:bg-[#F4E58C] text-[#7A2948] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full border-2 border-[#202020] shadow-[2px_2px_0px_#202020] transition-all"
          >
            <span>Create Account</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Main Sign In Form Stage */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-center relative z-10">
        <div className="max-w-md w-full">
          
          {/* Header text */}
          <div className="text-center space-y-2 mb-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] rounded-full px-3.5 py-1 shadow-[3px_3px_0px_#202020] -rotate-1 cursor-default"
            >
              <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC]" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
                WELCOME BACK
              </span>
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
              className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#202020] leading-[0.88]"
            >
              GOOD TO SEE
              <span className="block font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.08em] mt-0.5">
                you again. ♡
              </span>
            </motion.h1>

            <p className="text-xs sm:text-sm font-extrabold text-[#202020]/75 max-w-xs mx-auto pt-1">
              Sign in to access your active Safety Circle and live journey protection.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-6 sm:p-7 shadow-[6px_8px_0px_#1d1d1d] relative"
          >
            {/* Washi Tape Scrap */}
            <div
              className="absolute -top-3 right-8 w-16 h-5 bg-[#F3A9BC] border border-[#202020]/40 rotate-2 shadow-xs pointer-events-none"
              aria-hidden="true"
            />

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-[#202020] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A2948]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FAF7F0] border-2 border-[#202020] text-sm font-bold text-[#202020] placeholder:text-[#202020]/40 focus:outline-none focus:bg-[#FFFDF9] shadow-[2px_2px_0px_#202020] transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-[11px] font-black uppercase tracking-wider text-[#202020]">
                    Password
                  </label>
                  <a href="#" className="text-[11px] font-extrabold text-[#7A2948] hover:underline">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A2948]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-10 py-3 rounded-2xl bg-[#FAF7F0] border-2 border-[#202020] text-sm font-bold text-[#202020] placeholder:text-[#202020]/40 focus:outline-none focus:bg-[#FFFDF9] shadow-[2px_2px_0px_#202020] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7A2948] hover:text-[#202020] cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full mt-2 py-3.5 px-6 rounded-2xl bg-[#7A2948] hover:bg-[#5E1F36] text-[#FFFDF9] font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#202020] shadow-[4px_4px_0px_#1d1d1d] hover:shadow-[6px_6px_0px_#1d1d1d] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#F3A9BC] text-[#F3A9BC] group-hover:scale-125 transition-transform" />
                <span>SIGN IN TO SHIELDHER</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-[#202020]/20 w-full" />
              <span className="bg-[#FFFDF9] px-3 text-[10px] font-black uppercase tracking-widest text-[#7A2948] relative">
                or
              </span>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={() => login('harsh@shieldher.app')}
              className="w-full py-2.5 px-4 rounded-2xl bg-[#FAF7F0] hover:bg-[#F4E58C] border-2 border-[#202020] text-xs font-black text-[#202020] shadow-[2px_2px_0px_#202020] hover:shadow-[3px_3px_0px_#202020] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs font-extrabold text-[#7A2948]">
        shieldHER · always connected, never alone ♡
      </footer>
    </div>
  );
}
