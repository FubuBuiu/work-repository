import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { setLoading } from '@/store/loading/loadingSlice';

import type { AppDispatch, RootState } from '../store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useLoading = () => {
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector(state => state.loading);

    const changeLoadingState = (loading: boolean) => dispatch(setLoading(loading));
    return {
        loading,
        changeLoadingState
    };
};
