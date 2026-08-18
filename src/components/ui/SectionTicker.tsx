'use client';

import React from 'react';

interface SectionTickerProps {
  items?: string[];
  speed?: 'normal' | 'slow' | 'fast';
  className?: string;
  theme?: 'dark' | 'plum' | 'blush';
}

const DEFAULT_ITEMS = [
  'SAFE JOURNEYS',
  'REAL PEOPLE',
  'YOUR CIRCLE',
  'NEARBY HELP',
  'SAFE PLACES',
  '100% PRIVACY FIRST',
  'VERIFIED RESPONDERS',
  'SMART CHECK-INS',
];

export const SectionTicker: React.FC<SectionTickerProps> = ({
  items = DEFAULT_ITEMS,
  className,
  theme = 'plum',
}) => {
  const themeStyles = {
    plum: 'bg-plum-900 text-cream-50 border-y border-plum-950/20',
    dark: 'bg-charcoal-900 text-cream-50 border-y border-charcoal-800',
    blush: 'bg-blush-100 text-plum-900 border-y border-plum-900/10',
  };

  const tickerList = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden py-3.5 select-none relative ${themeStyles[theme]} ${className || ''}`}>
      <div className="animate-ticker">
        {tickerList.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4 font-sans text-xs sm:text-sm tracking-widest font-extrabold whitespace-nowrap">
            <span>{item}</span>
            <span className="text-plum-300 font-serif italic text-base">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
