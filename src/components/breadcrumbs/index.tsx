'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaFolderPlus, FaRegFolder } from 'react-icons/fa6';

export const Breadcrumbs = () => {
    //pegando o caminho da pagina atual e exibindo na tela em forma de breadcrumbs usando o nextRouter

    const pathname = usePathname();
    const paths = pathname.split('/').filter(path => path);

    return (
        <div className='breadcrumbs text-sm'>
            <ul>
                {paths.map((path, index) => {
                    return (
                        <li key={index}>
                            <Link href={`/${paths.slice(0, index + 1).join('/')}`}>
                                {index == 0 ? <FaRegFolder className='mr-1' /> : path.indexOf('cadastro') !== -1 ? <FaFolderPlus className='mr-1' /> : <FaRegFolder className='mr-1' />}
                                {path}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
