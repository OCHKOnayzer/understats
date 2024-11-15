import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors';

import { removeAccessToken } from './auth-token.service';

import type { IAuthForm, IAuthResponse } from '$src/types/types';

class AuthService {
	async main(type: 'login' | 'register', data: IAuthForm) {
		try {
			const response = await axiosClassic<IAuthResponse>({
				url: `https://dev-api-gateway-v1.sntmq.1keep.bet/api/auth/${type}`,
				method: 'POST',
				data
			});
			return response;
		} catch (error: any) {
			console.error('Request error:', error.message);
			throw new Error('Не удалось подключиться к серверу. Проверьте доступность сервиса.');
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

	async profile() {
		try {
			return await axiosWithAuth.get('/auth/me');
		} catch (error) {
			console.error('Logout error:', error);
			removeAccessToken();
			return null;
		}
	}
}

export const authService = new AuthService();
