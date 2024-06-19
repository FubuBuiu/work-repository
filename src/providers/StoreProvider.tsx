'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Loading from '@/app/(private-routes)/loading';

import { AppStore, makeStore } from '../store/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={<Loading />} persistor={storeRef.current.__persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}
