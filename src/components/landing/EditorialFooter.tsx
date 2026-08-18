'use client';

import React from 'react';
import { ShieldCheck, Heart, Lock, ArrowUpRight } from 'lucide-react';

interface EditorialFooterProps {
  onStartJourneyClick: () => void;
  onOpenAppClick: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({
  onStartJourneyClick,
  onOpenAppClick,
}) => {
  return (
    <footer className="bg-plum-950 text-cream-50 pt-20 pb-12 border-t border-plum-900/40 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP FOOTER EDITORIAL STATEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-cream-50/10">
          <div className="lg:col-span-6 space-y-6">
            {/* Understated wordmark with subtle emphasis on HER */}
            <div className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight">
              shield<span className="font-editorial-serif italic font-normal text-blush-200">HER.</span>
            </div>
            <p className="font-editorial-serif text-2xl sm:text-3xl italic text-cream-50/80 max-w-lg leading-snug">
              "You shouldn't have to think twice about getting home."
            </p>
            <p className="text-sm text-cream-50/70 font-medium max-w-md leading-relaxed">
              ShieldHER surrounds your everyday journeys with your trusted people, nearby verified responders, safer routes, and instant emergency protection.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-extrabold text-blush-200">Product</h4>
              <ul className="space-y-2 text-sm text-cream-50/80 font-medium">
                <li><button onClick={onOpenAppClick} className="hover:text-cream-50 transition-colors">Safety Map</button></li>
                <li><button onClick={onOpenAppClick} className="hover:text-cream-50 transition-colors">Guardian Mode</button></li>
                <li><button onClick={onOpenAppClick} className="hover:text-cream-50 transition-colors">Safe Routes</button></li>
                <li><button onClick={onOpenAppClick} className="hover:text-cream-50 transition-colors">Safety Circle</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-extrabold text-blush-200">Community</h4>
              <ul className="space-y-2 text-sm text-cream-50/80 font-medium">
                <li><a href="#community" className="hover:text-cream-50 transition-colors">Verified Responders</a></li>
                <li><a href="#community" className="hover:text-cream-50 transition-colors">Safe Haven Directory</a></li>
                <li><a href="#community" className="hover:text-cream-50 transition-colors">Incident Heatmap</a></li>
                <li><a href="#community" className="hover:text-cream-50 transition-colors">Privacy Pledge</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-extrabold text-blush-200">Emergency</h4>
              <ul className="space-y-2 text-sm text-cream-50/80 font-medium">
                <li><button onClick={onOpenAppClick} className="hover:text-emergency-500 transition-colors">SOS Overlay</button></li>
                <li><button onClick={onOpenAppClick} className="hover:text-cream-50 transition-colors">Evidence Vault</button></li>
                <li><a href="tel:112" className="hover:text-cream-50 transition-colors">Emergency Services (112)</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-cream-50/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ShieldHER Creative Studio.</span>
            <span>•</span>
            <span className="text-blush-200">Go where you want. We've got your back.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-cream-50 cursor-pointer">Privacy UX Standard</span>
            <span className="hover:text-cream-50 cursor-pointer">Terms of Trust</span>
            <span className="hover:text-cream-50 cursor-pointer">Accessibility</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
