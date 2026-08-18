'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Lock, Mail, User, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const EASE = [0.22, 0.61, 0.36, 1] as const;

export default function SignUpPage() {
  const { signup } = useAuth();
  const reduce = useReducedMotion();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    signup(name, email);
  };

  return (
    <div
      className="min-h-screen bg-[#F5F0E8] text-[#202020] flex flex-col justify-between selection:bg-[#F3A9BC] relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 15% 15%, rgba(243, 169, 188, 0.35) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 85%, rgba(244, 229, 140, 0.3) 0%, transparent 45%),
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
            href="/signin"
            className="inline-flex items-center gap-1.5 bg-[#FFFDF9] hover:bg-[#F4E58C] text-[#7A2948] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full border-2 border-[#202020] shadow-[2px_2px_0px_#202020] transition-all"
          >
            <span>Sign In Instead</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Main Split Content Stage */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* LEFT SIDE: EDITORIAL ARTWORK & VALUE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5">
            {/* Pill Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] rounded-full px-4 py-1 shadow-[3px_3px_0px_#202020] -rotate-1 cursor-default"
            >
              <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC]" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
                JOIN THE SAFETY NETWORK
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
              className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#202020] leading-[0.85]"
            >
              LET'S MAKE SURE
              <span className="block font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.08em] mt-1">
                someone's got you. ♡
              </span>
            </motion.h1>

            <p className="text-sm sm:text-base font-extrabold text-[#202020]/80 leading-relaxed max-w-md">
              Create your free ShieldHER account to build your private Safety Circle, receive automated check-in triggers, and never commute with anxiety.
            </p>

            {/* Left Polaroid & Community Reassurance Scrap */}
            <div className="relative pt-3 hidden sm:flex items-center gap-4">
              <figure className="bg-[#FFFDF9] border-2 border-[#202020] rounded-xs p-2 pb-3 shadow-[4px_4px_0px_#1d1d1d] w-36 rotate-[-2deg] shrink-0">
                <div className="relative aspect-square w-full overflow-hidden border border-[#202020]/20 bg-[#FAF7F2]">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=82&w=400"
                    alt="Friends looking out for each other"
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-center font-editorial-serif italic text-[11px] text-[#7A2948] mt-1">
                  our people ♡
                </figcaption>
              </figure>

              <div className="space-y-1.5 text-xs font-black text-[#7A2948]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E7B62]" />
                  <span>100% Free Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E7B62]" />
                  <span>Zero Surveillance & No Ads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E7B62]" />
                  <span>Encrypted SOS Protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SIGN UP FORM CARD */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
              className="w-full max-w-md bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-6 sm:p-8 shadow-[8px_10px_0px_#1d1d1d] relative"
            >
              {/* Washi Tape Scrap */}
              <div
                className="absolute -top-3.5 right-8 w-20 h-5 bg-[#F4E58C] border border-[#202020]/40 -rotate-2 shadow-xs pointer-events-none"
                aria-hidden="true"
              />

              <div className="pb-4 border-b border-[#202020]/15 mb-4">
                <h2 className="text-lg font-black text-[#202020] uppercase tracking-tight">
                  Create Your Account
                </h2>
                <p className="text-xs font-bold text-[#7A2948] mt-0.5">
                  Takes less than 30 seconds · No credit card required
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-[#202020] mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A2948]" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Riya Sen"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FAF7F0] border-2 border-[#202020] text-sm font-bold text-[#202020] placeholder:text-[#202020]/40 focus:outline-none focus:bg-[#FFFDF9] shadow-[2px_2px_0px_#202020] transition-all"
                    />
                  </div>
                </div>

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
                  <label className="block text-[11px] font-black uppercase tracking-wider text-[#202020] mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A2948]" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FAF7F0] border-2 border-[#202020] text-sm font-bold text-[#202020] placeholder:text-[#202020]/40 focus:outline-none focus:bg-[#FFFDF9] shadow-[2px_2px_0px_#202020] transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full mt-2 py-3.5 px-6 rounded-2xl bg-[#7A2948] hover:bg-[#5E1F36] text-[#FFFDF9] font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#202020] shadow-[4px_4px_0px_#1d1d1d] hover:shadow-[6px_6px_0px_#1d1d1d] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-[#F3A9BC] text-[#F3A9BC] group-hover:scale-125 transition-transform" />
                  <span>START MY SAFE CIRCLE</span>
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

              {/* Google Sign Up */}
              <button
                type="button"
                onClick={() => signup('Riya Sen', 'riya@shieldher.app')}
                className="w-full py-2.5 px-4 rounded-2xl bg-[#FAF7F0] hover:bg-[#F4E58C] border-2 border-[#202020] text-xs font-black text-[#202020] shadow-[2px_2px_0px_#202020] hover:shadow-[3px_3px_0px_#202020] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Sign up with Google</span>
              </button>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs font-extrabold text-[#7A2948]">
        shieldHER · always connected, never alone ♡
      </footer>
    </div>
  );
}
