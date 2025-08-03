import React, { useState } from 'react';

const FaleConosco: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Fale Conosco</h1>
        
        <div className="bg-gray-800 p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Assunto</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                required
              >
                <option value="">Selecione um assunto</option>
                <option value="support">Suporte Técnico</option>
                <option value="billing">Questões de Pagamento</option>
                <option value="partnership">Parceria</option>
                <option value="feedback">Feedback</option>
                <option value="other">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-500 focus:outline-none"
                placeholder="Descreva sua questão ou feedback..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Suporte por Email</h3>
            <p className="text-gray-300">suporte@connections.com</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Tempo de Resposta</h3>
            <p className="text-gray-300">Até 24 horas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
