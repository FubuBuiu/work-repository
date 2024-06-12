'use client';
import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FaSkullCrossbones, FaTriangleExclamation } from 'react-icons/fa6';

import Button from '@/components/basic/Button';
import { RadioGroupInput } from '@/components/basic/Radio';
import Select from '@/components/basic/Select';
import Textarea from '@/components/basic/Textarea';
import TextField from '@/components/basic/TextField';
import { CardForm } from '@/components/cardForm';

import { useRegisterCultureForm } from './useRegisterCultureForm';

const PageRegister = () => {
    const { control, handleSubmit, acronymOptions, classDangerOptions, colorRangeOptions } = useRegisterCultureForm();

    return (
        <>
            <h1 className='text-2xl font-bold underline decoration-primary underline-offset-8'>Cadastro de Classe Toxicológica</h1>
            <form className='col-span-2 mt-5 flex flex-col gap-y-5' onSubmit={handleSubmit}>
                <CardForm title='Informações da Praga' style='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    <TextField control={control} name='description' required outsideTitle='Descrição' />
                    <Select control={control} required name='acronym' outsideTitle='Sigla/Grau de Toxicidade' options={acronymOptions} />
                    <Select control={control} required name='colorRange' outsideTitle='Cor da Faixa' options={colorRangeOptions} />
                    <Select control={control} name='classDanger' outsideTitle='Categoria/Classe de Perigo' options={classDangerOptions} />
                    <TextField control={control} name='wordWarning' outsideTitle='Palavra de Advertência' />
                    <div>
                        <RadioGroupInput
                            control={control}
                            title='Pictograma'
                            name='pictogram'
                            options={[
                                { label: <FaTriangleExclamation size={35} />, value: '111' },
                                { label: <FaSkullCrossbones size={35} />, value: '222' },
                                { label: <FaRegTimesCircle size={35} />, value: '333' }
                            ]}
                        />
                    </div>

                    <div className='col-span-2'>
                        <Textarea rows={4} name='observation' control={control} title='Observação' />
                    </div>
                </CardForm>
                <div className='place-items-center' />

                <Button text='Salvar' />
            </form>
        </>
    );
};

export default PageRegister;
