const MAIN_PATH_PREFIX = '/utilitarios';
const LOGS_REPORT_PREFIX = '/relatorio-de-logs';
const FILTER_IMPORT_PREFIX = '/filtrar-importações';
const NCM_PREFIX = '/NCM';
const CONSULTATION_CREA_PREFIX = '/consultar-CREA';
const CONSULTATION_NF_PREFIX = '/consultar-NF';

const Routes = {
    LOGREPORTS: {
        REGISTER: MAIN_PATH_PREFIX + LOGS_REPORT_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + LOGS_REPORT_PREFIX + '/',
        UPDATE: LOGS_REPORT_PREFIX + '/atualizar'
    },
    FILTERIMPORTS: {
        REGISTER: MAIN_PATH_PREFIX + FILTER_IMPORT_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + FILTER_IMPORT_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + FILTER_IMPORT_PREFIX + '/atualizar'
    },
    CONSULTATIONCREAS: {
        REGISTER: MAIN_PATH_PREFIX + CONSULTATION_CREA_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + CONSULTATION_CREA_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + CONSULTATION_CREA_PREFIX + '/atualizar'
    },
    NCMS: {
        REGISTER: MAIN_PATH_PREFIX + NCM_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + NCM_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + NCM_PREFIX + '/atualizar'
    },
    CONSULTATIONNFS: {
        REGISTER: MAIN_PATH_PREFIX + CONSULTATION_NF_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + CONSULTATION_NF_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + CONSULTATION_NF_PREFIX + '/atualizar'
    }
} as const;

enum Route {
    LOGREPORTS = 'LOGREPORTS',
    FILTERIMPORTS = 'FILTERIMPORTS',
    CONSULTATIONCREAS = 'CONSULTATIONCREAS',
    NCMS = 'NCMS',
    CONSULTATIONNFS = 'CONSULTATIONNFS'
}

type EndPath = keyof (typeof Routes)[Route];
type RoutesWithEndPaths = {
    [key in Route]: {
        [key in EndPath]: string;
    };
};

const UtilitiesRouters: RoutesWithEndPaths = {
    LOGREPORTS: Routes.LOGREPORTS,
    FILTERIMPORTS: Routes.FILTERIMPORTS,
    CONSULTATIONCREAS: Routes.CONSULTATIONCREAS,
    NCMS: Routes.NCMS,
    CONSULTATIONNFS: Routes.CONSULTATIONNFS
};

export { UtilitiesRouters };
