'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { EditorialHero } from '@/components/landing/EditorialHero';
import { Navbar } from '@/components/landing/Navbar';
import { GirlhoodMarquee } from '@/components/landing/GirlhoodMarquee';
import { DidYouGetHomeSection } from '@/components/landing/DidYouGetHomeSection';
import { CommunitySection } from '@/components/landing/CommunitySection';
import { SafetyCircleSection } from '@/components/landing/SafetyCircleSection';
import { RouteComparisonPreview } from '@/components/landing/RouteComparisonPreview';
import { EmergencyMomentSection } from '@/components/landing/EmergencyMomentSection';
import { HumanNotesSection } from '@/components/landing/HumanNotesSection';
import { FinalEmotionalCTA } from '@/components/landing/FinalEmotionalCTA';
import { EditorialFooter } from '@/components/landing/EditorialFooter';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#202020] selection:bg-[#F3A9BC]">
      
      {/* HIGH ART DIRECTION EDITORIAL HEADER */}
      <Navbar />

      {/* DYNAMIC SCROLLING COLOR MOOD SECTIONS */}
      <main>
        {/* 01. WARM CREAM: HERO */}
        <EditorialHero />

        {/* MARQUEE TICKER STRIP */}
        <GirlhoodMarquee />

        {/* 02. POWDER BLUE: THE GIRL GROUP CHAT SPREAD */}
        <DidYouGetHomeSection />

        {/* 03. POWDER BLUE / CREAM: COMMUNITY MAP PRESENCE */}
        <CommunitySection />

        {/* 04. WARM CREAM: YOUR PEOPLE (SAFETY CIRCLE) */}
        <SafetyCircleSection />

        {/* 05. BUTTER YELLOW: SAFER ROUTE SELECTION */}
        <RouteComparisonPreview />

        {/* 06. NEAR BLACK: EMERGENCY DISPATCH PROTOCOL */}
        <EmergencyMomentSection />

        {/* 07. WARM CREAM: HUMAN NOTES & COMMUNITY PROOF */}
        <HumanNotesSection />

        {/* 08. WARM CREAM: FINAL EMOTIONAL CTA */}
        <FinalEmotionalCTA />
      </main>

      {/* EDITORIAL FOOTER */}
      <div id="about">
        <EditorialFooter
          onStartJourneyClick={() => router.push('/signup')}
          onOpenAppClick={() => router.push('/signup')}
        />
      </div>

    </div>
  );
}
