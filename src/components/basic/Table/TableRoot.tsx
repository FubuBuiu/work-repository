import { ReactNode } from 'react';

export function TableRoot({ width, children }: { width?: string; children: ReactNode }) {
    return (
        <div className='rounded-[8px] bg-base-200 p-3' style={{ width }}>
            {children}
        </div>
    );
}
