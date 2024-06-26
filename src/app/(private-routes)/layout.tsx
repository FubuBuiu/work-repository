import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { Breadcrumbs } from '@/components/breadcrumbs';
import { SideBar } from '@/components/SideBar';

import Loading from './loading';

interface IProps {
    children: React.ReactNode;
}

export default async function PrivateLayout({ children }: IProps) {
    const session = await getServerSession();
    if (!session) {
        redirect('/');
    }

    return (
        <div className='flex max-h-[100vh]'>
            <SideBar />
            <div className='max-h-screen flex-1 overflow-y-scroll p-8'>
                <Loading />
                <Breadcrumbs />
                {children}
            </div>
        </div>
    );
}
