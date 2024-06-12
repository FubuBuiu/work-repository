import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { cultureSchema } from './culture.schema';

export const useRegisterCulture = () => {
    const { control, handleSubmit, setValue, getValues, watch } = useForm({
        resolver: zodResolver(cultureSchema)
    });
    const mockOptions = [
        { key: '1', value: 'KB48QBL23663606937812991' },
        { key: '2', value: 'KB48QBL23663606937812992' },
        { key: '3', value: 'KB48QBL23663606937812993' },
        { key: '4', value: 'KB48QBL23663606937812994' },
        { key: '5', value: 'KB48QBL23663606937812995' }
    ];

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleAddCulture = () => {
        const { pragueDisease } = getValues();
        const pragueDiseaseList = getValues('pragueDiseaseList') ?? [];
        if (pragueDiseaseList.includes(pragueDisease) || !pragueDisease.length) return;
        setValue('pragueDiseaseList', [...pragueDiseaseList, pragueDisease]);
        setValue('pragueDisease', '');
    };

    const removeCulture = (primaryKey: string): void => {
        const pragueDiseaseList = getValues('pragueDiseaseList') ?? [];
        if (!pragueDiseaseList.includes(primaryKey)) return;
        document.getElementById(primaryKey)?.classList.remove('animate-fadeRightIn');
        document.getElementById(primaryKey)?.classList.add('animate-fadeRightOut');
        setTimeout(() => {
            setValue(
                'pragueDiseaseList',
                pragueDiseaseList.filter((item: string) => item !== primaryKey)
            );
        }, 500);
    };

    return { control, handleSubmit: handleSubmit(onSubmit), setValue, getValues, watch, mockOptions, onSubmit, handleAddCulture, removeCulture };
};
