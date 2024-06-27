import { baseAPI } from '@/services';
import { CreateApiRequest, CreateRequest } from '@/services/modules/model/dae/fee/CreateFeeModel';

import { createFeeDTO } from './createFeeDTO';

export async function createFee(req: CreateRequest) {
    try {
        const request: CreateApiRequest = createFeeDTO(req);
        await baseAPI.post('DAETax/', request);
    } catch (error: any) {
        return error;
    }
}
