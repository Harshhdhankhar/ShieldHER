'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Users, Shield, MapPin, Coffee, Train, Plus, AlertTriangle, Lock, Heart, Sparkles, ArrowDown, Building } from 'lucide-react';

const EASE = [0.22, 0.61, 0.36, 1] as const;

export const CommunitySection: React.FC = () => {
  const reduce = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<'all' | 'members' | 'responders' | 'safePlaces'>('all');

  return (
    <section id="community-presence" className="relative select-none text-[#202020]">
      
      {/* =========================================================================
          CREAM GRID MAIN INTERACTIVE RADAR MAP CANVAS
          ========================================================================= */}
      <div
        id="community-radar-main"
        className="relative bg-[#F5F0E8] border-t-2 border-b-2 border-[#202020] min-h-[calc(100svh-4rem)] max-h-[960px] flex flex-col justify-between pt-8 sm:pt-10 pb-12 sm:pb-14 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(122, 41, 72, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122, 41, 72, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      >
        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full my-auto">
          
          {/* Main Title Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5">
            <div className="flex items-center gap-2.5">
              <span className="text-xl sm:text-2xl text-[#7A2948] font-editorial-serif">♡</span>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-[#202020]">
                YOUR COMMUNITY IS CLOSER THAN YOU THINK.
              </h3>
            </div>

            <div className="flex items-center gap-2 font-editorial-serif italic text-xs sm:text-sm text-[#7A2948]">
              <span>close enough to help, never</span>
              <span className="underline decoration-[#7A2948] decoration-2 underline-offset-4">
                close enough to track
              </span>
              <span>♡</span>
            </div>
          </div>


            {/* THE GIANT INTERACTIVE RADAR MAP CARD */}
          <div className="relative bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl sm:rounded-4xl p-4 sm:p-6 shadow-[10px_12px_0px_#1d1d1d] overflow-hidden">
            
            {/* Yellow washi tape on top right */}
            <div
              className="absolute -top-3.5 right-12 w-24 h-7 bg-[#F4E58C] border border-[#202020]/40 rotate-[-2deg] shadow-xs z-30 pointer-events-none"
              aria-hidden="true"
            />

            {/* TOP GLASS HUD / FILTER BAR */}
            <div className="relative z-30 bg-[#FFFDF9]/95 backdrop-blur-sm border-2 border-[#202020] rounded-2xl p-3 sm:p-3.5 shadow-[3px_3px_0px_#1d1d1d] max-w-md mb-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#202020]">
                  AROUND YOU
                </span>
                <span className="bg-[#D6E8DC] text-[#2D5A43] border border-[#202020] px-2 py-0.5 rounded-full text-[9px] font-black uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A43] animate-pulse" />
                  Live Radar
                </span>
              </div>

              <div className="text-[11px] font-bold text-[#202020]/80 mt-0.5">
                12 ShieldHER members · 3 verified responders · 4 safe places
              </div>

              <div className="flex items-center gap-1.5 text-[9.5px] font-extrabold text-[#7A2948] mt-0.5">
                <Lock className="w-2.5 h-2.5" />
                <span>Exact positions protected by privacy clusters</span>
              </div>

              {/* Filter Toggles */}
              <div className="flex flex-wrap items-center gap-2 mt-2 pt-2 border-t border-[#202020]/15">
                <button
                  type="button"
                  onClick={() => setActiveFilter(activeFilter === 'members' ? 'all' : 'members')}
                  className={`px-2.5 py-0.5 rounded-full border-1.5 border-[#202020] text-[9.5px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === 'members' || activeFilter === 'all'
                      ? 'bg-[#7A2948] text-[#FFFDF9] shadow-[2px_2px_0px_#1d1d1d]'
                      : 'bg-[#FFFDF9] text-[#202020]'
                  }`}
                >
                  Members
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter(activeFilter === 'responders' ? 'all' : 'responders')}
                  className={`px-2.5 py-0.5 rounded-full border-1.5 border-[#202020] text-[9.5px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === 'responders' || activeFilter === 'all'
                      ? 'bg-[#2D5A43] text-[#FFFDF9] shadow-[2px_2px_0px_#1d1d1d]'
                      : 'bg-[#FFFDF9] text-[#202020]'
                  }`}
                >
                  Responders
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter(activeFilter === 'safePlaces' ? 'all' : 'safePlaces')}
                  className={`px-2.5 py-0.5 rounded-full border-1.5 border-[#202020] text-[9.5px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === 'safePlaces' || activeFilter === 'all'
                      ? 'bg-[#F4E58C] text-[#202020] shadow-[2px_2px_0px_#1d1d1d]'
                      : 'bg-[#FFFDF9] text-[#202020]'
                  }`}
                >
                  Safe Places
                </button>
              </div>
            </div>

            {/* THE BIG MAP STAGE */}
            <div className="relative h-[360px] sm:h-[420px] w-full rounded-2xl sm:rounded-3xl border-2 border-[#202020]/25 bg-[#FAF7F2] overflow-hidden">
              
              {/* Detailed River, Blocks & Grid SVGs */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" fill="none">
                {/* Winding Blue River */}
                <path
                  d="M -20 480 C 200 450, 420 540, 680 490 C 840 460, 920 490, 1040 500 L 1040 620 L -20 620 Z"
                  fill="#C9DFEA"
                  opacity="0.8"
                />

                {/* City Blocks (Subtle fills) */}
                <rect x="80" y="60" width="120" height="90" rx="6" fill="#EAE4DC" opacity="0.6" />
                <rect x="230" y="50" width="140" height="80" rx="6" fill="#EAE4DC" opacity="0.6" />
                <rect x="400" y="40" width="160" height="90" rx="6" fill="#EAE4DC" opacity="0.6" />
                <rect x="680" y="60" width="140" height="100" rx="6" fill="#EAE4DC" opacity="0.6" />
                <rect x="100" y="240" width="140" height="110" rx="6" fill="#EAE4DC" opacity="0.6" />
                <rect x="740" y="220" width="160" height="120" rx="6" fill="#EAE4DC" opacity="0.6" />

                {/* Parks */}
                <rect x="490" y="260" width="90" height="90" rx="18" fill="#D6E8DC" opacity="0.65" />

                {/* Street Grid Lines */}
                <path d="M 60 20 L 70 580" stroke="#DCD6CD" strokeWidth="4" />
                <path d="M 220 20 L 210 580" stroke="#DCD6CD" strokeWidth="5" />
                <path d="M 380 20 L 390 580" stroke="#DCD6CD" strokeWidth="4.5" />
                <path d="M 590 20 L 580 580" stroke="#DCD6CD" strokeWidth="5" />
                <path d="M 760 20 L 770 580" stroke="#DCD6CD" strokeWidth="4" />
                <path d="M 910 20 L 900 580" stroke="#DCD6CD" strokeWidth="4" />
                <path d="M 20 160 L 980 150" stroke="#DCD6CD" strokeWidth="4.5" />
                <path d="M 20 290 L 980 300" stroke="#DCD6CD" strokeWidth="5" />
                <path d="M 20 420 L 980 410" stroke="#DCD6CD" strokeWidth="4" />

                {/* Big Radar Pulse Rings around YOU (Center cx=540, cy=300) */}
                <circle cx="540" cy="300" r="190" fill="#F3A9BC" fillOpacity="0.14" stroke="#F3A9BC" strokeWidth="2" strokeDasharray="6 6" />
                <circle cx="540" cy="300" r="115" fill="#F3A9BC" fillOpacity="0.28" stroke="#B63A5B" strokeWidth="2" />
                <circle cx="540" cy="300" r="44" fill="#7A2948" stroke="#202020" strokeWidth="2.5" />

                {/* Main Connected Safety Route */}
                <path
                  d="M 330 520 L 410 390 L 540 300 L 670 330 L 800 160"
                  stroke="#7A2948"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* CENTER: YOU AVATAR / BADGE */}
              <div className="absolute top-[50%] left-[54%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <span className="text-sm font-black tracking-widest text-[#FFFDF9]">
                  YOU
                </span>
                <span className="text-[10px] font-bold text-[#F3A9BC] mt-0.5">
                  ● Live
                </span>
              </div>

              {/* CLUSTER 1: CENTRAL (14 members) */}
              <div className="absolute top-[28%] left-[41%] z-20 bg-[#FFFDF9] border-2 border-[#202020] rounded-full px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-[#D7C4E8] flex items-center justify-center text-xs">👥</div>
                <div className="leading-tight">
                  <div className="text-[9px] font-black uppercase text-[#7A2948]">Central</div>
                  <div className="text-[10px] font-extrabold text-[#202020]">14 members</div>
                </div>
              </div>

              {/* CLUSTER 2: ST. MARY'S (8 members) */}
              <div className="absolute top-[52%] left-[64%] z-20 bg-[#FFFDF9] border-2 border-[#202020] rounded-full px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-[#F3A9BC] flex items-center justify-center text-xs">👥</div>
                <div className="leading-tight">
                  <div className="text-[9px] font-black uppercase text-[#7A2948]">St. Mary's</div>
                  <div className="text-[10px] font-extrabold text-[#202020]">8 members</div>
                </div>
              </div>

              {/* CLUSTER 3: APOLLO (9 members) */}
              <div className="absolute bottom-[22%] left-[32%] z-20 bg-[#FFFDF9] border-2 border-[#202020] rounded-full px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-[#F4E58C] flex items-center justify-center text-xs">👥</div>
                <div className="leading-tight">
                  <div className="text-[9px] font-black uppercase text-[#7A2948]">Apollo</div>
                  <div className="text-[10px] font-extrabold text-[#202020]">9 members</div>
                </div>
              </div>

              {/* POI: METRO STATION */}
              <div className="absolute top-[16%] right-[18%] z-20 bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
                <Train className="w-4 h-4 text-[#202020]" />
                <div className="leading-tight">
                  <div className="text-[10px] font-black uppercase text-[#202020]">Metro Station</div>
                  <div className="text-[9px] font-bold text-[#7A2948]">4 mins away</div>
                </div>
              </div>

              {/* POI: THE COFFEE CLUB */}
              <div className="absolute bottom-[12%] left-[38%] z-20 bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
                <Coffee className="w-4 h-4 text-[#B63A5B]" />
                <div className="leading-tight">
                  <div className="text-[10px] font-black uppercase text-[#202020]">The Coffee Club</div>
                  <div className="text-[9px] font-bold text-[#7A2948]">2 mins away</div>
                </div>
              </div>

              {/* POI: PHARMACY */}
              <div className="absolute top-[46%] right-[10%] z-20 bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
                <Plus className="w-4 h-4 text-[#2D5A43] font-black" />
                <div className="leading-tight">
                  <div className="text-[10px] font-black uppercase text-[#202020]">Pharmacy</div>
                  <div className="text-[9px] font-bold text-[#2D5A43]">Open</div>
                </div>
              </div>

              {/* POI: CIVIC CENTER */}
              <div className="absolute bottom-[16%] right-[20%] z-20 bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl px-3 py-1.5 shadow-[3px_3px_0px_#1d1d1d] hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
                <Building className="w-4 h-4 text-[#202020]" />
                <div className="text-[10px] font-black uppercase text-[#202020]">Civic Center</div>
              </div>

              {/* VERIFIED RESPONDER SHIELDS */}
              <div className="absolute top-[18%] left-[64%] z-20 w-7 h-7 rounded-full bg-[#E2EFE7] border-2 border-[#202020] flex items-center justify-center shadow-xs">
                <Shield className="w-3.5 h-3.5 text-[#2D5A43] fill-[#2D5A43]" />
              </div>
              <div className="absolute top-[48%] left-[44%] z-20 w-7 h-7 rounded-full bg-[#E2EFE7] border-2 border-[#202020] flex items-center justify-center shadow-xs">
                <Shield className="w-3.5 h-3.5 text-[#2D5A43] fill-[#2D5A43]" />
              </div>
              <div className="absolute bottom-[30%] right-[28%] z-20 w-7 h-7 rounded-full bg-[#E2EFE7] border-2 border-[#202020] flex items-center justify-center shadow-xs">
                <Shield className="w-3.5 h-3.5 text-[#2D5A43] fill-[#2D5A43]" />
              </div>

              {/* HAZARD / LIVE ACTIVITY BADGE */}
              <div className="absolute top-[26%] right-[14%] z-20 w-6 h-6 rounded-full bg-[#F4E58C] border border-[#202020] flex items-center justify-center shadow-xs">
                <AlertTriangle className="w-3.5 h-3.5 text-[#7A2948]" />
              </div>

              {/* FLOATING LEGEND CARD (Bottom Left) */}
              <div className="absolute bottom-4 left-4 z-30 bg-[#FFFDF9]/95 backdrop-blur-xs border-2 border-[#202020] rounded-2xl p-3 shadow-[4px_4px_0px_#1d1d1d] space-y-1.5">
                <div className="flex items-center gap-2 text-[10px] font-black text-[#202020]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7A2948]" />
                  <span>ShieldHER Members (Approximate)</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-[#202020]">
                  <Shield className="w-3 h-3 text-[#2D5A43] fill-[#2D5A43]" />
                  <span>Verified Responders</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-[#202020]">
                  <Plus className="w-3 h-3 text-[#2D5A43]" />
                  <span>Safe Places</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-[#202020]">
                  <Train className="w-3 h-3 text-[#202020]" />
                  <span>Metro / Transit</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-[#202020]">
                  <AlertTriangle className="w-3 h-3 text-[#B63A5B]" />
                  <span>Live Activity</span>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================================================
              BOTTOM PINK PAPER SCRAP NOTE STRIP
              ========================================================================= */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            className="mt-12 sm:mt-16"
          >
            <div className="relative bg-[#F3A9BC] border-2 border-[#202020] rounded-2xl p-5 sm:p-7 shadow-[6px_6px_0px_#1d1d1d] rotate-[-0.6deg]">
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                {/* Left: Heart + Real People */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl sm:text-5xl font-editorial-serif text-[#7A2948] select-none">
                    ♡
                  </span>
                  <div>
                    <p className="text-lg sm:text-xl font-black uppercase text-[#7A2948] leading-tight">
                      Real people. Real places.
                    </p>
                    <p className="text-lg sm:text-xl font-black uppercase text-[#7A2948] leading-tight">
                      Real-time community care.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-[#7A2948]/30" />

                {/* Right: Paragraph + Sparkle */}
                <div className="flex items-center gap-4 max-w-xl">
                  <p className="text-xs sm:text-sm font-bold text-[#202020] leading-relaxed">
                    ShieldHER connects you with your circle, trusted responders and safe places — so help is always close, if you need it.
                  </p>
                  <div className="hidden sm:flex flex-col items-center gap-1 text-[#7A2948]">
                    <span className="text-xl">✧</span>
                    <span className="text-sm">✦</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
