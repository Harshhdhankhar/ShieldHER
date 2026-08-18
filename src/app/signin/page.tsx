'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { ShieldButton } from '@/components/ui/ShieldButton';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { EditorialLabel } from '@/components/ui/EditorialLabel';

export default function SignInPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email);
  };

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col justify-between selection:bg-blush-200">
      
      {/* MINIMAL HEADER */}
      <header className="px-6 py-6 border-b border-plum-900/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-sans text-2xl font-extrabold text-plum-950 tracking-tight">
            shield<span className="font-editorial-serif italic text-plum-900 font-normal">HER.</span>
          </Link>
          <Link href="/signup" className="text-xs font-bold text-plum-900 hover:underline">
            New here? Create account
          </Link>
        </div>
      </header>

      {/* EDITORIAL SIGN IN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          
          <div className="text-center space-y-3">
            <EditorialLabel variant="plum" tilt="slight-left" className="mx-auto">
              WELCOME BACK
            </EditorialLabel>
            
            <EditorialHeading
              size="display"
              line1="good to see"
              line2Italic="you"
              line3="again."
              align="center"
            />

            <p className="text-charcoal-800/80 font-medium text-sm">
              Sign in to access your active Safety Circle and Guardian journeys.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70">
                    Password
                  </label>
                  <a href="#" className="text-[11px] font-bold text-plum-800 hover:underline">
                    Forgot password?
                  </a>
                </div>
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
                Sign in →
              </ShieldButton>
            </form>

            <div className="pt-2">
              <button
                onClick={() => login('harsh@shieldher.app')}
                className="w-full py-3 px-4 rounded-2xl bg-cream-card border border-plum-900/15 text-xs font-extrabold text-charcoal-900 hover:bg-cream-100 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
          </motion.div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-4 text-center text-xs font-semibold text-charcoal-800/50">
        © {new Date().getFullYear()} ShieldHER Creative Studio.
      </footer>
    </div>
  );
}
