'use client';

import ToggleTheme from '@/components/basic/ToggleTheme';
import Button from '@/components/basic/Button';
import { Table } from '@/components/basic/Table';
import TextField from '@/components/basic/TextField';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '@/components/basic/Select';
import Link from 'next/link';
import { FaAngry } from 'react-icons/fa';
import Checkbox from '@/components/basic/Checkbox';

export default function Playground() {
    // --------TextField Variables--------
    const schemaTest = zod.object({});
    const formTest = useForm({ resolver: zodResolver(schemaTest), mode: 'all' });

    const schema = zod.object({
        outlined: zod.string().min(1, { message: 'ERROR' }),
        filled: zod.string().min(1, { message: 'ERROR' })
    });
    const form = useForm({ resolver: zodResolver(schema), mode: 'all' });

    const schema2 = zod.object({
        outlined2: zod.string().min(1, { message: 'ERROR' }),
        filled2: zod.string().min(1, { message: 'ERROR' })
    });
    const form2 = useForm({ resolver: zodResolver(schema2), mode: 'all' });
    // ---------------------------------

    // --------Table Variables--------
    const header = [
        { label: 'Nome', key: 'name' },
        { label: 'Id', key: 'id' },
        { label: 'Genero', key: 'gender' },
        { label: 'Endereço', key: 'address' },
        { label: 'Moeda', key: 'currency' },
        { label: 'Email', key: 'email' }
    ];
    const dataTable = [
        {
            id: 1,
            name: 'Miriam',
            email: 'mcottier0@google.com.br',
            gender: 'Female',
            address: 'PO Box 6407',
            currency: 'Yuan Renminbi'
        },
        {
            id: 2,
            name: 'Gonzalo',
            email: 'gtowsey1@hatena.ne.jp',
            gender: 'Male',
            address: 'Apt 211',
            currency: 'Ruble'
        },
        {
            id: 3,
            name: 'Kelsey',
            email: 'kdeblase2@sogou.com',
            gender: 'Female',
            address: 'Apt 965',
            currency: 'Dollar'
        },
        {
            id: 4,
            name: 'Abra',
            email: 'amummery3@example.com',
            gender: 'Female',
            address: 'Apt 1656',
            currency: 'Euro'
        },
        {
            id: 5,
            name: 'Ransom',
            email: 'rjohl4@wix.com',
            gender: 'Male',
            address: 'Suite 28',
            currency: 'Peso'
        },
        {
            id: 6,
            name: 'Horace',
            email: 'hdimmer5@bandcamp.com',
            gender: 'Male',
            address: '20th Floor',
            currency: 'Yuan Renminbi'
        },
        {
            id: 7,
            name: 'Orelie',
            email: 'oweekland6@sfgate.com',
            gender: 'Female',
            address: '13th Floor',
            currency: 'Lempira'
        },
        {
            id: 8,
            name: 'Adlai',
            email: 'agodard7@goodreads.com',
            gender: 'Male',
            address: 'PO Box 19825',
            currency: 'Ruble'
        },
        {
            id: 9,
            name: 'Gussi',
            email: 'gdelaci8@eventbrite.com',
            gender: 'Agender',
            address: 'PO Box 58393',
            currency: 'Peso'
        },
        {
            id: 10,
            name: 'Casper',
            email: 'cbadrick9@harvard.edu',
            gender: 'Male',
            address: 'Room 1261',
            currency: 'Lev'
        }
    ];
    const selectOptions = [
        { key: 'option_1', value: 'Option 1' },
        { key: 'option_2', value: 'Option 2' },
        { key: 'option_3', value: 'Option 3' },
        { key: 'option_4', value: 'Option 4' }
    ];

    const searchTableForm = useForm();
    // ------------------------------

    return (
        <>
            <ToggleTheme />
            <Link href={'/'} />
            <div>
                <div className='h-full w-full p-5'>
                    <span className='text-3xl font-bold'>BUTTONS</span>
                    <div className='mb-2 mt-1 flex flex-wrap gap-4'>
                        <Button loading={true} />
                        <Button text='BUTTON' />
                        <Button outline text='OUTLINE' />
                        <Button noAnimation text='BUTTON WITHOUT ANIMATION' />
                        <Button disabled text='BUTTON DISABLED' />
                        <Button text='START ICON' startIcon icon={FaAngry} />
                        <Button text='START ICON OUTLINE' outline startIcon icon={FaAngry} />
                        <Button text='END ICON' endIcon icon={FaAngry} />
                        <Button text='BUTTON WITH CUSTOM COLOR' color='#ff00ff' contentColor='#FFF' endIcon icon={FaAngry} />
                        <Button text='OUTLINED BUTTON WITH CUSTOM COLOR' outline color='#ff00ff' contentColor='#FFF' endIcon icon={FaAngry} />
                        <Button variant='icon' icon={FaAngry} />
                        <Button text='LARGE BUTTON' size='large' icon={FaAngry} />
                        <Button text='SMALL BUTTON' size='small' icon={FaAngry} />
                        <Button text='EXTRA SMALL BUTTON' size='extra-small' icon={FaAngry} />
                    </div>
                    <Button block text='BUTTON BLOCK' />
                </div>
                <div className='py-3'>
                    <span className='text-3xl font-bold'>TEXTFIELD</span>
                    <div className='m-4 flex gap-2'>
                        <TextField control={formTest.control} widthField='300px' placeholder='Outlined' errorColor='orange' />
                        <TextField control={formTest.control} widthField='300px' variant='filled' placeholder='Filled' />
                    </div>
                    <div className='m-4 flex gap-2'>
                        <TextField control={formTest.control} widthField='300px' outsideTitle='Outside Title' />
                        <TextField control={formTest.control} widthField='300px' outsideTitle='Outside Title' variant='filled' />
                    </div>
                    <div className='m-4 flex gap-2'>
                        <TextField control={formTest.control} widthField='300px' insideTitle='Inside Title' />
                        <TextField control={formTest.control} widthField='300px' variant='filled' insideTitle='Inside Title' />
                    </div>
                    <div className='m-4 flex gap-2'>
                        <TextField control={formTest.control} widthField='300px' insideTitle='With Start Icon' startIcon={FaAngry} />
                        <TextField control={formTest.control} widthField='300px' variant='filled' insideTitle='With End Icon' endIcon={FaAngry} />
                    </div>
                    <div className='m-4 flex gap-2'>
                        <TextField control={formTest.control} widthField='300px' insideTitle='With Custom Color' startIcon={FaAngry} color='green' />
                        <TextField control={formTest.control} widthField='300px' variant='filled' insideTitle='With Custom Color' startIcon={FaAngry} color='#e98400' />
                    </div>
                    <div className='m-4 flex flex-wrap gap-2'>
                        <TextField name='outlined' control={form.control} widthField='300px' insideTitle='With Validation' startIcon={FaAngry} />
                        <TextField name='filled' control={form.control} widthField='300px' variant='filled' insideTitle='With Validation' startIcon={FaAngry} />
                        <Button text='SEND' disabled={!form.formState.isValid} />
                        <div className='w-full'></div>
                        <TextField name='outlined2' control={form2.control} widthField='300px' errorColor='orange' insideTitle='With Custom Error Color' startIcon={FaAngry} />
                        <TextField name='filled2' control={form2.control} widthField='300px' errorColor='purple' variant='filled' insideTitle='With Custom Error Color' startIcon={FaAngry} />
                        <Button text='SEND' disabled={!form2.formState.isValid} />
                    </div>
                </div>
                <div className='p-5'>
                    <span className='text-3xl font-bold'>SELECT</span>
                    <div className=' mt-3 flex flex-col items-start gap-4'>
                        <Select className='w-[300px]' listOptions={selectOptions} insideTitle='Inside Title' />
                        <Select className='w-[300px]' listOptions={selectOptions} outsideTitle='Outside Title' />
                        <Select
                            className='w-[300px]'
                            listOptions={selectOptions}
                            insideTitle='Inside Title'
                            outsideTitle='Outside Title'
                            topRightLabel={FaAngry}
                            bottomLeftText='Bottom Left Text'
                            bottomRightLabel={FaAngry}
                        />
                        <Select
                            className='w-[300px]'
                            listOptions={selectOptions}
                            insideTitle='Inside Title'
                            outsideTitle='Outside Title'
                            topRightLabel='Top Right Label'
                            bottomLeftText='Bottom Left Text'
                            bottomRightLabel='Bottom Right Label'
                        />
                        <Select className='w-[300px]' listOptions={selectOptions} outsideTitle='Select with custom color' color='#75d606' />
                    </div>
                </div>
                <div className='h-full w-full p-5'>
                    <span className='text-3xl font-bold'>TABLE</span>
                    <div className='mt-3'>
                        <Table.Root>
                            <Table.Filters>
                                <TextField widthField='300px' name='searchTable' placeholder='Pesquisar na tabela' control={searchTableForm.control} />
                            </Table.Filters>
                            <Table.Content header={header} data={dataTable} />
                            <Table.Pagination currentPage={1} totalPages={10} nextPage={() => {}} prevPage={() => {}} changeItemsPerPage={() => {}} />
                        </Table.Root>
                    </div>
                </div>
                <div className='h-full w-full p-5'>
                    <span className='text-3xl font-bold'>CHECKBOX</span>
                    <div className='mb-2 mt-1 flex  flex-wrap gap-4'>
                        <Checkbox />
                        <Checkbox checked disabled />
                        <Checkbox text='Checkbox with text' />
                        <Checkbox text='Checkbox with other text color' textColor='red' />
                        <Checkbox text='Checkbox large size' size='large' />
                        <Checkbox text='Checkbox small size' size='small' />
                        <Checkbox text='Checkbox extra small size' size='extra-small' />
                        <Checkbox className='border-orange-400 [--chkbg:yellow] [--chkfg:black] checked:border-red-600' text='Checkbox with custom color' />
                    </div>
                </div>
            </div>
        </>
    );
}
