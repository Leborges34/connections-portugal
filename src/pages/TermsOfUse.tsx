import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Termos de Uso</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-300">
              Ao acessar e usar este site, você aceita e concorda em ficar vinculado aos 
              termos e condições deste acordo.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">2. Uso do Serviço</h2>
            <p className="text-gray-300">
              Você deve ter pelo menos 18 anos para usar este serviço. Você é responsável 
              por manter a confidencialidade de sua conta.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">3. Conduta do Usuário</h2>
            <p className="text-gray-300">
              Você concorda em não usar o serviço para qualquer propósito ilegal ou 
              não autorizado. Você não deve violar as leis em sua jurisdição.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">4. Privacidade</h2>
            <p className="text-gray-300">
              Sua privacidade é importante para nós. Consulte nossa Política de Privacidade 
              para informações sobre como coletamos e usamos seus dados.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">5. Modificações</h2>
            <p className="text-gray-300">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              As alterações entrarão em vigor imediatamente após a publicação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
