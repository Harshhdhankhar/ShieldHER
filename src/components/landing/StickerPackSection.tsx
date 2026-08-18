'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const StickerPackSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#F3A9BC] border-t-2 border-[#202020] text-[#202020] select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-3xl space-y-4">
          <span className="sticker-paper-berry rotate-[-2deg]">
            <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC]" />
            <span>COMMUNITY IDENTITY</span>
          </span>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.88] uppercase text-[#202020]">
            wear your <br />
            <span className="font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.08em]">
              safety
            </span> <br />
            with pride.
          </h2>

          <p className="text-lg sm:text-xl font-extrabold text-[#202020] max-w-xl leading-relaxed">
            ShieldHER isn't just an app — it's a movement. Laptop stickers, tote bags, and keychain badges for your everyday commute.
          </p>
        </div>

        {/* INTERACTIVE STICKER DISPLAY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="bg-[#FFFDF9] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl text-center space-y-3 rotate-[-3deg]"
          >
            <div className="text-4xl">🏷️</div>
            <div className="sticker-paper-berry text-xs uppercase">LAPTOP STICKER</div>
            <div className="font-editorial-serif text-2xl italic text-[#7A2948]">"text me when you reach ♡"</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="bg-[#F4E58C] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl text-center space-y-3 rotate-[2deg]"
          >
            <div className="text-4xl">👜</div>
            <div className="sticker-paper text-xs uppercase">CANVAS TOTE BAG</div>
            <div className="font-sans font-extrabold text-lg uppercase text-[#202020]">SAFE JOURNEY CLUB</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="bg-[#7A2948] text-[#F5F0E8] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl text-center space-y-3 rotate-[-1deg]"
          >
            <div className="text-4xl">🔑</div>
            <div className="sticker-paper-yellow text-xs uppercase">KEYCHAIN BADGE</div>
            <div className="font-editorial-serif text-2xl italic text-[#F3A9BC]">"home safe?"</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="bg-[#FFFDF9] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl text-center space-y-3 rotate-[4deg]"
          >
            <div className="text-4xl">📱</div>
            <div className="sticker-paper-berry text-xs uppercase">PHONE CASE CHARM</div>
            <div className="font-sans font-extrabold text-base text-[#202020]">ALWAYS CONNECTED</div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
