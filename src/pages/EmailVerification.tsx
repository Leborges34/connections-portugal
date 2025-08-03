import React from 'react';
import { Link } from 'react-router-dom';

const EmailVerification: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-lg text-center">
        <div className="text-green-500 text-6xl mb-4">📧</div>
        <h1 className="text-2xl font-bold text-white mb-4">Verifique seu Email</h1>
        <p className="text-gray-300 mb-6">
          Enviamos um link de verificação para seu email. 
          Clique no link para ativar sua conta.
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Não recebeu o email? Verifique sua pasta de spam ou solicite um novo link.
        </p>
        <div className="space-y-3">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Reenviar Email
          </button>
          <Link
            to="/login"
            className="w-full border border-gray-600 hover:border-gray-500 text-white font-medium py-3 px-6 rounded-md transition-colors block"
          >
            Voltar ao Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
