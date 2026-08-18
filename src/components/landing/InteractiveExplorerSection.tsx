'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Building2, AlertTriangle, Navigation } from 'lucide-react';
import { MOCK_SAFE_PLACES, MOCK_VERIFIED_RESPONDERS, MOCK_COMMUNITY_CLUSTERS, MOCK_INCIDENTS, MOCK_ROUTES } from '../../data/mockData';
import { SafetyMap } from '../map/SafetyMap';
import { EditorialHeading } from '../ui/EditorialHeading';
import { EditorialLabel } from '../ui/EditorialLabel';

export const InteractiveExplorerSection: React.FC = () => {
  const [tab, setTab] = useState<'people' | 'places' | 'reports' | 'routes'>('people');

  return (
    <section id="around-me" className="py-24 md:py-36 bg-cream-50 select-none border-t border-plum-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <EditorialLabel variant="sage" tilt="slight-left">
              INTERACTIVE RADAR
            </EditorialLabel>
            <EditorialHeading
              size="display"
              line1="what's around"
              line2Italic="me?"
            />
            <p className="text-charcoal-800/85 font-medium text-base max-w-xl">
              Explore your live neighborhood safety signals. Toggle tabs to see how ShieldHER visualizes community presence, verified safe havens, street reports, and recommended routes.
            </p>
          </div>

          {/* INTERACTIVE SWITCHER TABS */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-cream-card border border-plum-900/15 shadow-sm overflow-x-auto">
            {[
              { id: 'people', label: 'People', icon: Users },
              { id: 'places', label: 'Safe Places', icon: Building2 },
              { id: 'reports', label: 'Reports', icon: AlertTriangle },
              { id: 'routes', label: 'Safer Routes', icon: Navigation },
            ].map((t) => {
              const Icon = t.icon;
              const isActive = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as any)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-plum-900 text-cream-50 shadow-sm'
                      : 'text-charcoal-800 hover:bg-cream-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAP & DYNAMIC DETAILS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* MAP CANVAS */}
          <div className="lg:col-span-8">
            <SafetyMap
              safePlaces={tab === 'places' || tab === 'people' ? MOCK_SAFE_PLACES : []}
              responders={tab === 'people' ? MOCK_VERIFIED_RESPONDERS : []}
              clusters={tab === 'people' ? MOCK_COMMUNITY_CLUSTERS : []}
              incidents={tab === 'reports' ? MOCK_INCIDENTS : []}
              selectedRoute={tab === 'routes' ? MOCK_ROUTES[0] : undefined}
            />
          </div>

          {/* DYNAMIC SIDE DETAIL PANEL DEPENDING ON TAB */}
          <div className="lg:col-span-4 bg-cream-card p-6 sm:p-8 rounded-3xl border border-plum-900/15 shadow-editorial space-y-6">
            <AnimatePresence mode="wait">
              
              {tab === 'people' && (
                <motion.div key="people" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-plum-800 border-b border-plum-900/10 pb-3">
                    Community & Responders Nearby
                  </div>
                  <div className="p-4 rounded-2xl bg-plum-900 text-cream-50 space-y-1">
                    <div className="font-editorial-serif text-3xl italic text-blush-200">12 Members</div>
                    <div className="text-[11px] opacity-80">Within 1 km radius cluster</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-sage-700 text-white space-y-1">
                    <div className="font-editorial-serif text-3xl italic text-sage-100">3 Responders</div>
                    <div className="text-[11px] opacity-80">Vetted & available to assist</div>
                  </div>
                  <p className="text-xs text-charcoal-800/70 font-medium">
                    ✦ Note: Ordinary members are displayed as privacy density clusters, never exact house pins.
                  </p>
                </motion.div>
              )}

              {tab === 'places' && (
                <motion.div key="places" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-plum-800 border-b border-plum-900/10 pb-3">
                    Verified Safe Places Nearby
                  </div>
                  <div className="space-y-3">
                    {MOCK_SAFE_PLACES.slice(0, 3).map((p) => (
                      <div key={p.id} className="p-3.5 rounded-2xl bg-cream-50 border border-plum-900/10 text-xs">
                        <h4 className="font-sans font-extrabold text-plum-950">{p.name}</h4>
                        <p className="text-[11px] text-charcoal-800/70">{p.address} • {p.distance}</p>
                        <span className="inline-block text-[10px] font-bold text-sage-800 bg-sage-100 px-2 py-0.5 rounded-full mt-1">
                          Open 24/7
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {tab === 'reports' && (
                <motion.div key="reports" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-plum-800 border-b border-plum-900/10 pb-3">
                    Recent Community Reports
                  </div>
                  <div className="space-y-3">
                    {MOCK_INCIDENTS.map((inc) => (
                      <div key={inc.id} className="p-3.5 rounded-2xl bg-amber-50 border border-amber-500/30 text-xs text-amber-950 space-y-1">
                        <h4 className="font-sans font-extrabold text-amber-900">{inc.title}</h4>
                        <p className="text-[11px] opacity-80">{inc.description}</p>
                        <span className="inline-block text-[10px] font-bold text-amber-800">
                          Reported {inc.timestamp}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {tab === 'routes' && (
                <motion.div key="routes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <div className="text-xs uppercase font-extrabold tracking-widest text-plum-800 border-b border-plum-900/10 pb-3">
                    Active Route Signals
                  </div>
                  <div className="p-4 rounded-2xl bg-cream-50 border border-plum-900/10 space-y-2 text-xs">
                    <div className="font-editorial-serif text-3xl italic text-plum-950">21 min</div>
                    <p className="font-extrabold text-plum-900">RECOMMENDED ROUTE</p>
                    <p className="text-[11px] text-charcoal-800/70 leading-relaxed">
                      Continuous streetlights, 3 verified safe places along path, and 14 ShieldHER members nearby.
                    </p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
