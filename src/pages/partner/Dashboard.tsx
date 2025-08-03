import React from 'react';

const PartnerDashboard: React.FC = () => {
  const stats = [
    { name: 'Agendamentos Hoje', value: '3' },
    { name: 'Receita Mensal', value: '€2,450' },
    { name: 'Avaliação Média', value: '4.8' },
    { name: 'Total de Clientes', value: '45' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard do Parceiro</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-sm font-medium text-gray-400">{stat.name}</h3>
            <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Próximos Agendamentos</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
              <div>
                <p className="text-white font-medium">João Silva</p>
                <p className="text-sm text-gray-400">Hoje, 14:00</p>
              </div>
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Confirmado</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
              <div>
                <p className="text-white font-medium">Maria Santos</p>
                <p className="text-sm text-gray-400">Amanhã, 16:00</p>
              </div>
              <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded">Pendente</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Mensagens Recentes</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-700 rounded">
              <p className="text-white font-medium">João Silva</p>
              <p className="text-sm text-gray-400">Olá, gostaria de confirmar o horário...</p>
              <p className="text-xs text-gray-500 mt-1">2 min atrás</p>
            </div>
            <div className="p-3 bg-gray-700 rounded">
              <p className="text-white font-medium">Maria Santos</p>
              <p className="text-sm text-gray-400">Obrigada pelo excelente serviço!</p>
              <p className="text-xs text-gray-500 mt-1">1 hora atrás</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
