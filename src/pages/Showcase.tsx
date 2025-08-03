import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Partner {
  id: string;
  name: string;
  age: number;
  location: string;
  services: string[];
  rate: number;
  rating: number;
  image: string;
  verified: boolean;
}

const mockPartners: Partner[] = [
  {
    id: '1',
    name: 'Sofia',
    age: 25,
    location: 'Lisboa',
    services: ['Acompanhamento', 'Massagem'],
    rate: 150,
    rating: 4.8,
    image: '/api/placeholder/300/400',
    verified: true,
  },
  {
    id: '2',
    name: 'Ana',
    age: 28,
    location: 'Porto',
    services: ['Terapia', 'Acompanhamento'],
    rate: 120,
    rating: 4.9,
    image: '/api/placeholder/300/400',
    verified: true,
  },
];

const Showcase: React.FC = () => {
  const [filters, setFilters] = useState({
    location: '',
    service: '',
    maxRate: '',
  });

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Explorar Perfis</h1>
        
        <div className="mb-8 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Filtros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-white mb-2">Localização</label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                placeholder="Ex: Lisboa"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Serviço</label>
              <select
                value={filters.service}
                onChange={(e) => setFilters({ ...filters, service: e.target.value })}
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              >
                <option value="">Todos os serviços</option>
                <option value="acompanhamento">Acompanhamento</option>
                <option value="massagem">Massagem</option>
                <option value="terapia">Terapia</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Tarifa máxima (€/h)</label>
              <input
                type="number"
                value={filters.maxRate}
                onChange={(e) => setFilters({ ...filters, maxRate: e.target.value })}
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                placeholder="200"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPartners.map((partner) => (
            <div key={partner.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                  {partner.verified && (
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Verificado</span>
                  )}
                </div>
                <p className="text-gray-300 mb-2">{partner.age} anos • {partner.location}</p>
                <p className="text-gray-300 mb-3">{partner.services.join(', ')}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 font-semibold">€{partner.rate}/h</span>
                  <span className="text-yellow-400">★ {partner.rating}</span>
                </div>
                <Link
                  to={`/checkout?partnerId=${partner.id}`}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors block text-center"
                >
                  Agendar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
