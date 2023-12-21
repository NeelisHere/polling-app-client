import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL } from "../constants";

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export const loginAPI = (payload: FormDataType): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig<FormDataType> = {
        method: "POST",
        url: `/auth/login`,
        data: payload
    }
    return api(config)
}

export const registerAPI = (payload: FormDataType): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig<FormDataType> = {
        method: "POST",
        url: `/auth/register`,
        data: payload
    }
    return api(config)
}

