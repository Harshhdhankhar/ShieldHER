'use client';

import React, { useRef } from 'react';

/* Restrained magnetic wrapper: pulls child a few px toward the cursor, returns smoothly */
export const Magnetic: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const tx = Math.max(-5, Math.min(5, dx * 0.16));
    const ty = Math.max(-4, Math.min(4, dy * 0.16));
    el.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = '';
  };

  return (
    <div ref={ref} className={`magnetic ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  );
};