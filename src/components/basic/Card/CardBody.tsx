import { HTMLAttributes } from 'react';

export default function CardBody({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`card-body gap-0 !p-0  ${className}`} {...props}>
            {children}
        </div>
    );
}
