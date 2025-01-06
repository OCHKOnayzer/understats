import axios, { AxiosError } from 'axios';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';

import type { IApiError } from '$src/types/types';

export class ApiError extends Error {
	constructor(message: string) {
		super(message);
		this.name = get(t)('error.error_title');
	}
}

export const handleAxiosError = (error: unknown) => {
	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError<IApiError>;

		if (axiosError.response) {
			const { data } = axiosError.response;

			switch (data.message) {
				case 'User not found':
					throw new ApiError(get(t)('error.user_not_found'));
				case 'Invalid credentials':
					throw new ApiError(get(t)('error.pass_invalid'));
				case 'Email not found':
					throw new ApiError(get(t)('error.email_invalid'));
				case 'Validation failed':
					if (Array.isArray(data.errors) && data.errors.length > 0) {
						const errorMessages = data.errors.map((err) => {
							switch (err.code) {
								case 'INVALID_LOGIN':
									return get(t)('error.login_is_current');
								case 'PASSWORD_TOO_SHORT':
									return get(t)('error.password_length');
								default:
									return get(t)('error.unknown_field_error'), `"${err.field}": ${err.message}`;
							}
						});
						throw new ApiError(errorMessages.join('\n'));
					} else {
						throw new ApiError(get(t)('error.unknown_valid_error'));
					}
				case 'User already exists':
					throw new ApiError(get(t)('error.user_already'));
				default:
					throw new ApiError(data.message || '');
			}
		}
		throw new ApiError(get(t)('error.network_error_occurred'));
	}

	throw error;
};
