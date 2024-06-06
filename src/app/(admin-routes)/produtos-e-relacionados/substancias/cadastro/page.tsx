'use client';
import React from 'react';

import Button from '@/components/basic/Button';
import Textarea from '@/components/basic/Textarea';
import TextField from '@/components/basic/TextField';
import { CardForm } from '@/components/cardForm';

import { useFormSubstance } from './useFormSubstance';

const SubstanceRegisterPage = () => {
    const { control, handleSubmit } = useFormSubstance();
    return (
        <>
            <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>Cadastro de Substâncias</h1>
            <form onSubmit={handleSubmit} className='mt-5 flex w-full flex-1 flex-col gap-y-4'>
                <CardForm title='Informações da Substância' style='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    <TextField control={control} name='scientificName' outsideTitle='Nome Científico' />
                    <TextField control={control} name='popularName' outsideTitle='Nome Vulgar' />
                    <TextField control={control} name='chemicalGroup' outsideTitle='Grupo Químico' />
                    <TextField control={control} name='anvisaCode' outsideTitle='Código Anvisa' />
                    <div className='col-span-2 h-full'>
                        <Textarea control={control} rows={4} name='observation' title='Observação' />
                    </div>
                </CardForm>
                <Button text='Salvar' />
            </form>
        </>
    );
};

export default SubstanceRegisterPage;
