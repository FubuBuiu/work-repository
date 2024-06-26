'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@/providers/ThemeProvider';

import NextAuthSessionProvider from './AuthSessionProvieder';
import AxiosProvider from './AxiosProvider';
import StoreProvider from './StoreProvider';

export default function Providers({ children }: any) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <StoreProvider>
                <AxiosProvider>
                    <ThemeProvider>
                        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
                    </ThemeProvider>
                </AxiosProvider>
            </StoreProvider>
        </QueryClientProvider>
    );
}
