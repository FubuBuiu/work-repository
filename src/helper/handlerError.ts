import { AxiosError } from 'axios';

interface IError {
    response?: any;
    request?: any;
    message?: string;
    status?: number;
}

export const handlerError = (error: AxiosError<any>): IError => {
    if (error.response) {
        return {
            response: error.response.data,
            message: error?.response?.data.message,
            status: error?.response.status
        };
    }

    if (error.request) {
        return {
            request: error.request
        };
    }

    return {
        message: error.message
    };
};
