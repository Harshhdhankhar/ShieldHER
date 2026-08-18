'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Shield, Bell, MapPin, Check, Settings, Trash2 } from 'lucide-react';
import { MOCK_SAFETY_CIRCLE } from '../../data/mockData';
import { SafetyContact } from '../../types/safety';
import { EditorialHeading } from '../ui/EditorialHeading';
import { ShieldButton } from '../ui/ShieldButton';
import { EditorialLabel } from '../ui/EditorialLabel';

export const SafetyCircleView: React.FC = () => {
  const [contacts, setContacts] = useState<SafetyContact[]>(MOCK_SAFETY_CIRCLE);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newRelation, setNewRelation] = useState('Friend');

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newPhone) return;

    const newContact: SafetyContact = {
      id: `sc-${Date.now()}`,
      name: newName,
      relationship: newRelation,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      phone: newPhone,
      permissions: {
        journeyUpdates: true,
        missedCheckins: true,
        sosAlerts: true,
        liveLocationSharing: true,
      },
      status: 'active',
    };

    setContacts([...contacts, newContact]);
    setNewName('');
    setNewPhone('');
    setShowAddModal(false);
  };

  const togglePermission = (contactId: string, permKey: keyof SafetyContact['permissions']) => {
    setContacts(
      contacts.map((c) => {
        if (c.id === contactId) {
          return {
            ...c,
            permissions: {
              ...c.permissions,
              [permKey]: !c.permissions[permKey],
            },
          };
        }
        return c;
      })
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 select-none">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-2">
          <EditorialLabel variant="plum" tilt="slight-left">
            PRIVATE SAFETY NETWORK
          </EditorialLabel>
          <EditorialHeading
            size="display"
            line1="your"
            line2Italic="people."
          />
          <p className="text-charcoal-800/80 font-medium text-base max-w-xl leading-relaxed">
            Add trusted friends, family members, or flatmates. You control granular permissions for who gets notified during journeys or emergencies.
          </p>
        </div>

        <ShieldButton
          variant="primary"
          size="lg"
          icon={<UserPlus className="w-5 h-5" />}
          onClick={() => setShowAddModal(true)}
        >
          Add Trusted Contact
        </ShieldButton>
      </div>

      {/* CONTACT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact) => (
          <motion.div
            key={contact.id}
            whileHover={{ y: -3 }}
            className="bg-cream-card p-6 rounded-3xl border border-plum-900/15 shadow-editorial flex flex-col justify-between space-y-6"
          >
            {/* Top Contact Info */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-plum-900/20 shadow-sm"
                />
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-plum-950">{contact.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-bold text-plum-800 bg-plum-100 px-2.5 py-0.5 rounded-full">
                      {contact.relationship}
                    </span>
                    <span className="text-xs font-semibold text-charcoal-800/70">{contact.phone}</span>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-sage-800 bg-sage-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-600" /> Active
              </span>
            </div>

            {/* Granular Permissions Controls */}
            <div className="bg-cream-50 p-4 rounded-2xl border border-plum-900/10 space-y-2 text-xs">
              <div className="text-[10px] uppercase font-bold tracking-widest text-charcoal-800/60 mb-1">
                Permissions & Alert Triggers
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-charcoal-900">Journey Progress Updates</span>
                <button
                  onClick={() => togglePermission(contact.id, 'journeyUpdates')}
                  className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                    contact.permissions.journeyUpdates ? 'bg-plum-900' : 'bg-charcoal-800/20'
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                    contact.permissions.journeyUpdates ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-charcoal-900">Missed Check-in Alerts</span>
                <button
                  onClick={() => togglePermission(contact.id, 'missedCheckins')}
                  className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                    contact.permissions.missedCheckins ? 'bg-plum-900' : 'bg-charcoal-800/20'
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                    contact.permissions.missedCheckins ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-charcoal-900">Emergency SOS Dispatch</span>
                <button
                  onClick={() => togglePermission(contact.id, 'sosAlerts')}
                  className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                    contact.permissions.sosAlerts ? 'bg-emergency-600' : 'bg-charcoal-800/20'
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                    contact.permissions.sosAlerts ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ADD CONTACT MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-charcoal-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-cream-card p-6 sm:p-8 rounded-3xl border border-plum-900/20 shadow-2xl max-w-md w-full space-y-6"
          >
            <div className="flex items-center justify-between border-b border-plum-900/10 pb-4">
              <h3 className="font-sans font-extrabold text-xl text-plum-950">Add Trusted Contact</h3>
              <button onClick={() => setShowAddModal(false)} className="text-charcoal-800/60 font-bold">✕</button>
            </div>

            <form onSubmit={handleAddContact} className="space-y-4 text-sm font-semibold text-charcoal-900">
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal-800/70 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Ananya Sen"
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-plum-900/20 focus:outline-none focus:ring-2 focus:ring-plum-800"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal-800/70 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-plum-900/20 focus:outline-none focus:ring-2 focus:ring-plum-800"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal-800/70 mb-1">Relationship</label>
                <select
                  value={newRelation}
                  onChange={(e) => setNewRelation(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-cream-50 border border-plum-900/20 focus:outline-none focus:ring-2 focus:ring-plum-800 font-semibold"
                >
                  <option value="Family">Family</option>
                  <option value="Flatmate">Flatmate</option>
                  <option value="Friend">Best Friend</option>
                  <option value="Partner">Partner</option>
                  <option value="Colleague">Colleague</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <ShieldButton variant="ghost" onClick={() => setShowAddModal(false)}>Cancel</ShieldButton>
                <ShieldButton variant="primary" type="submit">Save Contact</ShieldButton>
              </div>
            </form>
          </motion.div>
        </div>
      )}

    </div>
  );
};
