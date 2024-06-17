'use client';
import React from 'react';

import Button from '@/components/basic/Button';
import { RadioGroupInput } from '@/components/basic/Radio';
import Textarea from '@/components/basic/Textarea';
import TextField from '@/components/basic/TextField';
import { CardForm } from '@/components/cardForm';

import { useRegisterClassUseForm } from './useRegisterClassUseForm';

function RegisterClassUsePage() {
    const { handleSubmit, control, situationOptions } = useRegisterClassUseForm();
    return (
        <>
            <h1 className='text-title'>Cadastro de Classe de Uso</h1>
            <form onSubmit={handleSubmit} className='mt-5 flex w-full flex-1 flex-col gap-y-4'>
                <CardForm title='Nova Classe de Uso' style='lg:grid-cols-2'>
                    <TextField required control={control} name='description' outsideTitle='Descrição' />
                    <TextField required control={control} name='acronym' outsideTitle='Sigla' />
                    <TextField control={control} name='numberCAS' outsideTitle='Número do CAS' />
                    <RadioGroupInput control={control} name='situation' options={situationOptions} title='Situação' required />
                    <div className='col-span-2'>
                        <Textarea control={control} rows={4} name='observation' title='Observação' />
                    </div>
                </CardForm>
                <Button type='submit' text='Salvar' />
            </form>
        </>
    );
}

export default RegisterClassUsePage;
