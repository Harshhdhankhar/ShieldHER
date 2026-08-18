'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Navigation, Heart, Sparkles, Lock, MapPin } from 'lucide-react';
import { ShieldButton } from '../ui/ShieldButton';
import { EditorialHeading } from '../ui/EditorialHeading';
import { EditorialLabel } from '../ui/EditorialLabel';

export const LandingHero: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-cream-50 select-none">
      {/* Soft visual background glows */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blush-100/60 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lavender-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COL: MEGA EDITORIAL TYPOGRAPHY & EMOTIONAL COPY */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Editorial Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 flex-wrap"
            >
              <EditorialLabel variant="plum" tilt="slight-left" icon={<Heart className="w-3.5 h-3.5 fill-blush-200 text-blush-200" />}>
                FOR THE "DID YOU GET HOME?" GIRLS
              </EditorialLabel>
              <EditorialLabel variant="sage" tilt="slight-right" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                100% Privacy Protected
              </EditorialLabel>
            </motion.div>

            {/* Mega Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <EditorialHeading
                size="hero"
                line1="getting home"
                line2Italic="shouldn't be"
                line3="the scary part."
              />
            </motion.div>

            {/* Emotional Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-charcoal-800/85 max-w-2xl leading-relaxed"
            >
              Your people, your journey, and help nearby — connected when you need them.
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <ShieldButton
                variant="primary"
                size="xl"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => router.push('/signup')}
              >
                come with us →
              </ShieldButton>

              <ShieldButton
                variant="secondary"
                size="xl"
                icon={<Navigation className="w-5 h-5 text-plum-800" />}
                onClick={() => {
                  const el = document.getElementById('did-you-get-home');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                see how it works
              </ShieldButton>
            </motion.div>

            {/* Handwritten-Style Editorial Annotations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex items-center gap-6 border-t border-plum-900/10 text-xs font-semibold text-charcoal-800/70"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sage-500 animate-pulse" />
                <span className="font-extrabold text-charcoal-900">Go where you want. We've got your back.</span>
              </div>
              <div className="hidden sm:block text-plum-900/30">•</div>
              <div className="hidden sm:block font-editorial-serif text-base italic text-plum-900">
                "text me when you reach ♡"
              </div>
            </motion.div>

          </div>

          {/* RIGHT COL: CANDID MODERN FEMININE PHOTOGRAPHY & STICKER COLLAGE */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-plum-900/20 shadow-editorial bg-blush-100 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=900"
                  alt="Friends laughing together on a night walk home"
                  fill
                  className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/75 via-transparent to-transparent" />

                {/* Bottom Image Annotation */}
                <div className="absolute bottom-6 left-6 right-6 text-cream-50 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-sans text-xs font-extrabold tracking-widest uppercase text-blush-200">
                      LIVE GUARDIAN MODE
                    </span>
                  </div>
                  <p className="font-sans font-bold text-lg leading-tight">
                    Walking home together with Mom & Riya on live watch
                  </p>
                </div>
              </div>

              {/* OVERLAPPING EDITORIAL STICKERS & TEXT ANNOTATIONS */}
              
              {/* Handwritten Note 1: Top Right Sticky */}
              <motion.div
                initial={{ rotate: -6, y: -10 }}
                animate={{ rotate: 4, y: 0 }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 sm:-right-6 bg-cream-card border border-plum-900/20 px-4 py-3 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blush-100 text-plum-900 font-extrabold text-xs">
                    ♡
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-charcoal-800/60">
                      GROUP CHAT NOTE
                    </div>
                    <div className="text-xs font-extrabold text-plum-950">
                      "text me when you reach ♡"
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Handwritten Note 2: Left Middle Bubble */}
              <div className="absolute top-1/2 -left-6 sm:-left-10 -translate-y-1/2 bg-plum-900 text-cream-50 p-4 rounded-2xl shadow-2xl max-w-[210px] border border-cream-50/30 rotate-[-4deg] z-20">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-blush-200" />
                  <span className="font-sans font-bold text-xs text-blush-200">Safety Circle</span>
                </div>
                <p className="font-editorial-serif text-base italic leading-snug text-cream-50">
                  "walking with you, kinda."
                </p>
              </div>

              {/* Handwritten Note 3: Bottom Right Stamp */}
              <div className="absolute -bottom-6 -right-2 bg-blush-100 border-2 border-plum-900 text-plum-900 px-4 py-2 rounded-full font-bold text-xs shadow-sticker rotate-[3deg] z-20 flex items-center gap-1.5">
                <span>✦ 12 ShieldHER members nearby</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
