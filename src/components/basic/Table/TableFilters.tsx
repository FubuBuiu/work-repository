import { ReactNode } from 'react';

export function TableFilters({ children }: { children: ReactNode }) {
    return <div className='mb-3 w-full'>{children}</div>;
}
