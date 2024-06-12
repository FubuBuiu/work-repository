import * as z from 'zod';

export const schemaSubsistence = z.object({
    scientificName: z.string().min(1, 'O campo "Nome Científico" é obrigatório'),
    popularName: z.string().min(1, 'O campo "Nome Vulgar" é obrigatório'),
    chemicalGroup: z.string().optional(),
    anvisaCode: z.string().optional(),
    observation: z.string().optional()
});
