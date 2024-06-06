'use client';

import Image from 'next/image';
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

import onlyLogo from '../../assets/auth/logo.png';
import imageExtend from '../../assets/auth/logoSiagro.png';
import Button from '../basic/Button';
import { useSideBar } from './useSideBar';

const SideBar = () => {
    const { listItems, collapsed, itemActive, handlerCollapsed, handlerItemActive, logout } = useSideBar();

    return (
        <aside
            className={`flex h-screen w-14 flex-col items-center pt-8 ${collapsed ? 'min-w-16' : 'min-w-80'} transition-max-height overflow-hidden 
            rounded-e-md bg-primary text-primary-content duration-500 ease-in-out`}
        >
            <header>
                <button type='button' className='sidebar-burger' onClick={handlerCollapsed}>
                    <Image src={collapsed ? onlyLogo : imageExtend} alt='Logo' width='0' priority height='0' sizes='100vw' className={collapsed ? 'h-[43.5px] w-full' : 'h-[43.5px] w-full'} />
                    <p className='divide-y-2'></p>
                </button>
            </header>
            <div className='divider'></div>
            <nav className='sidebar-nav mt-4  flex-1 px-6 py-4'>
                <ul className='flex flex-col gap-y-5'>
                    {listItems.map((item, index) => (
                        <li key={index}>
                            <div
                                className={`flex cursor-pointer items-center justify-center rounded-lg px-3 hover:bg-secondary hover:text-white hover:shadow-lg hover:duration-700 focus:translate-x-2 focus:bg-gray-800 focus:text-white focus:shadow-lg focus:outline-none ${item.title === itemActive ? 'bg-secondary text-primary-content shadow-lg' : ''} ${collapsed ? 'p-2 hover:translate-x-1' : 'hover:translate-x-2'}`}
                                onClick={() => handlerItemActive(item.title)}
                                {...(collapsed ? { title: `${item.title}` } : {})}
                            >
                                {React.createElement(item.icon, { className: `items-center ${collapsed ? 'text-xl' : ''}` })}
                                <button
                                    type='button'
                                    className={`sidebar-nav-item ${!collapsed ? 'ml-2 flex' : 'hidden'} w-full transform items-center gap-2 px-4 py-2 text-left text-lg transition-colors duration-200 ease-in-out`}
                                >
                                    <span>{item.title}</span>
                                </button>
                            </div>
                            {itemActive === item.title && (
                                <>
                                    {collapsed && <p className='clip-path-1 absolute -mt-[20px] ml-[54px] h-5 w-5 rotate-45 transform bg-secondary'></p>}
                                    <ul className={collapsed ? 'absolute z-50 -mt-6 ml-16 flex flex-col gap-y-3 rounded-b-xl rounded-r-xl bg-secondary p-4 text-white' : 'flex flex-col gap-y-3'}>
                                        {item.items.map((subItem, indexDelay) => (
                                            <li
                                                key={subItem.title}
                                                className={`${collapsed ? 'ml-2' : 'ml-8'} flex animate-slideIn items-center text-base opacity-0`}
                                                /* @ts-ignore */
                                                style={{ '--delay': indexDelay * 0.09 + 's' }}
                                            >
                                                {React.createElement(subItem.icon, { className: 'mr-2' })}
                                                <a href={subItem.url}>{subItem.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <Button text='Sair' onClick={logout} className='btn-error w-full rounded-none p-0 duration-500' variant={collapsed ? 'icon' : undefined} startIcon icon={{ icon: FaSignOutAlt }} />
        </aside>
    );
};

export { SideBar };
