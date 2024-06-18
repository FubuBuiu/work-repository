'use client';
import { ReactNode } from 'react';

export function TableRoot({ children, className }: { className?: string; children: ReactNode }) {
    return <div className={`rounded-[8px] bg-base-200 p-3 ${className}`}>{children}</div>;
}
