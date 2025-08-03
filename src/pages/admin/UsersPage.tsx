import React from 'react';

const UsersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-white mb-8">Gestão de Usuários</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Lista de Usuários</h2>
          <p className="text-gray-300">
            Gerencie todos os usuários registrados na plataforma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
