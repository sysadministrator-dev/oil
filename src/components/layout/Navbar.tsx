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
    { name: 'Коллекция', href: '#products' },
    { name: 'Интеллект', href: '#selector' },
    { name: 'История', href: '#about' },
    { name: 'Консьерж', href: '#contact' },
  ];

  if (!mounted) return null;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
      isScrolled ? "glass-effect py-4" : "bg-transparent py-10"
    )}>
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="p-2.5 bg-slate-950 rounded-full group-hover:rotate-12 transition-all duration-500 shadow-xl">
            <Droplets className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-950 uppercase">
            Maslo<span className="text-slate-400">Guru</span>
          </span>
        </Link>

        {/* Desktop Nav - Centered & Refined */}
        <div className="hidden md:flex items-center justify-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold text-slate-500 hover:text-slate-950 transition-colors tracking-[0.2em] uppercase nav-link-hover py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Phone Right */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="tel:+78005553535" className="text-xs font-bold tracking-widest text-slate-950 hover:opacity-70 transition-opacity">
            +7 800 555 35 35
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-slate-50 rounded-full">
                <Menu className="w-6 h-6 text-slate-950" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-none w-full p-12">
              <div className="flex flex-col gap-10 mt-20">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black text-slate-950 tracking-tighter hover:text-slate-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};