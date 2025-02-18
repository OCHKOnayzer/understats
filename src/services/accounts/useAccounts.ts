import { createQuery } from '@tanstack/svelte-query';
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

import { isDemoEnabled } from '$src/stores/demo';

import { getAccessToken, getDemoToken } from '../auth/auth-token.service';

import { accountService } from './account.service';

export function useAccounts() {
	const query = createQuery({
		queryKey: ['accounts'],
		queryFn: async () => {
			const token = get(isDemoEnabled) ? getDemoToken() : getAccessToken();
			if (!token) {
				return null;
			}
			const response = await accountService.getAccounts();
			if (!response) {
				throw new Error(get(t)('error.profile_error'));
			}
			return response;
		},
		enabled: !!(get(isDemoEnabled) ? getDemoToken() : getAccessToken()),
		staleTime: 30000,
		retry: 1
	});
	return { query };
}
