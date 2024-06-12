import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { schemaSubsistence } from './registerSubstance.schema';

export const useFormSubstance = () => {
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(schemaSubsistence)
    });

    const onSubmit = (data: any) => console.log(data);

    return {
        control,
        handleSubmit: handleSubmit(onSubmit)
    };
};
