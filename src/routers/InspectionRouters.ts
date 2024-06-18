const MAIN_PATH_PREFIX = '/fiscalizacao';
const SEIZURE_PREFIX = '/apreensoes';
const INSPECTOR_PREFIX = '/fiscais';
const IRREGULATITIES_PREFIX = '/irregularidades';
const PROCESS_PREFIX = '/processos';
const SANCTION_PREFIX = '/sancoes';

const Routes = {
    SEIZURES: {
        REGISTER: MAIN_PATH_PREFIX + SEIZURE_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + SEIZURE_PREFIX + '/',
        UPDATE: SEIZURE_PREFIX + '/atualizar'
    },
    INSPECTORS: {
        REGISTER: MAIN_PATH_PREFIX + INSPECTOR_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + INSPECTOR_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + INSPECTOR_PREFIX + '/atualizar'
    },
    IRREGULARITIES: {
        REGISTER: MAIN_PATH_PREFIX + PROCESS_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + PROCESS_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + PROCESS_PREFIX + '/atualizar'
    },
    PROCESSES: {
        REGISTER: MAIN_PATH_PREFIX + IRREGULATITIES_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + IRREGULATITIES_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + IRREGULATITIES_PREFIX + '/atualizar'
    },
    SANCTIONS: {
        REGISTER: MAIN_PATH_PREFIX + SANCTION_PREFIX + '/cadastro',
        LIST: MAIN_PATH_PREFIX + SANCTION_PREFIX + '/',
        UPDATE: MAIN_PATH_PREFIX + SANCTION_PREFIX + '/atualizar'
    }
} as const;

enum Route {
    SEIZURES = 'SEIZURES',
    INSPECTORS = 'INSPECTORS',
    IRREGULARITIES = 'IRREGULARITIES',
    PROCESSES = 'PROCESSES',
    SANCTIONS = 'SANCTIONS'
}

type EndPath = keyof (typeof Routes)[Route];
type RoutesWithEndPaths = {
    [key in Route]: {
        [key in EndPath]: string;
    };
};

const InspectionRouters: RoutesWithEndPaths = {
    SEIZURES: Routes.SEIZURES,
    INSPECTORS: Routes.INSPECTORS,
    IRREGULARITIES: Routes.IRREGULARITIES,
    PROCESSES: Routes.PROCESSES,
    SANCTIONS: Routes.SANCTIONS
};

export { InspectionRouters };
