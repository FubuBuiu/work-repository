'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import logoHome from '@/assets/auth/logoSiagro.png';
import Alert from '@/components/basic/Alert';
import Button from '@/components/basic/Button';
import TextField from '@/components/basic/TextField';

type LoginFormDataType = {
    login: string;
    password: string;
};

export default function AuthRoutes() {
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const validations = zod.object({ login: zod.string().min(1, { message: 'Campo obrigatório' }), password: zod.string().min(1, { message: 'Campo obrigatório' }) });
    const { control, handleSubmit } = useForm({ resolver: zodResolver(validations), mode: 'onSubmit' });

    const router = useRouter();

    async function onSubmit({ login, password }: LoginFormDataType) {
        const result = await signIn('credentials', {
            login,
            password,
            redirect: false
        });

        if (result?.error) {
            setShowAlert(true);
            return;
        }

        router.replace('/home');
    }

    return (
        <div className='flex h-full w-full flex-col items-center gap-6 bg-secondary'>
            <div className='relative h-4/5 w-full bg-blue-400 bg-background-login-page'>
                <div className='absolute bottom-0 -mt-[180px] h-3/4 w-full bg-gradient-to-b from-transparent to-secondary'></div>
            </div>
            <div className=' absolute bottom-0 top-0 flex w-[350px] flex-col items-center justify-center gap-2 p-2'>
                <Image src={logoHome} alt='Logo' priority width='250' />
                <h6 className='text-[10px] text-white'>Sistema Integrado de Gestão de Agrotóxicos</h6>
                <form className='w-full' onSubmit={handleSubmit(data => onSubmit(data as LoginFormDataType))}>
                    <TextField name='login' variant='filled' placeholder='Login' control={control} />
                    <TextField name='password' variant='filled' placeholder='Senha' type='password' control={control} />
                    <Button text='ENTRAR' block type='submit' />
                </form>
            </div>
            <Alert className='w-[400px]' variant='error' message='Login/Senha incorreto' isVisible={showAlert} setIsVisible={setShowAlert} />
        </div>
    );
}
