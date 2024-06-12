import * as z from 'zod';

export const registerCultureSchema = z.object({
    description: z.string().min(3, 'O campo "Descrição" é obrigatorio'),
    acronym: z.string().min(3, 'O campo "Sigla/Grau de Toxicidade" é obrigatorio'),
    colorRange: z.string().min(3, 'O campo "Cor da Faixa" é obrigatorio'),
    classDanger: z.string(),
    observation: z.string(),
    wordWarning: z.string(),
    pictogram: z.string()
});
