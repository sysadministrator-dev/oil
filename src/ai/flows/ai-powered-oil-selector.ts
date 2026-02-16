'use server';
/**
 * @fileOverview An AI agent for recommending optimal engine oil.
 *
 * - aiPoweredOilSelector - A function that handles the oil selection process.
 * - AiPoweredOilSelectorInput - The input type for the aiPoweredOilSelector function.
 * - AiPoweredOilSelectorOutput - The return type for the aiPoweredOilSelector function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPoweredOilSelectorInputSchema = z.object({
  make: z.string().describe('The make of the vehicle (e.g., "Toyota", "BMW").'),
  model: z.string().describe('The model of the vehicle (e.g., "Camry", "X5").'),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1).describe('The manufacturing year of the vehicle.'),
  drivingConditions: z.string().describe('A description of typical driving conditions (e.g., "daily commute, mostly city driving", "frequent highway trips with heavy loads").'),
});
export type AiPoweredOilSelectorInput = z.infer<typeof AiPoweredOilSelectorInputSchema>;

const AiPoweredOilSelectorOutputSchema = z.object({
  recommendedOilType: z.string().describe('The recommended engine oil type (e.g., "Full Synthetic 5W-30").'),
  reasoning: z.string().describe('The detailed reasoning behind the oil recommendation, considering vehicle specifications and driving conditions.'),
  specifications: z.string().describe('Key oil specifications and standards that the recommended oil should meet (e.g., "API SN PLUS, ACEA C3").'),
  notes: z.string().optional().describe('Any additional notes, warnings, or tips regarding oil usage or maintenance.'),
});
export type AiPoweredOilSelectorOutput = z.infer<typeof AiPoweredOilSelectorOutputSchema>;

export async function aiPoweredOilSelector(input: AiPoweredOilSelectorInput): Promise<AiPoweredOilSelectorOutput> {
  return aiPoweredOilSelectorFlow(input);
}

const oilSelectorPrompt = ai.definePrompt({
  name: 'oilSelectorPrompt',
  input: {schema: AiPoweredOilSelectorInputSchema},
  output: {schema: AiPoweredOilSelectorOutputSchema},
  prompt: `Вы являетесь экспертом по автомобильной механике и моторным маслам. Ваша задача - порекомендовать оптимальное моторное масло для транспортного средства пользователя на основе предоставленных данных. Учитывайте все факторы, включая спецификации автомобиля и условия вождения, чтобы дать точную и хорошо обоснованную рекомендацию.

Марка автомобиля: {{{make}}}
Модель автомобиля: {{{model}}}
Год выпуска: {{{year}}}
Условия вождения: {{{drivingConditions}}}

На основе этой информации, предоставьте рекомендацию по моторному маслу в следующем формате:`,
});

const aiPoweredOilSelectorFlow = ai.defineFlow(
  {
    name: 'aiPoweredOilSelectorFlow',
    inputSchema: AiPoweredOilSelectorInputSchema,
    outputSchema: AiPoweredOilSelectorOutputSchema,
  },
  async (input) => {
    const {output} = await oilSelectorPrompt(input);
    return output!;
  }
);
