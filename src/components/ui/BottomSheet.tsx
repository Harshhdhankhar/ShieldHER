'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxHeight?: string;
  showHandle?: boolean;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxHeight = 'max-h-[85vh]',
  showHandle = true,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-xs transition-opacity"
          />

          {/* Sheet container */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className={`relative w-full max-w-xl bg-cream-card rounded-t-3xl sm:rounded-t-4xl border-t border-plum-900/15 shadow-2xl overflow-hidden flex flex-col ${maxHeight} z-10`}
          >
            {/* Pull handle */}
            {showHandle && (
              <div className="pt-3 pb-1 flex justify-center cursor-grab active:cursor-grabbing">
                <div className="w-12 h-1.5 rounded-full bg-plum-900/20" />
              </div>
            )}

            {/* Header */}
            {(title || onClose) && (
              <div className="px-6 pt-2 pb-3 border-b border-plum-900/10 flex items-center justify-between">
                <div>
                  {title && <h3 className="font-sans text-lg font-extrabold text-plum-950 tracking-tight">{title}</h3>}
                  {subtitle && <p className="text-xs font-medium text-charcoal-800/70">{subtitle}</p>}
                </div>
                {onClose && (
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-plum-100/60 text-plum-900 hover:bg-plum-200 transition-colors cursor-pointer"
                    aria-label="Close sheet"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            )}

            {/* Content area */}
            <div className="p-6 overflow-y-auto flex-1 text-charcoal-900">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
