import React from 'react';
import { ArrowRight, Wand2, Image as ImageIcon, Frame } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de falar sobre decoração e serviços digitais.`, '_blank');
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2"></span>
              Visual Arts & Decor
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6">
              Transforme ambientes e <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">eternize memórias</span>.
            </h1>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Quadros decorativos, ensaios fotográficos com IA, restauração de fotos antigas e adesivos exclusivos. A união perfeita entre arte, tecnologia e impressão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={openWhatsApp} variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Falar com Especialista
              </Button>
              <Button onClick={() => document.getElementById('products')?.scrollIntoView()} variant="outline">
                Ver Galeria
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center">
                <Frame className="w-4 h-4 text-purple-500 mr-2" />
                Quadros Premium
              </div>
              <div className="flex items-center">
                <Wand2 className="w-4 h-4 text-purple-500 mr-2" />
                IA Generativa
              </div>
              <div className="flex items-center">
                <ImageIcon className="w-4 h-4 text-purple-500 mr-2" />
                Foto Produtos
              </div>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl shadow-2xl dark:shadow-zinc-900/50 overflow-hidden bg-zinc-900 aspect-[4/3] group border border-zinc-200 dark:border-zinc-800">
              <img 
                src="https://picsum.photos/seed/artgallery/800/600" 
                alt="Decoração com quadros" 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <p className="text-white font-bold text-xl">Galeria Prisma</p>
                  <p className="text-zinc-300 text-sm">Do digital ao quadro na sua parede.</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl dark:shadow-none border border-zinc-100 dark:border-zinc-800 hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                  <Wand2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Novo Serviço</p>
                  <p className="font-bold text-zinc-900 dark:text-white">Restauração & IA</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};