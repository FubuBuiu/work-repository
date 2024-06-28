import { setTimeout } from 'timers';

import { baseAPI } from '@/services';
import { DataApi, GetAllApiResponse, GetAllDTOResponse, GetAllFeeRequest } from '@/services/modules/model/dae/fee/GetAllFeeModel';

import { getAllFeeDTO } from './getAllFeeDTO';

const mockData: DataApi[] = [
    {
        idDAETax: '1234567890',
        revenueCode: 'REV123',
        description: 'Descrição do item de receita',
        isPerQuantity: true,
        indexerQuantity: 10,
        unitOfMeasurement: 'DOCUMENTO',
        revenueGroup: 'ESTABLISHMENT_RENOVATION',
        observation: 'Observação sobre o item de receita',
        active: true,
        createdAt: new Date('2023-06-01T12:00:00Z'),
        updatedAt: new Date('2023-06-25T09:30:00Z')
    },
    {
        idDAETax: '12345890',
        revenueCode: 'REV123',
        description: 'Descrição do item de receita',
        isPerQuantity: true,
        indexerQuantity: 10,
        unitOfMeasurement: 'DOCUMENTO',
        revenueGroup: 'ESTABLISHMENT_RENOVATION',
        observation: 'Observação sobre o item de receita',
        active: true,
        createdAt: new Date('2023-06-01T12:00:00Z'),
        updatedAt: new Date('2023-06-25T09:30:00Z')
    },
    {
        idDAETax: '4567890',
        revenueCode: 'REV123',
        description: 'Descrição do item de receita',
        isPerQuantity: true,
        indexerQuantity: 10,
        unitOfMeasurement: 'DOCUMENTO',
        revenueGroup: 'ESTABLISHMENT_RENOVATION',
        observation: 'Observação sobre o item de receita',
        active: true,
        createdAt: new Date('2023-06-01T12:00:00Z'),
        updatedAt: new Date('2023-06-25T09:30:00Z')
    }
];
export async function getAllFee(request: GetAllFeeRequest): Promise<GetAllDTOResponse> {
    try {
        const responseApi = await new Promise<GetAllApiResponse>((resolve, reject) => {
            return setTimeout(() => {
                resolve({ data: { data: mockData, message: 'MENSAGEM', totalCount: 3 } });
            }, 5000);
        });
        // const responseApi: GetAllApiResponse = await baseAPI.post('DAETax/getAll', request);
        const response = getAllFeeDTO(responseApi);
        return response;
    } catch (error: any) {
        return error;
    }
}
