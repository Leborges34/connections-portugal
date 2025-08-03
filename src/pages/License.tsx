import React from 'react';

const License: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Licença</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Licença de Uso</h2>
            <p className="text-gray-300">
              Este software é licenciado sob os termos da licença MIT. Você pode usar, 
              copiar, modificar e distribuir este software conforme os termos da licença.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Direitos Autorais</h2>
            <p className="text-gray-300">
              © 2024 Connections. Todos os direitos reservados. O conteúdo deste site 
              é protegido por direitos autorais e outras leis de propriedade intelectual.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Bibliotecas de Terceiros</h2>
            <p className="text-gray-300">
              Este projeto utiliza várias bibliotecas de código aberto. Consulte o arquivo 
              package.json para uma lista completa das dependências e suas respectivas licenças.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Isenção de Responsabilidade</h2>
            <p className="text-gray-300">
              Este software é fornecido "como está", sem garantias de qualquer tipo. 
              Os autores não se responsabilizam por quaisquer danos decorrentes do uso deste software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;
