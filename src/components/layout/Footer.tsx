
"use client";

import React from 'react';
import Link from 'next/link';
import { Droplets, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="p-1.5 bg-slate-950 rounded-lg">
              <Droplets className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-950 uppercase">MasloGuru</span>
          </Link>

          {/* Horizontal Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-[0.2em]">{t('nav.home')}</Link>
            <Link href="/catalog" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-[0.2em]">{t('nav.catalog')}</Link>
            <Link href="/about" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-[0.2em]">{t('nav.about')}</Link>
            <Link href="/contacts" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-[0.2em]">{t('nav.contacts')}</Link>
          </nav>

          {/* Social & Rights */}
          <div className="flex flex-col items-center gap-6 pt-4 border-t border-slate-50 w-full max-w-2xl">
            <div className="flex gap-6">
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Twitter className="w-4 h-4" /></Link>
            </div>
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
