import { HTMLAttributes } from 'react';

interface CardRootPropsType extends HTMLAttributes<HTMLDivElement> {
    glass?: boolean;
}

export default function CardRoot({ children, className, glass, ...props }: CardRootPropsType) {
    return (
        <div className='w-fit'>
            <div className={`card gap-2 shadow-md  ${glass ? 'glass' : 'bg-base-100'} ${className} ${className?.includes('card-compact') ? 'p-4' : 'p-8'}`} {...props}>
                {children}
            </div>
        </div>
    );
}
