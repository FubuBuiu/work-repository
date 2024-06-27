import { CreateApiRequest, CreateRequest } from '@/services/modules/model/dae/fee/CreateFeeModel';

export function createFeeDTO(data: CreateRequest): CreateApiRequest {
    const request: CreateApiRequest = {
        ...data,
        indexerQuantity: parseInt(data.indexerQuantity),
        isPerQuantity: data.isPerQuantity === 'true'
    };
    return request;
}
