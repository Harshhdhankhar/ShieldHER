'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Lock, HeartHandshake } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { ShieldButton } from '@/components/ui/ShieldButton';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { EditorialLabel } from '@/components/ui/EditorialLabel';

export default function SignUpPage() {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    signup(name, email);
  };

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col justify-between selection:bg-blush-200">
      
      {/* MINIMAL BRAND HEADER */}
      <header className="px-6 py-6 border-b border-plum-900/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-sans text-2xl font-extrabold text-plum-950 tracking-tight">
            shield<span className="font-editorial-serif italic text-plum-900 font-normal">HER.</span>
          </Link>
          <Link href="/signin" className="text-xs font-bold text-plum-900 hover:underline">
            Already have an account? Sign in
          </Link>
        </div>
      </header>

      {/* EDITORIAL SPLIT COMPOSITION */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* LEFT SIDE: CREATIVE EDITORIAL ARTWORK & HEADLINE */}
          <div className="lg:col-span-6 space-y-6">
            <EditorialLabel variant="plum" tilt="slight-left">
              JOIN THE SAFETY NETWORK
            </EditorialLabel>
            
            <EditorialHeading
              size="hero"
              line1="let's make sure"
              line2Italic="someone's"
              line3="got you."
            />

            <p className="text-charcoal-800/80 font-medium text-lg max-w-md leading-relaxed">
              Create your free ShieldHER account to build your Safety Circle, access safer route signals, and travel with confidence.
            </p>

            {/* Subtle artwork badge */}
            <div className="bg-cream-card p-6 rounded-3xl border border-plum-900/15 shadow-editorial max-w-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-sage-100 text-sage-800">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-sans font-extrabold text-sm text-plum-950">100% Privacy Protected</div>
                  <div className="text-xs text-charcoal-800/70">Exact GPS locations are never revealed to strangers.</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: MINIMAL PRODUCTION FORM */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto space-y-6"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Harsh Dhankhar"
                    className="w-full px-4 py-3.5 rounded-2xl bg-cream-card border border-plum-900/20 text-sm font-semibold text-plum-950 focus:outline-none focus:ring-2 focus:ring-plum-800 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-cream-card border border-plum-900/20 text-sm font-semibold text-plum-950 focus:outline-none focus:ring-2 focus:ring-plum-800 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-4 py-3.5 rounded-2xl bg-cream-card border border-plum-900/20 text-sm font-semibold text-plum-950 focus:outline-none focus:ring-2 focus:ring-plum-800 shadow-xs"
                  />
                </div>

                <ShieldButton
                  variant="primary"
                  size="xl"
                  type="submit"
                  className="w-full mt-2"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Create my account →
                </ShieldButton>
              </form>

              {/* Social Login Button */}
              <div className="pt-2">
                <button
                  onClick={() => signup('Harsh', 'harsh@shieldher.app')}
                  className="w-full py-3 px-4 rounded-2xl bg-cream-card border border-plum-900/15 text-xs font-extrabold text-charcoal-900 hover:bg-cream-100 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              <p className="text-center text-xs text-charcoal-800/60 font-medium">
                By creating an account, you agree to ShieldHER's{' '}
                <span className="underline cursor-pointer text-plum-900">Privacy Pledge</span> and{' '}
                <span className="underline cursor-pointer text-plum-900">Terms of Trust</span>.
              </p>
            </motion.div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-4 text-center text-xs font-semibold text-charcoal-800/50">
        © {new Date().getFullYear()} ShieldHER Creative Studio. All rights reserved.
      </footer>
    </div>
  );
}
