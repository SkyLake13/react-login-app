import { AxiosResponse } from "axios";

export function responseInterceptor(response: AxiosResponse): AxiosResponse {
    console.log(` ${response.statusText} - ${response.config.url} - ${response.data}`);

    return response;
}