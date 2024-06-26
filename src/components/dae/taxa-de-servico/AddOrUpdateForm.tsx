import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import Button from '@/components/basic/Button';
import { Card } from '@/components/basic/Card';
import RadioGroup from '@/components/basic/Radio';
import Select from '@/components/basic/Select';
import TextField from '@/components/basic/TextField';

type FormType = 'register' | 'update';
export default function AddOrUpdateForm({ formType }: { formType: FormType }) {
    const scheme = zod.object({
        revenueCode: zod.string()['min'](1, { message: 'Informe o código da receita.' }),
        description: zod.string().min(1, { message: 'Informe a descrição.' }),
        indexerQuantity: zod.string().min(1, { message: 'Informe a quantidade.' }),
        isPerQuantity: zod.string().refine(value => value !== undefined && value !== '', { message: 'Campo obrigatório.' }),
        unitOfMeasurement: zod.string().min(1, { message: 'Informe a unidade de medida.' }),
        revenueGroup: zod.string().min(1, { message: 'Informe o grupo de receita.' })
    });
    const defaultRadioOptions = [
        { label: 'Sim', value: 'true' },
        { label: 'Não', value: 'false' }
    ];
    const unitOfMeasurementOptions = [
        { label: 'Documento', value: 'DOCUMENTO' },
        { label: 'Produto', value: 'PRODUTO' }
    ];
    const revenueGroupOptions = [
        { label: 'REGISTRO DE ESTABELECIMENTO', value: 'ESTABLISHMENT_REGISTER' },
        { label: 'ALTERAÇÃO DE ESTABELECIMENTO', value: 'CHANGE_OF_ESTABLISHMENT' },
        { label: 'RENOVAÇÃO DE ESTABELECIMENTO', value: 'ESTABLISHMENT_RENOVATION' },
        { label: 'REGISTRO DE PRESTADOR', value: 'PROVIDER_REGISTER' },
        { label: 'RENOVAÇÃO DE PRESTADOR', value: 'PROVIDER_RENEWAL' },
        { label: 'ALTERAÇÃO DE PRESTADOR', value: 'CHANGE_OF_PROVIDER' },
        { label: 'CADASTRO DE PRODUTO', value: 'PRODUCT_REGISTER' },
        { label: 'ALTERAÇÃO DE PRODUTO', value: 'PRODUCT_CHANGER' },
        { label: 'MANUTENÇÃO DE PRODUTO', value: 'PRODUCT_MAINTENANCE' }
    ];

    const onSubmit = (data: any) => {
        console.log(data);
    };
    const { control, handleSubmit } = useForm({ resolver: zodResolver(scheme) });
    return (
        <div className='form-control'>
            <Card.Root className='w-full'>
                <Card.Header>Cadastrar Taxa de Serviço</Card.Header>
                <Card.Body className='grid grid-cols-2 gap-3 max-md:grid-cols-1'>
                    {/* <div className='col-span-full'> */}
                    <TextField control={control} name='revenueCode' outsideTitle='Código da Receita' required size='small' />
                    <TextField control={control} name='description' outsideTitle='Descrição' required size='small' />
                    {/* </div> */}
                    <div className='col-span-full grid grid-cols-3 gap-3'>
                        <TextField control={control} name='indexerQuantity' size='small' outsideTitle='Quantidade' />
                        <Select control={control} name='unitOfMeasurement' options={unitOfMeasurementOptions} size='small' outsideTitle='Unidade de medida' />
                        <RadioGroup control={control} name='isPerQuantity' required title='Por quantidade' options={defaultRadioOptions} />
                    </div>
                    <Select control={control} name='revenueGroup' options={revenueGroupOptions} required size='small' outsideTitle='Grupo Receita' />
                </Card.Body>
                <Card.Actions>
                    <Button text={formType === 'register' ? 'Gravar' : 'Atualizar'} onClick={handleSubmit(onSubmit)} />
                </Card.Actions>
            </Card.Root>
        </div>
    );
}
