import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors';

import { removeAccessToken, setAccessToken } from './auth-token.service';

import type { IAuthForm, IAuthResponse } from '$src/types/types';

class AuthService {
	async main(type: 'login' | 'register', data: IAuthForm) {
		try {
			const response = await axiosClassic<IAuthResponse>({
				url: `${process.env.API_URL}/auth/${type}`,
				method: 'POST',
				data
			});

			if (response.data.accessToken) {
				setAccessToken(response.data.accessToken);
			}

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async logout() {
		try {
			await axiosWithAuth.post('/auth/logout');
			removeAccessToken();
		} catch (error) {
			console.error('Logout error:', error);

			removeAccessToken();
		}
	}
}

export const authService = new AuthService();
