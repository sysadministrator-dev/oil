
"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, Award, Settings, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white py-20 md:py-0">
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
        <div className="absolute top-[15%] left-[10%] md:top-[20%] md:left-[15%] float-animation opacity-10">
          <Settings className="w-20 h-20 md:w-32 md:h-32 text-slate-950" strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[20%] right-[5%] md:bottom-[25%] md:right-[10%] float-animation opacity-10 [animation-delay:2s]">
          <Activity className="w-24 h-24 md:w-40 md:h-40 text-slate-950" strokeWidth={0.3} />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 md:px-6 md:py-2 bg-slate-50 border border-slate-100 rounded-full mb-8 md:mb-12 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{t('hero.molecular')}</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-[10rem] font-black mb-8 md:mb-12 leading-[0.9] tracking-[-0.05em] luxury-text-gradient animate-fade-in-up whitespace-pre-line text-center">
            {t('hero.title')}
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 mb-12 md:mb-20 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight animate-fade-in-up [animation-delay:200ms] text-center">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 animate-fade-in-up [animation-delay:400ms]">
            <div className="flex flex-col items-center gap-3 md:gap-4 group cursor-help">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-slate-950" />
              </div>
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{t('hero.labs')}</span>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-4 group cursor-help">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-slate-950" />
              </div>
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{t('hero.performance')}</span>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-4 group cursor-help">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-slate-950" />
              </div>
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{t('hero.health')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 opacity-30 hidden sm:flex">
        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-slate-950">{t('hero.mastery')}</span>
        <div className="w-[1px] h-8 md:h-10 bg-gradient-to-b from-slate-950 to-transparent" />
      </div>
    </section>
  );
};
