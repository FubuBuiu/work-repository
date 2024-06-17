import { HTMLAttributes } from 'react';

export default function CardHeader({ className, children }: HTMLAttributes<HTMLDivElement>) {
    return <div className={`card-title ${className}`}>{children}</div>;
}
