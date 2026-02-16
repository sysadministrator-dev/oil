
"use client";

import React from 'react';
import Link from 'next/link';
import { Droplets, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useLanguage, type Language } from '@/context/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.catalog'), href: '/catalog' },
    { name: t('nav.history'), href: '/#about' },
    { name: t('nav.contacts'), href: '/#contact' },
  ];

  if (!mounted) return null;

  const languages: Language[] = ['AZ', 'RU', 'EN'];

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

        {/* Language Switcher Right */}
        <div className="hidden md:flex items-center gap-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={cn(
                "px-2 py-1 text-[10px] font-black transition-all rounded",
                language === lang 
                  ? "bg-slate-950 text-white" 
                  : "bg-slate-50 text-slate-400 hover:text-slate-950"
              )}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex gap-1">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={cn(
                  "px-1.5 py-0.5 text-[9px] font-black rounded",
                  language === lang 
                    ? "bg-slate-950 text-white" 
                    : "bg-slate-100 text-slate-400"
                )}
              >
                {lang}
              </button>
            ))}
          </div>
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
