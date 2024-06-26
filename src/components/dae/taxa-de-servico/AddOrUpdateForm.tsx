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
        revenueCode: zod.string().min(1, { message: 'Informe o código da receita.' }),
        levelCodel1: zod.string().min(1, { message: 'Informe o código nível 1.' }),
        levelDescription1: zod.string().min(1, { message: 'Informe a descrição nível 1.' }),
        feeType: zod.string().min(1, { message: 'Informe o tipo da taxa.' }),
        feeUsedToIssueGTA: zod.string().refine(value => value === 'true', { message: 'Informe o tipo da taxa' }),
        isByLanes: zod.string().min(1, { message: 'Campo obrigatório.' }),
        isIndexed: zod.string().refine(value => value === 'true', { message: 'Campo obrigatório.' }),
        indexer: zod.string().min(1, { message: 'Informe o indexador.' }),
        indexerQuantity: zod.string().min(1, { message: 'Informe a quantidade.' }),
        isContributorAgriculturalFund: zod.string().refine(value => value === 'true', { message: 'Campo obrigatório.' }),
        isByDocument: zod.string().refine(value => value === 'true', { message: 'Campo obrigatório.' }),
        unitOfMeasurement: zod.string().min(1, { message: 'Informe a unidade de medida.' }),
        isByDocumentAndQuantity: zod.string().refine(value => value === 'true', { message: 'Campo obrigatório.' }),
        revenueGroup: zod.string().min(1, { message: 'Informe o grupo de receita.' })
    });
    const feeTypeRadioOptions = [
        { label: 'Taxa pelo poder de polícia', value: 'policePowerFee' },
        { label: 'Taxas pela prestação do serviço na área do poder executivo', value: 'executiveServiceFee' },
        { label: 'Multas', value: 'penalties' }
    ];
    const defaultRadioOptions = [
        { label: 'Sim', value: 'true' },
        { label: 'Não', value: 'false' }
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
                    <div className='col-span-full'>
                        <TextField control={control} name='revenueCode' outsideTitle='Código da Receita' required size='small' />
                    </div>
                    <div className='col-span-full grid grid-cols-4 gap-3 max-md:grid-cols-1'>
                        <div className='col-span-1 grid gap-3'>
                            <TextField control={control} name='levelCodel1' outsideTitle='Código Nível 1' required size='small' />
                            <TextField control={control} name='levelCodel2' outsideTitle='Código Nível 2' size='small' />
                            <TextField control={control} name='levelCodel3' outsideTitle='Código Nível 3' size='small' />
                            <TextField control={control} name='levelCodel4' outsideTitle='Código Nível 4' size='small' />
                            <TextField control={control} name='levelCodel5' outsideTitle='Código Nível 5' size='small' />
                        </div>
                        <div className='col-span-3 grid gap-3'>
                            <TextField control={control} name='levelDescription1' outsideTitle='Descrição Nível 1' required size='small' />
                            <TextField control={control} name='levelDescription2' outsideTitle='Descrição Nível 2' size='small' />
                            <TextField control={control} name='levelDescription3' outsideTitle='Descrição Nível 3' size='small' />
                            <TextField control={control} name='levelDescription4' outsideTitle='Descrição Nível 4' size='small' />
                            <TextField control={control} name='levelDescription5' outsideTitle='Descrição Nível 5' size='small' />
                        </div>
                    </div>
                    <div className='col-span-full'>
                        <RadioGroup control={control} name='feeType' required options={feeTypeRadioOptions} title='Tipo' />
                    </div>
                    <RadioGroup control={control} name='feeUsedToIssueGTA' title='Taxa usada para emissão de GTA' required options={defaultRadioOptions} />
                    <RadioGroup control={control} name='isByLanes' title='Por faixa' required options={defaultRadioOptions} />
                    <div className='col-span-full grid grid-cols-4 gap-3'>
                        <RadioGroup control={control} name='isIndexed' required title='Indexado?' options={defaultRadioOptions} />
                        <TextField control={control} name='indexer' size='small' outsideTitle='Indexador' />
                        <TextField control={control} name='indexerName' size='small' disabled outsideTitle=' ' />
                        <TextField control={control} name='indexerQuantity' size='small' outsideTitle='Quantidade' />
                    </div>
                    <div className='col-span-full'>
                        <RadioGroup control={control} name='isContributorAgriculturalFund' required title='Contribui com o fundo agropecuário?' options={defaultRadioOptions} />
                    </div>
                    <RadioGroup control={control} name='isByDocument' required title='Por documento?' options={defaultRadioOptions} />
                    <Select control={control} name='unitOfMeasurement' size='small' outsideTitle='Unidade de medida' />
                    <RadioGroup control={control} name='isByDocumentAndQuantity' required title='Por documento e quantidade' options={defaultRadioOptions} />
                    <Select control={control} name='revenueGroup' required size='small' outsideTitle='Grupo Receita' />
                </Card.Body>
                <Card.Actions>
                    <Button text={formType === 'register' ? 'Gravar' : 'Atualizar'} onClick={handleSubmit(onSubmit)} />
                </Card.Actions>
            </Card.Root>
        </div>
    );
}
