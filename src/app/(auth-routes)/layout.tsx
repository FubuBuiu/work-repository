import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/authConfig';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

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
