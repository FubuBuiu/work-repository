import { TableHTMLAttributes, useState } from 'react';
import { IconType } from 'react-icons';
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6';

import Button from '../Button';
import Tooltip from '../Tooltip';

export type HeaderTable = {
    label: string;
    key: string;
};

type orderType = 'normal' | 'crescent' | 'decrescent';

// type ActionType = 'DO_IT' | 'GO_TO';

// enum ActionEnum {
//     DO_IT = 'doIt',
//     GO_TO = 'goTo'
// }

type Action = {
    label?: string;
    toolTipText?: string;
    icon?: { icon: IconType; size?: number | string; color?: string };
    action: string;
    auxValues?: { [key: string]: any };
};

type TableData = {
    [key: string]: any;
    actions?: Action[];
};

export type Actions = {
    [key: string]: (value?: any) => void;
};

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
    header: HeaderTable[];
    data?: TableData[];
    enumaratedRows?: boolean;
    emptyMessage?: string;
    actions?: Actions;
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

    //TODO Tipar melhor o parâmetro da função depois
    // const handleActionColumn = ({ doIt, goTo }: { goTo?: string; doIt?: () => void }): void => {
    //     if (doIt) {
    //         doIt();
    //     } else if (goTo) {
    //         router.push(goTo);
    //     }
    // };

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
                                {header.map(
                                    column =>
                                        item[column.key] && (
                                            <td key={`${column.key}-${index}`}>
                                                <div className='w-fit'>{item[column.key]}</div>
                                            </td>
                                        )
                                )}
                                {item['actions'] && actions && (
                                    <td className='flex gap-2'>
                                        {(item['actions'] as Action[])?.map(
                                            (action, index) =>
                                                actions[action.action] && (
                                                    <Tooltip message={action.toolTipText} key={`action-${index}`}>
                                                        <Button
                                                            text={action.label}
                                                            icon={action.icon}
                                                            ghost={action.icon && true}
                                                            variant={action.icon && 'icon'}
                                                            onClick={() => actions[action.action](action.auxValues?.id)}
                                                            size='small'
                                                        />
                                                    </Tooltip>
                                                )
                                        )}
                                    </td>
                                )}
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
