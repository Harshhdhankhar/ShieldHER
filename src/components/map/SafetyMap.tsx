'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  MapPin, 
  Navigation, 
  Layers, 
  Hospital, 
  Building2, 
  AlertTriangle, 
  Users, 
  CheckCircle2,
  PhoneCall,
  ChevronRight,
  Info
} from 'lucide-react';
import { 
  SafePlace, 
  VerifiedResponder, 
  CommunityCluster, 
  IncidentReport, 
  RouteOption 
} from '../../types/safety';

interface SafetyMapProps {
  safePlaces: SafePlace[];
  responders: VerifiedResponder[];
  clusters: CommunityCluster[];
  incidents: IncidentReport[];
  selectedRoute?: RouteOption;
  activeJourney?: boolean;
  onSelectSafePlace?: (place: SafePlace) => void;
  onSelectResponder?: (responder: VerifiedResponder) => void;
  onSelectIncident?: (incident: IncidentReport) => void;
  className?: string;
  showControls?: boolean;
}

export const SafetyMap: React.FC<SafetyMapProps> = ({
  safePlaces,
  responders,
  clusters,
  incidents,
  selectedRoute,
  activeJourney = false,
  onSelectSafePlace,
  onSelectResponder,
  onSelectIncident,
  className = '',
  showControls = true,
}) => {
  // Layer toggles
  const [showClustersLayer, setShowClustersLayer] = useState(true);
  const [showRespondersLayer, setShowRespondersLayer] = useState(true);
  const [showSafePlacesLayer, setShowSafePlacesLayer] = useState(true);
  const [showIncidentsLayer, setShowIncidentsLayer] = useState(true);

  // Selected map item state for popup
  const [activeItem, setActiveItem] = useState<{
    type: 'safe_place' | 'responder' | 'cluster' | 'incident' | 'user';
    data: any;
  } | null>(null);

  // User simulated position
  const userPos = { x: 50, y: 50 };

  return (
    <div className={`relative w-full h-[450px] sm:h-[540px] md:h-[600px] bg-[#FAF4ED] border border-plum-900/15 rounded-3xl sm:rounded-4xl overflow-hidden shadow-editorial select-none ${className}`}>
      {/* SVG Map Canvas with Custom Aesthetic Vector Roads & Grid */}
      <svg className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3B1C2A" strokeWidth="0.08" strokeOpacity="0.07" />
          </pattern>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#752A4A" />
            <stop offset="100%" stopColor="#4E7B62" />
          </linearGradient>
        </defs>

        {/* Background Grid */}
        <rect width="100" height="100" fill="url(#grid)" />

        {/* Vector Parks & Safe Zones */}
        <path d="M 15 15 Q 25 10, 35 20 T 45 40 Q 30 50, 15 35 Z" fill="#E2EFE7" fillOpacity="0.6" stroke="#2E5A44" strokeWidth="0.15" strokeDasharray="0.5 0.5" />
        <path d="M 60 10 Q 80 5, 90 25 T 75 45 Q 65 35, 60 10 Z" fill="#E2EFE7" fillOpacity="0.4" stroke="#2E5A44" strokeWidth="0.15" />

        {/* Vector River/Avenue contour */}
        <path d="M 0 65 Q 30 75, 55 55 T 100 45" fill="none" stroke="#E4DEF2" strokeWidth="3" strokeOpacity="0.8" />

        {/* Main Editorial Arterial Roads */}
        <path d="M 10 85 L 30 65 L 38 42 L 55 35 L 85 20" fill="none" stroke="#FAF0F2" strokeWidth="4" />
        <path d="M 10 85 L 30 65 L 38 42 L 55 35 L 85 20" fill="none" stroke="#752A4A" strokeWidth="0.6" strokeOpacity="0.3" />
        
        <path d="M 20 15 L 45 68 L 75 72 L 95 85" fill="none" stroke="#FAF0F2" strokeWidth="3.5" />
        <path d="M 20 15 L 45 68 L 75 72 L 95 85" fill="none" stroke="#3B1C2A" strokeWidth="0.4" strokeOpacity="0.25" />

        {/* Active Route Line Rendering */}
        {selectedRoute && (
          <>
            {/* Outer Glow */}
            <polyline
              points={selectedRoute.coordinatesPath.map(p => `${p.x},${p.y}`).join(' ')}
              fill="none"
              stroke="#2E5A44"
              strokeWidth="2.2"
              strokeOpacity="0.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Main Animated Path */}
            <polyline
              points={selectedRoute.coordinatesPath.map(p => `${p.x},${p.y}`).join(' ')}
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="1.2"
              strokeDasharray="2 1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}

        {/* Privacy Cluster Halo Circles */}
        {showClustersLayer && clusters.map(cluster => (
          <g key={cluster.id} onClick={() => setActiveItem({ type: 'cluster', data: cluster })} className="cursor-pointer">
            <circle
              cx={cluster.coordinates.x}
              cy={cluster.coordinates.y}
              r={cluster.radiusKm * 10}
              fill="#F4E3E7"
              fillOpacity="0.45"
              stroke="#752A4A"
              strokeWidth="0.3"
              strokeDasharray="0.8 0.4"
            />
            <circle
              cx={cluster.coordinates.x}
              cy={cluster.coordinates.y}
              r={cluster.radiusKm * 10}
              className="map-radar-pulse"
              fill="none"
              stroke="#752A4A"
              strokeWidth="0.4"
              strokeOpacity="0.4"
            />
          </g>
        ))}

        {/* User Safe Radius */}
        <circle cx={userPos.x} cy={userPos.y} r="18" fill="#2E5A44" fillOpacity="0.06" stroke="#2E5A44" strokeWidth="0.25" strokeDasharray="1 1" />
      </svg>

      {/* OVERLAY ELEMENTS (HTML overlay on top of SVG map) */}

      {/* Layer 1: Privacy Community Member Clusters */}
      {showClustersLayer && clusters.map((cluster) => (
        <div
          key={cluster.id}
          style={{ left: `${cluster.coordinates.x}%`, top: `${cluster.coordinates.y}%` }}
          onClick={() => setActiveItem({ type: 'cluster', data: cluster })}
          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-plum-900 text-cream-50 font-sans text-xs font-bold shadow-sticker border border-cream-50/50"
          >
            <Users className="w-3 h-3 text-blush-200" />
            <span>{cluster.memberCount} members</span>
          </motion.div>
        </div>
      ))}

      {/* Layer 2: Verified Responders */}
      {showRespondersLayer && responders.map((resp) => (
        <div
          key={resp.id}
          style={{ left: `${resp.coordinates.x}%`, top: `${resp.coordinates.y}%` }}
          onClick={() => {
            setActiveItem({ type: 'responder', data: resp });
            onSelectResponder?.(resp);
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-15"
        >
          <motion.div 
            whileHover={{ scale: 1.15 }}
            className="relative flex items-center justify-center p-1 bg-sage-700 text-white rounded-full border-2 border-cream-50 shadow-md"
            title={`${resp.name} (${resp.distance})`}
          >
            <Shield className="w-4 h-4 fill-sage-100 text-sage-800" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border border-white rounded-full" />
          </motion.div>
        </div>
      ))}

      {/* Layer 3: Safe Places */}
      {showSafePlacesLayer && safePlaces.map((place) => (
        <div
          key={place.id}
          style={{ left: `${place.coordinates.x}%`, top: `${place.coordinates.y}%` }}
          onClick={() => {
            setActiveItem({ type: 'safe_place', data: place });
            onSelectSafePlace?.(place);
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
        >
          <motion.div 
            whileHover={{ scale: 1.2 }}
            className="p-2 bg-cream-card text-plum-900 rounded-2xl border border-plum-900/20 shadow-md flex items-center gap-1.5"
          >
            {place.category === 'police' && <Building2 className="w-4 h-4 text-plum-900" />}
            {place.category === 'hospital' && <Hospital className="w-4 h-4 text-emerald-700" />}
            {place.category === 'metro' && <Navigation className="w-4 h-4 text-plum-600" />}
            {place.category === 'business_247' && <MapPin className="w-4 h-4 text-amber-700" />}
            {place.category === 'pharmacy' && <CheckCircle2 className="w-4 h-4 text-sage-700" />}
            <span className="text-[10px] font-extrabold font-sans hidden sm:inline">{place.name.split(' ')[0]}</span>
          </motion.div>
        </div>
      ))}

      {/* Layer 4: Incident Reports */}
      {showIncidentsLayer && incidents.map((inc) => (
        <div
          key={inc.id}
          style={{ left: `${inc.coordinates.x}%`, top: `${inc.coordinates.y}%` }}
          onClick={() => {
            setActiveItem({ type: 'incident', data: inc });
            onSelectIncident?.(inc);
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-25"
        >
          <motion.div 
            whileHover={{ scale: 1.2 }}
            className="p-1.5 bg-amber-100 text-amber-900 border border-amber-500/40 rounded-full shadow-sm"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-800" />
          </motion.div>
        </div>
      ))}

      {/* USER CURRENT POSITION PIN */}
      <div 
        style={{ left: `${userPos.x}%`, top: `${userPos.y}%` }}
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
      >
        <div className="relative flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-plum-900/20 animate-ping absolute" />
          <div className="w-6 h-6 rounded-full bg-plum-900 border-2 border-white shadow-lg flex items-center justify-center text-cream-50 font-extrabold text-[10px]">
            YOU
          </div>
        </div>
      </div>

      {/* TOP LEFT EDITORIAL MAP CONTROLS & RADAR SUMMARY */}
      {showControls && (
        <div className="absolute top-4 left-4 z-40 flex flex-col gap-2 max-w-[260px] sm:max-w-xs">
          <div className="bg-cream-card/90 backdrop-blur-md p-3.5 rounded-2xl border border-plum-900/15 shadow-editorial">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs uppercase tracking-widest font-extrabold text-plum-800">Around You</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sage-700 bg-sage-100 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" /> Live Radar
              </span>
            </div>
            <p className="text-xs font-semibold text-charcoal-900">
              12 ShieldHER members • 3 verified responders • 4 safe places
            </p>
            <p className="text-[10px] text-charcoal-800/60 mt-1 flex items-center gap-1">
              <Info className="w-3 h-3 text-plum-600 shrink-0" /> Exact positions protected by privacy clusters
            </p>
          </div>

          {/* Map Layer Toggles */}
          <div className="flex items-center gap-1.5 flex-wrap bg-cream-card/80 backdrop-blur-md p-1.5 rounded-2xl border border-plum-900/10">
            <button
              onClick={() => setShowClustersLayer(!showClustersLayer)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-colors ${showClustersLayer ? 'bg-plum-900 text-cream-50' : 'bg-cream-100 text-plum-900'}`}
            >
              Members
            </button>
            <button
              onClick={() => setShowRespondersLayer(!showRespondersLayer)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-colors ${showRespondersLayer ? 'bg-sage-700 text-white' : 'bg-cream-100 text-plum-900'}`}
            >
              Responders
            </button>
            <button
              onClick={() => setShowSafePlacesLayer(!showSafePlacesLayer)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-colors ${showSafePlacesLayer ? 'bg-plum-900 text-cream-50' : 'bg-cream-100 text-plum-900'}`}
            >
              Safe Places
            </button>
          </div>
        </div>
      )}

      {/* POPUP CONTAINER FOR SELECTED MAP ITEMS */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-80 z-40 bg-cream-card p-4 rounded-3xl border border-plum-900/20 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-plum-600">
                  {activeItem.type.replace('_', ' ')}
                </span>
                <h4 className="font-sans font-extrabold text-sm text-plum-950">
                  {activeItem.data.name || activeItem.data.title || activeItem.data.areaName}
                </h4>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="text-xs text-charcoal-800/60 hover:text-plum-900 font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* Content Details */}
            {activeItem.type === 'safe_place' && (
              <div className="mt-2 text-xs space-y-1.5 text-charcoal-800">
                <p>{activeItem.data.address} ({activeItem.data.distance})</p>
                <div className="flex items-center gap-1 text-[11px] font-bold text-sage-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage-500" />
                  <span>{activeItem.data.isOpen247 ? 'Open 24/7' : 'Verified Facility'}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {activeItem.data.amenities?.map((am: string, i: number) => (
                    <span key={i} className="text-[10px] bg-plum-100 text-plum-900 px-2 py-0.5 rounded-full font-medium">
                      {am}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeItem.type === 'responder' && (
              <div className="mt-2 text-xs space-y-2">
                <p className="text-charcoal-800">{activeItem.data.role}</p>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="bg-sage-100 text-sage-800 font-bold px-2 py-0.5 rounded-full">
                    ★ {activeItem.data.rating} Rating
                  </span>
                  <span className="bg-plum-100 text-plum-900 font-bold px-2 py-0.5 rounded-full">
                    {activeItem.data.distance}
                  </span>
                </div>
                <p className="text-[10px] text-charcoal-800/70">
                  ✓ Identity verified • Completed Community First Aid Training
                </p>
              </div>
            )}

            {activeItem.type === 'cluster' && (
              <div className="mt-2 text-xs space-y-1 text-charcoal-800">
                <p className="font-semibold">{activeItem.data.memberCount} active members within {activeItem.data.radiusKm} km radius.</p>
                <p className="text-[10px] text-charcoal-800/70">
                  Privacy-first cluster. Exact user GPS coordinates are never displayed.
                </p>
              </div>
            )}

            {activeItem.type === 'incident' && (
              <div className="mt-2 text-xs space-y-1.5 text-charcoal-800">
                <p className="text-amber-900 font-medium">{activeItem.data.description}</p>
                <p className="text-[10px] text-charcoal-800/60">Reported {activeItem.data.timestamp} • {activeItem.data.upvotes} community confirmations</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
