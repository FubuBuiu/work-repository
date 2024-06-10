'use client';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

import Button from '@/components/basic/Button';
import Select from '@/components/basic/Select';
import { SelectList } from '@/components/basic/SelectList';
import Textarea from '@/components/basic/Textarea';
import TextField from '@/components/basic/TextField';
import { CardAnimated } from '@/components/CardAnimated';
import { CardForm } from '@/components/cardForm';

import { useRegisterPrague } from './useRegisterPrague';

const Page = () => {
    const { control, handleSubmit, removePrague, handleAddPrague, watch } = useRegisterPrague();

    return (
        <>
            <h1 className='text-2xl font-bold underline decoration-primary underline-offset-8'>Cadastro de Pragas</h1>
            <form className='col-span-2 mt-5 flex flex-col gap-y-5' onSubmit={handleSubmit}>
                <CardForm title='Informações da Praga' style='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    <TextField control={control} name='nameScientific' required outsideTitle='Nome Cientifico' />
                    <TextField control={control} name='nameVulgar' required outsideTitle='Nome Vulgar' />
                    <Select
                        control={control}
                        required
                        name='agentTransmitting'
                        outsideTitle='Agente Transmissor'
                        listOptions={[
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
                        name='typePrague'
                        outsideTitle='Tipo de Praga'
                        listOptions={[
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
                <CardForm title='Culturas Vinculadas'>
                    <SelectList
                        className='col-span-2'
                        control={control}
                        name='relatedCrops'
                        type='text'
                        title='Culturas'
                        options={[{ value: 'Rucula' }, { value: 'Rucula 2' }, { value: 'Rucula 3' }]}
                    />
                    <Button className='self-end rounded-md' startIcon icon={{ icon: FaPlus, size: 22 }} variant='icon' type='button' onClick={handleAddPrague} />
                </CardForm>
                <div className='indicator flex w-auto flex-wrap gap-5'>
                    {watch('cropList')?.map((cultura: string) => (
                        <CardAnimated key={cultura} primaryKey={cultura} handlerRemoveElement={removePrague}>
                            {cultura}
                        </CardAnimated>
                    ))}
                </div>
                <Button text='Salvar' />
            </form>
        </>
    );
};

export default Page;
