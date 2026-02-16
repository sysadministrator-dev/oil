"use client";

import React from 'react';
import Link from 'next/link';
import { Droplets, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Продукты', href: '#products' },
    { name: 'Подбор масла', href: '#selector' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "glass-effect py-4" : "bg-transparent py-8"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="p-2 bg-slate-900 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Droplets className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Масло<span className="text-primary">Гуру</span>
          </span>
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center justify-center gap-10 flex-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="ghost" className="font-bold text-slate-900 hover:bg-slate-100" asChild>
            <Link href="#contact">+7 (800) 555-35-35</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          {mounted && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                  <Menu className="w-6 h-6 text-slate-900" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-none w-full max-w-xs p-10">
                <div className="flex flex-col gap-8 mt-10">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="w-full bg-slate-900 h-14 rounded-2xl" asChild>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>Связаться</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};