import { HTMLAttributes, ReactNode } from 'react';

interface CardRootPropsType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    outlined?: boolean;
    glass?: boolean;
}
export default function CardRoot({ children, className, outlined, glass, ...props }: CardRootPropsType) {
    return (
        <div className={`card h-fit ${glass ? 'glass' : 'bg-base-100'} ${outlined ? '' : 'shadow-xl'} ${className}`} {...props}>
            {children}
        </div>
    );
}
