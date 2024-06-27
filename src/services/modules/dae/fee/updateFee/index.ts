import { baseAPI } from '@/services';
import { UpdateApiRequest, UpdateRequest } from '@/services/modules/model/dae/fee/UpdateFeeModel';

import { updateFeeDTO } from './updateFeeDTO';

export async function updateFee(req: UpdateRequest) {
    try {
        const request: UpdateApiRequest = updateFeeDTO(req);
        await baseAPI.put(`DAETax/${req.id}`, request);
    } catch (error: any) {
        return error;
    }
}
