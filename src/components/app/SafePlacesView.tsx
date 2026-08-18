'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Hospital, 
  Navigation, 
  MapPin, 
  PhoneCall, 
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { MOCK_SAFE_PLACES } from '../../data/mockData';
import { SafePlace, SafetyCategory } from '../../types/safety';
import { EditorialHeading } from '../ui/EditorialHeading';
import { EditorialLabel } from '../ui/EditorialLabel';
import { ShieldButton } from '../ui/ShieldButton';

export const SafePlacesView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SafetyCategory | 'all'>('all');

  const filteredPlaces = activeCategory === 'all'
    ? MOCK_SAFE_PLACES
    : MOCK_SAFE_PLACES.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto space-y-10 select-none">
      
      {/* HEADER SECTION */}
      <div className="space-y-4">
        <EditorialLabel variant="sage" tilt="slight-left">
          VERIFIED SAFE HAVENS
        </EditorialLabel>
        <EditorialHeading
          size="display"
          line1="nearby"
          line2Italic="safe"
          line3="places."
        />
        <p className="text-charcoal-800/80 font-medium text-base max-w-xl leading-relaxed">
          Open 24/7 establishments, police assistance desks, hospitals, and partner havens ready to provide immediate shelter and support.
        </p>
      </div>

      {/* CATEGORY FILTER CHIPS */}
      <div className="flex items-center gap-2 flex-wrap border-b border-plum-900/10 pb-4">
        {[
          { key: 'all', label: 'All Safe Places' },
          { key: 'police', label: 'Police Stations' },
          { key: 'hospital', label: 'Hospitals' },
          { key: 'metro', label: 'Metro Stations' },
          { key: 'business_247', label: '24/7 Partners' },
          { key: 'pharmacy', label: 'Pharmacies' },
        ].map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key as any)}
            className={`px-4 py-2 rounded-full font-sans text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat.key
                ? 'bg-plum-900 text-cream-50 shadow-sm'
                : 'bg-cream-card text-plum-900 border border-plum-900/10 hover:bg-cream-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* LIST GRID OF SAFE PLACES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPlaces.map((place) => (
          <motion.div
            key={place.id}
            whileHover={{ y: -3 }}
            className="bg-cream-card p-6 rounded-3xl border border-plum-900/15 shadow-editorial flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-plum-100 text-plum-900">
                    {place.category === 'police' && <Building2 className="w-5 h-5" />}
                    {place.category === 'hospital' && <Hospital className="w-5 h-5 text-emerald-700" />}
                    {place.category === 'metro' && <Navigation className="w-5 h-5 text-plum-600" />}
                    {place.category === 'business_247' && <MapPin className="w-5 h-5 text-amber-700" />}
                    {place.category === 'pharmacy' && <CheckCircle2 className="w-5 h-5 text-sage-700" />}
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-base text-plum-950 leading-tight">
                      {place.name}
                    </h3>
                    <p className="text-xs text-charcoal-800/70 font-medium mt-0.5">{place.address}</p>
                  </div>
                </div>

                <span className="text-xs font-extrabold text-plum-900 bg-plum-100 px-2.5 py-1 rounded-full shrink-0">
                  {place.distance}
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sage-800 bg-sage-100 px-2.5 py-0.5 rounded-full">
                  <Clock className="w-3 h-3 text-sage-600" />
                  {place.isOpen247 ? 'Open 24 Hours' : 'Open Now'}
                </span>
                <span className="text-[11px] font-bold text-plum-800 bg-blush-100 px-2.5 py-0.5 rounded-full">
                  ShieldHER Verified ✓
                </span>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {place.amenities.map((am, idx) => (
                  <span key={idx} className="text-[11px] font-medium bg-cream-50 text-charcoal-900 px-2.5 py-1 rounded-full border border-plum-900/10">
                    {am}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom CTAs */}
            <div className="pt-4 border-t border-plum-900/10 flex items-center justify-between gap-3">
              {place.phone && (
                <a
                  href={`tel:${place.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-plum-900 hover:text-plum-700 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{place.phone}</span>
                </a>
              )}

              <ShieldButton variant="primary" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                Navigate Here
              </ShieldButton>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
