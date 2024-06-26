import { baseAPI } from '@/services';

import { updateFeeDTO } from './updateFeeDTO';

export async function updateFee({ data, id }: { data: any; id: string }) {
    try {
        const request = updateFeeDTO(data);
        await baseAPI.put(`DAETax/${id}`, request);
    } catch (error: any) {
        return error;
    }
}
