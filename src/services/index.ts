import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const baseAPI = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const viaCepAPI = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    headers: {
        'Content-Type': 'application/json'
    }
});
