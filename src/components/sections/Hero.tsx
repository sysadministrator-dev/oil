
"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, Award, Settings, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Immersive Technical Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="scan-line" />
        
        <Image
          src="https://cdnstatic.rg.ru/crop910x639/uploads/images/199/97/30/iStock-1274982867.jpg"
          alt="Premium Engine Technology"
          fill
          className="object-cover opacity-[0.05] grayscale scale-110 pulse-animation"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Animated Floating Technical Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] float-animation opacity-10">
          <Settings className="w-32 h-32 text-slate-950" strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[25%] right-[10%] float-animation opacity-10 [animation-delay:2s]">
          <Activity className="w-40 h-40 text-slate-950" strokeWidth={0.3} />
        </div>
        <div className="absolute top-[60%] left-[10%] float-animation opacity-5 [animation-delay:4s]">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 3h10v4H7zM9 7v10M15 7v10M8 17h8M12 17v4" />
            <circle cx="12" cy="21" r="1" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-50 border border-slate-100 rounded-full mb-12 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{t('hero.molecular')}</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black mb-12 leading-[0.85] tracking-[-0.05em] luxury-text-gradient animate-fade-in-up whitespace-pre-line text-center">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-20 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight animate-fade-in-up [animation-delay:200ms] text-center">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-16 animate-fade-in-up [animation-delay:400ms]">
            <div className="flex flex-col items-center gap-4 group cursor-help">
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                <ShieldCheck className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{t('hero.labs')}</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-help">
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                <Zap className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{t('hero.performance')}</span>
            </div>
            <div className="flex flex-col items-center gap-4 group cursor-help">
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                <Award className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{t('hero.health')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-950">{t('hero.mastery')}</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-slate-950 to-transparent" />
      </div>
    </section>
  );
};
