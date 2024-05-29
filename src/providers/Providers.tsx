'use client';
import { ThemeProvider } from '@/providers/ThemeProvider';

import NextAuthSessionProvider from './AuthSessionProvieder';

export default function Providers({ children }: any) {
    return (
        <ThemeProvider>
            <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </ThemeProvider>
    );
}
