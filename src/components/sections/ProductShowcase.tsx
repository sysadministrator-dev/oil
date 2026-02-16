"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Info } from 'lucide-react';

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
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/20">Наш ассортимент</Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Премиальные масла для любого авто</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы тщательно отбираем продукцию, чтобы ваш автомобиль работал как часы в любых условиях.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const imageData = PlaceHolderImages.find(img => img.id === product.imageId);
            return (
              <Card key={product.id} className="bg-card border-border overflow-hidden hover:border-accent/50 transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={imageData.imageHint}
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/80 backdrop-blur-sm">{product.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                  <p className="text-sm text-accent font-medium">{product.spec}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full border-primary/50 hover:border-accent">
                        <Info className="w-4 h-4 mr-2" /> Подробнее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-border max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                        <DialogDescription className="text-accent">{product.type} | {product.spec}</DialogDescription>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-8 mt-4">
                        <div className="relative h-64 md:h-auto rounded-lg overflow-hidden border border-border">
                           {imageData && (
                            <Image
                              src={imageData.imageUrl}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold mb-2 text-foreground">Описание</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-3 text-foreground">Преимущества</h4>
                            <ul className="space-y-2">
                              {product.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-accent" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                            Оформить заказ
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className="w-full bg-primary hover:bg-primary/80">Купить сейчас</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
