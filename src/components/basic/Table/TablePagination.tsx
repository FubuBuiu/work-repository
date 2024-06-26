import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

import Button from '../Button';
import Select, { ListOptionType } from '../Select';

interface TablePaginationProps {
    nextPage: () => void;
    prevPage: () => void;
    changeItemsPerPage: (numberOfItems: number) => void;
    currentPage: number;
    totalItems: number;
}

const listPerPageOptions: ListOptionType[] = [
    { value: '10', key: '10' },
    { value: '20', key: '20' },
    { value: '30', key: '30' }
];

export function TablePagination({ nextPage, prevPage, currentPage, totalItems, changeItemsPerPage }: TablePaginationProps) {
    const { control, watch } = useForm();
    const itemsPerPage: string = watch('itemsPerPage', 10);
    const totalPages = Math.ceil(totalItems / parseInt(itemsPerPage));
    const isDisabledPrevPageButton = currentPage === 1;
    const isDisabledNextPageButton = currentPage === totalPages;

    useEffect(() => changeItemsPerPage(parseInt(itemsPerPage, 10)), [itemsPerPage]);

    return (
        <div className='flex h-[100px] items-end justify-end gap-10 p-2'>
            <div className=' flex w-fit items-center gap-3'>
                <span className='font-medium'>Linhas por página:</span>
                <Select width='fit-content' control={control} name='itemsPerPage' options={listPerPageOptions} defaultValue={'10'} />
            </div>
            <div className='join h-fit'>
                <Button className='join-item shadow-none' disabled={isDisabledPrevPageButton} onClick={prevPage} noAnimation variant='icon' icon={{ icon: MdKeyboardDoubleArrowLeft }} />
                <div className='join-item flex w-24 items-center justify-center bg-primary px-5 text-[14px] font-medium text-primary-content shadow-none'>{`${currentPage} - ${totalPages}`}</div>
                <Button className='join-item shadow-none' disabled={isDisabledNextPageButton} onClick={nextPage} noAnimation variant='icon' icon={{ icon: MdKeyboardDoubleArrowRight }} />
            </div>
        </div>
    );
}
