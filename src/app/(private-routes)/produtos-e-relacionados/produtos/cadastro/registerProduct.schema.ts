import * as z from 'zod';

export const schemaRegisterProduct = z.object({
    marca_comercial: z.string().min(1, { message: 'O campo "Marca Comercial" é obrigatório.' }),
    vencimento_de_registro: z.string().min(1, 'O campo "Vencimento do Registro" é obrigatório.'),
    registro_mapa: z.string().min(1, 'O campo "Registro MAPA" é obrigatório.'),
    nome_busca_automatica_em_nf: z.string().min(1, 'O campo "Nome Busca Automática em NF" é obrigatório.'),
    empresa: z.string().min(1, 'O campo "Empresa" é obrigatório.'),
    classe_de_uso: z.string().min(1, 'O campo "Classe de Uso" é obrigatório.'),
    classe_toxicologica: z.string().min(1, 'O campo "Classe Toxicológica" é obrigatório.'),
    classe_ambiental: z.string().min(1, 'O campo "Classe Ambiental" é obrigatório.'),
    modo_de_acao: z.string().min(1, 'O campo "Modo de Ação" é obrigatório.'),
    modo_de_aplicacao: z.string().min(1, { message: 'O campo "Modo de Aplicação" é obrigatório.' }),
    observacoes: z.string(),
    inflamavel: z.boolean({ message: "O campo 'Inflamável' é obrigatório." }),
    corrosivo: z.boolean({ message: "O campo 'Corrosivo' é obrigatório." })
});
