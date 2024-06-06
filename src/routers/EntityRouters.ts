const PREFIX_FABRICANTES = 'entidades/fabricantes';
const PREFIX_PRODUTOS = '/produtos';
const PREFIX_REVENDEDORES = '/revendedores';
const PREFIX_PRODUTORES = '/produtores';
const PREFIX_APLICADORES = '/aplicadores';
const PREFIX_CENTRAIS_DE_DESCARTE = '/centrais-de-descarte';
const PREFIX_ESTACOES_EXPERIMENTAIS = '/estacoes-experimentais';

const Routes = {
    FABRICANTES: {
        REGISTER: PREFIX_FABRICANTES + '/register',
        LIST: PREFIX_FABRICANTES + '/',
        UPDATE: PREFIX_FABRICANTES + '/update'
    },
    PRODUTOS: {
        REGISTER: PREFIX_PRODUTOS + '/register',
        LIST: PREFIX_PRODUTOS + '/',
        UPDATE: PREFIX_PRODUTOS + '/update'
    },
    REVENDEDORES: {
        REGISTER: PREFIX_REVENDEDORES + '/register',
        LIST: PREFIX_REVENDEDORES + '/',
        UPDATE: PREFIX_REVENDEDORES + '/update'
    },
    PRODUTORES: {
        REGISTER: PREFIX_PRODUTORES + '/register',
        LIST: PREFIX_PRODUTORES + '/',
        UPDATE: PREFIX_PRODUTORES + '/update'
    },
    APLICADORES: {
        REGISTER: PREFIX_APLICADORES + '/register',
        LIST: PREFIX_APLICADORES + '/',
        UPDATE: PREFIX_APLICADORES + '/update'
    },
    CENTRAIS_DE_DESCARTE: {
        REGISTER: PREFIX_CENTRAIS_DE_DESCARTE + '/register',
        LIST: PREFIX_CENTRAIS_DE_DESCARTE + '/',
        UPDATE: PREFIX_CENTRAIS_DE_DESCARTE + '/update'
    },
    ESTACOES_EXPERIMENTAIS: {
        REGISTER: PREFIX_ESTACOES_EXPERIMENTAIS + '/register',
        LIST: PREFIX_ESTACOES_EXPERIMENTAIS + '/',
        UPDATE: PREFIX_ESTACOES_EXPERIMENTAIS + '/update'
    }
} as const;

enum Route {
    FABRICANTES = 'FABRICANTES',
    PRODUTOS = 'PRODUTOS',
    REVENDEDORES = 'REVENDEDORES',
    PRODUTORES = 'PRODUTORES',
    APLICADORES = 'APLICADORES',
    CENTRAIS_DE_DESCARTE = 'CENTRAIS_DE_DESCARTE',
    ESTACOES_EXPERIMENTAIS = 'ESTACOES_EXPERIMENTAIS'
}

type EndPath = keyof (typeof Routes)[Route];
type RoutesWithEndPaths = {
    [key in Route]: {
        [key in EndPath]: string;
    };
};

const EntitysRouter: RoutesWithEndPaths = {
    FABRICANTES: Routes.FABRICANTES,
    PRODUTOS: Routes.PRODUTOS,
    REVENDEDORES: Routes.REVENDEDORES,
    PRODUTORES: Routes.PRODUTORES,
    APLICADORES: Routes.APLICADORES,
    CENTRAIS_DE_DESCARTE: Routes.CENTRAIS_DE_DESCARTE,
    ESTACOES_EXPERIMENTAIS: Routes.ESTACOES_EXPERIMENTAIS
};

export { EntitysRouter };
