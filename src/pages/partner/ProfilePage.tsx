import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Perfil do Parceiro</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Informações do Perfil</h2>
          <p className="text-gray-300">
            Gerencie suas informações de perfil profissional aqui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
