import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Sobre Nós</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Nossa Missão</h2>
            <p className="text-gray-300">
              Conectar pessoas de forma segura e discreta, proporcionando experiências 
              autênticas e respeitosas para todos os nossos usuários.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Nossa História</h2>
            <p className="text-gray-300">
              Fundada em 2023, nossa plataforma nasceu da necessidade de criar um espaço 
              seguro e verificado para conexões íntimas e profissionais.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Nossos Valores</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Segurança e verificação rigorosa</li>
              <li>• Discrição e privacidade total</li>
              <li>• Respeito mútuo entre usuários</li>
              <li>• Transparência em todos os processos</li>
              <li>• Suporte 24/7 para nossa comunidade</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Entre em Contato</h2>
            <p className="text-gray-300">
              Tem dúvidas ou sugestões? Nossa equipe está sempre disponível para ajudar. 
              Entre em contato através do nosso formulário de contato.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
