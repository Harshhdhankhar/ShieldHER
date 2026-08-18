'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { ContextualAppShell } from '@/components/app/ContextualAppShell';
import { ContextualHomeView } from '@/components/app/ContextualHomeView';
import { SafetyCircleView } from '@/components/app/SafetyCircleView';
import { SafePlacesView } from '@/components/app/SafePlacesView';
import { EvidenceVaultView } from '@/components/app/EvidenceVaultView';
import { GuardianJourneyWizard } from '@/components/app/GuardianJourneyWizard';
import { SmartCheckInModal } from '@/components/app/SmartCheckInModal';
import { IncidentReporterModal } from '@/components/app/IncidentReporterModal';
import { SOSOverlay } from '@/components/app/SOSOverlay';
import { SafetyMap } from '@/components/map/SafetyMap';
import { ContextualState } from '@/types/safety';
import { 
  MOCK_SAFE_PLACES, 
  MOCK_VERIFIED_RESPONDERS, 
  MOCK_COMMUNITY_CLUSTERS, 
  MOCK_INCIDENTS,
  MOCK_ROUTES 
} from '@/data/mockData';

export default function AppEntryPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [contextState, setContextState] = useState<ContextualState>('idle');
  const [activeTab, setActiveTab] = useState<'home' | 'map' | 'guardian' | 'circle' | 'places' | 'vault'>('home');
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const isSOSActive = contextState === 'sos_active';
  const isCheckInActive = contextState === 'checkin_requested';

  const handleFinishWizard = () => {
    setIsWizardOpen(false);
    setContextState('journey_active');
    setActiveTab('home');
  };

  return (
    <ContextualAppShell
      appMode="app"
      onAppModeChange={(mode) => {
        if (mode === 'landing') router.push('/');
      }}
      contextState={contextState}
      onContextStateChange={(st) => {
        setContextState(st);
        if (st === 'journey_active') setActiveTab('home');
      }}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onTriggerSOS={() => setContextState('sos_active')}
    >
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* TAB 1: CONTEXTUAL HOME */}
        {activeTab === 'home' && (
          <>
            {isWizardOpen ? (
              <GuardianJourneyWizard
                onStartGuardian={handleFinishWizard}
                onCancel={() => setIsWizardOpen(false)}
              />
            ) : (
              <ContextualHomeView
                contextState={contextState}
                onStateChange={setContextState}
                onOpenReportModal={() => setIsReportModalOpen(true)}
                onOpenWizard={() => setIsWizardOpen(true)}
              />
            )}
          </>
        )}

        {/* TAB 2: SAFETY MAP */}
        {activeTab === 'map' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-sans font-extrabold text-3xl text-plum-950">Safety & Presence Map</h2>
                <p className="text-sm text-charcoal-800/70 font-medium">Privacy-first member density & verified responder locations.</p>
              </div>
              <button
                onClick={() => setIsReportModalOpen(true)}
                className="px-4 py-2 rounded-full bg-plum-900 text-cream-50 font-bold text-xs shadow-sm self-start sm:self-auto cursor-pointer"
              >
                + Report Incident
              </button>
            </div>

            <SafetyMap
              safePlaces={MOCK_SAFE_PLACES}
              responders={MOCK_VERIFIED_RESPONDERS}
              clusters={MOCK_COMMUNITY_CLUSTERS}
              incidents={MOCK_INCIDENTS}
              selectedRoute={MOCK_ROUTES[0]}
            />
          </div>
        )}

        {/* TAB 3: GUARDIAN MODE */}
        {activeTab === 'guardian' && (
          <GuardianJourneyWizard
            onStartGuardian={handleFinishWizard}
            onCancel={() => setActiveTab('home')}
          />
        )}

        {/* TAB 4: SAFETY CIRCLE */}
        {activeTab === 'circle' && <SafetyCircleView />}

        {/* TAB 5: SAFE PLACES DIRECTORY */}
        {activeTab === 'places' && <SafePlacesView />}

        {/* TAB 6: EVIDENCE VAULT */}
        {activeTab === 'vault' && <EvidenceVaultView />}

      </div>

      {/* OVERLAYS & MODALS */}
      <SmartCheckInModal
        isOpen={isCheckInActive}
        onClose={() => setContextState('journey_active')}
        onConfirmSafe={() => setContextState('journey_active')}
        onRequestHelp={() => setContextState('sos_active')}
      />

      <IncidentReporterModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmitReport={(report) => console.log(report)}
      />

      <SOSOverlay
        isOpen={isSOSActive}
        onCancelSOS={() => setContextState('idle')}
        onViewEvidence={() => {
          setContextState('idle');
          setActiveTab('vault');
        }}
      />
    </ContextualAppShell>
  );
}
