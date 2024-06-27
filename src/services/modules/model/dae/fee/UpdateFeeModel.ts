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

export type UpdateApiRequest = {
    revenueCode: string;
    description: string;
    indexerQuantity: number;
    isPerQuantity: boolean;
    unitOfMeasurement: UnitOfMeasurementType;
    revenueGroup: RevenueGroupType;
    observation?: string;
    active?: boolean;
};

export type UpdateRequest = Omit<UpdateApiRequest, 'indexerQuantity' | 'isPerQuantity'> & {
    id: string;
    indexerQuantity: string;
    isPerQuantity: string;
};
