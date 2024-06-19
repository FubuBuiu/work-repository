'use client';
import Button from '@/components/basic/Button';
import { Table } from '@/components/basic/Table';
import { Action } from '@/components/basic/Table/TableContent';
import { DaeRouters } from '@/routers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaPencil, FaRegTrashCan } from 'react-icons/fa6';

export default function ServiceFeePage() {
    const router = useRouter();
    const mockDataTable = [{ revenueCode: '1', description: 'adnasdnasdnm' }];
    const header = [
        { key: 'revenueCode', label: 'Código da receita' },
        { key: 'description', label: 'Descrição' }
    ];
    const tableActions: Action[] = [
        { icon: { icon: FaRegTrashCan }, action: () => alert('Deletar taxa'), tooltipText: 'Deletar taxa' },
        {
            icon: { icon: FaPencil },
            action: () => {
                router.push(DaeRouters.SERVICE_CHARGES.UPDATE);
            },
            tooltipText: 'Editar taxa'
        }
    ];
    return (
        <div className='form-control items-end gap-3'>
            <Link href={DaeRouters.SERVICE_CHARGES.REGISTER}>
                <Button text='Nova Taxa' className='w-fit' />
            </Link>
            <Table.Root className='w-full'>
                <Table.Content header={header} data={mockDataTable} actions={tableActions} emptyMessage='Nenhuma taxa cadastrada'></Table.Content>
            </Table.Root>
        </div>
    );
}
