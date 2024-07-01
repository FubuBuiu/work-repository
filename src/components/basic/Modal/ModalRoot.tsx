import { Dispatch, HTMLAttributes, ReactNode, SetStateAction, useEffect } from 'react';

import ModalProvider from './ModalProvider';

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
    visibility: boolean;
    setVisibility: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}

export default function ModalRoot({ className, visibility, setVisibility, children }: IModalProps) {
    useEffect(() => {
        if (visibility) {
            (document.getElementById('my_modal') as any).showModal();
        }
    }, [visibility]);
    return (
        <ModalProvider setVisibility={setVisibility} visibility={visibility}>
            <dialog id='my_modal' className='modal'>
                <div className={`min-w-none modal-box max-w-none ${className}`}>{children}</div>
                <form method='dialog' className='modal-backdrop'>
                    <button className='cursor-default' onClick={() => setVisibility(false)}></button>
                </form>
            </dialog>
        </ModalProvider>
    );
}
