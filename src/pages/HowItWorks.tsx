import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Como Funciona</h1>
        
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <h2 className="text-xl font-semibold text-white">Crie sua Conta</h2>
            </div>
            <p className="text-gray-300">
              Registre-se com seu email e complete seu perfil. Para parceiros, 
              é necessário enviar documentos para verificação.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <h2 className="text-xl font-semibold text-white">Explore Perfis</h2>
            </div>
            <p className="text-gray-300">
              Navegue pelos perfis verificados, use filtros para encontrar 
              exatamente o que procura por localização, serviços e avaliações.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <h2 className="text-xl font-semibold text-white">Faça um Agendamento</h2>
            </div>
            <p className="text-gray-300">
              Escolha data, hora e local. Faça o pagamento seguro através da nossa 
              plataforma integrada com Stripe.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                4
              </div>
              <h2 className="text-xl font-semibold text-white">Conecte-se</h2>
            </div>
            <p className="text-gray-300">
              Use nosso sistema de mensagens para coordenar detalhes. 
              Desfrute de sua experiência com total discrição e segurança.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                5
              </div>
              <h2 className="text-xl font-semibold text-white">Avalie a Experiência</h2>
            </div>
            <p className="text-gray-300">
              Após o encontro, deixe uma avaliação para ajudar outros usuários 
              e manter a qualidade da nossa comunidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
