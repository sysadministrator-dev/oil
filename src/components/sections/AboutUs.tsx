"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Award, Users, ThumbsUp, Truck, ShieldCheck, Zap, Globe } from 'lucide-react';
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

  const values = [
    { icon: ShieldCheck, title: t('about.value1'), desc: t('about.value1Desc') },
    { icon: Zap, title: t('about.value2'), desc: t('about.value2Desc') },
    { icon: Globe, title: t('about.value3'), desc: t('about.value3Desc') },
  ];

  return (
    <div className="space-y-16 md:space-y-32">
      {/* Main Info Section */}
      <section id="about" className="py-16 md:py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[350px] sm:h-[500px] w-full rounded-3xl overflow-hidden border border-slate-100 shadow-2xl group">
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
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-slate-950 p-6 md:p-8 rounded-2xl md:rounded-3xl hidden sm:block max-w-[200px] md:max-w-[240px] shadow-2xl z-10">
                <p className="text-white font-black text-xl md:text-2xl mb-1">99.8%</p>
                <p className="text-slate-400 text-[9px] md:text-[10px] uppercase font-bold tracking-widest">{t('about.feedback')}</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <div>
                <Badge className="mb-4 bg-slate-100 text-slate-950 border-slate-200">{t('about.tag')}</Badge>
                <h2 className="text-3xl md:text-5xl font-black font-headline mb-6 whitespace-pre-line leading-tight">{t('about.title')}</h2>
                <p className="text-slate-500 leading-relaxed text-base md:text-lg font-medium">
                  {t('about.desc1')}
                </p>
                <p className="text-slate-400 leading-relaxed mt-4 text-sm md:text-base">
                  {t('about.desc2')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors shadow-sm">
                    <div className="p-2 bg-slate-50 rounded-lg shrink-0">
                      <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-950" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-950 text-xs md:text-sm">{stat.label}</h4>
                      <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 uppercase tracking-tighter">{t('about.missionTitle')}</h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium italic">
              &quot;{t('about.missionDesc')}&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, i) => (
              <div key={i} className="p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-700 hover:-translate-y-2">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-950 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg">
                  <value.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-3 md:mb-4 uppercase tracking-tighter">{value.title}</h3>
                <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
