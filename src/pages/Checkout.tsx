import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const partnerId = searchParams.get('partnerId');
  
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    duration: '1',
    location: '',
    notes: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookingInfo: {
            partnerId,
            bookingDate: `${bookingData.date} ${bookingData.time}`,
            duration: bookingData.duration,
            location: bookingData.location,
            notes: bookingData.notes,
            totalAmount: 150 * parseInt(bookingData.duration),
          },
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Erro ao processar pagamento');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Finalizar Agendamento</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Data</label>
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Hora</label>
              <input
                type="time"
                name="time"
                value={bookingData.time}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white mb-2">Duração (horas)</label>
            <select
              name="duration"
              value={bookingData.duration}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              required
            >
              <option value="1">1 hora</option>
              <option value="2">2 horas</option>
              <option value="3">3 horas</option>
              <option value="4">4 horas</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-2">Local</label>
            <input
              type="text"
              name="location"
              value={bookingData.location}
              onChange={handleChange}
              placeholder="Endereço ou local de encontro"
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Observações (opcional)</label>
            <textarea
              name="notes"
              value={bookingData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              placeholder="Instruções especiais ou preferências..."
            />
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center text-white">
              <span>Total:</span>
              <span className="text-xl font-bold text-green-400">
                €{150 * parseInt(bookingData.duration || '1')}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            {isProcessing ? 'Processando...' : 'Pagar e Confirmar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
