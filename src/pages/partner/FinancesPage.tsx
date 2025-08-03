import React, { useState } from 'react';

const PartnerFinancesPage: React.FC = () => {
  const [earnings] = useState([
    {
      id: '1',
      date: '2024-01-30',
      client: 'João Silva',
      amount: 150,
      commission: 15,
      net: 135,
      status: 'paid',
    },
    {
      id: '2',
      date: '2024-01-31',
      client: 'Maria Santos',
      amount: 120,
      commission: 12,
      net: 108,
      status: 'pending',
    },
  ]);

  const totalEarnings = earnings.reduce((sum, earning) => sum + earning.net, 0);
  const pendingEarnings = earnings.filter(e => e.status === 'pending').reduce((sum, earning) => sum + earning.net, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Finanças</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Total Ganho</h3>
          <p className="text-2xl font-bold text-green-400 mt-2">€{totalEarnings}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Pendente</h3>
          <p className="text-2xl font-bold text-yellow-400 mt-2">€{pendingEarnings}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400">Este Mês</h3>
          <p className="text-2xl font-bold text-white mt-2">€{totalEarnings}</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Histórico de Ganhos</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Data
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Valor Bruto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Comissão
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Valor Líquido
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {earnings.map((earning) => (
              <tr key={earning.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{earning.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{earning.client}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">€{earning.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">€{earning.commission}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-green-400">€{earning.net}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    earning.status === 'paid' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {earning.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnerFinancesPage;
