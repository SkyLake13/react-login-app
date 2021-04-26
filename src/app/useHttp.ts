import axios, { AxiosResponse } from 'axios';

const http = axios.create({
    baseURL: 'https://auth-service-900.azurewebsites.net'
});

export default function useHttp(route: string) {
    const get = <T>(): Promise<AxiosResponse<T>> => {
        return http.get<T>(`${route}`).then((res) => res);
    }

    const post = <T>(body: any): Promise<AxiosResponse<T>> => {
        return http.post<T>(`${route}`, body).then((res) => res);
    }

    return { get, post };
}