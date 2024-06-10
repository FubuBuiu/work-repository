'use client';
import React from 'react';

import Button from '@/components/basic/Button';
import Checkbox from '@/components/basic/Checkbox';
import Select from '@/components/basic/Select';
import { SelectList } from '@/components/basic/SelectList';
import Textarea from '@/components/basic/Textarea';
import TextField from '@/components/basic/TextField';
import { CardForm } from '@/components/cardForm';

import { useRegisterProductForm } from './useRegisterProductForm';

const RegisterForm: React.FC = () => {
    const { control, onSubmit } = useRegisterProductForm();
    const mockOptions = [
        { key: '1', value: 'KB48QBL23663606937812992' },
        { key: '2', value: 'KB48QBL23663606937812992' },
        { key: '3', value: 'KB48QBL23663606937812992' },
        { key: '4', value: 'KB48QBL23663606937812992' },
        { key: '5', value: 'KB48QBL23663606937812992' }
    ];
    return (
        <>
            <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>Cadastro de Produtos</h1>
            <form onSubmit={onSubmit} className='mt-5 flex w-full flex-1 flex-col gap-y-4'>
                <CardForm title='Dados Gerais'>
                    <TextField required control={control} name='marca_comercial' outsideTitle='Marca Comercial' />
                    <TextField required type='date' control={control} name='vencimento_de_registro' outsideTitle='Vencimento do Registro' />
                    <TextField required control={control} name='registro_mapa' outsideTitle='Registro MAPA' />
                    <TextField required control={control} name='nome_busca_automatica_em_nf' outsideTitle='Nome Busca Automática em NF' />
                </CardForm>
                <CardForm title='Dados do Fabricante'>
                    <SelectList required type='text' control={control} name='empresa' title='Empresa' options={[{ value: 'Empresa 1' }, { value: 'Empresa 2' }, { value: 'Empresa 3' }]} />
                    <TextField control={control} name='localizacao' outsideTitle='Localização' disabled />
                    <TextField control={control} name='nome_fantasia' outsideTitle='Nome Fantasia' disabled />
                </CardForm>
                <CardForm title='Bula'>
                    <Select listOptions={mockOptions} required control={control} name='classe_de_uso' outsideTitle='Classe de Uso' />
                    <Select listOptions={mockOptions} required control={control} name='classe_toxicologica' outsideTitle='Classe Toxicológica' />
                    <Select listOptions={mockOptions} required control={control} name='classe_ambiental' outsideTitle='Classe Ambiental' />
                    <Select listOptions={mockOptions} required control={control} name='modo_de_acao' outsideTitle='Modo de Ação' />
                    <Select listOptions={mockOptions} required control={control} name='modo_de_aplicacao' outsideTitle='Modo de Aplicação' />
                </CardForm>
                <CardForm title='Outros' style={'items-center'}>
                    <div className='col-span-3'>
                        <Textarea
                            rows={4}
                            control={control}
                            name='observacoes'
                            style={{
                                backgroundColor: 'red'
                            }}
                            title='Observações'
                        />
                    </div>
                    <div className='flex gap-x-10'>
                        <Checkbox control={control} name='inflamavel' text='Inflamável' />
                        <Checkbox control={control} name='corrosivo' text='Corrosivo' />
                    </div>
                </CardForm>
                <Button type='submit' text='Salvar' />
            </form>
        </>
    );
};
export default RegisterForm;
