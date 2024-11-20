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
			console.log(axiosError.response);

			switch (data.message) {
				case 'User not found':
					throw new ApiError('Пользователь не найден');
				case 'Invalid credentials':
					throw new ApiError('Неверный пароль');
				case 'Email not found':
					throw new ApiError('Неверная почта');
				case 'Validation failed':
					if (Array.isArray(data.errors) && data.errors.length > 0) {
						const errorMessages = data.errors.map((err) => {
							switch (err.code) {
								case 'INVALID_LOGIN':
									return 'Логин должен быть действительным адресом электронной почты';
								case 'PASSWORD_TOO_SHORT':
									return 'Пароль должен быть не менее 6 символов';
								default:
									return `Неизвестная ошибка в поле "${err.field}": ${err.message}`;
							}
						});
						throw new ApiError(errorMessages.join('\n'));
					} else {
						throw new ApiError('Валидация не удалась, но подробностей нет.');
					}
				case 'User already exists':
					throw new ApiError('Пользователь уже существует');
				default:
					throw new ApiError(data.message || '');
			}
		}

		throw new ApiError('Network error occurred');
	}

	throw error;
};
