import * as z from 'zod';

export const registerCultureSchema = z.object({
    scientificName: z.string().min(3, "O campo 'Nome Cientifico' é obrigatorio"),
    vulgarName: z.string().min(3, "O campo 'Nome Vulgar' é obrigatorio"),
    agentTransmitting: z.string().min(3, "O campo 'Agente Transmissor' é obrigatorio"),
    pragueType: z.string().min(3, "O campo 'Tipo de Praga' é obrigatorio"),
    symptoms: z.string(),
    bioecology: z.string(),
    observation: z.string(),
    relatedCultures: z.string(),
    cropList: z.array(z.string())
});
