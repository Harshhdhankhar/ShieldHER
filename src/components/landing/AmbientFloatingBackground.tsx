'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AmbientFloatingBackground: React.FC = () => {
  const reduce = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reduce]);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* =========================================================================
          1. MODERN INTERACTIVE CURSOR SPOTLIGHT GLOW
          ========================================================================= */}
      {!reduce && (
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full mix-blend-multiply opacity-25 blur-3xl"
          animate={{
            x: mousePos.x,
            y: mousePos.y,
          }}
          transition={{
            type: 'spring',
            damping: 45,
            stiffness: 120,
            mass: 0.8,
          }}
          style={{
            background: 'radial-gradient(circle, rgba(243, 169, 188, 0.6) 0%, rgba(244, 229, 140, 0.4) 50%, transparent 75%)',
          }}
        />
      )}

      {/* =========================================================================
          2. ORGANIC FLOATING AURA BLOBS (Modern Fluid Gradients)
          ========================================================================= */}
      {/* Blob A: Top Left Blush Pink Aura */}
      <motion.div
        className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-30 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, #F3A9BC 0%, rgba(243, 169, 188, 0.3) 60%, transparent 80%)',
        }}
        animate={
          reduce
            ? {}
            : {
                x: [0, 40, -30, 0],
                y: [0, 50, -20, 0],
                scale: [1, 1.12, 0.95, 1],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'easeInOut',
        }}
      />

      {/* Blob B: Center Right Butter Yellow Aura */}
      <motion.div
        className="absolute top-[25%] -right-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-25 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, #F4E58C 0%, rgba(244, 229, 140, 0.3) 60%, transparent 80%)',
        }}
        animate={
          reduce
            ? {}
            : {
                x: [0, -50, 20, 0],
                y: [0, -40, 50, 0],
                scale: [1, 1.08, 0.92, 1],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: 'easeInOut',
        }}
      />

      {/* Blob C: Bottom Left Powder Blue Aura */}
      <motion.div
        className="absolute -bottom-32 left-[15%] w-[460px] h-[460px] rounded-full blur-3xl opacity-25 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, #C9DFEA 0%, rgba(201, 223, 234, 0.3) 60%, transparent 80%)',
        }}
        animate={
          reduce
            ? {}
            : {
                x: [0, 60, -40, 0],
                y: [0, -30, 40, 0],
                scale: [1, 1.15, 0.9, 1],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'easeInOut',
        }}
      />

      {/* Blob D: Deep Berry Accent Pulse */}
      <motion.div
        className="absolute top-[55%] left-[45%] w-[360px] h-[360px] rounded-full blur-3xl opacity-15 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, #7A2948 0%, rgba(182, 58, 91, 0.3) 50%, transparent 75%)',
        }}
        animate={
          reduce
            ? {}
            : {
                scale: [0.85, 1.2, 0.85],
                opacity: [0.1, 0.22, 0.1],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'easeInOut',
        }}
      />

      {/* =========================================================================
          3. FLOATING MICRO DOODLES, SPARKLES & CUTE PARTICLES
          ========================================================================= */}
      {/* Floating Sparkle 1: Top Center-Left */}
      <motion.div
        className="absolute top-[12%] left-[24%] text-[#7A2948] opacity-50 text-xl font-serif"
        animate={
          reduce
            ? {}
            : {
                y: [0, -14, 0],
                rotate: [0, 25, -20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }
        }
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      >
        ✧
      </motion.div>

      {/* Floating Sparkle 2: Top Right */}
      <motion.div
        className="absolute top-[18%] right-[22%] text-[#B63A5B] opacity-45 text-sm font-serif"
        animate={
          reduce
            ? {}
            : {
                y: [0, 16, 0],
                rotate: [0, -30, 20, 0],
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.75, 0.3],
              }
        }
        transition={{ repeat: Infinity, duration: 7.5, delay: 1, ease: 'easeInOut' }}
      >
        ✦
      </motion.div>

      {/* Floating Mini Heart 1: Left */}
      <motion.div
        className="absolute top-[38%] left-[14%] text-[#F3A9BC] opacity-60 text-lg font-editorial-serif"
        animate={
          reduce
            ? {}
            : {
                y: [0, -18, 0],
                x: [0, 10, 0],
                rotate: [-8, 12, -8],
              }
        }
        transition={{ repeat: Infinity, duration: 8, delay: 0.5, ease: 'easeInOut' }}
      >
        ♡
      </motion.div>

      {/* Floating Mini Heart 2: Lower Right */}
      <motion.div
        className="absolute bottom-[28%] right-[16%] text-[#7A2948] opacity-45 text-base font-editorial-serif"
        animate={
          reduce
            ? {}
            : {
                y: [0, 20, 0],
                x: [0, -8, 0],
                rotate: [10, -15, 10],
              }
        }
        transition={{ repeat: Infinity, duration: 9, delay: 2, ease: 'easeInOut' }}
      >
        ♡
      </motion.div>

      {/* Floating Starburst: Bottom Left */}
      <motion.div
        className="absolute bottom-[18%] left-[28%] text-[#7A2948] opacity-40 text-xs font-mono"
        animate={
          reduce
            ? {}
            : {
                rotate: [0, 360],
                scale: [0.9, 1.15, 0.9],
              }
        }
        transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
      >
        ★
      </motion.div>

      {/* Floating Cute Sticker: Cherry 🍒 */}
      <motion.div
        className="absolute top-[62%] left-[8%] text-base filter drop-shadow-xs opacity-70"
        animate={
          reduce
            ? {}
            : {
                y: [0, -12, 0],
                rotate: [-12, 8, -12],
              }
        }
        transition={{ repeat: Infinity, duration: 8.5, ease: 'easeInOut' }}
      >
        🍒
      </motion.div>

      {/* Floating Cute Sticker: Strawberry 🍓 */}
      <motion.div
        className="absolute top-[72%] right-[12%] text-base filter drop-shadow-xs opacity-70"
        animate={
          reduce
            ? {}
            : {
                y: [0, 14, 0],
                rotate: [15, -10, 15],
              }
        }
        transition={{ repeat: Infinity, duration: 9.5, delay: 1.5, ease: 'easeInOut' }}
      >
        🍓
      </motion.div>

      {/* Floating Cute Sticker: Daisy 🌼 */}
      <motion.div
        className="absolute top-[15%] left-[42%] text-sm filter drop-shadow-xs opacity-60"
        animate={
          reduce
            ? {}
            : {
                rotate: [0, 180, 360],
                y: [0, -8, 0],
              }
        }
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        🌼
      </motion.div>

      {/* =========================================================================
          4. SUBTLE RADAR SAFETY BEACON RIPPLES (Live Community Signals)
          ========================================================================= */}
      <div className="absolute top-[45%] right-[24%] pointer-events-none">
        <motion.div
          className="absolute -top-12 -left-12 w-24 h-24 rounded-full border border-[#F3A9BC]/40"
          animate={
            reduce
              ? {}
              : {
                  scale: [1, 2.8, 3.8],
                  opacity: [0.6, 0.2, 0],
                }
          }
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute -top-12 -left-12 w-24 h-24 rounded-full border border-[#F4E58C]/40"
          animate={
            reduce
              ? {}
              : {
                  scale: [1, 2.8, 3.8],
                  opacity: [0.6, 0.2, 0],
                }
          }
          transition={{ repeat: Infinity, duration: 4.5, delay: 1.5, ease: 'easeOut' }}
        />
      </div>

      <div className="absolute bottom-[35%] left-[22%] pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 rounded-full border border-[#D6E8DC]/50"
          animate={
            reduce
              ? {}
              : {
                  scale: [1, 2.6, 3.6],
                  opacity: [0.5, 0.15, 0],
                }
          }
          transition={{ repeat: Infinity, duration: 5, delay: 0.8, ease: 'easeOut' }}
        />
      </div>

    </div>
  );
};
