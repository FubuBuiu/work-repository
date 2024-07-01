import { FaPencil, FaRegTrashCan } from 'react-icons/fa6';

import { Fee, GetAllApiResponse, GetAllDTOResponse } from '@/services/modules/model/dae/fee/GetAllFeeModel';

export function getAllFeeDTO(responseApi: GetAllApiResponse): GetAllDTOResponse {
    const feeList: Fee[] = responseApi.data.data.map(fee => {
        return {
            id: fee.idDAETax,
            revenueCode: fee.revenueCode,
            indexerQuantity: fee.indexerQuantity,
            description: fee.description,
            actions: [
                {
                    icon: { icon: FaRegTrashCan },
                    toolTipText: 'Deletar taxa',
                    actionName: 'delete',
                    auxValue: fee.idDAETax
                },
                {
                    icon: { icon: FaPencil },
                    actionName: 'goToUpdateForm',
                    toolTipText: 'Editar taxa',
                    auxValue: fee.idDAETax
                }
            ]
        };
    });
    const response: GetAllDTOResponse = {
        feeList,
        total: responseApi.data.totalCount
    };
    return response;
}
