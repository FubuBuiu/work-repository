import { HTMLAttributes } from 'react';

import Button from '../Button';
import { useModal } from './ModalProvider';

interface IModalActionsProps extends HTMLAttributes<HTMLDivElement> {}
export default function ModalActions({ className, children }: IModalActionsProps) {
    const { setVisibility } = useModal();
    return (
        <div className={`modal-action ${className}`}>
            {children}
            <form method='dialog' className=''>
                <Button text='Fechar' size='small' onClick={() => setVisibility(false)} />
            </form>
        </div>
    );
}
