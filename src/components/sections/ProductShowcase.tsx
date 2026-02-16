"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  type: string;
  spec: string;
  description: string;
  benefits: string[];
  imageId: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'ELITE SYNTH',
    type: 'Pure Synthetic Lubricant',
    spec: 'SAE 5W-30',
    imageId: 'oil-synthetic-5w30',
    description: 'Вершина синтетических технологий. Создано для тех, кто не приемлет компромиссов в вопросах защиты двигателя.',
    benefits: ['Нано-защита поверхностей', 'Стабильность при +150°C', 'Ресурс до 20,000 км'],
  },
  {
    id: '2',
    name: 'ARCTIC FLOW',
    type: 'Extreme Climate formula',
    spec: 'SAE 0W-20',
    imageId: 'oil-synthetic-0w20',
    description: 'Разработано для безупречного пуска в условиях экстремально низких температур. Мгновенная защита с первой секунды.',
    benefits: ['Пуск при -45°C', 'Экономия топлива 4%', 'Чистота поршневой группы'],
  },
  {
    id: '3',
    name: 'CLASSIC PRO',
    type: 'High Performance Blend',
    spec: 'SAE 10W-40',
    imageId: 'oil-semi-10w40',
    description: 'Надежность проверенная временем. Идеальный баланс между классическими традициями и современными присадками.',
    benefits: ['Снижение шума двигателя', 'Удаление нагара', 'Защита от окисления'],
  },
  {
    id: '4',
    name: 'TRUCK HD',
    type: 'Heavy Duty Power',
    spec: 'SAE 15W-40',
    imageId: 'oil-diesel-15w40',
    description: 'Мощь и выносливость для коммерческой техники. Работает там, где другие сдаются.',
    benefits: ['Для сверхвысоких нагрузок', 'Контроль вязкости', 'Защита от коррозии'],
  },
];

export const ProductShowcase = () => {
  return (
    <section id="products" className="py-40 bg-white">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 block">Curated Selection</span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9]">
              ЭСТЕТИКА <br />ИНЖЕНЕРИИ.
            </h2>
          </div>
          <div className="pb-4">
             <p className="text-slate-400 font-medium max-w-sm text-right leading-relaxed">
              Каждый продукт в нашей линейке — это результат многолетних исследований и стремления к абсолютному совершенству.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product) => {
            const imageData = PlaceHolderImages.find(img => img.id === product.imageId);
            return (
              <Dialog key={product.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-50 mb-8">
                      {imageData && (
                        <Image
                          src={imageData.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                        />
                      )}
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all duration-700 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-700 shadow-2xl">
                          <Plus className="w-6 h-6 text-slate-950" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-black text-slate-950 tracking-tighter">{product.name}</h3>
                        <span className="text-[10px] font-bold text-slate-400 tracking-widest">{product.spec}</span>
                      </div>
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{product.type}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-white border-none max-w-5xl p-0 overflow-hidden rounded-[2rem] shadow-2xl">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/2 relative min-h-[500px]">
                       {imageData && (
                        <Image
                          src={imageData.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="md:w-1/2 p-16 flex flex-col justify-center space-y-12">
                      <div className="space-y-6">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{product.spec}</span>
                        <DialogTitle className="text-6xl font-black text-slate-950 tracking-tighter">{product.name}</DialogTitle>
                        <DialogDescription className="text-xl text-slate-500 font-medium leading-relaxed">
                          {product.description}
                        </DialogDescription>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-950">Характеристики серии</h4>
                        <ul className="grid grid-cols-1 gap-4">
                          {product.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};