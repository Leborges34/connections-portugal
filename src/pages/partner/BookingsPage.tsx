import React, { useState } from 'react';

const PartnerBookingsPage: React.FC = () => {
  const [bookings] = useState([
    {
      id: '1',
      clientName: 'João Silva',
      date: '2024-02-01',
      time: '14:00',
      duration: '2h',
      status: 'confirmed',
      amount: 300,
    },
    {
      id: '2',
      clientName: 'Maria Santos',
      date: '2024-02-02',
      time: '16:00',
      duration: '1h',
      status: 'pending',
      amount: 150,
    },
  ]);

  const updateBookingStatus = (bookingId: string, newStatus: string) => {
    console.log(`Updating booking ${bookingId} to ${newStatus}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Meus Agendamentos</h1>
      
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{booking.clientName}</h3>
                <p className="text-gray-300">{booking.date} às {booking.time}</p>
                <p className="text-gray-400">Duração: {booking.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-semibold text-lg">€{booking.amount}</p>
                <span className={`px-2 py-1 text-xs rounded ${
                  booking.status === 'confirmed' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-yellow-600 text-white'
                }`}>
                  {booking.status}
                </span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {booking.status === 'pending' && (
                <>
                  <button 
                    onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Confirmar
                  </button>
                  <button 
                    onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Cancelar
                  </button>
                </>
              )}
              {booking.status === 'confirmed' && (
                <button 
                  onClick={() => updateBookingStatus(booking.id, 'completed')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                >
                  Marcar como Concluído
                </button>
              )}
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm">
                Enviar Mensagem
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBookingsPage;
