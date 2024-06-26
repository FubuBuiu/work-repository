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

export type UpdateRequest = {
    revenueCode?: string;
    description?: string;
    indexerQuantity?: number;
    unitOfMeasurement: UnitOfMeasurementType;
    revenueGroup: RevenueGroupType;
    observation?: string;
    active?: boolean;
};
