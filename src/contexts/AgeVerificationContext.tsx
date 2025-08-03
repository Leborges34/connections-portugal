import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AgeVerificationContextType {
  isVerified: boolean;
  setIsVerified: (verified: boolean) => void;
}

const AgeVerificationContext = createContext<AgeVerificationContextType | undefined>(undefined);

export const useAgeVerification = () => {
  const context = useContext(AgeVerificationContext);
  if (context === undefined) {
    throw new Error('useAgeVerification must be used within an AgeVerificationProvider');
  }
  return context;
};

interface AgeVerificationProviderProps {
  children: ReactNode;
}

export const AgeVerificationProvider: React.FC<AgeVerificationProviderProps> = ({ children }) => {
  const [isVerified, setIsVerified] = useState(() => {
    return localStorage.getItem('ageVerified') === 'true';
  });

  const setVerified = (verified: boolean) => {
    setIsVerified(verified);
    localStorage.setItem('ageVerified', verified.toString());
  };

  return (
    <AgeVerificationContext.Provider value={{ isVerified, setIsVerified: setVerified }}>
      {children}
    </AgeVerificationContext.Provider>
  );
};
