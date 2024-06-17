const MAIN_PATH_PREFIX = '/produtos-e-relacionados';
const SUBSTANCES_PREFIX = '/substancias';
const PRAGUE_PREFIX = '/pragas';
const CULTURES_PREFIX = '/culturas';
const CLASS_IN_USE_PREFIX = '/classe-de-uso';
const CLASS_TOXICOLOGICAL_PREFIX = '/classe-toxicologica';

const Routes = {
    PRODUCTS: {
        REGISTER: MAIN_PATH_PREFIX + '/produtos/cadastro',
        LIST: MAIN_PATH_PREFIX + '/produtos/',
        UPDATE: MAIN_PATH_PREFIX + 'produtos/atualizar'
    },
    SUBSTANCES: {
        REGISTER: MAIN_PATH_PREFIX + SUBSTANCES_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + SUBSTANCES_PREFIX + '/',
        UPDATE: SUBSTANCES_PREFIX + '/atualizar'
    },
    PRAGUE: {
        REGISTER: MAIN_PATH_PREFIX + PRAGUE_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + PRAGUE_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + PRAGUE_PREFIX + '/atualizar'
    },
    CULTURES: {
        REGISTER: MAIN_PATH_PREFIX + CULTURES_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + CULTURES_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + CULTURES_PREFIX + '/atualizar'
    },
    CLASS_IN_USE: {
        REGISTER: MAIN_PATH_PREFIX + CLASS_IN_USE_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + CLASS_IN_USE_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + CLASS_IN_USE_PREFIX + '/atualizar'
    },
    CLASS_TOXICOLOGICAL: {
        REGISTER: MAIN_PATH_PREFIX + CLASS_TOXICOLOGICAL_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + CLASS_TOXICOLOGICAL_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + CLASS_TOXICOLOGICAL_PREFIX + '/atualizar'
    }
} as const;

enum Route {
    PRODUCTS = 'PRODUCTS',
    SUBSTANCES = 'SUBSTANCES',
    PRAGUE = 'PRAGUE',
    CULTURES = 'CULTURES',
    CLASS_IN_USE = 'CLASS_IN_USE',
    CLASS_TOXICOLOGICAL = 'CLASS_TOXICOLOGICAL'
}

type EndPath = keyof (typeof Routes)[Route];
type RoutesWithEndPaths = {
    [key in Route]: {
        [key in EndPath]: string;
    };
};

const ProductRouters: RoutesWithEndPaths = {
    PRODUCTS: Routes.PRODUCTS,
    SUBSTANCES: Routes.SUBSTANCES,
    PRAGUE: Routes.PRAGUE,
    CULTURES: Routes.CULTURES,
    CLASS_IN_USE: Routes.CLASS_IN_USE,
    CLASS_TOXICOLOGICAL: Routes.CLASS_TOXICOLOGICAL
};

export { ProductRouters };
