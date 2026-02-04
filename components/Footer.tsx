import React from 'react';
import { Printer } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 py-12 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center mb-4 md:mb-0">
          <Printer className="h-5 w-5 text-brand-600 dark:text-brand-400 mr-2" />
          <span className="text-zinc-900 dark:text-white font-bold text-lg tracking-tight">Prisma Visual</span>
        </div>

        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Prisma Visual. Todos os direitos reservados.</p>
          <p className="mt-1">Parceiro Zap Gráfica.</p>
        </div>
      </div>
    </footer>
  );
};