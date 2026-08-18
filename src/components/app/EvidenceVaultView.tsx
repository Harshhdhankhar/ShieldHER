'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Mic, 
  MapPin, 
  FileText, 
  Download, 
  Share2, 
  HardDrive,
  Info
} from 'lucide-react';
import { MOCK_EVIDENCE } from '../../data/mockData';
import { EvidenceRecord } from '../../types/safety';
import { EditorialHeading } from '../ui/EditorialHeading';
import { EditorialLabel } from '../ui/EditorialLabel';
import { ShieldButton } from '../ui/ShieldButton';

export const EvidenceVaultView: React.FC = () => {
  const [evidenceList, setEvidenceList] = useState<EvidenceRecord[]>(MOCK_EVIDENCE);

  return (
    <div className="max-w-5xl mx-auto space-y-10 select-none">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-4">
          <EditorialLabel variant="lavender" tilt="slight-left">
            SECURE REPOSITORY
          </EditorialLabel>
          <EditorialHeading
            size="display"
            line1="evidence"
            line2Italic="vault."
          />
          <p className="text-charcoal-800/80 font-medium text-base max-w-xl leading-relaxed">
            Automatic ambient audio recordings, location trace timelines, and incident timestamps stored locally on your device with optional encrypted cloud backup.
          </p>
        </div>

        <div className="bg-sage-100 p-4 rounded-2xl border border-sage-500/20 text-xs font-bold text-sage-800 flex items-center gap-3 shrink-0">
          <ShieldCheck className="w-5 h-5 text-sage-700" />
          <div>
            <div>Evidence Vault Status</div>
            <div className="text-[10px] font-normal text-sage-900">Encrypted & Protected</div>
          </div>
        </div>
      </div>

      {/* EVIDENCE CARDS LIST */}
      <div className="space-y-4">
        {evidenceList.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 4 }}
            className="bg-cream-card p-6 rounded-3xl border border-plum-900/15 shadow-editorial flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-plum-100 text-plum-900 shrink-0">
                {item.type === 'audio' && <Mic className="w-5 h-5" />}
                {item.type === 'location_snapshot' && <MapPin className="w-5 h-5" />}
                {item.type === 'journey_log' && <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-base text-plum-950">{item.title}</h3>
                <div className="flex items-center gap-3 text-xs text-charcoal-800/70 font-semibold mt-1">
                  <span>{item.timestamp}</span>
                  {item.duration && <span>• {item.duration}</span>}
                  {item.fileSize && <span>• {item.fileSize}</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <span className="text-xs font-extrabold text-sage-800 bg-sage-100 px-3 py-1 rounded-full border border-sage-500/20">
                ✓ {item.encryptionStatus}
              </span>
              <ShieldButton variant="secondary" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
                Export
              </ShieldButton>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER DISCLAIMER CARD */}
      <div className="bg-plum-900 text-cream-50 p-6 rounded-3xl border border-plum-950 flex items-start gap-4">
        <Info className="w-5 h-5 text-blush-200 shrink-0 mt-0.5" />
        <div className="text-xs text-cream-50/80 font-medium space-y-1">
          <p className="font-extrabold text-cream-50 text-sm">Privacy & Security Transparency</p>
          <p>
            ShieldHER stores evidence logs locally in device storage with user-key encryption. Recordings are only initiated during active Guardian Mode or SOS triggers.
          </p>
        </div>
      </div>

    </div>
  );
};
