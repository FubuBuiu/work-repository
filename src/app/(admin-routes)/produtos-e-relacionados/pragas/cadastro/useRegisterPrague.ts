import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { registerCultureSchema } from './registerPrague.schema';

export const useRegisterPrague = () => {
    const { control, handleSubmit, setValue, getValues, watch } = useForm({ resolver: zodResolver(registerCultureSchema) });

    const onSubmit = (data: any) => console.log(data);

    const handleAddPrague = () => {
        const culturas = getValues('relatedCrops');
        const cropList = getValues('cropList') ?? [];
        if (!culturas || cropList.includes(culturas)) return;
        setValue('cropList', [...cropList, culturas]);
        setValue('relatedCrops', '');
    };

    const removePrague = (item: string) => {
        const cropList = getValues('cropList');
        document.getElementById(item)?.classList.remove('animate-fadeRightIn');
        document.getElementById(item)?.classList.add('animate-fadeRightOut');
        if (!cropList) return;
        setTimeout(() => {
            setValue(
                'cropList',
                cropList.filter((cultura: string) => cultura !== item)
            );
        }, 500);
    };

    return {
        control,
        handleSubmit: handleSubmit(onSubmit),
        setValue,
        getValues,
        watch,
        onSubmit,
        handleAddPrague,
        removePrague
    };
};
