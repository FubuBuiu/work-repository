import { HTMLAttributes } from 'react';

interface IModalContentProps extends HTMLAttributes<HTMLDivElement> {}
export default function ModalContent({ className, children }: IModalContentProps) {
    return <div className={`${className}`}>{children}</div>;
}
