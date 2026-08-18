import { 
  SafePlace, 
  VerifiedResponder, 
  CommunityCluster, 
  IncidentReport, 
  SafetyContact, 
  RouteOption,
  EvidenceRecord 
} from '../types/safety';

export const MOCK_SAFE_PLACES: SafePlace[] = [
  {
    id: 'sp-1',
    name: 'Central Metro Safe Station',
    category: 'metro',
    address: 'Connaught Place Outer Circle',
    distance: '0.3 km',
    isOpen247: true,
    phone: '+91 11 2341 7910',
    coordinates: { x: 38, y: 42, lat: 28.6315, lng: 77.2167 },
    verifiedBadge: true,
    amenities: ['CCTV Monitored', 'Staffed Helpdesk', 'Well-Lit Entrance', 'Emergency Call Box']
  },
  {
    id: 'sp-2',
    name: 'St. Jude 24/7 Community Care Center',
    category: 'hospital',
    address: '14 Park Avenue',
    distance: '0.6 km',
    isOpen247: true,
    phone: '+91 11 4455 0100',
    coordinates: { x: 62, y: 28, lat: 28.6380, lng: 77.2250 },
    verifiedBadge: true,
    amenities: ['Security Personnel', '24/7 Triage Desk', 'First Aid', 'Safe Drop Zone']
  },
  {
    id: 'sp-3',
    name: 'The Daily Brew & Co (Verified Safe Haven)',
    category: 'business_247',
    address: '88 Market Promenade',
    distance: '0.4 km',
    isOpen247: true,
    phone: '+91 98112 34567',
    coordinates: { x: 45, y: 68, lat: 28.6250, lng: 77.2120 },
    verifiedBadge: true,
    amenities: ['Staff Safety Trained', 'Free Phone Charging', 'Indoor Waiting Area', 'ShieldHER Partner']
  },
  {
    id: 'sp-4',
    name: 'Civic District Police Station',
    category: 'police',
    address: '2 Barakhamba Road',
    distance: '0.9 km',
    isOpen247: true,
    phone: '112 / +91 11 2331 0000',
    coordinates: { x: 75, y: 72, lat: 28.6290, lng: 77.2310 },
    verifiedBadge: true,
    amenities: ['Official Law Enforcement', 'Women Assistance Desk', 'Direct Patrol Dispatch']
  },
  {
    id: 'sp-5',
    name: 'Apollo 24-Hour Express Pharmacy',
    category: 'pharmacy',
    address: '42 Janpath Lane',
    distance: '0.5 km',
    isOpen247: true,
    phone: '+91 11 2332 9988',
    coordinates: { x: 25, y: 58, lat: 28.6220, lng: 77.2180 },
    verifiedBadge: true,
    amenities: ['Staff On-Site', 'CCTV Covered', 'Emergency Supplies']
  }
];

export const MOCK_VERIFIED_RESPONDERS: VerifiedResponder[] = [
  {
    id: 'vr-1',
    name: 'Priya Sharma',
    role: 'Certified First Responder & Campus Patrol',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    distance: '250m away',
    rating: 4.95,
    completedTraining: true,
    identityVerified: true,
    coordinates: { x: 42, y: 35 },
    available: true
  },
  {
    id: 'vr-2',
    name: 'Aisha Malik',
    role: 'Community Safety Volunteer & Paramedic',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    distance: '400m away',
    rating: 5.0,
    completedTraining: true,
    identityVerified: true,
    coordinates: { x: 58, y: 52 },
    available: true
  },
  {
    id: 'vr-3',
    name: 'Captain Neha Verma',
    role: 'Off-duty Transit Warden',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=250',
    distance: '650m away',
    rating: 4.88,
    completedTraining: true,
    identityVerified: true,
    coordinates: { x: 28, y: 70 },
    available: true
  }
];

export const MOCK_COMMUNITY_CLUSTERS: CommunityCluster[] = [
  {
    id: 'cc-1',
    areaName: 'Market Street & Station Plaza',
    memberCount: 14,
    responderCount: 3,
    radiusKm: 0.5,
    coordinates: { x: 40, y: 45 }
  },
  {
    id: 'cc-2',
    areaName: 'University Quad & Library Lane',
    memberCount: 22,
    responderCount: 5,
    radiusKm: 0.8,
    coordinates: { x: 65, y: 30 }
  },
  {
    id: 'cc-3',
    areaName: 'Janpath Residential Belt',
    memberCount: 9,
    responderCount: 2,
    radiusKm: 0.6,
    coordinates: { x: 30, y: 65 }
  }
];

export const MOCK_INCIDENTS: IncidentReport[] = [
  {
    id: 'inc-1',
    title: 'Streetlight outage near Metro Exit 3',
    type: 'poor_lighting',
    severity: 'medium',
    timestamp: '22 mins ago',
    locationName: 'Metro Gate 3 Alleyway',
    coordinates: { x: 35, y: 38 },
    description: '3 consecutive overhead lights are out along the pedestrian walkway. Recommend taking main avenue path instead.',
    upvotes: 18,
    isVerifiedOfficial: false,
    isAnonymous: false
  },
  {
    id: 'inc-2',
    title: 'Construction blockage on East Sidewalk',
    type: 'unsafe_street',
    severity: 'low',
    timestamp: '1 hour ago',
    locationName: '12th Cross Street',
    coordinates: { x: 70, y: 48 },
    description: 'Debris blocking the sidewalk forces pedestrians onto the narrow main road. Divert via Park Street.',
    upvotes: 7,
    isVerifiedOfficial: true,
    isAnonymous: false
  }
];

export const MOCK_SAFETY_CIRCLE: SafetyContact[] = [
  {
    id: 'sc-1',
    name: 'Ananya (Mom)',
    relationship: 'Family',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    phone: '+91 98765 43210',
    permissions: {
      journeyUpdates: true,
      missedCheckins: true,
      sosAlerts: true,
      liveLocationSharing: true
    },
    status: 'active'
  },
  {
    id: 'sc-2',
    name: 'Riya Sen',
    relationship: 'Flatmate & Best Friend',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    phone: '+91 98111 22334',
    permissions: {
      journeyUpdates: true,
      missedCheckins: true,
      sosAlerts: true,
      liveLocationSharing: true
    },
    status: 'active'
  },
  {
    id: 'sc-3',
    name: 'Devika Ray',
    relationship: 'Colleague',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    phone: '+91 99001 88776',
    permissions: {
      journeyUpdates: false,
      missedCheckins: true,
      sosAlerts: true,
      liveLocationSharing: false
    },
    status: 'active'
  }
];

export const MOCK_ROUTES: RouteOption[] = [
  {
    id: 'route-rec',
    title: 'RECOMMENDED',
    durationMinutes: 21,
    distanceKm: 2.4,
    safetyScore: 96,
    reasonText: 'Recommended based on available safety signals: continuous streetlights, 3 verified safe places, and high community presence.',
    highlights: ['Well-lit main avenues', '24/7 Metro station along path', '14 ShieldHER members nearby', 'No reported incidents in last 48h'],
    coordinatesPath: [
      { x: 20, y: 80 },
      { x: 30, y: 65 },
      { x: 38, y: 42 },
      { x: 55, y: 35 },
      { x: 75, y: 25 }
    ]
  },
  {
    id: 'route-fast',
    title: 'FASTEST',
    durationMinutes: 18,
    distanceKm: 1.9,
    safetyScore: 78,
    reasonText: 'Shortest path via back roads. Slightly lower lighting rating after 9 PM near the underpass.',
    highlights: ['Saves 3 minutes', 'Fewer traffic intersections', 'Passes 1 pharmacy safe haven'],
    coordinatesPath: [
      { x: 20, y: 80 },
      { x: 35, y: 55 },
      { x: 50, y: 40 },
      { x: 75, y: 25 }
    ]
  },
  {
    id: 'route-safe',
    title: 'SAFEST',
    durationMinutes: 24,
    distanceKm: 2.8,
    safetyScore: 98,
    reasonText: 'Maximum visibility path following main commercial boulevard with active police patrol and open establishments.',
    highlights: ['100% wide commercial sidewalk', 'Directly passes Police Station', '5 verified responders along route', 'Continuous security coverage'],
    coordinatesPath: [
      { x: 20, y: 80 },
      { x: 25, y: 58 },
      { x: 45, y: 68 },
      { x: 75, y: 72 },
      { x: 75, y: 25 }
    ]
  }
];

export const MOCK_EVIDENCE: EvidenceRecord[] = [
  {
    id: 'ev-1',
    timestamp: 'Today, 21:14:02',
    type: 'audio',
    title: 'Ambient Audio Snapshot (Auto-triggered)',
    duration: '00:45 min',
    fileSize: '1.2 MB',
    encryptionStatus: 'Encrypted & Vaulted'
  },
  {
    id: 'ev-2',
    timestamp: 'Today, 21:10:00',
    type: 'location_snapshot',
    title: 'GPS Location Trace & Signal Check',
    fileSize: '45 KB',
    encryptionStatus: 'Encrypted & Vaulted'
  },
  {
    id: 'ev-3',
    timestamp: 'Yesterday, 19:42:15',
    type: 'journey_log',
    title: 'Guardian Mode Route History Log #492',
    fileSize: '180 KB',
    encryptionStatus: 'Encrypted & Vaulted'
  }
];
