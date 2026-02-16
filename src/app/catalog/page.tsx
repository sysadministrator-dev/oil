
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
