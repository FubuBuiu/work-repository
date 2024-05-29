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
        <div className='flex'>
            <SideBar />
            {children}
        </div>
    );
}
