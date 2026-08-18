'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Phone, Bell, Users, Navigation, Home, CheckCircle2, Eye, Shield } from 'lucide-react';

const EASE = [0.22, 0.61, 0.36, 1] as const;

export const SafetyCircleSection: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="safety-circle"
      className="relative bg-[#F5F0E8] border-b-2 border-[#202020] text-[#202020] select-none py-10 sm:py-14"
      style={{
        backgroundImage: `
          linear-gradient(rgba(122, 41, 72, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(122, 41, 72, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '28px 28px',
      }}
    >
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* =========================================================================
            ROW 1: HEADLINE (LEFT) + CONNECTED PHONE & SATELLITES (RIGHT)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ======================= LEFT: HEADLINE & EMOTIONAL COPY ======================= */}
          <div className="lg:col-span-5 relative z-10">
            {/* Pill Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] rounded-full px-3.5 py-1 shadow-[3px_3px_0px_#202020] -rotate-1 cursor-default hover:rotate-0 hover:scale-105 transition-all"
            >
              <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC] shrink-0" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
                YOUR INNER CIRCLE
              </span>
            </motion.div>

            {/* Headline — Crisp & Editorial */}
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="mt-2.5 text-[clamp(2.4rem,4.4vw,4.0rem)] leading-[0.82] font-black uppercase tracking-tight text-[#202020]"
            >
              YOUR
              <span className="block font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.12em] tracking-tight mt-0.5">
                people,
              </span>
              <span className="block mt-0.5">WITH</span>
              <span className="relative inline-block mt-0.5">
                YOU.
                <span className="inline-block ml-1.5 text-[0.7em] font-editorial-serif text-[#7A2948] font-normal align-middle">
                  ♡
                </span>
                {/* Pink burst lines behind heart */}
                <span className="absolute -top-2.5 -right-5 text-xs text-[#F3A9BC] font-black rotate-12 pointer-events-none">
                  \ | /
                </span>
              </span>
            </motion.h2>

            {/* Taped Butter-Yellow Note Scrap */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
              className="relative inline-block mt-3.5 sm:mt-4 bg-[#F4E58C] border-2 border-[#202020] rounded-xs px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d]"
            >
              {/* Pink washi tape on left */}
              <div
                className="absolute -top-2 -left-3 w-9 h-3.5 bg-[#F3A9BC] border border-[#202020]/40 rotate-[-12deg] shadow-xs pointer-events-none"
                aria-hidden="true"
              />
              <p className="font-editorial-serif italic text-xs sm:text-sm text-[#7A2948]">
                “the ones who’d actually pick up at 2am. ♡”
              </p>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
              className="mt-3.5 max-w-sm"
            >
              <p className="text-sm sm:text-base font-extrabold text-[#202020] leading-snug">
                They don’t need to constantly ask where you are.
              </p>
              <p className="font-editorial-serif italic text-base sm:text-lg text-[#7A2948] font-normal mt-0.5 relative inline-block">
                ShieldHER keeps your people in the loop, quietly.
                {/* Wavy Underline */}
                <svg
                  className="absolute -bottom-1 inset-x-0 w-full h-2 text-[#7A2948] pointer-events-none overflow-visible"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M 2 5 C 50 2, 120 2, 198 5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            </motion.div>
          </div>

          {/* ======================= RIGHT: SMARTPHONE & ORBITING WATCHERS ======================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
            
            {/* SVG Connecting Paths with Heart Nodes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden sm:block"
              viewBox="0 0 600 420"
              fill="none"
            >
              {/* Path from Top (Mom) to Phone */}
              <path
                d="M 300 60 Q 300 120, 300 140"
                stroke="#7A2948"
                strokeWidth="1.8"
                strokeDasharray="4 4"
              />
              <circle cx="300" cy="90" r="6" fill="#FFFDF9" stroke="#7A2948" strokeWidth="1.5" />
              <text x="300" y="93" textAnchor="middle" fill="#7A2948" fontSize="7" fontFamily="serif">♡</text>

              {/* Path from Phone to Right 1 (Riya) */}
              <path
                d="M 350 220 Q 400 230, 440 260"
                stroke="#7A2948"
                strokeWidth="1.8"
                strokeDasharray="4 4"
              />
              <circle cx="395" cy="238" r="6" fill="#FFFDF9" stroke="#7A2948" strokeWidth="1.5" />
              <text x="395" y="241" textAnchor="middle" fill="#7A2948" fontSize="7" fontFamily="serif">♡</text>

              {/* Path from Phone to Right 2 (Circle) */}
              <path
                d="M 350 310 Q 390 350, 440 370"
                stroke="#7A2948"
                strokeWidth="1.8"
                strokeDasharray="4 4"
              />
              <circle cx="390" cy="335" r="6" fill="#FFFDF9" stroke="#7A2948" strokeWidth="1.5" />
              <text x="390" y="338" textAnchor="middle" fill="#7A2948" fontSize="7" fontFamily="serif">♡</text>
            </svg>

            {/* SATELLITE 1: MOM (Top) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
            >
              <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 min-w-[12rem] cursor-default">
                <div className="relative w-8.5 h-8.5 rounded-full border-1.5 border-[#202020] overflow-hidden bg-[#FAF7F2] shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=75&w=96"
                    alt="Mom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 leading-tight">
                  <div className="text-[11px] font-black text-[#202020]">Mom</div>
                  <div className="text-[9px] font-bold text-[#7A2948]">Watching</div>
                  <div className="text-[8.5px] font-extrabold text-[#4E7B62] flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4E7B62] animate-pulse" />
                    <span>Live updates</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#F3A9BC] border border-[#202020] flex items-center justify-center text-[#7A2948] shrink-0 shadow-xs">
                  <Phone className="w-3 h-3" />
                </div>
              </div>
            </motion.div>

            {/* SATELLITE 2: RIYA (Mid Right) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
              className="absolute top-[35%] right-0 sm:right-1 z-20"
            >
              <div className="relative group cursor-default">
                {/* Annotation above Riya */}
                <div className="absolute -top-7 -right-1 font-editorial-serif italic text-[11px] text-[#7A2948] flex items-center gap-1 pointer-events-none">
                  <span>your circle, your way. ♡</span>
                  <span className="font-sans rotate-[60deg] inline-block text-xs">➔</span>
                </div>

                <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 min-w-[11.5rem]">
                  <div className="relative w-8.5 h-8.5 rounded-full border-1.5 border-[#202020] overflow-hidden bg-[#FAF7F2] shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=96"
                      alt="Riya"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 leading-tight">
                    <div className="text-[11px] font-black text-[#202020]">Riya</div>
                    <div className="text-[9px] font-bold text-[#7A2948]">Flatmate</div>
                    <div className="text-[8.5px] font-extrabold text-[#4E7B62] flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4E7B62]" />
                      <span>Watching</span>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#F4E58C] border border-[#202020] flex items-center justify-center text-[#202020] shrink-0 shadow-xs">
                    <Bell className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SATELLITE 3: YOUR CIRCLE (Bottom Right) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
              className="absolute bottom-1 right-0 sm:right-2 z-20"
            >
              <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 min-w-[11.5rem] cursor-default">
                <div className="flex -space-x-1.5 shrink-0">
                  <div className="relative w-6 h-6 rounded-full border border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=64"
                      alt="Friend 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-6 h-6 rounded-full border border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=75&w=64"
                      alt="Friend 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 leading-tight">
                  <div className="text-[11px] font-black text-[#202020]">Your Circle</div>
                  <div className="text-[9px] font-bold text-[#7A2948]">3 others</div>
                  <div className="text-[8.5px] font-extrabold text-[#4E7B62] flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4E7B62]" />
                    <span>Notified</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#F4E58C] border border-[#202020] flex items-center justify-center text-[#202020] shrink-0 shadow-xs">
                  <Users className="w-3 h-3" />
                </div>
              </div>
            </motion.div>

            {/* THE CENTER SMARTPHONE MOCKUP */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1.2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="relative z-15 w-[16.5rem] sm:w-[18.5rem] bg-[#FFFDF9] border-2.5 border-[#202020] rounded-[2rem] p-3.5 sm:p-4 shadow-[8px_10px_0px_#1d1d1d] group cursor-default"
            >
              {/* Phone Header Profile */}
              <div className="flex items-center justify-between pb-2 border-b border-[#202020]/15">
                <div className="flex items-center gap-2">
                  <div className="relative w-7.5 h-7.5 rounded-full border border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=96"
                      alt="Harsh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-[#202020]">Harsh is heading home</div>
                    <div className="text-[9px] font-bold text-[#7A2948]">18 min away</div>
                  </div>
                </div>

                <span className="bg-[#D6E8DC] text-[#2D5A43] border border-[#202020] px-1.5 py-0.5 rounded-full text-[8.5px] font-black uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A43] animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Phone Map Screen */}
              <div className="relative h-32 sm:h-36 w-full mt-2 rounded-xl border border-[#202020]/20 bg-[#FAF7F2] overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 180" fill="none">
                  {/* Street grid vectors */}
                  <path d="M 20 20 L 40 160" stroke="#E5DFD7" strokeWidth="2.5" />
                  <path d="M 120 10 L 110 170" stroke="#E5DFD7" strokeWidth="3" />
                  <path d="M 220 10 L 230 170" stroke="#E5DFD7" strokeWidth="2.5" />
                  <path d="M 10 60 L 310 50" stroke="#E5DFD7" strokeWidth="2.5" />
                  <path d="M 10 120 L 310 130" stroke="#E5DFD7" strokeWidth="3" />

                  {/* Organic Route Path */}
                  <path
                    d="M 50 50 C 90 80, 140 110, 260 140"
                    stroke="#7A2948"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Start Point */}
                  <circle cx="50" cy="50" r="6" fill="#FFFDF9" stroke="#7A2948" strokeWidth="2.5" />

                  {/* End Point (Home) */}
                  <circle cx="260" cy="140" r="12" fill="#7A2948" stroke="#202020" strokeWidth="1.5" />
                </svg>

                {/* Car Traveling Marker on Route */}
                <div className="absolute top-[48%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#7A2948] border border-[#FFFDF9] shadow-xs flex items-center justify-center text-[10px] text-[#FFFDF9]">
                  🚗
                </div>

                {/* Home Marker Icon */}
                <div className="absolute bottom-[8%] right-[11%] z-10 text-[#FFFDF9]">
                  <Home className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Route Summary Details */}
              <div className="mt-2.5 space-y-1.5 border-b border-[#202020]/15 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#F3A9BC] border border-[#202020] flex items-center justify-center text-[#7A2948] shrink-0 shadow-2xs">
                    <Navigation className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#202020]">From Metro Station</div>
                    <div className="text-[8.5px] font-bold text-[#7A2948]">7:45 PM</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#F4E58C] border border-[#202020] flex items-center justify-center text-[#202020] shrink-0 shadow-2xs">
                    <Home className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#202020]">Home</div>
                    <div className="text-[8.5px] font-bold text-[#7A2948]">8:03 PM (est.)</div>
                  </div>
                </div>
              </div>

              {/* Action Button: I've reached home */}
              <div className="mt-2.5">
                <button
                  type="button"
                  className="w-full bg-[#F3A9BC] hover:bg-[#EAA0B3] text-[#7A2948] font-extrabold text-[11px] uppercase tracking-wider py-2 rounded-full border-1.5 border-[#202020] shadow-[2px_2px_0px_#1d1d1d] hover:shadow-[3px_3px_0px_#1d1d1d] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>I've reached home</span>
                  <Heart className="w-3 h-3 fill-[#7A2948] text-[#7A2948]" />
                </button>
              </div>
            </motion.div>

          </div>

        </div>

        {/* =========================================================================
            ROW 2: 4-STEP JOURNEY PROCESS CARD
            ========================================================================= */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
          className="relative mt-8 sm:mt-10"
        >
          {/* Main White Process Card */}
          <div className="relative bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-4 sm:p-6 shadow-[6px_6px_0px_#1d1d1d]">
            
            {/* Pink washi tape on top left */}
            <div
              className="absolute -top-3 left-6 w-16 h-5 bg-[#F3A9BC] border border-[#202020]/40 rotate-[-4deg] shadow-xs pointer-events-none"
              aria-hidden="true"
            />

            {/* 4 Connected Milestone Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3 relative">
              
              {/* Step 1: Journey Started */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-10 h-10 rounded-full bg-[#F3A9BC] border-2 border-[#202020] flex items-center justify-center text-[#7A2948] shadow-[2px_2px_0px_#1d1d1d] group-hover:scale-105 transition-transform">
                  <Navigation className="w-4 h-4 rotate-45" />
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-[#202020] mt-2">
                  Journey started
                </div>
                <div className="text-[10px] font-bold text-[#7A2948] mt-0.5">
                  Harsh started a journey
                </div>
                <div className="text-[9.5px] font-extrabold text-[#202020]/70 mt-0.5">
                  7:45 PM
                </div>
              </div>

              {/* Step 2: Circle Notified */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-10 h-10 rounded-full bg-[#F4E58C] border-2 border-[#202020] flex items-center justify-center text-[#202020] shadow-[2px_2px_0px_#1d1d1d] group-hover:scale-105 transition-transform">
                  <Bell className="w-4 h-4" />
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-[#202020] mt-2">
                  Circle notified
                </div>
                <div className="text-[10px] font-bold text-[#7A2948] mt-0.5">
                  Your people are
                </div>
                <div className="text-[9.5px] font-extrabold text-[#202020]/70 mt-0.5">
                  instantly notified
                </div>
              </div>

              {/* Step 3: Riya is watching */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-10 h-10 rounded-full bg-[#F3A9BC] border-2 border-[#202020] flex items-center justify-center text-[#7A2948] shadow-[2px_2px_0px_#1d1d1d] group-hover:scale-105 transition-transform">
                  <Eye className="w-4 h-4" />
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-[#202020] mt-2">
                  Riya is watching
                </div>
                <div className="text-[10px] font-bold text-[#7A2948] mt-0.5">
                  Updates shared
                </div>
                <div className="text-[9.5px] font-extrabold text-[#202020]/70 mt-0.5">
                  automatically
                </div>
              </div>

              {/* Step 4: Made it home ♡ */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-10 h-10 rounded-full bg-[#D6E8DC] border-2 border-[#202020] flex items-center justify-center text-[#2D5A43] shadow-[2px_2px_0px_#1d1d1d] group-hover:scale-105 transition-transform">
                  <Home className="w-4 h-4" />
                </div>
                <div className="text-xs font-black uppercase tracking-wider text-[#202020] mt-2 flex items-center gap-1">
                  <span>Made it home</span>
                  <span className="text-[#7A2948]">♡</span>
                </div>
                <div className="text-[10px] font-bold text-[#7A2948] mt-0.5">
                  Journey completed
                </div>
                <div className="text-[9.5px] font-extrabold text-[#202020]/70 mt-0.5">
                  8:03 PM
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* =========================================================================
            ROW 3: BOTTOM PINK NOTE BANNER
            ========================================================================= */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
          className="mt-6 sm:mt-8"
        >
          <div className="relative bg-[#F3A9BC] border-2 border-[#202020] rounded-2xl p-4 sm:p-5 shadow-[5px_5px_0px_#1d1d1d] rotate-[-0.5deg]">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              
              {/* Left: Shield Heart + Always in the loop */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#7A2948] border-2 border-[#202020] flex items-center justify-center text-[#F3A9BC] shrink-0 shadow-xs">
                  <Shield className="w-5 h-5 fill-[#F3A9BC] text-[#7A2948]" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-black uppercase text-[#7A2948] leading-tight">
                    Always in the loop.
                  </p>
                  <p className="text-base sm:text-lg font-black uppercase text-[#7A2948] leading-tight">
                    Never in the dark.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-10 bg-[#7A2948]/30" />

              {/* Right: Paragraph + Heart Doodles */}
              <div className="flex items-center gap-4 max-w-xl">
                <div className="text-xs sm:text-[13px] font-bold text-[#202020] leading-relaxed">
                  <p>Only your circle. Only when you choose.</p>
                  <p>Because safety should feel like support, not surveillance.</p>
                </div>
                <div className="hidden sm:flex flex-col items-center gap-0.5 text-[#7A2948]">
                  <span className="text-xl font-editorial-serif">♡</span>
                  <span className="text-xs">✦</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
