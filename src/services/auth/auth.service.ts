import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors';
import { currentUser } from '$src/stores/modalStore';

import { removeAccessToken, setAccessToken } from './auth-token.service';

import type { IAuthForm, IAuthResponse } from '$src/types/types';

class AuthService {
	private profileCache: any = null;
	async main(type: 'login' | 'register', data: IAuthForm) {
		try {
			const response = await axiosClassic<IAuthResponse>({
				url: `${process.env.SERVER_URL}/auth/${type}`,
				method: 'POST',
				data
			});

			if (response.data.accessToken) {
				setAccessToken(response.data.accessToken);
				return response;
			}
		} catch (error: any) {
			const errorMessage = error.response?.data?.message || 'Не удалось подключиться к серверу. Проверьте доступность сервиса.';
			throw new Error(errorMessage);
		}
	}

	async logout() {
		try {
			await axiosWithAuth.post('/auth/logout');
			removeAccessToken();
			this.profileCache = null;
			currentUser.set(null);
		} catch (error) {
			removeAccessToken();
			this.profileCache = null;
			currentUser.set(null);
		}
	}

	async profile() {
		if (this.profileCache) {
			return this.profileCache;
		}

		try {
			const response = await axiosWithAuth.get('/auth/me');
			if (response.data) {
				currentUser.set(response.data);
				this.profileCache = response;
			}
			return response;
		} catch (error) {
			removeAccessToken();
			this.profileCache = null;
			return null;
		}
	}
}

export const authService = new AuthService();
