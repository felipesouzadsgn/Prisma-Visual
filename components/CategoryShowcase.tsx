import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Frame, Image as ImageIcon, Wand2, Sticker } from 'lucide-react';

export const CategoryShowcase: React.FC = () => {
  const categories = [
    {
      id: 'decoracao',
      name: 'Quadros & Decoração',
      description: 'Canvas, Kits e Molduras',
      icon: <Frame className="w-6 h-6" />,
      image: 'https://picsum.photos/600/400?random=1',
      color: 'bg-purple-500'
    },
    {
      id: 'adesivos',
      name: 'Adesivos & Papel de Parede',
      description: 'Personalização de ambientes',
      icon: <Sticker className="w-6 h-6" />,
      image: 'https://picsum.photos/600/400?random=2',
      color: 'bg-pink-500'
    },
    {
      id: 'foto-produtos',
      name: 'Foto Produtos',
      description: 'Álbuns, Canecas e Presentes',
      icon: <ImageIcon className="w-6 h-6" />,
      image: 'https://picsum.photos/600/400?random=3',
      color: 'bg-blue-500'
    },
    {
      id: 'digital',
      name: 'Digital & IA',
      description: 'Restauração e Criação',
      icon: <Wand2 className="w-6 h-6" />,
      image: 'https://picsum.photos/600/400?random=4',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="categories" className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">O que você procura hoje?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Navegue por nossas categorias e encontre a solução perfeita para seu espaço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/categoria/${cat.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className={`inline-flex p-2 rounded-lg ${cat.color} bg-opacity-90 mb-3 shadow-lg`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 leading-tight">{cat.name}</h3>
                <p className="text-sm text-zinc-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                  {cat.description}
                </p>
                <div className="flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Ver Produtos <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};