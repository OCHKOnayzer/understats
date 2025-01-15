import { createQuery } from '@tanstack/svelte-query';
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

import { getAccessToken } from './auth-token.service';
import { authService } from './auth.service';

export function useUserProfile() {
	const query = createQuery({
		queryKey: ['profile'],
		queryFn: async () => {
			const token = getAccessToken();
			if (!token) {
				return null;
			}
			const response = await authService.profile();
			if (!response || !response.data) {
				throw new Error(get(t)('error.profile_error'));
			}
			return response.data;
		},
		enabled: !!getAccessToken(),
		staleTime: 5 * 60 * 1000,
		retry: false
	});

	return { query };
}
