
"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aiPoweredOilSelector, type AiPoweredOilSelectorOutput } from '@/ai/flows/ai-powered-oil-selector';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const formSchema = z.object({
  make: z.string().min(1, 'Required'),
  model: z.string().min(1, 'Required'),
  year: z.coerce.number().int().min(1950).max(new Date().getFullYear() + 1),
  drivingConditions: z.string().min(5),
});

export const OilSelector = () => {
  const { t, language } = useLanguage();
  const [result, setResult] = React.useState<AiPoweredOilSelectorOutput | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      make: '',
      model: '',
      year: 2020,
      drivingConditions: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      // Passing language to AI selector
      const response = await aiPoweredOilSelector({
        ...values,
        language: language === 'AZ' ? 'Azerbaijani' : language === 'EN' ? 'English' : 'Russian'
      } as any);
      setResult(response);
    } catch (err) {
      console.error(err);
      setError(t('selector.error'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="selector" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2 space-y-6">
              <Badge className="bg-slate-100 text-slate-950 border-slate-200">{t('selector.tag')}</Badge>
              <h2 className="text-3xl md:text-5xl font-black font-headline leading-tight whitespace-pre-line">
                {t('selector.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('selector.desc')}
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-slate-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-slate-950" /></div>
                  <p className="text-sm">{t('selector.check1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-slate-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-slate-950" /></div>
                  <p className="text-sm">{t('selector.check2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-slate-100 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-slate-950" /></div>
                  <p className="text-sm">{t('selector.check3')}</p>
                </div>
              </div>
            </div>

            <Card className="md:w-1/2 bg-white border-slate-100 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-950 font-black">
                  <Sparkles className="w-5 h-5" />
                  {t('selector.cardTitle')}
                </CardTitle>
                <CardDescription>{t('selector.cardDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="make"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('selector.make')}</FormLabel>
                            <FormControl>
                              <Input placeholder="Toyota" className="bg-slate-50 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('selector.model')}</FormLabel>
                            <FormControl>
                              <Input placeholder="Camry" className="bg-slate-50 border-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('selector.year')}</FormLabel>
                          <FormControl>
                            <Input type="number" className="bg-slate-50 border-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="drivingConditions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('selector.conditions')}</FormLabel>
                          <FormControl>
                            <Input placeholder="..." className="bg-slate-50 border-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-slate-950 text-white hover:bg-slate-800 font-black h-12"
                      disabled={loading}
                    >
                      {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t('selector.analyzing')}</> : t('selector.btn')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {error && (
            <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3 text-red-600 animate-fade-in-up">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          {result && (
            <div className="mt-12 animate-fade-in-up">
              <Card className="bg-slate-50 border-slate-200 overflow-hidden">
                <CardHeader className="bg-slate-100">
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-slate-950 font-black">{t('selector.resultTitle')}</CardTitle>
                      <CardDescription className="text-slate-500">{t('selector.resultDesc')}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-slate-950 text-white px-4 py-1 text-base font-black border-none">
                      {result.recommendedOilType}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="font-black text-lg mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-slate-950" /> {t('selector.reasoning')}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{result.reasoning}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded-lg border border-slate-100">
                      <h5 className="font-black mb-2 uppercase text-[10px] tracking-widest text-slate-400">{t('selector.specs')}</h5>
                      <p className="text-sm font-bold text-slate-950">{result.specifications}</p>
                    </div>
                    {result.notes && (
                      <div className="p-4 bg-white rounded-lg border border-slate-100">
                        <h5 className="font-black mb-2 uppercase text-[10px] tracking-widest text-slate-400">{t('selector.notes')}</h5>
                        <p className="text-sm text-slate-500 italic">{result.notes}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
