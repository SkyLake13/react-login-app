import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class Http {

    public requestInterceptors = new Map<string, number>();
    public responseInterceptors = new Map<string, number>();

    public get baseUrl(): string | undefined {
        return this.instance.defaults.baseURL;
    };

    public instance: AxiosInstance;

    constructor(baseUrl: string) {
        this.instance = axios.create({
            baseURL: baseUrl
        });
    }

    public get<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.get<T>(path, config);
    }

    public post<T, R>(path: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.instance.post<T, AxiosResponse<R>>(path, data, config);
    }

    public options<T, R>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.instance.options<T, AxiosResponse<R>>(path, config);
    }

    public put<T, R>(path: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.instance.put<T, AxiosResponse<R>>(path, data, config);
    }

    public patch<T, R>(path: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return this.instance.patch<T, AxiosResponse<R>>(path, data, config);
    }

    public head<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.head<T>(path, config);
    }

    public delete<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.delete<T>(path, config);
    }

    public addRequestInterceptors(interceptor: (config: AxiosRequestConfig) => AxiosRequestConfig): void {
        const id = this.instance.interceptors.request.use(interceptor);

        this.requestInterceptors.set(interceptor.name, id);
    }

    public addResponseInterceptors(interceptor: (response: AxiosResponse) => AxiosResponse): void {
        const id = this.instance.interceptors.response.use(interceptor);

        this.responseInterceptors.set(interceptor.name, id);
    }
}