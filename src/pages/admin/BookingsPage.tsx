import React, { useState } from 'react';

const BookingsPage: React.FC = () => {
  const [bookings] = useState([
    {
      id: '1',
      clientName: 'João Silva',
      partnerName: 'Sofia Costa',
      date: '2024-02-01',
      time: '14:00',
      status: 'confirmed',
      amount: 150,
    },
    {
      id: '2',
      clientName: 'Maria Santos',
      partnerName: 'Ana Ferreira',
      date: '2024-02-02',
      time: '16:00',
      status: 'pending',
      amount: 120,
    },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Gerenciar Agendamentos</h1>
      
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Buscar por cliente..."
            className="p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
          />
          <input
            type="date"
            className="p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
          />
          <select className="p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none">
            <option value="">Todos os status</option>
            <option value="pending">Pendente</option>
            <option value="confirmed">Confirmado</option>
            <option value="completed">Concluído</option>
            <option value="cancelled">Cancelado</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Parceiro
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Data/Hora
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Valor
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
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{booking.clientName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{booking.partnerName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{booking.date} {booking.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">€{booking.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-400 hover:text-blue-300 mr-3">
                    Ver Detalhes
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Cancelar
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

export default BookingsPage;
