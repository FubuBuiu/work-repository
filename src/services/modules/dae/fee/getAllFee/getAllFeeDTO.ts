import { Fee, ResponseApiType, ResponseDTO } from '@/services/modules/model/dae/fee/GetAllFeeModel';

export function getAllFeeDTO(responseApi: ResponseApiType): ResponseDTO {
    const feeList: Fee[] = responseApi.data.data.map(fee => {
        const description =
            fee.levelOne.description +
            (fee.levelTwo ? ` ${fee.levelTwo.description}` : '') +
            (fee.levelThree ? ` ${fee.levelThree.description}` : '') +
            (fee.levelFour ? ` ${fee.levelFour.description}` : '') +
            (fee.levelFive ? ` ${fee.levelFive.description}` : '');

        return {
            id: fee.idDAETax,
            revenueCode: fee.revenueCode,
            description
        };
    });
    const response: ResponseDTO = {
        feeList,
        total: responseApi.data.totalCount
    };
    return response;
}
