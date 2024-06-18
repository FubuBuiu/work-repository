import { useState } from 'react';

import { Card } from '@/components/basic/Card';

import { backgroundColor } from '../constants/constants';
import { DoughnutChart } from './DoughnutChartComponent';

const CardDoughnutChart = ({ title, value, dataList }: { title: string; value: number; dataList: { label: string; value: number }[] }) => {
    const [active, setActive] = useState<number>(-1);
    const handlerItemHover = (data: number) => {
        setActive(data);
    };
    return (
        <Card.Root className='max-w-fit p-0'>
            <Card.Body className='flex flex-col items-center px-3'>
                <div className='stat-title text-wrap text-center'>{title}</div>
                <div className='stat-value'>{value}</div>
                <DoughnutChart data={dataList} itemHover={handlerItemHover} />
                <div className='w-full'>
                    {dataList.map((data, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between px-2 py-1 ${index % 2 ? 'bg-gray-100' : 'bg-gray-200'} ${index == 0 ? 'rounded-t-md' : ''}
                                ${index == dataList.length - 1 || dataList.length == 1 ? 'rounded-b-md' : ''}
                                transition duration-300 ${active === index ? '!bg-blue-200 font-bold' : active == -1 ? '' : 'opacity-35'}
                                
                            `}
                        >
                            <div className='flex items-center gap-3'>
                                <span className='rounded-ful h-4 w-4 rounded-full' style={{ backgroundColor: backgroundColor[index] }}></span>
                                <p>{data.label}</p>
                            </div>
                            <div>{data.value}</div>
                        </div>
                    ))}
                </div>
            </Card.Body>
        </Card.Root>
    );
};

export { CardDoughnutChart };
