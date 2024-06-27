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

export type DataApi = {
    idDAETax: string;
    revenueCode: string;
    description: string;
    isPerQuantity: boolean;
    indexerQuantity: number;
    unitOfMeasurement: UnitOfMeasurementType;
    revenueGroup: RevenueGroupType;
    observation?: string;
    active?: boolean;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};
export type GetByIdApiResponse = {
    data: {
        message: string;
        data: DataApi;
    };
};

type IsPerQuantityType = 'true' | 'false';

export type GetByIdDTOResponse = Omit<DataApi, 'isPerQuantity'> & {
    isPerQuantity: IsPerQuantityType;
};
