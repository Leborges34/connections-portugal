import React, { useState } from 'react';

const PartnersPage: React.FC = () => {
  const [partners] = useState([
    {
      id: '1',
      name: 'Sofia Costa',
      email: 'sofia@example.com',
      location: 'Lisboa',
      status: 'approved',
      registrationDate: '2024-01-10',
    },
    {
      id: '2',
      name: 'Ana Ferreira',
      email: 'ana@example.com',
      location: 'Porto',
      status: 'pending',
      registrationDate: '2024-01-25',
    },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Gerenciar Parceiros</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar parceiros..."
          className="w-full max-w-md p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
        />
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Parceiro
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Localização
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {partners.map((partner) => (
              <tr key={partner.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{partner.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{partner.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{partner.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    partner.status === 'approved' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {partner.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-green-400 hover:text-green-300 mr-3">
                    Ver Perfil
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 mr-3">
                    Aprovar
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Rejeitar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnersPage;
