'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { ShieldButton } from '@/components/ui/ShieldButton';

const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

/* Section anchors used for active-state tracking */
const LINKS = [
  { href: '#group-chat', label: 'How it works', anchor: 'group-chat' },
  { href: '#around-me', label: 'Community', anchor: 'around-me' },
  { href: '#around-me', label: 'Safety', anchor: 'around-me' },
  { href: '#footer', label: 'About', anchor: 'footer' },
];

/* Tiny route-line that extends from the logo dot on hover */
const LogoRoute = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 44 14" className={className} fill="none" aria-hidden="true">
    <path d="M2 7 H34" stroke="#7A2948" strokeWidth="1.8" strokeDasharray="1 5" strokeLinecap="round" />
    <path d="M34 3 L41 7 L34 11" stroke="#B63A5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Star4 = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#F4E58C" stroke="#202020" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 Q 13 11 22 12 Q 13 13 12 22 Q 11 13 2 12 Q 11 11 12 2 Z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  /* Scroll: compact the nav + detect active section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const mid = window.scrollY + window.innerHeight * 0.4;
      let found = '';
      for (const l of LINKS) {
        const el = document.getElementById(l.anchor);
        if (el && el.offsetTop <= mid) found = l.anchor;
      }
      setActive(found);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll + Escape close while menu open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (anchor: string) => active === anchor;

  return (
    <header className="sticky top-0 z-40 select-none">
      {/* ---- top micro banner ---- */}
      <div className="bg-[#7A2948] text-[#FFFDF9] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] py-1.5 px-4 text-center border-b border-[#202020]">
        TEXT ME WHEN YOU REACH ♡ &nbsp; • &nbsp; SHIELDHER COMMUNITY &nbsp; • &nbsp; ALWAYS CONNECTED
      </div>

      {/* ---- main bar ---- */}
      <div
        className={`bg-[#F5F0E8] border-b-2 border-[#202020] transition-[height,padding,box-shadow] duration-300 ${
          scrolled ? 'shadow-[0_3px_0px_#202020]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 h-12 lg:h-14">

          {/* Logo — brand object with location-dot period */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
            <span className="font-sans text-2xl sm:text-[1.7rem] font-extrabold tracking-tight text-[#202020] leading-none">
              shield<span className="font-editorial-serif italic font-normal text-[#7A2948] transition-all duration-300 group-hover:font-normal">HER</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#B63A5B] ml-1 align-baseline" />
            </span>
            <LogoRoute className="hidden md:block w-9 h-4 -ml-0.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            <span className="hidden lg:inline-flex items-center gap-1.5 font-sans text-[10px] font-extrabold uppercase tracking-widest text-[#202020] bg-[#F4E58C] border border-[#202020] px-2.5 py-1 rounded-full badge-shift -rotate-1">
              <Heart className="badge-heart w-3 h-3 fill-[#F3A9BC] text-[#202020]" />
              Safe Journey Club
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-line relative text-sm font-extrabold transition-colors ${
                  isActive(l.anchor) ? 'active text-[#7A2948]' : 'text-[#202020] hover:text-[#7A2948]'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/signin"
              className="group hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-[#7A2948]"
            >
              Sign in
              <span className="w-1.5 h-1.5 rounded-full bg-[#B63A5B] scale-0 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
            </Link>

            <ShieldButton
              variant="primary"
              size="md"
              className="hidden sm:inline-flex bg-[#7A2948] hover:bg-[#5A1A32] text-[#F5F0E8] border-2 border-[#202020] shadow-[3px_3px_0px_#202020]"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => router.push('/signup')}
            >
              Get started
            </ShieldButton>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="lg:hidden inline-flex items-center gap-2 font-extrabold text-xs uppercase tracking-widest text-[#202020] border-2 border-[#202020] bg-[#F4E58C] px-4 py-2 rounded-full shadow-[2px_2px_0px_#202020] transition-transform duration-200 active:translate-y-0.5 active:shadow-none cursor-pointer"
            >
              {open ? 'Close' : 'Menu'}
              <span className={`inline-block w-2 h-2 rounded-full bg-[#B63A5B] ${open ? 'animate-pulse' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ---- full-screen editorial mobile menu ---- */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-50 bg-[#F5F0E8] lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-4 h-14 border-b-2 border-[#202020]">
              <span className="font-sans text-xl font-extrabold tracking-tight text-[#202020]">
                shield<span className="font-editorial-serif italic font-normal text-[#7A2948]">HER</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B63A5B] ml-1" />
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center gap-2 font-extrabold text-xs uppercase tracking-widest text-[#202020] border-2 border-[#202020] bg-[#F4E58C] px-4 py-2 rounded-full shadow-[2px_2px_0px_#202020] cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="relative flex-1 flex flex-col px-6 py-8 overflow-hidden">
              {/* subtle doodles */}
              <Star4 className="absolute top-10 right-8 w-8 h-8 -rotate-6" />
              <Star4 className="absolute bottom-40 left-6 w-6 h-6 rotate-12" />
              <svg viewBox="0 0 60 14" className="absolute top-8 left-6 w-12 h-3 rotate-[-6deg]" fill="none" aria-hidden="true">
                <path d="M2 7 H40" stroke="#7A2948" strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" />
                <path d="M40 3 L48 7 L40 11" stroke="#B63A5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <motion.nav
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease, staggerChildren: 0.06 }}
                className="mt-6 space-y-2"
                aria-label="Mobile"
              >
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-baseline justify-between border-b-2 border-[#202020]/15 py-3"
                  >
                    <span className="font-editorial-serif italic text-[1.9rem] sm:text-4xl leading-tight text-[#7A2948]">
                      {l.label}
                    </span>
                    <span className="text-[#B63A5B] opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </motion.a>
                ))}
              </motion.nav>

              <p className="hand-note mt-6 text-lg text-[#202020] -rotate-1">
                come with us ♡
              </p>

              <div className="mt-auto pt-8 space-y-3">
                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center font-extrabold text-sm uppercase tracking-widest text-[#7A2948] border-2 border-[#202020] bg-[#FFFDF9] px-6 py-3.5 rounded-full shadow-[3px_3px_0px_#202020] active:translate-y-0.5 active:shadow-none"
                >
                  Sign in
                </Link>
                <ShieldButton
                  variant="primary"
                  size="lg"
                  className="w-full bg-[#7A2948] hover:bg-[#5A1A32] text-[#F5F0E8] border-2 border-[#202020] shadow-[4px_4px_0px_#202020]"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => {
                    setOpen(false);
                    router.push('/signup');
                  }}
                >
                  Join ShieldHER →
                </ShieldButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};