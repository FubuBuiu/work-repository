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

const ClassToxicologicPage = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    const listMock = [
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        },
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        },
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        },
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        },
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        },
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        },
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        },
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        },
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        },
        {
            description: 'Descrição Toxicologica',
            acronym: 'Sigla/Grau de Toxicidade',
            classDanger: 'Grupo Químico',
            colorRange: 'Cor da Faixa',
            situation: 'Ativo'
        }
    ];

    return (
        <>
            <h2 className='text-3xl font-bold underline decoration-primary underline-offset-8'>Classes Toxicológicas</h2>
            <div className='flex justify-end'>
                <Link href={ProductRouters.CLASS_TOXICOLOGICAL.REGISTER} className='my-3'>
                    <Button text='Adicionar Classe' icon={{ icon: FaPlus, size: 20 }} startIcon />
                </Link>
            </div>
            <Table.Root>
                <Table.Filters>
                    <form className='flex w-full justify-end gap-x-3'>
                        <TextField outsideTitle='Descrição' control={control} name='description' placeholder='text' />
                        <Select
                            control={control}
                            required
                            name='acronym'
                            outsideTitle='Sigla/Grau de Toxicidade'
                            options={[
                                {
                                    key: '1',
                                    value: 'Categoria 1 - Extremamente tóxico'
                                },
                                {
                                    key: '2',
                                    value: 'Categoria 2 - Altamente tóxico'
                                },
                                {
                                    key: '3',
                                    value: 'Categoria 3 - Moderadamente tóxico'
                                },
                                {
                                    key: '4',
                                    value: 'Categoria 4 - Pouco tóxico'
                                },
                                {
                                    key: '5',
                                    value: 'Categoria 5 - Produto improvavel de causar algum dano tóxico'
                                },
                                {
                                    key: '6',
                                    value: 'Não classificado'
                                }
                            ]}
                        />
                        <Select
                            control={control}
                            required
                            name='colorRange'
                            outsideTitle='Cor da Faixa'
                            options={[
                                {
                                    key: '1',
                                    value: 'Vermelho - Extremamente tóxico'
                                },
                                {
                                    key: '2',
                                    value: 'Vermelho - Altamente tóxico'
                                },
                                {
                                    key: '3',
                                    value: 'Amarelo - Moderadamente tóxico'
                                },
                                {
                                    key: '4',
                                    value: 'Azul - Pouco tóxico'
                                },
                                {
                                    key: '5',
                                    value: 'Azul - Produto improvavel de causar algum dano tóxico'
                                },
                                {
                                    key: '6',
                                    value: 'Verde - Não classificado'
                                }
                            ]}
                        />
                        <Select
                            control={control}
                            name='classDanger'
                            outsideTitle='Categoria/Classe de Perigo'
                            options={[
                                {
                                    key: '1',
                                    value: 'Oral (Boca)'
                                },
                                {
                                    key: '2',
                                    value: 'Dermal (Pele)'
                                },
                                {
                                    key: '3',
                                    value: 'Inalatória (Nariz)'
                                },
                                {
                                    key: '4',
                                    value: 'Oral/Dermal/Inalatória'
                                }
                            ]}
                        />{' '}
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
                            label: 'Descrição Toxicologica',
                            key: 'description'
                        },
                        {
                            label: 'Sigla/Grau de Toxicidade',
                            key: 'acronym'
                        },
                        {
                            label: 'Classe de Perigo',
                            key: 'classDanger'
                        },
                        {
                            label: 'Cor da Faixa',
                            key: 'colorRange'
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

export default ClassToxicologicPage;
