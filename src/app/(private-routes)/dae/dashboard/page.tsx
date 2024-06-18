'use client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/basic/Button';
import TextField from '@/components/basic/TextField';

import { CardDoughnutChart } from './components/CardDoughnutChart';
import { sourceData } from './constants/constants';

function DashboardDAEPage() {
    const { control, handleSubmit } = useForm();
    const onSubmit = handleSubmit(data => {
        console.log(data);
    });

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-title'>Dashboard DAE</h1>
            <form onSubmit={onSubmit} className='flex flex-col items-center gap-4 sm:flex-row sm:gap-8'>
                <TextField control={control} type='date' name='dataInicial' outsideTitle='Data Inicial' />
                <TextField control={control} type='date' name='dataFinal' outsideTitle='Data Final' />
                <Button className='self-end' type='submit' text='Filtrar'></Button>
            </form>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
                <CardDoughnutChart title='Valor total acumulado no periodo' value={31} dataList={sourceData} />
                <CardDoughnutChart title={`Valor total acumulado em ${new Date().getFullYear()}`} value={31} dataList={[{ label: 'label', value: 1231 }]} />
                <CardDoughnutChart title={'Valor total acumulado em ' + format(new Date(), 'MMMM', { locale: ptBR })} value={31} dataList={sourceData} />
                <CardDoughnutChart title='Valor total acumulado hoje' value={31} dataList={sourceData} />
            </div>
        </div>
    );
}

export default DashboardDAEPage;
