
"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Product {
  id: string;
  imageId: string;
  spec: string;
}

const productIds: Product[] = [
  { id: '1', imageId: 'oil-synthetic-5w30', spec: 'SAE 5W-30' },
  { id: '2', imageId: 'oil-synthetic-0w20', spec: 'SAE 0W-20' },
  { id: '3', imageId: 'oil-semi-10w40', spec: 'SAE 10W-40' },
  { id: '4', imageId: 'oil-diesel-15w40', spec: 'SAE 15W-40' },
];

export const ProductShowcase = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-40 bg-white">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 block">{t('products.tag')}</span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] whitespace-pre-line">
              {t('products.title')}
            </h2>
          </div>
          <div className="pb-4">
             <p className="text-slate-400 font-medium max-w-sm text-right leading-relaxed">
              {t('products.desc')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {productIds.map((item) => {
            const product = t(`products.items.${item.id}`);
            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <Dialog key={item.id}>
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
                        <span className="text-[10px] font-bold text-slate-400 tracking-widest">{item.spec}</span>
                      </div>
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{product.type}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-white border-none max-w-6xl p-0 overflow-hidden rounded-[2rem] shadow-2xl max-h-[90vh]">
                  <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                    <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                       {imageData && (
                        <Image
                          src={imageData.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <ScrollArea className="md:w-1/2 h-full">
                      <div className="p-8 md:p-16 flex flex-col justify-center space-y-12">
                        <div className="space-y-6">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{item.spec}</span>
                          <DialogTitle className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">{product.name}</DialogTitle>
                          <DialogDescription className="text-lg text-slate-500 font-medium leading-relaxed">
                            {product.desc}
                          </DialogDescription>
                        </div>
                        <div className="space-y-6">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-950">{t('products.specs')}</h4>
                          <ul className="grid grid-cols-1 gap-4 pb-8">
                            {product.benefits.map((benefit: string, i: number) => (
                              <li key={i} className="flex items-start gap-4 text-sm font-bold text-slate-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-950 mt-1.5 shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </ScrollArea>
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
