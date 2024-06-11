import { HTMLAttributes } from 'react';

interface CardBodyPropsType extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    title?: string;
}
export default function CardBody({ className, children, title, ...props }: CardBodyPropsType) {
    return (
        <div className={`card-body ${className}`} {...props}>
            {title && <h2 className='card-title'>{title}</h2>}
            {children}
        </div>
    );
}
