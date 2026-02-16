"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck, Zap, Award } from 'lucide-react';

export const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-20 scale-105"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Premium Lubricants Only</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter animate-fade-in-up">
            <span className="gradient-text">ИСКУССТВО</span> <br />
            ЗАЩИТЫ ДВИГАТЕЛЯ
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up [animation-delay:200ms]">
            Мы поставляем только сертифицированные масла, которые продлевают жизнь вашего автомобиля. Интеллект в каждой капле.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-12 animate-fade-in-up [animation-delay:400ms]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Certifed Original</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                <Zap className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Express Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                <Award className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Legacy Brands</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-slate-200 to-transparent" />
      </div>
    </section>
  );
};