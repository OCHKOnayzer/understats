import { createMutation } from '@tanstack/svelte-query';
import toast from 'svelte-french-toast';
import { get, writable } from 'svelte/store';

import { confirmPassword, currentModal, currentUser, isModalOpen } from '$src/stores/modalStore';

import { authService } from './auth.service';

import type { IAuthForm } from '$src/types/types';

export const useAuth = (isReg: boolean) => {
	const form = writable<IAuthForm>({
		login: '',
		password: ''
	});

	const mutation = createMutation({
		mutationKey: ['auth user'],
		mutationFn: async (data: IAuthForm) => {
			const { password } = get(form);
			if (get(currentModal) === 'reg' && password !== get(confirmPassword)) {
				throw new Error('Пароли не совпадают');
			}

			const response = await toast.promise(authService.main(isReg ? 'register' : 'login', data), {
				loading: 'Вход...',
				success: 'Успешная авторизация!',
				error: 'Ошибка авторизации'
			});

			if (response.data) {
				currentUser.set(response.data);
			}

			return response;
		},
		onSuccess: async (response) => {
			form.update(() => ({
				login: '',
				password: ''
			}));
			currentModal.set('');
			isModalOpen.set(false);

			const profile = await authService.profile();
			if (profile?.data) {
				currentUser.update((user) => ({
					...user,
					...profile.data
				}));
			}
		},
		onError: async (error: any) => {
			if (error.message) {
				toast.error(error.message);
			}
		}
	});

	return {
		form,
		mutation
	};
};
