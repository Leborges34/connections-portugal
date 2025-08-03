import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const PartnerCompleteProfile: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.firstName || '',
    age: '',
    location: '',
    services: '',
    rates: '',
    bio: '',
    availability: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/partner/awaiting-approval');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Complete seu Perfil Profissional</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Nome Profissional</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Idade</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="18"
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Localização</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Serviços Oferecidos</label>
            <textarea
              name="services"
              value={formData.services}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              placeholder="Descreva os serviços que oferece..."
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Tarifas (€/hora)</label>
            <input
              type="number"
              name="rates"
              value={formData.rates}
              onChange={handleChange}
              min="0"
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Disponibilidade</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              placeholder="Ex: Segunda a Sexta, 9h-18h"
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Sobre você</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              placeholder="Conte um pouco sobre você e sua experiência..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Enviar para Aprovação
          </button>
        </form>
      </div>
    </div>
  );
};

export default PartnerCompleteProfile;
