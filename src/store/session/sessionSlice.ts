import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export interface SessionState {
    sidebarOpen: boolean;
    theme: 'light' | 'dark';
}

const initialState: SessionState = {
    sidebarOpen: false,
    theme: 'light'
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        toggleSidebar: state => {
            state.sidebarOpen = !state.sidebarOpen;
        },
        changeTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload;
        }
    }
});

export const { toggleSidebar, changeTheme } = sessionSlice.actions;

export default sessionSlice.reducer;
