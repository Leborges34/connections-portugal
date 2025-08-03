import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona a verificação de perfis?',
      answer: 'Todos os parceiros passam por um processo rigoroso que inclui verificação de documentos, validação de identidade e aprovação manual pela nossa equipe.',
    },
    {
      question: 'Os pagamentos são seguros?',
      answer: 'Sim, utilizamos o Stripe para processar todos os pagamentos com criptografia bancária. Seus dados financeiros nunca são armazenados em nossos servidores.',
    },
    {
      question: 'Como posso cancelar um agendamento?',
      answer: 'Você pode cancelar agendamentos através do seu painel de usuário até 24 horas antes do horário marcado para reembolso total.',
    },
    {
      question: 'Minha privacidade está protegida?',
      answer: 'Absolutamente. Utilizamos criptografia de ponta a ponta e seguimos rigorosos protocolos de privacidade. Suas informações nunca são compartilhadas.',
    },
    {
      question: 'Como posso me tornar um parceiro?',
      answer: 'Registre-se como parceiro, complete seu perfil profissional e envie os documentos necessários. Nossa equipe analisará sua aplicação em até 48 horas.',
    },
  ];

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Perguntas Frequentes</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <span className="text-green-400 text-xl">
                  {openQuestion === index ? '−' : '+'}
                </span>
              </button>
              {openQuestion === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-white mb-4">Não encontrou sua resposta?</h2>
          <p className="text-gray-300 mb-4">
            Nossa equipe de suporte está sempre disponível para ajudar.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
