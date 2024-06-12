import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaSkullCrossbones, FaTriangleExclamation } from 'react-icons/fa6';

import { registerCultureSchema } from './registerCulture.schema';

export const useRegisterCultureForm = () => {
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(registerCultureSchema)
    });
    const onSubmit = (data: any) => console.log(data);

    const classDangerOptions = [
        {
            key: '1',
            value: 'Oral (Boca)'
        },
        {
            key: '2',
            value: 'Dermal (Pele)'
        },
        {
            key: '3',
            value: 'Inalatória (Nariz)'
        },
        {
            key: '4',
            value: 'Oral/Dermal/Inalatória'
        }
    ];

    const colorRangeOptions = [
        {
            key: '1',
            value: 'Vermelho - Extremamente tóxico'
        },
        {
            key: '2',
            value: 'Vermelho - Altamente tóxico'
        },
        {
            key: '3',
            value: 'Amarelo - Moderadamente tóxico'
        },
        {
            key: '4',
            value: 'Azul - Pouco tóxico'
        },
        {
            key: '5',
            value: 'Azul - Produto improvavel de causar algum dano tóxico'
        },
        {
            key: '6',
            value: 'Verde - Não classificado'
        }
    ];

    const acronymOptions = [
        {
            key: '1',
            value: 'Categoria 1 - Extremamente tóxico'
        },
        {
            key: '2',
            value: 'Categoria 2 - Altamente tóxico'
        },
        {
            key: '3',
            value: 'Categoria 3 - Moderadamente tóxico'
        },
        {
            key: '4',
            value: 'Categoria 4 - Pouco tóxico'
        },
        {
            key: '5',
            value: 'Categoria 5 - Produto improvavel de causar algum dano tóxico'
        },
        {
            key: '6',
            value: 'Não classificado'
        }
    ];

    return { control, handleSubmit: handleSubmit(onSubmit), classDangerOptions, colorRangeOptions, acronymOptions };
};
