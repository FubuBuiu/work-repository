import * as z from 'zod';

export const schemaRegisterProduct = z.object({
    commercialBrand: z.string().min(1, { message: 'O campo "Marca Comercial" é obrigatório.' }),
    registrationExpiry: z.string().min(1, 'O campo "Vencimento do Registro" é obrigatório.'),
    mapaRegistration: z.string().min(1, 'O campo "Registro MAPA" é obrigatório.'),
    automaticSearchNameInNF: z.string().min(1, 'O campo "Nome Busca Automática em NF" é obrigatório.'),
    company: z.string().min(1, 'O campo "Empresa" é obrigatório.'),
    localization: z.string(),
    commercialName: z.string(),
    usageClass: z.string().min(1, 'O campo "Classe de Uso" é obrigatório.'),
    toxicologicalClass: z.string().min(1, 'O campo "Classe Toxicológica" é obrigatório.'),
    environmentalClass: z.string().min(1, 'O campo "Classe Ambiental" é obrigatório.'),
    modeOfAction: z.string().min(1, 'O campo "Modo de Ação" é obrigatório.'),
    applicationMethod: z.string().min(1, { message: 'O campo "Modo de Aplicação" é obrigatório.' }),
    observations: z.string(),
    flammable: z.boolean({ message: "O campo 'Inflamável' é obrigatório." }),
    corrosive: z.boolean({ message: "O campo 'Corrosivo' é obrigatório." })
});
