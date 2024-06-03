'use client';

import React from 'react';

import Button from '@/components/basic/Button';
import Checkbox from '@/components/basic/Checkbox';
import TextField from '@/components/basic/TextField';
import { CardForm } from '@/components/cardForm';

import { useRegisterProductForm } from '../register-product/useRegisterProductForm';

const RegisterForm: React.FC = () => {
    const { control, onSubmit } = useRegisterProductForm();

    return (
        <>
            <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>Cadastro de Produtos</h1>
            <form onSubmit={onSubmit} className='gap-y-4s flex w-full flex-1 flex-col gap-y-4'>
                <div className='mt-5 flex flex-wrap' />
                <CardForm title='Dados Gerais'>
                    <TextField required control={control} name='marca_comercial' outsideTitle='Marca Comercial' />
                    <TextField required control={control} name='vencimento_de_registro' outsideTitle='Vencimento do Registro' />
                    <TextField required control={control} name='registro_mapa' outsideTitle='Registro MAPA' />
                    <TextField required control={control} name='nome_busca_automatica_em_nf' outsideTitle='Nome Busca Automática em NF' />
                </CardForm>
                <CardForm title='Dados do Fabricante'>
                    <TextField required control={control} name='empresa' outsideTitle='Empresa' />
                    <TextField control={control} name='localizacao' outsideTitle='Localização' disabled />
                    <TextField control={control} name='nome_fantasia' outsideTitle='Nome Fantasia' disabled />
                </CardForm>
                <CardForm title='Bula'>
                    <TextField required control={control} name='classe_de_uso' outsideTitle='Classe de Uso' />
                    <TextField required control={control} name='classe_toxicologica' outsideTitle='Classe Toxicológica' />
                    <TextField required control={control} name='classe_ambiental' outsideTitle='Classe Ambiental' />
                    <TextField required control={control} name='modo_de_acao' outsideTitle='Modo de Ação' />
                    <TextField required control={control} name='modo_de_aplicacao' outsideTitle='Modo de Aplicação' />
                </CardForm>
                <CardForm title='Outros' style={'items-center'}>
                    <TextField control={control} name='observacoes' outsideTitle='Observações' />
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
