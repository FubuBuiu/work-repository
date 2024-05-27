import React from 'react';

export default function AdminPage() {
    return (
        <div className='flex flex-1 items-center justify-center'>
            <div className='h-20 w-20 bg-primary text-center'>primary</div>
            <div className='h-20 w-20 bg-secondary text-center'>secondary</div>
            <div className='h-20 w-20 bg-accent text-center'>accent</div>
            <div className='h-20 w-20 bg-neutral text-center text-white'>neutral</div>
            <div className='h-20 w-20 bg-base-100 text-center'>base-100</div>
            <div className='h-20 w-20 bg-base-200 text-center'>base-200</div>
            <div className='h-20 w-20 bg-base-300 text-center'>base-300</div>
            <div className='h-20 w-20 bg-info text-center'>base-info</div>
            <div className='h-20 w-20 bg-success text-center'>success</div>
            <div className='h-20 w-20 bg-warning text-center'>warning</div>
            <div className='h-20 w-20 bg-error text-center'>error</div>
        </div>
    );
}
