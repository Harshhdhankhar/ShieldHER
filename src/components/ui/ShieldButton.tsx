'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ShieldButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emergency' | 'sage';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  decor?: 'star';
  children: React.ReactNode;
}

export const ShieldButton: React.FC<ShieldButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  decor,
  children,
  className,
  ...props
}) => {
  const baseStyles = 'group inline-flex items-center justify-center font-semibold tracking-tight transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-plum-800 rounded-full select-none cursor-pointer';

  const variantStyles = {
    primary: 'bg-plum-900 text-cream-50 hover:bg-plum-800 active:bg-plum-950 shadow-md shadow-plum-950/10',
    secondary: 'bg-blush-100 text-plum-900 border border-plum-900/10 hover:bg-blush-200 active:bg-blush-300',
    sage: 'bg-sage-700 text-cream-50 hover:bg-sage-800 active:bg-sage-900 shadow-sm',
    outline: 'border-2 border-plum-900 text-plum-900 bg-transparent hover:bg-plum-900/5 active:bg-plum-900/10',
    ghost: 'text-plum-900 hover:bg-plum-900/5 active:bg-plum-900/10 bg-transparent',
    emergency: 'bg-emergency-600 text-white hover:bg-emergency-700 active:bg-emergency-800 shadow-lg shadow-emergency-600/30 font-bold',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[34px]',
    md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-7 py-3.5 gap-2.5 min-h-[52px]',
    xl: 'text-lg px-9 py-4 gap-3 min-h-[60px]',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 3, scale: 0.99 }}
      className={twMerge(clsx(baseStyles, variantStyles[variant], sizeStyles[size], className))}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-1">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">{icon}</span>
      )}
      {decor === 'star' && (
        <span className="btn-star" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#F4E58C" stroke="#202020" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M12 2 Q13 11 22 12 Q13 13 12 22 Q11 13 2 12 Q11 11 12 2 Z" />
          </svg>
        </span>
      )}
    </motion.button>
  );
};
