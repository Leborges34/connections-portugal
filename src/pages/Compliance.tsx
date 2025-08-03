import React from 'react';

const Compliance: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Conformidade</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">GDPR - Regulamento Geral de Proteção de Dados</h2>
            <p className="text-gray-300">
              Estamos em total conformidade com o GDPR. Você tem o direito de acessar, 
              retificar, apagar e portar seus dados pessoais.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Verificação de Idade</h2>
            <p className="text-gray-300">
              Todos os usuários devem ter pelo menos 18 anos. Implementamos verificações 
              rigorosas de idade para garantir a conformidade legal.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Segurança de Dados</h2>
            <p className="text-gray-300">
              Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas 
              de segurança para proteger seus dados.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Moderação de Conteúdo</h2>
            <p className="text-gray-300">
              Todo conteúdo é moderado por nossa equipe especializada para garantir 
              um ambiente seguro e respeitoso.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Relatórios de Transparência</h2>
            <p className="text-gray-300">
              Publicamos relatórios regulares sobre nossas práticas de moderação e 
              conformidade com as regulamentações locais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
