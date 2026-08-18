'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertOctagon, 
  PhoneCall, 
  ShieldCheck, 
  MapPin, 
  Users, 
  Lock, 
  CheckCircle2,
  XCircle,
  FileText
} from 'lucide-react';
import { ShieldButton } from '../ui/ShieldButton';

interface SOSOverlayProps {
  isOpen: boolean;
  onCancelSOS: () => void;
  onViewEvidence: () => void;
}

export const SOSOverlay: React.FC<SOSOverlayProps> = ({
  isOpen,
  onCancelSOS,
  onViewEvidence,
}) => {
  const [cancelHoldProgress, setCancelHoldProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  // Status steps sequence during active emergency
  const statusSteps = [
    { title: 'Safety Circle notified', detail: 'Mom & Riya Sen received alert & live GPS trace', done: true },
    { title: 'Location sharing active', detail: 'Encrypted high-precision tracking enabled', done: true },
    { title: 'Nearby responders contacted', detail: '3 verified responders in 500m area alerted', done: stepIndex >= 1 },
    { title: 'Evidence protection active', detail: 'Ambient audio & location timeline vaulted securely', done: stepIndex >= 2 },
  ];

  // Auto advance status steps over time
  useEffect(() => {
    if (!isOpen) {
      setStepIndex(0);
      return;
    }
    const t1 = setTimeout(() => setStepIndex(1), 1500);
    const t2 = setTimeout(() => setStepIndex(2), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isOpen]);

  // Handle hold-to-cancel interaction (to prevent accidental cancellation)
  useEffect(() => {
    let interval: any;
    if (isHolding) {
      interval = setInterval(() => {
        setCancelHoldProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onCancelSOS();
            return 0;
          }
          return prev + 10;
        });
      }, 100);
    } else {
      setCancelHoldProgress(0);
    }
    return () => clearInterval(interval);
  }, [isHolding, onCancelSOS]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-plum-950 text-cream-50 overflow-y-auto flex flex-col justify-between p-6 sm:p-10 select-none"
      >
        {/* TOP STATUS HEADER */}
        <div className="flex items-center justify-between border-b border-cream-50/15 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emergency-600 text-white animate-pulse">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-emergency-500">
                ACTIVE EMERGENCY STATE
              </span>
              <h2 className="font-sans font-extrabold text-2xl text-cream-50 tracking-tight">
                Help is being contacted.
              </h2>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-cream-50/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-cream-50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live Encrypted Dispatch</span>
          </div>
        </div>

        {/* MIDDLE CONTENT GRID */}
        <div className="my-8 max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: DISPATCH PROGRESS STEPS */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-blush-200 mb-2">
              Emergency Protocol Status
            </h3>
            
            {statusSteps.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className={`p-4 rounded-2xl border transition-all ${
                  st.done
                    ? 'bg-cream-50/10 border-cream-50/20 text-cream-50'
                    : 'bg-cream-50/5 border-cream-50/5 text-cream-50/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1 rounded-full ${st.done ? 'bg-emerald-500 text-plum-950' : 'bg-cream-50/20 text-cream-50/40'}`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-base leading-tight">{st.title}</h4>
                    <p className="text-xs font-medium opacity-80 mt-0.5">{st.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Evidence Vault Button */}
            <div className="pt-2">
              <button
                onClick={onViewEvidence}
                className="inline-flex items-center gap-2 text-xs font-bold text-blush-200 hover:text-cream-50 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View Live Evidence Vault Logs</span>
              </button>
            </div>
          </div>

          {/* RIGHT: DIRECT EMERGENCY ACTION CALLOUT */}
          <div className="md:col-span-5 bg-emergency-600 text-white p-6 sm:p-8 rounded-3xl border border-emergency-500 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest font-extrabold text-cream-50/80 mb-1">
                Official Response
              </div>
              <h3 className="font-sans font-extrabold text-2xl tracking-tight mb-2">
                Call Emergency Services Now
              </h3>
              <p className="text-xs text-cream-50/90 font-medium leading-relaxed">
                Connect directly with national emergency dispatch (112). Your current location coordinates are ready to share.
              </p>
            </div>

            <a
              href="tel:112"
              className="w-full py-4 px-6 rounded-2xl bg-white text-emergency-700 font-extrabold text-center text-lg flex items-center justify-center gap-3 hover:bg-cream-100 transition-colors shadow-lg"
            >
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <span>Call 112 Directly</span>
            </a>
          </div>

        </div>

        {/* BOTTOM CANCEL CONFIRMATION BAR */}
        <div className="border-t border-cream-50/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto w-full">
          <div className="text-xs text-cream-50/70 font-medium text-center sm:text-left">
            Need to cancel? Press and hold the button to confirm you are safe.
          </div>

          {/* Hold-to-Cancel Button */}
          <div className="relative">
            <button
              onMouseDown={() => setIsHolding(true)}
              onMouseUp={() => setIsHolding(false)}
              onMouseLeave={() => setIsHolding(false)}
              onTouchStart={() => setIsHolding(true)}
              onTouchEnd={() => setIsHolding(false)}
              className="relative overflow-hidden px-8 py-3.5 rounded-full bg-cream-50/15 border border-cream-50/30 text-cream-50 font-extrabold text-sm hover:bg-cream-50/25 transition-all select-none cursor-pointer"
            >
              {/* Progress bar background fill */}
              <div
                className="absolute inset-0 bg-sage-600 transition-all duration-100 ease-linear"
                style={{ width: `${cancelHoldProgress}%` }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                <span>{isHolding ? `Hold to Confirm (${cancelHoldProgress}%)` : "Press & Hold: I'm Safe"}</span>
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
