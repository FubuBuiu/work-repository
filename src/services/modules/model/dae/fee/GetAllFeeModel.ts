import { IconType } from 'react-icons';

export type SearchType = {
    attribute: string;
    operator?: 'contains' | 'startsWith' | 'endsWith' | 'equals';
    value: string;
};

export type FilterType = {
    attribute: string;
    value: string | boolean;
};

export type OrderByType = {
    attribute: string;
    order?: 'asc' | 'desc';
};

export type GetAllFeeRequest = {
    limit?: number;
    page?: number;
    search?: SearchType[];
    columnSearch?: string;
    filter?: FilterType[];
    orderBy?: OrderByType[];
    select?: string[];
};

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

export type GetAllApiResponse = {
    data: {
        message: string;
        data: DataApi[];
        totalCount: number;
    };
};

export type Action = {
    label?: string;
    toolTipText?: string;
    icon?: { icon: IconType; size?: number | string; color?: string };
    actionName: string;
    auxValue?: any;
};

export type Fee = {
    id: string;
    revenueCode: string;
    indexerQuantity: number;
    description?: string;
    actions?: Action[];
};

export type GetAllDTOResponse = {
    feeList: Fee[];
    total: number;
};
