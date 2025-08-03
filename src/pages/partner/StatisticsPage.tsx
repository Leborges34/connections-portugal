import React from 'react';

const PartnerStatisticsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Estatísticas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Total de Agendamentos</h3>
          <p className="text-2xl font-bold text-white mt-2">156</p>
          <p className="text-sm text-green-400 mt-1">+12% este mês</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Avaliação Média</h3>
          <p className="text-2xl font-bold text-white mt-2">4.8</p>
          <p className="text-sm text-green-400 mt-1">★★★★★</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Taxa de Aceitação</h3>
          <p className="text-2xl font-bold text-white mt-2">92%</p>
          <p className="text-sm text-green-400 mt-1">+3% este mês</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Clientes Recorrentes</h3>
          <p className="text-2xl font-bold text-white mt-2">34</p>
          <p className="text-sm text-green-400 mt-1">+8% este mês</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Agendamentos por Mês</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            [Gráfico de agendamentos seria implementado aqui]
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Avaliações Recentes</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-700 rounded">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">João Silva</span>
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm text-gray-300">Excelente profissional, muito atenciosa.</p>
            </div>
            <div className="p-3 bg-gray-700 rounded">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">Maria Santos</span>
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm text-gray-300">Serviço impecável, recomendo!</p>
            </div>
            <div className="p-3 bg-gray-700 rounded">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">Pedro Costa</span>
                <span className="text-yellow-400">★★★★☆</span>
              </div>
              <p className="text-sm text-gray-300">Muito boa experiência.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerStatisticsPage;
