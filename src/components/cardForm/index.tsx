import React from 'react';
import { twMerge } from 'tailwind-merge';

enum Background {
    Primary = 'bg-primary',
    Secondary = 'bg-secondary',
    Success = 'bg-success',
    Warning = 'bg-warning',
    Error = 'bg-error',
    Info = 'bg-info',
    Light = 'bg-light',
    Dark = 'bg-dark',
    Base100 = 'bg-base-100',
    Base200 = 'bg-base-200',
    Base300 = 'bg-base-300'
}

interface CardFormProps {
    children: React.ReactNode;
    title: string;
    style?: string;
    background?: keyof typeof Background;
}

export const CardForm: React.FC<CardFormProps> = ({ children, title, style, background }) => {
    const styleMerge = twMerge('md:grid-col-2 ml-10 grid grid-cols-1 gap-4 lg:grid-cols-3', style);
    const styleMergeBG = twMerge('border-20 rounded-md bg-base-200 p-3 shadow-md ', Background[background || 'Base200']);

    const listTitle = title.split(' ');
    return (
        <div className={styleMergeBG}>
            <div>
                <h3 className='text-lg font-bold text-gray-400'>
                    {listTitle.map((word, index) => (
                        <React.Fragment key={index}>
                            <span className='text-xl text-primary'>{word.charAt(0)}</span>
                            {word.slice(1) + ' '}
                        </React.Fragment>
                    ))}
                </h3>
            </div>
            <div className={styleMerge}>{children}</div>
        </div>
    );
};
