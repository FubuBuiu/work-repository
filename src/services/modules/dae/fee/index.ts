import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { GetRequestType, ResponseDTO } from '../../model/dae/fee/GetAllFeeModel';
import { getAllFee } from './getAllFee';

export default function getAllFeeQuery(request: GetRequestType) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey: ['getAllFee', request.page, request.limit],
        queryFn: async (): Promise<ResponseDTO> => await getAllFee(request),
        //TODO Ver se é necessário esses parâmetros
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60,
        retry: 1,
        retryDelay: 1000
    });
}
