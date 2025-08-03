import React from 'react';

const AdminDashboard: React.FC = () => {
  const stats = [
    { name: 'Total de Usuários', value: '1,234' },
    { name: 'Parceiros Ativos', value: '89' },
    { name: 'Agendamentos Hoje', value: '23' },
    { name: 'Receita Mensal', value: '€12,345' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard Administrativo</h1>
      
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
          <h2 className="text-xl font-semibold text-white mb-4">Atividade Recente</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Novo usuário registrado</span>
              <span className="text-sm text-gray-500">2 min atrás</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Agendamento confirmado</span>
              <span className="text-sm text-gray-500">5 min atrás</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Parceiro aprovado</span>
              <span className="text-sm text-gray-500">10 min atrás</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Pendências</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Aprovações pendentes</span>
              <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Relatórios pendentes</span>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Tickets de suporte</span>
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
