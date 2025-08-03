import React from 'react';

const Benefits: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Benefícios</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">🔒 Segurança Total</h2>
            <p className="text-gray-300">
              Todos os perfis são verificados rigorosamente. Utilizamos criptografia de ponta 
              e seguimos as melhores práticas de segurança.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">🤐 Discrição Absoluta</h2>
            <p className="text-gray-300">
              Sua privacidade é nossa prioridade. Todas as interações são confidenciais 
              e protegidas por nossos protocolos de segurança.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">✅ Perfis Verificados</h2>
            <p className="text-gray-300">
              Cada parceiro passa por um processo rigoroso de verificação de identidade 
              e documentação antes de ser aprovado.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">💳 Pagamentos Seguros</h2>
            <p className="text-gray-300">
              Processamento de pagamentos através do Stripe com criptografia bancária. 
              Seus dados financeiros estão sempre protegidos.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">📱 Suporte 24/7</h2>
            <p className="text-gray-300">
              Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana 
              para ajudar com qualquer questão.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">⭐ Avaliações Reais</h2>
            <p className="text-gray-300">
              Sistema de avaliações transparente que ajuda você a tomar decisões informadas 
              baseadas em experiências reais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
