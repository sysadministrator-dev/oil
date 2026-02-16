"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  type: string;
  spec: string;
  price: string;
  description: string;
  benefits: string[];
  imageId: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Elite Synth 5W-30',
    type: 'Полностью синтетическое',
    spec: 'API SP, ACEA C3',
    price: '4 500 ₽',
    imageId: 'oil-synthetic-5w30',
    description: 'Высокотехнологичное синтетическое моторное масло нового поколения, специально разработанное для современных бензиновых и дизельных двигателей.',
    benefits: ['Снижает расход топлива', 'Защита при экстремальных температурах', 'Увеличивает интервал замены'],
  },
  {
    id: '2',
    name: 'Arctic Flow 0W-20',
    type: 'Полностью синтетическое',
    spec: 'ILSAC GF-6A',
    price: '5 200 ₽',
    imageId: 'oil-synthetic-0w20',
    description: 'Идеальное решение для гибридных автомобилей и двигателей с системой старт-стоп. Обеспечивает мгновенную смазку при холодном пуске.',
    benefits: ['Превосходный холодный пуск', 'Максимальная чистота поршней', 'Оптимально для гибридов'],
  },
  {
    id: '3',
    name: 'Classic Pro 10W-40',
    type: 'Полусинтетическое',
    spec: 'API SN/CF',
    price: '2 800 ₽',
    imageId: 'oil-semi-10w40',
    description: 'Надежное масло для автомобилей с пробегом. Обеспечивает стабильную масляную пленку и надежную защиту от износа.',
    benefits: ['Снижение угара масла', 'Защита старых двигателей', 'Отличные моющие свойства'],
  },
  {
    id: '4',
    name: 'Truck HD 15W-40',
    type: 'Минеральное премиум',
    spec: 'API CK-4 / SN',
    price: '3 600 ₽',
    imageId: 'oil-diesel-15w40',
    description: 'Сверхмощное моторное масло для дизельных двигателей, работающих в тяжелых условиях эксплуатации.',
    benefits: ['Для тяжелых нагрузок', 'Контроль сажи и нагара', 'Стабильная вязкость'],
  },
];

export const ProductShowcase = () => {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <Badge className="mb-6 bg-slate-100 text-slate-900 border-none px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[10px]">
            The Collection
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
            Превосходство <br /> в каждой детали.
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Наша коллекция включает только проверенные временем и технологиями формулы, созданные для достижения пиковой производительности.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => {
            const imageData = PlaceHolderImages.find(img => img.id === product.imageId);
            return (
              <Card key={product.id} className="premium-card group">
                <div className="relative h-80 overflow-hidden rounded-t-2xl">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={imageData.imageHint}
                    />
                  )}
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur flex items-center justify-center rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ChevronRight className="w-5 h-5 text-slate-900" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-black text-slate-900 leading-tight">{product.name}</CardTitle>
                  </div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">{product.spec}</p>
                </CardHeader>
                <CardContent className="pb-8">
                   <p className="text-sm text-slate-400 font-medium mb-8">{product.type}</p>
                   <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white h-12 rounded-xl transition-all font-bold">
                        Подробнее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white border-none max-w-4xl p-0 overflow-hidden rounded-3xl">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 relative h-96 md:h-auto">
                           {imageData && (
                            <Image
                              src={imageData.imageUrl}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="md:w-1/2 p-12 space-y-8">
                          <div>
                            <Badge className="bg-slate-100 text-slate-900 mb-4">{product.spec}</Badge>
                            <DialogTitle className="text-4xl font-black text-slate-900 tracking-tighter mb-4">{product.name}</DialogTitle>
                            <DialogDescription className="text-lg text-slate-500 font-medium leading-relaxed">
                              {product.description}
                            </DialogDescription>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">Ключевые преимущества</h4>
                            <ul className="grid grid-cols-1 gap-4">
                              {product.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                                  <div className="w-2 h-2 rounded-full bg-primary" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};