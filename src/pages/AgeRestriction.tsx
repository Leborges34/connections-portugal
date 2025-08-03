import React from 'react';

const AgeRestriction: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-gray-900 rounded-lg text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Acesso Restrito</h1>
        <p className="text-gray-300 mb-6">
          Este site é destinado apenas para maiores de 18 anos. 
          Você foi redirecionado porque não atende aos requisitos de idade.
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Se você chegou aqui por engano, pode fechar esta página.
        </p>
        <button
          onClick={() => window.location.href = 'https://www.google.com'}
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
        >
          Sair do Site
        </button>
      </div>
    </div>
  );
};

export default AgeRestriction;
