import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { IError } from '../types';
import { TOKEN_SESSION_KEY } from './CONSTANTS';
import { loadState } from './LocalStorage';

const Request = axios.create({
	baseURL: process.env.REACT_APP_API_BACKEND,
	headers: { 'Content-Type': 'application/json' },
});

const serializeError = (error: AxiosError): IError => {
	const se = {} as IError;
	const { response } = error;
	if (!response) throw error;
	const { status, statusText, data } = response;
	const { message } = data;
	se.name = 'API ERROR';
	let errorMsg = '';
	try {
		errorMsg = JSON.parse(message).error.msg;
	} catch (e) {
		errorMsg = message;
	}
	se.message = errorMsg || statusText || `API FAILED (${status})`;
	se.code = status.toString();
	se.stack = JSON.stringify(error.toJSON());
	se.data = data?.data;
	return se;
};

const tokenHeaderInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
	const Token = loadState(TOKEN_SESSION_KEY);
	if (!Token) return config;
	config.headers['token'] = Token;
	return config;
};

const onErrorInterceptor = (error: AxiosError): IError => {
	throw serializeError(error);
};

Request.interceptors.request.use(tokenHeaderInterceptor);
Request.interceptors.response.use(undefined, onErrorInterceptor);

interface IAPIResponse<T> {
	status: boolean;
	success: boolean;
	message: string;
	data: T;
}

const extractor = <T>(response: AxiosResponse<IAPIResponse<T>>) => {
	const { status, data, statusText } = response;
	if (status !== 200) throw new Error(statusText);
	if (!data || !data.status) throw new Error(data.message);
	return data.data;
};

interface IGetParams {
	[field: string]: string | number;
}

export const Get = <T>(path: string, params?: Partial<IGetParams>, cancelToken?: CancelToken): Promise<T> =>
	Request.get<IAPIResponse<T>>(path, { params, cancelToken }).then(extractor);

export const Post = <T>(path: string, payload: unknown, cancelToken?: CancelToken): Promise<T> =>
	Request.post<IAPIResponse<T>>(path, payload, { cancelToken }).then(extractor);

export const Put = <T>(path: string, payload: unknown, cancelToken?: CancelToken): Promise<T> =>
	Request.put<IAPIResponse<T>>(path, payload, { cancelToken }).then(extractor);
