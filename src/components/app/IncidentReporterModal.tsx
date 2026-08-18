'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, ShieldAlert, EyeOff, CheckCircle2, Lock } from 'lucide-react';
import { BottomSheet } from '../ui/BottomSheet';
import { ShieldButton } from '../ui/ShieldButton';

interface IncidentReporterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReport: (report: any) => void;
}

export const IncidentReporterModal: React.FC<IncidentReporterModalProps> = ({
  isOpen,
  onClose,
  onSubmitReport,
}) => {
  const [type, setType] = useState<'harassment' | 'poor_lighting' | 'unsafe_street' | 'suspicious' | 'transport_issue' | 'other'>('poor_lighting');
  const [severity, setSeverity] = useState<'low' | 'medium' | 'high'>('medium');
  const [locationName, setLocationName] = useState('Metro Gate 3 Alleyway (Current Location)');
  const [description, setDescription] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReport = {
      id: `inc-${Date.now()}`,
      title: `${type.replace('_', ' ').toUpperCase()} Report`,
      type,
      severity,
      timestamp: 'Just now',
      locationName,
      coordinates: { x: 50, y: 50 },
      description: description || 'Community report filed via ShieldHER bottom sheet.',
      upvotes: 1,
      isVerifiedOfficial: false,
      isAnonymous,
    };
    onSubmitReport(newReport);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} title="Report Community Incident" showHandle={true}>
      <form onSubmit={handleSubmit} className="space-y-6 text-charcoal-900 select-none">
        
        {/* INCIDENT TYPE CHIPS */}
        <div className="space-y-2">
          <label className="text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70">
            Incident Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              { id: 'poor_lighting', label: '💡 Poor Lighting' },
              { id: 'harassment', label: '⚠️ Harassment' },
              { id: 'unsafe_street', label: '🚧 Unsafe Street' },
              { id: 'suspicious', label: '👀 Suspicious Activity' },
              { id: 'transport_issue', label: '🚌 Transport Concern' },
              { id: 'other', label: '📌 Other Concern' },
            ].map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setType(cat.id as any)}
                className={`p-3 rounded-2xl font-sans text-xs font-extrabold text-left transition-all cursor-pointer border ${
                  type === cat.id
                    ? 'bg-plum-900 text-cream-50 border-plum-950 shadow-sm'
                    : 'bg-cream-50 text-charcoal-900 border-plum-900/10 hover:border-plum-900/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* SEVERITY LEVEL */}
        <div className="space-y-2">
          <label className="text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70">
            Severity Level
          </label>
          <div className="flex items-center gap-3">
            {[
              { level: 'low', label: 'Low (Advisory)', bg: 'bg-sage-100 text-sage-800 border-sage-500/30' },
              { level: 'medium', label: 'Medium (Caution)', bg: 'bg-amber-100 text-amber-900 border-amber-500/30' },
              { level: 'high', label: 'High (Immediate Danger)', bg: 'bg-emergency-100 text-emergency-700 border-emergency-500/30' },
            ].map((sev) => (
              <button
                type="button"
                key={sev.level}
                onClick={() => setSeverity(sev.level as any)}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-extrabold transition-all cursor-pointer ${
                  severity === sev.level ? `${sev.bg} ring-2 ring-plum-900/20` : 'bg-cream-50 text-charcoal-800 opacity-60'
                }`}
              >
                {sev.label}
              </button>
            ))}
          </div>
        </div>

        {/* LOCATION AUTO DETECTED */}
        <div className="space-y-1">
          <label className="text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70">
            Location Name
          </label>
          <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-cream-50 border border-plum-900/20 text-xs font-bold text-plum-950">
            <MapPin className="w-4 h-4 text-plum-800 shrink-0" />
            <input
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* OPTIONAL NOTE */}
        <div className="space-y-1">
          <label className="text-xs uppercase font-extrabold tracking-widest text-charcoal-800/70">
            Optional Note for Community
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what happened so nearby members can take safer alternate paths..."
            className="w-full p-3.5 rounded-2xl bg-cream-50 border border-plum-900/20 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-plum-800"
          />
        </div>

        {/* ANONYMOUS TOGGLE */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-plum-50 border border-plum-900/10">
          <div className="flex items-center gap-3">
            <EyeOff className="w-5 h-5 text-plum-900" />
            <div>
              <h4 className="font-sans font-extrabold text-xs text-plum-950">File Report Anonymously</h4>
              <p className="text-[10px] text-charcoal-800/70">Your profile and contact info will be omitted from the report.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsAnonymous(!isAnonymous)}
            className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
              isAnonymous ? 'bg-plum-900' : 'bg-charcoal-800/20'
            }`}
          >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
              isAnonymous ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="pt-2 flex items-center justify-end gap-3">
          <ShieldButton variant="ghost" onClick={onClose}>
            Cancel
          </ShieldButton>
          <ShieldButton variant="primary" size="lg" type="submit" icon={<ShieldAlert className="w-4 h-4" />}>
            Submit Incident Report
          </ShieldButton>
        </div>

      </form>
    </BottomSheet>
  );
};
