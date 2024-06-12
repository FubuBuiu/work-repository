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
            tradeName: 'Marca 1',
            manufacturer: 'manufacturer 1',
            cnpj: '123456789',
            map: '123456789',
            situation: 'Ativo'
        },
        {
            tradeName: 'Marca 2',
            manufacturer: 'manufacturer 2',
            cnpj: '987654321',
            map: '987654321',
            situation: 'Inativo'
        },
        {
            tradeName: 'Marca 3',
            manufacturer: 'manufacturer 3',
            cnpj: '123456789',
            map: '123456789',
            situation: 'Ativo'
        },
        {
            tradeName: 'Marca 4',
            manufacturer: 'manufacturer 4',
            cnpj: '987654321',
            map: '987654321',
            situation: 'Inativo'
        },
        {
            tradeName: 'Marca 5',
            manufacturer: 'manufacturer 5',
            cnpj: '123456789',
            map: '123456789',
            situation: 'Ativo'
        },
        {
            tradeName: 'Marca 6',
            manufacturer: 'manufacturer 6',
            cnpj: '987654321',
            map: '987654321',
            situation: 'Inativo'
        },
        {
            tradeName: 'Marca 7',
            manufacturer: 'manufacturer 7',
            cnpj: '123456789',
            map: '123456789',
            situation: 'Ativo'
        },
        {
            tradeName: 'Marca 8',
            manufacturer: 'manufacturer 8',
            cnpj: '987654321',
            map: '987654321',
            situation: 'Inativo'
        },
        {
            tradeName: 'Marca 9',
            manufacturer: 'manufacturer 9',
            cnpj: '123456789',
            map: '123456789',
            situation: 'Ativo'
        },
        {
            tradeName: 'Marca 10',
            manufacturer: 'manufacturer 10',
            cnpj: '987654321',
            map: '987654321',
            situation: 'Inativo'
        }
    ];
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <h2 className='text-title'>Produtos</h2>
            <div className='my-3 flex justify-end'>
                <Link href={ProductRouters.PRODUCTS.REGISTER}>
                    <Button text='Adicionar Produto' icon={{ icon: FaPlus, size: 20 }} startIcon />
                </Link>
            </div>
            <Table.Root>
                <Table.Filters>
                    <form className='flex w-full justify-end gap-x-3'>
                        <TextField outsideTitle='Marca Comercial' control={control} name='tradeName' placeholder='text' />
                        <TextField outsideTitle='Fabricante' control={control} name='manufacturer' placeholder='text' />
                        <TextField outsideTitle='CNPJ' control={control} name='cnpj' placeholder='ex:9909801' />
                        <TextField outsideTitle='MAPA' control={control} name='map' placeholder='text' />
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
                            label: 'Marca Comercial',
                            key: 'tradeName'
                        },
                        {
                            label: 'Fabricante',
                            key: 'manufacturer'
                        },
                        {
                            label: 'CNPJ',
                            key: 'cnpj'
                        },
                        {
                            label: 'Registro MAPA',
                            key: 'map'
                        },
                        {
                            label: 'Situação',
                            key: 'situation'
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
