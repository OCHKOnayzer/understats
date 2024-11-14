import { createMutation } from '@tanstack/svelte-query';
import toast from 'svelte-french-toast';
import { writable } from 'svelte/store';

import { authService } from './auth.service';

import type { IAuthForm } from '$src/types/types';

export const useAuth = (isReg: boolean) => {
	const form = writable<IAuthForm>({
		login: '',
		password: ''
	});

	const mutation = createMutation({
		mutationKey: ['auth user'],
		onMutate: async (data: IAuthForm) => {
			authService.main(isReg ? 'register' : 'login', data);
		},
		onSuccess: (data) => {
			form.update(() => ({
				login: '',
				password: ''
			}));
			console.log(data);
			toast.success('Успешная авторизация');
		},
		onError: (error) => {
			if (error.message) {
				toast.error(error.message);
			} else {
				toast.error('Ошибка при авторизации');
			}
		}
	});

	return {
		form,
		mutation
	};
};
