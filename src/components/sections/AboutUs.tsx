
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Award, Users, ThumbsUp, Truck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AboutUs = () => {
  const { t } = useLanguage();
  const teamImage = PlaceHolderImages.find(img => img.id === 'about-team');

  const stats = [
    { icon: Award, label: t('about.stats.s1'), desc: t('about.stats.s1d') },
    { icon: Users, label: t('about.stats.s2'), desc: t('about.stats.s2d') },
    { icon: ThumbsUp, label: t('about.stats.s3'), desc: t('about.stats.s3d') },
    { icon: Truck, label: t('about.stats.s4'), desc: t('about.stats.s4d') },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-slate-100 shadow-2xl group">
              {teamImage && (
                <Image
                  src={teamImage.imageUrl}
                  alt={teamImage.description}
                  fill
                  className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  data-ai-hint={teamImage.imageHint}
                />
              )}
            </div>
            <div className="absolute -bottom-8 -right-8 bg-slate-950 p-8 rounded-3xl hidden md:block max-w-[240px] shadow-2xl z-10">
              <p className="text-white font-black text-2xl mb-1">99.8%</p>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">{t('about.feedback')}</p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <Badge className="mb-4 bg-slate-100 text-slate-950 border-slate-200">{t('about.tag')}</Badge>
              <h2 className="text-3xl md:text-5xl font-black font-headline mb-6 whitespace-pre-line leading-tight">{t('about.title')}</h2>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                {t('about.desc1')}
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                {t('about.desc2')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors shadow-sm">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <stat.icon className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-950 text-sm">{stat.label}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">{stat.desc}</p>
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
