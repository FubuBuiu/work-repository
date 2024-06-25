'use client';
import { ThemeProvider } from '@/providers/ThemeProvider';

import NextAuthSessionProvider from './AuthSessionProvieder';
import AxiosProvider from './AxiosProvider';
import StoreProvider from './StoreProvider';

export default function Providers({ children }: any) {
    return (
        <StoreProvider>
            <AxiosProvider>
                <ThemeProvider>
                    <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
                </ThemeProvider>
            </AxiosProvider>
        </StoreProvider>
    );
}
