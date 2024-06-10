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

const ListProduct = () => {
    const listMock: any = [
        {
            marcaComercial: 'Marca 1',
            fabricante: 'Fabricante 1',
            cnpj: '123456789',
            registroMAPA: '123456789',
            situação: 'Ativo'
        },
        {
            marcaComercial: 'Marca 2',
            fabricante: 'Fabricante 2',
            cnpj: '987654321',
            registroMAPA: '987654321',
            situação: 'Inativo'
        },
        {
            marcaComercial: 'Marca 3',
            fabricante: 'Fabricante 3',
            cnpj: '123456789',
            registroMAPA: '123456789',
            situação: 'Ativo'
        },
        {
            marcaComercial: 'Marca 4',
            fabricante: 'Fabricante 4',
            cnpj: '987654321',
            registroMAPA: '987654321',
            situação: 'Inativo'
        },
        {
            marcaComercial: 'Marca 5',
            fabricante: 'Fabricante 5',
            cnpj: '123456789',
            registroMAPA: '123456789',
            situação: 'Ativo'
        },
        {
            marcaComercial: 'Marca 6',
            fabricante: 'Fabricante 6',
            cnpj: '987654321',
            registroMAPA: '987654321',
            situação: 'Inativo'
        },
        {
            marcaComercial: 'Marca 7',
            fabricante: 'Fabricante 7',
            cnpj: '123456789',
            registroMAPA: '123456789',
            situação: 'Ativo'
        },
        {
            marcaComercial: 'Marca 8',
            fabricante: 'Fabricante 8',
            cnpj: '987654321',
            registroMAPA: '987654321',
            situação: 'Inativo'
        },
        {
            marcaComercial: 'Marca 9',
            fabricante: 'Fabricante 9',
            cnpj: '123456789',
            registroMAPA: '123456789',
            situação: 'Ativo'
        },
        {
            marcaComercial: 'Marca 10',
            fabricante: 'Fabricante 10',
            cnpj: '987654321',
            registroMAPA: '987654321',
            situação: 'Inativo'
        }
    ];
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <h2 className='text-3xl font-bold underline decoration-primary underline-offset-8'>Produtos</h2>
            <Link href={ProductRouters.PRODUCTS.REGISTER} className='my-3 flex justify-end'>
                <Button text='Adicionar Produto' icon={{ icon: FaPlus, size: 20 }} startIcon />
            </Link>
            <Table.Root>
                <Table.Filters>
                    <form className='flex w-full justify-end gap-x-3'>
                        <TextField outsideTitle='Marca Comercial' control={control} name='marcaComercial' placeholder='text' />
                        <TextField outsideTitle='Fabricante' control={control} name='marcaComercial' placeholder='text' />
                        <TextField outsideTitle='CNPJ' control={control} name='cnpj' placeholder='ex:9909801' />
                        <TextField outsideTitle='MAPA' control={control} name='marcaComercial' placeholder='text' />
                        <Select
                            control={control}
                            outsideTitle='Situação'
                            name='situação'
                            listOptions={[
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
                            label: 'Marca Comercial',
                            key: 'marcaComercial'
                        },
                        {
                            label: 'Fabricante',
                            key: 'fabricante'
                        },
                        {
                            label: 'CNPJ',
                            key: 'cnpj'
                        },
                        {
                            label: 'Registro MAPA',
                            key: 'registroMAPA'
                        },
                        {
                            label: 'Situação',
                            key: 'situação'
                        }
                    ]}
                    data={listMock}
                    enumaratedRows={true}
                    emptyMessage='Nenhum produto encontrado'
                />
                <Table.Pagination currentPage={1} changeItemsPerPage={() => {}} nextPage={() => {}} prevPage={() => {}} totalPages={10} />
            </Table.Root>
        </>
    );
};

export default ListProduct;
