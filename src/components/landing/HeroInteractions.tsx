'use client';

import React, { useEffect, useRef } from 'react';

/*
 * ShieldHER hero interaction system. One lightweight pointer pass (rAF
 * throttled, direct DOM, zero React state per move) that drives:
 *
 *   - the journey cursor trail: tiny burgundy dots only, ~6 active, fade ~300ms
 *   - hover reveals: temporary notes that appear near the cursor then vanish
 *   - the magnetic star that leans toward the cursor near ALWAYS
 *   - "connected," / ALONE. period proximity (draw + ring)
 *   - journey route dots that brighten when the cursor crosses them
 *
 * The static screenshot stays clean: everything here is temporary or gated on
 * cursor proximity. Disabled for coarse pointers + reduced motion.
 */

const DOT_POOL = 6;

export const HeroInteractions: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* --- pooled trail dots --- */
    const dots: HTMLDivElement[] = [];
    for (let i = 0; i < DOT_POOL; i++) {
      const d = document.createElement('div');
      d.className = 'trail-dot';
      overlay.appendChild(d);
      dots.push(d);
    }
    let dotIdx = 0;

    const fadeDot = (el: HTMLDivElement, dur: number) => {
      el.style.transition = 'none';
      el.style.visibility = 'visible';
      el.style.opacity = '0.3';
      requestAnimationFrame(() => {
        el.style.transition = `opacity ${dur}ms ease-out`;
        el.style.opacity = '0';
      });
      window.setTimeout(() => {
        el.style.visibility = 'hidden';
        el.style.transition = 'none';
      }, dur + 40);
    };

    const section = overlay.closest('section');
    const notes = Array.from(section?.querySelectorAll<HTMLElement>('[data-reveal]') ?? []);
    const connected = section?.querySelector<HTMLElement>('[data-word="connected"]') ?? null;
    const alone = section?.querySelector<HTMLElement>('[data-word="alone"]') ?? null;
    const routeZone = section?.querySelector<HTMLElement>('[data-zone="route"]') ?? null;
    const magnet = section?.querySelector<HTMLElement>('.magnetic-star') ?? null;

    let magnetActive = false;
    let raf = 0;
    let pending = false;
    let lastX = 0;
    let lastY = 0;

    const nearOf = (el: HTMLElement | null, radius: number) => {
      if (!el) return false;
      const b = el.getBoundingClientRect();
      return Math.hypot(lastX - (b.left + b.width / 2), lastY - (b.top + b.height / 2)) < radius;
    };

    const flush = () => {
      pending = false;
      const r = overlay.getBoundingClientRect();
      if (lastX < r.left || lastX > r.right || lastY < r.top || lastY > r.bottom) return;

      /* trail dot */
      const el = dots[dotIdx++ % DOT_POOL];
      const s = 2 + Math.random() * 1.5;
      el.style.width = `${s}px`;
      el.style.height = `${s}px`;
      el.style.transform = `translate3d(${lastX - s / 2}px, ${lastY - s / 2}px, 0)`;
      fadeDot(el, 260 + Math.random() * 120);

      /* connected / alone / route proximity */
      const connectedNear = nearOf(connected, 120);
      if (connected) connected.classList.toggle('near', connectedNear);
      if (alone) alone.classList.toggle('near', nearOf(alone, 120));
      if (routeZone) routeZone.classList.toggle('near', connectedNear || nearOf(routeZone, 180));

      /* hover reveals — appear near the cursor, vanish on leave */
      for (const n of notes) {
        n.classList.toggle('active', nearOf(n, 150));
      }

      /* magnetic star — leans a few px toward the cursor near ALWAYS */
      if (magnet && !reduceMotion) {
        const b = magnet.getBoundingClientRect();
        const cx = b.left + b.width / 2;
        const cy = b.top + b.height / 2;
        const dx = lastX - cx;
        const dy = lastY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < 160 && dist > 0.001) {
          const off = 4 * (dist / 160);
          magnet.style.transform = `translate(${(dx / dist) * off}px, ${(dy / dist) * off}px)`;
          magnetActive = true;
        } else if (magnetActive) {
          magnet.style.transform = '';
          magnetActive = false;
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(flush);
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
      overlay.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
    />
  );
};