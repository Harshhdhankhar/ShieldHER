export type AppStateMode = 'landing' | 'app';

export type ContextualState = 
  | 'idle'                // Normal home screen state
  | 'journey_active'      // Guardian Mode actively monitoring journey
  | 'checkin_requested'   // Prompting user "Everything okay?"
  | 'route_deviation'     // User moved away from planned route
  | 'sos_active';         // Emergency SOS activated

export type SafetyCategory = 'police' | 'hospital' | 'metro' | 'pharmacy' | 'safe_haven' | 'business_247';

export interface SafePlace {
  id: string;
  name: string;
  category: SafetyCategory;
  address: string;
  distance: string; // e.g. "0.3 km"
  isOpen247: boolean;
  phone?: string;
  coordinates: { x: number; y: number; lat: number; lng: number };
  verifiedBadge: boolean;
  amenities: string[];
}

export interface VerifiedResponder {
  id: string;
  name: string;
  role: string;
  avatar: string;
  distance: string;
  rating: number;
  completedTraining: boolean;
  identityVerified: boolean;
  coordinates: { x: number; y: number };
  available: boolean;
}

export interface CommunityCluster {
  id: string;
  areaName: string;
  memberCount: number;
  responderCount: number;
  radiusKm: number;
  coordinates: { x: number; y: number };
}

export interface IncidentReport {
  id: string;
  title: string;
  type: 'harassment' | 'poor_lighting' | 'unsafe_street' | 'suspicious' | 'transport_issue' | 'other';
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
  locationName: string;
  coordinates: { x: number; y: number };
  description: string;
  upvotes: number;
  isVerifiedOfficial: boolean;
  isAnonymous: boolean;
}

export interface SafetyContact {
  id: string;
  name: string;
  relationship: string;
  avatar: string;
  phone: string;
  permissions: {
    journeyUpdates: boolean;
    missedCheckins: boolean;
    sosAlerts: boolean;
    liveLocationSharing: boolean;
  };
  status: 'active' | 'pending' | 'offline';
}

export interface RouteOption {
  id: string;
  title: 'FASTEST' | 'RECOMMENDED' | 'SAFEST';
  durationMinutes: number;
  distanceKm: number;
  safetyScore: number; // 0-100
  reasonText: string;
  highlights: string[];
  coordinatesPath: Array<{ x: number; y: number }>;
}

export interface ActiveJourney {
  destination: string;
  origin: string;
  etaMinutes: number;
  elapsedMinutes: number;
  totalMinutes: number;
  selectedRoute: RouteOption;
  safetyCircleNotified: SafetyContact[];
  checkInFrequencyMinutes: number;
  lastCheckInTime: string;
  nextCheckInInSeconds: number;
  status: 'on_track' | 'deviated' | 'missed_checkin' | 'emergency';
}

export interface EvidenceRecord {
  id: string;
  timestamp: string;
  type: 'audio' | 'location_snapshot' | 'incident_photo' | 'journey_log';
  title: string;
  fileSize?: string;
  duration?: string;
  encryptionStatus: 'Encrypted & Vaulted' | 'Syncing...';
}
