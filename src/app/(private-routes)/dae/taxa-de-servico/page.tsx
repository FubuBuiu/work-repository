'use client';
import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/basic/Button';
import { Table } from '@/components/basic/Table';
import { DaeRouters } from '@/routers';
import getAllFeeQuery from '@/services/modules/dae/fee';
import { ResponseDTO } from '@/services/modules/model/dae/fee/GetAllFeeModel';

export default function ServiceFeePage() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const { data, refetch, isLoading } = getAllFeeQuery({
        page: currentPage,
        limit: itemsPerPage,
        select: ['idDAETax', 'indexerQuantity', 'revenueCode', 'levelOne', 'levelTwo', 'levelThree', 'levelFour', 'levelFive']
    });
    const header = [
        { key: 'revenueCode', label: 'Código da receita' },
        { key: 'description', label: 'Descrição' }
    ];

    return (
        <div className='form-control items-end gap-3'>
            <Link href={DaeRouters.SERVICE_CHARGES.REGISTER}>
                <Button text='Nova Taxa' className='w-fit' />
            </Link>
            {/* TODO Remover isLoading depois */}
            {isLoading ? (
                'Loading...'
            ) : (
                //TODO Content da tabela está com overflow ativado sempre
                <Table.Root className='w-full'>
                    <Table.Content header={header} data={data?.feeList ?? []} emptyMessage='Nenhuma taxa cadastrada' />
                    <Table.Pagination
                        currentPage={currentPage}
                        changeItemsPerPage={number => {
                            setItemsPerPage(number);
                        }}
                        nextPage={() => setCurrentPage(currentPage + 1)}
                        totalItems={data?.total ?? 0}
                        prevPage={() => setCurrentPage(currentPage - 1)}
                    />
                </Table.Root>
            )}
        </div>
    );
}
