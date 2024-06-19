import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { changeTheme, toggleSidebar } from '@/store/session/sessionSlice';

import type { AppDispatch, RootState } from '../store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSession = () => {
    const dispatch = useAppDispatch();
    const { sidebarOpen, theme } = useAppSelector(state => state.session);

    const changeStateSidebar = () => dispatch(toggleSidebar());
    const changeThemeState = (theme: 'light' | 'dark') => dispatch(changeTheme(theme));
    return {
        sidebarOpen,
        theme,
        changeStateSidebar,
        changeThemeState
    };
};
