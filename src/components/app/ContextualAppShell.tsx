'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  ShieldCheck, 
  Users, 
  Building2, 
  Lock, 
  AlertOctagon, 
  Navigation,
  Sparkles,
  Layout,
  Smartphone,
  Info
} from 'lucide-react';
import { AppStateMode, ContextualState } from '../../types/safety';
import { ShieldButton } from '../ui/ShieldButton';
import { StatusPill } from '../ui/StatusPill';

interface ContextualAppShellProps {
  appMode: AppStateMode;
  onAppModeChange: (mode: AppStateMode) => void;
  contextState: ContextualState;
  onContextStateChange: (state: ContextualState) => void;
  activeTab: 'home' | 'map' | 'guardian' | 'circle' | 'places' | 'vault';
  onTabChange: (tab: 'home' | 'map' | 'guardian' | 'circle' | 'places' | 'vault') => void;
  onTriggerSOS: () => void;
  children: React.ReactNode;
}

export const ContextualAppShell: React.FC<ContextualAppShellProps> = ({
  appMode,
  onAppModeChange,
  contextState,
  onContextStateChange,
  activeTab,
  onTabChange,
  onTriggerSOS,
  children,
}) => {
  return (
    <div className="min-h-screen bg-cream-50 flex flex-col justify-between selection:bg-blush-200">
      
      {/* GLOBAL EDITORIAL TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-cream-50/90 backdrop-blur-md border-b border-plum-900/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LEFT: EDITORIAL WORDMARK */}
          <div 
            onClick={() => {
              onAppModeChange('landing');
              onTabChange('home');
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-plum-950">
              shield<span className="font-editorial-serif italic font-normal text-plum-900 group-hover:text-plum-700 transition-colors">HER.</span>
            </div>
            <span className="hidden sm:inline-block font-sans text-[10px] font-extrabold uppercase tracking-widest text-plum-800 bg-plum-100/80 px-2.5 py-0.5 rounded-full">
              Community Safety Layer
            </span>
          </div>

          {/* MIDDLE: EDITORIAL NAV LINKS & APP TABS */}
          {appMode === 'landing' ? (
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-charcoal-800">
              <button onClick={() => onAppModeChange('app')} className="hover:text-plum-900 transition-colors">
                How it works
              </button>
              <button onClick={() => { onAppModeChange('app'); onTabChange('map'); }} className="hover:text-plum-900 transition-colors">
                Safety Map
              </button>
              <button onClick={() => { onAppModeChange('app'); onTabChange('circle'); }} className="hover:text-plum-900 transition-colors">
                Community
              </button>
              <button onClick={() => { onAppModeChange('app'); onTabChange('places'); }} className="hover:text-plum-900 transition-colors">
                Safe Places
              </button>
            </nav>
          ) : (
            <nav className="hidden md:flex items-center gap-1 bg-cream-card p-1.5 rounded-full border border-plum-900/10 shadow-xs">
              {[
                { id: 'home', label: 'Home', icon: Layout },
                { id: 'map', label: 'Safety Map', icon: MapPin },
                { id: 'guardian', label: 'Guardian', icon: ShieldCheck },
                { id: 'circle', label: 'Your People', icon: Users },
                { id: 'places', label: 'Safe Places', icon: Building2 },
                { id: 'vault', label: 'Evidence', icon: Lock },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-plum-900 text-cream-50 shadow-xs'
                        : 'text-charcoal-800 hover:text-plum-900 hover:bg-plum-900/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          )}

          {/* RIGHT: MODE TOGGLE & EMERGENCY SOS ACCESS */}
          <div className="flex items-center gap-3">
            {/* View Mode Switcher Button */}
            <button
              onClick={() => onAppModeChange(appMode === 'landing' ? 'app' : 'landing')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blush-100 text-plum-950 text-xs font-extrabold border border-plum-900/10 hover:bg-blush-200 transition-colors cursor-pointer"
            >
              {appMode === 'landing' ? (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-plum-900" />
                  <span>Launch Live App</span>
                </>
              ) : (
                <>
                  <Layout className="w-3.5 h-3.5 text-plum-900" />
                  <span>View Editorial Landing Page</span>
                </>
              )}
            </button>

            {/* Global Emergency SOS Quick Button */}
            <button
              onClick={onTriggerSOS}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emergency-600 text-white font-extrabold text-xs tracking-tight shadow-md hover:bg-emergency-700 active:bg-emergency-800 transition-all cursor-pointer"
            >
              <AlertOctagon className="w-4 h-4 animate-pulse" />
              <span>SOS</span>
            </button>
          </div>

        </div>

        {/* DEMO CONTEXTUAL STATE SWITCHER TOOLBAR (ALLOWS EASY TESTING OF ALL 5 USER STATES) */}
        {appMode === 'app' && (
          <div className="bg-plum-950 text-cream-50 py-2.5 px-4 border-t border-plum-900/30 overflow-x-auto select-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-extrabold uppercase tracking-widest text-[10px] text-blush-200">
                  Interactive State Switcher:
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto">
                {[
                  { state: 'idle', label: '1. Normal Home' },
                  { state: 'journey_active', label: '2. Guardian Active' },
                  { state: 'checkin_requested', label: '3. Smart Check-in' },
                  { state: 'route_deviation', label: '4. Route Deviation' },
                  { state: 'sos_active', label: '5. Active SOS' },
                ].map((s) => (
                  <button
                    key={s.state}
                    onClick={() => onContextStateChange(s.state as any)}
                    className={`px-3 py-1 rounded-full text-[11px] font-extrabold transition-all shrink-0 cursor-pointer ${
                      contextState === s.state
                        ? 'bg-cream-50 text-plum-950 shadow-sm'
                        : 'bg-cream-50/15 text-cream-50/80 hover:bg-cream-50/25'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MAIN BODY CONTENT AREA */}
      <main className="flex-1">
        {children}
      </main>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      {appMode === 'app' && (
        <nav className="md:hidden sticky bottom-0 z-40 bg-cream-card/95 backdrop-blur-md border-t border-plum-900/15 px-3 py-2 flex items-center justify-around">
          {[
            { id: 'home', label: 'Home', icon: Layout },
            { id: 'map', label: 'Map', icon: MapPin },
            { id: 'guardian', label: 'Guardian', icon: ShieldCheck },
            { id: 'circle', label: 'People', icon: Users },
            { id: 'places', label: 'Places', icon: Building2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id as any)}
                className={`flex flex-col items-center gap-1 p-1.5 rounded-xl transition-colors cursor-pointer ${
                  isActive ? 'text-plum-900 font-extrabold' : 'text-charcoal-800/60 font-semibold'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px]">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      )}

    </div>
  );
};
