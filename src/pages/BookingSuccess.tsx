import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const BookingSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-lg text-center">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-2xl font-bold text-white mb-4">Agendamento Confirmado!</h1>
        <p className="text-gray-300 mb-6">
          Seu pagamento foi processado com sucesso. Você receberá um email de confirmação em breve.
        </p>
        {sessionId && (
          <p className="text-sm text-gray-400 mb-6">
            ID da sessão: {sessionId}
          </p>
        )}
        <div className="space-y-3">
          <Link
            to="/showcase"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors block"
          >
            Explorar Mais Perfis
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

export default BookingSuccess;
