'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ShieldButton } from '../ui/ShieldButton';

interface RouteDeviationWarningProps {
  onConfirmOkay: () => void;
  onShowSafeRoute: () => void;
  onGetHelp: () => void;
}

export const RouteDeviationWarning: React.FC<RouteDeviationWarningProps> = ({
  onConfirmOkay,
  onShowSafeRoute,
  onGetHelp,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-amber-50 border-2 border-amber-500/40 p-6 rounded-3xl shadow-xl max-w-2xl mx-auto space-y-4 select-none"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-200 text-amber-900 shrink-0">
            <Navigation className="w-6 h-6 rotate-45" />
          </div>
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-900">
              CONTEXTUAL ROUTE ALERT
            </span>
            <h3 className="font-sans font-extrabold text-xl text-amber-950 tracking-tight">
              You've moved away from your planned route.
            </h3>
            <p className="text-xs text-amber-900/80 font-semibold mt-0.5">
              ShieldHER detected a 150m departure near 12th Cross Street. Everything okay?
            </p>
          </div>
        </div>
      </div>

      {/* THREE CLEAR CONTEXTUAL ACTIONS */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <ShieldButton
          variant="sage"
          size="md"
          icon={<CheckCircle2 className="w-4 h-4" />}
          onClick={onConfirmOkay}
        >
          I'm okay
        </ShieldButton>

        <ShieldButton
          variant="primary"
          size="md"
          icon={<Navigation className="w-4 h-4" />}
          onClick={onShowSafeRoute}
        >
          Show safe route
        </ShieldButton>

        <ShieldButton
          variant="secondary"
          size="md"
          className="border-emergency-500/40 text-emergency-700 hover:bg-emergency-50"
          icon={<ShieldAlert className="w-4 h-4 text-emergency-600" />}
          onClick={onGetHelp}
        >
          Get help
        </ShieldButton>
      </div>
    </motion.div>
  );
};
