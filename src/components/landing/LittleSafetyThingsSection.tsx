'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Navigation, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const LittleSafetyThingsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#D7C4E8] border-t-2 border-[#202020] text-[#202020] select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HUGE HEADING */}
        <div className="max-w-3xl space-y-4">
          <span className="sticker-paper-berry rotate-[-2deg]">
            <Sparkles className="w-3.5 h-3.5 text-[#F3A9BC]" />
            <span>LITTLE SAFETY DETAILS</span>
          </span>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.88] uppercase text-[#202020]">
            little things <br />
            <span className="font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.08em]">
              that matter.
            </span>
          </h2>
        </div>

        {/* PLAYFUL SCATTERED SCRAPBOOK COMPOSITION */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Item 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#FFFDF9] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl space-y-2 rotate-[-2deg]"
          >
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#7A2948]">
              <Heart className="w-4 h-4 fill-[#F3A9BC] text-[#F3A9BC]" />
              <span>Smart Check-in</span>
            </div>
            <h3 className="font-editorial-serif text-3xl italic text-[#202020]">"everything okay?"</h3>
            <p className="text-xs font-bold text-[#202020]/70">Automated calm prompt if expected arrival time passes.</p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#7A2948] text-[#F5F0E8] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl space-y-2 rotate-[3deg]"
          >
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#F3A9BC]">
              <Navigation className="w-4 h-4" />
              <span>Contextual Alert</span>
            </div>
            <h3 className="font-sans font-extrabold text-2xl uppercase">"route changed"</h3>
            <p className="text-xs font-medium opacity-80">Asks calmly before alerting your Safety Circle.</p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#F4E58C] text-[#202020] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl space-y-2 rotate-[-1deg]"
          >
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#7A2948]">
              <ShieldCheck className="w-4 h-4" />
              <span>Circle Watch</span>
            </div>
            <h3 className="font-sans font-extrabold text-xl">"Riya is following your journey"</h3>
            <p className="text-xs font-bold text-[#202020]/70">Quiet live trace link shared automatically.</p>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#F3A9BC] text-[#202020] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl space-y-2 rotate-[2deg]"
          >
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#7A2948]">
              <MapPin className="w-4 h-4" />
              <span>Nearby Presence</span>
            </div>
            <h3 className="font-editorial-serif text-3xl italic text-[#7A2948]">"3 people nearby"</h3>
            <p className="text-xs font-bold text-[#202020]/80">Verified responders ready to assist within 500m.</p>
          </motion.div>

          {/* Item 5 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#FFFDF9] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl space-y-2 rotate-[-3deg]"
          >
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#7A2948]">
              <Clock className="w-4 h-4" />
              <span>Transit Signal</span>
            </div>
            <h3 className="font-sans font-extrabold text-xl uppercase">"metro closes at 11"</h3>
            <p className="text-xs font-bold text-[#202020]/70">Timely updates for late night transit routes.</p>
          </motion.div>

          {/* Item 6 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#7A2948] text-[#F5F0E8] border-2 border-[#202020] shadow-[5px_5px_0px_#202020] p-6 rounded-3xl space-y-2 rotate-[1deg]"
          >
            <div className="font-editorial-serif text-4xl italic text-[#F3A9BC]">"made it home ♡"</div>
            <p className="text-xs font-medium opacity-80">Quiet confirmation sent to Mom & Riya.</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
