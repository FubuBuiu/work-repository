'use client';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

import Button from '@/components/basic/Button';
import SelectList from '@/components/basic/SelectList';
import Textarea from '@/components/basic/Textarea';
import TextField from '@/components/basic/TextField';
import { CardAnimated } from '@/components/CardAnimated';
import { CardForm } from '@/components/cardForm';

import { useRegisterCulture } from './useRegisterCulture';

const RegisterForm: React.FC = () => {
    const { handleAddCulture, handleSubmit, control, mockOptions, watch, removeCulture } = useRegisterCulture();

    return (
        <>
            <h1 className='text-title'>Cadastro de Cultura</h1>
            <form onSubmit={handleSubmit} className='mt-5 flex w-full flex-1 flex-col gap-y-4'>
                <CardForm title='Nova Cultura' style='lg:grid-cols-2'>
                    <TextField required control={control} name='scientificName' outsideTitle='Nome Cientifíco' />
                    <TextField required control={control} name='vulgarName' outsideTitle='Nome Vulgar' />
                    <div className='col-span-2'>
                        <Textarea control={control} rows={4} name='observation' title='Observação' />
                    </div>
                </CardForm>
                <CardForm title='Vincular Praga/Doença' style='lg:grid-cols-1'>
                    <div className='flex min-w-full gap-x-2'>
                        <SelectList className='flex-1' title='Nome cientifico ou polular' control={control} name='pragueDisease' options={mockOptions} />
                        <Button className='self-end rounded-md' startIcon icon={{ icon: FaPlus, size: 22 }} variant='icon' type='button' onClick={handleAddCulture} />
                    </div>
                </CardForm>
                <CardForm title='Pragas/Doenças Vinculadas' style='lg:grid-cols-1 mt-6' background='Base100'>
                    <div className='indicator flex w-auto flex-wrap gap-5'>
                        {watch('pragueDiseaseList')?.map((culture: string) => (
                            <CardAnimated key={culture} primaryKey={culture} handlerRemoveElement={removeCulture}>
                                {culture}
                            </CardAnimated>
                        ))}
                    </div>
                </CardForm>
                <Button type='submit' text='Salvar' />
            </form>
        </>
    );
};
export default RegisterForm;
