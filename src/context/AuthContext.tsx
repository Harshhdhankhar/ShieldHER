'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface User {
  name: string;
  email: string;
  phone?: string;
  safetyCircleCount?: number;
  preferences?: {
    journeyCheckins: boolean;
    routeDeviationAlerts: boolean;
    circleNotifications: boolean;
    communityParticipation: boolean;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isOnboarded: boolean;
  login: (email: string, name?: string) => void;
  signup: (name: string, email: string) => void;
  completeOnboarding: (userData: Partial<User>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_STORAGE_KEY = 'shieldher_user';
const ONBOARDED_STORAGE_KEY = 'shieldher_onboarded';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(USER_STORAGE_KEY);
      const storedOnboarded = localStorage.getItem(ONBOARDED_STORAGE_KEY);

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          const demoUser = { name: 'Harsh', email: 'harsh@shieldher.app' };
          setUser(demoUser);
          localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(demoUser));
        }
      } else {
        // Provide default demo user for seamless previewing
        const demoUser = { name: 'Harsh', email: 'harsh@shieldher.app' };
        setUser(demoUser);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(demoUser));
      }

      if (storedOnboarded === 'true') {
        setIsOnboarded(true);
      } else {
        setIsOnboarded(true); // Default to onboarded so user can access everything, but allow testing onboarding
        localStorage.setItem(ONBOARDED_STORAGE_KEY, 'true');
      }
    } catch (e) {
      console.error('LocalStorage error:', e);
    } finally {
      setIsInitialized(true);
    }

  }, []);

  const login = (email: string, name = 'Harsh') => {
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
    
    // If user has completed onboarding previously, go straight to app
    const hasOnboarded = localStorage.getItem(ONBOARDED_STORAGE_KEY) === 'true';
    if (hasOnboarded) {
      router.push('/app');
    } else {
      router.push('/onboarding');
    }
  };

  const signup = (name: string, email: string) => {
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
    localStorage.setItem(ONBOARDED_STORAGE_KEY, 'false');
    setIsOnboarded(false);
    router.push('/onboarding');
  };

  const completeOnboarding = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
    }
    setIsOnboarded(true);
    localStorage.setItem(ONBOARDED_STORAGE_KEY, 'true');
    router.push('/app');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
    router.push('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isOnboarded,
        login,
        signup,
        completeOnboarding,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
