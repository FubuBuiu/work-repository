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

const ListSubstancePage = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    const listMock = [
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        },
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        },
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        },
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        },
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        },
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        },
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        },
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        },
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        },
        {
            scientificName: 'Nome Científico',
            popularName: 'Nome Vulgar',
            chemicalGroup: 'Grupo Químico',
            anvisaCode: 'Código Anvisa',
            situation: 'Ativo'
        }
    ];

    return (
        <>
            <h2 className='text-title'>Substâncias</h2>
            <div className='my-3 flex justify-end'>
                <Link href={ProductRouters.SUBSTANCES.REGISTER}>
                    <Button text='Adicionar Substância' icon={{ icon: FaPlus, size: 20 }} startIcon />
                </Link>
            </div>
            <Table.Root>
                <Table.Filters>
                    <form className='flex w-full justify-end gap-x-3'>
                        <TextField outsideTitle='Nome Científico' control={control} name='scientificName' placeholder='text' />
                        <TextField outsideTitle='Nome Vulgar' control={control} name='popularName' placeholder='text' />
                        <Select
                            control={control}
                            outsideTitle='Situação'
                            name='situation'
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
                            label: 'Nome Científico',
                            key: 'scientificName'
                        },
                        {
                            label: 'Nome Vulgar',
                            key: 'popularName'
                        },
                        {
                            label: 'Grupo Químico',
                            key: 'chemicalGroup'
                        },
                        {
                            label: 'Código Anvisa',
                            key: 'anvisaCode'
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
export default ListSubstancePage;
