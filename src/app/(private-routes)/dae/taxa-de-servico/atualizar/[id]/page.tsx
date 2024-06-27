'use client';
import { useParams } from 'next/navigation';

import AddOrUpdateForm from '@/components/dae/taxa-de-servico/AddOrUpdateForm';
import { GetFeeByIdQuery } from '@/services/modules/dae/fee';

export default function FeeUpdatePage() {
    const { id } = useParams();
    const { data } = GetFeeByIdQuery(id as string);
    return <AddOrUpdateForm formData={data} />;
}
