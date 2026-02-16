
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
import { ScrollArea } from '@/components/ui/scroll-area';

const formSchema = z.object({
  make: z.string().min(1, 'Укажите марку автомобиля'),
  model: z.string().min(1, 'Укажите модель автомобиля'),
  year: z.coerce.number().int().min(1950, 'Год должен быть не ранее 1950').max(new Date().getFullYear() + 1),
  drivingConditions: z.string().min(5, 'Опишите условия вождения подробнее'),
});

export const OilSelector = () => {
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
      const response = await aiPoweredOilSelector(values);
      setResult(response);
    } catch (err) {
      console.error(err);
      setError('Произошла ошибка при подборе масла. Пожалуйста, попробуйте позже.');
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
              <Badge className="bg-accent/20 text-accent border-accent/20">AI Технологии</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">
                Интеллектуальный <br />
                <span className="text-accent">подбор масла</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Наш AI-ассистент проанализирует технические характеристики вашего автомобиля и условия эксплуатации, чтобы подобрать идеальную формулу защиты двигателя.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-accent/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                  <p className="text-sm">Учитывает допуски производителя</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-accent/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                  <p className="text-sm">Анализирует стиль вождения и климат</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-accent/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-accent" /></div>
                  <p className="text-sm">Дает подробное обоснование выбора</p>
                </div>
              </div>
            </div>

            <Card className="md:w-1/2 bg-card border-border shadow-2xl shadow-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Параметры автомобиля
                </CardTitle>
                <CardDescription>Заполните форму для получения рекомендации</CardDescription>
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
                            <FormLabel>Марка</FormLabel>
                            <FormControl>
                              <Input placeholder="Напр. Toyota" className="bg-background" {...field} />
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
                            <FormLabel>Модель</FormLabel>
                            <FormControl>
                              <Input placeholder="Напр. Camry" className="bg-background" {...field} />
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
                          <FormLabel>Год выпуска</FormLabel>
                          <FormControl>
                            <Input type="number" className="bg-background" {...field} />
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
                          <FormLabel>Условия вождения</FormLabel>
                          <FormControl>
                            <Input placeholder="Напр. 70% город, 30% трасса, агрессивный стиль" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12"
                      disabled={loading}
                    >
                      {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Анализируем...</> : 'Подобрать масло'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {error && (
            <div className="mt-8 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-3 text-destructive animate-fade-in-up">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          {result && (
            <div className="mt-12 animate-fade-in-up">
              <Card className="bg-primary/10 border-accent/30 overflow-hidden">
                <CardHeader className="bg-primary/20">
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-accent">Рекомендация AI</CardTitle>
                      <CardDescription className="text-foreground/80">Оптимальный выбор для вашего автомобиля</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-accent text-accent px-4 py-1 text-base">
                      {result.recommendedOilType}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" /> Обоснование
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{result.reasoning}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-background/50 rounded-lg border border-border">
                      <h5 className="font-bold mb-2">Спецификации</h5>
                      <p className="text-sm text-accent">{result.specifications}</p>
                    </div>
                    {result.notes && (
                      <div className="p-4 bg-background/50 rounded-lg border border-border">
                        <h5 className="font-bold mb-2">Дополнительно</h5>
                        <p className="text-sm text-muted-foreground italic">{result.notes}</p>
                      </div>
                    )}
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Найти подходящее в каталоге
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
