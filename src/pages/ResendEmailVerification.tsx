import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResendEmailVerification: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-lg text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h1 className="text-2xl font-bold text-white mb-4">Email Enviado!</h1>
          <p className="text-gray-300 mb-6">
            Se o email estiver registrado em nosso sistema, você receberá 
            um novo link de verificação em breve.
          </p>
          <Link
            to="/login"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors block text-center"
          >
            Voltar ao Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-lg">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Reenviar Verificação</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              placeholder="Digite seu email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Reenviar Email de Verificação
          </button>
        </form>

        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-green-400 hover:text-green-300 text-sm"
          >
            Voltar ao Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResendEmailVerification;
