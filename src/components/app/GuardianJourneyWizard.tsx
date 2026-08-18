'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Navigation, 
  MapPin, 
  Users, 
  Clock, 
  Check, 
  ArrowRight, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { MOCK_ROUTES, MOCK_SAFETY_CIRCLE } from '../../data/mockData';
import { RouteOption, SafetyContact } from '../../types/safety';
import { ShieldButton } from '../ui/ShieldButton';

interface GuardianJourneyWizardProps {
  onStartGuardian: (destination: string, route: RouteOption, contacts: SafetyContact[], frequency: number) => void;
  onCancel?: () => void;
}

export const GuardianJourneyWizard: React.FC<GuardianJourneyWizardProps> = ({
  onStartGuardian,
  onCancel,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [destination, setDestination] = useState('Home (Connaught Place Outer Circle)');
  const [selectedRoute, setSelectedRoute] = useState<RouteOption>(MOCK_ROUTES[0]);
  const [selectedContacts, setSelectedContacts] = useState<string[]>(['sc-1', 'sc-2']);
  const [checkInInterval, setCheckInInterval] = useState<number>(10);

  const toggleContact = (id: string) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(c => c !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const handleFinish = () => {
    const contacts = MOCK_SAFETY_CIRCLE.filter(c => selectedContacts.includes(c.id));
    onStartGuardian(destination, selectedRoute, contacts, checkInInterval);
  };

  return (
    <div className="bg-cream-card p-6 sm:p-10 rounded-3xl sm:rounded-4xl border border-plum-900/15 shadow-editorial max-w-3xl mx-auto space-y-8 select-none">
      
      {/* WIZARD HEADER & PROGRESS DOTS */}
      <div className="flex items-center justify-between border-b border-plum-900/10 pb-6">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-plum-600">
            GUARDIAN JOURNEY SETUP
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-plum-950 tracking-tight">
            {step === 1 && 'Where are you headed?'}
            {step === 2 && 'Select your Safety Circle'}
            {step === 3 && 'Check-in Preferences'}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center transition-colors ${
                step === s
                  ? 'bg-plum-900 text-cream-50'
                  : step > s
                  ? 'bg-sage-700 text-white'
                  : 'bg-plum-100 text-plum-900'
              }`}
            >
              {step > s ? '✓' : s}
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: DESTINATION & ROUTE OPTIONS */}
      {step === 1 && (
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold tracking-widest text-charcoal-800/70">
              Enter Destination
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-plum-800" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-cream-50 border border-plum-900/20 font-sans font-extrabold text-base text-plum-950 focus:outline-none focus:ring-2 focus:ring-plum-800"
                placeholder="Search address, metro, venue..."
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs uppercase font-bold tracking-widest text-charcoal-800/70">
              Select Safer Route Signal
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {MOCK_ROUTES.map((route) => {
                const isSelected = selectedRoute.id === route.id;
                return (
                  <div
                    key={route.id}
                    onClick={() => setSelectedRoute(route)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-plum-900 text-cream-50 border-plum-950 shadow-md'
                        : 'bg-cream-50 text-charcoal-900 border-plum-900/10 hover:border-plum-900/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-cream-50/20 text-cream-50' : 'bg-plum-100 text-plum-900'
                      }`}>
                        {route.title}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-blush-200" />}
                    </div>
                    <div className="font-editorial-serif text-2xl italic">{route.durationMinutes} min</div>
                    <div className="text-[11px] opacity-80 mt-1">{route.distanceKm} km • {route.safetyScore}% score</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
            {onCancel && (
              <ShieldButton variant="ghost" onClick={onCancel}>
                Cancel
              </ShieldButton>
            )}
            <ShieldButton variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />} onClick={() => setStep(2)}>
              Next: Select Safety Circle
            </ShieldButton>
          </div>
        </motion.div>
      )}

      {/* STEP 2: SAFETY CIRCLE CONTACT SELECTOR */}
      {step === 2 && (
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <p className="text-sm font-medium text-charcoal-800/80">
            Choose who among your trusted circle will receive quiet route updates during this trip.
          </p>

          <div className="space-y-3">
            {MOCK_SAFETY_CIRCLE.map((contact) => {
              const isSelected = selectedContacts.includes(contact.id);
              return (
                <div
                  key={contact.id}
                  onClick={() => toggleContact(contact.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-blush-100 border-plum-900 text-plum-950 shadow-sm'
                      : 'bg-cream-50 border-plum-900/10 text-charcoal-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full object-cover border border-plum-900/20" />
                    <div>
                      <h4 className="font-sans font-extrabold text-sm text-plum-950">{contact.name}</h4>
                      <p className="text-xs text-charcoal-800/70">{contact.relationship} • {contact.phone}</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                    isSelected ? 'bg-plum-900 border-plum-900 text-cream-50' : 'border-plum-900/30'
                  }`}>
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <ShieldButton variant="secondary" onClick={() => setStep(1)}>
              Back
            </ShieldButton>
            <ShieldButton variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />} onClick={() => setStep(3)}>
              Next: Check-in Settings
            </ShieldButton>
          </div>
        </motion.div>
      )}

      {/* STEP 3: CHECK-IN FREQUENCY */}
      {step === 3 && (
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <p className="text-sm font-medium text-charcoal-800/80">
            How often would you like ShieldHER to quietly confirm you're doing okay during your journey?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 10, label: 'Every 10 Mins', desc: 'Recommended for late-night walks' },
              { val: 15, label: 'Every 15 Mins', desc: 'Standard transit check-in' },
              { val: 0, label: 'On Arrival Only', desc: 'Alert circle only when ETA passes' },
            ].map((opt) => (
              <div
                key={opt.val}
                onClick={() => setCheckInInterval(opt.val)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer text-center ${
                  checkInInterval === opt.val
                    ? 'bg-plum-900 text-cream-50 border-plum-950 shadow-md'
                    : 'bg-cream-50 text-charcoal-900 border-plum-900/10'
                }`}
              >
                <Clock className={`w-6 h-6 mx-auto mb-2 ${checkInInterval === opt.val ? 'text-blush-200' : 'text-plum-800'}`} />
                <h4 className="font-sans font-extrabold text-base">{opt.label}</h4>
                <p className={`text-xs mt-1 ${checkInInterval === opt.val ? 'text-cream-50/80' : 'text-charcoal-800/60'}`}>{opt.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-sage-100 p-4 rounded-2xl border border-sage-500/20 text-xs font-semibold text-sage-800 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-sage-700 shrink-0" />
            <span>If a check-in is missed, your Safety Circle receives a location update & status prompt.</span>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <ShieldButton variant="secondary" onClick={() => setStep(2)}>
              Back
            </ShieldButton>
            <ShieldButton
              variant="sage"
              size="xl"
              icon={<Sparkles className="w-5 h-5" />}
              onClick={handleFinish}
            >
              Start Guardian Mode →
            </ShieldButton>
          </div>
        </motion.div>
      )}

    </div>
  );
};
