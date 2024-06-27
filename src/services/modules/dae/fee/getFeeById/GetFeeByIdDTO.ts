import { GetByIdApiResponse, GetByIdDTOResponse } from '@/services/modules/model/dae/fee/GetFeeByIdModel';

export function getFeeByIdDTO(apiResponse: GetByIdApiResponse): GetByIdDTOResponse {
    const response: GetByIdDTOResponse = {
        ...apiResponse.data.data,
        isPerQuantity: `${apiResponse.data.data.isPerQuantity}`
    };
    return response;
}
