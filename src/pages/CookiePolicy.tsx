import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Política de Cookies</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">O que são Cookies?</h2>
            <p className="text-gray-300">
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo 
              quando você visita um site. Eles nos ajudam a melhorar sua experiência.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Como Usamos Cookies</h2>
            <p className="text-gray-300">
              Usamos cookies para lembrar suas preferências, manter você logado e 
              analisar como nosso site é usado.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Tipos de Cookies</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Cookies essenciais: Necessários para o funcionamento do site</li>
              <li>• Cookies de preferência: Lembram suas configurações</li>
              <li>• Cookies analíticos: Nos ajudam a entender como você usa o site</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Gerenciar Cookies</h2>
            <p className="text-gray-300">
              Você pode controlar e/ou excluir cookies conforme desejar através das 
              configurações do seu navegador.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
