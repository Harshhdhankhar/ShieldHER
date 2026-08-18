'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { BottomSheet } from '../ui/BottomSheet';
import { ShieldButton } from '../ui/ShieldButton';

interface SmartCheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSafe: () => void;
  onRequestHelp: () => void;
}

export const SmartCheckInModal: React.FC<SmartCheckInModalProps> = ({
  isOpen,
  onClose,
  onConfirmSafe,
  onRequestHelp,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(45);
  const [showEscalationSim, setShowEscalationSim] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSecondsRemaining(45);
      setShowEscalationSim(false);
      return;
    }
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          setShowEscalationSim(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} showHandle={true}>
      <div className="space-y-6 text-center py-2 select-none">
        
        {/* TOP CALM ICON */}
        <div className="mx-auto w-16 h-16 rounded-full bg-blush-100 border border-plum-900/15 flex items-center justify-center text-plum-900 shadow-sm">
          <HeartHandshake className="w-8 h-8" />
        </div>

        {/* CALM HEADING & TIMER */}
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-plum-600">
            GUARDIAN CHECK-IN
          </span>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl italic text-plum-950 mt-1">
            everything okay?
          </h2>
          <p className="text-charcoal-800/80 font-medium text-sm mt-2 max-w-sm mx-auto">
            Just checking in on your journey to <strong className="font-extrabold text-plum-900">Home (Connaught Place)</strong>.
          </p>
        </div>

        {/* TIMER BAR */}
        {!showEscalationSim && (
          <div className="bg-plum-50 p-4 rounded-2xl border border-plum-900/10 max-w-xs mx-auto space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-plum-900">
              <span>Auto Escalation Timer</span>
              <span className="font-editorial-serif text-lg italic text-plum-800">{secondsRemaining}s</span>
            </div>
            <div className="w-full h-2 rounded-full bg-plum-200 overflow-hidden">
              <div
                className="h-full bg-plum-900 transition-all duration-1000 ease-linear"
                style={{ width: `${(secondsRemaining / 45) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* PRIMARY ACTIONS */}
        {!showEscalationSim ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <ShieldButton
              variant="sage"
              size="lg"
              className="w-full sm:w-auto"
              icon={<CheckCircle2 className="w-5 h-5" />}
              onClick={() => {
                onConfirmSafe();
                onClose();
              }}
            >
              Yep, I'm good
            </ShieldButton>

            <ShieldButton
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto border-emergency-500/30 text-emergency-700"
              icon={<AlertTriangle className="w-5 h-5 text-emergency-600" />}
              onClick={() => {
                onRequestHelp();
                onClose();
              }}
            >
              I need help
            </ShieldButton>
          </div>
        ) : (
          /* ESCALATION SIMULATION PREVIEW IF TIMER RUNS OUT */
          <div className="bg-amber-50 p-5 rounded-3xl border border-amber-500/30 text-left space-y-4">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-800" />
              <span>Check-in Missed — Escalation Sequence Initiated</span>
            </div>

            <div className="space-y-2 text-xs font-medium text-amber-950">
              <div className="flex items-center gap-2 text-sage-800 font-bold">
                <CheckCircle2 className="w-4 h-4 text-sage-700" />
                <span>1. Safety Circle notified (Mom & Riya Sen)</span>
              </div>
              <div className="flex items-center gap-2 text-sage-800 font-bold">
                <CheckCircle2 className="w-4 h-4 text-sage-700" />
                <span>2. Nearby verified responders alerted (3 nearby)</span>
              </div>
              <div className="flex items-center gap-2 text-amber-900">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
                <span>3. Emergency dispatch standing by</span>
              </div>
            </div>

            <ShieldButton
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                onConfirmSafe();
                onClose();
              }}
            >
              Cancel Escalation: I'm Safe
            </ShieldButton>
          </div>
        )}

      </div>
    </BottomSheet>
  );
};
