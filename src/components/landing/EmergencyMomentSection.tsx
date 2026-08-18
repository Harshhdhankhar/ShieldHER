'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldAlert, Bell, Mic, Users, CheckCircle2, Shield, Radio, Volume2, ArrowRight, Heart } from 'lucide-react';

const EASE = [0.22, 0.61, 0.36, 1] as const;

export const EmergencyMomentSection: React.FC = () => {
  const reduce = useReducedMotion();
  const [isTriggered, setIsTriggered] = useState(false);

  return (
    <section
      id="emergency-protocol"
      className="relative bg-[#200F17] text-[#FFFDF9] border-y-2 border-[#202020] select-none min-h-[calc(100svh-4rem)] max-h-[940px] flex flex-col justify-between pt-7 sm:pt-9 pb-10 sm:pb-12 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 80% 20%, rgba(182, 58, 91, 0.25) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(243, 169, 188, 0.12) 0%, transparent 45%),
          radial-gradient(rgba(243, 169, 188, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 24px 24px',
      }}
    >
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full my-auto">
        
        {/* =========================================================================
            TOP ROW: HEADLINE (LEFT) + SOS INTERACTIVE TRIGGER (RIGHT)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pb-5 border-b border-[#FFFDF9]/15">
          
          {/* ======================= LEFT: HEADLINE & BADGE ======================= */}
          <div className="lg:col-span-6 relative z-10">
            {/* Red Alert Pill */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[#B63A5B] text-[#FFFDF9] border-2 border-[#202020] rounded-full px-3.5 py-1 shadow-[3px_3px_0px_#1d1d1d] -rotate-1 cursor-default hover:rotate-0 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFFDF9] animate-ping" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
                INSTANT DISPATCH PROTOCOL
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="mt-2 text-[clamp(2.4rem,4.6vw,4.0rem)] leading-[0.82] font-black uppercase tracking-tight text-[#FFFDF9]"
            >
              SOMETHING
              <span className="block font-editorial-serif italic font-normal text-[#F3A9BC] lowercase text-[1.12em] tracking-tight mt-0.5">
                doesn't feel
              </span>
              <span className="relative inline-block mt-0.5">
                RIGHT?
                <span className="inline-block ml-1.5 text-[0.7em] font-editorial-serif text-[#F3A9BC] font-normal align-middle">
                  ♡
                </span>
                {/* Pink burst lines behind heart */}
                <span className="absolute -top-2.5 -right-5 text-xs text-[#F3A9BC] font-black rotate-12 pointer-events-none">
                  \ | /
                </span>
              </span>
            </motion.h2>

            {/* Taped Butter-Yellow Note */}
            <div className="relative inline-block mt-3 bg-[#F4E58C] text-[#202020] border-2 border-[#202020] rounded-xs px-3 py-1 shadow-[3px_3px_0px_#1d1d1d] rotate-[-1deg]">
              <div className="absolute -top-2 left-4 w-9 h-3.5 bg-[#F3A9BC] border border-[#202020]/40 rotate-[-8deg] shadow-xs pointer-events-none" />
              <p className="font-editorial-serif italic text-xs sm:text-sm text-[#7A2948] font-bold">
                “one tap. zero hesitation. instant quiet protection. ♡”
              </p>
            </div>
          </div>

          {/* ======================= RIGHT: SOS TRIGGER CARD ======================= */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="w-full max-w-md bg-[#2C1521] border-2.5 border-[#202020] rounded-3xl p-4 sm:p-5 shadow-[8px_8px_0px_#1d1d1d] relative"
            >
              {/* Tape */}
              <div className="absolute -top-3 right-6 bg-[#F3A9BC] text-[#7A2948] border border-[#202020]/40 px-2.5 py-0.5 rounded-xs text-[9px] font-black uppercase tracking-wider shadow-xs rotate-1 pointer-events-none">
                🔒 DISCREET TRIGGER
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-[#FFFDF9]/15">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#F3A9BC]">
                    HIGH-CLARITY ACTION
                  </div>
                  <div className="text-sm font-black text-[#FFFDF9] mt-0.5">
                    Encrypted SOS Broadcast
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full border border-[#202020] text-[9px] font-black uppercase ${
                  isTriggered ? 'bg-[#4E7B62] text-[#FFFDF9] animate-pulse' : 'bg-[#F4E58C] text-[#202020]'
                }`}>
                  {isTriggered ? '● LIVE BROADCAST' : 'READY TO TRIGGER'}
                </span>
              </div>

              {/* Interactive Big SOS Button */}
              <div className="mt-3.5">
                <button
                  type="button"
                  onClick={() => setIsTriggered(!isTriggered)}
                  className={`w-full py-3.5 px-5 rounded-2xl border-2 border-[#202020] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-[4px_4px_0px_#1d1d1d] active:translate-y-0.5 cursor-pointer ${
                    isTriggered
                      ? 'bg-[#4E7B62] text-[#FFFDF9] hover:bg-[#3D6650]'
                      : 'bg-[#B63A5B] hover:bg-[#9E2B4B] text-[#FFFDF9] hover:shadow-[6px_6px_0px_#1d1d1d] hover:-translate-y-0.5'
                  }`}
                >
                  <ShieldAlert className="w-5 h-5 animate-pulse" />
                  <span>{isTriggered ? 'SOS ACTIVE — CLICK TO RESET' : 'I NEED HELP NOW ♡'}</span>
                </button>
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[10.5px] text-[#F3A9BC]">
                <span className="font-editorial-serif italic">Silent mode: no sirens, no screens flashing</span>
                <span className="font-bold">100% Encrypted</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* =========================================================================
            CENTER: 3 DISPATCH SEQUENCE CARDS
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-6 sm:mt-7">
          
          {/* STEP 1: 0.2s Circle Dispatched */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className={`bg-[#2C1521] border-2 border-[#202020] rounded-3xl p-4 sm:p-5 shadow-[5px_5px_0px_#1d1d1d] transition-all ${
              isTriggered ? 'ring-2 ring-[#F3A9BC] bg-[#3B1C2D]' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-full bg-[#F3A9BC] border-1.5 border-[#202020] flex items-center justify-center text-[#7A2948] shadow-xs">
                <Bell className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-black uppercase text-[#F3A9BC] bg-[#200F17] px-2 py-0.5 rounded-full border border-[#FFFDF9]/20">
                0.2s · STEP 1
              </span>
            </div>

            <h3 className="text-sm font-black text-[#FFFDF9] mt-3">
              Circle Notified & GPS Shared
            </h3>
            <p className="text-xs text-[#FFFDF9]/80 leading-relaxed mt-1">
              Mom, Riya & your trusted inner circle receive instant silent alerts with live GPS coordinates.
            </p>

            <div className="mt-3.5 pt-2.5 border-t border-[#FFFDF9]/10 flex items-center justify-between text-[10px] font-extrabold text-[#F3A9BC]">
              <span>Silent vibration trigger</span>
              <span className="text-[#4E7B62] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified</span>
              </span>
            </div>
          </motion.div>

          {/* STEP 2: 0.8s Encrypted Breadcrumbs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22, ease: EASE }}
            className={`bg-[#2C1521] border-2 border-[#202020] rounded-3xl p-4 sm:p-5 shadow-[5px_5px_0px_#1d1d1d] transition-all ${
              isTriggered ? 'ring-2 ring-[#F4E58C] bg-[#3B1C2D]' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-full bg-[#F4E58C] border-1.5 border-[#202020] flex items-center justify-center text-[#202020] shadow-xs">
                <Mic className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-black uppercase text-[#F4E58C] bg-[#200F17] px-2 py-0.5 rounded-full border border-[#FFFDF9]/20">
                0.8s · STEP 2
              </span>
            </div>

            <h3 className="text-sm font-black text-[#FFFDF9] mt-3">
              Audio Buffer & Route Lock
            </h3>
            <p className="text-xs text-[#FFFDF9]/80 leading-relaxed mt-1">
              Secure 30-second ambient audio buffer captures key evidence while breadcrumb tracking locks your route.
            </p>

            <div className="mt-3.5 pt-2.5 border-t border-[#FFFDF9]/10 flex items-center justify-between text-[10px] font-extrabold text-[#F4E58C]">
              <span>End-to-end encrypted</span>
              <span className="text-[#4E7B62] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Encrypted</span>
              </span>
            </div>
          </motion.div>

          {/* STEP 3: 1.5s Responders & Safe Havens */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className={`bg-[#2C1521] border-2 border-[#202020] rounded-3xl p-4 sm:p-5 shadow-[5px_5px_0px_#1d1d1d] transition-all ${
              isTriggered ? 'ring-2 ring-[#D6E8DC] bg-[#3B1C2D]' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-full bg-[#D6E8DC] border-1.5 border-[#202020] flex items-center justify-center text-[#2D5A43] shadow-xs">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-black uppercase text-[#D6E8DC] bg-[#200F17] px-2 py-0.5 rounded-full border border-[#FFFDF9]/20">
                1.5s · STEP 3
              </span>
            </div>

            <h3 className="text-sm font-black text-[#FFFDF9] mt-3">
              Local Haven & Responders Alerted
            </h3>
            <p className="text-xs text-[#FFFDF9]/80 leading-relaxed mt-1">
              3 verified female responders within 400m and the nearest 24/7 safe haven store receive emergency pings.
            </p>

            <div className="mt-3.5 pt-2.5 border-t border-[#FFFDF9]/10 flex items-center justify-between text-[10px] font-extrabold text-[#D6E8DC]">
              <span>Average response: 2.1 mins</span>
              <span className="text-[#4E7B62] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Dispatched</span>
              </span>
            </div>
          </motion.div>

        </div>

        {/* =========================================================================
            BOTTOM ROW: DISCREET SENSORS BANNER
            ========================================================================= */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
          className="mt-6 sm:mt-7"
        >
          <div className="bg-[#2C1521] border-2 border-[#202020] rounded-full px-5 sm:px-7 py-2.5 sm:py-3 shadow-[4px_4px_0px_#1d1d1d] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#F3A9BC] border border-[#202020] flex items-center justify-center text-[#7A2948] shrink-0 text-xs shadow-xs">
                🛡
              </span>
              <p className="text-xs sm:text-sm font-black text-[#FFFDF9]">
                Trigger SOS without looking: press volume down 3 times or shake phone in your pocket.
              </p>
            </div>

            <div className="flex items-center gap-2 font-editorial-serif italic text-xs sm:text-sm text-[#F3A9BC] ml-auto">
              <span>always with you, always quiet</span>
              <span>♡</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
