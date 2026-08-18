'use client';

import React from 'react';
import { clsx } from 'clsx';

interface EditorialHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'hero' | 'display' | 'section' | 'card';
  line1: string;
  line2Italic?: string;
  line3?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  badge?: string;
}

export const EditorialHeading: React.FC<EditorialHeadingProps> = ({
  as: Component = 'h1',
  size = 'display',
  line1,
  line2Italic,
  line3,
  className,
  align = 'left',
  badge,
}) => {
  const sizeStyles = {
    hero: 'text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tight leading-[0.92]',
    display: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]',
    section: 'text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05]',
    card: 'text-2xl sm:text-3xl tracking-tight leading-[1.1]',
  };

  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={clsx('relative flex flex-col gap-1', alignStyles[align], className)}>
      {badge && (
        <span className="self-start inline-block font-sans text-xs uppercase tracking-widest font-bold text-plum-600 bg-plum-100/80 px-3 py-1 rounded-full mb-2">
          {badge}
        </span>
      )}
      <Component className={clsx('font-extrabold text-charcoal-900', sizeStyles[size])}>
        <span className="block font-sans font-bold">{line1}</span>
        {line2Italic && (
          <span className="block font-editorial-serif font-normal italic text-plum-900 text-[1.08em] -mt-1 sm:-mt-2">
            {line2Italic}
          </span>
        )}
        {line3 && <span className="block font-sans font-bold">{line3}</span>}
      </Component>
    </div>
  );
};
