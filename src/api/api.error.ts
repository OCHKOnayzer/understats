import axios, { AxiosError } from 'axios';

import type { IApiError } from '$src/types/types';

export class ApiError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'ApiError';
	}
}

export const handleAxiosError = (error: unknown) => {
	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError<IApiError>;

		if (axiosError.response) {
			const { status, data } = axiosError.response;

			switch (status) {
				case 400:
					throw new ApiError(data.errors ? `Validation failed: ${data.errors.map((e) => e.message).join(', ')}` : data.message);
				case 401:
					throw new ApiError('Authentication required');
				case 404:
					throw new ApiError('Resource not found');
				case 409:
					throw new ApiError('Resource already exists');
				default:
					throw new ApiError(data.message || 'An unexpected error occurred');
			}
		}

		throw new ApiError('Network error occurred');
	}

	throw error;
};
