export type FeeType = 'POLICE_POWER_FEE' | 'EXECUTIVE_SERVICE_FEE' | 'PENALTIES';

export enum FeeTypeEnum {
    POLICE_POWER_FEE = 'Taxa pelo poder de polícia',
    EXECUTIVE_SERVICE_FEE = 'Taxas pela prestação do serviço na área do poder executivo',
    PENALTIES = 'Multas'
}

export type UnitOfMeasurementType = 'DOCUMENTO' | 'PRODUTO';

export type RevenueGroupType =
    | 'ESTABLISHMENT_REGISTER'
    | 'CHANGE_OF_ESTABLISHMENT'
    | 'ESTABLISHMENT_RENOVATION'
    | 'PROVIDER_REGISTER'
    | 'PROVIDER_RENEWAL'
    | 'CHANGE_OF_PROVIDER'
    | 'PRODUCT_REGISTER'
    | 'PRODUCT_CHANGER'
    | 'PRODUCT_MAINTENANCE';

export type Fee = {
    revenueCode: string;
    description: string;
    isPerQuantity: boolean;
    indexerQuantity: number;
    unitOfMeasurement: UnitOfMeasurementType;
    revenueGroup: RevenueGroupType;
    observation?: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
};
