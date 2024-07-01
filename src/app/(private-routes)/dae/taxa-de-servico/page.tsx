'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/basic/Button';
import { Modal } from '@/components/basic/Modal';
import { Table } from '@/components/basic/Table';
import { Actions } from '@/components/basic/Table/TableContent';
import { DaeRouters } from '@/routers';
import { DeleteFeeQuery, GetAllFeeQuery } from '@/services/modules/dae/fee';

export default function ServiceFeePage() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [feeIdToDelete, setFeeIdToDelete] = useState<string | undefined>(undefined);
    const router = useRouter();
    const { data, refetch, isLoading } = GetAllFeeQuery({
        page: currentPage,
        limit: itemsPerPage,
        select: ['idDAETax', 'indexerQuantity', 'revenueCode', 'description']
    });
    const deleteFeeQuery = DeleteFeeQuery();
    const header = [
        { key: 'revenueCode', label: 'Código da receita' },
        { key: 'indexerQuantity', label: 'Quantidade' },
        { key: 'description', label: 'Descrição' }
    ];

    const actionsTable: Actions = {
        delete: (id: string) => {
            openModal();
            setFeeIdToDelete(undefined);
            setFeeIdToDelete(id);
        },
        goToUpdateForm: (id: string) => router.push(DaeRouters.SERVICE_CHARGES.UPDATE(id))
    };

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const deleteFee = () => {
        if (feeIdToDelete) {
            deleteFeeQuery.mutate(feeIdToDelete, {
                onSuccess: () => {
                    refetch();
                    closeModal();
                }
            });
        }
    };

    return (
        <div className='form-control items-end gap-3'>
            <Link href={DaeRouters.SERVICE_CHARGES.REGISTER}>
                <Button text='Nova Taxa' className='w-fit' />
            </Link>
            {/* //TODO Content da tabela está com overflow ativado sempre */}
            {/* TODO Remover isLoading depois */}
            {isLoading ? (
                'Loading...'
            ) : (
                <Table.Root className='w-full'>
                    <Table.Content header={header} data={data?.feeList ?? []} actions={actionsTable} emptyMessage='Nenhuma taxa cadastrada' />
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
            <Modal.Root className='w-2/5' setVisibility={setShowModal} visibility={showModal}>
                <Modal.Header>Deseja excluir a taxa?</Modal.Header>
                <Modal.Actions>
                    <Button className='btn-error' size='small' text='Deletar' onClick={() => deleteFee()} />
                </Modal.Actions>
            </Modal.Root>
        </div>
    );
}
