import axios, { AxiosError } from 'axios';

import type { IApiError } from '$src/types/types';

export class ApiError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'Ошибка';
	}
}

export const handleAxiosError = (error: unknown) => {
	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError<IApiError>;

		if (axiosError.response) {
			const { status, data } = axiosError.response;

			switch (status) {
				case 400:
					throw new ApiError(data.errors ? `${data.errors.map((e) => e.message).join(', ')}` : data.message);
				case 401:
					throw new ApiError('Неверный пароль');
				case 404:
					throw new ApiError('Неверная почта');
				case 409:
					throw new ApiError('Аккаунт с такой почтой уже существует');
				default:
					throw new ApiError(data.message || '');
			}
		}

		throw new ApiError('Network error occurred');
	}

	throw error;
};
