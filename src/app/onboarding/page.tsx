'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, User, Users, Bell, Check, Sparkles } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { ShieldButton } from '@/components/ui/ShieldButton';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { EditorialLabel } from '@/components/ui/EditorialLabel';

export default function OnboardingPage() {
  const { user, completeOnboarding } = useAuth();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [displayName, setDisplayName] = useState(user?.name || 'Harsh');
  const [phone, setPhone] = useState('+91 98765 43210');
  
  // Circle State
  const [addedContacts, setAddedContacts] = useState([
    { name: 'Ananya (Mom)', relation: 'Family', phone: '+91 98765 43210' },
    { name: 'Riya Sen', relation: 'Flatmate', phone: '+91 98111 22334' },
  ]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactRelation, setNewContactRelation] = useState('Friend');

  // Preferences State
  const [preferences, setPreferences] = useState({
    journeyCheckins: true,
    routeDeviationAlerts: true,
    circleNotifications: true,
    communityParticipation: true,
  });

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContactName) return;
    setAddedContacts([...addedContacts, { name: newContactName, relation: newContactRelation, phone: '+91 99000 11223' }]);
    setNewContactName('');
  };

  const handleFinish = () => {
    completeOnboarding({
      name: displayName,
      phone,
      safetyCircleCount: addedContacts.length,
      preferences,
    });
  };

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col justify-between p-4 sm:p-8 select-none selection:bg-blush-200">
      
      {/* ONBOARDING PROGRESS HEADER */}
      <header className="max-w-3xl mx-auto w-full flex items-center justify-between py-4 border-b border-plum-900/10">
        <div className="font-sans text-xl font-extrabold text-plum-950 tracking-tight">
          shield<span className="font-editorial-serif italic font-normal text-plum-900">HER.</span>
        </div>

        {/* Step indicator pills */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-300 ${
                step === s
                  ? 'w-8 bg-plum-900'
                  : step > s
                  ? 'w-4 bg-sage-700'
                  : 'w-4 bg-plum-900/15'
              }`}
            />
          ))}
        </div>
      </header>

      {/* MAIN STEP CARDS CONTAINER */}
      <main className="flex-1 max-w-2xl mx-auto w-full py-12 flex items-center justify-center">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: NAME & PROFILE */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-8"
            >
              <div className="space-y-3">
                <EditorialLabel variant="plum" tilt="slight-left">
                  STEP 1 OF 4
                </EditorialLabel>
                <EditorialHeading
                  size="hero"
                  line1="what should"
                  line2Italic="we call"
                  line3="you?"
                />
                <p className="text-charcoal-800/80 font-medium text-base">
                  Let's personalize your ShieldHER safety profile.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-2xl bg-cream-card border border-plum-900/20 font-sans font-extrabold text-lg text-plum-950 focus:outline-none focus:ring-2 focus:ring-plum-800 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70 mb-1.5">
                    Contact Phone Number (For Emergency Alerts)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-4 rounded-2xl bg-cream-card border border-plum-900/20 font-sans font-extrabold text-lg text-plum-950 focus:outline-none focus:ring-2 focus:ring-plum-800 shadow-xs"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end">
                <ShieldButton
                  variant="primary"
                  size="xl"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => setStep(2)}
                >
                  Continue →
                </ShieldButton>
              </div>
            </motion.div>
          )}

          {/* STEP 2: SAFETY CIRCLE */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-8"
            >
              <div className="space-y-3">
                <EditorialLabel variant="plum" tilt="slight-left">
                  STEP 2 OF 4
                </EditorialLabel>
                <EditorialHeading
                  size="hero"
                  line1="who's got"
                  line2Italic="your"
                  line3="back?"
                />
                <p className="text-charcoal-800/80 font-medium text-base leading-relaxed">
                  Add trusted contacts who can receive quiet journey progress updates or emergency alerts.
                </p>
              </div>

              {/* Added Contacts */}
              <div className="space-y-3">
                {addedContacts.map((c, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-cream-card border border-plum-900/15 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blush-100 text-plum-900 font-extrabold flex items-center justify-center text-sm">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-sans font-extrabold text-sm text-plum-950">{c.name}</h4>
                        <p className="text-xs text-charcoal-800/70 font-semibold">{c.relation} • {c.phone}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sage-800 bg-sage-100 px-2.5 py-1 rounded-full">
                      ✓ Added
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Add Form */}
              <form onSubmit={handleAddContact} className="flex gap-2">
                <input
                  type="text"
                  value={newContactName}
                  onChange={(e) => setNewContactName(e.target.value)}
                  placeholder="Add friend or family member..."
                  className="flex-1 px-4 py-3 rounded-2xl bg-cream-card border border-plum-900/20 text-xs font-semibold text-plum-950 focus:outline-none focus:ring-2 focus:ring-plum-800 shadow-xs"
                />
                <ShieldButton variant="secondary" size="md" type="submit">
                  + Add Contact
                </ShieldButton>
              </form>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="text-xs font-bold text-charcoal-800/60 hover:text-plum-900 transition-colors"
                >
                  I'll do this later
                </button>

                <ShieldButton
                  variant="primary"
                  size="xl"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => setStep(3)}
                >
                  Continue →
                </ShieldButton>
              </div>
            </motion.div>
          )}

          {/* STEP 3: PREFERENCES & PERMISSIONS */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-8"
            >
              <div className="space-y-3">
                <EditorialLabel variant="plum" tilt="slight-left">
                  STEP 3 OF 4
                </EditorialLabel>
                <EditorialHeading
                  size="hero"
                  line1="how should"
                  line2Italic="ShieldHER"
                  line3="look out for you?"
                />
                <p className="text-charcoal-800/80 font-medium text-base">
                  Choose how and when ShieldHER assists your daily movement.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    key: 'journeyCheckins',
                    title: 'Automated Journey Check-ins',
                    desc: 'Prompt calm safety check-ins at set intervals during active Guardian Mode.',
                  },
                  {
                    key: 'routeDeviationAlerts',
                    title: 'Route Deviation Warnings',
                    desc: 'Contextual alert if your location departs significantly from your planned route.',
                  },
                  {
                    key: 'circleNotifications',
                    title: 'Safety Circle Notifications',
                    desc: 'Allow your chosen trusted contacts to receive quiet trip updates.',
                  },
                  {
                    key: 'communityParticipation',
                    title: 'Privacy-First Community Radius',
                    desc: 'Contribute to anonymous member density count in your local area (exact GPS protected).',
                  },
                ].map((pref) => {
                  const val = (preferences as any)[pref.key];
                  return (
                    <div
                      key={pref.key}
                      onClick={() =>
                        setPreferences({ ...preferences, [pref.key]: !val })
                      }
                      className={`p-5 rounded-3xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        val
                          ? 'bg-cream-card border-plum-900 shadow-md ring-1 ring-plum-900/20'
                          : 'bg-cream-card/60 border-plum-900/10 opacity-70'
                      }`}
                    >
                      <div>
                        <h4 className="font-sans font-extrabold text-base text-plum-950">
                          {pref.title}
                        </h4>
                        <p className="text-xs font-medium text-charcoal-800/70 mt-1 leading-relaxed">
                          {pref.desc}
                        </p>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                          val
                            ? 'bg-plum-900 border-plum-900 text-cream-50'
                            : 'border-plum-900/30'
                        }`}
                      >
                        {val && <Check className="w-4 h-4" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <ShieldButton variant="secondary" onClick={() => setStep(2)}>
                  Back
                </ShieldButton>

                <ShieldButton
                  variant="primary"
                  size="xl"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => setStep(4)}
                >
                  Continue →
                </ShieldButton>
              </div>
            </motion.div>
          )}

          {/* STEP 4: ALL SET TRANSITION */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full text-center space-y-8 py-6"
            >
              <div className="w-20 h-20 rounded-full bg-blush-100 border-2 border-plum-900/20 mx-auto flex items-center justify-center text-plum-900 shadow-xl">
                <Sparkles className="w-10 h-10 animate-pulse" />
              </div>

              <div className="space-y-3">
                <EditorialLabel variant="sage" tilt="slight-left" className="mx-auto">
                  NETWORK ACTIVATED
                </EditorialLabel>
                <EditorialHeading
                  size="hero"
                  line1="you're"
                  line2Italic="all"
                  line3="set."
                  align="center"
                />
                <p className="text-charcoal-800/80 font-medium text-lg max-w-md mx-auto leading-relaxed">
                  Your safety network is ready. Welcome to ShieldHER, <strong className="font-extrabold text-plum-950">{displayName}</strong>.
                </p>
              </div>

              <div className="bg-plum-900 text-cream-50 p-6 rounded-3xl border border-plum-950 max-w-md mx-auto space-y-2 shadow-2xl">
                <div className="flex items-center justify-center gap-2 font-extrabold text-sm text-blush-200">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Safety Umbrella Standing By</span>
                </div>
                <p className="text-xs text-cream-50/80 font-medium">
                  {addedContacts.length} trusted contacts connected • Safer route signals live • Emergency SOS active
                </p>
              </div>

              <div className="pt-4">
                <ShieldButton
                  variant="sage"
                  size="xl"
                  className="w-full max-w-md"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={handleFinish}
                >
                  Enter ShieldHER →
                </ShieldButton>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="max-w-3xl mx-auto w-full py-4 text-center text-xs font-semibold text-charcoal-800/50">
        ShieldHER Creative Studio • Privacy Protected
      </footer>
    </div>
  );
}
