
"use client";

import React from 'react';
import Link from 'next/link';
import { Droplets, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 bg-primary rounded-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight font-headline">МаслоГуру</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Профессиональный подбор и продажа моторных масел. Заботимся о здоровье вашего двигателя с 2012 года.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Youtube className="w-5 h-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Навигация</h4>
            <ul className="space-y-4">
              <li><Link href="#products" className="text-sm text-muted-foreground hover:text-accent transition-colors">Каталог товаров</Link></li>
              <li><Link href="#selector" className="text-sm text-muted-foreground hover:text-accent transition-colors">AI Подбор масла</Link></li>
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">О нашей компании</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Контакты и адрес</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Поддержка</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Доставка и оплата</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Обмен и возврат</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Сертификаты качества</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Политика конфиденциальности</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Рассылка</h4>
            <p className="text-sm text-muted-foreground mb-4">Получайте советы по уходу за авто и спецпредложения.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-background border border-border rounded-lg px-4 py-2 text-sm flex-grow focus:outline-none focus:border-accent"
              />
              <button className="bg-primary hover:bg-primary/80 text-white rounded-lg px-4 py-2 transition-colors">OK</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2024 МаслоГуру. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent">Terms of Service</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
