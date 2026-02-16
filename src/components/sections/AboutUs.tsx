"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Award, Users, ThumbsUp, Truck } from 'lucide-react';

const stats = [
  { icon: Award, label: '10+ лет на рынке', desc: 'Опыт работы с маслами' },
  { icon: Users, label: '15,000+ клиентов', desc: 'Доверяют нам свои авто' },
  { icon: ThumbsUp, label: 'Только оригинал', desc: 'Работаем напрямую' },
  { icon: Truck, label: 'Доставка за 2 часа', desc: 'Собственная логистика' },
];

export const AboutUs = () => {
  const teamImage = PlaceHolderImages.find(img => img.id === 'about-team');

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              {teamImage && (
                <Image
                  src={teamImage.imageUrl}
                  alt={teamImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={teamImage.imageHint}
                />
              )}
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl hidden md:block max-w-[240px]">
              <p className="text-accent-foreground font-bold text-2xl mb-1">99.8%</p>
              <p className="text-accent-foreground/80 text-sm">Положительных отзывов от наших постоянных покупателей</p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/20">О компании</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">Ваш надежный партнер <br /> в мире автохимии</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                МаслоГуру — это не просто магазин, а команда профессионалов, увлеченных своим делом. Мы верим, что правильное обслуживание автомобиля начинается with качественных расходных материалов. 
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Наша миссия — обеспечить автовладельцев доступом к оригинальным моторным маслам высшего качества, исключая риск подделок и гарантируя долгую жизнь каждого двигателя.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{stat.label}</h4>
                    <p className="text-sm text-muted-foreground">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
