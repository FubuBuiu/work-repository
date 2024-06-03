import React from 'react';

export const CardForm = ({ children, title, style }: { children: React.ReactNode; title: string; style?: string }) => {
    return (
        <div className={`border-20 rounded-md bg-base-300 p-3 shadow-md `}>
            <div className=''>
                <h3 className='text-lg font-bold'>{title}</h3>
            </div>
            <div className={`md:grid-col-2 ml-10 grid grid-cols-1 gap-4 lg:grid-cols-3 ${style}`}>{children}</div>
        </div>
    );
};
