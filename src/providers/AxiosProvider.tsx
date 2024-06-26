'use client';

import { handlerError } from '@/helper/handlerError';
import { useLoading } from '@/hooks/useLoading';
import { baseAPI } from '@/services';

const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
    const { changeLoadingState } = useLoading();

    baseAPI.interceptors.request.use(config => {
        changeLoadingState(true);
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    baseAPI.interceptors.response.use(
        response => {
            changeLoadingState(false);
            return response;
        },
        error => {
            changeLoadingState(false);
            return Promise.reject(handlerError(error));
        }
    );

    return <>{children}</>;
};

export default AxiosProvider;
