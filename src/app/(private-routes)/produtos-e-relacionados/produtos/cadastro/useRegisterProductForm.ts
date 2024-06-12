import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { schemaRegisterProduct } from './registerProduct.schema';

export const useRegisterProductForm = () => {
    const onSubmit = (data: any) => console.log(data);
    const { control, handleSubmit } = useForm({
        resolver: zodResolver(schemaRegisterProduct),
        mode: 'onBlur'
    });

    return { control, onSubmit: handleSubmit(onSubmit) };
};
