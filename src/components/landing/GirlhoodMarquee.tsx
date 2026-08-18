'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MARQUEE_ITEMS = [
  'TEXT ME WHEN YOU REACH ♡',
  'ALWAYS CONNECTED',
  'NEVER ALONE',
  'SHARE LOCATION',
  'HOME SAFE?',
  'CALL ME IF YOU NEED ME',
  'I\'M 5 MINS AWAY',
  'MADE IT ♡',
  'WALKING WITH YOU, KINDA',
  'SAFE JOURNEY CLUB',
];

export const GirlhoodMarquee: React.FC = () => {
  const marqueeList = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full overflow-hidden select-none cursor-default py-4 sm:py-6 bg-[#F5F0E8] z-20">
      {/* Tilted Wrapper Strip extending slightly past container boundaries */}
      <div className="relative w-[106%] -left-[3%] rotate-[-1.6deg] my-1">
        {/* 🍓 Cute physical strawberry sticker perched on top-left of the tilted tape */}
        <div className="absolute -top-4 sm:-top-5 left-12 sm:left-32 z-30 pointer-events-auto">
          <motion.div
            whileHover={{ scale: 1.25, rotate: 14 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="cursor-pointer filter drop-shadow-[2px_3px_0px_#202020]"
          >
            <span className="text-2xl sm:text-3xl inline-block" role="img" aria-label="Strawberry sticker">
              🍓
            </span>
          </motion.div>
        </div>

        {/* 🍒 Second sticker perched along the tilted strip */}
        <div className="absolute -top-4 sm:-top-5 right-16 sm:right-44 z-30 pointer-events-auto hidden sm:block">
          <motion.div
            whileHover={{ scale: 1.25, rotate: -14 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="cursor-pointer filter drop-shadow-[2px_3px_0px_#202020]"
          >
            <span className="text-2xl sm:text-3xl inline-block" role="img" aria-label="Cherry sticker">
              🍒
            </span>
          </motion.div>
        </div>

        {/* The Tilted Pink Washi Ribbon Tape Strip */}
        <div className="relative bg-[#F3A9BC] text-[#FFFDF9] py-2.5 sm:py-3.5 overflow-hidden border-y-2 border-[#202020] shadow-[0_4px_0px_#202020]">
          <div className="animate-ticker flex items-center">
            {marqueeList.map((item, idx) => (
              <div
                key={idx}
                className="marquee-item flex items-center gap-5 px-4 font-editorial-serif italic text-sm sm:text-base tracking-wider font-normal whitespace-nowrap text-[#FFFDF9] drop-shadow-[0_1px_1px_rgba(122,41,72,0.3)]"
              >
                <span>{item}</span>
                <span className="text-[#7A2948] font-sans text-xs not-italic font-black">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
