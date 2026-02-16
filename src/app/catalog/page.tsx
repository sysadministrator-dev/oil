
"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { useLanguage } from '@/context/LanguageContext';

export default function CatalogPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-10 py-20">
          <div className="mb-20 text-center">
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 block">Premium selection</span>
             <h1 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter leading-tight uppercase">
               {t('products.catalogTitle')}
             </h1>
          </div>
          
          <ProductShowcase hideViewAll={true} />
          
          {/* Сетка для будущих товаров при скролле */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 opacity-50 pointer-events-none">
            {/* Плейсхолдеры для визуализации бесконечной ленты */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-slate-100 rounded-2xl mb-8" />
                <div className="h-6 bg-slate-100 w-3/4 rounded mb-2" />
                <div className="h-4 bg-slate-100 w-1/2 rounded" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
