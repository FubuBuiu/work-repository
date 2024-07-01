import { HTMLAttributes, ReactNode } from 'react';

interface IModalHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export default function ModalHeader({ className, children }: IModalHeaderProps) {
    return <div className={`text-lg font-bold ${className}`}>{children}</div>;
}
