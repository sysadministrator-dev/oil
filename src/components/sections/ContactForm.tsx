
"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

export const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
    toast({
      title: t('contact.success'),
      description: t('contact.successDesc'),
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-black font-headline mb-6 whitespace-pre-line leading-tight">
                  {t('contact.title')}
                </h2>
                <p className="text-slate-400 font-medium leading-relaxed">
                  {t('contact.desc')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 rounded-full">
                    <Phone className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 uppercase tracking-widest font-black">{t('contact.phone')}</p>
                    <p className="text-lg font-bold text-slate-950">+7 (800) 555-35-35</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 rounded-full">
                    <Mail className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 uppercase tracking-widest font-black">{t('contact.email')}</p>
                    <p className="text-lg font-bold text-slate-950">info@masloguru.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 rounded-full">
                    <MapPin className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 uppercase tracking-widest font-black">{t('contact.office')}</p>
                    <p className="text-lg font-bold text-slate-950">{t('contact.officeAddr')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-2xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('contact.nameLabel')}</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-slate-50 border-none h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('contact.email')}</FormLabel>
                          <FormControl>
                            <Input placeholder="example@mail.ru" className="bg-slate-50 border-none h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('contact.phone')}</FormLabel>
                          <FormControl>
                            <Input placeholder="+7 (___) ___-__-__" className="bg-slate-50 border-none h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('contact.messageLabel')}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="..." 
                            className="bg-slate-50 border-none min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-slate-950 text-white hover:bg-slate-800 h-14 text-lg font-black uppercase tracking-widest">
                    {t('contact.sendBtn')} <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
