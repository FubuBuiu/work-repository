import { setTimeout } from 'timers';

import { baseAPI } from '@/services';
import { GetRequestType, ResponseApiType, ResponseDTO } from '@/services/modules/model/dae/fee/GetAllFeeModel';

import { getAllFeeDTO } from './getAllFeeDTO';

const mockData = [
    {
        idDAETax: 'alsdamsd',
        revenueCode: 'RC001',
        type: 'POLICE_POWER_FEE',
        feeUsedToIssueGTA: true,
        byLanes: false,
        isIndexed: false,
        indexer: '',
        indexerName: '',
        indexerQuantity: 0,
        isContributorAgriculturalFund: true,
        byDocument: false,
        unitOfMeasure: 'kg',
        isByDocumentAndQuantity: false,
        revenueGroup: 'RG01',
        levelOne: {
            code: 'L1C01',
            description: 'Level One Description 01'
        },
        levelTwo: {
            code: 'L2C01',
            description: 'Level Two Description 01'
        },
        levelThree: {
            code: 'L3C01',
            description: 'Level Three Description 01'
        },
        levelFour: {
            code: 'L4C01',
            description: 'Level Four Description 01'
        },
        levelFive: {
            code: 'L5C01',
            description: 'Level Five Description 01'
        },
        observation: 'Observation 01'
    },
    {
        idDAETax: 'dnjnjinibe',
        revenueCode: 'RC002',
        type: 'EXECUTIVE_SERVICE_FEE',
        feeUsedToIssueGTA: false,
        byLanes: true,
        isIndexed: false,
        indexer: '',
        indexerName: '',
        indexerQuantity: 0,
        isContributorAgriculturalFund: false,
        byDocument: false,
        unitOfMeasure: 'liters',
        isByDocumentAndQuantity: false,
        revenueGroup: 'RG02',
        levelOne: {
            code: 'L1C02',
            description: 'Level One Description 02'
        },
        levelTwo: {
            code: 'L2C02',
            description: 'Level Two Description 02'
        },
        levelThree: {
            code: 'L3C02',
            description: 'Level Three Description 02'
        },
        levelFour: {
            code: 'L4C02',
            description: 'Level Four Description 02'
        },
        levelFive: {
            code: 'L5C02',
            description: 'Level Five Description 02'
        },
        observation: 'Observation 02'
    },
    {
        idDAETax: 'poruehtipqn',
        revenueCode: 'RC003',
        type: 'PENALTIES',
        feeUsedToIssueGTA: false,
        byLanes: false,
        isIndexed: false,
        indexer: '',
        indexerName: '',
        indexerQuantity: 0,
        isContributorAgriculturalFund: true,
        byDocument: false,
        unitOfMeasure: 'units',
        isByDocumentAndQuantity: false,
        revenueGroup: 'RG03',
        levelOne: {
            code: 'L1C03',
            description: 'Level One Description 03'
        },
        levelTwo: {
            code: 'L2C03',
            description: 'Level Two Description 03'
        },
        levelThree: {
            code: 'L3C03',
            description: 'Level Three Description 03'
        },
        levelFour: {
            code: 'L4C03',
            description: 'Level Four Description 03'
        },
        levelFive: {
            code: 'L5C03',
            description: 'Level Five Description 03'
        },
        observation: 'Observation 03'
    }
];
export async function getAllFee(request: GetRequestType): Promise<ResponseDTO> {
    try {
        const responseApi = await new Promise<ResponseApiType>((resolve, reject) => {
            return setTimeout(() => {
                resolve({ data: { data: mockData, message: 'MENSAGEM', totalCount: 3 } });
            }, 5000);
        });
        // const responseApi: ResponseApiType = await baseAPI.post('DAETax/getAll', request);
        const response = getAllFeeDTO(responseApi);
        return response;
    } catch (error: any) {
        return error;
    }
}
