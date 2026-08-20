'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart, Bell } from 'lucide-react';
import { ShieldButton } from '@/components/ui/ShieldButton';
import { useAuth } from '@/context/AuthContext';

const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

/* Section anchors matching our page sections */
const LINKS = [
  { href: '#how-it-works', label: 'How it works', anchor: 'how-it-works' },
  { href: '#community', label: 'Community', anchor: 'community' },
  { href: '#safety', label: 'Safety', anchor: 'safety' },
  { href: '#about', label: 'About', anchor: 'about' },
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
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  /* Smooth scroll handler with fixed navbar offset compensation */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setOpen(false);

    if (pathname !== '/') {
      router.push(`/#${anchor}`);
      return;
    }

    const target = document.getElementById(anchor);
    if (target) {
      const navHeight = 64; // header height offset
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActive(anchor);
    }
  };

  /* Scroll: compact the nav + detect active section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const mid = window.scrollY + window.innerHeight * 0.35;
      let found = '';
      for (const l of LINKS) {
        const el = document.getElementById(l.anchor);
        if (el && el.offsetTop <= mid) {
          found = l.anchor;
        }
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

          {/* Desktop links with smooth scroll */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.anchor)}
                className={`nav-line relative text-sm font-extrabold cursor-pointer transition-colors ${
                  isActive(l.anchor) ? 'active text-[#7A2948]' : 'text-[#202020] hover:text-[#7A2948]'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isAuthenticated && pathname === '/dashboard' ? (
              <div className="hidden sm:flex items-center gap-2.5">
                {/* Notification Bell */}
                <button
                  type="button"
                  className="relative w-8 h-8 rounded-full bg-[#FAF7F0] hover:bg-[#F4E58C] border-2 border-[#202020] flex items-center justify-center text-[#7A2948] shadow-[2px_2px_0px_#202020] transition-all cursor-pointer"
                  title="3 live updates"
                >
                  <span className="text-xs">🔔</span>
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#B63A5B] border border-[#202020] rounded-full" />
                </button>

                {/* User Avatar & Name */}
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 bg-[#FFFDF9] hover:bg-[#F4E58C] border-2 border-[#202020] rounded-full pl-1 pr-3 py-1 shadow-[2px_2px_0px_#202020] transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-[#7A2948] text-[#FFFDF9] font-black text-xs flex items-center justify-center border border-[#202020]">
                    {user?.name?.[0] || 'H'}
                  </div>
                  <span className="text-xs font-black text-[#202020]">{user?.name || 'Harsh'}</span>
                </Link>

                {/* Logout link */}
                <button
                  type="button"
                  onClick={logout}
                  className="text-[11px] font-black text-[#7A2948] hover:underline px-1 cursor-pointer"
                >
                  Log out
                </button>
              </div>
            ) : (
              <>
                {/* SIGN IN BUTTON */}
                <Link
                  href="/signin"
                  className="hidden sm:inline-flex items-center gap-1.5 bg-[#FFFDF9] hover:bg-[#F4E58C] text-[#7A2948] hover:text-[#202020] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full border-2 border-[#202020] shadow-[2px_2px_0px_#202020] hover:shadow-[3px_3px_0px_#202020] hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200"
                >
                  <span>Sign in</span>
                </Link>

                {/* GET STARTED / SIGN UP BUTTON */}
                <Link
                  href="/signup"
                  className="group hidden sm:inline-flex items-center gap-2 bg-[#7A2948] hover:bg-[#5E1F36] text-[#FFFDF9] text-xs font-black uppercase tracking-wider px-5 py-1.5 rounded-full border-2 border-[#202020] shadow-[3px_3px_0px_#202020] hover:shadow-[4px_4px_0px_#202020] hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC] group-hover:scale-125 transition-transform" />
                  <span>Get started</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFDF9] group-hover:translate-x-1 transition-transform" />
                </Link>
              </>
            )}

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
                    onClick={(e) => handleNavClick(e, l.anchor)}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-baseline justify-between border-b-2 border-[#202020]/15 py-3 cursor-pointer"
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