'use client';

import React from 'react';
import { clsx } from 'clsx';

interface EditorialLabelProps {
  children: React.ReactNode;
  variant?: 'plum' | 'blush' | 'sage' | 'lavender' | 'dark' | 'outline';
  tilt?: 'none' | 'left' | 'right' | 'slight-left' | 'slight-right';
  className?: string;
  icon?: React.ReactNode;
}

export const EditorialLabel: React.FC<EditorialLabelProps> = ({
  children,
  variant = 'blush',
  tilt = 'none',
  className,
  icon,
}) => {
  const variantStyles = {
    plum: 'bg-plum-900 text-cream-50 border border-plum-950/20',
    blush: 'bg-blush-100 text-plum-950 border border-plum-900/10 shadow-sm',
    sage: 'bg-sage-100 text-sage-800 border border-sage-500/20',
    lavender: 'bg-lavender-100 text-plum-900 border border-plum-900/15',
    dark: 'bg-charcoal-900 text-cream-50 border border-charcoal-800',
    outline: 'bg-cream-50/90 text-charcoal-900 border-2 border-dashed border-plum-900/30',
  };

  const tiltStyles = {
    none: 'rotate-0',
    left: '-rotate-3',
    right: 'rotate-3',
    'slight-left': '-rotate-1',
    'slight-right': 'rotate-1',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide rounded-full select-none transition-transform duration-200 hover:scale-105',
        variantStyles[variant],
        tiltStyles[tilt],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
