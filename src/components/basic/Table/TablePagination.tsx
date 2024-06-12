import { useForm } from 'react-hook-form';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

import Button from '../Button';
import Select, { ListOptionType } from '../Select';

interface TablePaginationProps {
    nextPage: () => void;
    prevPage: () => void;
    changeItemsPerPage: (numberOfItems: number) => void;
    currentPage: number;
    totalPages: number;
}

const listPerPageOptions: ListOptionType[] = [
    { value: '10', key: '10' },
    { value: '20', key: '20' },
    { value: '30', key: '30' }
];

export function TablePagination({ nextPage, prevPage, currentPage, totalPages, changeItemsPerPage }: TablePaginationProps) {
    const { control } = useForm();

    return (
        <div className='flex h-[100px] items-end justify-end gap-10 p-2'>
            <div className=' flex w-fit items-center gap-3'>
                <span className='font-medium'>Linhas por página:</span>
                <Select control={control} options={listPerPageOptions} defaultValue={'10'} onChange={event => changeItemsPerPage(parseInt(event.target.value))} />
            </div>
            <div className='join h-fit'>
                <Button className='join-item shadow-none' disabled={currentPage === 1} onClick={prevPage} noAnimation variant='icon' icon={{ icon: MdKeyboardDoubleArrowLeft }} />
                <div className='join-item flex w-24 items-center justify-center bg-primary px-5 text-[14px] font-medium text-primary-content shadow-none'>{`${currentPage} - ${totalPages}`}</div>
                <Button className='join-item shadow-none' disabled={currentPage === totalPages} onClick={nextPage} noAnimation variant='icon' icon={{ icon: MdKeyboardDoubleArrowRight }} />
            </div>
        </div>
    );
}
