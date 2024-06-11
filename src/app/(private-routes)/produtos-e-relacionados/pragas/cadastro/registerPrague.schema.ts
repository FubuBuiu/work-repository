import * as z from 'zod';

export const registerCultureSchema = z.object({
    nameScientific: z.string().min(3, "O campo 'Nome Cientifico' é obrigatorio"),
    nameVulgar: z.string().min(3, "O campo 'Nome Vulgar' é obrigatorio"),
    agentTransmitting: z.string().min(3, "O campo 'Agente Transmissor' é obrigatorio"),
    typePrague: z.string().min(3, "O campo 'Tipo de Praga' é obrigatorio"),
    symptoms: z.string(),
    bioecology: z.string(),
    observation: z.string(),
    relatedCrops: z.string(),
    cropList: z.array(z.string())
});
