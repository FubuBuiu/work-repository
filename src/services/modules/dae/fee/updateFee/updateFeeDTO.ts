import { UpdateApiRequest, UpdateRequest } from '@/services/modules/model/dae/fee/UpdateFeeModel';

export function updateFeeDTO(data: UpdateRequest): UpdateApiRequest {
    const request: UpdateApiRequest = {
        ...data,
        indexerQuantity: parseInt(data.indexerQuantity),
        isPerQuantity: data.isPerQuantity === 'true'
    };
    return request;
}
