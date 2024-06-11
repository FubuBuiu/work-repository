'use client';
import React from 'react';

export default function AdminPage() {
    return (
        <div className=' flex w-full flex-wrap overflow-y-auto p-8'>
            <button className='btn' onClick={() => document?.getElementById('my_modal_4')?.showModal()}>
                open modal
            </button>
            <dialog id='my_modal_4' className='modal'>
                <div className='modal-box w-11/12 max-w-5xl'>
                    <h3 className='text-lg font-bold'>Hello!</h3>
                    <p className='py-4'>Click the button below to close</p>
                    <div className='modal-action'>
                        <form method='dialog'>
                            {/* if there is a button, it will close the modal */}
                            <button className='btn'>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
