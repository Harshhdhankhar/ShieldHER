'use client';

import React from 'react';
import { clsx } from 'clsx';
import { ShieldCheck, Navigation, AlertTriangle, AlertOctagon, HeartHandshake } from 'lucide-react';

interface StatusPillProps {
  status: 'safe' | 'journey_active' | 'checkin_pending' | 'deviated' | 'emergency';
  label?: string;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({ status, label, className }) => {
  const configs = {
    safe: {
      bg: 'bg-sage-100 border-sage-500/30 text-sage-800',
      dot: 'bg-sage-500',
      icon: ShieldCheck,
      defaultLabel: 'Network Connected & Safe',
    },
    journey_active: {
      bg: 'bg-plum-100 border-plum-900/20 text-plum-900',
      dot: 'bg-plum-600 animate-pulse',
      icon: Navigation,
      defaultLabel: 'Guardian Mode Active',
    },
    checkin_pending: {
      bg: 'bg-amber-100 border-amber-500/30 text-amber-900',
      dot: 'bg-amber-500 animate-ping',
      icon: HeartHandshake,
      defaultLabel: 'Check-in Requested',
    },
    deviated: {
      bg: 'bg-orange-100 border-orange-500/30 text-orange-900',
      dot: 'bg-orange-600 animate-pulse',
      icon: AlertTriangle,
      defaultLabel: 'Route Deviation Warning',
    },
    emergency: {
      bg: 'bg-emergency-100 border-emergency-500 text-emergency-700 font-bold',
      dot: 'bg-emergency-600 animate-ping',
      icon: AlertOctagon,
      defaultLabel: 'ACTIVE SOS EMERGENCY',
    },
  };

  const current = configs[status];
  const Icon = current.icon;

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide transition-all shadow-xs',
        current.bg,
        className
      )}
    >
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className={clsx('absolute inline-flex h-full w-full rounded-full opacity-75', current.dot)} />
        <span className={clsx('relative inline-flex rounded-full h-2 w-2', current.dot)} />
      </span>
      <Icon className="w-3.5 h-3.5" />
      <span>{label || current.defaultLabel}</span>
    </div>
  );
};
