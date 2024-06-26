'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaPencil, FaRegTrashCan } from 'react-icons/fa6';

import Button from '@/components/basic/Button';
import { Table } from '@/components/basic/Table';
import { Action } from '@/components/basic/Table/TableContent';
import { DaeRouters } from '@/routers';
import { getAllFeeQuery } from '@/services/modules/dae/fee';
import { ResponseDTO } from '@/services/modules/model/dae/fee/GetAllFeeModel';

export default function ServiceFeePage() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const router = useRouter();
    const { response, refetch } = getAllFeeQuery({
        page: currentPage,
        limit: itemsPerPage,
        select: ['idDAETax', 'indexerQuantity', 'revenueCode', 'levelOne', 'levelTwo', 'levelThree', 'levelFour', 'levelFive']
    });
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
                <Table.Content header={header} data={response.feeList} actions={tableActions} emptyMessage='Nenhuma taxa cadastrada'></Table.Content>
                <Table.Pagination currentPage={currentPage} changeItemsPerPage={setItemsPerPage} nextPage={() => {}} totalItems={4} prevPage={() => {}} />
            </Table.Root>
        </div>
    );
}
