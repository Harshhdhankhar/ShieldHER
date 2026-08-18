'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 0.61, 0.36, 1] as const;

interface HeroMessageGroupProps {
  className?: string;
}

export const HeroMessageGroup: React.FC<HeroMessageGroupProps> = ({ className = '' }) => {
  const reduce = useReducedMotion();

  return (
    <div className={`relative ${className}`}>
      {/* Hand-drawn dotted connecting path between Mom's message and Your reply */}
      <svg
        className="absolute top-12 left-10 w-24 h-24 pointer-events-none z-0 overflow-visible opacity-65"
        viewBox="0 0 90 90"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 28 8 C 15 32, 10 52, 48 72"
          stroke="#7A2948"
          strokeWidth="2"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
        {/* Tiny arrowhead at end of path */}
        <path
          d="M 42 66 L 48 72 L 40 76"
          stroke="#7A2948"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Mom's message card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -1.2 }}
        transition={{ duration: 0.55, delay: 0.08, ease }}
        whileHover={reduce ? {} : { y: -3, rotate: 0, scale: 1.01 }}
        className="hero-card-mom relative z-10 cursor-default"
      >
        <div className="bg-[#FFFDF9] border-2 border-[#202020] rounded-[1.1rem] rounded-bl-sm shadow-[5px_6px_0px_#1d1d1d] hover:shadow-[7px_8px_0px_#1d1d1d] transition-all duration-200 px-4 py-3 min-w-[13.5rem] max-w-[16rem]">
          <div className="flex items-center justify-between gap-3 text-[10px] uppercase font-extrabold tracking-[0.14em] text-[#7A2948]">
            <span>MOM</span>
            <span className="text-[#202020]/60 font-medium">7:42 PM</span>
          </div>
          <div className="mt-1 font-bold text-sm sm:text-[0.95rem] text-[#202020] leading-snug">
            call when you reach ♡
          </div>
        </div>
      </motion.div>

      {/* Your reply message card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 1.5 }}
        transition={{ duration: 0.55, delay: 0.18, ease }}
        whileHover={reduce ? {} : { y: -3, rotate: 0, scale: 1.01 }}
        className="hero-card-you relative z-10 mt-6 ml-8 sm:ml-12 cursor-default"
      >
        <div className="bg-[#F4E58C] border-2 border-[#202020] rounded-[1.1rem] rounded-br-sm shadow-[4px_5px_0px_#1d1d1d] hover:shadow-[6px_7px_0px_#1d1d1d] transition-all duration-200 px-3.5 py-2.5 min-w-[9.5rem] max-w-[13rem]">
          <div className="flex items-center justify-between gap-3 text-[9px] uppercase font-extrabold tracking-[0.12em] text-[#7A2948]">
            <span>YOU</span>
            <span className="text-[#202020]/60 font-medium">7:43 PM</span>
          </div>
          <div className="mt-0.5 font-extrabold text-xs sm:text-[0.88rem] text-[#202020] flex items-center justify-between gap-2">
            <span>5 mins</span>
            <span className="text-[#7A2948] text-xs tracking-tighter font-black">✓✓</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
