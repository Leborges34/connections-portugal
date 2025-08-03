import React, { useState } from 'react';

const PartnerSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    bookingReminders: true,
    marketingEmails: false,
    profileVisibility: 'public',
    autoAcceptBookings: false,
  });

  const handleChange = (key: string, value: boolean | string) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings updated:', settings);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Configurações</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Notificações</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-gray-300">Notificações por Email</label>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-300">Notificações por SMS</label>
              <input
                type="checkbox"
                checked={settings.smsNotifications}
                onChange={(e) => handleChange('smsNotifications', e.target.checked)}
                className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-300">Lembretes de Agendamento</label>
              <input
                type="checkbox"
                checked={settings.bookingReminders}
                onChange={(e) => handleChange('bookingReminders', e.target.checked)}
                className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-300">Emails de Marketing</label>
              <input
                type="checkbox"
                checked={settings.marketingEmails}
                onChange={(e) => handleChange('marketingEmails', e.target.checked)}
                className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Privacidade</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Visibilidade do Perfil</label>
              <select
                value={settings.profileVisibility}
                onChange={(e) => handleChange('profileVisibility', e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
              >
                <option value="public">Público</option>
                <option value="private">Privado</option>
                <option value="verified-only">Apenas Usuários Verificados</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-300">Aceitar Agendamentos Automaticamente</label>
              <input
                type="checkbox"
                checked={settings.autoAcceptBookings}
                onChange={(e) => handleChange('autoAcceptBookings', e.target.checked)}
                className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Conta</h2>
          <div className="space-y-4">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Alterar Senha
            </button>
            <button
              type="button"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Baixar Dados da Conta
            </button>
            <button
              type="button"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Desativar Conta
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
        >
          Salvar Configurações
        </button>
      </form>
    </div>
  );
};

export default PartnerSettingsPage;
