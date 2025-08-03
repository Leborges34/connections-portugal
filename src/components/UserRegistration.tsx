import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '@clerk/clerk-react';

const UserRegistration: React.FC = () => {
  const navigate = useNavigate();
  const { signUp, isLoaded } = useSignUp();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoaded) return;

    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      await signUp.create({
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.email,
        password: formData.password,
      });

      navigate('/user-complete-profile');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Registro de Cliente</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Nome</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Sobrenome</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Senha</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Confirmar Senha</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
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

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Criar Conta
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Já tem uma conta?{' '}
            <button 
              onClick={() => navigate('/login')}
              className="text-green-400 hover:text-green-300"
            >
              Fazer Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
