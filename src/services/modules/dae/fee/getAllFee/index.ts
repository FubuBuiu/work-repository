import { AxiosResponse } from 'axios';

import { baseAPI } from '@/services';
import { GetRequestType, ResponseApiType, ResponseDTO } from '@/services/modules/model/dae/fee/GetAllFeeModel';

import { getAllFeeDTO } from './getAllFeeDTO';

const mockData = [
    {
        description: 'AGRO ALTERAÇÃO DE PRODUTO',
        id: '5b96c7cb-5d45-466f-8fef-9eb2d902297b',
        revenueCode: '464'
    },
    {
        description: 'AGRO ALTERAÇÃO DE PRODUTO',
        id: '5b96c7cb-5d45-466f-8fef-9eb2d902297b',
        revenueCode: '462'
    }
];
export async function getAllFee(request: GetRequestType): Promise<ResponseDTO> {
    try {
        const responseApi: ResponseApiType = await baseAPI.post('DAETax/getAll', request);
        const response = getAllFeeDTO(responseApi);
        return response;
    } catch (error: any) {
        return error;
    }
}
