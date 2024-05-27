'use client';
import Button from '@/components/basic/Button';
import Image from 'next/image';
import React from 'react';
import notFound from '@/assets/404/not-found.png';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
    return (
        <div className='flex h-screen flex-col items-center justify-center gap-y-5'>
            <Image src={notFound} alt='404' width='0' priority height='0' sizes='100vw' quality={100} />
            <h6 className='text-6xl font-bold text-error'>Pagina não Encontrada</h6>
            <p>Não encontramos a página que você procura... !</p>
            <Link href='/'>
                <Button text='Voltar para o Início' className='bg-primary' />
            </Link>
        </div>
    );
};
export default NotFoundPage;
