
"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutUs } from '@/components/sections/AboutUs';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-10 py-20">
          <div className="mb-20 text-center">
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 block">Our legacy</span>
             <h1 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter leading-tight uppercase">
               {t('nav.about')}
             </h1>
          </div>
          
          <AboutUs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
