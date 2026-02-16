"use client";

import React from 'react';
import Link from 'next/link';
import { Droplets, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 bg-slate-950 rounded-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-950 uppercase">МаслоГуру</span>
            </Link>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-300 hover:text-slate-950 transition-colors"><Youtube className="w-5 h-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-950">{t('footer.nav')}</h4>
            <ul className="space-y-4">
              <li><Link href="#products" className="text-sm font-bold text-slate-400 hover:text-slate-950 transition-colors">{t('nav.collection')}</Link></li>
              <li><Link href="#about" className="text-sm font-bold text-slate-400 hover:text-slate-950 transition-colors">{t('nav.history')}</Link></li>
              <li><Link href="#contact" className="text-sm font-bold text-slate-400 hover:text-slate-950 transition-colors">{t('nav.concierge')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-950">{t('footer.support')}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm font-bold text-slate-400 hover:text-slate-950 transition-colors">Delivery</Link></li>
              <li><Link href="#" className="text-sm font-bold text-slate-400 hover:text-slate-950 transition-colors">Returns</Link></li>
              <li><Link href="#" className="text-sm font-bold text-slate-400 hover:text-slate-950 transition-colors">Quality Assurance</Link></li>
              <li><Link href="#" className="text-sm font-bold text-slate-400 hover:text-slate-950 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-950">{t('footer.newsletter')}</h4>
            <p className="text-sm font-medium text-slate-400 mb-4">{t('footer.newsDesc')}</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white border-none rounded-lg px-4 py-2 text-sm flex-grow focus:outline-none shadow-sm"
              />
              <button className="bg-slate-950 text-white rounded-lg px-4 py-2 text-xs font-black transition-colors">OK</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{t('footer.rights')}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-950">Terms</Link>
            <Link href="#" className="text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-950">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
