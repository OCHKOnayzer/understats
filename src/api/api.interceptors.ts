import axios, { type CreateAxiosDefaults } from 'axios';

import { getAccessToken, removeAccessToken } from '$src/services/auth/auth-token.service';
import { betsTableStore } from '$src/stores/betsTableStore';

import { ApiError, handleAxiosError } from './api.error';
import { getContentType } from './api.helper';

const options: CreateAxiosDefaults = {
	baseURL: process.env.SERVER_URL,
	headers: getContentType(),
	withCredentials: true
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use(
	(config) => {
		const accessToken = getAccessToken();
		if (config?.headers && accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		setLoading(true);
		return config;
	},
	(error) => {
		setLoading(false);
		return Promise.reject(handleAxiosError(error));
	}
);

axiosWithAuth.interceptors.response.use(
	(response) => {
		setLoading(false);
		return response;
	},
	async (error) => {
		setLoading(false);
		const originalRequest = error.config;

		if (error.code === 'ECONNABORTED') {
			return Promise.reject(new ApiError('Request timeout. Please try again.'));
		}

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			removeAccessToken();
			return Promise.reject(error);
		}

		return Promise.reject(handleAxiosError(error));
	}
);

axiosClassic.interceptors.response.use(
	(response) => {
		setLoading(false);
		return response;
	},
	(error) => {
		setLoading(false);
		if (error.code === 'ECONNABORTED') {
			return Promise.reject(new ApiError('Request timeout. Please try again.'));
		}
		return Promise.reject(handleAxiosError(error));
	}
);

const setLoading = (isLoading: boolean) => {
	betsTableStore.setLoading(isLoading);
};

export { axiosClassic, axiosWithAuth };
