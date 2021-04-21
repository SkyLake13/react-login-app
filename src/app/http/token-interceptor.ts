import { AxiosRequestConfig } from "axios";

export function tokenInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
    console.log(` ${config.method} - ${config.url} - ${config.data}`);

    return config;
}