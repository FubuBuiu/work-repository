import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { registerClassUseSchema } from './registerClassUse.schema';

export const useRegisterClassUseForm = () => {
    const { control, handleSubmit } = useForm({ resolver: zodResolver(registerClassUseSchema) });
    const onSubmit = (data: any) => {
        console.log(data);
    };

    const situationOptions = [
        { value: 'active', label: 'Ativo' },
        { value: 'inactive', label: 'Inativo' },
        { value: 'banned', label: 'Banido' }
    ];

    return { control, handleSubmit: handleSubmit(onSubmit), situationOptions };
};
