'use client';
import { ThemeProvider } from '@/providers/ThemeProvider';

import NextAuthSessionProvider from './AuthSessionProvieder';
import StoreProvider from './StoreProvider';

export default function Providers({ children }: any) {
    return (
        <StoreProvider>
            <ThemeProvider>
                <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
            </ThemeProvider>
        </StoreProvider>
    );
}
