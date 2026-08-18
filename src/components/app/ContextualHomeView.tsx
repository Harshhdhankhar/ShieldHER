'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Navigation, 
  ShieldCheck, 
  MapPin, 
  Users, 
  HeartHandshake, 
  AlertTriangle, 
  Plus, 
  Clock, 
  ArrowRight,
  ShieldAlert,
  FileText
} from 'lucide-react';
import { 
  ContextualState, 
  SafePlace, 
  VerifiedResponder, 
  CommunityCluster, 
  IncidentReport, 
  RouteOption,
  SafetyContact 
} from '../../types/safety';
import { 
  MOCK_SAFE_PLACES, 
  MOCK_VERIFIED_RESPONDERS, 
  MOCK_COMMUNITY_CLUSTERS, 
  MOCK_INCIDENTS, 
  MOCK_ROUTES,
  MOCK_SAFETY_CIRCLE 
} from '../../data/mockData';
import { SafetyMap } from '../map/SafetyMap';
import { EditorialHeading } from '../ui/EditorialHeading';
import { ShieldButton } from '../ui/ShieldButton';
import { EditorialLabel } from '../ui/EditorialLabel';
import { StatusPill } from '../ui/StatusPill';
import { RouteDeviationWarning } from './RouteDeviationWarning';
import { GuardianJourneyWizard } from './GuardianJourneyWizard';

interface ContextualHomeViewProps {
  contextState: ContextualState;
  onStateChange: (newState: ContextualState) => void;
  onOpenReportModal: () => void;
  onOpenWizard: () => void;
}

export const ContextualHomeView: React.FC<ContextualHomeViewProps> = ({
  contextState,
  onStateChange,
  onOpenReportModal,
  onOpenWizard,
}) => {
  const [selectedRoute, setSelectedRoute] = useState<RouteOption>(MOCK_ROUTES[0]);
  const [journeyDestination, setJourneyDestination] = useState('Home (Connaught Place)');
  const [journeyProgressMinutes, setJourneyProgressMinutes] = useState(8);

  return (
    <div className="space-y-8 select-none max-w-7xl mx-auto">
      
      {/* CONTEXT STATE BANNER (DYNAMIC HEADER DEPENDING ON USER STATE) */}
      <div className="bg-cream-card p-6 sm:p-8 rounded-3xl sm:rounded-4xl border border-plum-900/15 shadow-editorial">
        
        {/* STATE 1: NORMAL / IDLE STATE */}
        {contextState === 'idle' && (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <StatusPill status="safe" label="Connected to Safety Network" />
                <span className="text-xs font-semibold text-charcoal-800/60 font-sans">
                  • 12 members nearby
                </span>
              </div>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-plum-950 tracking-tight">
                good evening, Harsh.
              </h1>
              <p className="text-charcoal-800/80 font-medium text-base">
                Your Safety Circle is active. 8 ShieldHER members & 2 verified responders around you.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="flex items-center gap-3 shrink-0">
              <ShieldButton
                variant="sage"
                size="xl"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={onOpenWizard}
              >
                Start Safe Journey →
              </ShieldButton>
            </div>
          </div>
        )}

        {/* STATE 2: ACTIVE GUARDIAN JOURNEY STATE */}
        {contextState === 'journey_active' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <StatusPill status="journey_active" label="Guardian Mode Active" />
                <h1 className="font-editorial-serif text-4xl sm:text-5xl italic text-plum-950 mt-1">
                  you're on your way.
                </h1>
                <p className="text-sm font-semibold text-charcoal-800/80">
                  Destination: <strong className="font-extrabold text-plum-900">{journeyDestination}</strong>
                </p>
              </div>

              <div className="text-left sm:text-right bg-plum-50 p-4 rounded-2xl border border-plum-900/10 shrink-0">
                <div className="font-editorial-serif text-3xl italic text-plum-900">
                  {selectedRoute.durationMinutes - journeyProgressMinutes} min remaining
                </div>
                <div className="text-xs font-semibold text-charcoal-800/70">ETA: 21:35 PM</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold text-plum-900">
                <span>Journey Progress ({selectedRoute.title})</span>
                <span>40% Completed</span>
              </div>
              <div className="w-full h-3 rounded-full bg-plum-100 overflow-hidden">
                <div className="h-full bg-plum-900 rounded-full w-[40%] transition-all duration-500" />
              </div>
            </div>

            {/* Safety Circle Shared Badge & Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-plum-900/10">
              <div className="flex items-center gap-3 text-xs font-semibold text-charcoal-800">
                <span className="text-plum-900 font-extrabold">Location shared with:</span>
                <span className="bg-blush-100 text-plum-900 px-3 py-1 rounded-full border border-plum-900/10">
                  Mom (Ananya)
                </span>
                <span className="bg-blush-100 text-plum-900 px-3 py-1 rounded-full border border-plum-900/10">
                  Riya Sen
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <ShieldButton
                  variant="sage"
                  size="md"
                  onClick={() => onStateChange('checkin_requested')}
                >
                  I'm Safe
                </ShieldButton>
                <ShieldButton
                  variant="secondary"
                  size="md"
                  className="border-emergency-500/30 text-emergency-700"
                  onClick={() => onStateChange('sos_active')}
                >
                  Need Help
                </ShieldButton>
                <ShieldButton
                  variant="ghost"
                  size="md"
                  onClick={() => onStateChange('idle')}
                >
                  End Journey
                </ShieldButton>
              </div>
            </div>
          </div>
        )}

        {/* STATE 3: CHECK-IN REQUESTED STATE */}
        {contextState === 'checkin_requested' && (
          <div className="space-y-4 text-center py-2">
            <StatusPill status="checkin_pending" label="Check-in Requested" className="mx-auto" />
            <h2 className="font-editorial-serif text-4xl italic text-plum-950">
              everything okay?
            </h2>
            <p className="text-sm font-medium text-charcoal-800/80 max-w-md mx-auto">
              Confirm your safety to keep your Safety Circle reassured.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <ShieldButton variant="sage" size="lg" onClick={() => onStateChange('journey_active')}>
                Yep, I'm good
              </ShieldButton>
              <ShieldButton variant="emergency" size="lg" onClick={() => onStateChange('sos_active')}>
                I need help
              </ShieldButton>
            </div>
          </div>
        )}

        {/* STATE 4: ROUTE DEVIATION STATE */}
        {contextState === 'route_deviation' && (
          <RouteDeviationWarning
            onConfirmOkay={() => onStateChange('journey_active')}
            onShowSafeRoute={() => onStateChange('journey_active')}
            onGetHelp={() => onStateChange('sos_active')}
          />
        )}

        {/* STATE 5: EMERGENCY SOS STATE */}
        {contextState === 'sos_active' && (
          <div className="bg-emergency-600 text-white p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-white animate-bounce" />
              <div>
                <h2 className="font-sans font-extrabold text-xl">Active Emergency Protocol Triggered</h2>
                <p className="text-xs text-white/90">Safety Circle & Nearby Responders Alerted.</p>
              </div>
            </div>
            <ShieldButton variant="secondary" onClick={() => onStateChange('idle')}>
              Cancel SOS
            </ShieldButton>
          </div>
        )}

      </div>

      {/* INTERACTIVE SAFETY MAP AREA */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-extrabold text-xl text-plum-950">Live Safety Map</h3>
            <span className="text-xs font-semibold text-charcoal-800/60 bg-cream-card px-2.5 py-0.5 rounded-full border border-plum-900/10">
              Delhi NCR Region
            </span>
          </div>
          <ShieldButton
            variant="ghost"
            size="sm"
            onClick={onOpenReportModal}
            icon={<Plus className="w-4 h-4" />}
          >
            Report Incident
          </ShieldButton>
        </div>

        <SafetyMap
          safePlaces={MOCK_SAFE_PLACES}
          responders={MOCK_VERIFIED_RESPONDERS}
          clusters={MOCK_COMMUNITY_CLUSTERS}
          incidents={MOCK_INCIDENTS}
          selectedRoute={selectedRoute}
          activeJourney={contextState === 'journey_active'}
        />
      </div>

      {/* SECONDARY QUICK ACTIONS BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <button
          onClick={onOpenWizard}
          className="p-5 rounded-3xl bg-cream-card border border-plum-900/15 shadow-sm hover:border-plum-900/30 transition-all text-left group"
        >
          <div className="p-3 rounded-2xl bg-plum-100 text-plum-900 w-fit mb-3 group-hover:scale-105 transition-transform">
            <Navigation className="w-5 h-5" />
          </div>
          <h4 className="font-sans font-extrabold text-sm text-plum-950">Safe Routes</h4>
          <p className="text-xs text-charcoal-800/70 mt-0.5">Find signal-backed paths</p>
        </button>

        <button
          onClick={() => onStateChange('checkin_requested')}
          className="p-5 rounded-3xl bg-cream-card border border-plum-900/15 shadow-sm hover:border-plum-900/30 transition-all text-left group"
        >
          <div className="p-3 rounded-2xl bg-blush-100 text-plum-900 w-fit mb-3 group-hover:scale-105 transition-transform">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h4 className="font-sans font-extrabold text-sm text-plum-950">Smart Check-in</h4>
          <p className="text-xs text-charcoal-800/70 mt-0.5">Test calm safety prompt</p>
        </button>

        <button
          onClick={onOpenReportModal}
          className="p-5 rounded-3xl bg-cream-card border border-plum-900/15 shadow-sm hover:border-plum-900/30 transition-all text-left group"
        >
          <div className="p-3 rounded-2xl bg-amber-100 text-amber-900 w-fit mb-3 group-hover:scale-105 transition-transform">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h4 className="font-sans font-extrabold text-sm text-plum-950">Report Street</h4>
          <p className="text-xs text-charcoal-800/70 mt-0.5">Flag lighting or issues</p>
        </button>

        <button
          onClick={() => onStateChange('sos_active')}
          className="p-5 rounded-3xl bg-emergency-50 border border-emergency-500/30 shadow-sm hover:bg-emergency-100 transition-all text-left group"
        >
          <div className="p-3 rounded-2xl bg-emergency-600 text-white w-fit mb-3 group-hover:scale-105 transition-transform">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h4 className="font-sans font-extrabold text-sm text-emergency-900">SOS Trigger</h4>
          <p className="text-xs text-emergency-800/70 mt-0.5">Test emergency protocol</p>
        </button>
      </div>

    </div>
  );
};
