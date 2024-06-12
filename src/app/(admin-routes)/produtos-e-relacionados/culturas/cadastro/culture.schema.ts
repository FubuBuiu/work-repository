import * as z from 'zod';

export const cultureSchema = z.object({
    scientificName: z.string().min(3, { message: 'O campo "Nome científico" é obrigatório' }),
    vulgarName: z.string().min(3, { message: 'O campo "Nome vulgar" é obrigatório' }),
    observation: z.string(),
    pragueDisease: z.string(),
    pragueDiseaseList: z.array(z.string())
});
