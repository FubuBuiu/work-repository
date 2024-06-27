import { FaPencil, FaRegTrashCan } from 'react-icons/fa6';

import { DaeRouters } from '@/routers';
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
                    action: { doIt: () => alert('Deletar taxa') }
                },
                {
                    icon: { icon: FaPencil },
                    action: { goTo: DaeRouters.SERVICE_CHARGES.UPDATE(fee.idDAETax) },
                    toolTipText: 'Editar taxa'
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
