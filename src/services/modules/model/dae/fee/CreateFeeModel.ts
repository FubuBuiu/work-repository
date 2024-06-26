export type FeeType = 'POLICE_POWER_FEE' | 'EXECUTIVE_SERVICE_FEE' | 'PENALTIES';

export enum FeeTypeEnum {
    POLICE_POWER_FEE = 'Taxa pelo poder de polícia',
    EXECUTIVE_SERVICE_FEE = 'Taxas pela prestação do serviço na área do poder executivo',
    PENALTIES = 'Multas'
}

export type Fee = {
    revenueCode: string;
    type: FeeType;
    feeUsedToIssueGTA: boolean;
    byLanes: boolean;
    isIndexed: false;
    indexer: string;
    indexerName: string; //TODO Verificar depois se esse campo vai existir
    indexerQuantity: number;
    isContributorAgriculturalFund: boolean;
    byDocument: false;
    unitOfMeasure: string; //TODO Verificar depois os tipos possíveis para essa variável
    isByDocumentAndQuantity: false;
    revenueGroup: string;
    levelOne: {
        code: 'codigo';
        description: 'descricao';
    };
    levelTwo: {
        code: 'codigo';
        description: 'descricao';
    };
    levelThree: {
        code: 'codigo';
        description: 'descricao';
    };
    levelFour: {
        code: 'codigo';
        description: 'descricao';
    };
    levelFive: {
        code: 'codigo';
        description: 'descricao';
    };
    observation: 'observacao';
};
