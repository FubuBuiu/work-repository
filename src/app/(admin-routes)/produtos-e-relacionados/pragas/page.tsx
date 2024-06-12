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
            scientificName: 'Marca 1',
            vulgarName: 'vulgarName 1',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            scientificName: 'Marca 2',
            vulgarName: 'vulgarName 2',
            agentTransmitting: '987654321',
            typePrague: '987654321',
            situation: 'Inativo'
        },
        {
            scientificName: 'Marca 3',
            vulgarName: 'vulgarName 3',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            scientificName: 'Marca 4',
            vulgarName: 'vulgarName 4',
            agentTransmitting: '987654321',
            typePrague: '987654321',
            situation: 'Inativo'
        },
        {
            scientificName: 'Marca 5',
            vulgarName: 'vulgarName 5',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            scientificName: 'Marca 6',
            vulgarName: 'vulgarName 6',
            agentTransmitting: '987654321',
            typePrague: '987654321',
            situation: 'Inativo'
        },
        {
            scientificName: 'Marca 7',
            vulgarName: 'vulgarName 7',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            scientificName: 'Marca 8',
            vulgarName: 'vulgarName 8',
            agentTransmitting: '987654321',
            typePrague: '987654321',
            situation: 'Inativo'
        },
        {
            scientificName: 'Marca 9',
            vulgarName: 'vulgarName 9',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            scientificName: 'Marca 10',
            vulgarName: 'vulgarName 10',
            agentTransmitting: '987654321',
            typePrague: '987654321',
            situation: 'Inativo'
        }
    ];
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {};

    return (
        <>
            <h2 className='text-3xl font-bold underline decoration-primary underline-offset-8'>Pragas</h2>
            <div className='flex justify-end'>
                <Link href={ProductRouters.PRAGUE.REGISTER} className='my-3'>
                    <Button text='Adicionar Praga' icon={{ icon: FaPlus, size: 20 }} startIcon />
                </Link>
            </div>
            <Table.Root>
                <Table.Filters>
                    <form className='flex w-full justify-end gap-x-3'>
                        <TextField outsideTitle='Nome Cientifico' control={control} name='scientificName' placeholder='text' />
                        <TextField outsideTitle='Nome Vulgar' control={control} name='vulgarName' placeholder='text' />
                        <Select
                            outsideTitle='Agente Transmissor'
                            control={control}
                            name='agentTransmitting'
                            options={[
                                { key: '1', value: 'Acaro' },
                                { key: '2', value: 'Bacteria' },
                                { key: '3', value: 'Erva daninha' },
                                { key: '4', value: 'Fungo' },
                                { key: '5', value: 'Inseto' },
                                { key: '6', value: 'Nematoide' }
                            ]}
                        />
                        <Select
                            outsideTitle='Tipo de Praga'
                            control={control}
                            name='typePrague'
                            options={[
                                {
                                    key: '1',
                                    value: 'Doença'
                                },
                                {
                                    key: '2',
                                    value: 'Erva daninha'
                                },
                                {
                                    key: '3',
                                    value: 'Inseto'
                                }
                            ]}
                        />
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
                            label: 'Nome Cientifico',
                            key: 'scientificName'
                        },
                        {
                            label: 'Nome Vulgar',
                            key: 'vulgarName'
                        },
                        {
                            label: 'Agente Transmissor',
                            key: 'agentTransmitting'
                        },
                        {
                            label: 'Tipo de Praga',
                            key: 'typePrague'
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
