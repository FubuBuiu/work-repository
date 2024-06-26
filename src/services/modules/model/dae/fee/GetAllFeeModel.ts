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

export type GetRequestType = {
    limit?: number;
    page?: number;
    search?: SearchType[];
    columnSearch?: string;
    filter?: FilterType[];
    orderBy?: OrderByType[];
    select?: string[];
};

export type DataType = {
    idDAETax: string;
    revenueCode: string;
    levelOne: {
        code: 'codigo';
        description: 'descricao';
    };
    levelTwo?: {
        code: 'codigo';
        description?: 'descricao';
    };
    levelThree?: {
        code: 'codigo';
        description?: 'descricao';
    };
    levelFour?: {
        code: 'codigo';
        description?: 'descricao';
    };
    levelFive?: {
        code: 'codigo';
        description?: 'descricao';
    };
};

export type Fee = {
    id: string;
    revenueCode: string;
    description?: string;
};

export type ResponseDTO = {
    feeList: Fee[];
    total: number;
};

export type ResponseApiType = {
    data: {
        message: string;
        data: DataType[];
        totalCount: number;
    };
};
