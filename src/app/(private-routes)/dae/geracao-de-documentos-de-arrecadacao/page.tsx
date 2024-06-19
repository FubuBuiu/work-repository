'use client';
import Button from '@/components/basic/Button';
import { Card } from '@/components/basic/Card';
import Select from '@/components/basic/Select';
import TextField from '@/components/basic/TextField';
import Textarea from '@/components/basic/Textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaCircleInfo } from 'react-icons/fa6';
import * as zod from 'zod';

export default function CollectionDocumentGenerationForm() {
    //TODO Futuramente criar um arquivo para validações básicas de todos os formulários
    const scheme = zod.object({
        serviceCharge: zod.string().min(1, { message: 'Selecione a taxa de serviço.' }),
        quantity: zod.string().refine(value => !isNaN(parseFloat(value)), { message: 'Insira a quantidade.' }), //TODO melhorar essa validação de numerica
        unitInMeasure: zod.string().min(1, { message: 'Informe a unidade de medida.' }),
        cpfOrCnpj: zod.string().min(1, { message: 'Informe o CPF/CNPJ' }),
        draweeName: zod.string().min(1, { message: 'Informe o nome sacado.' }),
        cep: zod.string().min(1, { message: 'Informe o CEP.' }),
        adress: zod.string().min(1, { message: 'Informe o edereço.' }),
        neighborhood: zod.string().min(1, { message: 'Informe o bairro.' })
    });
    const { control, handleSubmit } = useForm({ resolver: zodResolver(scheme), mode: 'all' });
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <Card.Root className='w-full'>
            <Card.Header>Geração de Documento de Arrecadação Avulso</Card.Header>
            <Card.Body className='grid grid-cols-3 gap-2 max-md:grid-cols-1'>
                <div className='col-span-full'>
                    <Select required size='small' outsideTitle='Taxas de Poder de Polícia e Serviços em Geral' name='serviceCharge' control={control} />
                </div>
                <TextField control={control} name='indexedValue' size='small' disabled outsideTitle='Valor indexado' />
                <TextField control={control} name='quantity' required size='small' outsideTitle='Quantidade' />
                <TextField type='number' control={control} name='valueInReal' size='small' disabled required outsideTitle='Valor em Real' />
                <TextField control={control} name='unitInMeasure' required size='small' outsideTitle='Unidade em Medida' />
                <TextField control={control} name='cpfOrCnpj' required size='small' outsideTitle='CPF/CNPJ do pagador' />
                <TextField control={control} name='draweeName' required size='small' outsideTitle='Nome do pagador' />
                <TextField control={control} required size='small' name='cep' outsideTitle='CEP do pagador' />
                <TextField control={control} required size='small' name='adress' outsideTitle='Endereço do pagador' />
                <TextField control={control} required size='small' name='neighborhood' outsideTitle='Bairro do pagador' />
                <TextField control={control} disabled size='small' name='draweeMunicipality' outsideTitle='Município do pagador' />
                <div className='col-span-full'>
                    <Textarea control={control} name='reference' title='Referência' />
                </div>
            </Card.Body>
            <Card.Actions className='flex-col items-end'>
                <Button text='Gravar' onClick={handleSubmit(onSubmit)} />
                <div className='flex items-center justify-end gap-2 text-sm text-info'>
                    <FaCircleInfo />
                    <span>O documento gerado tem vencimento 30 dias a partir da data de criação</span>
                </div>
            </Card.Actions>
        </Card.Root>
    );
}
