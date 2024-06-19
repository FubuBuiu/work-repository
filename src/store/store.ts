import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loadingSlice from './loading/loadingSlice';
import sessionSlice from './session/sessionSlice';

const persistConfig = {
    key: 'siagro',
    storage,
    whitelist: ['session']
};

const rootReducer = combineReducers({
    session: sessionSlice,
    loading: loadingSlice
});

const makeConfiguredStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
    });

export const makeStore = () => {
    const isServer = typeof window === 'undefined';
    if (isServer) {
        return makeConfiguredStore();
    } else {
        const persistedReducer = persistReducer(persistConfig, rootReducer);
        let store: any = configureStore({
            reducer: persistedReducer
        });
        store.__persistor = persistStore(store);
        return store;
    }
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
