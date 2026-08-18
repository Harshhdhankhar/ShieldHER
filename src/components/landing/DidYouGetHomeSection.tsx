'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Clock, MoreVertical, MessageCircle, ArrowDown } from 'lucide-react';

const EASE = [0.22, 0.61, 0.36, 1] as const;

export const DidYouGetHomeSection: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="did-you-get-home"
      className="relative bg-[#C2DCEB] text-[#202020] select-none min-h-[calc(100svh-4rem)] max-h-[920px] flex flex-col justify-between pt-8 sm:pt-10 pb-12 sm:pb-14 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 15% 15%, rgba(243, 169, 188, 0.28) 0%, transparent 45%),
          radial-gradient(ellipse at 85% 25%, rgba(244, 229, 140, 0.25) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 85%, rgba(201, 223, 234, 0.5) 0%, transparent 50%),
          linear-gradient(145deg, #C7E0EE 0%, #B8D6E8 40%, #C3DFEF 100%)
        `,
      }}
    >
      {/* Organic Paper Speckle Texture & Grain Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(rgba(32, 32, 32, 0.12) 0.85px, transparent 0.85px), radial-gradient(rgba(122, 41, 72, 0.08) 0.85px, transparent 0.85px)`,
          backgroundSize: '16px 16px, 28px 28px',
          backgroundPosition: '0 0, 8px 14px',
        }}
        aria-hidden="true"
      />

      {/* Floating Scrapbook Accent Doodles (Stars, Sparkles, Hearts) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
        <span className="absolute top-[12%] left-[8%] text-base text-[#7A2948]/35 font-serif rotate-12">✧</span>
        <span className="absolute top-[28%] left-[4%] text-xs text-[#B63A5B]/30 font-sans rotate-[-15deg]">♥</span>
        <span className="absolute top-[8%] right-[14%] text-sm text-[#7A2948]/30 font-serif -rotate-12">✦</span>
        <span className="absolute top-[48%] right-[5%] text-lg text-[#7A2948]/25 font-editorial-serif rotate-45">♡</span>
        <span className="absolute bottom-[24%] left-[6%] text-sm text-[#7A2948]/30 font-serif rotate-6">✧</span>
        <span className="absolute bottom-[35%] right-[10%] text-xs text-[#B63A5B]/30 font-sans rotate-12">★</span>
      </div>

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* =========================================================================
            MAIN SPREAD: GROUP CHAT (LEFT) & SCRAPBOOK POLAROID (RIGHT)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mt-3 sm:mt-5">
          
          {/* ======================= LEFT: HEADLINE & INTRO ======================= */}
          <div className="lg:col-span-5 relative z-10">
            {/* Pill Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] rounded-full px-4 py-1.5 shadow-[3px_3px_0px_#202020] -rotate-1 cursor-default hover:rotate-0 hover:scale-105 transition-all"
            >
              <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC] shrink-0" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
                OUR HEART & SOUL
              </span>
            </motion.div>

            {/* Headline — Crisp & Editorial */}
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="mt-3 text-[clamp(2.4rem,4.4vw,4.2rem)] leading-[0.82] font-black uppercase tracking-tight text-[#202020]"
            >
              FOR THE
              <span className="block font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.12em] tracking-tight mt-0.5">
                “did you get
                <br />
                home?”
              </span>
              <span className="block mt-0.5">GIRLS.</span>
            </motion.h2>

            {/* Subhead with Arrow pointer */}
            <div className="relative mt-4 sm:mt-5">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                className="max-w-sm"
              >
                <p className="text-base sm:text-lg font-extrabold text-[#202020] leading-snug">
                  The group chat was already doing the job.
                </p>
                <p className="font-editorial-serif italic text-lg sm:text-xl text-[#7A2948] font-normal mt-0.5 relative inline-block">
                  We just made it smarter.
                  {/* Underline */}
                  <svg
                    className="absolute -bottom-1 inset-x-0 w-full h-2 text-[#7A2948] pointer-events-none overflow-visible"
                    viewBox="0 0 160 8"
                    fill="none"
                  >
                    <path
                      d="M 2 5 C 40 2, 100 2, 158 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </p>
              </motion.div>

              {/* Hand-drawn spiral arrow pointing to polaroid */}
              <div className="hidden lg:block absolute -right-6 top-1 pointer-events-none text-[#7A2948]">
                <svg className="w-12 h-16 overflow-visible" viewBox="0 0 50 60" fill="none">
                  <path
                    d="M 10 50 C 4 35, 12 20, 24 22 C 34 24, 28 42, 18 36 C 8 30, 25 10, 45 15"
                    stroke="#7A2948"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 40 10 L 46 16 L 38 20"
                    stroke="#7A2948"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ======================= RIGHT: POLAROID & THE BIG CHAT WINDOW ======================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            
            {/* 1. POLAROID FRIENDSHIP PHOTO (Tilted Left, Layered Under/Beside Chat) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -20, rotate: -4 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="relative z-10 w-[14rem] sm:w-[17.5rem] shrink-0 -mr-12 sm:-mr-20 lg:-mr-16 group cursor-default"
            >
              {/* Yellow washi tape at top */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#F4E58C] border border-[#202020]/40 rotate-[2deg] shadow-xs z-30 pointer-events-none"
                aria-hidden="true"
              />

              {/* Polaroid Frame */}
              <div className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-xs p-3 pb-8 shadow-[6px_7px_0px_#1d1d1d] group-hover:shadow-[9px_10px_0px_#1d1d1d] group-hover:-translate-y-1 group-hover:rotate-0 transition-all duration-300">
                {/* Photo */}
                <div className="relative aspect-[4/4.2] w-full overflow-hidden border border-[#202020]/25 bg-[#FAF7F2]">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=800"
                    alt="Girlfriends walking home safely together"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Caption */}
                <p className="absolute bottom-1.5 inset-x-0 text-center font-editorial-serif italic text-sm sm:text-base text-[#7A2948]">
                  made it home safe ♡
                </p>
              </div>

              {/* Little attached heart sticker on bottom-right corner of polaroid */}
              <div className="absolute -bottom-3 -right-3 z-30 bg-[#FFFDF9] border-2 border-[#202020] rounded-md px-2 py-1 rotate-12 shadow-[2px_2px_0px_#1d1d1d] group-hover:rotate-0 transition-transform">
                <span className="font-editorial-serif text-lg text-[#7A2948] leading-none block">
                  ♡
                </span>
              </div>
            </motion.div>

            {/* 2. THE BIG LIVING GROUP CHAT MOCKUP WINDOW */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20, rotate: 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              className="relative z-20 w-full max-w-[22rem] sm:max-w-[27rem]"
            >
              {/* Pink burst doodles on top-left and bottom-right */}
              <div className="absolute -top-4 -left-3 text-[#F3A9BC] text-sm font-black rotate-[-20deg] pointer-events-none">
                \ | /
              </div>
              <div className="absolute -bottom-3 -right-4 text-[#F3A9BC] text-sm font-black rotate-12 pointer-events-none">
                \ | /
              </div>

              {/* Taped label on top-right: "she always asks ♡" */}
              <div className="absolute -top-3.5 right-4 z-40 bg-[#F4E58C] border border-[#202020] px-3 py-0.5 rounded-sm rotate-[-2deg] shadow-xs pointer-events-none">
                <span className="font-editorial-serif italic text-xs font-bold text-[#7A2948]">
                  she always asks ♡
                </span>
              </div>

              {/* Main White Chat Container */}
              <div className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-4 sm:p-6 shadow-[10px_12px_0px_#1d1d1d]">
                
                {/* Chat Top Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#202020]/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#F3A9BC] border-2 border-[#202020] flex items-center justify-center shadow-xs">
                      <MessageCircle className="w-4.5 h-4.5 text-[#202020]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#202020] flex items-center gap-1">
                        <span>THE GIRLS GC</span>
                        <span className="text-[#7A2948]">♥</span>
                      </div>
                      <div className="text-[10px] font-bold text-[#202020]/75 flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4E7B62]" />
                        <span>4 members active</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#F4E58C] border border-[#202020] rounded-md px-2 py-0.5 text-[9.5px] font-extrabold text-[#202020] flex items-center gap-1 shadow-xs">
                      <Clock className="w-2.5 h-2.5" /> 11:42 PM
                    </span>
                    <MoreVertical className="w-4 h-4 text-[#202020]/60" />
                  </div>
                </div>

                {/* Chat Bubbles Stream */}
                <div className="mt-4 space-y-3">
                  
                  {/* 1. MOM */}
                  <div className="flex items-start gap-2">
                    <div className="relative w-7 h-7 rounded-full border-1.5 border-[#202020] overflow-hidden bg-[#FAF7F2] shrink-0 mt-0.5">
                      <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=75&w=64"
                        alt="Mom"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-[#FFFDF9] border-1.5 border-[#202020] rounded-2xl rounded-tl-xs px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] max-w-[80%]">
                      <div className="text-[8px] uppercase font-black tracking-wider text-[#7A2948]">
                        MOM · 7:42 PM
                      </div>
                      <div className="text-xs sm:text-[13px] font-extrabold text-[#202020] mt-0.5">
                        call when you reach ♡
                      </div>
                    </div>
                  </div>

                  {/* 2. YOU (Yellow on Right) */}
                  <div className="flex items-start justify-end gap-2">
                    <div className="bg-[#F4E58C] border-1.5 border-[#202020] rounded-2xl rounded-tr-xs px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] max-w-[75%] text-left">
                      <div className="text-[8px] uppercase font-black tracking-wider text-[#7A2948]">
                        YOU · 7:43 PM
                      </div>
                      <div className="text-xs sm:text-[13px] font-extrabold text-[#202020] flex items-center justify-between gap-3 mt-0.5">
                        <span>5 mins</span>
                        <span className="text-[#7A2948] font-black text-xs">✓✓</span>
                      </div>
                    </div>
                    <div className="relative w-7 h-7 rounded-full border-1.5 border-[#202020] overflow-hidden bg-[#FAF7F2] shrink-0 mt-0.5">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=64"
                        alt="You"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* 3. RIYA 1 */}
                  <div className="flex items-start gap-2">
                    <div className="relative w-7 h-7 rounded-full border-1.5 border-[#202020] overflow-hidden bg-[#FAF7F2] shrink-0 mt-0.5">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=64"
                        alt="Riya"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-[#F3A9BC] border-1.5 border-[#202020] rounded-2xl rounded-tl-xs px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] max-w-[80%]">
                      <div className="text-[8px] uppercase font-black tracking-wider text-[#7A2948]">
                        RIYA · 7:43 PM
                      </div>
                      <div className="text-xs sm:text-[13px] font-extrabold text-[#202020] mt-0.5">
                        where are youuu
                      </div>
                    </div>
                  </div>

                  {/* 4. RIYA 2 */}
                  <div className="flex items-start gap-2">
                    <div className="relative w-7 h-7 rounded-full border-1.5 border-[#202020] overflow-hidden bg-[#FAF7F2] shrink-0 mt-0.5">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=64"
                        alt="Riya"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-[#F3A9BC] border-1.5 border-[#202020] rounded-2xl rounded-tl-xs px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] max-w-[85%]">
                      <div className="text-[8px] uppercase font-black tracking-wider text-[#7A2948]">
                        RIYA · 7:53 PM
                      </div>
                      <div className="text-xs sm:text-[13px] font-extrabold text-[#202020] mt-0.5">
                        you said that 10 mins ago 😭
                      </div>
                    </div>
                  </div>

                  {/* 5. Typing indicator */}
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#7A2948] pt-1 pl-9">
                    <span className="animate-bounce">•••</span>
                    <span>Riya & Mom are typing...</span>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* =========================================================================
            BOTTOM CAPSULE BANNER
            ========================================================================= */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="mt-5 sm:mt-7"
        >
          <div className="relative bg-[#FFFDF9] border-2.5 border-[#202020] rounded-full px-5 sm:px-8 py-3.5 sm:py-4 shadow-[6px_6px_0px_#1d1d1d] flex flex-wrap items-center justify-between gap-4">
            
            {/* Left: Yellow Heart Badge + Main Sentence */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#F4E58C] border-2 border-[#202020] flex items-center justify-center shrink-0 shadow-xs">
                <Heart className="w-4.5 h-4.5 fill-[#7A2948] text-[#7A2948]" />
              </div>
              <p className="text-sm sm:text-lg font-black uppercase tracking-tight text-[#202020]">
                YOU WERE ALREADY LOOKING OUT FOR EACH OTHER.
              </p>
            </div>

            {/* Right: Burgundy italic script + faint heart */}
            <div className="flex items-center gap-3 sm:ml-auto">
              <span className="font-editorial-serif italic text-lg sm:text-2xl text-[#7A2948] font-normal">
                we just connected the dots.
              </span>
              <span className="text-2xl text-[#F4E58C] font-editorial-serif font-normal select-none pointer-events-none">
                ♡
              </span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* =========================================================================
          TORN PAPER BOTTOM EDGE WITH DOWN ARROW TRANSITION
          ========================================================================= */}
      <div className="absolute -bottom-1 inset-x-0 w-full flex flex-col items-center pointer-events-none z-30">
        
        {/* Torn paper SVG strip */}
        <div className="w-full h-8 overflow-hidden">
          <svg
            className="w-full h-full text-[#FFFDF9]"
            viewBox="0 0 1200 30"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 Q30,12 60,4 Q90,20 120,6 Q150,16 180,5 Q210,18 240,4 Q270,16 300,6 Q330,22 360,8 Q390,18 420,5 Q450,15 480,4 Q510,20 540,6 Q570,16 600,4 Q630,22 660,8 Q690,16 720,4 Q750,18 780,6 Q810,22 840,8 Q870,16 900,4 Q930,20 960,6 Q990,16 1020,4 Q1050,18 1080,6 Q1110,22 1140,8 Q1170,16 1200,4 L1200,30 L0,30 Z" />
          </svg>
        </div>

        {/* Circular Down Arrow Button in Center */}
        <div className="absolute -top-4 pointer-events-auto">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('community-presence') || document.getElementById('footer');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-10 h-10 rounded-full bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] shadow-[3px_3px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-4 h-4 text-[#FFFDF9]" />
          </button>
        </div>

      </div>

    </section>
  );
};
