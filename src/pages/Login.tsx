import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await signIn(formData.email, formData.password);
      if (success) {
        navigate('/showcase');
      } else {
        setError('Email ou senha inválidos');
      }
    } catch (error) {
      setError('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
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

          {error && (
            <div className="text-red-400 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm mb-4">
            Contas de demonstração:
          </p>
          <div className="text-xs text-gray-500 space-y-1">
            <div>Admin: admin@connections.com / admin123</div>
            <div>Usuário: demo@user.com / demo123</div>
            <div>Parceiro: demo@partner.com / demo123</div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Não tem uma conta?{' '}
            <button 
              onClick={() => navigate('/profile-selection')}
              className="text-green-400 hover:text-green-300"
            >
              Criar Conta
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
