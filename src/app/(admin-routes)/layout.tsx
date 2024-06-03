import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { SideBar } from '@/components/SideBar';

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
            <div className='max-h-screen flex-1 overflow-y-scroll p-8'>{children}</div>
        </div>
    );
}
