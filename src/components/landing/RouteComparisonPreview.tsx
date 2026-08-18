'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Navigation, Heart, Shield, Zap, Building2, Sun, Users, MapPin, Check, ArrowRight } from 'lucide-react';

const EASE = [0.22, 0.61, 0.36, 1] as const;

export const RouteComparisonPreview: React.FC = () => {
  const reduce = useReducedMotion();
  const [selectedRoute, setSelectedRoute] = useState<'quick' | 'ourPick' | 'public'>('ourPick');

  return (
    <section
      id="route-comparison"
      className="relative bg-[#FAF6EE] text-[#202020] border-b-2 border-[#202020] select-none min-h-[calc(100svh-4rem)] max-h-[940px] flex flex-col justify-between pt-7 sm:pt-9 pb-10 sm:pb-12 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(122, 41, 72, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(122, 41, 72, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '28px 28px',
      }}
    >
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full my-auto">
        
        {/* =========================================================================
            TOP ROW: HEADLINE (LEFT) + ROUTE SIGNALS HUD (RIGHT)
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-5 pb-5 border-b border-[#202020]/15">
          
          {/* Left Headline */}
          <div>
            {/* Pill Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] rounded-full px-3.5 py-1 shadow-[3px_3px_0px_#202020] -rotate-1 cursor-default hover:rotate-0 hover:scale-105 transition-all"
            >
              <Navigation className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC] shrink-0 rotate-45" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
                SIGNAL-BASED NAVIGATION
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="mt-2 text-[clamp(2.4rem,4.5vw,4.0rem)] leading-[0.82] font-black uppercase tracking-tight text-[#202020]"
            >
              TAKE THE WAY
              <span className="block font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.12em] tracking-tight mt-0.5">
                that feels
              </span>
              <span className="relative inline-block mt-0.5">
                RIGHT.
                <span className="inline-block ml-1.5 text-[0.7em] font-editorial-serif text-[#7A2948] font-normal align-middle">
                  ♡
                </span>
                {/* Pink burst lines behind heart */}
                <span className="absolute -top-2.5 -right-5 text-xs text-[#F3A9BC] font-black rotate-12 pointer-events-none">
                  \ | /
                </span>
              </span>
            </motion.h2>
          </div>

          {/* Right: Taped Note & Live Signal Factors */}
          <div className="flex flex-col items-start lg:items-end gap-2.5">
            {/* Taped Butter-Yellow Note */}
            <div className="relative inline-block bg-[#F4E58C] border-2 border-[#202020] rounded-xs px-3 py-1 shadow-[3px_3px_0px_#1d1d1d] rotate-1">
              <div className="absolute -top-2 left-4 w-8 h-3.5 bg-[#F3A9BC] border border-[#202020]/40 rotate-[-8deg] shadow-xs pointer-events-none" />
              <p className="font-editorial-serif italic text-xs sm:text-sm text-[#7A2948]">
                “fastest ≠ safest. we route for peace of mind. ♡”
              </p>
            </div>

            {/* Live Signals HUD Bar */}
            <div className="bg-[#FFFDF9] border-1.5 border-[#202020] rounded-xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] flex flex-wrap items-center gap-3 text-[10px] font-extrabold text-[#202020]">
              <span className="text-[#7A2948] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4E7B62] animate-pulse" />
                LIVE SIGNALS:
              </span>
              <span className="flex items-center gap-1 text-[#202020]/80">
                <Sun className="w-3 h-3 text-[#E69D24]" /> 94% Street Lighting
              </span>
              <span className="flex items-center gap-1 text-[#202020]/80">
                <Users className="w-3 h-3 text-[#7A2948]" /> 12 Members Active
              </span>
              <span className="flex items-center gap-1 text-[#202020]/80">
                <Shield className="w-3 h-3 text-[#4E7B62]" /> 4 Safe Spots
              </span>
            </div>
          </div>

        </div>

        {/* =========================================================================
            CENTER: 3 COMPARATIVE ROUTE CARDS
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-6 sm:mt-7 items-center">
          
          {/* ======================= CARD 1: QUICK (18 MIN) ======================= */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            onClick={() => setSelectedRoute('quick')}
            className={`bg-[#FFFDF9] border-2 border-[#202020] rounded-3xl p-4 sm:p-5 transition-all cursor-pointer ${
              selectedRoute === 'quick'
                ? 'shadow-[6px_6px_0px_#1d1d1d] ring-2 ring-[#7A2948] -translate-y-1'
                : 'shadow-[4px_4px_0px_#1d1d1d] hover:shadow-[6px_6px_0px_#1d1d1d] hover:-translate-y-0.5 opacity-90'
            }`}
          >
            {/* Header Tag */}
            <div className="flex items-center justify-between">
              <span className="bg-[#FAF7F2] border border-[#202020] rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#202020] flex items-center gap-1">
                <Zap className="w-2.5 h-2.5 text-[#E69D24]" />
                FAST COMMUTE
              </span>
              <span className="text-[10px] font-bold text-[#202020]/60">1.2 km</span>
            </div>

            {/* Time */}
            <div className="mt-2 font-editorial-serif text-4xl sm:text-5xl italic text-[#7A2948] font-bold">
              18 min
            </div>

            <p className="text-xs font-bold text-[#202020]/80 mt-1">
              Shortest path via shortcuts and residential alleys.
            </p>

            {/* Signal Metrics */}
            <div className="mt-3.5 space-y-1.5 pt-3 border-t border-[#202020]/10 text-[10.5px]">
              <div className="flex items-center justify-between text-[#202020]">
                <span className="font-bold">Lighting Score:</span>
                <span className="font-black text-[#B63A5B]">72% (Dim Alleys)</span>
              </div>
              <div className="flex items-center justify-between text-[#202020]">
                <span className="font-bold">Safe Havens on Path:</span>
                <span className="font-black text-[#202020]">1 Stop</span>
              </div>
              <div className="flex items-center justify-between text-[#202020]">
                <span className="font-bold">Community Density:</span>
                <span className="font-black text-[#202020]/75">Low</span>
              </div>
            </div>

            {/* Selection indicator */}
            <div className="mt-4 pt-2.5 border-t border-[#202020]/10 flex items-center justify-between">
              <span className="text-[10px] font-editorial-serif italic text-[#7A2948]">
                quickest option
              </span>
              <div className={`w-5 h-5 rounded-full border border-[#202020] flex items-center justify-center text-[10px] ${
                selectedRoute === 'quick' ? 'bg-[#7A2948] text-[#FFFDF9]' : 'bg-[#FAF7F2]'
              }`}>
                {selectedRoute === 'quick' && '✓'}
              </div>
            </div>
          </motion.div>

          {/* ======================= CARD 2: OUR PICK ♡ (21 MIN - HERO CARD) ======================= */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.22, ease: EASE }}
            onClick={() => setSelectedRoute('ourPick')}
            className={`relative bg-[#7A2948] text-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-5 sm:p-6 shadow-[8px_10px_0px_#1d1d1d] -rotate-0.5 cursor-pointer z-10 transition-all ${
              selectedRoute === 'ourPick'
                ? 'ring-2 ring-[#F4E58C] -translate-y-1'
                : 'hover:-translate-y-0.5'
            }`}
          >
            {/* Top Washi Tape */}
            <div
              className="absolute -top-3.5 right-6 bg-[#F4E58C] text-[#202020] border border-[#202020]/40 px-3 py-0.5 rounded-xs text-[9px] font-black uppercase tracking-wider shadow-xs rotate-2 pointer-events-none"
            >
              ★ RECOMMENDED ★
            </div>

            {/* Header Tag */}
            <div className="flex items-center justify-between">
              <span className="bg-[#F3A9BC] text-[#7A2948] border border-[#202020] rounded-full px-3 py-0.5 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Heart className="w-3 h-3 fill-[#7A2948]" />
                OUR PICK ♡
              </span>
              <span className="text-[11px] font-bold text-[#F3A9BC]">1.5 km</span>
            </div>

            {/* Time */}
            <div className="mt-2 font-editorial-serif text-5xl sm:text-6xl italic text-[#F3A9BC] font-bold leading-tight">
              21 min
            </div>

            <p className="text-xs sm:text-[13px] font-bold text-[#FFFDF9] leading-snug mt-1">
              Balanced for bright illumination, open shops, and regular community footfall.
            </p>

            {/* Signal Metrics */}
            <div className="mt-3 space-y-1.5 pt-2.5 border-t border-[#FFFDF9]/20 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#F3A9BC]">Lighting Score:</span>
                <span className="font-black text-[#FFFDF9]">98% (Well Lit)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#F3A9BC]">Safe Havens on Path:</span>
                <span className="font-black text-[#F4E58C]">3 Verified Spots</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#F3A9BC]">Community Density:</span>
                <span className="font-black text-[#D6E8DC]">High Activity</span>
              </div>
            </div>

            {/* Taped Yellow Note inside */}
            <div className="bg-[#F4E58C] border-2 border-[#202020] text-[#202020] p-2.5 rounded-xl font-editorial-serif text-xs italic font-bold rotate-[1.5deg] mt-3.5 shadow-xs">
              “+3 mins but always bustling & well-lit → totally worth it ♡”
            </div>

            {/* Selection Button */}
            <div className="mt-4 pt-2 border-t border-[#FFFDF9]/20 flex items-center justify-between">
              <span className="text-xs font-black text-[#F3A9BC] flex items-center gap-1">
                <span>Selected Safe Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <div className="w-5 h-5 rounded-full bg-[#F4E58C] text-[#202020] border border-[#202020] flex items-center justify-center text-[10px] font-black">
                ✓
              </div>
            </div>
          </motion.div>

          {/* ======================= CARD 3: MORE PUBLIC (24 MIN) ======================= */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            onClick={() => setSelectedRoute('public')}
            className={`bg-[#FFFDF9] border-2 border-[#202020] rounded-3xl p-4 sm:p-5 transition-all cursor-pointer ${
              selectedRoute === 'public'
                ? 'shadow-[6px_6px_0px_#1d1d1d] ring-2 ring-[#7A2948] -translate-y-1'
                : 'shadow-[4px_4px_0px_#1d1d1d] hover:shadow-[6px_6px_0px_#1d1d1d] hover:-translate-y-0.5 opacity-90'
            }`}
          >
            {/* Header Tag */}
            <div className="flex items-center justify-between">
              <span className="bg-[#FAF7F2] border border-[#202020] rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#202020] flex items-center gap-1">
                <Building2 className="w-2.5 h-2.5 text-[#2D5A43]" />
                MAX VISIBILITY
              </span>
              <span className="text-[10px] font-bold text-[#202020]/60">1.8 km</span>
            </div>

            {/* Time */}
            <div className="mt-2 font-editorial-serif text-4xl sm:text-5xl italic text-[#7A2948] font-bold">
              24 min
            </div>

            <p className="text-xs font-bold text-[#202020]/80 mt-1">
              100% wide boulevard sidewalk directly passing Central Police Station.
            </p>

            {/* Signal Metrics */}
            <div className="mt-3.5 space-y-1.5 pt-3 border-t border-[#202020]/10 text-[10.5px]">
              <div className="flex items-center justify-between text-[#202020]">
                <span className="font-bold">Lighting Score:</span>
                <span className="font-black text-[#2D5A43]">100% (High Mast)</span>
              </div>
              <div className="flex items-center justify-between text-[#202020]">
                <span className="font-bold">Police / Security:</span>
                <span className="font-black text-[#2D5A43]">Directly on Path</span>
              </div>
              <div className="flex items-center justify-between text-[#202020]">
                <span className="font-bold">Sidewalk Width:</span>
                <span className="font-black text-[#202020]">Wide Boulevard</span>
              </div>
            </div>

            {/* Selection indicator */}
            <div className="mt-4 pt-2.5 border-t border-[#202020]/10 flex items-center justify-between">
              <span className="text-[10px] font-editorial-serif italic text-[#7A2948]">
                highest public visibility
              </span>
              <div className={`w-5 h-5 rounded-full border border-[#202020] flex items-center justify-center text-[10px] ${
                selectedRoute === 'public' ? 'bg-[#7A2948] text-[#FFFDF9]' : 'bg-[#FAF7F2]'
              }`}>
                {selectedRoute === 'public' && '✓'}
              </div>
            </div>
          </motion.div>

        </div>

        {/* =========================================================================
            BOTTOM ROW: REASSURANCE CAPSULE BANNER
            ========================================================================= */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
          className="mt-6 sm:mt-7"
        >
          <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-full px-5 sm:px-7 py-2.5 sm:py-3 shadow-[4px_4px_0px_#1d1d1d] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#F4E58C] border border-[#202020] flex items-center justify-center text-[#202020] shrink-0 text-xs shadow-xs">
                🛡
              </span>
              <p className="text-xs sm:text-sm font-black text-[#202020]">
                Every route is continuously evaluated using live streetlights, verified safe havens, and community presence.
              </p>
            </div>

            <div className="flex items-center gap-2 font-editorial-serif italic text-xs sm:text-sm text-[#7A2948] ml-auto">
              <span>always your choice, always transparent</span>
              <span>♡</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
