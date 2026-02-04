import React from 'react';
import { MessageCircle, Instagram, Facebook, MapPin, Mail, Clock } from 'lucide-react';
import { Button } from './Button';
import { INSTAGRAM_HANDLE, WHATSAPP_NUMBER } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Info Area */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">Vamos criar algo incrível juntos?</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
                Atendimento personalizado via WhatsApp e Redes Sociais. Entre em contato para orçamentos sem compromisso.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start group">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100">WhatsApp</h4>
                    <p className="text-zinc-500 dark:text-zinc-500 text-sm">Resposta rápida em horário comercial</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg mr-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                    <Instagram className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100">Instagram</h4>
                    <p className="text-zinc-500 dark:text-zinc-500 text-sm">Siga nosso portfólio: {INSTAGRAM_HANDLE}</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <Facebook className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100">Facebook Marketplace</h4>
                    <p className="text-zinc-500 dark:text-zinc-500 text-sm">Confira nossas ofertas semanais</p>
                  </div>
                </div>
              </div>

              <Button 
                variant="whatsapp"
                className="w-full sm:w-auto text-lg py-3"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Chamar no WhatsApp
              </Button>
            </div>

            {/* Decorative/Map Area */}
            <div className="bg-zinc-950 dark:bg-black relative p-10 lg:p-16 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800">
              
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 border-b border-zinc-800 pb-4">Informações</h3>
                
                <div className="space-y-4 text-zinc-400">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-zinc-500" />
                    <span>Seg - Sex: 09h às 18h</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-zinc-500" />
                    <span>contato@prismavisual.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-zinc-500" />
                    <span>Atendimento Online para todo Brasil</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <p className="text-sm text-zinc-500 italic">
                  "A criatividade é a inteligência se divertindo."
                </p>
                <p className="text-xs text-zinc-600 mt-1">- Albert Einstein</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};