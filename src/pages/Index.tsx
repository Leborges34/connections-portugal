import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Index: React.FC = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Connections
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Conexões discretas com pessoas reais
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Encontros verificados, seguros e personalizados para experiências inesquecíveis
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {!isSignedIn ? (
              <>
                <Link
                  to="/login"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-md transition-colors text-lg"
                >
                  Começar Agora
                </Link>
                <Link
                  to="/about"
                  className="border border-gray-600 hover:border-gray-500 text-white font-medium py-4 px-8 rounded-md transition-colors text-lg"
                >
                  Saiba Mais
                </Link>
              </>
            ) : (
              <Link
                to="/showcase"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-md transition-colors text-lg"
              >
                Explorar Perfis
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">50k+</div>
            <div className="text-gray-300">Usuários</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">15k+</div>
            <div className="text-gray-300">Encontros</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-gray-300">Satisfação</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Verificação Rigorosa</h3>
            <p className="text-gray-300">Todos os perfis são verificados para garantir autenticidade e segurança.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Discrição Total</h3>
            <p className="text-gray-300">Sua privacidade é nossa prioridade. Conexões discretas e seguras.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Suporte 24/7</h3>
            <p className="text-gray-300">Nossa equipe está sempre disponível para ajudar você.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
