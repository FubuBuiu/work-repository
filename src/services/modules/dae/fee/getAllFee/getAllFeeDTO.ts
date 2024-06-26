import { FaPencil, FaRegTrashCan } from 'react-icons/fa6';

import { DaeRouters } from '@/routers';
import { Fee, ResponseApiType, ResponseDTO } from '@/services/modules/model/dae/fee/GetAllFeeModel';

export function getAllFeeDTO(responseApi: ResponseApiType): ResponseDTO {
    const feeList: Fee[] = responseApi.data.data.map(fee => {
        return {
            id: fee.idDAETax,
            revenueCode: fee.revenueCode,
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
    const response: ResponseDTO = {
        feeList,
        total: responseApi.data.totalCount
    };
    return response;
}
