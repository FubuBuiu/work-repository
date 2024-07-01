import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';

import { GetAllDTOResponse, GetAllFeeRequest } from '../../model/dae/fee/GetAllFeeModel';
import { GetByIdDTOResponse } from '../../model/dae/fee/GetFeeByIdModel';
import { UpdateRequest } from '../../model/dae/fee/UpdateFeeModel';
import { deleteFee } from './deleteFee';
import { getAllFee } from './getAllFee';
import { getFeeById } from './getFeeById';
import { updateFee } from './updateFee';

export function GetAllFeeQuery(request: GetAllFeeRequest) {
    return useQuery({
        queryKey: ['getAllFee', request.page, request.limit],
        queryFn: (): Promise<GetAllDTOResponse> => getAllFee(request),
        //TODO Ver se é necessário esses parâmetros
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60,
        retry: 1,
        retryDelay: 1000
    });
}

export function GetFeeByIdQuery(id: string) {
    return useQuery({
        queryKey: ['getAllFee', id],
        queryFn: (): Promise<GetByIdDTOResponse> => getFeeById(id)
    });
}

export function UpdateFeeQuery() {
    return useMutation({
        mutationFn: (data: UpdateRequest): Promise<void> => updateFee(data)
    });
}

export function CreateFeeQuery() {
    return useMutation({
        mutationFn: (data: UpdateRequest): Promise<void> => updateFee(data)
    });
}
export function DeleteFeeQuery() {
    return useMutation({
        mutationFn: (id: string): Promise<void> => deleteFee(id)
    });
}
