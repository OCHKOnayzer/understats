import { createMutation } from '@tanstack/svelte-query';
import toast from 'svelte-french-toast';
import { t } from 'svelte-i18n';
import { get, writable } from 'svelte/store';

import { accountStore } from '$src/stores/accountStore';
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
				const pass_dmatch = get(t)('error.pass_dmatch');
				throw new Error(pass_dmatch);
			}

			const response = await toast.promise(authService.main(isReg ? 'register' : 'login', data), {
				loading: get(t)('error.loading'),
				success: get(t)('error.success_loading_auth'),
				error: get(t)('error.auth_error')
			});

			if (response.data) {
				currentUser.set(response.data);
				accountStore.setData(data);
				localStorage.setItem('account', JSON.stringify(data));
				console.log(get(accountStore));
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
