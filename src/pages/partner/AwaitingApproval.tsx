import React from 'react';
import { Link } from 'react-router-dom';

const AwaitingApproval: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-lg text-center">
        <div className="text-yellow-500 text-6xl mb-4">⏳</div>
        <h1 className="text-2xl font-bold text-white mb-4">Aguardando Aprovação</h1>
        <p className="text-gray-300 mb-6">
          Seu perfil de parceiro foi enviado para análise. Nossa equipe 
          revisará suas informações e documentos em até 48 horas.
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Você receberá um email assim que sua conta for aprovada.
        </p>
        <div className="space-y-3">
          <Link
            to="/partner/profile"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors block"
          >
            Editar Perfil
          </Link>
          <Link
            to="/"
            className="w-full border border-gray-600 hover:border-gray-500 text-white font-medium py-3 px-6 rounded-md transition-colors block"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AwaitingApproval;
