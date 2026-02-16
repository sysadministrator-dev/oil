
'use server';
/**
 * @fileOverview An AI agent for recommending optimal engine oil with multi-language support.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPoweredOilSelectorInputSchema = z.object({
  make: z.string().describe('The make of the vehicle.'),
  model: z.string().describe('The model of the vehicle.'),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1).describe('The manufacturing year.'),
  drivingConditions: z.string().describe('Description of driving conditions.'),
  language: z.string().optional().default('Russian').describe('The language in which the response should be provided.'),
});
export type AiPoweredOilSelectorInput = z.infer<typeof AiPoweredOilSelectorInputSchema>;

const AiPoweredOilSelectorOutputSchema = z.object({
  recommendedOilType: z.string().describe('Recommended engine oil type.'),
  reasoning: z.string().describe('Detailed reasoning.'),
  specifications: z.string().describe('Key specifications.'),
  notes: z.string().optional().describe('Additional notes.'),
});
export type AiPoweredOilSelectorOutput = z.infer<typeof AiPoweredOilSelectorOutputSchema>;

export async function aiPoweredOilSelector(input: AiPoweredOilSelectorInput): Promise<AiPoweredOilSelectorOutput> {
  return aiPoweredOilSelectorFlow(input);
}

const oilSelectorPrompt = ai.definePrompt({
  name: 'oilSelectorPrompt',
  input: {schema: AiPoweredOilSelectorInputSchema},
  output: {schema: AiPoweredOilSelectorOutputSchema},
  prompt: `You are an expert automotive mechanic. Provide an oil recommendation.
  
  IMPORTANT: You MUST provide the response in the following language: {{{language}}}.

  Vehicle: {{{make}}} {{{model}}} ({{{year}}})
  Conditions: {{{drivingConditions}}}

  Provide a professional recommendation including the oil type, technical reasoning, specs, and safety notes.`,
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
