'use client';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

import Button from '@/components/basic/Button';
import Select from '@/components/basic/Select';
import SelectList from '@/components/basic/SelectList';
import Textarea from '@/components/basic/Textarea';
import TextField from '@/components/basic/TextField';
import { CardAnimated } from '@/components/CardAnimated';
import { CardForm } from '@/components/cardForm';

import { useRegisterPrague } from './useRegisterPrague';

const Page = () => {
    const { control, handleSubmit, removePrague, handleAddPrague, watch } = useRegisterPrague();

    return (
        <>
            <h1 className='text-title'>Cadastro de Pragas</h1>
            <form className='col-span-2 mt-5 flex flex-col gap-y-5' onSubmit={handleSubmit}>
                <CardForm title='Informações da Praga' style='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    <TextField control={control} name='scientificName' required outsideTitle='Nome Cientifico' />
                    <TextField control={control} name='vulgarName' required outsideTitle='Nome Vulgar' />
                    <Select
                        control={control}
                        required
                        name='agentTransmitting'
                        outsideTitle='Agente Transmissor'
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
                        control={control}
                        required
                        name='pragueType'
                        outsideTitle='Tipo de Praga'
                        options={[
                            { key: '1', value: 'doença' },
                            { key: '2', value: 'erva daninha' },
                            { key: '3', value: 'Inseto' }
                        ]}
                    />
                    <Textarea rows={3} name='symptoms' control={control} title='Sintomas' />
                    <Textarea rows={3} name='bioecology' control={control} title='Bioecologia' />
                    <Textarea rows={3} name='observation' control={control} title='Observação' />
                </CardForm>
                <div className='place-items-center' />
                <CardForm title='Culturas Vinculadas' style='lg:grid-cols-1'>
                    <div className='flex min-w-full gap-x-2'>
                        <SelectList
                            className='flex-1'
                            control={control}
                            name='relatedCultures'
                            type='text'
                            title='Culturas'
                            options={[{ value: 'Rucula' }, { value: 'Rucula 2' }, { value: 'Rucula 3' }]}
                        />
                        <Button className='self-end rounded-md' startIcon icon={{ icon: FaPlus, size: 22 }} variant='icon' type='button' onClick={handleAddPrague} />
                    </div>
                </CardForm>
                <CardForm title='Pragas/Doenças Vinculadas' style='lg:grid-cols-1 mt-6' background='Base100'>
                    <div className='indicator flex w-auto flex-wrap gap-5'>
                        {watch('cropList')?.map((culture: string) => (
                            <CardAnimated key={culture} primaryKey={culture} handlerRemoveElement={removePrague}>
                                {culture}
                            </CardAnimated>
                        ))}
                    </div>
                </CardForm>
                <Button text='Salvar' />
            </form>
        </>
    );
};

export default Page;
