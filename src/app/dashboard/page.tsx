'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Heart,
  Navigation,
  Shield,
  ShieldAlert,
  Clock,
  CheckCircle2,
  Users,
  MapPin,
  Coffee,
  Train,
  Plus,
  ArrowRight,
  Phone,
  MessageSquare,
  Share2,
  Sparkles,
  AlertTriangle,
  Eye,
  Radio,
  Check,
  X,
  Copy,
  Send,
  Zap,
} from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { AmbientFloatingBackground } from '@/components/landing/AmbientFloatingBackground';
import { EditorialFooter } from '@/components/landing/EditorialFooter';
import { useAuth } from '@/context/AuthContext';

const EASE = [0.22, 0.61, 0.36, 1] as const;

interface Contact {
  id: string;
  name: string;
  relation: string;
  status: string;
  available: boolean;
  avatar: string;
  battery?: string;
}

const INITIAL_CONTACTS: Contact[] = [
  {
    id: 'c1',
    name: 'Aisha Malik',
    relation: 'Best Friend',
    status: 'Watching your journey ♡',
    available: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    battery: '88%',
  },
  {
    id: 'c2',
    name: 'Mom',
    relation: 'Family',
    status: 'Auto-notified when you reach',
    available: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    battery: '94%',
  },
  {
    id: 'c3',
    name: 'Riya Sen',
    relation: 'Flatmate',
    status: 'Near campus library',
    available: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    battery: '62%',
  },
  {
    id: 'c4',
    name: 'Devika Nair',
    relation: 'Sister',
    status: 'Active 12m ago',
    available: false,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    battery: '45%',
  },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const reduce = useReducedMotion();

  // Dynamic Greeting based on current time
  const [greeting, setGreeting] = useState('GOOD EVENING ♡');
  useEffect(() => {
    const hr = new Date().getHours();
    if (hr < 12) setGreeting('GOOD MORNING ♡');
    else if (hr < 17) setGreeting('GOOD AFTERNOON ♡');
    else setGreeting('GOOD EVENING ♡');
  }, []);

  // Modal & Interactive states
  const [activeRoute, setActiveRoute] = useState<'recommended' | 'quick' | 'public'>('recommended');
  const [isJourneyActive, setIsJourneyActive] = useState(false);
  const [journeyStep, setJourneyStep] = useState(1);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [checkInDone, setCheckInDone] = useState(false);
  const [showEtaModal, setShowEtaModal] = useState(false);
  const [copiedEta, setCopiedEta] = useState(false);
  const [showPanicModal, setShowPanicModal] = useState(false);
  const [panicCountdown, setPanicCountdown] = useState(5);
  const [panicActive, setPanicActive] = useState(false);
  const [showCircleModal, setShowCircleModal] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>(INITIAL_CONTACTS);
  const [newContactName, setNewContactName] = useState('');
  const [newContactRelation, setNewContactRelation] = useState('');
  const [radarFilter, setRadarFilter] = useState<'all' | 'members' | 'responders' | 'safePlaces'>('all');

  // Panic countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showPanicModal && panicCountdown > 0 && !panicActive) {
      timer = setTimeout(() => setPanicCountdown((c) => c - 1), 1000);
    } else if (showPanicModal && panicCountdown === 0 && !panicActive) {
      setPanicActive(true);
    }
    return () => clearTimeout(timer);
  }, [showPanicModal, panicCountdown, panicActive]);

  // Add Contact to circle
  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContactName.trim()) return;
    const newEntry: Contact = {
      id: `c-${Date.now()}`,
      name: newContactName.trim(),
      relation: newContactRelation.trim() || 'Friend',
      status: 'Joined Safety Circle ♡',
      available: true,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
      battery: '100%',
    };
    setContacts((prev) => [...prev, newEntry]);
    setNewContactName('');
    setNewContactRelation('');
  };

  const userName = user?.name?.split(' ')[0] || 'Harsh';

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#202020] selection:bg-[#F3A9BC] select-none relative overflow-x-hidden">
      
      {/* 1. EXISTING NAVBAR */}
      <Navbar />

      {/* AMBIENT FLOATING BACKGROUND MOTION */}
      <div className="relative">
        <AmbientFloatingBackground />

        {/* =========================================================================
            2. PERSONAL GREETING HERO SECTION
            ========================================================================= */}
        <section className="relative pt-8 sm:pt-12 pb-6 px-4 sm:px-6 lg:px-10 max-w-[1360px] mx-auto z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b-2 border-[#202020]/15">
            <div>
              {/* Pill Badge */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="inline-flex items-center gap-2 bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] rounded-full px-4 py-1 shadow-[3px_3px_0px_#202020] -rotate-1 cursor-default"
              >
                <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC]" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em]">
                  {greeting}
                </span>
              </motion.div>

              {/* Large Headline */}
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
                className="mt-3 text-[clamp(2.8rem,5.8vw,5.2rem)] leading-[0.82] font-black uppercase tracking-tight text-[#202020]"
              >
                Hey, {userName}.
                <br />
                <span className="font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.12em] tracking-tight">
                  where are we
                </span>
                <br />
                <span className="relative inline-block mt-0.5">
                  headed?
                  <span className="inline-block ml-2 text-[0.7em] font-editorial-serif text-[#7A2948] font-normal align-middle">
                    ♡
                  </span>
                  <span className="absolute -top-2 -right-6 text-xs text-[#F3A9BC] font-black rotate-12 pointer-events-none">
                    \ | /
                  </span>
                </span>
              </motion.h1>

              {/* Reassurance Subtitle */}
              <p className="mt-4 text-xs sm:text-base font-extrabold text-[#202020]/80 max-w-lg leading-relaxed">
                Your people are close. Your route is ready. You’re never really going alone.
              </p>
            </div>

            {/* Handwritten-Style Yellow Sticker Note */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
              transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
              className="relative self-start lg:self-end bg-[#F4E58C] border-2.5 border-[#202020] rounded-xs px-5 py-3.5 shadow-[5px_5px_0px_#1d1d1d] rotate-1 max-w-xs"
            >
              {/* Pink Washi Tape */}
              <div
                className="absolute -top-3 left-6 w-14 h-4 bg-[#F3A9BC] border border-[#202020]/40 rotate-[-4deg] shadow-xs pointer-events-none"
                aria-hidden="true"
              />
              <p className="font-editorial-serif italic text-base sm:text-lg text-[#7A2948] font-bold leading-tight">
                “text me when you reach. ♡”
              </p>
              <div className="mt-1 flex items-center justify-between text-[10px] font-black text-[#202020]/75">
                <span>Circle active</span>
                <span>● 3 watching</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            3. MAIN ACTIVE JOURNEY CARD (MOST IMPORTANT COMPONENT)
            ========================================================================= */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-10 max-w-[1360px] mx-auto z-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
            className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-5 sm:p-7 shadow-[8px_10px_0px_#1d1d1d] relative"
          >
            {/* Washi Tape Corner */}
            <div
              className="absolute -top-3 right-8 w-20 h-5 bg-[#F3A9BC] border border-[#202020]/40 rotate-2 shadow-xs pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Bar: Title + Status + Route Metrics */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#202020]/15">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#7A2948] text-[#FFFDF9] border border-[#202020] flex items-center justify-center font-black text-xs shadow-xs">
                  ➔
                </span>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#7A2948]">
                    YOUR NEXT JOURNEY
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#202020]">
                    Home → College Campus
                  </h2>
                </div>
              </div>

              {/* Status & Stats Pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#D6E8DC] text-[#2D5A43] border-1.5 border-[#202020] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#4E7B62] animate-pulse" />
                  READY
                </span>
                <span className="bg-[#F4E58C] text-[#202020] border-1.5 border-[#202020] px-3 py-1 rounded-full text-xs font-black">
                  ⏱ 21 min
                </span>
                <span className="bg-[#FAF7F0] text-[#202020] border-1.5 border-[#202020] px-3 py-1 rounded-full text-xs font-black">
                  📍 3.4 km
                </span>
                <span className="bg-[#F3A9BC] text-[#7A2948] border-1.5 border-[#202020] px-3 py-1 rounded-full text-xs font-black">
                  💡 98% Well-Lit
                </span>
              </div>
            </div>

            {/* Simplified Route Visualization / Map Canvas Illustration */}
            <div className="relative mt-4 h-64 sm:h-80 w-full rounded-2xl border-2 border-[#202020] bg-[#FAF7F2] overflow-hidden">
              
              {/* Street & River SVG Vector Canvas */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" fill="none">
                {/* River curve */}
                <path
                  d="M -20 320 C 180 300, 380 360, 580 330 C 700 310, 780 335, 840 340 L 840 420 L -20 420 Z"
                  fill="#C9DFEA"
                  opacity="0.75"
                />

                {/* Street Grids */}
                <path d="M 60 20 L 90 380" stroke="#E5DFD5" strokeWidth="4" />
                <path d="M 220 10 L 250 390" stroke="#E5DFD5" strokeWidth="5" />
                <path d="M 440 20 L 460 380" stroke="#E5DFD5" strokeWidth="4" />
                <path d="M 620 10 L 640 390" stroke="#E5DFD5" strokeWidth="5" />
                <path d="M 10 110 L 790 90" stroke="#E5DFD5" strokeWidth="4" />
                <path d="M 10 240 L 790 250" stroke="#E5DFD5" strokeWidth="5" />

                {/* Lighting Glow Corridors (Yellow) */}
                <path
                  d="M 120 280 L 220 220 L 380 180 L 520 140 L 680 90"
                  stroke="#F4E58C"
                  strokeWidth="22"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Recommended Journey Route (Burgundy Line) */}
                <path
                  d="M 120 280 L 220 220 L 380 180 L 520 140 L 680 90"
                  stroke="#7A2948"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Route Pulse / Breadcrumb Dash */}
                <path
                  d="M 120 280 L 220 220 L 380 180 L 520 140 L 680 90"
                  stroke="#F3A9BC"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                  strokeLinecap="round"
                />
              </svg>

              {/* MAP MARKERS */}
              {/* Origin: YOU (Home) */}
              <div className="absolute top-[65%] left-[12%] z-20">
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-[#7A2948] text-[#FFFDF9] border-2 border-[#202020] flex items-center justify-center font-black text-xs shadow-md animate-bounce">
                    YOU
                  </span>
                  <span className="mt-1 bg-[#202020] text-[#FFFDF9] text-[9px] font-black uppercase px-2 py-0.5 rounded-full border border-[#FFFDF9]/40 shadow-xs">
                    HOME (START)
                  </span>
                </div>
              </div>

              {/* Destination: COLLEGE */}
              <div className="absolute top-[18%] left-[82%] z-20">
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-[#B63A5B] text-[#FFFDF9] border-2 border-[#202020] flex items-center justify-center font-black text-xs shadow-md">
                    🎓
                  </span>
                  <span className="mt-1 bg-[#7A2948] text-[#FFFDF9] text-[9px] font-black uppercase px-2 py-0.5 rounded-full border border-[#202020] shadow-xs">
                    COLLEGE CAMPUS
                  </span>
                </div>
              </div>

              {/* Safe Haven Marker 1: The Coffee Club (24/7 Verified) */}
              <div className="absolute top-[48%] left-[45%] z-15 bg-[#FFFDF9] border-2 border-[#202020] rounded-xl px-2.5 py-1 shadow-xs flex items-center gap-1.5 hover:scale-105 transition-transform">
                <Coffee className="w-3.5 h-3.5 text-[#B63A5B]" />
                <div className="leading-tight">
                  <div className="text-[9px] font-black uppercase text-[#202020]">The Coffee Club</div>
                  <div className="text-[8px] font-bold text-[#4E7B62]">24/7 Safe Haven ✓</div>
                </div>
              </div>

              {/* Safe Haven Marker 2: Metro Station */}
              <div className="absolute top-[32%] left-[62%] z-15 bg-[#FFFDF9] border-2 border-[#202020] rounded-xl px-2.5 py-1 shadow-xs flex items-center gap-1.5 hover:scale-105 transition-transform">
                <Train className="w-3.5 h-3.5 text-[#202020]" />
                <div className="leading-tight">
                  <div className="text-[9px] font-black uppercase text-[#202020]">Central Metro</div>
                  <div className="text-[8px] font-bold text-[#7A2948]">4 mins away</div>
                </div>
              </div>

              {/* Safe Haven Marker 3: 24/7 Pharmacy */}
              <div className="absolute bottom-[20%] left-[34%] z-15 bg-[#FFFDF9] border-2 border-[#202020] rounded-xl px-2.5 py-1 shadow-xs flex items-center gap-1.5 hover:scale-105 transition-transform">
                <Plus className="w-3.5 h-3.5 text-[#4E7B62] font-black" />
                <div className="leading-tight">
                  <div className="text-[9px] font-black uppercase text-[#202020]">MedPlus 24/7</div>
                  <div className="text-[8px] font-bold text-[#4E7B62]">Open & Lit</div>
                </div>
              </div>

              {/* ShieldHER Community Cluster Badge */}
              <div className="absolute top-[22%] left-[28%] z-15 bg-[#F3A9BC] text-[#7A2948] border-1.5 border-[#202020] rounded-full px-2.5 py-1 shadow-xs flex items-center gap-1.5 text-[9.5px] font-black">
                <Users className="w-3 h-3" />
                <span>12 ShieldHER Members Nearby</span>
              </div>

              {/* 3 Verified Responders Badge */}
              <div className="absolute bottom-[28%] right-[18%] z-15 bg-[#D6E8DC] text-[#2D5A43] border-1.5 border-[#202020] rounded-full px-2.5 py-1 shadow-xs flex items-center gap-1.5 text-[9.5px] font-black">
                <Shield className="w-3 h-3" />
                <span>3 Verified Female Responders</span>
              </div>
            </div>

            {/* Bottom Row: Watchers + Primary Journey Actions */}
            <div className="mt-4 pt-3.5 border-t-2 border-[#202020]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Quiet Watchers */}
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-1.5 border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image src={contacts[0].avatar} alt="Aisha" width={28} height={28} className="object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full border-1.5 border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image src={contacts[1].avatar} alt="Mom" width={28} height={28} className="object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full border-1.5 border-[#202020] overflow-hidden bg-[#FAF7F2]">
                    <Image src={contacts[2].avatar} alt="Riya" width={28} height={28} className="object-cover" />
                  </div>
                </div>
                <p className="text-xs font-black text-[#7A2948]">
                  3 people can quietly follow this journey.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setActiveRoute((r) => (r === 'recommended' ? 'quick' : 'recommended'));
                  }}
                  className="px-4 py-2.5 rounded-full border-2 border-[#202020] bg-[#FAF7F0] hover:bg-[#F4E58C] text-[#202020] font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#202020] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                >
                  {activeRoute === 'recommended' ? 'Change route (18m quick)' : 'Back to Our Pick (21m ♡)'}
                </button>

                <button
                  type="button"
                  onClick={() => setIsJourneyActive(true)}
                  className="px-6 py-2.5 rounded-full border-2 border-[#202020] bg-[#7A2948] hover:bg-[#5E1F36] text-[#FFFDF9] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#202020] hover:shadow-[5px_5px_0px_#202020] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC]" />
                  <span>START JOURNEY →</span>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* =========================================================================
            4. QUICK ACTIONS (4 BOLD HORIZONTAL ACTION CARDS)
            ========================================================================= */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-10 max-w-[1360px] mx-auto z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* A. START A JOURNEY */}
            <motion.button
              type="button"
              onClick={() => setIsJourneyActive(true)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F4E58C] border-2.5 border-[#202020] rounded-3xl p-5 shadow-[5px_5px_0px_#1d1d1d] hover:shadow-[7px_7px_0px_#1d1d1d] transition-all text-left flex flex-col justify-between min-h-[140px] cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#FFFDF9] border-2 border-[#202020] flex items-center justify-center text-[#202020] shadow-xs group-hover:rotate-6 transition-transform">
                  <Navigation className="w-5 h-5 text-[#7A2948]" />
                </div>
                <span className="text-[10px] font-black uppercase text-[#7A2948]">ACTION 01</span>
              </div>
              <div>
                <h3 className="text-base font-black uppercase tracking-tight text-[#202020] mt-3">
                  START A JOURNEY
                </h3>
                <p className="text-xs font-bold text-[#7A2948] mt-0.5">
                  Pick destination & notify circle
                </p>
              </div>
            </motion.button>

            {/* B. CHECK IN */}
            <motion.button
              type="button"
              onClick={() => {
                setShowCheckInModal(true);
                setCheckInDone(false);
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F3A9BC] border-2.5 border-[#202020] rounded-3xl p-5 shadow-[5px_5px_0px_#1d1d1d] hover:shadow-[7px_7px_0px_#1d1d1d] transition-all text-left flex flex-col justify-between min-h-[140px] cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#FFFDF9] border-2 border-[#202020] flex items-center justify-center text-[#7A2948] shadow-xs group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 fill-[#B63A5B] text-[#B63A5B]" />
                </div>
                <span className="text-[10px] font-black uppercase text-[#7A2948]">ACTION 02</span>
              </div>
              <div>
                <h3 className="text-base font-black uppercase tracking-tight text-[#202020] mt-3">
                  CHECK IN
                </h3>
                <p className="text-xs font-bold text-[#7A2948] mt-0.5">
                  One-tap “Made it safe ♡” ping
                </p>
              </div>
            </motion.button>

            {/* C. SHARE MY ETA */}
            <motion.button
              type="button"
              onClick={() => {
                setShowEtaModal(true);
                setCopiedEta(false);
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#C9DFEA] border-2.5 border-[#202020] rounded-3xl p-5 shadow-[5px_5px_0px_#1d1d1d] hover:shadow-[7px_7px_0px_#1d1d1d] transition-all text-left flex flex-col justify-between min-h-[140px] cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#FFFDF9] border-2 border-[#202020] flex items-center justify-center text-[#202020] shadow-xs group-hover:-rotate-6 transition-transform">
                  <Clock className="w-5 h-5 text-[#202020]" />
                </div>
                <span className="text-[10px] font-black uppercase text-[#202020]">ACTION 03</span>
              </div>
              <div>
                <h3 className="text-base font-black uppercase tracking-tight text-[#202020] mt-3">
                  SHARE MY ETA
                </h3>
                <p className="text-xs font-bold text-[#202020]/75 mt-0.5">
                  Send live link with battery status
                </p>
              </div>
            </motion.button>

            {/* D. PANIC (Discreet & Styled in Burgundy/Pink) */}
            <motion.button
              type="button"
              onClick={() => {
                setShowPanicModal(true);
                setPanicCountdown(5);
                setPanicActive(false);
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#7A2948] text-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-5 shadow-[5px_5px_0px_#1d1d1d] hover:shadow-[7px_7px_0px_#1d1d1d] transition-all text-left flex flex-col justify-between min-h-[140px] cursor-pointer group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#B63A5B] border-2 border-[#FFFDF9]/40 flex items-center justify-center text-[#FFFDF9] shadow-xs group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-5 h-5 text-[#FFFDF9] animate-pulse" />
                </div>
                <span className="text-[10px] font-black uppercase text-[#F3A9BC]">DISCREET SOS</span>
              </div>
              <div>
                <h3 className="text-base font-black uppercase tracking-tight text-[#FFFDF9] mt-3">
                  PANIC ALERT
                </h3>
                <p className="text-xs font-bold text-[#F3A9BC] mt-0.5">
                  Encrypted silent emergency alert
                </p>
              </div>
            </motion.button>

          </div>
        </section>

        {/* =========================================================================
            5. YOUR SAFETY CIRCLE ("YOUR PEOPLE ARE HERE.")
            ========================================================================= */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-10 max-w-[1360px] mx-auto z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-2 border-[#202020]/15">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F3A9BC] text-[#7A2948] border-2 border-[#202020] rounded-full px-3.5 py-1 shadow-[2px_2px_0px_#202020] -rotate-1 text-xs font-black uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>INNER CIRCLE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#202020] mt-2 leading-[0.85]">
                YOUR PEOPLE
                <span className="block font-editorial-serif italic font-normal text-[#7A2948] lowercase text-[1.08em] mt-0.5">
                  are here. ♡
                </span>
              </h2>
              <p className="font-editorial-serif italic text-sm sm:text-base text-[#7A2948] font-bold mt-1">
                “The ones who'd actually pick up at 2am. ♡”
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowCircleModal(true)}
              className="px-5 py-2.5 rounded-full border-2 border-[#202020] bg-[#FFFDF9] hover:bg-[#F4E58C] text-[#202020] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#202020] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer self-start sm:self-end"
            >
              <span>MANAGE MY CIRCLE →</span>
            </button>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {contacts.map((c, i) => (
              <motion.div
                key={c.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className="bg-[#FFFDF9] border-2 border-[#202020] rounded-2xl p-4 shadow-[4px_4px_0px_#1d1d1d] hover:shadow-[6px_6px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-[#202020] overflow-hidden bg-[#FAF7F2]">
                      <Image src={c.avatar} alt={c.name} width={48} height={48} className="object-cover" />
                    </div>
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-[#FFFDF9] ${
                        c.available ? 'bg-[#4E7B62]' : 'bg-[#B63A5B]'
                      }`}
                    />
                  </div>
                  <span
                    className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border border-[#202020] ${
                      c.available ? 'bg-[#D6E8DC] text-[#2D5A43]' : 'bg-[#FAF7F0] text-[#7A2948]'
                    }`}
                  >
                    {c.available ? '● Available' : '● Offline'}
                  </span>
                </div>

                <div className="mt-3">
                  <h3 className="text-sm font-black text-[#202020]">{c.name}</h3>
                  <div className="text-[11px] font-bold text-[#7A2948] flex items-center justify-between mt-0.5">
                    <span>{c.relation}</span>
                    {c.battery && <span className="text-[10px] text-[#202020]/60">🔋 {c.battery}</span>}
                  </div>
                  <p className="text-[11px] text-[#202020]/75 mt-1.5 leading-snug">
                    {c.status}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#202020]/15 flex items-center justify-between text-[11px] font-black text-[#7A2948]">
                  <span className="hover:underline cursor-pointer flex items-center gap-1">
                    <Phone className="w-3 h-3" /> Call
                  </span>
                  <span className="hover:underline cursor-pointer flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" /> Ping
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. COMMUNITY RADAR ("WHO'S AROUND?")
            ========================================================================= */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-10 max-w-[1360px] mx-auto z-10">
          <div className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-5 sm:p-7 shadow-[8px_10px_0px_#1d1d1d]">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#202020]/15">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#D6E8DC] text-[#2D5A43] border border-[#202020] px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                    ● LIVE RADAR
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-[#7A2948]">
                    12 ShieldHER members · 3 responders · 4 safe spots
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#202020] mt-1.5">
                  WHO'S AROUND?
                </h2>
                <p className="text-xs font-bold text-[#7A2948] mt-0.5">
                  People nearby. Places nearby. You don't have to know them to feel less alone.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 bg-[#FAF7F0] p-1 rounded-full border-2 border-[#202020]">
                {(['all', 'members', 'responders', 'safePlaces'] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setRadarFilter(filter)}
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      radarFilter === filter
                        ? 'bg-[#7A2948] text-[#FFFDF9] shadow-xs'
                        : 'text-[#202020] hover:text-[#7A2948]'
                    }`}
                  >
                    {filter === 'all' ? 'All Signals' : filter === 'members' ? 'Members (12)' : filter === 'responders' ? 'Responders (3)' : 'Safe Places (4)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Stylized Clustered Radar Map Canvas */}
            <div className="relative mt-4 h-64 sm:h-72 w-full rounded-2xl border-2 border-[#202020] bg-[#FAF7F2] overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 320" fill="none">
                {/* Radial radar grid circles */}
                <circle cx="350" cy="160" r="130" stroke="#7A2948" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="350" cy="160" r="85" stroke="#7A2948" strokeOpacity="0.2" strokeWidth="1.5" />
                <circle cx="350" cy="160" r="40" fill="#F3A9BC" fillOpacity="0.25" stroke="#B63A5B" strokeWidth="1.5" />
                <circle cx="350" cy="160" r="8" fill="#7A2948" />

                {/* Radar Sweep Line */}
                <line x1="350" y1="160" x2="480" y2="70" stroke="#B63A5B" strokeWidth="2" opacity="0.6" />
              </svg>

              {/* Center: YOU */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <span className="bg-[#7A2948] text-[#FFFDF9] border border-[#202020] text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                  YOU
                </span>
              </div>

              {/* Clustered Radar Markers */}
              {(radarFilter === 'all' || radarFilter === 'members') && (
                <>
                  <div className="absolute top-[25%] left-[28%] z-15 bg-[#F3A9BC] text-[#7A2948] border-1.5 border-[#202020] rounded-full px-2.5 py-1 text-[9px] font-black shadow-xs flex items-center gap-1">
                    <span>👥</span>
                    <span>North Campus · 6 members</span>
                  </div>
                  <div className="absolute bottom-[28%] right-[26%] z-15 bg-[#F3A9BC] text-[#7A2948] border-1.5 border-[#202020] rounded-full px-2.5 py-1 text-[9px] font-black shadow-xs flex items-center gap-1">
                    <span>👥</span>
                    <span>Metro Gate 2 · 6 members</span>
                  </div>
                </>
              )}

              {(radarFilter === 'all' || radarFilter === 'responders') && (
                <>
                  <div className="absolute top-[32%] right-[32%] z-15 bg-[#D6E8DC] text-[#2D5A43] border-1.5 border-[#202020] rounded-full px-2.5 py-1 text-[9px] font-black shadow-xs flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Priya (Verified Responder · 2m)</span>
                  </div>
                  <div className="absolute bottom-[20%] left-[32%] z-15 bg-[#D6E8DC] text-[#2D5A43] border-1.5 border-[#202020] rounded-full px-2.5 py-1 text-[9px] font-black shadow-xs flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Neha (Verified Responder · 4m)</span>
                  </div>
                </>
              )}

              {(radarFilter === 'all' || radarFilter === 'safePlaces') && (
                <>
                  <div className="absolute top-[62%] left-[18%] z-15 bg-[#FFFDF9] border-1.5 border-[#202020] rounded-xl px-2 py-1 text-[9px] font-black shadow-xs flex items-center gap-1">
                    <Coffee className="w-3 h-3 text-[#B63A5B]" />
                    <span>The Coffee Club (24/7 Haven)</span>
                  </div>
                  <div className="absolute top-[18%] right-[18%] z-15 bg-[#FFFDF9] border-1.5 border-[#202020] rounded-xl px-2 py-1 text-[9px] font-black shadow-xs flex items-center gap-1">
                    <Plus className="w-3 h-3 text-[#4E7B62]" />
                    <span>Apollo Pharmacy (Open)</span>
                  </div>
                </>
              )}
            </div>

            {/* Bottom button */}
            <div className="mt-4 pt-3 border-t-2 border-[#202020]/15 flex items-center justify-between">
              <span className="font-editorial-serif italic text-xs text-[#7A2948]">
                Protected by privacy clusters: exact individual GPS positions are never exposed ♡
              </span>

              <Link
                href="/#community"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#7A2948] hover:underline"
              >
                <span>OPEN COMMUNITY RADAR →</span>
              </Link>
            </div>

          </div>
        </section>

        {/* =========================================================================
            7. RECENT JOURNEY ACTIVITY ("WHILE YOU WERE OUT") & 8. SAFETY SNAPSHOT
            ========================================================================= */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-10 max-w-[1360px] mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 7. ACTIVITY TIMELINE CARD (Left 7 cols) */}
            <div className="lg:col-span-7 bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-5 sm:p-7 shadow-[6px_8px_0px_#1d1d1d]">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#202020]/15">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#7A2948]">
                    ACTIVITY LOG
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#202020] mt-0.5">
                    WHILE YOU WERE OUT
                  </h3>
                </div>
                <span className="bg-[#FAF7F0] border border-[#202020] text-[10px] font-black px-2.5 py-1 rounded-full text-[#7A2948]">
                  Today's Journey
                </span>
              </div>

              {/* Timeline Steps */}
              <div className="mt-4 space-y-3 relative before:absolute before:top-2 before:bottom-2 before:left-3.5 before:w-0.5 before:bg-[#7A2948]/20">
                
                {/* Step 1 */}
                <div className="relative flex items-start gap-3 pl-1">
                  <div className="w-6 h-6 rounded-full bg-[#7A2948] text-[#FFFDF9] border border-[#202020] flex items-center justify-center text-[10px] font-black shrink-0 z-10">
                    ✓
                  </div>
                  <div className="bg-[#FAF7F0] border-1.5 border-[#202020] rounded-2xl p-3 w-full shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-black text-[#7A2948]">
                      <span>7:42 PM</span>
                      <span className="text-[#4E7B62]">✓ Verified</span>
                    </div>
                    <p className="text-xs font-black text-[#202020] mt-0.5">
                      Leaving college campus · Destination: Home
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start gap-3 pl-1">
                  <div className="w-6 h-6 rounded-full bg-[#F4E58C] text-[#202020] border border-[#202020] flex items-center justify-center text-[10px] font-black shrink-0 z-10">
                    👥
                  </div>
                  <div className="bg-[#FAF7F0] border-1.5 border-[#202020] rounded-2xl p-3 w-full shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-black text-[#7A2948]">
                      <span>7:44 PM</span>
                      <span>Quiet Trace</span>
                    </div>
                    <p className="text-xs font-black text-[#202020] mt-0.5">
                      Aisha + Mom joined your journey · Live trace active
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-3 pl-1">
                  <div className="w-6 h-6 rounded-full bg-[#F3A9BC] text-[#7A2948] border border-[#202020] flex items-center justify-center text-[10px] font-black shrink-0 z-10">
                    💬
                  </div>
                  <div className="bg-[#FAF7F0] border-1.5 border-[#202020] rounded-2xl p-3 w-full shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-black text-[#7A2948]">
                      <span>8:03 PM</span>
                      <span>Auto Check-in</span>
                    </div>
                    <p className="text-xs font-black text-[#202020] mt-0.5">
                      “everything okay? ♡” ➔ “yep, on the metro now”
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-start gap-3 pl-1">
                  <div className="w-6 h-6 rounded-full bg-[#4E7B62] text-[#FFFDF9] border border-[#202020] flex items-center justify-center text-[10px] font-black shrink-0 z-10">
                    🏠
                  </div>
                  <div className="bg-[#FAF7F0] border-1.5 border-[#202020] rounded-2xl p-3 w-full shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-black text-[#4E7B62]">
                      <span>8:19 PM</span>
                      <span>Completed Safe ♡</span>
                    </div>
                    <p className="text-xs font-black text-[#202020] mt-0.5">
                      HOME. Circle notified automatically.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 8. SAFETY SNAPSHOT (Right 5 cols — 3 Large Stat Cards) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              
              {/* Stat 1: Your Circle */}
              <div className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-5 shadow-[4px_4px_0px_#1d1d1d] relative">
                <div className="absolute -top-2.5 right-6 w-12 h-3.5 bg-[#F3A9BC] border border-[#202020]/40 rotate-1 shadow-xs pointer-events-none" />
                <div className="text-[10px] font-black uppercase tracking-widest text-[#7A2948]">
                  YOUR CIRCLE
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#202020]">4</span>
                  <span className="text-xs font-extrabold text-[#7A2948]">trusted people looking out</span>
                </div>
              </div>

              {/* Stat 2: Your Check-Ins */}
              <div className="bg-[#F4E58C] border-2.5 border-[#202020] rounded-3xl p-5 shadow-[4px_4px_0px_#1d1d1d] relative">
                <div className="absolute -top-2.5 left-6 w-12 h-3.5 bg-[#F3A9BC] border border-[#202020]/40 -rotate-2 shadow-xs pointer-events-none" />
                <div className="text-[10px] font-black uppercase tracking-widest text-[#7A2948]">
                  YOUR CHECK-INS
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#202020]">12</span>
                  <span className="text-xs font-extrabold text-[#7A2948]">this month · 100% peace of mind</span>
                </div>
              </div>

              {/* Stat 3: Safe Journeys */}
              <div className="bg-[#C9DFEA] border-2.5 border-[#202020] rounded-3xl p-5 shadow-[4px_4px_0px_#1d1d1d] relative">
                <div className="absolute -top-2.5 right-6 w-12 h-3.5 bg-[#F4E58C] border border-[#202020]/40 rotate-2 shadow-xs pointer-events-none" />
                <div className="text-[10px] font-black uppercase tracking-widest text-[#202020]">
                  SAFE JOURNEYS
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#202020]">28</span>
                  <span className="text-xs font-extrabold text-[#202020]/80">completed without anxiety</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            9. FINAL CTA (RICH BURGUNDY SECTION)
            ========================================================================= */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-10 max-w-[1360px] mx-auto z-10">
          <div
            className="bg-[#7A2948] text-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-8 sm:p-12 shadow-[8px_10px_0px_#1d1d1d] text-center relative overflow-hidden flex flex-col items-center"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 50% 50%, rgba(243, 169, 188, 0.2) 0%, transparent 60%),
                linear-gradient(rgba(255, 253, 249, 0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 253, 249, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: '100% 100%, 24px 24px, 24px 24px',
            }}
          >
            {/* Sparkle details */}
            <span className="absolute top-6 left-8 text-xl text-[#F3A9BC] font-serif">✧</span>
            <span className="absolute top-8 right-12 text-sm text-[#F4E58C] font-mono">★</span>
            <span className="absolute bottom-6 left-12 text-lg text-[#F3A9BC] font-editorial-serif">♡</span>

            <div className="inline-flex items-center gap-2 bg-[#B63A5B] text-[#FFFDF9] border-2 border-[#202020] rounded-full px-4 py-1 text-xs font-black uppercase tracking-wider shadow-xs -rotate-1">
              <Heart className="w-3.5 h-3.5 fill-[#F3A9BC] text-[#F3A9BC]" />
              <span>ALWAYS WITH YOU</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#FFFDF9] mt-3 leading-[0.85]">
              GO WHERE
              <br />
              YOU WANT.
              <span className="block font-editorial-serif italic font-normal text-[#F3A9BC] lowercase text-[0.72em] mt-1">
                we'll help you get there. ♡
              </span>
            </h2>

            <p className="text-xs sm:text-base font-extrabold text-[#FFFDF9]/85 max-w-md mt-4">
              Your route. Your people. Your call.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => setIsJourneyActive(true)}
                className="px-8 py-3.5 rounded-full border-2 border-[#202020] bg-[#F4E58C] hover:bg-[#EBD96B] text-[#202020] font-black text-xs sm:text-sm uppercase tracking-wider shadow-[4px_4px_0px_#1d1d1d] hover:shadow-[6px_6px_0px_#1d1d1d] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#7A2948] text-[#7A2948]" />
                <span>START A JOURNEY →</span>
              </button>

              <button
                type="button"
                onClick={() => setShowCircleModal(true)}
                className="px-6 py-3.5 rounded-full border-2 border-[#202020] bg-[#FFFDF9] hover:bg-[#FAF7F0] text-[#7A2948] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#1d1d1d] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>INVITE MORE PEOPLE ♡</span>
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* =========================================================================
          INTERACTIVE MODALS
          ========================================================================= */}
      
      {/* 1. ACTIVE JOURNEY TRACKING MODAL */}
      <AnimatePresence>
        {isJourneyActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#202020]/75 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[8px_10px_0px_#1d1d1d] relative"
            >
              <button
                type="button"
                onClick={() => setIsJourneyActive(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF7F0] border-2 border-[#202020] flex items-center justify-center font-black text-xs hover:bg-[#F4E58C] transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#4E7B62] animate-ping" />
                <span className="text-xs font-black uppercase text-[#4E7B62] tracking-wider">
                  LIVE JOURNEY ACTIVE
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-[#202020] mt-1.5">
                En Route to College
              </h3>
              <p className="text-xs font-bold text-[#7A2948]">
                Aisha, Mom & Riya are quietly watching your trace.
              </p>

              {/* Live Status Bar */}
              <div className="mt-4 p-4 rounded-2xl bg-[#FAF7F0] border-2 border-[#202020] space-y-2.5">
                <div className="flex items-center justify-between text-xs font-black">
                  <span>Progress (1.2 km / 3.4 km)</span>
                  <span className="text-[#7A2948]">14 mins left</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#202020]/15 border border-[#202020] overflow-hidden">
                  <div className="h-full bg-[#7A2948] w-2/5 transition-all duration-500" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-bold text-[#202020]/70 pt-1">
                  <span>📍 Near Central Metro</span>
                  <span>🔋 Battery: 88%</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsJourneyActive(false);
                    setShowCheckInModal(true);
                  }}
                  className="w-full py-3 rounded-full border-2 border-[#202020] bg-[#4E7B62] hover:bg-[#3D6650] text-[#FFFDF9] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#202020] transition-all cursor-pointer"
                >
                  I'VE REACHED SAFELY ♡
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowEtaModal(true);
                    setCopiedEta(false);
                  }}
                  className="w-full py-2.5 rounded-full border-2 border-[#202020] bg-[#FFFDF9] hover:bg-[#F4E58C] text-[#202020] font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#202020] transition-all cursor-pointer"
                >
                  Share Live ETA with Friend
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. QUICK CHECK-IN MODAL */}
      <AnimatePresence>
        {showCheckInModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#202020]/75 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[8px_10px_0px_#1d1d1d] relative"
            >
              <button
                type="button"
                onClick={() => setShowCheckInModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF7F0] border-2 border-[#202020] flex items-center justify-center font-black text-xs hover:bg-[#F4E58C] transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="w-10 h-10 rounded-full bg-[#F3A9BC] border-2 border-[#202020] flex items-center justify-center text-[#7A2948]">
                <Heart className="w-5 h-5 fill-[#7A2948]" />
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-[#202020] mt-3">
                Quick Safety Check-In
              </h3>
              <p className="text-xs font-bold text-[#7A2948]">
                Send a quick reassurance ping to Aisha, Mom & Riya.
              </p>

              {checkInDone ? (
                <div className="mt-5 p-4 rounded-2xl bg-[#D6E8DC] border-2 border-[#202020] text-center space-y-1">
                  <div className="text-sm font-black text-[#2D5A43]">Check-In Sent! ♡</div>
                  <p className="text-xs text-[#2D5A43]/80">Your circle was notified: "Made it safe!"</p>
                </div>
              ) : (
                <div className="mt-4 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => setCheckInDone(true)}
                    className="w-full py-3 px-4 rounded-2xl bg-[#FAF7F0] hover:bg-[#F4E58C] border-2 border-[#202020] text-left text-xs font-black text-[#202020] shadow-[2px_2px_0px_#202020] transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>“Made it home safe & sound ♡”</span>
                    <span>➔</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCheckInDone(true)}
                    className="w-full py-3 px-4 rounded-2xl bg-[#FAF7F0] hover:bg-[#F4E58C] border-2 border-[#202020] text-left text-xs font-black text-[#202020] shadow-[2px_2px_0px_#202020] transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>“Boarded the metro, 10 mins away”</span>
                    <span>➔</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCheckInDone(true)}
                    className="w-full py-3 px-4 rounded-2xl bg-[#FAF7F0] hover:bg-[#F4E58C] border-2 border-[#202020] text-left text-xs font-black text-[#202020] shadow-[2px_2px_0px_#202020] transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>“With friends at cafe, all good!”</span>
                    <span>➔</span>
                  </button>
                </div>
              )}

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setShowCheckInModal(false)}
                  className="w-full py-2.5 rounded-full border-2 border-[#202020] bg-[#7A2948] text-[#FFFDF9] font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#202020] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. SHARE ETA MODAL */}
      <AnimatePresence>
        {showEtaModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#202020]/75 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[8px_10px_0px_#1d1d1d] relative"
            >
              <button
                type="button"
                onClick={() => setShowEtaModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF7F0] border-2 border-[#202020] flex items-center justify-center font-black text-xs hover:bg-[#F4E58C] transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="w-10 h-10 rounded-full bg-[#C9DFEA] border-2 border-[#202020] flex items-center justify-center text-[#202020]">
                <Share2 className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-[#202020] mt-3">
                Share Live ETA Link
              </h3>
              <p className="text-xs font-bold text-[#7A2948]">
                Recipients can see your arrival time without needing an app.
              </p>

              <div className="mt-4 p-3.5 rounded-2xl bg-[#FAF7F0] border-2 border-[#202020] flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#202020] truncate pr-2">
                  https://shieldher.app/trace/j-88291
                </span>
                <button
                  type="button"
                  onClick={() => setCopiedEta(true)}
                  className="px-3 py-1 rounded-full bg-[#F4E58C] border-1.5 border-[#202020] text-xs font-black text-[#202020] shrink-0 hover:bg-[#EBD96B] transition-all cursor-pointer"
                >
                  {copiedEta ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setCopiedEta(true)}
                  className="py-2.5 px-3 rounded-2xl bg-[#D6E8DC] border-2 border-[#202020] text-xs font-black text-[#2D5A43] flex items-center justify-center gap-1.5 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCopiedEta(true)}
                  className="py-2.5 px-3 rounded-2xl bg-[#F3A9BC] border-2 border-[#202020] text-xs font-black text-[#7A2948] flex items-center justify-center gap-1.5 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>SMS Circle</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. DISCREET EMERGENCY PANIC MODAL */}
      <AnimatePresence>
        {showPanicModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#200F17]/85 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#2C1521] border-2.5 border-[#202020] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[8px_10px_0px_#1d1d1d] text-[#FFFDF9] relative"
            >
              <button
                type="button"
                onClick={() => {
                  setShowPanicModal(false);
                  setPanicActive(false);
                }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#7A2948] border-2 border-[#202020] flex items-center justify-center font-black text-xs text-[#FFFDF9] hover:bg-[#B63A5B] transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-[#F3A9BC]">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider">
                  DISCREET EMERGENCY PROTOCOL
                </span>
              </div>

              {panicActive ? (
                <div className="mt-4 space-y-3">
                  <div className="p-4 rounded-2xl bg-[#B63A5B] border-2 border-[#FFFDF9] space-y-1">
                    <div className="text-sm font-black">SOS BROADCAST LIVE</div>
                    <p className="text-xs text-[#FFFDF9]/90">
                      GPS coordinates sent to Circle + 3 nearby verified female responders alerted.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setPanicActive(false);
                      setShowPanicModal(false);
                    }}
                    className="w-full py-3 rounded-full border-2 border-[#202020] bg-[#4E7B62] text-[#FFFDF9] font-black text-xs uppercase tracking-wider cursor-pointer"
                  >
                    I AM SAFE (CANCEL ALERT)
                  </button>
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    Triggering Emergency Dispatch in:
                  </h3>
                  <div className="w-20 h-20 rounded-full bg-[#B63A5B] border-2 border-[#FFFDF9] flex items-center justify-center text-4xl font-black mx-auto animate-pulse">
                    {panicCountdown}
                  </div>
                  <p className="text-xs text-[#F3A9BC] text-center">
                    Silent broadcast: no sirens, no flashing screen. Press Cancel if accidental.
                  </p>

                  <div className="flex gap-2.5">
                    <button
                      type="button"
                      onClick={() => setPanicActive(true)}
                      className="flex-1 py-3 rounded-full border-2 border-[#202020] bg-[#B63A5B] hover:bg-[#9E2B4B] text-[#FFFDF9] font-black text-xs uppercase tracking-wider cursor-pointer"
                    >
                      TRIGGER NOW
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPanicModal(false)}
                      className="flex-1 py-3 rounded-full border-2 border-[#202020] bg-[#FAF7F0] text-[#202020] font-black text-xs uppercase tracking-wider cursor-pointer"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. MANAGE SAFETY CIRCLE MODAL */}
      <AnimatePresence>
        {showCircleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#202020]/75 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FFFDF9] border-2.5 border-[#202020] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[8px_10px_0px_#1d1d1d] relative max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setShowCircleModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF7F0] border-2 border-[#202020] flex items-center justify-center font-black text-xs hover:bg-[#F4E58C] transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-[#7A2948]">
                <Users className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-wider">
                  SAFETY CIRCLE DIRECTORY
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-[#202020] mt-1.5">
                Manage Your People
              </h3>
              <p className="text-xs font-bold text-[#7A2948]">
                Add friends or family who receive your live traces and automated check-ins.
              </p>

              {/* Add New Contact Form */}
              <form onSubmit={handleAddContact} className="mt-4 p-4 rounded-2xl bg-[#FAF7F0] border-2 border-[#202020] space-y-3">
                <div className="text-xs font-black uppercase text-[#202020]">Add New Trusted Person</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    value={newContactName}
                    onChange={(e) => setNewContactName(e.target.value)}
                    placeholder="Name (e.g. Tanvi)"
                    className="w-full px-3 py-2 rounded-xl bg-[#FFFDF9] border-1.5 border-[#202020] text-xs font-bold text-[#202020] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={newContactRelation}
                    onChange={(e) => setNewContactRelation(e.target.value)}
                    placeholder="Relation (e.g. College Friend)"
                    className="w-full px-3 py-2 rounded-xl bg-[#FFFDF9] border-1.5 border-[#202020] text-xs font-bold text-[#202020] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#7A2948] hover:bg-[#5E1F36] text-[#FFFDF9] font-black text-xs uppercase tracking-wider border-1.5 border-[#202020] shadow-[2px_2px_0px_#202020] cursor-pointer"
                >
                  + Add to Safety Circle
                </button>
              </form>

              {/* Contact List */}
              <div className="mt-4 space-y-2">
                {contacts.map((c) => (
                  <div key={c.id} className="p-3 rounded-xl bg-[#FFFDF9] border-1.5 border-[#202020] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full border border-[#202020] overflow-hidden bg-[#FAF7F2]">
                        <Image src={c.avatar} alt={c.name} width={32} height={32} className="object-cover" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-[#202020]">{c.name}</div>
                        <div className="text-[10px] text-[#7A2948] font-bold">{c.relation}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-[#4E7B62] bg-[#D6E8DC] px-2 py-0.5 rounded-full border border-[#202020]">
                      Active Guardian
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setShowCircleModal(false)}
                  className="w-full py-2.5 rounded-full border-2 border-[#202020] bg-[#FAF7F0] text-[#202020] font-black text-xs uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <EditorialFooter
        onStartJourneyClick={() => setIsJourneyActive(true)}
        onOpenAppClick={() => setIsJourneyActive(true)}
      />

    </div>
  );
}
