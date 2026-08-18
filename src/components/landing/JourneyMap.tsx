'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, MapPin, Navigation } from 'lucide-react';

const ease = [0.22, 0.61, 0.36, 1] as const;

interface JourneyMapProps {
  className?: string;
}

export const JourneyMap: React.FC<JourneyMapProps> = ({ className = '' }) => {
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative w-full h-full min-h-[580px] lg:min-h-[660px] overflow-hidden select-none ${className}`}
      aria-label="Live journey map from campus to home"
    >
      {/* ---------------- 1. UNDERLYING SUBTLE EDITORIAL MAP LAYER ---------------- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 18%, #000 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 18%, #000 100%)',
        }}
        aria-hidden="true"
      >
        {/* Subtle city blocks */}
        <div className="absolute inset-0">
          {/* Block 1 */}
          <div className="absolute top-[4%] left-[18%] w-[32%] h-[15%] border border-[#7A2948]/20 bg-[#E8DFD3]/40 rounded-sm rotate-[-4deg]" />
          {/* Block 2 */}
          <div className="absolute top-[6%] right-[10%] w-[34%] h-[18%] border border-[#7A2948]/20 bg-[#E8DFD3]/40 rounded-sm rotate-[3deg]" />
          {/* Block 3 */}
          <div className="absolute top-[28%] left-[8%] w-[42%] h-[16%] border border-[#7A2948]/20 bg-[#E8DFD3]/40 rounded-sm rotate-[2deg]" />
          {/* Block 4 */}
          <div className="absolute top-[29%] right-[6%] w-[38%] h-[20%] border border-[#7A2948]/20 bg-[#E8DFD3]/40 rounded-sm rotate-[-3deg]" />
          {/* Block 5 */}
          <div className="absolute top-[54%] left-[14%] w-[36%] h-[17%] border border-[#7A2948]/20 bg-[#E8DFD3]/40 rounded-sm rotate-[-2deg]" />
          {/* Block 6 */}
          <div className="absolute top-[52%] right-[8%] w-[36%] h-[22%] border border-[#7A2948]/20 bg-[#E8DFD3]/40 rounded-sm rotate-[3deg]" />
          {/* Block 7 */}
          <div className="absolute bottom-[6%] left-[10%] w-[42%] h-[20%] border border-[#7A2948]/20 bg-[#E8DFD3]/40 rounded-sm rotate-[2deg]" />
          {/* Block 8 */}
          <div className="absolute bottom-[4%] right-[8%] w-[36%] h-[18%] border border-[#7A2948]/20 bg-[#E8DFD3]/40 rounded-sm rotate-[-3deg]" />

          {/* Subtle Park / Green Area */}
          <div className="absolute top-[42%] left-[48%] w-16 h-20 rounded-2xl bg-[#E2EFE7]/60 border border-[#4E7B62]/20 rotate-6" />
          
          {/* Subtle Trees */}
          <div className="absolute top-[18%] left-[42%] w-2.5 h-3 rounded-full bg-[#4E7B62]/40" />
          <div className="absolute top-[45%] left-[54%] w-3 h-3.5 rounded-full bg-[#4E7B62]/40" />
          <div className="absolute top-[72%] right-[32%] w-2.5 h-3 rounded-full bg-[#4E7B62]/40" />
        </div>

        {/* Subtle Street Network Vectors */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 450 750" fill="none">
          <path d="M 20 90 L 430 140" stroke="#8C8174" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6" />
          <path d="M 10 240 L 440 280" stroke="#8C8174" strokeWidth="2" opacity="0.5" />
          <path d="M 30 420 L 420 460" stroke="#8C8174" strokeWidth="2.5" opacity="0.6" />
          <path d="M 15 590 L 435 630" stroke="#8C8174" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
          
          {/* Avenues */}
          <path d="M 110 20 L 130 730" stroke="#8C8174" strokeWidth="2" opacity="0.5" />
          <path d="M 240 10 L 220 740" stroke="#8C8174" strokeWidth="3" opacity="0.7" />
          <path d="M 360 30 L 330 720" stroke="#8C8174" strokeWidth="2" opacity="0.5" />
          
          {/* Diagonal avenues */}
          <path d="M 40 680 L 410 80" stroke="#8C8174" strokeWidth="1.8" opacity="0.4" />
          <path d="M 30 350 L 320 40" stroke="#8C8174" strokeWidth="1.8" opacity="0.4" />
        </svg>
      </div>

      {/* ---------------- 2. PRIMARY LIVE ROUTE (ORGANIC FLOW) ---------------- */}
      {/* SVG Canvas for Organic Route & Checkpoints */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        viewBox="0 0 380 700"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="routeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7A2948" />
            <stop offset="60%" stopColor="#7A2948" />
            <stop offset="100%" stopColor="#B63A5B" />
          </linearGradient>
          <filter id="routeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="1" floodColor="#1d1d1d" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Organic Flowing Route Line */}
        <motion.path
          d="M 120 48 C 65 110, 165 145, 135 220 C 105 295, 205 320, 160 410 C 120 495, 240 520, 200 620"
          fill="none"
          stroke="url(#routeGlow)"
          strokeWidth="7.5"
          strokeLinecap="round"
          filter="url(#routeShadow)"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />

        {/* Checkpoint 1: Campus (at ~ 120, 48) */}
        <circle cx="120" cy="48" r="9" fill="#FFFDF9" stroke="#7A2948" strokeWidth="3.5" />
        <circle cx="120" cy="48" r="4" fill="#F3A9BC" />

        {/* Checkpoint 2: Metro (at ~ 135, 220) */}
        <circle cx="135" cy="220" r="9" fill="#FFFDF9" stroke="#7A2948" strokeWidth="3.5" />
        <circle cx="135" cy="220" r="4" fill="#F3A9BC" />

        {/* Checkpoint 3: In-Transit node (at ~ 160, 410) */}
        <circle cx="160" cy="410" r="9" fill="#FFFDF9" stroke="#7A2948" strokeWidth="3.5" />
        <circle cx="160" cy="410" r="4" fill="#F3A9BC" />
      </svg>

      {/* ---------------- 3. TIMELINE STOPS & LIVE PRODUCT UI ---------------- */}

      {/* STOP 1: CAMPUS */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        className="absolute top-[4%] left-[2%] sm:left-[5%] z-20"
      >
        <div className="bg-[#FFFDF9] border-1.5 border-[#202020] rounded-xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#7A2948]" />
            <span className="font-extrabold text-[11px] tracking-wider uppercase text-[#202020]">
              CAMPUS
            </span>
          </div>
          <span className="font-editorial-serif italic text-xs text-[#7A2948] mt-0.5">
            7:42 PM · leaving campus
          </span>
        </div>
      </motion.div>

      {/* WATCHER PILL 1: RIYA (Watching) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.45, ease }}
        whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
        className="absolute top-[16%] right-[2%] sm:right-[6%] z-30 cursor-default"
      >
        <div className="group bg-[#FFFDF9] border-1.5 border-[#202020] rounded-full px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] transition-all duration-200 flex items-center gap-2">
          {/* Avatar */}
          <div className="relative w-6 h-6 rounded-full border border-[#202020] overflow-hidden bg-[#F3A9BC] shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=64"
              alt="Riya"
              fill
              className="object-cover"
            />
          </div>
          <div className="leading-tight pr-1">
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#7A2948]">RIYA</span>
              <span className="text-[10px] text-[#B63A5B]">♡</span>
            </div>
            <div className="text-[10px] font-bold text-[#202020]/80">
              watching your journey
            </div>
          </div>
        </div>
      </motion.div>

      {/* STOP 2: METRO 🚇 */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease }}
        className="absolute top-[30%] left-[4%] sm:left-[8%] z-20"
      >
        <div className="bg-[#FFFDF9] border-1.5 border-[#202020] rounded-xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xs">🚇</span>
            <span className="font-extrabold text-[11px] tracking-wider uppercase text-[#202020]">
              METRO
            </span>
          </div>
          <span className="font-editorial-serif italic text-xs text-[#7A2948] mt-0.5">
            7:55 PM · on the way
          </span>
        </div>
      </motion.div>

      {/* WATCHER PILL 2: MOM (Watching) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease }}
        whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
        className="absolute top-[40%] right-[4%] sm:right-[10%] z-30 cursor-default"
      >
        <div className="bg-[#FFFDF9] border-1.5 border-[#202020] rounded-full px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] transition-all duration-200 flex items-center gap-2">
          {/* Avatar */}
          <div className="relative w-6 h-6 rounded-full border border-[#202020] overflow-hidden bg-[#F4E58C] shrink-0 flex items-center justify-center font-bold text-[10px] text-[#7A2948]">
            M
          </div>
          <div className="leading-tight pr-1">
            <div className="text-[10px] font-black uppercase tracking-wider text-[#7A2948]">MOM</div>
            <div className="text-[10px] font-bold text-[#202020]/80">watching</div>
          </div>
        </div>
      </motion.div>

      {/* LIVE IN-TRANSIT USER AVATAR */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease }}
        className="absolute top-[56%] left-[32%] sm:left-[35%] z-30 -translate-x-1/2"
      >
        <div className="relative flex flex-col items-center">
          {/* Pulsing radar ring */}
          <div className="absolute -inset-2 rounded-full bg-[#F3A9BC]/40 animate-ping pointer-events-none" />
          
          {/* User Avatar Circle */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#202020] overflow-hidden bg-[#F4E58C] shadow-[4px_4px_0px_#1d1d1d] z-10">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=96"
              alt="You, currently travelling"
              fill
              className="object-cover"
            />
          </div>

          {/* Currently travelling badge */}
          <div className="mt-1.5 bg-[#7A2948] text-[#FFFDF9] border border-[#202020] rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider shadow-sm whitespace-nowrap">
            currently travelling
          </div>
        </div>
      </motion.div>

      {/* WATCHER PILL 3: YOUR PEOPLE (Multiple watchers) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.05, ease }}
        whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
        className="absolute top-[68%] right-[2%] sm:right-[6%] z-30 cursor-default"
      >
        <div className="bg-[#FFFDF9] border-1.5 border-[#202020] rounded-full px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] transition-all duration-200 flex items-center gap-2">
          {/* Overlapping small avatar stack */}
          <div className="flex -space-x-1.5">
            <span className="w-5 h-5 rounded-full border border-[#202020] bg-[#F3A9BC] inline-block" />
            <span className="w-5 h-5 rounded-full border border-[#202020] bg-[#F4E58C] inline-block" />
            <span className="w-5 h-5 rounded-full border border-[#202020] bg-[#C9DFEA] inline-block" />
          </div>
          <div className="leading-tight pr-1">
            <div className="text-[10px] font-black uppercase tracking-wider text-[#7A2948]">YOUR PEOPLE</div>
            <div className="text-[10px] font-bold text-[#202020]/80">2 watching</div>
          </div>
        </div>
      </motion.div>

      {/* ---------------- 4. HOME DESTINATION MARKER ---------------- */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, delay: 1.25, ease }}
        whileHover={reduce ? {} : { scale: 1.03, y: -2 }}
        className="absolute bottom-[2%] sm:bottom-[4%] right-[2%] sm:right-[5%] z-30 cursor-default"
      >
        <div className="flex items-center gap-3">
          {/* Butter-yellow circular destination marker */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F4E58C] border-2 border-[#202020] shadow-[5px_5px_0px_#1d1d1d] flex items-center justify-center shrink-0">
            {/* Subtle glow / pulse on destination */}
            <motion.div
              initial={reduce ? false : { scale: 1 }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="flex items-center justify-center text-[#7A2948]"
            >
              <div className="relative">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 fill-[#F3A9BC] text-[#202020] stroke-[1.8]" />
                <Home className="w-3.5 h-3.5 text-[#202020] absolute top-[5.5px] left-1/2 -translate-x-1/2 stroke-[2.5]" />
              </div>
            </motion.div>
          </div>

          {/* Destination Text Label */}
          <div className="bg-[#FFFDF9] border-1.5 border-[#202020] rounded-xl px-3.5 py-2 shadow-[4px_4px_0px_#1d1d1d] flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base text-[#202020] tracking-tight">
                HOME ♡
              </span>
              <span className="text-[11px] font-bold text-[#202020]/60">
                8:06 PM
              </span>
            </div>
            <span className="font-editorial-serif italic text-xs sm:text-sm text-[#7A2948]">
              safe & sound
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
