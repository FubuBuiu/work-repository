'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaPlus, FaSearch } from 'react-icons/fa';

import Button from '@/components/basic/Button';
import Select from '@/components/basic/Select';
import { Table } from '@/components/basic/Table';
import TextField from '@/components/basic/TextField';
import { ProductRouters } from '@/routers';

const Page = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };

    const listMock = [
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        },
        {
            vulgarName: 'Nome Vulgar',
            scientificName: 'Nome Científico',
            situation: 'Ativo'
        }
    ];

    return (
        <>
            <h1 className='text-title'>Culturas</h1>
            <div className='my-3 flex justify-end'>
                <Link href={ProductRouters.CULTURES.REGISTER}>
                    <Button className='justify-end' text='Adicionar Cultura' icon={{ icon: FaPlus, size: 20 }} startIcon />
                </Link>
            </div>
            <Table.Root>
                <Table.Filters>
                    <form className='flex w-full justify-end gap-x-3'>
                        <TextField outsideTitle='Nome Vulgar' control={control} name='vulgarName' placeholder='text' />
                        <TextField outsideTitle='Nome Científico' control={control} name='scientificName' placeholder='text' />
                        <Select
                            control={control}
                            outsideTitle='Situação'
                            name='situacao'
                            options={[
                                { key: '1', value: 'Ativo' },
                                { key: '2', value: 'Inativo' }
                            ]}
                        />
                        <Button className='mt-4 self-center' text='Buscar' icon={{ icon: FaSearch, size: 20 }} startIcon onClick={handleSubmit(onSubmit)} />
                    </form>
                </Table.Filters>
                <Table.Content
                    header={[
                        {
                            label: 'Nome Vulgar',
                            key: 'vulgarName'
                        },
                        {
                            label: 'Nome Científico',
                            key: 'scientificName'
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

export default Page;
