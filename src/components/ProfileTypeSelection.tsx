import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileTypeSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Escolha seu Tipo de Perfil</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
               onClick={() => navigate('/user-registration')}>
            <h2 className="text-xl font-semibold text-white mb-4">Cliente</h2>
            <p className="text-gray-300 mb-4">
              Procuro por serviços profissionais de acompanhamento, massagem ou terapia.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Acesso a perfis verificados</li>
              <li>• Sistema de agendamento</li>
              <li>• Pagamentos seguros</li>
              <li>• Avaliações e feedback</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
               onClick={() => navigate('/partner-registration')}>
            <h2 className="text-xl font-semibold text-white mb-4">Parceiro Profissional</h2>
            <p className="text-gray-300 mb-4">
              Ofereço serviços profissionais de acompanhamento, massagem ou terapia.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Perfil profissional verificado</li>
              <li>• Gestão de agenda</li>
              <li>• Recebimento de pagamentos</li>
              <li>• Dashboard de estatísticas</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
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

export default ProfileTypeSelection;
