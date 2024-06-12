'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaFolderPlus, FaList, FaRegFolder } from 'react-icons/fa6';

export const Breadcrumbs = () => {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(path => path);

    const IconRender = {
        cadastro: <FaFolderPlus className='mr-1' />,
        listar: <FaList className='mr-1' />,
        detalhes: <FaRegFolder className='mr-1' />
    };
    return (
        <div className='breadcrumbs text-sm'>
            <ul>
                {paths.map((path, index) => {
                    const generateEnumIcon = index == 0 ? 'listar' : path.indexOf('cadastro') > -1 ? 'cadastro' : 'detalhes';
                    return (
                        <li key={index}>
                            <Link href={`/${paths.slice(0, index + 1).join('/')}`}>
                                {IconRender[generateEnumIcon] || path}
                                {path}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
