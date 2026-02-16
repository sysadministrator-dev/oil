"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdnstatic.rg.ru/crop910x639/uploads/images/199/97/30/iStock-1274982867.jpg"
          alt="Premium Engine Technology"
          fill
          className="object-cover opacity-[0.08] grayscale scale-105"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-50 border border-slate-100 rounded-full mb-12 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">The New Standard of Protection</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black mb-12 leading-[0.85] tracking-[-0.05em] luxury-text-gradient animate-fade-in-up">
            ЧИСТАЯ <br />
            ЭНЕРГИЯ
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-20 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight animate-fade-in-up [animation-delay:200ms]">
            Мы создаем будущее автомобильной защиты. <br />
            Исключительные масла для исключительных достижений.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-16 animate-fade-in-up [animation-delay:400ms]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                <ShieldCheck className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Certification</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                <Zap className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Velocity</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                <Award className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-950">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-slate-950 to-transparent" />
      </div>
    </section>
  );
};