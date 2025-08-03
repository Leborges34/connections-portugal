import React, { useState } from 'react';

const PartnerMessagesPage: React.FC = () => {
  const [conversations] = useState([
    {
      id: '1',
      clientName: 'João Silva',
      lastMessage: 'Olá, gostaria de confirmar o horário de amanhã.',
      timestamp: '2024-02-01 10:30',
      unread: true,
    },
    {
      id: '2',
      clientName: 'Maria Santos',
      lastMessage: 'Obrigada pelo excelente serviço!',
      timestamp: '2024-01-31 18:45',
      unread: false,
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Mensagens</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-white mb-4">Conversas</h2>
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  selectedConversation === conversation.id
                    ? 'bg-green-600'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-white">{conversation.clientName}</h3>
                  {conversation.unread && (
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  )}
                </div>
                <p className="text-sm text-gray-300 truncate">{conversation.lastMessage}</p>
                <p className="text-xs text-gray-400">{conversation.timestamp}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-4 flex flex-col">
          {selectedConversation ? (
            <>
              <div className="flex-1 mb-4">
                <h2 className="text-lg font-semibold text-white mb-4">
                  {conversations.find(c => c.id === selectedConversation)?.clientName}
                </h2>
                <div className="space-y-3 h-64 overflow-y-auto">
                  <div className="bg-gray-700 p-3 rounded max-w-xs">
                    <p className="text-white text-sm">Olá, gostaria de confirmar o horário de amanhã.</p>
                    <p className="text-xs text-gray-400 mt-1">10:30</p>
                  </div>
                  <div className="bg-green-600 p-3 rounded max-w-xs ml-auto">
                    <p className="text-white text-sm">Olá! Sim, confirmado para amanhã às 14:00.</p>
                    <p className="text-xs text-gray-200 mt-1">10:35</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
                  Enviar
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Selecione uma conversa para começar
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerMessagesPage;
