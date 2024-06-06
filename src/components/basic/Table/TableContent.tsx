"use client"
import { useState } from 'react';

interface HeaderTable {
    label: string;
    key: string;
}

type orderType = 'normal' | 'crescent' | 'decrescent';

export function TableContent({
    header,
    data = [],
    emptyMessage = 'Nenhum dado encontrado',
    enumaratedRows,
    ...props
}: React.TableHTMLAttributes<HTMLTableElement> & { header: HeaderTable[]; data?: Array<any>; enumaratedRows?: boolean; emptyMessage?: string }) {
    //TODO Verificar a necessidade do useState list
    const [list, setList] = useState(data);
    const [orderColumn, setOrderColumn] = useState<string | undefined>(undefined);
    const [order, setOrder] = useState<orderType>('normal');
    const [hoveredColumn, setHoveredColumn] = useState<string | undefined>(undefined);

    const arrowUpOrderTable = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
            <path d='M440-647 244-451q-12 12-28 11.5T188-452q-11-12-11.5-28t11.5-28l264-264q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l264 264q11 11 11 27.5T772-452q-12 12-28.5 12T715-452L520-647v447q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-447Z' />
        </svg>
    );
    const arrowDownOrderTable = (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
            <path d='M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z' />
        </svg>
    );

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
                                        {orderColumn === column.key && order === 'decrescent' ? arrowDownOrderTable : arrowUpOrderTable}
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
                            </tr>
                        ))
                    ) : (
                        <td className='text-center font-bold' colSpan={header.length}>
                            {emptyMessage}
                        </td>
                    )}
                </tbody>
            </table>
        </div>
    );
}
