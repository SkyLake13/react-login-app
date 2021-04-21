import { Http } from "./http";
import { URL } from "../../env";
import { tokenInterceptor } from "./token-interceptor";
import { responseInterceptor } from "./response-interceptor";

export default function createHttpClient(): Http {
    const http = new Http(URL);
    http.addRequestInterceptors(tokenInterceptor);
    http.addResponseInterceptors(responseInterceptor);

    return http;
}