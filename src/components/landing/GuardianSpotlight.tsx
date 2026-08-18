'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Clock, ShieldCheck, UserCheck, Bell, ChevronRight } from 'lucide-react';
import { EditorialHeading } from '../ui/EditorialHeading';
import { ShieldButton } from '../ui/ShieldButton';
import { EditorialLabel } from '../ui/EditorialLabel';

interface GuardianSpotlightProps {
  onStartGuardianClick: () => void;
}

export const GuardianSpotlight: React.FC<GuardianSpotlightProps> = ({ onStartGuardianClick }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Choose Destination',
      desc: 'Type where you are headed — home, metro station, gym, or a friend’s location.',
      detail: 'Calculates exact ETA based on live foot-traffic and route safety parameters.',
      badge: 'Destination Set',
    },
    {
      num: '02',
      title: 'Select Safety Circle',
      desc: 'Pick trusted friends or family members who will receive live progress updates.',
      detail: 'Contacts receive quiet notifications or live track links based on your preference.',
      badge: '2 Contacts Attached',
    },
    {
      num: '03',
      title: 'Automated Smart Check-ins',
      desc: 'Set custom check-in intervals (e.g. every 10 mins or upon arrival).',
      detail: 'If a check-in is missed, ShieldHER calmly escalates through your trusted circle.',
      badge: 'Check-in Active',
    },
    {
      num: '04',
      title: 'Active Guardian Monitoring',
      desc: 'Real-time route movement monitoring with contextual warning alerts.',
      detail: 'Automatically detects unusual delays or route deviations.',
      badge: 'Protected',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16 space-y-4">
          <EditorialLabel variant="plum" tilt="slight-left">
            GUARDIAN MODE
          </EditorialLabel>
          <EditorialHeading
            size="display"
            line1="your journey."
            line2Italic="monitored with"
            line3="loving care."
          />
          <p className="text-charcoal-800/80 font-medium text-lg leading-relaxed">
            Guardian Mode isn't an intrusive tracking tool. It's a reassuring digital companion that keeps your trusted circle informed and ready to help if anything unexpected happens.
          </p>
        </div>

        {/* INTERACTIVE WORKFLOW GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: STEP CHOOSER CARDS */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                onClick={() => setActiveStep(idx)}
                whileHover={{ x: 4 }}
                className={`p-6 rounded-3xl border transition-all cursor-pointer select-none ${
                  activeStep === idx
                    ? 'bg-plum-900 text-cream-50 border-plum-950 shadow-xl'
                    : 'bg-cream-card text-charcoal-900 border-plum-900/10 hover:border-plum-900/30 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-editorial-serif text-2xl italic ${
                        activeStep === idx ? 'text-blush-200' : 'text-plum-900'
                      }`}
                    >
                      {step.num}
                    </span>
                    <h3 className="font-sans font-extrabold text-lg tracking-tight">{step.title}</h3>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      activeStep === idx
                        ? 'bg-cream-50/15 text-cream-50'
                        : 'bg-plum-100 text-plum-900'
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>
                <p
                  className={`mt-2 font-medium text-sm leading-relaxed ${
                    activeStep === idx ? 'text-cream-50/80' : 'text-charcoal-800/70'
                  }`}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: INTERACTIVE GUARDIAN PREVIEW CARD */}
          <div className="lg:col-span-6">
            <div className="bg-cream-card p-8 sm:p-10 rounded-3xl sm:rounded-4xl border-2 border-plum-900/20 shadow-editorial relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blush-100/60 rounded-full blur-xl -z-10" />

              {/* CARD HEADER */}
              <div className="flex items-center justify-between border-b border-plum-900/10 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sage-500 animate-pulse" />
                    <span className="text-xs uppercase font-extrabold tracking-widest text-sage-700">
                      Active Journey
                    </span>
                  </div>
                  <h4 className="font-sans font-extrabold text-2xl text-plum-950 tracking-tight mt-1">
                    Home (Connaught Place)
                  </h4>
                </div>
                <div className="text-right">
                  <div className="font-editorial-serif text-3xl italic text-plum-900">18 min</div>
                  <div className="text-[11px] font-semibold text-charcoal-800/60">Estimated Arrival</div>
                </div>
              </div>

              {/* STEP DETAILED CONTENT */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-plum-50 p-5 rounded-2xl border border-plum-900/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-plum-900">
                    <span>STEP {steps[activeStep].num} DEMO STATE</span>
                    <span>100% On Route</span>
                  </div>
                  <p className="text-sm font-semibold text-plum-950">
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs uppercase font-bold tracking-widest text-charcoal-800/60">
                    Location Shared With
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-full bg-blush-100 border border-plum-900/10 text-xs font-bold text-plum-900">
                      Mom (Ananya)
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-blush-100 border border-plum-900/10 text-xs font-bold text-plum-900">
                      Riya Sen (Flatmate)
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div className="text-xs font-medium text-charcoal-800/70">
                    3 verified responders active along route
                  </div>
                  <ShieldButton
                    variant="primary"
                    size="md"
                    icon={<ChevronRight className="w-4 h-4" />}
                    onClick={onStartGuardianClick}
                  >
                    Try Live Guardian Mode
                  </ShieldButton>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
