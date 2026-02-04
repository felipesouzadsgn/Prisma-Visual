import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">O que dizem nossos clientes</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Histórias reais de quem transformou seus ambientes e marcas com a Prisma Visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="relative bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-zinc-200 dark:text-zinc-800">
                <Quote className="w-10 h-10 opacity-50" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6 text-yellow-400">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                 ))}
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-8 relative z-10 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    className="h-12 w-12 rounded-full object-cover border-2 border-white dark:border-zinc-700 shadow-sm" 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.name} 
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};