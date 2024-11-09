import axios, { type CreateAxiosDefaults } from 'axios';

import { handleAxiosError } from './api.error';
import { getContentType } from './api.helper';
import { getAccessToken, removeAccessToken } from './services/auth/auth-token.service';

const options: CreateAxiosDefaults = {
	baseURL: process.env.SERVER_URL,
	headers: getContentType(),
	withCredentials: true
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

// Request interceptor
axiosWithAuth.interceptors.request.use(
	(config) => {
		const accessToken = getAccessToken();
		if (config?.headers && accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => Promise.reject(handleAxiosError(error))
);

// Response interceptor
axiosWithAuth.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			removeAccessToken();
			window.location.href = '/auth/login';
			return Promise.reject(error);
		}

		return Promise.reject(handleAxiosError(error));
	}
);

// Add basic error handling to classic axios instance
axiosClassic.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(handleAxiosError(error))
);

export { axiosClassic, axiosWithAuth };
