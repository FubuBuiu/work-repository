import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/authConfig';

interface IProps {
    children: React.ReactNode;
}

export default async function PrivateLayout({ children }: IProps) {
    const session = await getServerSession(nextAuthOptions);

    if (session) {
        redirect('/home');
    }
    return <>{children}</>;
}
