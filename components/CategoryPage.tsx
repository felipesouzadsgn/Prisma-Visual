import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag } from 'lucide-react';
import { ProductGrid } from './ProductGrid';
import { PRODUCTS, CATEGORY_SLUGS, SLUG_TO_NAME } from '../constants';
import { Button } from './Button';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Clean scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const categoryEnum = slug ? CATEGORY_SLUGS[slug] : undefined;
  
  const filteredProducts = categoryEnum 
    ? PRODUCTS.filter(p => p.category === categoryEnum)
    : [];

  const categoryName = slug && SLUG_TO_NAME[slug] ? SLUG_TO_NAME[slug] : 'Categoria';

  return (
    <div className="min-h-screen pt-24 pb-12 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="pl-2 pr-4 text-xs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Início
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-100 dark:bg-brand-900/30 rounded-lg text-brand-600 dark:text-brand-400">
               <Tag className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {categoryName}
            </h1>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
            Explore nossa seleção exclusiva de produtos nesta categoria.
          </p>
        </div>

        {/* Content */}
        {categoryEnum && filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-24 bg-white dark:bg-zinc-900 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700">
            <p className="text-zinc-500">Nenhum produto encontrado nesta categoria no momento.</p>
            <Link to="/" className="mt-4 inline-block text-brand-600 hover:underline">Voltar para categorias</Link>
          </div>
        )}
      </div>
    </div>
  );
};