export namespace RouterPagesEnum {
    export enum PRODUTOS_RELACIONADOS {
        PRODUTOS = '/produtos-e-relacionados/produtos',
        SUBSTANCIAS = '/produtos-e-relacionados/substancias',
        PRAGAS = '/produtos-e-relacionados/pragas',
        CULTURAS = '/produtos-e-relacionados/culturas',
        CLASSE_DE_USO = '/produtos-e-relacionados/classe-de-uso',
        CLASSE_TOXICOLOGICA = '/produtos-e-relacionados/classe-toxicologica'
    }

    export enum ENTIDADES {
        FABRICANTES = '/entidades/fabricantes',
        PAGEENTIDADES_PRODUTOS = '/entidades/produtores',
        PRODUTORES = '/entidades/produtores',
        REVENDAS = '/entidades/revendas',
        APLICADORES = '/entidades/aplicadores',
        CENTRAIS_DE_DESCARTE = '/entidades/centrais-de-descarte',
        ESTACOES_EXPERIMENTAIS = '/entidades/estacoes-experimentais'
    }

    export enum CONTROLE_ESTOQUE {
        REVENDEDORES = '/controle-de-estoque/revendedores',
        PRODUTORES = '/controle-de-estoque/produtores',
        APLICADORES = '/controle-de-estoque/aplicadores',
        CENTRAIS_DE_DESCARTE = '/controle-de-estoque/centrais-de-descartes',
        REVENDAS_RECEBIMENTO = '/controle-de-estoque/revendas-recebimento-de-estoque'
    }

    export enum UTILITARIOS {
        RELATORIO_DE_LOGS = '/utilitarios/relatorio-de-logs',
        FILTRAR_IMPORTACOES = '/utilitarios/filtrar-importacoes',
        NCM = '/utilitarios/ncm',
        CONSULTA_CREA = '/utilitarios/consulta-crea',
        CONSULTAR_NF = '/utilitarios/consultar-nf'
    }

    export enum FISCALIZACAO {
        APREENSOES = '/fiscalizacao/apreensoes',
        FISCAIS = '/fiscalizacao/fiscais',
        IRREGULARIDADES = '/fiscalizacao/irregularidades',
        PROCESSOS = '/fiscalizacao/processos',
        SANCOES = '/fiscalizacao/sancoes'
    }

    export enum MOVIMENTACAO {
        DAR_BAIXA = '/movimentacao/dar-baixa',
        INCLUIR = '/movimentacao/incluir'
    }
}
