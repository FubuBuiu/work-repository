const PRODUCT_PREFIX = '/produtos-e-relacionados';
const SUBSTANCES_PREFIX = '/substancias';
const PRAGUE_PREFIX = '/pragas';
const CULTURES_PREFIX = '/culturas';
const CLASS_IN_USE_PREFIX = '/classe-de-uso';
const CLASS_TOXICOLOGICAL_PREFIX = '/classe-toxicologica';

const Routes = {
    PRODUCTS: {
        REGISTER: PRODUCT_PREFIX + '/produtos/cadastro',
        LIST: PRODUCT_PREFIX + '/produtos/',
        UPDATE: PRODUCT_PREFIX + PRODUCT_PREFIX + 'produtos/update'
    },
    SUBSTANCES: {
        REGISTER: PRODUCT_PREFIX + SUBSTANCES_PREFIX + '/cadastro',
        LIST: PRODUCT_PREFIX + SUBSTANCES_PREFIX + '/',
        UPDATE: SUBSTANCES_PREFIX + '/update'
    },
    PRAGUE: {
        REGISTER: PRODUCT_PREFIX + PRAGUE_PREFIX + '/cadastro',
        LIST: PRODUCT_PREFIX + PRAGUE_PREFIX + '/',
        UPDATE: PRODUCT_PREFIX + PRAGUE_PREFIX + '/update'
    },
    CULTURES: {
        REGISTER: PRODUCT_PREFIX + CULTURES_PREFIX + '/cadastro',
        LIST: PRODUCT_PREFIX + CULTURES_PREFIX + '/',
        UPDATE: PRODUCT_PREFIX + CULTURES_PREFIX + '/update'
    },
    CLASS_IN_USE: {
        REGISTER: PRODUCT_PREFIX + CLASS_IN_USE_PREFIX + '/cadastro',
        LIST: PRODUCT_PREFIX + CLASS_IN_USE_PREFIX + '/',
        UPDATE: PRODUCT_PREFIX + CLASS_IN_USE_PREFIX + '/update'
    },
    CLASS_TOXICOLOGICAL: {
        REGISTER: PRODUCT_PREFIX + CLASS_TOXICOLOGICAL_PREFIX + '/cadastro',
        LIST: PRODUCT_PREFIX + CLASS_TOXICOLOGICAL_PREFIX + '/',
        UPDATE: PRODUCT_PREFIX + CLASS_TOXICOLOGICAL_PREFIX + '/update'
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
