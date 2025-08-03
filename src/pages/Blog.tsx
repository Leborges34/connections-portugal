import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Como Escolher o Parceiro Ideal',
      excerpt: 'Dicas importantes para fazer a melhor escolha baseada em suas necessidades e preferências.',
      date: '2024-01-15',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Segurança em Encontros Online',
      excerpt: 'Práticas essenciais para manter sua segurança ao marcar encontros através de plataformas digitais.',
      date: '2024-01-10',
      readTime: '7 min',
    },
    {
      id: 3,
      title: 'Etiqueta e Respeito Mútuo',
      excerpt: 'A importância do respeito e da comunicação clara em todas as interações.',
      date: '2024-01-05',
      readTime: '4 min',
    },
  ];

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Blog</h1>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime} de leitura</span>
                </div>
                <button className="text-green-400 hover:text-green-300 font-medium">
                  Ler mais →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Ver Todos os Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
