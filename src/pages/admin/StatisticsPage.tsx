import React from 'react';

const StatisticsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Estatísticas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Usuários Ativos</h3>
          <p className="text-2xl font-bold text-white mt-2">1,234</p>
          <p className="text-sm text-green-400 mt-1">+12% este mês</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Parceiros Ativos</h3>
          <p className="text-2xl font-bold text-white mt-2">89</p>
          <p className="text-sm text-green-400 mt-1">+5% este mês</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Agendamentos</h3>
          <p className="text-2xl font-bold text-white mt-2">456</p>
          <p className="text-sm text-green-400 mt-1">+18% este mês</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Receita</h3>
          <p className="text-2xl font-bold text-white mt-2">€12,345</p>
          <p className="text-sm text-green-400 mt-1">+22% este mês</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Crescimento Mensal</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            [Gráfico de crescimento seria implementado aqui]
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Top Parceiros</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Sofia Costa</span>
              <span className="text-green-400">€2,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Ana Ferreira</span>
              <span className="text-green-400">€1,890</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Carla Mendes</span>
              <span className="text-green-400">€1,560</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
