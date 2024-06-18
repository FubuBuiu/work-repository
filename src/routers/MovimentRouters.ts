const MAIN_PATH_PREFIX = '/movimentacoes';
const WRITE_OFF_PREFIX = '/dar-baixa';
const INCLUDE_PREFIX = '/incluir';

const Routes = {
    WRITEOFFS: {
        REGISTER: MAIN_PATH_PREFIX + WRITE_OFF_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + WRITE_OFF_PREFIX + '/',
        UPDATE: WRITE_OFF_PREFIX + '/atualizar'
    },
    INCLUDES: {
        REGISTER: MAIN_PATH_PREFIX + INCLUDE_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + INCLUDE_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + INCLUDE_PREFIX + '/atualizar'
    }
} as const;

enum Route {
    WRITEOFFS = 'WRITEOFFS',
    INCLUDES = 'INCLUDES'
}

type EndPath = keyof (typeof Routes)[Route];
type RoutesWithEndPaths = {
    [key in Route]: {
        [key in EndPath]: string;
    };
};

const MovimentRouters: RoutesWithEndPaths = {
    WRITEOFFS: Routes.WRITEOFFS,
    INCLUDES: Routes.INCLUDES
};

export { MovimentRouters };
