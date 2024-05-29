import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                login: { label: 'Login', type: 'text' },
                password: { label: 'Senha', type: 'password' }
            },
            async authorize(credentials) {
                const response = await fetch(process.env.NEXTAUTH_URL ?? '', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        login: credentials?.login,
                        senha: credentials?.password
                    })
                });

                const user = await response.json();

                if (user && response.ok) {
                    return user;
                }

                return null;
            }
        })
    ],
    pages: {
        signIn: '/',
        signOut: '/'
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user);
            return token;
        },
        async session({ session, token }) {
            session = token.user as any;
            return session;
        }
    }
};
