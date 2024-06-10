import React from 'react';
import { FaTrash } from 'react-icons/fa6';

export const CardAnimated = ({ primaryKey, handlerRemoveElement, children }: { primaryKey: string; handlerRemoveElement: (primaryKey: string) => void; children: React.ReactNode }) => {
    return (
        <div id={primaryKey} className={'animate-fadeRightIn indicator shadow-lg delay-200 duration-300'}>
            <button
                type='button'
                className='badge indicator-item badge-secondary h-5 w-5 border-none p-0 hover:scale-150 hover:bg-success hover:text-gray-200'
                onClick={() => handlerRemoveElement(primaryKey)}
            >
                <FaTrash size={12} />
            </button>
            <div className='grid h-32 w-32 place-items-center overflow-hidden break-words bg-base-300'>
                <div className='w-full overflow-hidden text-ellipsis text-center'>{children}</div>
            </div>
        </div>
    );
};
