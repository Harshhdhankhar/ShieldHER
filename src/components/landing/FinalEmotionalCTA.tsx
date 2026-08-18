'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Sparkles, Check } from 'lucide-react';

const EASE = [0.22, 0.61, 0.36, 1] as const;

export const FinalEmotionalCTA: React.FC = () => {
  const router = useRouter();
  const reduce = useReducedMotion();

  return (
    <section
      id="final-cta"
      className="relative bg-[#F5F0E8] text-[#202020] border-y-2 border-[#202020] select-none min-h-[calc(100svh-4rem)] max-h-[940px] flex flex-col justify-between py-10 sm:py-12 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 45%, rgba(243, 169, 188, 0.28) 0%, transparent 65%),
          linear-gradient(rgba(122, 41, 72, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(122, 41, 72, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 28px 28px, 28px 28px',
      }}
    >
      {/* Background Decorative Scrapbook Accents */}
      {/* Left Polaroid (Desktop) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -20, rotate: -4 }}
        whileInView={{ opacity: 1, x: 0, rotate: -3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="hidden xl:block absolute top-[18%] left-[4%] pointer-events-none z-10"
      >
        <figure className="bg-[#FFFDF9] border-2 border-[#202020] rounded-xs p-2 pb-4 shadow-[5px_6px_0px_#1d1d1d] w-[13rem] rotate-[-3deg]">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#F4E58C] border border-[#202020]/40 rotate-1 shadow-xs" />
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#202020]/20 bg-[#FAF7F2]">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=82&w=800"
              alt="Friendship"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="text-center font-editorial-serif italic text-xs text-[#7A2948] mt-1">
            made it home safe ♡
          </figcaption>
        </figure>
        <span className="absolute -bottom-3 -right-2 text-2xl select-none filter drop-shadow-sm">
          🍓
        </span>
      </motion.div>

      {/* Right Taped Note (Desktop) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 20, rotate: 4 }}
        whileInView={{ opacity: 1, x: 0, rotate: 2.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="hidden xl:block absolute top-[20%] right-[4%] pointer-events-none z-10"
      >
        <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl p-4 shadow-[5px_6px_0px_#1d1d1d] w-[13.5rem] rotate-[2.5deg]">
          <div className="absolute -top-2.5 right-6 w-14 h-4 bg-[#F3A9BC] border border-[#202020]/40 -rotate-3 shadow-xs" />
          <div className="text-[10px] font-black uppercase tracking-wider text-[#7A2948] flex items-center gap-1">
            <Heart className="w-3 h-3 fill-[#F3A9BC] text-[#F3A9BC]" />
            SAFE JOURNEY CLUB
          </div>
          <p className="font-editorial-serif italic text-xs text-[#202020] mt-1 leading-snug">
            “the ones who’d actually pick up at 2am. ♡”
          </p>
          <div className="mt-2.5 pt-2 border-t border-[#202020]/15 flex items-center justify-between text-[9px] font-extrabold text-[#4E7B62]">
            <span>● 10,000+ members</span>
            <span>Free</span>
          </div>
        </div>
        <span className="absolute -bottom-2 -left-2 text-2xl select-none filter drop-shadow-sm">
          🍒
        </span>
      </motion.div>

      {/* =========================================================================
          CENTER HERO STAGE
          ========================================================================= */}
      <div className="relative max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="inline-flex items-center gap-2 bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] rounded-full px-4 py-1.5 shadow-[3px_3px_0px_#1d1d1d] -rotate-1 cursor-default hover:rotate-0 hover:scale-105 transition-all"
        >
          <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC] shrink-0" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
            YOUR SAFETY NETWORK IS READY
          </span>
        </motion.div>

        {/* Master Headline */}
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          className="mt-3 sm:mt-4 text-[clamp(3.2rem,6.8vw,5.6rem)] leading-[0.80] font-black uppercase tracking-tight text-[#202020]"
        >
          GO
          <br />
          <span className="relative inline-block">
            WHEREVER.
            <span className="absolute -top-2 -right-7 text-sm text-[#7A2948] font-serif rotate-12 pointer-events-none">
              ✧
            </span>
          </span>
          <span className="block font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[0.62em] tracking-tight mt-1 relative">
            just text us when you get there
            <span className="inline-block ml-2 text-[0.8em] font-editorial-serif text-[#7A2948] font-normal align-middle">
              ♡
            </span>
            {/* Wavy Underline */}
            <svg
              className="absolute -bottom-1.5 inset-x-0 w-full h-3 text-[#7A2948] pointer-events-none overflow-visible"
              viewBox="0 0 320 12"
              fill="none"
            >
              <path
                d="M 4 8 C 80 2, 240 2, 316 8"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="mt-4 sm:mt-5 text-[#202020] font-extrabold text-xs sm:text-base leading-relaxed max-w-lg"
        >
          ShieldHER is free to start. Invite your circle in 30 seconds and never walk home alone again.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
          className="mt-5 sm:mt-6 flex flex-col items-center gap-3"
        >
          <button
            type="button"
            onClick={() => router.push('/signup')}
            className="group inline-flex items-center gap-2.5 bg-[#7A2948] hover:bg-[#5E1F36] text-[#FFFDF9] font-black text-xs sm:text-sm uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-[#202020] shadow-[5px_5px_0px_#1d1d1d] hover:shadow-[7px_7px_0px_#1d1d1d] hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-[#F3A9BC] text-[#F3A9BC] group-hover:scale-125 transition-transform" />
            <span>JOIN THE CIRCLE NOW</span>
            <ArrowRight className="w-4 h-4 text-[#FFFDF9] group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Under CTA Info */}
          <div className="flex items-center gap-4 text-[11px] font-bold text-[#202020]/75 mt-1">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#4E7B62]" /> 100% Free to Use
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#4E7B62]" /> Zero Ads or Tracking
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#4E7B62]" /> Private by Design
            </span>
          </div>
        </motion.div>

      </div>

      {/* =========================================================================
          BOTTOM CAPTION STRIP
          ========================================================================= */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full mt-4">
        <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-full px-5 sm:px-7 py-2.5 sm:py-3 shadow-[4px_4px_0px_#1d1d1d] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-[#F4E58C] border border-[#202020] flex items-center justify-center text-[#202020] shrink-0 text-xs shadow-xs">
              ★
            </span>
            <p className="text-xs sm:text-sm font-black text-[#202020]">
              Available on iOS & Android · Trusted by thousands of women across India.
            </p>
          </div>

          <div className="flex items-center gap-2 font-editorial-serif italic text-xs sm:text-sm text-[#7A2948] ml-auto">
            <span>your journey, always protected</span>
            <span>♡</span>
          </div>
        </div>
      </div>

    </section>
  );
};
