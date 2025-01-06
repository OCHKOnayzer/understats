import { createQuery } from '@tanstack/svelte-query';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';

import { authService } from './auth.service';

export const useUserProfile = () => {
	const query = createQuery({
		queryKey: ['userProfile'],
		queryFn: async () => {
			const response = await authService.profile();
			if (!response || !response.data) {
				throw new Error(get(t)('error.profile_error'));
			}
			return response.data;
		},
		staleTime: 5 * 60 * 1000,
		retry: false
	});

	return { query };
};
