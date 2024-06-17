'use client';
import Button from '@/components/basic/Button';
import { Card } from '@/components/basic/Card';
import RadioGroup from '@/components/basic/Radio';
import Select from '@/components/basic/Select';
import TextField from '@/components/basic/TextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

export default function CollectionDocumentGenerationForm() {
    //TODO Futuramente criar um arquivo para validações básias de todos os formulários
    const scheme = zod.object({
        serviceCharge: zod.string().min(1, { message: 'Selecione a taxa de serviço.' }),
        quantity: zod.string().refine(value => !isNaN(parseFloat(value)), { message: 'Insira a quantidade.' }), //TODO melhorar essa validação de numerica
        unitInMeasure: zod.string().min(1, { message: 'Informe a unidade de medida.' }),
        cpfOrCnpj: zod.string().min(1, { message: 'Informe o CPF/CNPJ' }),
        draweeName: zod.string().min(1, { message: 'Informe o nome sacado.' }),
        isStateAdress: zod.string().min(1, { message: 'Informe se o endereço é do estado.' }),
        cep: zod.string().min(1, { message: 'Informe o CEP.' }),
        adress: zod.string().min(1, { message: 'Informe o edereço.' }),
        neighborhood: zod.string().min(1, { message: 'Informe o bairro.' }),
        municipalityCode: zod.string().min(1, { message: 'Informe o código do município.' }),
        documentDueDate: zod.string().min(1, { message: 'Informe a data de vencimento do documento.' })
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
                <TextField control={control} name='cpfOrCnpj' required size='small' outsideTitle='CPF/CNPJ do Sacado' />
                <TextField control={control} name='draweeName' required size='small' outsideTitle='Nome do Sacado' />
                <div className='col-span-full'>
                    <RadioGroup
                        control={control}
                        name='isStateAdress'
                        title='Endereço é do estado do SE?'
                        options={[
                            { label: 'Sim', value: 'YES' },
                            { label: 'Não', value: 'NO' }
                        ]}
                    />
                </div>
                <TextField control={control} required size='small' name='cep' outsideTitle='CEP Sacado' />
                <TextField control={control} required size='small' name='adress' outsideTitle='Endereço Sacado' />
                <TextField control={control} required size='small' name='neighborhood' outsideTitle='Bairro Sacado' />
                <TextField control={control} required size='small' name='municipalityCode' outsideTitle='Município Sacado' />
                <TextField control={control} name='municipalityName' size='small' outsideTitle=' ' disabled />
                <TextField control={control} required name='documentDueDate' size='small' outsideTitle='Data de Vencimento do Documento' />
            </Card.Body>
            <Card.Actions className='gap-2'>
                <Button text='Gravar' onClick={handleSubmit(onSubmit)} />
                <Button text='Novo' />
            </Card.Actions>
        </Card.Root>
    );
}
