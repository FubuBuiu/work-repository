'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';
import logoHome from '@/assets/auth/logoSiagro.png';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthRoutes() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const router = useRouter();

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        const result = await signIn('credentials', {
            login: email,
            senha: password,
            redirect: false
        });

        if (result?.error) {
            return;
        }

        router.replace('/home');
    }

    return (
        <div className='auth-container flex h-screen w-full flex-col items-center justify-center'>
            <Link href={'/playground'}>PLAYGROUND</Link>
            <form className='flex w-[400px] flex-col items-center gap-3' onSubmit={handleSubmit}>
                <Image src={logoHome} alt='Logo' width={200} height={200} />
                <h6 className='text-[9px] text-white'>Sistema Integrado de Gestão de Agrotóxicos</h6>
                <input className='h-12 w-full rounded-md border border-gray-300 bg-transparent p-2' type='text' name='email' placeholder='Digite seu e-mail' onChange={e => setEmail(e.target.value)} />
                <input
                    className='h-12 w-full rounded-md border border-gray-300 bg-transparent p-2'
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={e => setPassword(e.target.value)}
                />

                <button type='submit' className='h-12 w-full rounded-md bg-gray-300 text-sm font-medium uppercase text-gray-800 hover:bg-gray-400'>
                    acessar o sistema
                </button>
            </form>
        </div>
    );
}
