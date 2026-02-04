import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { Button } from './Button';

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  title = "Nossos Produtos",
  description
}) => {
  const handleOrder = (productName: string) => {
    const text = `Olá! Tenho interesse no produto: *${productName}*. Pode me passar um orçamento?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
      {products.map((product) => (
        <div key={product.id} className="group bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col h-full hover:shadow-lg dark:hover:shadow-zinc-900/50">
          <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] uppercase font-bold text-zinc-800 dark:text-zinc-200 border border-zinc-100 dark:border-zinc-800 shadow-sm">
              {product.category}
            </div>
          </div>
          
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 leading-tight">{product.name}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 flex-1">{product.description}</p>
            
            {product.minQuantity && (
              <div className="mb-4 text-xs text-brand-600 dark:text-brand-400 font-medium bg-brand-50 dark:bg-brand-900/20 inline-block px-2 py-1 rounded border border-brand-100 dark:border-brand-800/50">
                Mínimo: {product.minQuantity} un.
              </div>
            )}

            <Button 
              onClick={() => handleOrder(product.name)}
              variant="whatsapp"
              className="w-full text-sm py-2.5 shadow-none"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Orçar no Zap
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};