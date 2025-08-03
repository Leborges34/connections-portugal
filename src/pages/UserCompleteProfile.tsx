import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const UserCompleteProfile: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.firstName || '',
    age: '',
    location: '',
    interests: '',
    bio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/showcase');
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
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Complete seu Perfil</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Nome</label>
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
            <label className="block text-white mb-2">Interesses</label>
            <input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="Ex: música, viagens, gastronomia..."
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
              placeholder="Conte um pouco sobre você..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Salvar Perfil
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserCompleteProfile;
