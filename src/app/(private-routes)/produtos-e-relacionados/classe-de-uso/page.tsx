'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

import Button from '@/components/basic/Button';
import Select from '@/components/basic/Select';
import { Table } from '@/components/basic/Table';
import TextField from '@/components/basic/TextField';
import { ProductRouters } from '@/routers';

const ListPraguePage = () => {
    const listMock: any = [
        {
            description: 'Marca 1',
            numberCAS: 'numberCAS 1',
            acronym: '123456789',
            situation: 'Ativo'
        },
        {
            description: 'Marca 2',
            numberCAS: 'numberCAS 2',
            acronym: '987654321',
            situation: 'Inativo'
        },
        {
            description: 'Marca 3',
            numberCAS: 'numberCAS 3',
            acronym: '123456789',
            situation: 'Ativo'
        },
        {
            description: 'Marca 4',
            numberCAS: 'numberCAS 4',
            acronym: '987654321',
            situation: 'Inativo'
        },
        {
            description: 'Marca 5',
            numberCAS: 'numberCAS 5',
            acronym: '123456789',
            situation: 'Ativo'
        },
        {
            description: 'Marca 6',
            numberCAS: 'numberCAS 6',
            acronym: '987654321',
            situation: 'Inativo'
        },
        {
            description: 'Marca 7',
            numberCAS: 'numberCAS 7',
            acronym: '123456789',
            situation: 'Ativo'
        },
        {
            description: 'Marca 8',
            numberCAS: 'numberCAS 8',
            acronym: '987654321',
            situation: 'Inativo'
        },
        {
            description: 'Marca 9',
            numberCAS: 'numberCAS 9',
            acronym: '123456789',
            situation: 'Ativo'
        },
        {
            description: 'Marca 10',
            numberCAS: 'numberCAS 10',
            acronym: '987654321',
            situation: 'Inativo'
        }
    ];
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {};
    const acronymOptions = [
        {
            key: '1',
            value: 'A'
        },
        {
            key: '21',
            value: 'AB'
        },
        {
            key: '27',
            value: 'AcaFung'
        },
        {
            key: '28',
            value: 'AcaInset'
        },
        {
            key: '15',
            value: 'Adj'
        },
        {
            key: '22',
            value: 'AP'
        },
        {
            key: '2',
            value: 'B'
        },
        {
            key: '10',
            value: 'C'
        },
        {
            key: '34',
            value: 'ContProt'
        },
        {
            key: '35',
            value: 'CupFormInset'
        }
    ];
    return (
        <>
            <h2 className='text-title'>Classe de Uso</h2>
            <div className='flex justify-end'>
                <Link href={ProductRouters.CLASS_IN_USE.REGISTER} className='my-3'>
                    <Button text='Adicionar Classe de Uso' icon={{ icon: FaPlus, size: 20 }} startIcon />
                </Link>
            </div>
            <Table.Root>
                <Table.Filters>
                    <form className='flex w-full justify-end gap-x-3'>
                        <TextField outsideTitle='Descrição' control={control} name='description' placeholder='text' />
                        <TextField outsideTitle='Numero de CAS' control={control} name='numberCAS' placeholder='text' />
                        <Select outsideTitle='Sigla' control={control} name='acronym' options={acronymOptions} />
                        <Select
                            control={control}
                            outsideTitle='Situação'
                            name='situation'
                            options={[
                                { key: '1', value: 'Ativo' },
                                { key: '2', value: 'Inativo' },
                                { key: '3', value: 'Banido' }
                            ]}
                        />
                        <Button className='mt-4 self-center' text='Buscar' icon={{ icon: FaSearch, size: 20 }} startIcon onClick={handleSubmit(onSubmit)} />
                    </form>
                </Table.Filters>
                <Table.Content
                    header={[
                        {
                            label: 'Descrição',
                            key: 'description'
                        },
                        {
                            label: 'Numero de CAS',
                            key: 'numberCAS'
                        },
                        {
                            label: 'Sigla',
                            key: 'acronym'
                        },
                        {
                            label: 'Situação',
                            key: 'situation'
                        }
                    ]}
                    data={listMock}
                    emptyMessage='Nenhum produto encontrado'
                />
                <Table.Pagination currentPage={1} changeItemsPerPage={() => {}} nextPage={() => {}} prevPage={() => {}} totalPages={10} />
            </Table.Root>
        </>
    );
};

export default ListPraguePage;
