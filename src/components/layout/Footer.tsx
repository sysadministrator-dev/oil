
"use client";

import React from 'react';
import Link from 'next/link';
import { Droplets, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-12 pb-8">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="space-y-4 max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 bg-slate-950 rounded-lg">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-950 uppercase">МаслоГуру</span>
            </Link>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Twitter className="w-4 h-4" /></Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-950">{t('footer.nav')}</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-widest">{t('nav.home')}</Link></li>
                <li><Link href="/catalog" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-widest">{t('nav.catalog')}</Link></li>
                <li><Link href="/about" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-widest">{t('nav.about')}</Link></li>
                <li><Link href="/contacts" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-widest">{t('nav.contacts')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-950">{t('footer.support')}</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-widest">Privacy</Link></li>
                <li><Link href="#" className="text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-widest">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
