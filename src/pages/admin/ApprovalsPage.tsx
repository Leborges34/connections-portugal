import React, { useState } from 'react';

const ApprovalsPage: React.FC = () => {
  const [pendingApprovals] = useState([
    {
      id: '1',
      name: 'Carla Mendes',
      email: 'carla@example.com',
      type: 'partner',
      submittedDate: '2024-01-28',
      documents: ['ID', 'Certificate'],
    },
    {
      id: '2',
      name: 'Pedro Oliveira',
      email: 'pedro@example.com',
      type: 'partner',
      submittedDate: '2024-01-29',
      documents: ['ID'],
    },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Aprovações Pendentes</h1>
      
      <div className="space-y-6">
        {pendingApprovals.map((approval) => (
          <div key={approval.id} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{approval.name}</h3>
                <p className="text-gray-300">{approval.email}</p>
                <p className="text-sm text-gray-400">Submetido em: {approval.submittedDate}</p>
              </div>
              <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded">
                {approval.type}
              </span>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Documentos:</h4>
              <div className="flex space-x-2">
                {approval.documents.map((doc, index) => (
                  <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">
                Aprovar
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
                Rejeitar
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalsPage;
