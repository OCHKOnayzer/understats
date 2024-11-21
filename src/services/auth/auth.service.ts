import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors';
import { currentUser } from '$src/stores/modalStore';

import { removeAccessToken, setAccessToken } from './auth-token.service';

import type { IAuthForm, IAuthResponse } from '$src/types/types';

class AuthService {
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
			console.log(error);
			throw new Error(error);
		}
	}

	async logout() {
		try {
			await axiosWithAuth.post('/auth/logout');
			removeAccessToken();
			currentUser.set(null);
		} catch (error) {
			removeAccessToken();
			currentUser.set(null);
		}
	}

	async profile() {
		try {
			const response = await axiosWithAuth.get('/auth/me');
			if (response.data) {
				currentUser.set(response.data);
			}
			return response;
		} catch (error) {
			return null;
		}
	}
}

export const authService = new AuthService();
