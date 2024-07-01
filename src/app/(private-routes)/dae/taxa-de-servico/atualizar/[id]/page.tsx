'use client';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import AddOrUpdateForm from '@/components/dae/taxa-de-servico/AddOrUpdateForm';
import { GetFeeByIdQuery } from '@/services/modules/dae/fee';

export default function FeeUpdatePage({ params }: { params: { id: string } }) {
    // const { id } = useParams();
    const { data } = GetFeeByIdQuery(params.id);
    console.log('ID DA TAXA PARA EDITAR', params.id);
    console.log('TAXA PARA EDITAR', data);
    return <AddOrUpdateForm formData={data} />;
}
