
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck, Zap, Award } from 'lucide-react';

export const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-40 grayscale-[20%]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-8xl font-bold font-headline mb-8 leading-tight">
            Профессиональная защита <br />
            <span className="gradient-text">вашего двигателя</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Поставляем только сертифицированные моторные масла от ведущих мировых брендов. 
            Гарантия качества, профессиональный подбор и быстрая доставка.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <span className="text-base font-medium">100% Оригинал</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Zap className="w-6 h-6 text-accent" />
              <span className="text-base font-medium">Быстрая доставка</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-base font-medium">Лучшие бренды</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
