import React, { useState } from 'react';
import { useAgeVerification } from '@/contexts/AgeVerificationContext';

interface AgeVerificationWrapperProps {
  children: React.ReactNode;
}

const AgeVerificationWrapper: React.FC<AgeVerificationWrapperProps> = ({ children }) => {
  const { isVerified, setIsVerified } = useAgeVerification();

  if (isVerified) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-gray-900 rounded-lg text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Verificação de Idade</h1>
        <p className="text-gray-300 mb-6">
          Este site contém conteúdo para adultos. Você deve ter pelo menos 18 anos para continuar.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => setIsVerified(true)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Tenho 18+ anos
          </button>
          <button
            onClick={() => window.location.href = 'https://www.google.com'}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Sou menor de 18 anos
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationWrapper;
