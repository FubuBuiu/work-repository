'use client';
import React from 'react';

import { useLoading } from '@/hooks/useLoading';

const Loading = () => {
    const { loading: loadingState } = useLoading();

    return (
        <>
            {loadingState && (
                <div className='absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50'>
                    <div className='aspect-square h-32 w-32 animate-spin rounded-full bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 p-3 drop-shadow-2xl md:h-48 md:w-48'>
                        <div className='background-blur-md h-full w-full rounded-full bg-gray-900 dark:bg-zinc-900'></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Loading;
