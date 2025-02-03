import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors'
import { demo } from '$src/constants/constants'
import { closeModal, currentUser } from '$src/stores/modalStore'

import { removeAccessToken, removeDemoToken, setAccessToken, setDemoToken } from './auth-token.service'

import type { IAuthForm, IAuthResponse } from '$src/types/types'

import { goto } from '$app/navigation'
import { isDemoEnabled } from '$src/stores/demo'

let profilePromise: Promise<any> | null = null;

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
				isDemoEnabled.set(false);
				removeDemoToken();
				closeModal();
				goto('/');
			}
			return response;
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async demoAuth() {
		try {
			const response = await axiosClassic<IAuthResponse>({
				url: `${process.env.SERVER_URL}/auth/login`,
				method: 'POST',
				data: { login: demo.login, password: demo.password }
			});

			if (response.data.accessToken) {
				setDemoToken(response.data.accessToken);
				// closeModal(); // закомментировано, чтобы DemoModal оставался открытым
			}
			return response;
		} catch (error: any) {
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
		if (profilePromise) return profilePromise;
		profilePromise = axiosWithAuth.get('/users/me')
			.then(response => {
				if (response.data) {
					currentUser.set(response.data);
				}
				return response;
			})
			.catch(error => {
				return null;
			})
			.finally(() => {
				profilePromise = null;
			});
		return profilePromise;
	}
}

export const authService = new AuthService();
