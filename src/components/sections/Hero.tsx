"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck, Zap, Award } from 'lucide-react';

export const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-30 grayscale-[50%]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 leading-tight">
            Профессиональная защита <br />
            <span className="gradient-text">вашего двигателя</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Поставляем только сертифицированные моторные масла от ведущих мировых брендов. 
            Гарантия качества, профессиональный подбор и быстрая доставка.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8" asChild>
              <Link href="#products">Выбрать масло</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 px-8" asChild>
              <Link href="#selector">Подобрать с ИИ</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium">100% Оригинал</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium">Быстрая доставка</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium">Лучшие бренды</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
