'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, GraduationCap, Users, MessageCircle, Home, Shield, Check, Heart, Sparkles } from 'lucide-react';

const EASE = [0.22, 0.61, 0.36, 1] as const;

export const GuardianStorySection: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="guardian-mode"
      className="relative bg-[#541A2D] text-[#FFFDF9] border-y-2 border-[#202020] select-none py-10 sm:py-16"
      style={{
        backgroundImage: `
          radial-gradient(rgba(243, 169, 188, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* =========================================================================
            TOP ROW: HEADLINE (LEFT) + CIRCLE AVATARS ROW (RIGHT)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ======================= LEFT: HEADLINE & BADGE ======================= */}
          <div className="lg:col-span-6 relative z-10">
            {/* Butter-Yellow Badge with burst doodle */}
            <div className="relative inline-block">
              <span className="absolute -top-2.5 -right-3 text-xs text-[#F4E58C] font-black rotate-12 pointer-events-none">
                \ | /
              </span>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: -10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="inline-flex items-center gap-2 bg-[#F4E58C] text-[#202020] border-2 border-[#202020] rounded-full px-4 py-1.5 shadow-[3px_3px_0px_#1d1d1d] -rotate-1 cursor-default hover:rotate-0 hover:scale-105 transition-all"
              >
                <Clock className="w-3.5 h-3.5 text-[#202020]" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
                  JOURNEY TOGETHER ♡
                </span>
              </motion.div>
            </div>

            {/* Headline — Crisp & Editorial */}
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="mt-3 text-[clamp(2.4rem,4.4vw,4.2rem)] leading-[0.82] font-black uppercase tracking-tight text-[#FFFDF9]"
            >
              WHEREVER
              <br />
              YOU'RE GOING,
              <span className="block font-editorial-serif italic font-normal text-[#F3A9BC] lowercase text-[1.12em] tracking-tight mt-0.5">
                take your people
              </span>
              <span className="block mt-0.5">
                WITH YOU.
                <span className="inline-block ml-1.5 text-[0.7em] font-editorial-serif text-[#F3A9BC] font-normal align-middle">
                  ♡
                </span>
              </span>
            </motion.h2>

            {/* Pink Note Scrap with Spiral Arrow */}
            <div className="relative mt-4 sm:mt-5 max-w-xs">
              <div className="inline-block bg-[#F3A9BC] text-[#202020] border-2 border-[#202020] rounded-xs px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] rotate-[-2deg]">
                {/* Tape */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-[#F4E58C] border border-[#202020]/40 rotate-1 shadow-xs pointer-events-none" />
                <span className="font-editorial-serif italic text-xs sm:text-sm font-bold text-[#7A2948]">
                  your circle, your way. ♡
                </span>
              </div>
              <span className="absolute -right-6 top-2 text-base font-sans rotate-[45deg] text-[#F3A9BC]">⤹</span>
            </div>
          </div>

          {/* ======================= RIGHT: AVATARS ROW & 2AM NOTE ======================= */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end justify-center pt-2 sm:pt-6">
            
            {/* Connected Circle Avatars Row */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {/* Avatar 1: Mom */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="relative w-14 h-14 rounded-full border-2 border-dashed border-[#F3A9BC] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                  <div className="relative w-full h-full rounded-full border-2 border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=75&w=96"
                      alt="Mom"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs font-black text-[#FFFDF9] mt-2">Mom</span>
                <span className="text-[10px] font-bold text-[#F3A9BC] flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4E7B62]" /> Watching
                </span>
              </div>

              <span className="text-[#F3A9BC] font-bold text-sm hidden sm:inline-block">+</span>

              {/* Avatar 2: Riya */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="relative w-14 h-14 rounded-full border-2 border-dashed border-[#F3A9BC] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                  <div className="relative w-full h-full rounded-full border-2 border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=96"
                      alt="Riya"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs font-black text-[#FFFDF9] mt-2">Riya</span>
                <span className="text-[10px] font-bold text-[#F3A9BC] flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4E7B62]" /> Watching
                </span>
              </div>

              <span className="text-[#F3A9BC] font-bold text-sm hidden sm:inline-block">+</span>

              {/* Avatar 3: Aisha */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="relative w-14 h-14 rounded-full border-2 border-dashed border-[#F3A9BC] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                  <div className="relative w-full h-full rounded-full border-2 border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=75&w=96"
                      alt="Aisha"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs font-black text-[#FFFDF9] mt-2">Aisha</span>
                <span className="text-[10px] font-bold text-[#F3A9BC] flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4E7B62]" /> Best Friend
                </span>
              </div>

              <span className="text-[#F3A9BC] font-bold text-sm hidden sm:inline-block">+</span>

              {/* Avatar 4: 3 others */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="relative w-14 h-14 rounded-full border-2 border-dashed border-[#F3A9BC] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                  <div className="relative w-full h-full rounded-full border-2 border-[#202020] overflow-hidden bg-[#7A2948] flex items-center justify-center">
                    <div className="flex -space-x-1.5">
                      <span className="w-4 h-4 rounded-full border border-[#FFFDF9] bg-[#F3A9BC] inline-block" />
                      <span className="w-4 h-4 rounded-full border border-[#FFFDF9] bg-[#F4E58C] inline-block" />
                    </div>
                  </div>
                </div>
                <span className="text-xs font-black text-[#FFFDF9] mt-2">3 others</span>
                <span className="text-[10px] font-bold text-[#F3A9BC] flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4E7B62]" /> Notified
                </span>
              </div>
            </motion.div>

            {/* Note underneath avatars */}
            <div className="mt-5 text-center lg:text-right font-editorial-serif italic text-sm sm:text-base text-[#F3A9BC]">
              the ones who’d actually pick up at 2am. ♡
            </div>
          </div>

        </div>

        {/* =========================================================================
            MIDDLE: THE 4 STEP JOURNEY TIMELINE SPREAD
            ========================================================================= */}
        <div className="relative mt-16 sm:mt-24">
          
          {/* Dotted connecting timeline line behind milestone nodes */}
          <div
            className="absolute top-6 inset-x-8 sm:inset-x-16 h-0.5 border-t-2 border-dashed border-[#F3A9BC]/50 z-0 hidden md:block"
            aria-hidden="true"
          />

          {/* 4 Journey Milestone Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 relative z-10">
            
            {/* CARD 1: 7:42 PM - Leaving Campus */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="flex flex-col items-center"
            >
              {/* Top Node Icon */}
              <div className="w-12 h-12 rounded-full bg-[#F3A9BC] border-2 border-[#202020] shadow-[3px_3px_0px_#1d1d1d] flex items-center justify-center text-[#7A2948] shrink-0 mb-4">
                <GraduationCap className="w-5 h-5 text-[#202020]" />
              </div>

              {/* White Card */}
              <div className="w-full bg-[#FFFDF9] text-[#202020] border-2.5 border-[#202020] rounded-3xl p-4 sm:p-5 shadow-[6px_6px_0px_#1d1d1d] flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="font-editorial-serif italic text-base sm:text-lg text-[#7A2948] font-bold">
                    7:42 PM
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-[#202020] leading-snug mt-1">
                    Leaving
                    <br />
                    college campus
                  </h3>
                  <span className="inline-block mt-2 bg-[#F3A9BC] text-[#7A2948] border border-[#202020] px-2 py-0.5 rounded-full text-[9px] font-black uppercase">
                    VERIFIED
                  </span>
                </div>

                {/* Mini Route Snippet */}
                <div className="relative h-10 w-full mt-3 bg-[#FAF7F2] rounded-xl border border-[#202020]/20 flex items-center justify-between px-3">
                  <span className="w-3 h-3 rounded-full bg-[#7A2948]" />
                  <div className="flex-1 mx-2 h-1 bg-[#7A2948]/30 rounded-full" />
                  <span className="w-5 h-5 rounded-full bg-[#7A2948] text-[#FFFDF9] flex items-center justify-center text-[10px]">
                    🎓
                  </span>
                </div>
              </div>

              {/* Bottom Caption */}
              <span className="font-editorial-serif italic text-xs sm:text-sm text-[#F3A9BC] mt-3">
                journey started ♡
              </span>
            </motion.div>

            {/* CARD 2: 7:44 PM - Riya + Mom joined */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              className="flex flex-col items-center"
            >
              {/* Top Node Icon */}
              <div className="w-12 h-12 rounded-full bg-[#F4E58C] border-2 border-[#202020] shadow-[3px_3px_0px_#1d1d1d] flex items-center justify-center text-[#202020] shrink-0 mb-4">
                <Users className="w-5 h-5 text-[#202020]" />
              </div>

              {/* White Card */}
              <div className="w-full bg-[#FFFDF9] text-[#202020] border-2.5 border-[#202020] rounded-3xl p-4 sm:p-5 shadow-[6px_6px_0px_#1d1d1d] flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="font-editorial-serif italic text-base sm:text-lg text-[#7A2948] font-bold">
                    7:44 PM
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-[#202020] leading-snug mt-1">
                    Riya + Mom
                    <br />
                    joined your journey
                  </h3>
                  <span className="inline-block mt-2 bg-[#F3A9BC] text-[#7A2948] border border-[#202020] px-2 py-0.5 rounded-full text-[9px] font-black uppercase">
                    VERIFIED
                  </span>
                </div>

                {/* Avatar Stack snippet */}
                <div className="flex items-center gap-2 mt-3 pt-2 border-t border-[#202020]/10">
                  <div className="relative w-7 h-7 rounded-full border border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=75&w=64"
                      alt="Mom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-7 h-7 rounded-full border border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=64"
                      alt="Riya"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-black text-[#7A2948]">+2</span>
                </div>
              </div>

              {/* Bottom Caption */}
              <span className="font-editorial-serif italic text-xs sm:text-sm text-[#F3A9BC] mt-3">
                circle joined ♡
              </span>
            </motion.div>

            {/* CARD 3: 8:03 PM - Check-in Received */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
              className="flex flex-col items-center"
            >
              {/* Top Node Icon */}
              <div className="w-12 h-12 rounded-full bg-[#F3A9BC] border-2 border-[#202020] shadow-[3px_3px_0px_#1d1d1d] flex items-center justify-center text-[#7A2948] shrink-0 mb-4">
                <MessageCircle className="w-5 h-5 text-[#202020]" />
              </div>

              {/* White Card */}
              <div className="w-full bg-[#FFFDF9] text-[#202020] border-2.5 border-[#202020] rounded-3xl p-4 sm:p-5 shadow-[6px_6px_0px_#1d1d1d] flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="font-editorial-serif italic text-base sm:text-lg text-[#7A2948] font-bold">
                    8:03 PM
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-[#202020] leading-snug mt-1">
                    everything okay? ♡
                  </h3>

                  {/* Chat reply bubble */}
                  <div className="mt-2.5 bg-[#D6E8DC] border border-[#202020] rounded-xl px-3 py-1.5 flex items-center justify-between text-xs font-black text-[#2D5A43]">
                    <span>yep</span>
                    <span className="text-[#2D5A43] font-black">✓✓</span>
                  </div>
                </div>

                <span className="inline-block mt-3 bg-[#F3A9BC] text-[#7A2948] border border-[#202020] px-2 py-0.5 rounded-full text-[9px] font-black uppercase w-fit">
                  VERIFIED
                </span>
              </div>

              {/* Bottom Caption */}
              <span className="font-editorial-serif italic text-xs sm:text-sm text-[#F3A9BC] mt-3">
                check-in received ♡
              </span>
            </motion.div>

            {/* CARD 4: 8:19 PM - HOME. */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
              className="flex flex-col items-center"
            >
              {/* Top Node Icon */}
              <div className="w-12 h-12 rounded-full bg-[#F4E58C] border-2 border-[#202020] shadow-[3px_3px_0px_#1d1d1d] flex items-center justify-center text-[#202020] shrink-0 mb-4">
                <Home className="w-5 h-5 text-[#202020]" />
              </div>

              {/* White Card */}
              <div className="w-full bg-[#FFFDF9] text-[#202020] border-2.5 border-[#202020] rounded-3xl p-4 sm:p-5 shadow-[6px_6px_0px_#1d1d1d] flex flex-col justify-between min-h-[220px] relative">
                <div>
                  <span className="font-editorial-serif italic text-base sm:text-lg text-[#7A2948] font-bold">
                    8:19 PM
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase text-[#202020] tracking-tight mt-0.5">
                    HOME.
                  </h3>
                </div>

                {/* Cozy House Vector Illustration */}
                <div className="relative flex items-center justify-center my-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🌳</span>
                    <div className="w-12 h-10 bg-[#FAF7F2] border-2 border-[#202020] rounded-t-xs relative flex items-center justify-center shadow-xs">
                      {/* Roof */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[14px] border-b-[#7A2948]" />
                      <span className="text-[10px] font-bold">🏠</span>
                    </div>
                    <span className="text-sm">🌳</span>
                  </div>
                  {/* Heart floating smoke */}
                  <span className="absolute -top-4 right-8 text-sm font-editorial-serif text-[#7A2948] animate-bounce">
                    ♡
                  </span>
                </div>

                {/* Taped Yellow Label */}
                <div className="self-end bg-[#F4E58C] border border-[#202020] rounded-xs px-2.5 py-0.5 shadow-xs rotate-[-3deg]">
                  <span className="font-editorial-serif italic text-[11px] font-bold text-[#7A2948]">
                    safe & sound ♡
                  </span>
                </div>
              </div>

              {/* Bottom Caption */}
              <span className="font-editorial-serif italic text-xs sm:text-sm text-[#F3A9BC] mt-3">
                ✧ made it home ♡
              </span>
            </motion.div>

          </div>

        </div>

        {/* =========================================================================
            BOTTOM PANORAMIC BANNER
            ========================================================================= */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
          className="mt-14 sm:mt-20"
        >
          <div className="relative bg-[#3D1220] border-2 border-[#202020] rounded-3xl sm:rounded-full p-5 sm:p-7 shadow-[6px_6px_0px_#1d1d1d]">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              {/* Left: Shield Heart + No constant texting */}
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-2xl bg-[#7A2948] border-2 border-[#202020] flex items-center justify-center text-[#F3A9BC] shrink-0 shadow-xs">
                  <Shield className="w-6 h-6 fill-[#F3A9BC] text-[#7A2948]" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-black text-[#FFFDF9] leading-tight">
                    No constant texting.
                  </p>
                  <p className="text-base sm:text-lg font-black text-[#FFFDF9] leading-tight">
                    No checking every five minutes.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-[#F3A9BC]/25" />

              {/* Right: Italic copy + Sparkle doodles */}
              <div className="flex items-center gap-4">
                <p className="font-editorial-serif italic text-lg sm:text-2xl text-[#F3A9BC] font-normal leading-snug">
                  Just your people there
                  <br />
                  when it matters.
                </p>
                <div className="hidden sm:flex flex-col items-center gap-1 text-[#F3A9BC]">
                  <span className="text-xl">✧</span>
                  <span className="text-sm">♡</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
