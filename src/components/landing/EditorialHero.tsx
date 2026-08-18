'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Battery, Clock, GraduationCap, Heart, Home, MapPin, Train, Eye } from 'lucide-react';

const ease = [0.22, 0.61, 0.36, 1] as const;

export function EditorialHero() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !stageRef.current) return;
    const box = stageRef.current.getBoundingClientRect();
    const mx = (event.clientX - box.left) / box.width - 0.5;
    const my = (event.clientY - box.top) / box.height - 0.5;
    stageRef.current.style.setProperty('--mx', String(mx));
    stageRef.current.style.setProperty('--my', String(my));
  };

  const handleMouseLeave = () => {
    if (!stageRef.current) return;
    stageRef.current.style.setProperty('--mx', '0');
    stageRef.current.style.setProperty('--my', '0');
  };

  return (
    <section
      className="editorial-hero-container relative overflow-hidden border-b-2 border-[#202020] bg-[#F5F0E8] select-none h-[calc(100svh-5rem)] min-h-[600px] max-h-[920px]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(122, 41, 72, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(122, 41, 72, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '28px 28px',
      }}
    >
      <div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full max-w-[1480px] mx-auto px-3 sm:px-6 lg:px-8 flex flex-col lg:block overflow-hidden"
      >
        {/* =========================================================================
            MAP BACKGROUND VECTOR LAYER (Right 28%)
            ========================================================================= */}
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-[28%] pointer-events-none z-0 opacity-40"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 15%, #000 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 15%, #000 100%)',
          }}
          aria-hidden="true"
        >
          {/* City blocks & buildings */}
          <div className="absolute inset-0">
            <div className="absolute top-[8%] left-[20%] w-[32%] h-[12%] border border-[#7A2948]/20 bg-[#E6DED2]/50 rounded-xs rotate-[-2deg]" />
            <div className="absolute top-[6%] right-[10%] w-[32%] h-[14%] border border-[#7A2948]/20 bg-[#E6DED2]/50 rounded-xs rotate-[2deg]" />
            <div className="absolute top-[24%] left-[12%] w-[36%] h-[15%] border border-[#7A2948]/20 bg-[#E6DED2]/50 rounded-xs rotate-[1deg]" />
            <div className="absolute top-[25%] right-[6%] w-[38%] h-[16%] border border-[#7A2948]/20 bg-[#E6DED2]/50 rounded-xs rotate-[-2deg]" />
            <div className="absolute top-[46%] left-[10%] w-[35%] h-[16%] border border-[#7A2948]/20 bg-[#E6DED2]/50 rounded-xs rotate-[-1deg]" />
            <div className="absolute top-[47%] right-[8%] w-[40%] h-[18%] border border-[#7A2948]/20 bg-[#E6DED2]/50 rounded-xs rotate-[3deg]" />
            <div className="absolute bottom-[12%] left-[8%] w-[38%] h-[18%] border border-[#7A2948]/20 bg-[#E6DED2]/50 rounded-xs rotate-[2deg]" />
            <div className="absolute bottom-[8%] right-[8%] w-[42%] h-[20%] border border-[#7A2948]/20 bg-[#E6DED2]/50 rounded-xs rotate-[-2deg]" />

            {/* Subtle Parks */}
            <div className="absolute top-[38%] left-[45%] w-12 h-14 rounded-xl bg-[#D6E8DC]/50 border border-[#4E7B62]/20 rotate-6" />
            <div className="absolute bottom-[26%] right-[28%] w-14 h-16 rounded-2xl bg-[#D6E8DC]/50 border border-[#4E7B62]/20 -rotate-3" />

            {/* Trees */}
            <div className="absolute top-[16%] left-[40%] w-2.5 h-2.5 rounded-full bg-[#4E7B62]/45" />
            <div className="absolute top-[40%] left-[50%] w-3 h-3 rounded-full bg-[#4E7B62]/45" />
            <div className="absolute top-[68%] right-[25%] w-2.5 h-2.5 rounded-full bg-[#4E7B62]/45" />
          </div>

          {/* Street Grid Vectors */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 450 780" fill="none">
            <path d="M 30 110 L 430 150" stroke="#8C8174" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
            <path d="M 20 260 L 440 290" stroke="#8C8174" strokeWidth="1.8" opacity="0.5" />
            <path d="M 30 440 L 430 470" stroke="#8C8174" strokeWidth="2" opacity="0.6" />
            <path d="M 15 620 L 440 650" stroke="#8C8174" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.5" />
            <path d="M 120 30 L 140 760" stroke="#8C8174" strokeWidth="2" opacity="0.5" />
            <path d="M 260 20 L 240 770" stroke="#8C8174" strokeWidth="2.5" opacity="0.6" />
            <path d="M 380 40 L 360 750" stroke="#8C8174" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>

        {/* =========================================================================
            MAP ROUTE SVG (Right 22%)
            ========================================================================= */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[22%] pointer-events-none z-10">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 280 700"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <filter id="routeShadowHero" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="3" stdDeviation="1.5" floodColor="#202020" floodOpacity="0.22" />
              </filter>
            </defs>

            {/* Organic burgundy route */}
            <motion.path
              d="M 50 45 C 20 95, 105 155, 130 215 C 155 275, 85 345, 105 415 C 125 485, 185 520, 170 620"
              stroke="#7A2948"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#routeShadowHero)"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
            />

            {/* Checkpoint 1: Campus */}
            <circle cx="50" cy="45" r="7.5" fill="#FFFDF9" stroke="#7A2948" strokeWidth="3.5" />
            <circle cx="50" cy="45" r="3.5" fill="#7A2948" />

            {/* Checkpoint 2: Metro */}
            <circle cx="130" cy="215" r="7.5" fill="#FFFDF9" stroke="#7A2948" strokeWidth="3.5" />
            <circle cx="130" cy="215" r="3.5" fill="#7A2948" />

            {/* Checkpoint dot near home */}
            <circle cx="168" cy="615" r="6" fill="#F3A9BC" stroke="#7A2948" strokeWidth="2.5" />
          </svg>
        </div>

        {/* =========================================================================
            ZONE 1: LEFT SIDE — FRIENDSHIP & GROUP CHAT FRAGMENTS (Width: 20%)
            ========================================================================= */}
        <div className="hidden lg:block absolute top-0 left-0 w-[20%] h-full pointer-events-none z-20">
          {/* MOM Message Card (Top Left) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -1.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="absolute top-[6%] left-[4%] pointer-events-auto animate-float-1"
          >
            <div className="relative group cursor-default">
              <div className="absolute -top-3 -right-2.5 text-[#202020] text-xs font-black tracking-widest pointer-events-none rotate-12 transition-transform group-hover:scale-125">
                \ | /
              </div>
              <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-xl px-3.5 py-2 shadow-[4px_4px_0px_#1d1d1d] group-hover:shadow-[6px_6px_0px_#1d1d1d] group-hover:-translate-y-0.5 transition-all duration-200 min-w-[11rem]">
                <div className="flex items-center justify-between text-[8.5px] uppercase font-black tracking-[0.14em] text-[#7A2948]">
                  <span>MOM · 7:42 PM</span>
                </div>
                <div className="mt-0.5 font-extrabold text-[0.8rem] text-[#202020]">
                  call when you reach ♡
                </div>
              </div>
            </div>
          </motion.div>

          {/* YOU Reply Card (Mid Left) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="absolute top-[23%] left-[3%] pointer-events-auto animate-float-2"
          >
            <div className="relative group cursor-default">
              <div className="absolute -top-2.5 -left-2.5 text-[#B63A5B] text-xs font-black rotate-[-20deg] pointer-events-none transition-transform group-hover:scale-125">
                \ | /
              </div>
              <div className="bg-[#F4E58C] border-2 border-[#202020] rounded-xl px-3.5 py-2 shadow-[4px_4px_0px_#1d1d1d] group-hover:shadow-[6px_6px_0px_#1d1d1d] group-hover:-translate-y-0.5 transition-all duration-200 min-w-[8.5rem]">
                <div className="text-[8.5px] uppercase font-black tracking-[0.14em] text-[#7A2948]">
                  YOU · 7:43 PM
                </div>
                <div className="mt-0.5 font-extrabold text-[0.8rem] text-[#202020] flex items-center justify-between gap-2">
                  <span>5 mins</span>
                  <span className="text-[#7A2948] font-black">✓✓</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dotted Arrow Path connecting YOU to alone. */}
          <svg
            className="absolute top-[28%] left-[14%] w-[12rem] h-[6rem] pointer-events-none z-15 overflow-visible opacity-75"
            viewBox="0 0 180 80"
            fill="none"
          >
            <path
              d="M 10 18 C 45 55, 110 65, 165 20"
              stroke="#7A2948"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M 158 16 L 168 22 L 162 30"
              stroke="#7A2948"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Polaroid Friendship Photo (Bottom Left) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="absolute bottom-[2%] left-[3%] pointer-events-auto"
          >
            <figure className="group relative bg-[#FFFDF9] border-2 border-[#202020] rounded-xs p-2.5 pb-5 shadow-[5px_6px_0px_#1d1d1d] hover:shadow-[8px_9px_0px_#1d1d1d] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 w-[14rem] cursor-default">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#F4E58C] border border-[#202020]/40 rotate-[-2deg] shadow-xs z-20 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/2.9] w-full overflow-hidden border border-[#202020]/25 bg-[#FAF7F2]">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=82&w=900"
                  alt="Friends group"
                  fill
                  sizes="14rem"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <figcaption className="absolute bottom-1 inset-x-0 text-center font-editorial-serif italic text-sm text-[#7A2948]">
                our people ♡
              </figcaption>
            </figure>

            {/* GIRLS CHAT Attached Card */}
            <div className="absolute -bottom-2 -right-4 z-30 bg-[#FFFDF9] border-2 border-[#202020] rounded-xl px-2.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all duration-200 cursor-default">
              <div className="text-[8.5px] font-black uppercase tracking-wider text-[#7A2948]">
                GIRLS CHAT
              </div>
              <div className="text-[9px] font-extrabold text-[#202020] flex items-center gap-1 mt-0.5">
                <span className="text-[#B63A5B] font-black">••• typing...</span>
              </div>
              <div className="text-[8px] font-bold text-[#202020]/70 flex items-center gap-1 mt-0.5">
                <Eye className="w-2.5 h-2.5 text-[#202020]/60" />
                <span>seen by 4</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            ZONE 2: CENTER — DOMINANT CENTERED BRAND STATEMENT (GRAND SCALE)
            ========================================================================= */}
        <div className="relative lg:absolute lg:top-[1.5%] lg:left-1/2 lg:-translate-x-1/2 z-30 w-full lg:w-[64%] max-w-[980px] mx-auto text-center flex flex-col items-center">
          {/* Top Cultural Pill Badge */}
          <div className="relative inline-flex items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.05, ease }}
              className="inline-flex items-center gap-2 bg-[#F3A9BC] text-[#7A2948] border-2 border-[#202020] rounded-full px-5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] -rotate-1 cursor-default hover:rotate-0 hover:scale-105 transition-all"
            >
              <Heart className="w-3.5 h-3.5 fill-[#7A2948] text-[#7A2948] shrink-0" />
              <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.14em]">
                FOR THE “DID YOU GET HOME?” GIRLS ♡
              </span>
            </motion.div>
            <span className="absolute -top-3 -right-5 text-sm text-[#7A2948] rotate-12 pointer-events-none font-editorial-serif">
              ♡
            </span>
          </div>

          {/* Mega Headline — Grand Editorial Scale */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="editorial-main-headline mt-2 sm:mt-3 text-center tracking-tight leading-[0.70]"
          >
            {/* ALWAYS: Huge bold grotesk / sans-serif with pink highlight strip */}
            <div className="relative inline-block">
              <span className="absolute -left-7 top-1/2 -translate-y-1/2 text-base text-[#B63A5B] rotate-[-15deg] pointer-events-none">
                ♥
              </span>
              
              <span
                className="absolute inset-x-[-4%] top-[22%] bottom-[8%] bg-[#F3A9BC] -rotate-0.5 -z-10 rounded-xs pointer-events-none"
                aria-hidden="true"
              />

              <span className="font-sans font-extrabold uppercase text-[#202020] text-[clamp(7.2rem,11.5vw,10.6rem)] leading-[0.70] tracking-[-0.04em]">
                ALWAYS
              </span>

              <span className="absolute -right-9 top-1.5 text-lg sm:text-xl text-[#7A2948] rotate-12 pointer-events-none font-serif">
                ✧
              </span>
            </div>

            {/* connected, never */}
            <span className="block font-editorial-serif italic font-normal text-[#7A2948] text-[clamp(4.4rem,7.0vw,6.6rem)] leading-[0.76] tracking-tight mt-0.5 sm:mt-1">
              connected, never
            </span>

            {/* alone. + heart doodle + underline */}
            <span className="relative inline-block font-editorial-serif italic font-normal text-[#7A2948] text-[clamp(5.6rem,8.6vw,8.0rem)] leading-[0.74] tracking-tight mt-0.5">
              alone.
              <span className="inline-block ml-2 text-[0.65em] text-[#7A2948] font-normal not-italic align-middle">
                ♡
              </span>
              <svg
                className="absolute -bottom-2 sm:-bottom-2.5 inset-x-[-5%] w-[110%] h-4 text-[#7A2948] pointer-events-none overflow-visible"
                viewBox="0 0 220 16"
                fill="none"
              >
                <path
                  d="M 4 11 C 60 4, 140 4, 216 11"
                  stroke="currentColor"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease }}
            className="mt-6 sm:mt-7 text-[#202020] font-extrabold text-sm sm:text-[1.12rem] leading-snug max-w-lg"
          >
            Your people. Your journey.
            <br />
            Your community — right there when you need them.
          </motion.p>

          {/* Action CTAs — Pushed Lower with Generous Spacing */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:mt-8"
          >
            {/* START MY CIRCLE */}
            <button
              type="button"
              onClick={() => router.push('/signup')}
              className="group inline-flex items-center gap-2.5 bg-[#7A2948] hover:bg-[#5E1F36] text-[#FFFDF9] font-black text-xs sm:text-sm uppercase tracking-wider px-8 sm:px-9 py-4 rounded-full border-2 border-[#202020] shadow-[4px_4px_0px_#1d1d1d] hover:shadow-[6px_6px_0px_#1d1d1d] hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-[#F3A9BC] text-[#F3A9BC] group-hover:scale-125 transition-transform" />
              <span>START MY CIRCLE</span>
              <Heart className="w-4 h-4 fill-[#F3A9BC] text-[#F3A9BC] group-hover:scale-125 transition-transform" />
            </button>

            {/* SEE HOW IT WORKS */}
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('group-chat') || document.getElementById('did-you-get-home');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 bg-[#F4E58C] hover:bg-[#EBD96B] text-[#202020] font-black text-xs sm:text-sm uppercase tracking-wider px-8 sm:px-9 py-4 rounded-full border-2 border-[#202020] shadow-[4px_4px_0px_#1d1d1d] hover:shadow-[6px_6px_0px_#1d1d1d] hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>SEE HOW IT WORKS</span>
              <ArrowRight className="w-4 h-4 text-[#202020] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>

          {/* Under CTA details: Hand annotation + HOME badge */}
          <div className="relative w-full flex items-center justify-between mt-4 sm:mt-5 px-2 sm:px-8">
            {/* Left: Free to get started with hand arrow */}
            <div className="flex items-center gap-1 font-editorial-serif italic text-xs sm:text-sm text-[#7A2948]">
              <span className="text-sm rotate-[-30deg] inline-block font-sans">↱</span>
              <span>it’s free to get started! ♡</span>
            </div>

            {/* Right: Small YOU 8:06 PM HOME card with pink bursts */}
            <div className="relative group cursor-default">
              <div className="absolute -top-2.5 -right-3 text-[#F3A9BC] text-xs font-black rotate-12 pointer-events-none group-hover:scale-125 transition-transform">
                \ | /
              </div>
              <div className="bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] rounded-xl px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] group-hover:shadow-[4px_4px_0px_#1d1d1d] group-hover:-translate-y-0.5 transition-all duration-200 text-left">
                <div className="text-[8px] font-black tracking-widest uppercase text-[#F3A9BC]">
                  YOU · 8:06 PM
                </div>
                <div className="text-xs font-black tracking-wider text-[#FFFDF9] flex items-center gap-1">
                  <span>HOME</span>
                  <span className="text-[#F3A9BC]">♡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ZONE 3: RIGHT SIDE — LIVE JOURNEY MAP (Width: 22%, Pinned to Right)
            ========================================================================= */}
        <div className="hidden lg:block absolute top-0 right-0 w-[22%] h-full pointer-events-none z-20">
          {/* RIYA pink chat bubble (In Open Space to the Left of Route Top) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="absolute top-[8%] left-[-12%] pointer-events-auto animate-float-3"
          >
            <div className="relative group cursor-default">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-[#7A2948] font-editorial-serif pointer-events-none group-hover:scale-125 transition-transform">
                ♡
              </div>
              <div className="bg-[#F3A9BC] border-2 border-[#202020] rounded-2xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] group-hover:shadow-[5px_5px_0px_#1d1d1d] group-hover:-translate-y-0.5 transition-all duration-200">
                <div className="text-[8.5px] font-black uppercase tracking-[0.14em] text-[#7A2948]">
                  RIYA · 7:43 PM
                </div>
                <div className="text-[10.5px] font-extrabold text-[#202020]">
                  where are youuu
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Right Status Indicators */}
          <div className="absolute top-[4%] right-[3%] flex flex-col items-end gap-1 pointer-events-auto">
            <div className="flex items-center gap-1.5">
              <span className="bg-[#F4E58C] border border-[#202020] rounded-md px-1.5 py-0.5 text-[8.5px] font-extrabold text-[#202020] flex items-center gap-1 shadow-xs hover:scale-105 transition-transform">
                <Clock className="w-2.5 h-2.5" /> 7:42 PM
              </span>
              <span className="bg-[#F4E58C] border border-[#202020] rounded-md px-1.5 py-0.5 text-[8.5px] font-extrabold text-[#202020] flex items-center gap-1 shadow-xs hover:scale-105 transition-transform">
                <Battery className="w-2.5 h-2.5" /> 18%
              </span>
            </div>
            <div className="bg-[#C9DFEA] border border-[#202020] rounded-md px-1.5 py-0.5 text-[8.5px] font-extrabold text-[#202020] shadow-xs hover:scale-105 transition-transform">
              location shared ♡
            </div>
            <div className="flex items-center gap-1 font-editorial-serif italic text-[11px] text-[#7A2948] mt-0.5">
              <span className="text-xs font-sans rotate-[-45deg] inline-block">⤷</span>
              <span>she always asks ♡</span>
            </div>
          </div>

          {/* STOP 1: CAMPUS (Top node) */}
          <div className="absolute top-[4%] left-[26%] pointer-events-auto">
            <div className="flex items-start gap-1.5 group cursor-default">
              <div className="leading-tight">
                <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#202020] group-hover:text-[#7A2948] transition-colors">
                  <span>CAMPUS</span>
                  <GraduationCap className="w-3 h-3 text-[#202020]" />
                </div>
                <div className="text-[9px] font-extrabold text-[#202020]/75">
                  7:42 PM
                </div>
                <div className="font-editorial-serif italic text-[10.5px] text-[#7A2948]">
                  leaving campus
                </div>
              </div>
            </div>
          </div>

          {/* STOP 2: METRO 🚇 */}
          <div className="absolute top-[26%] left-[48%] pointer-events-auto">
            <div className="flex items-start gap-1.5 group cursor-default">
              <div className="leading-tight">
                <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#202020] group-hover:text-[#7A2948] transition-colors">
                  <span>METRO</span>
                  <Train className="w-3 h-3 text-[#202020]" />
                </div>
                <div className="text-[9px] font-extrabold text-[#202020]/75">
                  7:55 PM
                </div>
                <div className="font-editorial-serif italic text-[10.5px] text-[#7A2948]">
                  on the way
                </div>
              </div>
            </div>
          </div>

          {/* USER AVATAR (on the route around middle) */}
          <div className="absolute top-[37%] left-[34%] pointer-events-auto">
            <div className="relative group cursor-default">
              <div className="w-8.5 h-8.5 rounded-full border-2 border-[#202020] overflow-hidden bg-[#F4E58C] shadow-[3px_3px_0px_#1d1d1d] group-hover:scale-110 transition-transform">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=96"
                  alt="You, travelling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-[#F3A9BC]/40 animate-ping pointer-events-none" />
            </div>
          </div>

          {/* WATCHER PILLS (Attached inside right zone - NO bleed!) */}
          {/* Pill 1: RIYA */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.35, ease }}
            className="absolute top-[41%] left-[2%] pointer-events-auto"
          >
            <div className="group bg-[#FFFDF9] border-1.5 border-[#202020] rounded-xl px-2 py-1 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-default">
              <div className="relative w-4.5 h-4.5 rounded-full border border-[#202020] overflow-hidden bg-[#F3A9BC] shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=64"
                  alt="Riya"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="text-[8px] font-black uppercase tracking-wider text-[#7A2948]">RIYA</div>
                <div className="text-[8px] font-bold text-[#202020]">watching your journey ♡</div>
              </div>
            </div>
          </motion.div>

          {/* Pill 2: MOM */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.45, ease }}
            className="absolute top-[49%] left-[4%] pointer-events-auto"
          >
            <div className="group bg-[#FFFDF9] border-1.5 border-[#202020] rounded-xl px-2 py-1 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-default">
              <div className="relative w-4.5 h-4.5 rounded-full border border-[#202020] overflow-hidden bg-[#F4E58C] shrink-0 flex items-center justify-center font-bold text-[8px] text-[#7A2948]">
                M
              </div>
              <div className="leading-tight">
                <div className="text-[8px] font-black uppercase tracking-wider text-[#7A2948]">MOM</div>
                <div className="text-[8px] font-bold text-[#202020]">watching</div>
              </div>
            </div>
          </motion.div>

          {/* Pill 3: YOUR PEOPLE */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.55, ease }}
            className="absolute top-[57%] left-[6%] pointer-events-auto"
          >
            <div className="group bg-[#FFFDF9] border-1.5 border-[#202020] rounded-xl px-2 py-1 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-default">
              <div className="flex -space-x-1.5">
                <span className="w-4 h-4 rounded-full border border-[#202020] bg-[#F3A9BC] inline-block" />
                <span className="w-4 h-4 rounded-full border border-[#202020] bg-[#F4E58C] inline-block" />
                <span className="w-4 h-4 rounded-full border border-[#202020] bg-[#C9DFEA] inline-block" />
              </div>
              <div className="leading-tight">
                <div className="text-[8px] font-black uppercase tracking-wider text-[#7A2948]">YOUR PEOPLE</div>
                <div className="text-[8px] font-bold text-[#202020]">2 watching</div>
              </div>
            </div>
          </motion.div>

          {/* NEARBY MEMBERS RADAR DOTS */}
          <div className="absolute bottom-[20%] left-[16%] pointer-events-auto flex flex-col items-center group cursor-default">
            <div className="relative w-12 h-8 flex items-center justify-center">
              <span className="absolute w-6 h-6 rounded-full bg-[#F3A9BC]/50 animate-ping" />
              <span className="absolute w-3 h-3 rounded-full bg-[#B63A5B]" />
              <span className="absolute -left-1 bottom-0.5 w-2 h-2 rounded-full bg-[#F3A9BC] border border-[#202020]" />
              <span className="absolute -right-1 top-0.5 w-2.5 h-2.5 rounded-full bg-[#F3A9BC] border border-[#202020]" />
            </div>
            <span className="text-[8px] font-black text-[#202020] tracking-wider uppercase mt-0.5">
              3 SHIELDHER
            </span>
            <span className="text-[8px] font-bold text-[#202020]/75">
              members nearby
            </span>
          </div>

          {/* HOME DESTINATION MARKER (Visible inside 1 screen) */}
          <div className="absolute bottom-[4%] right-[6%] pointer-events-auto flex items-center gap-2 group cursor-default">
            <div className="relative w-12 h-12 rounded-full bg-[#F4E58C] border-2 border-[#202020] shadow-[4px_4px_0px_#1d1d1d] group-hover:shadow-[6px_6px_0px_#1d1d1d] group-hover:scale-105 transition-all flex items-center justify-center">
              <div className="relative flex flex-col items-center justify-center">
                <MapPin className="w-5.5 h-5.5 fill-[#F3A9BC] text-[#202020] stroke-[1.8]" />
                <Home className="w-2.5 h-2.5 text-[#202020] absolute top-[3.5px] stroke-[2.5]" />
              </div>
            </div>

            <div className="leading-tight">
              <div className="text-xs font-extrabold text-[#202020] flex items-center gap-1">
                <span>HOME</span>
                <span className="text-[#7A2948]">♡</span>
              </div>
              <div className="text-[9.5px] font-extrabold text-[#202020]/75">
                8:06 PM
              </div>
              <div className="font-editorial-serif italic text-[10.5px] text-[#7A2948]">
                safe & sound
              </div>
            </div>
          </div>

          {/* Annotation arrow to HOME */}
          <div className="absolute bottom-[1.5%] left-[12%] flex items-center gap-1.5 font-editorial-serif italic text-xs text-[#7A2948] pointer-events-auto">
            <span>text me when you reach ♡</span>
            <span className="text-sm font-sans rotate-[20deg] inline-block">➔</span>
          </div>
        </div>

        {/* =========================================================================
            MOBILE LAYOUT (< 1024px)
            ========================================================================= */}
        <div className="lg:hidden flex flex-col gap-5 mt-4 w-full">
          <div className="flex flex-col gap-2.5 items-center">
            <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-xl px-3.5 py-2 shadow-[3px_3px_0px_#1d1d1d] w-full max-w-xs">
              <div className="text-[9.5px] uppercase font-black tracking-wider text-[#7A2948]">
                MOM · 7:42 PM
              </div>
              <div className="font-extrabold text-xs text-[#202020] mt-0.5">
                call when you reach ♡
              </div>
            </div>
            <div className="bg-[#F4E58C] border-2 border-[#202020] rounded-xl px-3.5 py-2 shadow-[3px_3px_0px_#1d1d1d] w-full max-w-xs ml-4">
              <div className="text-[9.5px] uppercase font-black tracking-wider text-[#7A2948]">
                YOU · 7:43 PM
              </div>
              <div className="font-extrabold text-xs text-[#202020] flex items-center justify-between mt-0.5">
                <span>5 mins</span>
                <span className="text-[#7A2948] font-black">✓✓</span>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl p-3.5 shadow-[4px_4px_0px_#1d1d1d] space-y-2.5">
            <div className="text-[9.5px] font-black uppercase tracking-[0.16em] text-[#7A2948] flex items-center justify-between border-b border-[#202020]/15 pb-1.5">
              <span>LIVE JOURNEY</span>
              <span className="bg-[#F4E58C] px-2 py-0.5 rounded-full border border-[#202020] text-[8.5px]">● LIVE</span>
            </div>
            
            <div className="space-y-2 pt-0.5">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7A2948]" />
                <div>
                  <div className="text-xs font-black text-[#202020]">CAMPUS 🎓</div>
                  <div className="text-[9.5px] font-bold text-[#7A2948] font-editorial-serif italic">7:42 PM · leaving campus</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7A2948]" />
                <div>
                  <div className="text-xs font-black text-[#202020]">METRO 🚇</div>
                  <div className="text-[9.5px] font-bold text-[#7A2948] font-editorial-serif italic">7:55 PM · on the way</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pl-0.5">
                <div className="w-7 h-7 rounded-full border border-[#202020] overflow-hidden bg-[#F4E58C]">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=96"
                    alt="Travelling"
                    width={28}
                    height={28}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-black text-[#7A2948]">RIYA & MOM</div>
                  <div className="text-[9.5px] font-bold text-[#202020]">watching your journey ♡</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-0.5">
                <div className="w-7 h-7 rounded-full bg-[#F4E58C] border border-[#202020] flex items-center justify-center">
                  <Home className="w-3.5 h-3.5 text-[#202020]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#202020]">HOME ♡</div>
                  <div className="text-[9.5px] font-bold text-[#7A2948] font-editorial-serif italic">8:06 PM · safe & sound</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pb-3">
            <figure className="bg-[#FFFDF9] border-2 border-[#202020] rounded-xs p-2 pb-5 shadow-[4px_4px_0px_#1d1d1d] w-full max-w-[14.5rem]">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#202020]/20">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=82&w=900"
                  alt="Friends group"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-center font-editorial-serif italic text-xs text-[#7A2948] mt-1.5">
                our people ♡
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
