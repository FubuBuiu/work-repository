import React from 'react';
import { twMerge } from 'tailwind-merge';

export const CardForm = ({ children, title, style }: { children: React.ReactNode; title: string; style?: string }) => {
    const styleMerge = twMerge('md:grid-col-2 ml-10 grid grid-cols-1 gap-4 lg:grid-cols-3', style);
    return (
        <div className={`border-20 rounded-md bg-base-200 p-3 shadow-md `}>
            <div className=''>
                <h3 className='text-lg font-bold'>{title}</h3>
            </div>
            <div className={styleMerge}>{children}</div>
        </div>
    );
};
