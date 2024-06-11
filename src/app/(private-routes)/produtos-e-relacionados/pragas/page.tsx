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
            nameScientific: 'Marca 1',
            nameVulgar: 'nameVulgar 1',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            nameScientific: 'Marca 2',
            nameVulgar: 'nameVulgar 2',
            agentTransmitting: '987654321',
            typePrague: '987654321',
            situation: 'Inativo'
        },
        {
            nameScientific: 'Marca 3',
            nameVulgar: 'nameVulgar 3',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            nameScientific: 'Marca 4',
            nameVulgar: 'nameVulgar 4',
            agentTransmitting: '987654321',
            typePrague: '987654321',
            situation: 'Inativo'
        },
        {
            nameScientific: 'Marca 5',
            nameVulgar: 'nameVulgar 5',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            nameScientific: 'Marca 6',
            nameVulgar: 'nameVulgar 6',
            agentTransmitting: '987654321',
            typePrague: '987654321',
            situation: 'Inativo'
        },
        {
            nameScientific: 'Marca 7',
            nameVulgar: 'nameVulgar 7',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            nameScientific: 'Marca 8',
            nameVulgar: 'nameVulgar 8',
            agentTransmitting: '987654321',
            typePrague: '987654321',
            situation: 'Inativo'
        },
        {
            nameScientific: 'Marca 9',
            nameVulgar: 'nameVulgar 9',
            agentTransmitting: '123456789',
            typePrague: '123456789',
            situation: 'Ativo'
        },
        {
            nameScientific: 'Marca 10',
            nameVulgar: 'nameVulgar 10',
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
                        <TextField outsideTitle='Nome Cientifico' control={control} name='nameScientific' placeholder='text' />
                        <TextField outsideTitle='Nome Vulgar' control={control} name='nameVulgar' placeholder='text' />
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
                            key: 'nameScientific'
                        },
                        {
                            label: 'Nome Vulgar',
                            key: 'nameVulgar'
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
