const MAIN_PATH_PREFIX = '/controle-de-estoque';
const RESELLER_PREFIX = '/revendedores';
const PRODUCER_PREFIX = '/produtores';
const APPLICATOR_PREFIX = '/aplicadores';
const DISPOSAL_CENTER_PREFIX = '/centrais-de-descartes';
const RESALE_PREFIX = '/revendas';

const Routes = {
    RESELLERS: {
        REGISTER: MAIN_PATH_PREFIX + RESELLER_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + RESELLER_PREFIX + '/',
        UPDATE: RESELLER_PREFIX + '/atualizar'
    },
    PRODUCERS: {
        REGISTER: MAIN_PATH_PREFIX + PRODUCER_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + PRODUCER_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + PRODUCER_PREFIX + '/atualizar'
    },
    DISPOSALCENTERS: {
        REGISTER: MAIN_PATH_PREFIX + DISPOSAL_CENTER_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + DISPOSAL_CENTER_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + DISPOSAL_CENTER_PREFIX + '/atualizar'
    },
    APPLICATORS: {
        REGISTER: MAIN_PATH_PREFIX + APPLICATOR_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + APPLICATOR_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + APPLICATOR_PREFIX + '/atualizar'
    },
    RESALES: {
        REGISTER: MAIN_PATH_PREFIX + RESALE_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + RESALE_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + RESALE_PREFIX + '/atualizar'
    }
} as const;

enum Route {
    RESELLERS = 'RESELLERS',
    PRODUCERS = 'PRODUCERS',
    DISPOSALCENTERS = 'DISPOSALCENTERS',
    APPLICATORS = 'APPLICATORS',
    RESALES = 'RESALES'
}

type EndPath = keyof (typeof Routes)[Route];
type RoutesWithEndPaths = {
    [key in Route]: {
        [key in EndPath]: string;
    };
};

const StockControlRouters: RoutesWithEndPaths = {
    RESELLERS: Routes.RESELLERS,
    PRODUCERS: Routes.PRODUCERS,
    DISPOSALCENTERS: Routes.DISPOSALCENTERS,
    APPLICATORS: Routes.APPLICATORS,
    RESALES: Routes.RESALES
};

export { StockControlRouters };
