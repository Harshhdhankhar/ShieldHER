'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Star, Sparkles, MessageCircle, MapPin, Quote } from 'lucide-react';

const EASE = [0.22, 0.61, 0.36, 1] as const;

interface NoteCard {
  id: string;
  quote: string;
  author: string;
  role: string;
  city: string;
  avatar: string;
  bg: string;
  tapeColor: string;
  tapeRotate: string;
  sticker: string;
  tilt: string;
}

const ROW_1_NOTES: NoteCard[] = [
  {
    id: 'n1',
    quote: 'my mom finally stopped asking me to send my live location every 10 minutes.',
    author: 'Ananya Sharma',
    role: 'Student',
    city: 'Delhi University',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=75&w=96',
    bg: 'bg-[#FFFDF9]',
    tapeColor: 'bg-[#F3A9BC]',
    tapeRotate: '-rotate-3',
    sticker: '🌸',
    tilt: 'rotate-[-1deg]',
  },
  {
    id: 'n2',
    quote: "it's basically the group chat, but actually useful and keeps us connected without anxiety.",
    author: 'Riya Sen',
    role: 'Product Designer',
    city: 'Bangalore',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=75&w=96',
    bg: 'bg-[#F4E58C]',
    tapeColor: 'bg-[#F3A9BC]',
    tapeRotate: 'rotate-2',
    sticker: '🍓',
    tilt: 'rotate-[1.5deg]',
  },
  {
    id: 'n3',
    quote: 'knowing 12 ShieldHER girls are nearby makes the late walk back from library feel so light.',
    author: 'Tanvi Deshmukh',
    role: 'Architecture Student',
    city: 'Pune',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=75&w=96',
    bg: 'bg-[#C9DFEA]',
    tapeColor: 'bg-[#F4E58C]',
    tapeRotate: '-rotate-2',
    sticker: '🫐',
    tilt: 'rotate-[-0.5deg]',
  },
  {
    id: 'n4',
    quote: 'my flatmates knew I reached home before I even took off my shoes.',
    author: 'Sneha Roy',
    role: 'Software Engineer',
    city: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=75&w=96',
    bg: 'bg-[#F3A9BC]',
    tapeColor: 'bg-[#F4E58C]',
    tapeRotate: 'rotate-3',
    sticker: '🍒',
    tilt: 'rotate-[1deg]',
  },
];

const ROW_2_NOTES: NoteCard[] = [
  {
    id: 'n5',
    quote: "I love that it doesn't make safety feel scary or corporate. It feels like girlhood care.",
    author: 'Devika Nair',
    role: 'Writer',
    city: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=75&w=96',
    bg: 'bg-[#D7C4E8]',
    tapeColor: 'bg-[#F4E58C]',
    tapeRotate: '-rotate-2',
    sticker: '✧',
    tilt: 'rotate-[1deg]',
  },
  {
    id: 'n6',
    quote: 'the quiet automated check-in saved me so many awkward ‘text me when you reach’ reminders.',
    author: 'Priya Iyer',
    role: 'Literature Major',
    city: 'St. Stephen’s',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=75&w=96',
    bg: 'bg-[#FFFDF9]',
    tapeColor: 'bg-[#F3A9BC]',
    tapeRotate: 'rotate-2',
    sticker: '♡',
    tilt: 'rotate-[-1.5deg]',
  },
  {
    id: 'n7',
    quote: 'we all joined the same safety circle during fest week. 10/10 peace of mind.',
    author: 'Meera Rao',
    role: 'Journalist',
    city: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=75&w=96',
    bg: 'bg-[#F4E58C]',
    tapeColor: 'bg-[#C9DFEA]',
    tapeRotate: '-rotate-3',
    sticker: '★',
    tilt: 'rotate-[1deg]',
  },
  {
    id: 'n8',
    quote: 'finally an app built for how girls actually look out for each other in real life.',
    author: 'Aarohi Verma',
    role: 'Research Scholar',
    city: 'Gurgaon',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=75&w=96',
    bg: 'bg-[#D6E8DC]',
    tapeColor: 'bg-[#F3A9BC]',
    tapeRotate: 'rotate-2',
    sticker: '🌿',
    tilt: 'rotate-[-0.5deg]',
  },
];

export const HumanNotesSection: React.FC = () => {
  const reduce = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate arrays for seamless infinite looping
  const row1Duplicated = [...ROW_1_NOTES, ...ROW_1_NOTES, ...ROW_1_NOTES];
  const row2Duplicated = [...ROW_2_NOTES, ...ROW_2_NOTES, ...ROW_2_NOTES];

  return (
    <section
      id="community-notes"
      className="relative bg-[#FAF7F0] text-[#202020] border-b-2 border-[#202020] select-none min-h-[calc(100svh-4rem)] max-h-[940px] flex flex-col justify-between pt-7 sm:pt-9 pb-10 sm:pb-12 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(122, 41, 72, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(122, 41, 72, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '28px 28px',
      }}
    >
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {/* =========================================================================
            HEADER: FROM OUR COMMUNITY
            ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 border-b border-[#202020]/15">
          <div>
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
                FROM OUR COMMUNITY
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="mt-2 text-[clamp(2.4rem,4.4vw,3.8rem)] leading-[0.82] font-black uppercase tracking-tight text-[#202020]"
            >
              REAL NOTES FROM
              <span className="block font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.12em] tracking-tight mt-0.5">
                our
              </span>
              <span className="relative inline-block mt-0.5">
                COMMUNITY.
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

          {/* Right: Taped Note Scrap */}
          <div className="relative inline-block bg-[#F4E58C] border-2 border-[#202020] rounded-xs px-3.5 py-1.5 shadow-[3px_3px_0px_#1d1d1d] rotate-1">
            <div className="absolute -top-2 left-4 w-9 h-3.5 bg-[#F3A9BC] border border-[#202020]/40 rotate-[-8deg] shadow-xs pointer-events-none" />
            <p className="font-editorial-serif italic text-xs sm:text-sm text-[#7A2948] font-bold">
              “real stories from women looking out for each other. ♡”
            </p>
          </div>
        </div>

      </div>

      {/* =========================================================================
          2 SLIDING LAYERS (OPPOSITE DIRECTIONS)
          ========================================================================= */}
      <div
        className="relative w-full space-y-4 my-auto overflow-hidden py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* ======================= LAYER 1: SLIDING LEFT ======================= */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-5 shrink-0"
            animate={reduce || isPaused ? { x: 0 } : { x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 35,
            }}
          >
            {row1Duplicated.map((note, idx) => (
              <div
                key={`r1-${idx}`}
                className={`relative w-[18.5rem] sm:w-[22rem] shrink-0 ${note.bg} border-2 border-[#202020] rounded-2xl p-4 shadow-[4px_4px_0px_#1d1d1d] ${note.tilt} hover:rotate-0 hover:scale-102 hover:shadow-[6px_6px_0px_#1d1d1d] transition-all cursor-default flex flex-col justify-between min-h-[160px]`}
              >
                {/* Washi Tape */}
                <div
                  className={`absolute -top-2.5 right-6 w-14 h-4 ${note.tapeColor} border border-[#202020]/40 ${note.tapeRotate} shadow-xs pointer-events-none`}
                  aria-hidden="true"
                />

                {/* Sticker Badge */}
                <span className="absolute -bottom-2 -right-2 text-lg filter drop-shadow-sm select-none pointer-events-none">
                  {note.sticker}
                </span>

                {/* Quote Text */}
                <p className="font-editorial-serif text-base sm:text-lg italic text-[#202020] leading-snug">
                  “{note.quote}”
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-[#202020]/15 mt-3">
                  <div className="relative w-7 h-7 rounded-full border border-[#202020] overflow-hidden bg-[#FAF7F2] shrink-0">
                    <Image
                      src={note.avatar}
                      alt={note.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs font-black text-[#202020]">{note.author}</div>
                    <div className="text-[10px] font-bold text-[#7A2948] flex items-center gap-1">
                      <span>{note.role}</span>
                      <span>·</span>
                      <span>{note.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ======================= LAYER 2: SLIDING RIGHT ======================= */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-5 shrink-0"
            animate={reduce || isPaused ? { x: 0 } : { x: ['-50%', '0%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 35,
            }}
          >
            {row2Duplicated.map((note, idx) => (
              <div
                key={`r2-${idx}`}
                className={`relative w-[18.5rem] sm:w-[22rem] shrink-0 ${note.bg} border-2 border-[#202020] rounded-2xl p-4 shadow-[4px_4px_0px_#1d1d1d] ${note.tilt} hover:rotate-0 hover:scale-102 hover:shadow-[6px_6px_0px_#1d1d1d] transition-all cursor-default flex flex-col justify-between min-h-[160px]`}
              >
                {/* Washi Tape */}
                <div
                  className={`absolute -top-2.5 left-6 w-14 h-4 ${note.tapeColor} border border-[#202020]/40 ${note.tapeRotate} shadow-xs pointer-events-none`}
                  aria-hidden="true"
                />

                {/* Sticker Badge */}
                <span className="absolute -bottom-2 -right-2 text-lg filter drop-shadow-sm select-none pointer-events-none">
                  {note.sticker}
                </span>

                {/* Quote Text */}
                <p className="font-editorial-serif text-base sm:text-lg italic text-[#202020] leading-snug">
                  “{note.quote}”
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-[#202020]/15 mt-3">
                  <div className="relative w-7 h-7 rounded-full border border-[#202020] overflow-hidden bg-[#FAF7F2] shrink-0">
                    <Image
                      src={note.avatar}
                      alt={note.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs font-black text-[#202020]">{note.author}</div>
                    <div className="text-[10px] font-bold text-[#7A2948] flex items-center gap-1">
                      <span>{note.role}</span>
                      <span>·</span>
                      <span>{note.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* =========================================================================
          BOTTOM ROW: STATS & REASSURANCE BANNER
          ========================================================================= */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full mt-3">
        <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-full px-5 sm:px-7 py-2.5 sm:py-3 shadow-[4px_4px_0px_#1d1d1d] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-[#F3A9BC] border border-[#202020] flex items-center justify-center text-[#7A2948] shrink-0 text-xs shadow-xs">
              ♡
            </span>
            <p className="text-xs sm:text-sm font-black text-[#202020]">
              Over 10,000+ safe journeys completed across Delhi, Bangalore, Mumbai, and Pune.
            </p>
          </div>

          <div className="flex items-center gap-2 font-editorial-serif italic text-xs sm:text-sm text-[#7A2948] ml-auto">
            <span>zero surveillance · 100% community love</span>
            <span>♡</span>
          </div>
        </div>
      </div>

    </section>
  );
};
