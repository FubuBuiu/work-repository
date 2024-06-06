const PRODUCT_PREFIX = '/produtos-e-relacionados';
const SUBSTANCIAS_PREFIX = '/substancias';
const PRAGAS_PREFIX = '/pragas';
const CULTURAS_PREFIX = '/culturas';
const CLASSE_DE_USO_PREFIX = '/classe-de-uso';
const CLASSE_TOXICOLOGICA_PREFIX = '/classe-toxicologica';

const Routes = {
    PRODUTOS: {
        REGISTER: PRODUCT_PREFIX + '/produtos/cadastro',
        LIST: PRODUCT_PREFIX + '/produtos/',
        UPDATE: PRODUCT_PREFIX + 'produtos/update'
    },
    SUBSTANCIAS: {
        REGISTER: SUBSTANCIAS_PREFIX + '/cadastro',
        LIST: SUBSTANCIAS_PREFIX + '/',
        UPDATE: SUBSTANCIAS_PREFIX + '/update'
    },
    PRAGAS: {
        REGISTER: PRAGAS_PREFIX + '/cadastro',
        LIST: PRAGAS_PREFIX + '/',
        UPDATE: PRAGAS_PREFIX + '/update'
    },
    CULTURAS: {
        REGISTER: CULTURAS_PREFIX + '/cadastro',
        LIST: CULTURAS_PREFIX + '/',
        UPDATE: CULTURAS_PREFIX + '/update'
    },
    CLASSE_DE_USO: {
        REGISTER: CLASSE_DE_USO_PREFIX + '/cadastro',
        LIST: CLASSE_DE_USO_PREFIX + '/',
        UPDATE: CLASSE_DE_USO_PREFIX + '/update'
    },
    CLASSE_TOXICOLOGICA: {
        REGISTER: CLASSE_TOXICOLOGICA_PREFIX + '/cadastro',
        LIST: CLASSE_TOXICOLOGICA_PREFIX + '/',
        UPDATE: CLASSE_TOXICOLOGICA_PREFIX + '/update',
        NOVO: CLASSE_TOXICOLOGICA_PREFIX + '/novo'
    }
} as const;

enum Route {
    PRODUTOS = 'PRODUTOS',
    SUBSTANCIAS = 'SUBSTANCIAS',
    PRAGAS = 'PRAGAS',
    CULTURAS = 'CULTURAS',
    CLASSE_DE_USO = 'CLASSE_DE_USO',
    CLASSE_TOXICOLOGICA = 'CLASSE_TOXICOLOGICA'
}

type EndPath = keyof (typeof Routes)[Route];
type RoutesWithEndPaths = {
    [key in Route]: {
        [key in EndPath]: string;
    };
};

const ProductRouters: RoutesWithEndPaths = {
    PRODUTOS: Routes.PRODUTOS,
    SUBSTANCIAS: Routes.SUBSTANCIAS,
    PRAGAS: Routes.PRAGAS,
    CULTURAS: Routes.CULTURAS,
    CLASSE_DE_USO: Routes.CLASSE_DE_USO,
    CLASSE_TOXICOLOGICA: Routes.CLASSE_TOXICOLOGICA
};

export { ProductRouters };
