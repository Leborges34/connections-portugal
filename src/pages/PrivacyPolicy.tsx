import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">1. Informações que Coletamos</h2>
            <p className="text-gray-300">
              Coletamos informações que você nos fornece diretamente, como quando cria uma conta, 
              completa seu perfil ou entra em contato conosco.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">2. Como Usamos suas Informações</h2>
            <p className="text-gray-300">
              Usamos suas informações para fornecer, manter e melhorar nossos serviços, 
              processar transações e comunicar com você.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">3. Compartilhamento de Informações</h2>
            <p className="text-gray-300">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
              exceto conforme descrito nesta política.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">4. Segurança</h2>
            <p className="text-gray-300">
              Implementamos medidas de segurança técnicas e organizacionais para proteger 
              suas informações pessoais contra acesso não autorizado.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">5. Seus Direitos</h2>
            <p className="text-gray-300">
              Você tem o direito de acessar, atualizar ou excluir suas informações pessoais. 
              Entre em contato conosco para exercer esses direitos.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">6. Contato</h2>
            <p className="text-gray-300">
              Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco 
              através do nosso formulário de contato.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
