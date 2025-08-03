import React from 'react';

const Security: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Segurança</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Criptografia de Dados</h2>
            <p className="text-gray-300">
              Todos os dados são criptografados em trânsito e em repouso usando algoritmos 
              de criptografia AES-256. Suas informações pessoais estão sempre protegidas.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Verificação de Identidade</h2>
            <p className="text-gray-300">
              Processo rigoroso de verificação que inclui documentos oficiais, verificação 
              facial e validação de informações pessoais.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Monitoramento 24/7</h2>
            <p className="text-gray-300">
              Nossa equipe de segurança monitora a plataforma continuamente para detectar 
              e prevenir atividades suspeitas.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Conformidade Legal</h2>
            <p className="text-gray-300">
              Estamos em total conformidade com GDPR, LGPD e outras regulamentações 
              de proteção de dados aplicáveis.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Relatório de Segurança</h2>
            <p className="text-gray-300">
              Qualquer problema de segurança pode ser reportado diretamente à nossa 
              equipe através do canal seguro de comunicação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
