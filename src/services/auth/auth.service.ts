import { axiosClassic, axiosWithAuth } from '$src/api/api.interceptors';
import { demo } from '$src/constants/constants';
import { closeModal, currentUser } from '$src/stores/modalStore';

import { removeAccessToken, removeDemoToken, setAccessToken, setDemoToken } from './auth-token.service';

import type { IAuthForm, IAuthResponse } from '$src/types/types';

import { goto } from '$app/navigation';

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
				closeModal();
				goto('/');
			}
			return response;
		} catch (error: any) {
			throw new Error(error);
		}
	}

	// async demoAuth() {
	// 	try {
	// 		const response = await axiosClassic<IAuthResponse>({
	// 			url: `${process.env.SERVER_URL}/auth/login`,
	// 			method: 'POST',
	// 			data: { login: demo.login, password: demo.password }
	// 		});

	// 		if (response.data.accessToken) {
	// 			setDemoToken(response.data.accessToken);
	// 			closeModal();
	// 			goto('/');
	// 		}
	// 		return response;
	// 	} catch (error: any) {
	// 		throw new Error(error);
	// 	}
	// }

	async removeDemoToken() {
		try {
			removeDemoToken();
		} catch (error) {
			removeDemoToken();
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
			const response = await axiosWithAuth.get('/users/me');

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
