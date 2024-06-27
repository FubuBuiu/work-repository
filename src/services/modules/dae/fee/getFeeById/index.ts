import { baseAPI } from '@/services';
import { GetByIdApiResponse, GetByIdDTOResponse } from '@/services/modules/model/dae/fee/GetFeeByIdModel';

import { getFeeByIdDTO } from './GetFeeByIdDTO';

export async function getFeeById(id: string): Promise<GetByIdDTOResponse> {
    try {
        const apiResponse: GetByIdApiResponse = await baseAPI.get(`DAETax/${id}`);
        const response: GetByIdDTOResponse = getFeeByIdDTO(apiResponse);
        return response;
    } catch (error: any) {
        return error;
    }
}
