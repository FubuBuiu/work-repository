import { TableHTMLAttributes, useState } from 'react';
import Button from '../Button';
import { IconType } from 'react-icons';
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6';
import Tooltip from '../Tooltip';

export type HeaderTable = {
    label: string;
    key: string;
};

type orderType = 'normal' | 'crescent' | 'decrescent';

export type Action = {
    label?: string;
    tooltipText?: string;
    icon?: { icon: IconType; size?: number | string; color?: string };
    action: (value?: any) => void;
};

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
    header: HeaderTable[];
    data?: Array<any>;
    enumaratedRows?: boolean;
    emptyMessage?: string;
    actions?: Action[];
}

export function TableContent({ header, data = [], emptyMessage = 'Nenhum dado encontrado', enumaratedRows, actions, ...props }: ITableProps) {
    const [list, setList] = useState(data);
    const [orderColumn, setOrderColumn] = useState<string | undefined>(undefined);
    const [order, setOrder] = useState<orderType>('normal');
    const [hoveredColumn, setHoveredColumn] = useState<string | undefined>(undefined);

    const handleOrdenation = (column: string): void => {
        if (data.length !== 0) {
            if (order === 'normal') {
                const orderedList = data.slice().sort((a, b) => {
                    if (a[column] < b[column]) {
                        return -1;
                    }
                    if (a[column] > b[column]) {
                        return 1;
                    }
                    return 0;
                });
                setOrder('crescent');
                setOrderColumn(column);
                setList(orderedList);
            } else if (order === 'crescent') {
                const orderedList = data.slice().sort((a, b) => {
                    if (a[column] > b[column]) {
                        return -1;
                    }
                    if (a[column] < b[column]) {
                        return 1;
                    }
                    return 0;
                });
                setList(orderedList);
                setOrderColumn(column);
                setOrder('decrescent');
            } else {
                setList(data);
                setOrderColumn(undefined);
                setOrder('normal');
            }
        }
    };

    return (
        <div className='overflow-auto'>
            <table className='table rounded-none bg-primary' {...props}>
                <thead className='fill-primary-content text-primary-content'>
                    <tr>
                        {enumaratedRows && <th></th>}
                        {header.map(column => (
                            <th key={column.key}>
                                <div
                                    className='flex w-fit cursor-pointer gap-x-1 hover:!opacity-70'
                                    onMouseEnter={() => setHoveredColumn(column.key)}
                                    onMouseLeave={() => setHoveredColumn(undefined)}
                                    onClick={() => handleOrdenation(column.key)}
                                >
                                    {column.label}
                                    <div className={`w-[18px] ${hoveredColumn === column.key ? 'opacity-100' : 'opacity-0'} ${orderColumn === column.key && '!opacity-100'}`}>
                                        {orderColumn === column.key && order === 'decrescent' ? <FaArrowDownLong /> : <FaArrowUpLong />}
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='bg-base-300 text-base-content'>
                    {data.length !== 0 ? (
                        list.map((item, index) => (
                            <tr key={index}>
                                {enumaratedRows && <th>{index + 1}</th>}
                                {header.map(column => (
                                    <td key={`${column.key}-${index}`}>
                                        <div className='w-fit'>{item[column.key]}</div>
                                    </td>
                                ))}
                                <td className='flex gap-2'>
                                    {actions?.map((action, index) => (
                                        <Tooltip message={action.tooltipText} key={`action-${index}`}>
                                            <Button text={action.label} icon={action.icon} ghost={action.icon && true} variant={action.icon && 'icon'} onClick={action.action} size='small' />
                                        </Tooltip>
                                    ))}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className='text-center font-bold' colSpan={header.length}>
                                {emptyMessage}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
