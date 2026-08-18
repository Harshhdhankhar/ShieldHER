'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 0.61, 0.36, 1] as const;

interface PolaroidCardProps {
  className?: string;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({ className = '' }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.6, delay: 0.22, ease }}
      whileHover={reduce ? {} : { rotate: 0, y: -4, scale: 1.015 }}
      className={`relative select-none ${className}`}
    >
      {/* Physical Polaroid frame */}
      <figure className="relative bg-[#FFFDF9] border-2 border-[#202020] rounded-sm p-3 pb-8 shadow-[6px_7px_0px_#1d1d1d] hover:shadow-[9px_10px_0px_#1d1d1d] transition-all duration-300 w-full max-w-[19rem] sm:max-w-[21rem] mx-auto">
        {/* Pale yellow washi tape at top */}
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-6 bg-[#F4E58C]/95 border border-[#202020]/40 rotate-[-3deg] shadow-sm z-20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Photo Container */}
        <div className="relative aspect-[4/3.2] w-full overflow-hidden border border-[#202020]/20 bg-[#FAF7F2]">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=82&w=900"
            alt="Close group of friends walking and laughing together"
            fill
            sizes="(max-width: 640px) 85vw, 24vw"
            className="object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Handwritten caption */}
        <figcaption className="absolute bottom-2 inset-x-0 text-center font-editorial-serif italic text-base sm:text-lg text-[#7A2948] tracking-tight">
          our people ♡
        </figcaption>
      </figure>

      {/* Girls Chat card attached near the photo */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35, ease }}
        className="absolute -bottom-3 sm:-bottom-4 -right-2 sm:-right-4 z-30 bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl px-3.5 py-2 shadow-[4px_4px_0px_#1d1d1d] hover:shadow-[6px_6px_0px_#1d1d1d] transition-all duration-200"
      >
        <div className="flex items-center gap-2.5">
          {/* Overlapping pastel avatar circles */}
          <div className="flex -space-x-2">
            <span className="w-5 h-5 rounded-full border-1.5 border-[#202020] bg-[#F3A9BC] inline-block" />
            <span className="w-5 h-5 rounded-full border-1.5 border-[#202020] bg-[#F4E58C] inline-block" />
            <span className="w-5 h-5 rounded-full border-1.5 border-[#202020] bg-[#C9DFEA] inline-block" />
          </div>

          <div className="leading-tight">
            <div className="text-[10px] font-black uppercase tracking-wider text-[#7A2948] flex items-center gap-1.5">
              <span>GIRLS CHAT</span>
              <span className="inline-flex gap-0.5 items-center">
                <span className="w-1 h-1 rounded-full bg-[#B63A5B] animate-ping" />
              </span>
            </div>
            <div className="text-[10px] font-bold text-[#202020]/75 flex items-center gap-1">
              <span className="text-[#B63A5B] font-extrabold">••• typing...</span>
              <span className="text-[#202020]/40">·</span>
              <span>seen by 4</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
