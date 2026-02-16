
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-effect py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="p-1.5 bg-primary rounded-lg group-hover:bg-accent transition-colors">
            <Droplets className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
          </div>
          <span className="text-xl font-bold tracking-tight font-headline">Масло<span className="text-accent">Гуру</span></span>
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1 px-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center shrink-0">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10" asChild>
            <Link href="#contact">Консультация</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          {mounted ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-border pt-12">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="w-full bg-primary" asChild>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>Связаться с нами</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
