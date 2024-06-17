import * as z from 'zod';

export const registerClassUseSchema = z.object({
    description: z.string().min(1, 'O campo "Descrição" é obrigatório'),
    acronym: z.string().min(1, 'O campo "Sigla" é obrigatório'),
    situation: z.string().min(1, 'O campo "Situação" é obrigatório'),
    numberCAS: z.string(),
    observation: z.string().optional()
});
